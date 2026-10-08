import {Link} from 'react-router-dom';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import Meta from '../components/Meta';
import {ActionLink, Band, ScrollCue} from '../components/Site';
import './SecureAiAdoption.css';

// Consulting scope approved for publication on October 1, 2026.
// This extends Helm's existing service-page layout and Japandi design system.
export default function SecureAiAdoption() {
  return (
    <div className="ai-adoption-page">
      <Meta
        title="Secure AI Adoption for New Jersey Firms | Helm"
        desc="Evaluate one internal AI workflow with Helm. Review data, permissions, human review, and costs before deciding on a separately scoped pilot."
        path="/secure-ai-adoption/"
      />
      <header className="hero lane brand-hero hero-fit-dense">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal hero-h1-sm">Secure AI Adoption</h1>
          <p className="sub reveal d1">
            Find out whether AI can reduce the work in one recurring internal task.
            Start with a scoped review of the workflow, its costs, and the tools
            and data it would need.
          </p>
          <div className="hero-ctas reveal d2">
            <ActionLink to="/contact/?service=secure-ai-adoption" label="Discuss an AI workflow" />
          </div>
          <p className="hero-note reveal d3">Consulting engagement. Pricing quoted after scoping.</p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <div className="ai-section-layout">
          <h2>For firms evaluating AI alongside their existing IT provider.</h2>
          <div className="ai-prose">
            <p>
              This engagement is for New Jersey professional-services firms with
              roughly 20–250 employees, including accounting, law, insurance, and
              financial-services businesses.
            </p>
            <p>
              Bring one recurring internal task you want to evaluate. Your existing IT provider stays in place, and we agree on responsibilities and any access or configuration changes before work begins.
            </p>
            <p>
              Managed cybersecurity remains Helm’s primary service.
              Secure AI Adoption is scoped separately from <Link to="/helm-core/">Helm Core</Link> and{' '}
              <Link to="/helm-command/">Helm Command</Link>.
            </p>
          </div>
        </div>
      </Band>

      <Band variant="raised">
        <div className="ai-section-layout">
          <h2>Review the workflow before committing to a pilot.</h2>
          <ol className="ai-review-steps">
            <li>
              <h3>Document the current work</h3>
              <p>We start by mapping one recurring internal workflow: who does it, how often it happens, and how much time they spend completing and checking it. We also document its current labor and software costs.</p>
            </li>
            <li>
              <h3>Review the proposed tools and data</h3>
              <p>Before testing, we review how the proposed tool handles, stores, and retains data, along with its permissions, licensing, software costs, and where human review is required. We agree on which data and platform the firm would approve for the test.</p>
            </li>
            <li>
              <h3>Decide whether to test</h3>
              <p>Helm recommends whether a pilot is appropriate, what needs to change first, or why the workflow should stay as it is. If a pilot is appropriate, we define the quality checks and cost comparison before it starts.</p>
            </li>
          </ol>
        </div>
      </Band>

      <Band>
        <div className="ai-section-layout">
          <div className="ai-prose">
            <h2>An optional pilot, with its own scope.</h2>
            <p>A pilot covers one workflow on one approved platform. It requires a
              separate scope and quote after the review.</p>
            <p>Compare the same task before and during the pilot. Count the time
              people spend preparing inputs, checking outputs, and correcting mistakes.
              A faster first draft only helps if the finished work meets the agreed standard.</p>
          </div>
          <dl className="ai-measures">
            <div><dt>Output quality</dt><dd>Check accuracy, completeness, and suitability
              for the task against the agreed criteria.</dd></div>
            <div><dt>Total staff time</dt><dd>Record preparation, review, and correction
              time as well as time spent producing the output.</dd></div>
            <div><dt>Cost of the workflow</dt><dd>Compare staff time at an agreed labor
              cost with current and proposed software costs. Account for setup and consulting fees separately.</dd></div>
            <div><dt>A decision on continued use</dt><dd>Use the test results to recommend
              continuing, revising, or stopping the workflow.</dd></div>
          </dl>
        </div>
      </Band>

      <Band variant="raised">
        <div className="ai-section-layout">
          <h2>Agree on the deliverables.</h2>
          <div className="ai-prose">
            <p>Depending on the agreed review or pilot scope, deliverables may include:</p>
            <ul className="ai-deliverables">
              <li>A workflow map with current effort and cost.</li>
              <li>A data and access checklist for the proposed tool.</li>
              <li>Practical usage guidance and reusable instructions.</li>
              <li>Pilot test results, including checking time and costs.</li>
              <li>A staff walkthrough of the approved workflow and its limits.</li>
            </ul>
          </div>
        </div>
      </Band>

      <Band>
        <div className="ai-section-layout">
          <h2>Set data and scope limits first.</h2>
          <div className="ai-prose">
            <p>Start with public, synthetic, or explicitly approved low-sensitivity
              data. Confidential client data is not uploaded by default.</p>
            <p>Review storage, retention, access, and model-training terms separately. A tool may promise not to use data for model training and still store it.</p>
            <p>People remain responsible for reviewing outputs and making decisions.
              This engagement does not include autonomous legal, financial, medical,
              or hiring decisions.</p>
            <p>Custom applications, production integrations, company-wide rollouts,
              and ongoing support require separate scoping.</p>
          </div>
        </div>
      </Band>

      <section className="cta-band">
        <div className="wrap">
          <h2>Bring one workflow to discuss.</h2>
          <p>Describe the task, who does it, and what takes time today.
            Keep client records and sensitive information out of the inquiry.</p>
          <div className="cta-form">
            <ActionLink to="/contact/?service=secure-ai-adoption" label="Discuss an AI workflow" />
            <p className="ai-quote-note">Pricing is quoted after scoping.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
