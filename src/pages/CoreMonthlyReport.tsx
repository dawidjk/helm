import {Band} from '../components/Site';
import './CoreMonthlyReport.css';

const coverage = [
  {
    service: 'Email protection',
    change: 'Covered mailboxes are listed in the service record.',
    evidence: 'Coverage record available. Message and triage activity are not shown in this example.',
  },
  {
    service: 'Device detection and response',
    change: "Workstation C-07 was added to the firm's inventory on November 24 and is awaiting enrollment.",
    evidence: 'Inventory and enrollment records available. Coverage for C-07 is not yet confirmed.',
  },
  {
    service: 'Supported identity protection',
    change: 'Supported Microsoft 365 identity protection is listed for the covered users.',
    evidence: 'Coverage record available. Identity alert history is unavailable for this report.',
  },
  {
    service: 'Cloud productivity backup',
    change: 'Supported Microsoft 365 backup is included in the example service order.',
    evidence: 'Backup status export unavailable. The latest job outcome and restore-test status are unconfirmed.',
  },
  {
    service: 'Awareness learning and simulations',
    change: 'Two employees have overdue assigned learning. No simulation was run in this example month.',
    evidence: 'Learning completion record available. Completion was still outstanding at month end.',
  },
  {
    service: 'Digital risk protection',
    change: 'A monitoring notice identified a possible lookalike domain on November 27.',
    evidence: 'Notice available. The firm has not confirmed ownership or intent.',
  },
];

const followUps = [
  {
    title: 'Enroll the new workstation',
    action: 'The named IT contact confirms the details for C-07. Helm coordinates enrollment in the covered device service and updates the coverage record once enrollment is confirmed.',
    timing: 'Target follow-up: December 4, 2026.',
  },
  {
    title: 'Complete the assigned learning',
    action: "The firm's manager follows up with the two employees. Helm includes the available completion status in the next monthly report.",
    timing: 'Target completion: December 7, 2026. Next monthly report: December 2026.',
  },
  {
    title: 'Review the possible lookalike domain',
    action: 'The business owner confirms whether the domain belongs to the firm or an approved third party. Helm follows up through the covered digital risk service.',
    timing: 'Target follow-up: December 4, 2026.',
  },
  {
    title: 'Request the missing backup status',
    action: 'Helm requests the missing status from the covered backup service and records it when available. The firm and its IT contact use that information to decide whether further recovery checks are needed.',
    timing: 'Target follow-up: December 4, 2026.',
  },
];

export default function CoreMonthlyReport() {
  return (
    <Band>
      <div className="band-head observe">
        <h2 id="monthly-report">What your monthly report shows</h2>
        <p>Use your automated monthly report to compare coverage with your current users and devices, review changes, and track each open action to completion. The report distinguishes your firm’s responsibilities from work assigned to IT and Helm.</p>
      </div>

      <article className="core-monthly-report" aria-labelledby="core-report-title" aria-describedby="core-report-example">
        <header className="core-report-header">
          <h3 id="core-report-title">Illustrative Core monthly report</h3>
          <p id="core-report-example">The firm, dates, findings and counts are fictional illustrations, not client results or evidence of verified controls. Your report reflects the covered services and the records available that month.</p>
          <dl className="core-report-context">
            <div>
              <dt>Report period</dt>
              <dd>November 1 to 30, 2026</dd>
            </div>
            <div>
              <dt>Prepared</dt>
              <dd>December 2, 2026</dd>
            </div>
            <div className="core-report-scope">
              <dt>Example firm</dt>
              <dd>32 covered users, Microsoft 365, and eligible Windows and Mac workstations listed in the service order.</dd>
            </div>
          </dl>
        </header>

        <section className="core-report-section" aria-labelledby="core-report-summary-title">
          <h4 id="core-report-summary-title">This month's follow-up</h4>
          <p>A new Windows workstation still needs enrollment, and two employees have overdue awareness learning. A possible lookalike domain needs the firm's review. Backup status is unconfirmed because the status export is unavailable.</p>
          <a className="core-report-jump" href="#core-report-actions">Read the follow-up actions</a>
        </section>

        <table className="core-report-table" role="table">
          <caption>Coverage and evidence at November 30, 2026</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Covered service</th>
              <th scope="col" role="columnheader">Coverage or change</th>
              <th scope="col" role="columnheader">Evidence available</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {coverage.map((row) => (
              <tr key={row.service} role="row">
                <th scope="row" role="rowheader">{row.service}</th>
                <td role="cell"><span className="core-report-cell-label" aria-hidden="true">Coverage or change</span>{row.change}</td>
                <td role="cell"><span className="core-report-cell-label" aria-hidden="true">Evidence available</span>{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section id="core-report-actions" className="core-report-section" aria-labelledby="core-report-actions-title">
          <h4 id="core-report-actions-title">Next actions for the firm, IT and Helm</h4>
          <ul className="core-report-actions">
            {followUps.map((item) => (
              <li key={item.title}>
                <h5>{item.title}</h5>
                <p>{item.action}</p>
                <p className="core-report-timing">{item.timing}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="core-report-section" aria-labelledby="core-report-limits-title">
          <h4 id="core-report-limits-title">What remains unconfirmed</h4>
          <p>The available records do not establish that every device is covered or that no incident occurred. Backup job results and evidence of a tested restore are separate checks; neither is confirmed here. This example includes no patching evidence or checks of servers, phones, tablets or network equipment.</p>
        </section>
      </article>
    </Band>
  );
}
