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
          'First, confirm your level. Most subs handling Federal Contract Information need Level 1 (17 practices, self-assessed annually). If you touch Controlled Unclassified Information (drawings, specs, technical data marked CUI), you need Level 2: 110 controls from NIST 800-171 and, for most contracts, a third-party assessment.',
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
