import {useEffect, useState} from 'react';
import {Band} from '../components/Site';
import {commandSample} from './commandSampleData';
import './CommandSamplePack.css';

const priorities: Record<string, number> = {High: 0, Medium: 1, Low: 2};
const owners = [...new Set(commandSample.risks.map(risk => risk.owner))];
const statuses = [...new Set(commandSample.risks.map(risk => risk.status))];

export default function CommandSamplePack() {
  const [ready, setReady] = useState(false);
  const [owner, setOwner] = useState('all');
  const [status, setStatus] = useState('all');
  const [sort, setSort] = useState('priority');
  useEffect(() => setReady(true), []);

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

        <nav className="command-sample-nav" aria-label="Illustrative Command pack sections">
          <a href="#command-sample-risks">Risk register</a>
          <a href="#command-sample-evidence">Evidence index</a>
          <a href="#command-sample-questions">Questionnaire drafts</a>
          <a href="#command-sample-decisions">Decision record</a>
          <a href="#command-sample-roadmap">12-month roadmap</a>
        </nav>

        <section className="command-sample-section" id="command-sample-risks" aria-labelledby="command-risks-title">
          <div className="command-sample-section-head">
            <h3 id="command-risks-title">Risk register</h3>
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
                      <div className="command-record-wide"><dt>Evidence status</dt><dd><a href={`#command-evidence-${risk.evidenceId}`}>{risk.evidenceId}</a>. {risk.evidenceStatus}</dd></div>
                      <div className="command-record-wide"><dt>Next action</dt><dd>{risk.nextAction}</dd></div>
                    </dl>
                  </article>
                </li>
              ))}
            </ul>
          ) : <p className="command-register-empty">No sample risks match these filters. Clear filters and sorting to see all six risks.</p>}
        </section>

        <section className="command-sample-section" id="command-sample-evidence" aria-labelledby="command-evidence-title">
          <div className="command-sample-section-head">
            <h3 id="command-evidence-title">Evidence index</h3>
            <p>{commandSample.evidenceIntro}</p>
          </div>
          <ul className="command-evidence-list" role="list">
            {commandSample.evidence.map(item => (
              <li key={item.id} id={`command-evidence-${item.id}`}>
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

        <section className="command-sample-section" id="command-sample-questions" aria-labelledby="command-questions-title">
          <div className="command-sample-section-head">
            <h3 id="command-questions-title">Questionnaire drafts</h3>
            <p>{commandSample.questionnaireIntro}</p>
          </div>
          <ul className="command-question-list" role="list">
            {commandSample.questions.map(item => (
              <li key={item.id}>
                <h4>{item.id}: {item.question}</h4>
                <p className="command-question-status">{item.status}</p>
                <dl className="command-record-fields">
                  <div className="command-record-wide"><dt>Draft answer</dt><dd>{item.draft}</dd></div>
                  <div className="command-record-wide"><dt>Source</dt><dd><a href={`#command-evidence-${item.evidenceId}`}>{item.evidenceId}: read the evidence entry</a></dd></div>
                  <div className="command-record-wide"><dt>Before firm approval</dt><dd>{item.approval}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section className="command-sample-section" id="command-sample-decisions" aria-labelledby="command-decisions-title">
          <div className="command-sample-section-head">
            <h3 id="command-decisions-title">Decision record</h3>
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

        <section className="command-sample-section" id="command-sample-roadmap" aria-labelledby="command-roadmap-title">
          <div className="command-sample-section-head">
            <h3 id="command-roadmap-title">12-month roadmap</h3>
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

        <p className="command-sample-boundary">{commandSample.boundary}</p>
        <a className="command-sample-return" href="#command-sample-title">Back to the sample introduction</a>
      </div>
    </Band>
  );
}
