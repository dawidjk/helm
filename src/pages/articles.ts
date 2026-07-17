export type LinkedParagraph = {
  text: string;
  links: {phrase: string; to: string}[];
};

export type Paragraph = string | LinkedParagraph;

export type Article = {
  slug: string;
  title: string;
  metaDesc: string;
  date: string;
  readMin: number;
  lane: string;
  laneTo: string;
  intro: string;
  sections: {h: string; ps: Paragraph[]}[];
  takeaway: string;
};

export const articles: Article[] = [
  {
    slug: 'sprs-score-explained',
    title: 'SPRS Score Explained: The Number Your Primes Can Already See',
    metaDesc:
      'What your SPRS score means under the NIST 800-171 DoD Assessment Methodology, why it can run from -203 to 110, and how to raise it deliberately instead of guessing.',
    date: '2026-07-15',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'If you handle Controlled Unclassified Information for a defense contract, a number already exists that describes your security posture, and your prime can look it up. It is called your SPRS score, and most subcontractors have never seen it explained in plain English.',
    sections: [
      {
        h: 'What the score actually measures',
        ps: [
          'The SPRS score comes from the NIST 800-171 DoD Assessment Methodology: a standardized way of scoring how well a company implements the 110 security controls required for handling CUI. Each control is worth points, and some are worth more than others because they matter more.',
          'The range runs from negative 203 up to a maximum of 110. It can go negative because missing certain high-value controls, like multi-factor authentication or encrypted CUI storage, subtracts more points than a single control is worth on its own. A company that has done almost nothing can post a deeply negative number.',
          'That score gets posted to SPRS, the Supplier Performance Risk System, where primes and the DoD can see it before they award or continue a subcontract. It is not a private self-assessment sitting in a drawer.',
        ],
      },
      {
        h: 'Why an honest number matters more than a high one',
        ps: [
          'Primes increasingly screen subcontractors on SPRS score before flowing down work. A low, honest score is a problem you can fix on a timeline. A fabricated or inflated score is a different kind of problem entirely.',
          'Submitting a score you know is not accurate is a False Claims Act exposure, and it is not theoretical: the DOJ Civil Cyber-Fraud Initiative has already settled cases against companies that misrepresented their security compliance to the government. The number posted to SPRS is treated as a representation the government can rely on.',
        ],
      },
      {
        h: 'How to raise it without guessing',
        ps: [
          {text: 'Start with a gap assessment scored against all 110 controls. It tells you exactly where you stand today and which gaps carry the most point value, instead of guessing which fixes matter most.', links: [{phrase: 'gap assessment', to: '/helm-ready'}]},
          'Fix the highest-weighted controls first: the ones like MFA and encryption that swing the score the most per dollar and hour spent. Then rescore against the methodology and repost to SPRS so the number primes see reflects the work you actually did.',
        ],
      },
    ],
    takeaway:
      'Your SPRS score is not a form you fill out once. Score it honestly today, raise it deliberately with the controls that matter most, and repost so the number your primes see is one you can stand behind.',
  },
  {
    slug: 'cmmc-level-1-vs-level-2',
    title: 'CMMC Level 1 vs Level 2: Which One Does Your Shop Actually Need?',
    metaDesc:
      'CMMC Level 1 and Level 2 require very different things. How to tell which one applies to your shop based on your contracts, not your headcount.',
    date: '2026-07-13',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'Ask five shop owners which CMMC level applies to them and you will get five different guesses, most based on company size. Size has nothing to do with it. The answer is written into the contract clauses you already have on file.',
    sections: [
      {
        h: 'The question that decides everything: FCI or CUI?',
        ps: [
          'Federal Contract Information (FCI) is the everyday paperwork of doing business with the government: purchase orders, quotes, basic correspondence about a contract that is not intended for public release. If that is the extent of what crosses your desk, you are in FCI territory.',
          'Controlled Unclassified Information (CUI) is a different tier: drawings marked with a distribution statement, engineering specs, technical data packages, anything the government has identified as needing safeguarding beyond FCI. If a prime emails you a marked drawing or a technical data package, you are now handling CUI, whether or not anyone said so out loud.',
        ],
      },
      {
        h: 'What each level actually requires',
        ps: [
          'Level 1 covers the 15 basic safeguarding requirements of FAR 52.204-21. It is self-assessed annually, with an executive affirmation that the requirements are in place. There is no third-party assessor at Level 1.',
          'Level 2 covers all 110 controls in NIST 800-171, and for most contracts it requires a third-party assessment by a C3PAO every three years, not a self-assessment. The jump from Level 1 to Level 2 is not incremental: it is a different scale of program.',
        ],
      },
      {
        h: 'How to tell which one applies to you',
        ps: [
          'The clauses in your contract tell you directly: look for DFARS 252.204-7012, 7019, 7020, and 7021. Their presence, and how they are flowed down, points to whether you are being asked to handle CUI or only FCI.',
          'When the contract language is ambiguous, ask your prime in writing which category your work falls into and keep the answer on file. Do not guess, and do not assume.',
          {text: 'Do not assume Level 1 just because you are a small shop. Company size has no bearing on the requirement: a ten-person shop machining a part from a marked drawing is handling CUI just like a thousand-person prime. A gap assessment against the full control set tells you where you actually stand before an assessor does.', links: [{phrase: 'small shop', to: '/manufacturing'}, {phrase: 'gap assessment', to: '/helm-ready'}]},
        ],
      },
    ],
    takeaway:
      'The level you need is written into your contracts, not your org chart. Read the clauses, confirm with your prime in writing, and size your program to what you actually handle.',
  },
  {
    slug: 'cyber-insurance-claim-denied',
    title: 'Why Cyber Insurance Claims Get Denied (and How to Keep Yours Payable)',
    metaDesc:
      'Cyber insurance claims get denied for reasons that trace back to the application, not the incident. The four common denial paths and how to keep your policy payable.',
    date: '2026-07-09',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A denied cyber claim rarely comes as a surprise to the carrier. In most cases, the seeds were planted months earlier, on the application, in an answer that was optimistic rather than accurate. Here is where claims actually fall apart.',
    sections: [
      {
        h: 'The four common denial paths',
        ps: [
          'Application misrepresentation: an answer on the questionnaire did not match reality at the time it was signed. Failure to maintain controls you attested to: MFA was on the application but quietly lapsed by the time of the breach. Late notice: the policy has a reporting window, and missing it can void coverage regardless of the merits of the claim. Excluded acts: some losses, like certain acts of war or specific fraud scenarios, are carved out of the policy entirely.',
          'Application misrepresentation is not hypothetical. In Travelers v. International Control Services (2022), the carrier sought rescission of the policy over a misrepresentation about multi-factor authentication on the application, and the policy was rescinded by agreement. The lesson generalizes well beyond that one case: what you wrote on the form has to be true.',
        ],
      },
      {
        h: 'The attestation trap',
        ps: [
          'It is easy to treat the application as a snapshot: true on the day you signed it, close enough after that. Carriers do not see it that way. The answers are warranties that are expected to remain true for the entire policy year, not a one-time disclosure.',
          'That means a control you had in place at renewal but let lapse by spring is not a minor drift. It is the exact gap between what you attested to and what was actually true when the incident happened, which is precisely where carriers look first.',
        ],
      },
      {
        h: 'Keep it payable',
        ps: [
          'Keep an evidence folder, not just a memory of good intentions: training logs, backup-test records, MFA screenshots, dated and organized. When a claim is filed, this folder is what turns "we believe we were compliant" into proof.',
          {text: 'Carriers increasingly check the technical basics themselves, including whether your domain has real email authentication in place. A free scan of your own domain tells you what a carrier or an attacker would see before either one looks.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Re-verify your answers at every renewal instead of rolling over last year\'s form, and remediate gaps at a fixed fee rather than letting them sit until the next application asks again.', links: [{phrase: 'remediate gaps at a fixed fee', to: '/helm-ready'}]},
        ],
      },
    ],
    takeaway:
      'A cyber claim is paid on documentation, not good intentions. Keep your attestations true all year, keep the evidence to prove it, and close the gaps before the next form asks about them again.',
  },
  {
    slug: 'shadow-ai-at-work',
    title: 'Shadow AI: What Employees Paste into Chatbots When Nobody Is Looking',
    metaDesc:
      'Employees are already pasting client data and contract terms into AI chatbots the company never approved. What shadow AI actually is, where the risk sits, and how to govern it.',
    date: '2026-07-07',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Somewhere in your company right now, someone is pasting a contract, a client email, or a spreadsheet of numbers into a chatbot that IT never approved. This is not a rogue employee problem. It is happening at almost every company, because the tools genuinely help.',
    sections: [
      {
        h: 'What shadow AI actually is',
        ps: [
          'Shadow AI is any chatbot or AI tool employees use on work data without the company having approved, reviewed, or even being aware of it. It happens because these tools are genuinely useful: drafting an email faster, summarizing a long document, cleaning up code, and employees reach for whatever gets the job done.',
          'Blanket bans do not work here. Block the tool on the office network and employees route around it on their phones or personal laptops, often with company data still attached, just further from any oversight than before.',
        ],
      },
      {
        h: 'Where the real risk sits',
        ps: [
          'The obvious risk is client data and contract terms typed straight into a prompt: names, numbers, terms that were never meant to leave the building, now sitting inside a third party\'s system.',
          'Less obvious is what happens to that data afterward. Some tools retain inputs or use them to improve their models, depending on the account type and settings, often without the employee ever checking which applies to them. Add a personal account with weak or no additional protections holding company information, and the exposure compounds.',
          'There is a second-order risk too: AI output pasted back into a client deliverable or a decision without anyone reviewing it first. Fluent and confident is not the same as correct.',
        ],
      },
      {
        h: 'The fix: govern it, do not ban it',
        ps: [
          'A short acceptable-use policy that says plainly what can and cannot go into a prompt closes most of the gap on its own, because most employees want to do the right thing once they know what it is.',
          {text: 'Pair it with an approved-tools list, so employees have a legitimate option instead of a banned one, and a periodic audit to see what is actually being used across the company, not just what was approved on paper.', links: [{phrase: 'periodic audit', to: '/helm-aware'}]},
        ],
      },
    ],
    takeaway:
      'Shadow AI is not going away, and banning it just pushes it further from view. Write the policy, name the approved tools, and audit periodically to keep it that way.',
  },
  {
    slug: 'ai-phishing-red-flags',
    title: 'AI Phishing: Why "Look for the Typos" Is Dead Advice',
    metaDesc:
      'AI-written phishing emails are fluent, personalized, and sent at scale. Why the old typo-spotting advice no longer works, and the controls that still stop the attack.',
    date: '2026-07-03',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'For years, security training boiled down to one line: look for the typos and the broken grammar. That advice assumed the attacker was working from a second language and a text editor. That assumption no longer holds.',
    sections: [
      {
        h: 'What changed',
        ps: [
          'A large language model writes fluent, grammatically correct email in seconds, in whatever tone the attacker asks for. It can pull public details, a job title, a recent announcement, a vendor name, and weave them into a message that reads like it was written by someone who actually knows your business.',
          'None of this requires the attacker to be skilled. It requires a prompt. The old tells, the awkward phrasing, the formatting that looked slightly off, are simply gone, and they were never a reliable defense to begin with, only a convenient one.',
        ],
      },
      {
        h: 'What still works',
        ps: [
          {text: 'Technical controls do not care how fluent the email is. Domain authentication and DMARC, paired with filtering that inspects the message itself rather than trying to judge the writer\'s intent, catch what a careful reading no longer can.', links: [{phrase: 'Domain authentication and DMARC', to: '/helm-mail'}]},
          {text: 'Check your own domain first: a free scan shows whether your own email can currently be spoofed, which is the same weakness an attacker would look for before writing a single word.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Process controls hold up just as well. A callback protocol for any new or changed payment instruction, verified by phone to a known-good number, stops the fraud regardless of how convincing the email or the voice on the other end sounds.', links: [{phrase: 'callback protocol', to: '/helm-aware'}]},
        ],
      },
      {
        h: 'Retrain the goal, not the eye',
        ps: [
          'Stop training people to detect perfectly. Train them to report fast instead: the moment something feels slightly off, forwarding it to security costs nothing and catches attacks no amount of careful reading would have caught.',
          'Celebrate the reports, including the false alarms, and never punish someone for clicking. An employee who is afraid to admit a mistake sits on it, and that silence is far more costly than the click itself.',
        ],
      },
    ],
    takeaway:
      'Fluency broke the old way of spotting phishing. It did not break email authentication or a callback protocol, which is exactly why those are the controls worth putting in place now.',
  },
  {
    slug: 'cmmc-deadline-checklist',
    title: 'CMMC 2.0 Deadline: A 12-Step Checklist for Manufacturers',
    metaDesc:
      'CMMC Phase 2 enforcement starts November 10, 2026. A practical 12-step checklist for small manufacturers and defense subcontractors to get assessment-ready.',
    date: '2026-07-01',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'CMMC Phase 2 enforcement begins November 10, 2026. Fewer than 2% of the roughly 80,000 companies in the defense supply chain hold certification, and assessor calendars are booked months out. If you supply a prime, even two tiers down, here is the punch list.',
    sections: [
      {
        h: 'Steps 1 to 4: Know where you stand',
        ps: [
          'First, confirm your level. Most subs handling Federal Contract Information need Level 1 (15 basic safeguarding requirements, self-assessed annually). If you touch Controlled Unclassified Information (drawings, specs, technical data marked CUI), you need Level 2: 110 controls from NIST 800-171 and, for most contracts, a third-party assessment.',
          'Second, locate your CUI. You cannot protect what you have not mapped. Walk every place technical data lives: file servers, email, CAD stations, the quoting inbox, that USB drive in the shop office.',
          'Third, calculate your SPRS score honestly. Primes can see it, and a fabricated score is False Claims Act exposure: the DOJ has already settled cases.',
          {text: 'Fourth, get a gap assessment against all 110 controls. Two weeks of work turns "we think we\'re fine" into a scored, prioritized list.', links: [{phrase: 'gap assessment', to: '/helm-ready'}]},
        ],
      },
      {
        h: 'Steps 5 to 9: Close the gaps that matter',
        ps: [
          'Five: multi-factor authentication everywhere, the single control assessors check first. Six: FIPS-validated encryption for CUI at rest and in transit; your consumer-grade NAS probably does not qualify. Seven: access control, meaning machinists do not need the quoting drive, and the front office does not need CAD.',
          'Eight: an incident response plan you have actually rehearsed once. Nine: System Security Plan (SSP) and POA&M documents, which assessors read before they read anything else. Thin, generic templates are the most common failure.',
        ],
      },
      {
        h: 'Steps 10 to 12: Get certified without losing the year',
        ps: [
          'Ten: book your C3PAO now, not after remediation. Backlogs run three to six months, and a reservation focuses the timeline. Eleven: run a mock assessment; failing in private costs nothing, failing the real one costs a re-assessment fee and a lost season.',
          'Twelve: put monthly maintenance in place. Scores decay: a patched server drifts, an employee leaves with access intact. Primes increasingly ask for continuous compliance, not a one-time certificate.',
        ],
      },
    ],
    takeaway:
      'The deadline is fixed; the assessor backlog is not in your control. What is in your control is starting the gap assessment now: it is two weeks of work that determines whether the next twelve months are orderly or a scramble.',
  },
  {
    slug: 'cyber-insurance-questionnaire',
    title: 'How to Answer a Cyber Insurance Questionnaire (Without Voiding Your Coverage)',
    metaDesc:
      'Cyber insurance questionnaires decide your premium, and whether your claim gets paid. What the 12 common questions mean and how to answer them truthfully.',
    date: '2026-06-24',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'The questionnaire your broker sent is not paperwork: it is the contract behind the contract. Answer it wrong and one of two things happens: your premium jumps, or worse, your insurer denies the claim precisely when you need it. Courts have sided with carriers who voided policies over inaccurate application answers.',
    sections: [
      {
        h: 'The questions that actually move your premium',
        ps: [
          'Carriers cluster around the same twelve topics: multi-factor authentication (on email, remote access, and admin accounts; they ask all three separately), endpoint detection, backups that are tested and offline, email filtering, security awareness training, and whether you have a payment-verification procedure for wire transfers.',
          {text: 'MFA is the big one. Many carriers now decline to quote at all without it. If the answer today is "partially," deploying it fully is usually a week of work and the single highest-ROI change on the form.', links: [{phrase: 'MFA', to: '/helm-mail'}]},
        ],
      },
      {
        h: 'The trap: answering what you wish were true',
        ps: [
          '"Do you conduct regular security awareness training?" A lunch presentation two years ago is a no. "Are backups tested?" Having backups is not the question; restoring from them on a schedule is. Optimistic answers feel harmless at renewal time and catastrophic at claim time.',
          'The right approach: answer truthfully today, fix the gaps, then update the answers. Most carriers will re-quote mid-cycle for material security improvements: brokers do this routinely.',
        ],
      },
      {
        h: 'Turn the questionnaire into a roadmap',
        ps: [
          {text: 'Every "no" on the form is a to-do with a dollar value attached: lower premium, higher coverage limits, and a claim that actually pays. A remediation pass typically takes weeks, not quarters, at small-business scale. Then keep the evidence (screenshots, training logs, backup-test records) in one folder. At claim time, documentation is the difference between a payout and a lawsuit.', links: [{phrase: 'remediation pass', to: '/helm-ready'}]},
        ],
      },
    ],
    takeaway:
      'Treat the questionnaire as a legal document and a to-do list at once: answer truthfully, remediate the noes, and document everything. If you want the noes fixed for you at a fixed fee, that is precisely what Helm Ready does.',
  },
  {
    slug: 'wire-fraud-prevention-law-firms',
    title: 'Wire Fraud Prevention for Law Firms: The Callback Protocol',
    metaDesc:
      'Law firms lose six figures to a single spoofed email. The callback protocol, a one-page payment verification procedure, is the control that actually stops wire fraud.',
    date: '2026-06-17',
    readMin: 4,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'The scam runs the same way every time. A closing approaches. An email arrives, from the title company, the seller\'s attorney, or a partner, with "updated wire instructions." The formatting is right, the tone is right, the timing is right, because the attacker has been reading the real thread for weeks. The money leaves. It does not come back.',
    sections: [
      {
        h: 'Why smart people wire money to criminals',
        ps: [
          'Business email compromise is not a technology exploit; it is a process exploit. The attacker does not hack your bank: they compromise (or convincingly spoof) one mailbox in the chain, wait for a transaction, and inject new payment instructions at the moment of maximum time pressure.',
          {text: 'AI has made the last weak signals disappear. The broken English is gone. Voice clones now back up the email with a phone call that sounds exactly like the partner. Training people to "spot the fake" is necessary but no longer sufficient: you need email security that works even when the fake is perfect.', links: [{phrase: 'email security', to: '/helm-mail'}]},
        ],
      },
      {
        h: 'The callback protocol',
        ps: [
          {text: 'The rule fits on one page: any new or changed payment instruction is verified by calling a known-good number (from the file, from the engagement letter, from a prior invoice), never from the email that delivered the change. No exceptions for urgency, seniority, or relationship. The scam depends on bypassing exactly this step, which is why "no exceptions" is the entire control.', links: [{phrase: 'payment instruction is verified', to: '/helm-aware'}]},
          'Add dual approval above a threshold ($25K is common), and log every verification: two minutes of friction against a six-figure loss. Then drill it once: send your own fake "updated instructions" email and see what happens. Firms that test it once fix the gaps immediately.',
        ],
      },
    ],
    takeaway:
      'Email filtering keeps most attacks from arriving; the callback protocol makes the ones that arrive harmless. Put both in place and wire fraud stops being an existential risk. We deploy both: filtering via Helm Mail, protocol and drills via Helm Aware.',
  },
  {
    slug: 'what-is-dmarc',
    title: 'What Is DMARC? A Plain-English Guide for Business Owners',
    metaDesc:
      'DMARC stops criminals from sending email as your domain. What SPF, DKIM, and DMARC actually do, why "p=none" means unprotected, and how to check your domain in 30 seconds.',
    date: '2026-06-10',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Right now, anyone on the internet can try to send an email that says it is from your company. Whether it lands in an inbox or a spam folder depends on three DNS records most businesses have never looked at. Here is what they do, minus the jargon.',
    sections: [
      {
        h: 'SPF, DKIM, DMARC: the sixty-second version',
        ps: [
          'SPF is a public list of servers allowed to send email for your domain. DKIM is a cryptographic signature proving a message really came from you and was not altered. DMARC is the policy that ties them together: it tells receiving mail servers what to do when a message fails those checks: nothing (p=none), quarantine it, or reject it outright.',
          'The catch: most businesses that have DMARC at all run it at p=none, monitoring mode. That is a smoke detector with the alarm disconnected. Criminals can still send email as your exact domain, and receiving servers have been told to deliver it anyway.',
        ],
      },
      {
        h: 'Why it matters to your business specifically',
        ps: [
          {text: 'Spoofed email is the delivery mechanism for invoice fraud against your customers, sent "from you." When a customer wires money to a criminal because the invoice appeared to come from your domain, the technical failure was yours, and increasingly, so is the reputational and legal fallout. Enforced DMARC also improves deliverability of your legitimate mail, and insurers and enterprise customers now check for it.', links: [{phrase: 'Enforced DMARC', to: '/helm-mail'}]},
          'Getting to enforcement takes care: flip to p=reject carelessly and you can block your own invoices sent through QuickBooks or your marketing platform. The path is: inventory every service that sends as your domain, authorize each one in SPF/DKIM, watch the reports, then enforce.',
        ],
      },
    ],
    takeaway:
      'Check your domain today: our free scan reads your SPF, DKIM, and DMARC records and tells you in plain English whether a criminal can currently impersonate your company. It runs instantly and costs nothing.',
  },
  {
    slug: 'deepfake-ceo-fraud',
    title: 'Deepfake CEO Fraud: Real Cases and the Controls That Stop It',
    metaDesc:
      'Voice cloning needs three seconds of audio. Real deepfake fraud cases, including a $25M video-call heist, and the two controls that stop synthetic executives.',
    date: '2026-06-03',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'In the most famous case to date, a finance employee at engineering firm Arup joined a video call with the CFO and several colleagues (all of them deepfakes) and wired out roughly $25 million across fifteen transfers. The technology that pulled that off is now cheap, fast, and pointed at businesses a fraction of that size.',
    sections: [
      {
        h: 'How little the attacker needs',
        ps: [
          'Three seconds of audio, a voicemail greeting, a conference talk, a social clip, trains a usable voice clone. Your executives\' voices are already public. The attack that follows is not sophisticated: a phone call to accounts payable that sounds exactly like the owner, urgent and plausible: "I\'m boarding a flight, the acquisition closes today, wire the deposit now, keep it quiet."',
          'Smaller businesses are the growth market, not the exception. A $40K fraudulent transfer from a 30-person contractor is easier to execute and rarely makes the news: the playbook is identical.',
        ],
      },
      {
        h: 'Why detection is a losing strategy',
        ps: [
          '"Listen for robotic artifacts" was 2023 advice. Current voice synthesis passes casual inspection, and video is close behind. Any defense that depends on a stressed employee out-detecting a synthetic voice in real time will eventually fail.',
          {text: 'The controls that work are procedural, because procedure does not care how good the fake is. One: a payment-verification protocol, meaning every new or changed payment instruction gets a callback to a known-good number, no exceptions, including "the CEO" personally. Two: a deepfake drill, simulating a voice-clone request against your own finance team before a criminal does. The first drill almost always finds someone who would have wired the money.', links: [{phrase: 'payment-verification protocol', to: '/helm-aware'}, {phrase: 'deepfake drill', to: '/helm-aware'}]},
        ],
      },
    ],
    takeaway:
      'You cannot train ears to beat synthetic voices, but a callback protocol beats them every time. Helm Aware runs the deepfake drill and installs the protocol; it is a half-day that removes your single largest fraud exposure.',
  },
];
