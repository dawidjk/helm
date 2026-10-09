import {readFileSync, readdirSync, realpathSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import ts from 'typescript';

// Astryx ships one stylesheet for its entire component library. Retain every
// state and variant of each component imported anywhere in our source, plus
// its transitive Astryx dependencies. Never infer usage from a screenshot.
export default function astryxUsedStyles() {
  const classes = new Set();
  const visited = new Set();
  const root = process.cwd();
  const require = createRequire(resolve(root, 'package.json'));
  const cssPath = realpathSync(require.resolve('@astryxdesign/core/astryx.css'));
  function collect(file, project = false) {
    file = realpathSync(file);
    if (visited.has(file)) return;
    visited.add(file);
    const source = readFileSync(file, 'utf8');
    if (!project) for (const token of source.matchAll(/\bx[\w-]+\b/g)) classes.add(token[0]);
    const parsed = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, false);
    for (const statement of parsed.statements) {
      if (!ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement)) continue;
      const specifier = statement.moduleSpecifier?.text;
      if (!specifier || specifier.endsWith('.css')) continue;
      const astryx = specifier.startsWith('@astryxdesign/');
      if (!astryx && (project || !specifier.startsWith('.'))) continue;
      const dependency = createRequire(file).resolve(specifier);
      collect(dependency);
    }
  }
  function scan(directory) {
    for (const entry of readdirSync(directory, {withFileTypes: true})) {
      const file = resolve(directory, entry.name);
      if (entry.isDirectory()) scan(file);
      else if (/\.[jt]sx?$/.test(entry.name)) collect(file, true);
    }
  }
  scan(resolve(root, 'src'));
  return {
    postcssPlugin: 'helm-astryx-used-components',
    Once(root) {
      root.walkRules(rule => {
        const file = rule.source?.input.file;
        if (!file || realpathSync(file) !== cssPath) return;
        const selectors = [...rule.selector.matchAll(/\.([a-zA-Z_][\w-]*)/g)].map(match => match[1]);
        // Keep global rules, properties, keyframes, and mixed selectors. Only
        // discard hashed atomic rules absent from the full component closure.
        if (selectors.length && selectors.every(name => /^x[\w-]+$/.test(name)) &&
            !selectors.some(name => classes.has(name))) rule.remove();
      });
    },
  };
}
