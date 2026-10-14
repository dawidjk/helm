import {Band} from '../components/Site';

export default function ServicePreview({command}: {command: boolean}) {
  return (
    <Band>
      <div className="band-head observe">
        <h2>{command ? 'A working plan for security decisions' : 'A monthly report you can act on'}</h2>
        <p>{command
          ? 'Command keeps risks, evidence and assigned work in one maintained plan. Quarterly reviews give leaders a place to make decisions and check progress.'
          : 'Core brings the available signals from covered services into one monthly report. It records coverage and exceptions, with next actions for Helm, your firm or its IT provider.'}</p>
      </div>
      <section className="service-preview observe" aria-label={command ? 'Illustrative Command risk register and roadmap' : 'Illustrative Core monthly report'}>
        <h3>{command ? 'Illustrative risk register and roadmap' : 'Illustrative monthly report: November 2026'}</h3>
        <p className="service-preview-note">Example content and dates only. This is not a client report or evidence that these controls have been verified.</p>
        {command ? (
          <>
            <dl className="service-preview-row">
              <div><dt>Risk and evidence</dt><dd>Client questionnaire asks for access-review evidence. The current review is awaiting confirmation from IT.</dd></div>
              <div><dt>Next action and owner</dt><dd>IT exports the review evidence. Helm checks it against the agreed questionnaire scope; the firm approves its final answers.</dd></div>
              <div><dt>Due and review</dt><dd>Evidence due November 10. Leadership reviews the remaining gap November 20.</dd></div>
            </dl>
            <dl className="service-preview-row">
              <div><dt>Roadmap item</dt><dd>Document the response to a suspicious payment-change request.</dd></div>
              <div><dt>Next action and owner</dt><dd>The firm's finance lead confirms the approval process. Helm records the decision and updates the incident path within the agreed scope.</dd></div>
              <div><dt>Due and review</dt><dd>Process review due November 15. Revisit at the next quarterly leadership review on January 15.</dd></div>
            </dl>
            <p className="service-preview-note">Command tracks decisions and assigned remediation. Hands-on remediation and work beyond the service order need separate written authorization.</p>
          </>
        ) : (
          <>
            <dl className="service-preview-row">
              <div><dt>Coverage and change</dt><dd>A newly added workstation is awaiting enrollment in the covered device protection.</dd></div>
              <div><dt>Next action and owner</dt><dd>The named IT contact confirms the device details. Helm coordinates enrollment of the eligible workstation.</dd></div>
              <div><dt>Review date</dt><dd>Check enrollment November 10; record coverage in the November 30 report.</dd></div>
            </dl>
            <dl className="service-preview-row">
              <div><dt>Exception reported</dt><dd>An employee has not completed the assigned security-awareness learning.</dd></div>
              <div><dt>Next action and owner</dt><dd>The firm's manager follows up with the employee. Helm includes the available completion status in the next report.</dd></div>
              <div><dt>Review date</dt><dd>Review completion November 30.</dd></div>
            </dl>
            <p className="service-preview-note">Actual coverage follows the service order. Core includes the monthly report; quarterly leadership reviews, a maintained risk register and open-ended advisory work require Command or separate scope.</p>
          </>
        )}
      </section>
    </Band>
  );
}
