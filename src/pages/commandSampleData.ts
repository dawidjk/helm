export const commandSample = {
  "title": "Sample Command risk and evidence pack",
  "intro": "A client asks whether every account has multi-factor authentication. Before the firm answers, someone needs to check the account coverage, resolve exceptions and approve the wording. This sample follows that work through the risk register, evidence index and questionnaire draft.",
  "notice": "Illustrative only. Cedar Vale Advisory is a fictional 110-person firm with a retained IT provider. Every entry, document, decision and date below is invented for this example. None is a client result or proof of an operating control.",
  "scope": "Command is for firms with 75 to 250 people. It includes the covered Core protection stack and vCISO leadership. Helm maintains the register, evidence and 12-month roadmap; quarterly leadership reviews address decisions and progress. An annual tabletop is included. Questionnaire volume and turnaround are agreed in the service order.",
  "use": "Use the controls to inspect these fixed sample rows. This example does not accept or store your firm's information.",
  "registerIntro": "For R-01, IT needs to supply the account inventory and enforcement report. Helm checks that evidence before preparing the response. Until then, the risk stays open and the questionnaire answer is on hold.",
  "registerCaption": "Illustrative risk register, reviewed for this example on 2 November 2026. All six risks are open.",
  "evidenceIntro": "Helm checks whether each record covers the users and systems named in the question. In this example, reports are missing and drafts are unapproved. The firm needs those gaps resolved before it can approve an answer that describes a control as operating.",
  "questionnaireIntro": "These are internal drafts for the fictional firm. Each answer points to the relevant evidence and states what can be said now. The firm reviews and owns the final representations; a draft with missing evidence stays on hold.",
  "decisionIntro": "Some open risks need a decision from leadership before work can proceed. Helm records the proposed action and who must approve it, then updates the roadmap once the firm decides.",
  "roadmapIntro": "The same open work feeds a 12-month roadmap. These dates illustrate one plan from November 2026 through October 2027; they are not delivery commitments or questionnaire turnaround times.",
  "boundary": "Helm maintains the program records and coordinates the agreed work. The retained IT provider carries out routine remediation, patching, help desk and administration. Hands-on work by Helm requires separate written authorization. The sample does not represent a live portal or the SOC 2 readiness program, which is still coming soon.",
  "csvPath": "/samples/helm-command-risk-register.csv",
  "csvFileName": "helm-command-illustrative-risk-register.csv",
  "risks": [
    {
      "id": "R-01",
      "title": "Account coverage has not been confirmed",
      "priority": "High",
      "businessReason": "The client questionnaire asks about multi-factor authentication for every staff and administrator account. An incomplete account list could hide an exception.",
      "owner": "IT provider",
      "due": "2026-11-12",
      "dueLabel": "12 November 2026",
      "status": "Awaiting IT evidence",
      "evidenceId": "E-01",
      "evidenceStatus": "Account inventory, enforcement report and exceptions have not been supplied. Control coverage is unverified.",
      "nextAction": "IT exports the in-scope account list and enforcement settings. Helm checks coverage and records any gaps before preparing an answer for the firm's approval."
    },
    {
      "id": "R-02",
      "title": "Payment-change approvals need a firm decision",
      "priority": "High",
      "businessReason": "A request to change supplier bank details could reach finance through a compromised email account. Staff need an approved way to confirm the request.",
      "owner": "Finance lead",
      "due": "2026-11-16",
      "dueLabel": "16 November 2026",
      "status": "Awaiting firm review",
      "evidenceId": "E-02",
      "evidenceStatus": "A callback procedure is a draft. Approval and use by staff have not been verified.",
      "nextAction": "The finance lead reviews the proposed callback and approval steps. Helm records the decision and the evidence needed to check whether staff follow the procedure."
    },
    {
      "id": "R-03",
      "title": "No current restoration-test record is available",
      "priority": "High",
      "businessReason": "A backup status alone does not show whether the firm can restore the files needed for client work.",
      "owner": "IT provider",
      "due": "2026-11-23",
      "dueLabel": "23 November 2026",
      "status": "Awaiting IT evidence",
      "evidenceId": "E-03",
      "evidenceStatus": "The example contains no restoration-test record. Restoration results and test coverage are unverified.",
      "nextAction": "IT proposes a restoration test for the covered data and supplies its scope and results when complete. Helm records the result and remaining gaps."
    },
    {
      "id": "R-04",
      "title": "The incident contact path awaits approval",
      "priority": "Medium",
      "businessReason": "During a suspected account compromise, staff need to know who coordinates the response and who can authorize a business decision.",
      "owner": "Managing partner",
      "due": "2026-11-20",
      "dueLabel": "20 November 2026",
      "status": "Awaiting firm review",
      "evidenceId": "E-04",
      "evidenceStatus": "The incident contact path is a draft. The firm has not approved its roles or contact details.",
      "nextAction": "The managing partner confirms the business decision-maker and IT contact. Helm updates the written path for approval."
    },
    {
      "id": "R-05",
      "title": "The annual tabletop has not been held",
      "priority": "Medium",
      "businessReason": "The firm needs to rehearse how finance, leadership and IT would coordinate a suspicious payment-change request.",
      "owner": "Helm",
      "due": "2027-02-18",
      "dueLabel": "18 February 2027",
      "status": "Planned",
      "evidenceId": "E-05",
      "evidenceStatus": "A proposed agenda exists. There is no completed exercise or action record.",
      "nextAction": "Helm agrees the participants and scenario with the firm, then runs the annual tabletop and records follow-up actions."
    },
    {
      "id": "R-06",
      "title": "Supplier access needs the firm's review",
      "priority": "Medium",
      "businessReason": "A supplier account could retain access after the work ends. The firm needs to confirm which access is still required.",
      "owner": "IT provider",
      "due": "2027-05-14",
      "dueLabel": "14 May 2027",
      "status": "Awaiting IT evidence",
      "evidenceId": "E-06",
      "evidenceStatus": "The supplier account list and owner approvals have not been supplied. The firm has not confirmed which access is still needed.",
      "nextAction": "IT supplies the account list for the firm's owners to review. IT handles approved access changes; Helm tracks the decision and closure evidence."
    }
  ],
  "evidence": [
    {
      "id": "E-01",
      "title": "Account inventory and authentication coverage",
      "owner": "IT provider",
      "status": "Missing",
      "material": "Requested: the in-scope account inventory, authentication enforcement settings and an exception list. No files are present in this example.",
      "verification": "Helm must reconcile the reports with the agreed account scope and investigate exceptions. An enabled setting alone does not establish coverage for every account.",
      "use": "R-01 remains open. Hold questionnaire answer Q-01."
    },
    {
      "id": "E-02",
      "title": "Proposed payment-change procedure",
      "owner": "Finance lead",
      "status": "Draft only",
      "material": "Proposed steps: finance calls the supplier using a number already on file, records the confirmation and obtains the required internal approval before changing bank details.",
      "verification": "The finance lead must approve the procedure and confirm how staff will follow it. This draft does not establish that the process is in use.",
      "use": "Supports the proposal in R-02. Q-02 must describe the process as a draft."
    },
    {
      "id": "E-03",
      "title": "Restoration-test scope and result",
      "owner": "IT provider",
      "status": "Missing",
      "material": "Requested: the test date, covered data, selected files, restoration result, observed recovery time and unresolved errors. No test record is present in this example.",
      "verification": "Helm must check the result against the proposed test scope and record limitations. The firm and IT decide what recovery capability the business requires.",
      "use": "R-03 remains open. Hold questionnaire answer Q-03."
    },
    {
      "id": "E-04",
      "title": "Draft incident contact path",
      "owner": "Managing partner",
      "status": "Awaiting firm approval",
      "material": "Proposed roles: the managing partner authorizes business decisions; the retained IT provider handles its technical response; Helm coordinates within the written service scope.",
      "verification": "The firm must approve the roles and contact details. The annual tabletop will exercise the agreed path; no exercise has taken place in this sample.",
      "use": "R-04 remains open. Q-04 can describe only the draft assignments."
    },
    {
      "id": "E-05",
      "title": "Annual tabletop agenda",
      "owner": "Helm",
      "status": "Planned exercise",
      "material": "Proposed scenario: finance receives a supplier bank-change email, then learns that the sender's account may be compromised. Participants consider verification, escalation and business approval.",
      "verification": "After the exercise, Helm would record attendance, decisions, gaps and assigned follow-up. An agenda is not evidence that a tabletop was completed.",
      "use": "R-05 remains open. The exercise and its action record are still to be completed."
    },
    {
      "id": "E-06",
      "title": "Supplier access review",
      "owner": "IT provider",
      "status": "Missing",
      "material": "Requested: supplier accounts, the business owner for each account, access still required and any approved removal. No completed review is present in this example.",
      "verification": "The firm's owners must confirm the business need. IT records approved changes, and Helm checks the closure evidence before updating R-06.",
      "use": "R-06 remains open. Do not describe the access review as complete."
    }
  ],
  "questions": [
    {
      "id": "Q-01",
      "question": "Is multi-factor authentication enforced for all staff and administrator accounts?",
      "status": "On hold: evidence missing",
      "draft": "We have not yet verified authentication coverage for every in-scope staff and administrator account. We need the account inventory, enforcement report and exceptions before answering yes.",
      "evidenceId": "E-01",
      "approval": "IT supplies the reports; Helm checks coverage. The firm's authorized reviewer approves the final answer."
    },
    {
      "id": "Q-02",
      "question": "Do you confirm supplier bank changes outside email?",
      "status": "Draft: firm review required",
      "draft": "A proposed procedure requires a callback using a supplier number already on file and internal approval before bank details change. The finance lead has not approved the procedure, and staff use has not been verified.",
      "evidenceId": "E-02",
      "approval": "Finance confirms the process and supporting evidence. The firm approves any final description of an operating control."
    },
    {
      "id": "Q-03",
      "question": "Do you test restoration of backed-up client data?",
      "status": "On hold: evidence missing",
      "draft": "No current restoration-test record is available for review. A test is proposed with the retained IT provider; its outcome and coverage remain unverified.",
      "evidenceId": "E-03",
      "approval": "IT supplies the completed test record. Helm reviews its scope and limitations before the firm approves a final response."
    },
    {
      "id": "Q-04",
      "question": "Who coordinates a security incident and authorizes business decisions?",
      "status": "Draft: firm review required",
      "draft": "Under the draft incident path, the managing partner would authorize business decisions, the retained IT provider would handle technical response, and Helm would coordinate within the agreed service scope. The firm still needs to approve the roles and contact details.",
      "evidenceId": "E-04",
      "approval": "The managing partner approves the contact path and the final answer. The draft does not establish tested incident readiness."
    }
  ],
  "decisions": [
    {
      "id": "D-01",
      "title": "Verify account coverage before answering Q-01",
      "status": "Proposed; awaiting managing partner approval",
      "reason": "The client asks about every account. R-01 and E-01 show that the coverage is still unknown, so the proposed response stays on hold.",
      "owner": "Managing partner",
      "due": "9 November 2026",
      "action": "Keep Q-01 on hold while IT supplies the requested reports and Helm checks coverage and exceptions."
    },
    {
      "id": "D-02",
      "title": "Use a payment-change scenario for the annual tabletop",
      "status": "Proposed; awaiting finance and leadership review",
      "reason": "R-02 and R-04 leave open questions about finance verification and incident authority. The proposed scenario asks participants how they would verify the request and who would authorize a payment change.",
      "owner": "Managing partner",
      "due": "18 February 2027",
      "action": "Helm agrees the scenario and participants with the firm, runs the annual tabletop, and adds its follow-up actions to the register."
    }
  ],
  "roadmap": [
    {
      "period": "November 2026 to January 2027",
      "focus": "Check account and backup evidence; approve the finance and incident drafts.",
      "owner": "IT provider, finance lead and managing partner; Helm coordinates.",
      "decision": "At the quarterly leadership review, decide how to address unresolved R-01 through R-04. Record accepted exceptions and the reason for any new due date."
    },
    {
      "period": "February to April 2027",
      "focus": "Run the annual tabletop proposed in R-05 and record its actions.",
      "owner": "Helm leads the exercise; the firm and IT own their assigned actions.",
      "decision": "Use the quarterly leadership review to consider the exercise findings and approve priorities for the next quarter."
    },
    {
      "period": "May to July 2027",
      "focus": "Review supplier access under R-06 and check the evidence for approved changes.",
      "owner": "The firm's business owners review access; IT carries out changes; Helm tracks the work.",
      "decision": "At the quarterly leadership review, resolve outstanding access decisions and revisit risks affected by supplier changes."
    },
    {
      "period": "August to October 2027",
      "focus": "Review the year's open risks and prepare the agreed annual insurance responses from verified evidence.",
      "owner": "Helm prepares the agreed responses; the firm approves final representations.",
      "decision": "Use the quarterly leadership review to approve the next 12-month roadmap. Insurance response volume and turnaround follow the service order."
    }
  ]
};
