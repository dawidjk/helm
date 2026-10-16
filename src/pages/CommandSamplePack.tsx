import {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Band} from '../components/Site';
import {commandSample} from './commandSampleData';
import './CommandSamplePack.css';

const priorities: Record<string, number> = {High: 0, Medium: 1, Low: 2};
const owners = [...new Set(commandSample.risks.map(risk => risk.owner))];
const statuses = [...new Set(commandSample.risks.map(risk => risk.status))];
const samples = [
  {key: 'risks', label: 'Risk register', heading: 'command-risks-title'},
  {key: 'evidence', label: 'Evidence index', heading: 'command-evidence-title'},
  {key: 'questions', label: 'Questionnaire drafts', heading: 'command-questions-title'},
  {key: 'decisions', label: 'Decision record', heading: 'command-decisions-title'},
  {key: 'roadmap', label: '12-month roadmap', heading: 'command-roadmap-title'},
] as const;

function sampleForHash(hash: string) {
  const index = samples.findIndex(sample => hash === `#command-sample-${sample.key}`);
  if (index !== -1) return index;
  if (commandSample.evidence.some(item => hash === `#command-evidence-${item.id}`)) return 1;
  return 0;
}

export default function CommandSamplePack() {
  const [ready, setReady] = useState(false);
  const [owner, setOwner] = useState('all');
  const [status, setStatus] = useState('all');
  const [sort, setSort] = useState('priority');
  const {hash, search} = useLocation();
  const navigate = useNavigate();
  const changeOrigin = useRef<{hash: string; kind: 'tab' | 'pagination' | 'evidence'} | null>(null);
  const activeIndex = sampleForHash(hash);
  const activeSample = samples[activeIndex];
  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!ready) return;
    const origin = changeOrigin.current?.hash === hash ? changeOrigin.current.kind : null;
    // Selecting a tab replaces the sample in place. Deep links and links within
    // a sample still reveal and focus their destination after the panel opens.
    if (origin === 'tab') return;
    const isSample = samples.some(sample => hash === `#command-sample-${sample.key}`);
    const isEvidence = commandSample.evidence.some(item => hash === `#command-evidence-${item.id}`);
    if (!isSample && !isEvidence) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(origin === 'pagination' ? activeSample.heading : hash.slice(1));
      target?.focus({preventScroll: true});
      target?.scrollIntoView({block: 'start', behavior: 'instant'});
    });
    return () => cancelAnimationFrame(frame);
  }, [ready, hash, activeSample.heading]);

  function selectSample(index: number, origin: 'tab' | 'pagination' = 'tab') {
    const nextHash = `#command-sample-${samples[index].key}`;
    if (hash === nextHash) return;
    changeOrigin.current = {hash: nextHash, kind: origin};
    navigate({hash: nextHash, search}, {preventScrollReset: true});
  }

  function openEvidence(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    changeOrigin.current = {hash: `#command-evidence-${id}`, kind: 'evidence'};
    navigate({hash: `#command-evidence-${id}`, search}, {preventScrollReset: true});
  }

  function panelProps(key: typeof samples[number]['key']) {
    const sample = samples.find(sample => sample.key === key)!;
    return {
      hidden: ready && activeSample.key !== key,
      role: ready ? 'tabpanel' as const : undefined,
      'aria-labelledby': ready ? `command-sample-tab-${key}` : sample.heading,
      tabIndex: ready ? 0 : undefined,
    };
  }

  const risks = commandSample.risks
    .filter(risk => (owner === 'all' || risk.owner === owner) && (status === 'all' || risk.status === status))
    .sort((a, b) => sort === 'due'
      ? a.due.localeCompare(b.due) || a.id.localeCompare(b.id)
      : priorities[a.priority] - priorities[b.priority] || a.due.localeCompare(b.due) || a.id.localeCompare(b.id));
  const filtered = owner !== 'all' || status !== 'all' || sort !== 'priority';

  return (
    <Band id="command-sample">
      <div className="command-sample" aria-labelledby="command-sample-title">
        <div className="command-sample-opening">
          <h2 id="command-sample-title">{commandSample.title}</h2>
          <p>{commandSample.intro}</p>
          <p className="command-sample-notice">{commandSample.notice}</p>
          <p>{commandSample.scope}</p>
        </div>

        <nav className="command-sample-nav" role={ready ? 'tablist' : undefined} aria-label="Illustrative Command pack samples">
          {samples.map((sample, index) => ready ? (
            <button
              key={sample.key}
              type="button"
              role="tab"
              id={`command-sample-tab-${sample.key}`}
              aria-selected={activeIndex === index}
              aria-controls={`command-sample-${sample.key}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => selectSample(index)}
              onKeyDown={event => {
                let next = index;
                if (event.key === 'ArrowRight') next = (index + 1) % samples.length;
                else if (event.key === 'ArrowLeft') next = (index + samples.length - 1) % samples.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = samples.length - 1;
                else return;
                event.preventDefault();
                document.getElementById(`command-sample-tab-${samples[next].key}`)?.focus();
                selectSample(next);
              }}
            >{sample.label}</button>
          ) : <a key={sample.key} href={`#command-sample-${sample.key}`}>{sample.label}</a>)}
        </nav>

        <section className="command-sample-section" id="command-sample-risks" {...panelProps('risks')}>
          <div className="command-sample-section-head">
            <h3 id="command-risks-title" tabIndex={-1}>Risk register</h3>
            <p>{commandSample.registerIntro}</p>
            <p className="command-sample-secondary">{commandSample.registerCaption}</p>
          </div>

          <p id="command-sample-controls-help">{commandSample.use}</p>
          <fieldset className="command-register-controls" disabled={!ready} aria-describedby="command-sample-controls-help">
            <legend>Inspect the sample risks</legend>
            <div className="command-register-fields">
              <label htmlFor="command-risk-owner">
                Owner
                <select id="command-risk-owner" value={owner} onChange={event => setOwner(event.target.value)}>
                  <option value="all">All owners</option>
                  {owners.map(value => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label htmlFor="command-risk-status">
                Work status
                <select id="command-risk-status" value={status} onChange={event => setStatus(event.target.value)}>
                  <option value="all">All statuses</option>
                  {statuses.map(value => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label htmlFor="command-risk-sort">
                Sort by
                <select id="command-risk-sort" value={sort} onChange={event => setSort(event.target.value)}>
                  <option value="priority">Priority, then due date</option>
                  <option value="due">Earliest due date</option>
                </select>
              </label>
              <button type="button" disabled={!filtered} onClick={() => {setOwner('all'); setStatus('all'); setSort('priority');}}>
                Clear filters and sorting
              </button>
            </div>
          </fieldset>
          <noscript><p>All six risks are shown. Filtering and sorting require JavaScript; the complete CSV download works without it.</p></noscript>
          <div className="command-register-summary">
            <p role="status" aria-live="polite" aria-atomic="true">
              Showing {risks.length} of {commandSample.risks.length} sample risks. {sort === 'due' ? 'Sorted by earliest due date.' : 'Sorted by priority, then due date.'}
            </p>
            <a href={commandSample.csvPath} download={commandSample.csvFileName}>Download all 6 sample risks (CSV)</a>
          </div>

          {risks.length > 0 ? (
            <ul className="command-register-list" role="list" aria-label="Illustrative risks">
              {risks.map(risk => (
                <li key={risk.id}>
                  <article aria-labelledby={`command-risk-${risk.id}`}>
                    <div className="command-record-title">
                      <h4 id={`command-risk-${risk.id}`}>{risk.id}: {risk.title}</h4>
                      <p>{risk.priority} priority · {risk.status}</p>
                    </div>
                    <dl className="command-record-fields">
                      <div className="command-record-wide"><dt>Business reason</dt><dd>{risk.businessReason}</dd></div>
                      <div><dt>Accountable owner</dt><dd>{risk.owner}</dd></div>
                      <div><dt>Next action due</dt><dd><time dateTime={risk.due}>{risk.dueLabel}</time></dd></div>
                      <div className="command-record-wide"><dt>Evidence status</dt><dd><a href={`#command-evidence-${risk.evidenceId}`} onClick={event => openEvidence(event, risk.evidenceId)}>{risk.evidenceId}</a>. {risk.evidenceStatus}</dd></div>
                      <div className="command-record-wide"><dt>Next action</dt><dd>{risk.nextAction}</dd></div>
                    </dl>
                  </article>
                </li>
              ))}
            </ul>
          ) : <p className="command-register-empty">No sample risks match these filters. Clear filters and sorting to see all six risks.</p>}
        </section>

        <section className="command-sample-section" id="command-sample-evidence" {...panelProps('evidence')}>
          <div className="command-sample-section-head">
            <h3 id="command-evidence-title" tabIndex={-1}>Evidence index</h3>
            <p>{commandSample.evidenceIntro}</p>
          </div>
          <ul className="command-evidence-list" role="list">
            {commandSample.evidence.map(item => (
              <li key={item.id} id={`command-evidence-${item.id}`} tabIndex={-1}>
                <h4>{item.id}: {item.title}</h4>
                <dl className="command-record-fields">
                  <div><dt>Owner</dt><dd>{item.owner}</dd></div>
                  <div><dt>Status</dt><dd>{item.status}</dd></div>
                  <div className="command-record-wide"><dt>Material</dt><dd>{item.material}</dd></div>
                  <div className="command-record-wide"><dt>Verification needed</dt><dd>{item.verification}</dd></div>
                  <div className="command-record-wide"><dt>Effect on the answer</dt><dd>{item.use}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section className="command-sample-section" id="command-sample-questions" {...panelProps('questions')}>
          <div className="command-sample-section-head">
            <h3 id="command-questions-title" tabIndex={-1}>Questionnaire drafts</h3>
            <p>{commandSample.questionnaireIntro}</p>
          </div>
          <ul className="command-question-list" role="list">
            {commandSample.questions.map(item => (
              <li key={item.id}>
                <h4>{item.id}: {item.question}</h4>
                <p className="command-question-status">{item.status}</p>
                <dl className="command-record-fields">
                  <div className="command-record-wide"><dt>Draft answer</dt><dd>{item.draft}</dd></div>
                  <div className="command-record-wide"><dt>Source</dt><dd><a href={`#command-evidence-${item.evidenceId}`} onClick={event => openEvidence(event, item.evidenceId)}>{item.evidenceId}: read the evidence entry</a></dd></div>
                  <div className="command-record-wide"><dt>Before firm approval</dt><dd>{item.approval}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section className="command-sample-section" id="command-sample-decisions" {...panelProps('decisions')}>
          <div className="command-sample-section-head">
            <h3 id="command-decisions-title" tabIndex={-1}>Decision record</h3>
            <p>{commandSample.decisionIntro}</p>
          </div>
          <ul className="command-decision-list" role="list">
            {commandSample.decisions.map(item => (
              <li key={item.id}>
                <h4>{item.id}: {item.title}</h4>
                <p>{item.status}</p>
                <dl className="command-record-fields">
                  <div className="command-record-wide"><dt>Reason</dt><dd>{item.reason}</dd></div>
                  <div><dt>Owner</dt><dd>{item.owner}</dd></div>
                  <div><dt>Proposed due date</dt><dd>{item.due}</dd></div>
                  <div className="command-record-wide"><dt>Action after approval</dt><dd>{item.action}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section className="command-sample-section" id="command-sample-roadmap" {...panelProps('roadmap')}>
          <div className="command-sample-section-head">
            <h3 id="command-roadmap-title" tabIndex={-1}>12-month roadmap</h3>
            <p>{commandSample.roadmapIntro}</p>
          </div>
          <ol className="command-roadmap-list" role="list">
            {commandSample.roadmap.map(item => (
              <li key={item.period}>
                <h4>{item.period}</h4>
                <p>{item.focus}</p>
                <dl className="command-record-fields">
                  <div className="command-record-wide"><dt>Owners</dt><dd>{item.owner}</dd></div>
                  <div className="command-record-wide"><dt>Leadership decision</dt><dd>{item.decision}</dd></div>
                </dl>
              </li>
            ))}
          </ol>
        </section>

        {ready && (
          <nav className="command-sample-pagination" aria-label="Sample pagination">
            <button type="button" disabled={activeIndex === 0} onClick={() => selectSample(activeIndex - 1, 'pagination')}>Previous sample</button>
            <p role="status" aria-live="polite" aria-atomic="true">Sample {activeIndex + 1} of {samples.length}</p>
            <button type="button" disabled={activeIndex === samples.length - 1} onClick={() => selectSample(activeIndex + 1, 'pagination')}>Next sample</button>
          </nav>
        )}

        <p className="command-sample-boundary">{commandSample.boundary}</p>
        <a className="command-sample-return" href="#command-sample-title">Back to the sample introduction</a>
      </div>
    </Band>
  );
}
