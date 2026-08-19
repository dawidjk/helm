import type {Paragraph, LinkedParagraph} from '../lib/richText';
export type {Paragraph, LinkedParagraph};

export type Article = {
  slug: string;
  title: string;
  metaDesc: string;
  date: string;
  updated?: string;
  readMin: number;
  lane: string;
  laneTo: string;
  intro: string;
  sections: {h: string; ps: Paragraph[]}[];
  takeaway: string;
  /**
   * 'scan' (default) sends the reader to the free domain scan CTA.
   * 'book' sends compliance-research readers (cyber-insurance, HIPAA topics)
   * straight to booking a call instead, since they have already self-selected
   * into a consultative buying intent a scan doesn't serve.
   * 'book-cmmc' is the same book CTA carrying the manufacturing lane's own
   * wording, which names the 110 controls and a prime contractor. Use it only
   * on articles whose reader is a defense contractor; see ctaCopy.ts.
   */
  ctaMode?: 'scan' | 'book' | 'book-cmmc';
};

export const articles: Article[] = [
  {
    slug: 'mfa-methods-compared',
    title: 'MFA Methods Compared: Apps, SMS, and Security Keys for Small and Medium Businesses',
    metaDesc:
      'Authenticator apps, SMS codes, and hardware security keys all stop different attacks. A plain-English comparison for small and medium-sized businesses deciding where to start.',
    date: '2026-07-17',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Turning on MFA can stop a stolen password from becoming a stolen mailbox, bank login, or admin account. The method matters, though. Text messages, authenticator apps, and security keys fail in different ways, so the strongest option should protect the people who can move money or change systems.',
    sections: [
      {
        h: 'Start by covering every account',
        ps: [
          'Any multi-factor authentication beats none. A password alone is one stolen or guessed credential away from a full account takeover, and every method below closes that gap. If the choice is between debating which option is best and turning nothing on at all, turn something on today.',
          'That said, the methods are not equally strong, and knowing where each one bends helps you decide who gets which method first.',
        ],
      },
      {
        h: 'SMS codes: better than nothing, but the weakest link',
        ps: [
          'A text-message code is easy to set up and better than a password on its own, but it has two real weaknesses. SIM swapping lets an attacker convince a phone carrier to move your number onto a device they control, which sends your codes straight to them. Real-time phishing relays capture the code the moment you type it into a fake login page and use it within seconds on the real one.',
          'Neither attack is common against every small or medium-sized business, but both are well documented, and neither requires much skill once someone is specifically targeted. SMS still beats password-only, it just should not be the method protecting your most sensitive accounts.',
        ],
      },
      {
        h: 'Authenticator apps: free, stronger, and one thing to turn on',
        ps: [
          'An authenticator app generates a code on the device itself rather than sending one over the phone network, which removes the SIM-swapping risk entirely. The apps are free, widely supported, and a meaningful step up from SMS for most day-to-day accounts.',
          'Their weak spot is push-approval fatigue: an attacker who already has your password sends a flood of approval prompts hoping you tap approve once just to make them stop. Number matching, where the app makes you type a specific number shown on the login screen rather than tapping a single button, closes that gap and is worth turning on wherever it is offered.',
        ],
      },
      {
        h: 'Hardware security keys: the phishing-resistant option',
        ps: [
          'A FIDO2 security key is a small physical device that plugs in or taps to approve a sign-in. The key checks that it is communicating with the real site before it responds. If someone enters a password on a convincing fake login page, the key will not approve that page.',
          'Keys typically run under $60 each, and most people only need one plus a backup.',
        ],
      },
      {
        h: 'A sensible rollout order',
        ps: [
          'Start with the accounts that matter most: admins, and anyone who can move money or approve payments, get the strongest option, hardware security keys. Everyone else gets an authenticator app with number matching turned on. SMS is a reasonable fallback for low-risk accounts, not the default for the accounts you would miss most if they were taken over.',
          {text: 'People are more likely to use MFA correctly when they understand which attack it prevents. Ongoing security awareness training gives the rollout that context instead of leaving it as another unexplained login step.', links: [{phrase: 'Ongoing security awareness training', to: '/helm-core'}]},
          {text: 'Not sure where your own accounts currently stand? A free scan of your domain is a quick way to see what is exposed before you decide where to start.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Turn on MFA everywhere first. Then give security keys to administrators and anyone who can move money, use authenticator apps with number matching for the rest of the team, and keep text messages as a fallback.',
  },
  {
    slug: 'm365-security-baseline',
    title: 'The Microsoft 365 Security Baseline You Can Set This Week',
    metaDesc:
      'A practical Microsoft 365 security checklist for small and medium-sized businesses: MFA everywhere, no legacy authentication, separate admin accounts, and the forwarding rules attackers rely on after a breach.',
    date: '2026-07-16',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A stolen Microsoft 365 password can expose years of email, give an attacker a convincing way to impersonate your staff, and let them quietly forward future messages outside the company. Many of the settings that prevent this are already included in the license you pay for. They just need to be configured and checked.',
    sections: [
      {
        h: 'Lock the front door first',
        ps: [
          'Start with multi-factor authentication because a password alone can give an attacker access to an entire mailbox. Check the owner’s account, shared inboxes, administrator accounts, and old vendor logins. These are often the accounts missed by a partial rollout.',
          {text: 'Legacy authentication protocols let an attacker sign in with just a stolen password, bypassing MFA entirely, because those older protocols were never built to ask for a second factor. Disabling legacy auth closes a door most tenants leave open by default, and it pairs directly with the email protections behind Helm Core.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          'Separate your admin accounts from the mailbox someone checks every day. An account with global admin rights should not also be the account that opens attachments and clicks links, because compromising one compromises both.',
        ],
      },
      {
        h: 'Close what attackers do after they get in',
        ps: [
          'Turn on external-sender tagging so every message from outside the company carries a visible warning. It is a small banner, and it is one of the few controls that helps on the exact kind of email that slips past filtering: a message from a real but unfamiliar outside address.',
          'Review mail-forwarding rules on a schedule, not just after something goes wrong. A common move after a mailbox compromise is a silent auto-forward rule that sends every future message to an outside address, quietly, with no further sign-in needed. Most business owners have never checked whether one exists in their own tenant.',
        ],
      },
      {
        h: 'Make your own domain hard to fake',
        ps: [
          'SPF, DKIM, and DMARC are DNS records, not Microsoft settings, but they belong on the same checklist because they determine whether someone can send email that looks like it came from you. Without them in place, your own domain can be used against your customers and vendors, not just against you.',
          {text: 'A free scan of your domain usually checks all three in about a minute and tells you, in plain English, what is missing.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Start with MFA, disable legacy authentication, separate everyday and administrator accounts, and check for forwarding rules. Then review the public records that help stop people from impersonating your domain.',
  },
  {
    slug: 'sprs-score-explained',
    ctaMode: 'book-cmmc',
    title: 'SPRS Score Explained: What the Number Means and How to Support It',
    metaDesc:
      'How the NIST 800-171 DoD Assessment Methodology produces an SPRS score from -203 to 110, who can access it, and what evidence should support it.',
    date: '2026-07-15',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'An SPRS score can affect whether a defense contractor is eligible for covered work. If the number cannot be traced back to the systems assessed and the evidence reviewed, the company may struggle to support it when a contracting officer, customer, or government reviewer asks. A defensible score starts with a clear boundary and a calculation another qualified person can reproduce.',
    sections: [
      {
        h: 'What the score actually measures',
        ps: [
          'The NIST SP 800-171 DoD Assessment Methodology starts at 110 and subtracts the assigned value of each requirement that has not been implemented. The score can fall as low as negative 203 because some unmet requirements subtract three or five points while others subtract one.',
          'The score is a summary of implementation against the assessment methodology. It is not a general security grade and it does not prove that every system in the company was included. The system boundary and the System Security Plan determine what the number actually describes.',
        ],
      },
      {
        h: 'Who can access the score',
        ps: [
          'DFARS requires contracting officers to verify that a current summary-level score is posted for covered contractor information systems relevant to an award. Authorized representatives of the contractor can view their own score, and authorized DoD personnel can access posted assessment results.',
          'A prime contractor does not automatically receive unrestricted access to every subcontractor score. It may still require confirmation that a current assessment exists before awarding a covered subcontract. Treat the exact solicitation, contract, and flowdown language as the controlling instruction.',
        ],
      },
      {
        h: 'Why an honest number matters more than a high one',
        ps: [
          'A low, well-supported score gives the company an accurate starting point and an owned remediation plan. An inflated score creates a mismatch between the representation and the evidence.',
          'In a 2025 settlement, the Department of Justice said MORSECORP had submitted a score of 104 before a later third-party review calculated negative 142. The company agreed to pay $4.6 million to resolve False Claims Act allegations tied to cybersecurity requirements. That case is a useful warning: document the actual boundary and calculation, and do not treat a target score as the answer you need to reach on paper.',
        ],
      },
      {
        h: 'What should be in the assessment file',
        ps: [
          'Keep the current System Security Plan, a diagram or inventory defining the assessed boundary, control-by-control working papers, links to evidence, the calculation worksheet, the completion date, and the expected date for implementing unmet requirements. If more than one SSP exists, keep the score tied to the correct system and CAGE codes.',
          'The file should let another qualified reviewer follow the same methodology and understand why each requirement was marked met or not met. A screenshot without context or a policy without operating evidence is rarely enough by itself.',
        ],
      },
      {
        h: 'How to raise it without guessing',
        ps: [
          {text: 'Start with a gap assessment scored against all 110 controls. It shows which requirements are supported, which are not, and which gaps have the largest effect on the score.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
          'Use the methodology to understand which unmet requirements subtract the most points, but do not optimize the number while ignoring the system boundary or lower-weight requirements. Remediate, collect the new evidence, recalculate, and update the score through the authorized process when the assessment record changes.',
        ],
      },
    ],
    takeaway:
      'Calculate the score from a documented system boundary and keep the working papers that support every deduction. When a control or the environment changes, update the evidence and the assessment record instead of leaving an old number in place.',
  },
  {
    slug: 'password-managers-small-teams',
    title: 'Password Managers for Small Teams: What a Vault Adds Over Browser-Saved Passwords',
    metaDesc:
      'Why password reuse is the most common small-team security failure, what a shared password vault adds beyond browser-saved logins, and the order to roll one out across your team.',
    date: '2026-07-14',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Shared passwords often end up in a spreadsheet, a browser, or a message thread because the team needs a quick way to get into an account. The trouble appears when someone leaves or one reused password is exposed in an unrelated breach. The company then has to find every account that person knew before the access can be closed.',
    sections: [
      {
        h: 'How one reused password opens several accounts',
        ps: [
          'Password reuse across services is the single most common way a small team\'s accounts get compromised. Not a sophisticated attack, just the same password used on the company email, a vendor portal, and a personal account somewhere else.',
          'The mechanism is called credential stuffing. Attackers take lists of usernames and passwords leaked from breaches that have nothing to do with your business, then automatically try those same combinations against email, banking, and admin logins everywhere else. A breach at a site you have never heard of can unlock an account you actually care about.',
        ],
      },
      {
        h: 'What a vault adds that browser-saved passwords do not',
        ps: [
          'Saving passwords in the browser beats reusing the same one everywhere, but it stops at the individual. It does not solve the problem every small team has: shared logins for the utility portal, the company social accounts, and an admin console that more than one person needs into.',
          'Without a shared vault, those logins tend to live in a spreadsheet or a sticky note, and whoever set them up is often the only one who remembers where. A team vault adds access control over who can see which credential, instant revocation the day someone leaves instead of a slow password-reset scramble, generated unique passwords instead of reused ones, and flagging of passwords that are weak or already reused elsewhere.',
          'That revocation piece matters more than it sounds. Without a vault, a departed employee routinely keeps working access to shared accounts long after their last day, simply because nobody remembered every login they knew.',
        ],
      },
      {
        h: 'Master password, MFA, and the order to roll it out',
        ps: [
          'The vault is only as strong as its master password, so make it a long passphrase, several unrelated words strung together, rather than a short password with a symbol swapped in. Pair that master password with MFA on the vault itself.',
          'A vault does not replace MFA on the underlying accounts. Turn MFA on for email, banking, and admin logins the same as you would without a vault; the vault manages the password, not the second factor.',
          {text: 'Roll it out in order rather than all at once: admin and financial accounts first, since those carry the most risk, then the shared credentials living in spreadsheets and sticky notes, then everyone else\'s individual logins. Pairing the rollout with a short explanation of how credential stuffing actually works, the kind of thing covered in ongoing security awareness training, cuts down on people quietly going back to old habits.', links: [{phrase: 'ongoing security awareness training', to: '/helm-core'}]},
          {text: 'After the passwords and shared accounts are under control, check the public email records that affect domain impersonation. The free scan usually reports on those records in about a minute.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'A team vault makes it possible to use a different password for every service and remove someone from shared accounts in one place. Start with administrator, financial, and shared logins before moving the rest of the team.',
  },
  {
    slug: 'cmmc-level-1-vs-level-2',
    ctaMode: 'book-cmmc',
    title: 'CMMC Level 1 vs Level 2: Which One Does Your Shop Actually Need?',
    metaDesc:
      'CMMC Level 1 and Level 2 require very different things. How to tell which one applies to your shop based on your contracts, not your headcount.',
    date: '2026-07-13',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'Choosing the wrong CMMC level can send a shop down two expensive paths: building controls it was never asked to maintain, or affirming readiness for a contract while important requirements remain unmet. The answer comes from the contract clauses and the information the shop handles, not from its headcount.',
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
          'Level 2 covers 110 requirements in NIST SP 800-171 Revision 2. Under the Phase I rules now in force, Level 2 uses a self-assessment every three years with an annual affirmation. The Department suspended the planned Phase II expansion on July 13, 2026, including the broader use of third-party Level 2 certification requirements. It says Revision 2 will continue to be enforced through self-assessments and selected government-led assessments during the review.',
          'The jump from Level 1 to Level 2 is not a small increment. Level 2 requires a defined system boundary, a current System Security Plan, control-level evidence, a score, and ongoing ownership of the requirements that apply to the CUI environment.',
        ],
      },
      {
        h: 'How to tell which one applies to you',
        ps: [
          'The clauses in your contract tell you directly: look for DFARS 252.204-7012, 7019, 7020, and 7021. Their presence, and how they are flowed down, points to whether you are being asked to handle CUI or only FCI.',
          'When the contract language is ambiguous, ask your prime in writing which category your work falls into and keep the answer on file. Do not guess, and do not assume.',
          {text: 'Do not assume Level 1 just because you are a small shop. Company size has no bearing on the requirement: a ten-person shop machining a part from a marked drawing is handling CUI just like a thousand-person prime. A gap assessment against the full control set tells you where you actually stand before an assessor does.', links: [{phrase: 'small shop', to: '/manufacturing'}, {phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'What to collect before a readiness review',
        ps: [
          'Bring the relevant solicitation and contract clauses, every cybersecurity flowdown received from a prime, representative files or markings, a list of systems that store or transmit the information, and any current SPRS assessment or System Security Plan. That is enough to start a boundary and applicability discussion without pretending the answer comes from a generic checklist.',
          'Record the conclusion and the person or contract source that supports it. If the prime clarifies the information category or required level, keep that written answer with the contract file so the same question does not have to be reconstructed at the next bid or renewal.',
        ],
      },
    ],
    takeaway:
      'Review the clauses and determine whether the work involves FCI or CUI. If the contract is unclear, get the prime contractor’s answer in writing before deciding which requirements to assess.',
  },
  {
    slug: 'invoice-fraud-red-flags',
    title: 'Invoice Fraud Red Flags: What to Check Before You Pay a Vendor',
    metaDesc:
      'The red flags that separate a legitimate vendor payment change from an invoice fraud attempt, and the callback habit that catches it every time.',
    date: '2026-07-12',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Invoice fraud succeeds when a familiar vendor appears to change its banking details and the payment goes out before anyone calls to confirm. The invoice may use the right amount, project, logo, and contact name. One altered account number is enough to send the money to a criminal.',
    sections: [
      {
        h: 'Why this is worth ten minutes of your attention',
        ps: [
          'Vendor impersonation and business email compromise are consistently among the costliest categories of internet crime reported to the FBI each year. The exact numbers move year to year, but the pattern does not: this is one of the most common ways businesses lose money to fraud, not a rare or exotic scam.',
          'The classic version targets a relationship you already have. An email arrives that looks like it is from a vendor you already pay, asking you to update their banking details before the next invoice goes out.',
        ],
      },
      {
        h: 'The red flags, in order of how often they show up',
        ps: [
          'New banking details on an existing vendor relationship are the strongest warning by themselves. Urgency, late-fee pressure, a new contact, a one-character change in the sender domain, or a reply-to address that differs from the display name give you more reasons to stop the payment and verify the request.',
          'One more flag matters as much as the others: any request to keep the change quiet, skip your normal approval process, or move fast because something is time-sensitive. Legitimate vendors do not ask you to bypass your own controls.',
        ],
      },
      {
        h: 'Confirm the change before the money moves',
        ps: [
          'Call back a known number from your own records, never a number in the email itself, before changing any payment details. This single habit defeats nearly every version of this scam, because the fraudster cannot answer a call placed to the vendor\'s real office.',
          'Add dual approval above a set dollar threshold so no single person can push a payment change through alone, even under pressure. Between the callback and the second set of eyes, both the easy version of this scam and the more convincing one get caught.',
        ],
      },
      {
        h: 'Protect your own name too',
        ps: [
          {text: 'The same scam runs in the other direction: someone spoofs your domain and sends a fake invoice or a fake banking change to your own customers. DMARC and proper email authentication make your domain much harder to fake, which protects your customers and your reputation at the same time.', links: [{phrase: 'DMARC and proper email authentication', to: '/helm-core'}]},
          {text: 'A free scan of your domain checks whether the related public authentication records are published and how they are configured.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Treat every change to vendor banking details as unverified until someone calls a known number from the company’s existing records. Add a second approver for larger payments and protect your own domain from being used in the same scam.',
  },
  {
    slug: 'what-a-soc-actually-does',
    title: 'What a SOC Actually Does (and Why an Alert Is Not the Same as a Response)',
    metaDesc:
      'What a security operations center actually does around the clock, why EDR software alone still needs a human behind it, and the questions to ask before buying a managed SOC subscription.',
    date: '2026-07-11',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Security software can raise an alert at 2 a.m., but the alert does not investigate itself. If nobody reviews it until the office opens, an attacker may have hours to spread, steal data, or disable systems. A security operations center provides the people who investigate those alerts and take action around the clock.',
    sections: [
      {
        h: 'An alert is not the same as a response',
        ps: [
          'EDR software detects suspicious activity and raises an alert. A person still needs to decide whether the alert is harmless or an active attack and then take the appropriate action. That decision may be needed in the afternoon, overnight, or during a holiday.',
          'A SOC is the team that does that watching, triaging, and containing. Left alone, an EDR alert just sits in a dashboard until someone with the right access opens it, reads it, and acts.',
        ],
      },
      {
        h: 'Why continuous coverage is hard to build yourself',
        ps: [
          'Watching alerts around the clock is not a part-time job for one person. It takes multiple analysts covering different shifts so someone is always awake and paying attention, which is a staffing commitment that is simply out of reach for most small and medium-sized businesses on their own.',
          'Attackers know this, and they plan around it. Nights, weekends, and holidays are not random timing, they are deliberately chosen because fewer people are watching. Attackers also commonly sit quietly inside a network for a while before doing anything visible, which is exactly the kind of activity that only shows up if someone is actually looking.',
        ],
      },
      {
        h: 'What a managed SOC actually buys you',
        ps: [
          'A managed detection and response service uses one security operations team to monitor many customers. That gives a smaller business round-the-clock coverage without hiring enough analysts to staff every shift itself.',
          {text: 'Helm Core provides 24/7 managed detection and response for covered devices, giving a smaller business access to human analysts without having to staff overnight and weekend shifts itself.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          'Before signing with any provider, ask who investigates an alert and whether that team can isolate an infected machine or only send a notification. Also ask how and when your company will be contacted when the activity is real.',
          {text: 'A free scan of your domain can identify public email-security gaps worth discussing before you compare broader monitoring services.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Before buying monitoring, ask who investigates an alert, whether that team can isolate a device, and how your company will be contacted. Those answers determine whether you are buying a response or another dashboard to check.',
  },
  {
    slug: 'cyber-insurance-claim-denied',
    ctaMode: 'book',
    title: 'Why Cyber Insurance Claims Get Denied (and How to Keep Yours Payable)',
    metaDesc:
      'Cyber insurance claims get denied for reasons that trace back to the application, not the incident. The four common denial paths and how to keep your policy payable.',
    date: '2026-07-09',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A business usually discovers a problem with its cyber-insurance application after an incident, when the carrier compares the answers on the form with the controls that were actually running. If MFA, backups, or training were overstated, the company can face a denied claim or even lose the policy when it needs the coverage most.',
    sections: [
      {
        h: 'The four common denial paths',
        ps: [
          'Application misrepresentation happens when an answer on the questionnaire does not match reality when the form is signed. A second problem occurs when a control was in place at renewal but stopped working before the incident.',
          'Policies also contain reporting deadlines and exclusions. Missing a notice window can jeopardize coverage, and some losses, including specific fraud scenarios, may be outside the policy from the start.',
          'Application misrepresentation is not hypothetical. In Travelers v. International Control Services (2022), the carrier sought rescission of the policy over a misrepresentation about multi-factor authentication on the application, and the policy was rescinded by agreement. The lesson generalizes well beyond that one case: what you wrote on the form has to be true.',
        ],
      },
      {
        h: 'When a control changes after renewal',
        ps: [
          'It is easy to treat the application as a snapshot: true on the day you signed it, close enough after that. Carriers do not see it that way. The answers are warranties that are expected to remain true for the entire policy year, not a one-time disclosure.',
          'A control that was working at renewal but stopped months later can still create a coverage problem. At claim time, the carrier will look at whether the control was operating when the incident happened, not only when the application was signed.',
        ],
      },
      {
        h: 'Keep it payable',
        ps: [
          'Keep an evidence folder, not just a memory of good intentions: training logs, backup-test records, MFA screenshots, dated and organized. When a claim is filed, this folder is what turns "we believe we were compliant" into proof.',
          {text: 'Carriers may check technical basics such as public email authentication. A free scan of your own domain reports how those public records are configured before a questionnaire or review.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Re-verify your answers at every renewal instead of rolling over last year\'s form, and remediate gaps at a fixed fee rather than letting them sit until the next application asks again.', links: [{phrase: 'remediate gaps at a fixed fee', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Check that every application answer remains true throughout the policy year and keep dated evidence to support it. If a control stops working, fix it and document what happened before a future claim forces the issue.',
  },
  {
    slug: 'vendor-email-compromise-contractors',
    title: 'Vendor Email Compromise: When Your Supplier\'s Invoice Is Actually a Scam',
    metaDesc:
      'How fraudsters compromise or spoof a supplier or general contractor to redirect payment on a real invoice, and the callback and DMARC controls that stop it before the money moves.',
    date: '2026-07-08',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'A fake supplier invoice may include the correct job number, amount, letterhead, and contact name because the attacker has been reading a real email thread. Only the bank account has changed. If the office pays it without calling the supplier, the job can be complete while the legitimate invoice is still unpaid.',
    sections: [
      {
        h: 'How the scam actually runs',
        ps: [
          {text: 'A fraudster compromises or convincingly spoofs the email of a supplier or a general contractor somewhere in your job, then waits for the moment an invoice or a payment is naturally due. Mid-job is the ideal window: enough trust has built up between the parties that an "updated banking details" email does not raise an eyebrow.', links: [{phrase: 'general contractor', to: '/contractors'}]},
          'The email itself usually is not sloppy. It references the actual job, the actual amount owed, sometimes an actual person\'s name pulled from a real thread the attacker has been reading. The only change is a routing number and an account number, and that change is the entire scam.',
        ],
      },
      {
        h: 'The control that stops it: callback, no exceptions',
        ps: [
          'Any new or changed banking instruction, on any invoice, from any supplier or GC, gets verified with a phone call to a number you already had on file, never a number provided in the email making the change. That single rule stops nearly every version of this scam, because the fraudster cannot answer a call to a real supplier\'s real office.',
          'The rule has to survive urgency to be worth having. A scam that arrives with a tight deadline, a threat to hold up the job, or pressure from someone posing as a decision-maker is testing whether the rule bends. Write it down as a rule with no exceptions, not a habit, so nobody on your crew has to make that judgment call alone under pressure.',
        ],
      },
      {
        h: 'Protect your own name too',
        ps: [
          {text: 'The same scam runs in the other direction: someone spoofs your company\'s domain and sends a fake invoice to one of your own customers. DMARC on your domain, set up correctly, is what stops your business name from being used to defraud the people who trust you.', links: [{phrase: 'DMARC on your domain', to: '/helm-core'}]},
          {text: 'Lookalike domains are the other half of this: a supplier name spelled with a swapped letter or a different ending, close enough to pass a fast read on a phone screen. The free scan does not search for lookalike registrations, but it does report how your own public email authentication is configured.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Call a supplier using a number already in your records before accepting new banking details. Keep that rule in place even when a deadline is tight, and protect your own domain so customers are less likely to receive the same request in your name.',
  },
  {
    slug: 'shadow-ai-at-work',
    title: 'Shadow AI: What Employees Paste into Chatbots When Nobody Is Looking',
    metaDesc:
      'Employees may paste client data and contract terms into AI chatbots the company never approved. Learn what can go wrong and how a practical AI-use policy helps.',
    date: '2026-07-07',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'An employee who wants help summarizing a contract or cleaning up a client email may paste it into a public chatbot without realizing the information has now left the company’s approved systems. The employee is usually trying to work faster, not break a rule. If the company has never explained what is safe to share, people will make that decision on their own.',
    sections: [
      {
        h: 'What shadow AI actually is',
        ps: [
          'Shadow AI is a chatbot or AI tool used on company information without approval or review. Employees reach for these tools because they can draft an email, summarize a document, or clean up code quickly. Without an approved option, convenience often decides which tool gets used.',
          'Blanket bans do not work here. Block the tool on the office network and employees route around it on their phones or personal laptops, often with company data still attached, just further from any oversight than before.',
        ],
      },
      {
        h: 'What can leave the company through a prompt',
        ps: [
          'The obvious risk is client data and contract terms typed straight into a prompt: names, numbers, terms that were never meant to leave the building, now sitting inside a third party\'s system.',
          'Less obvious is what happens to that data afterward. Some tools retain inputs or use them to improve their models, depending on the account type and settings, often without the employee ever checking which applies to them. Add a personal account with weak or no additional protections holding company information, and the exposure compounds.',
          'The output creates another problem when it is copied into a client deliverable or used for a decision without review. A confident answer can still be wrong.',
        ],
      },
      {
        h: 'Give employees a safe way to use it',
        ps: [
          'A short acceptable-use policy that says plainly what can and cannot go into a prompt closes most of the gap on its own, because most employees want to do the right thing once they know what it is.',
          {text: 'Give employees a short list of approved tools so they have a practical alternative. A periodic audit can then show whether the tools used in daily work still match the policy.', links: [{phrase: 'periodic audit', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Give employees an approved option and a short list of information that must never go into a public chatbot. Then check which tools are actually being used so the policy keeps pace with the work.',
  },
  {
    slug: 'cyber-insurance-application-walkthrough',
    ctaMode: 'book',
    title: 'Walking Through a Cyber Insurance Application Without Tripping Over Your Own Answers',
    metaDesc:
      'What a cyber insurance application actually asks, why the answers are treated as sworn statements rather than a survey, and the order to work through it in.',
    date: '2026-07-06',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A quick “yes” on a cyber-insurance application can become an expensive problem later. After an incident, the carrier can compare that answer with configuration records, training logs, and backup tests. If the evidence shows the control was only partly deployed, the claim may be disputed when the business is already dealing with the loss.',
    sections: [
      {
        h: 'What the application actually asks',
        ps: [
          'The questions usually cover MFA for email, remote access, and administrator accounts; device detection and response; protected backups and tested restores; patching; security awareness training; and incident response.',
          'Read the qualifiers carefully. “MFA on email” and “MFA on every remote and administrator account” are not the same answer. “We have backups” also does not answer whether they are isolated or have been restored successfully.',
          'Carriers ask because each control can limit the size of a loss. The wording matters, however, because “MFA enabled” may mean every account to an underwriter and only most accounts to the person filling out the form.',
        ],
      },
      {
        h: 'Why the answers matter more than a form usually does',
        ps: [
          'Your answers are treated as attestations the insurer is entitled to rely on, not a rough self-assessment. Answer inaccurately, even without meaning to mislead anyone, and you risk denial of a future claim or rescission of the policy entirely. Carriers have litigated cases specifically over MFA misstatements on applications, which is a sign of how closely this particular answer gets checked.',
          'Answer for what is running today, not what the company plans to finish next month. If MFA is enabled on most accounts but not all of them, an unqualified “yes” can give the carrier grounds to challenge a later claim.',
        ],
      },
      {
        h: 'The right order: fix or document first, answer second',
        ps: [
          'Work through the questions in this order: fix the gap if you can before you answer, or if you cannot fix it in time, document honestly what you actually have in place and why. Answering first and hoping to close the gap later is backwards, and it is the version of this that gets found out at the worst possible time.',
          'Gather your evidence as you go: screenshots of MFA settings, backup and restore logs, your written policies. Keep it all in one place. If a claim is ever filed, that folder is what turns your answers from a claim into proof.',
        ],
      },
      {
        h: 'Start weeks before renewal, not the night before',
        ps: [
          'Better, more accurate answers generally translate into better premiums and more carrier options, because you are giving underwriters a clearer, more complete picture to price against rather than a vague one they have to price cautiously.',
          {text: 'None of this works on the night before renewal. Start weeks ahead so there is actually time to close a gap instead of just noting it, and treat the review as part of your ongoing professional services security program rather than a once-a-year scramble.', links: [{phrase: 'professional services security program', to: '/professional-services'}]},
          {text: 'A readiness review checks the controls before the application is signed, leaving time to fix incomplete deployment or document an accurate answer.', links: [{phrase: 'readiness review', to: '/helm-command'}]},
          {text: 'A free scan of your domain is a fast way to see where a few of those answers already stand.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Start several weeks before renewal. Verify each answer, save the supporting evidence, and either fix an incomplete control or describe it accurately before signing the form.',
  },
  {
    slug: 'hipaa-email-rules-small-practices',
    ctaMode: 'book',
    title: 'HIPAA Email Rules for Small Practices: What "Addressable" Actually Means',
    metaDesc:
      'What the HIPAA Security Rule actually requires for email containing PHI, why an addressable specification is not the same as optional, and the baseline that keeps a small practice covered.',
    date: '2026-07-05',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'Emailing patient information to the wrong person, through a personal account, or without the safeguards the practice selected can create a breach investigation and a difficult patient conversation. HIPAA does not ban email, but the practice needs a documented way to protect electronic patient information while it is being sent.',
    sections: [
      {
        h: 'What the Security Rule requires, and what "addressable" means',
        ps: [
          'The HIPAA Security Rule requires safeguards for electronic PHI while it is in transit, meaning while it is moving between you and someone else, not just while it sits on a server.',
          'Encryption in transit is listed as an "addressable" specification, and that word gets misread constantly. Addressable does not mean optional. It means you either implement it, or you document a specific, reasonable alternative and the reasoning behind choosing it. Skipping it with no documentation is not a valid third option.',
        ],
      },
      {
        h: 'The business associate agreement you cannot skip',
        ps: [
          'Any email provider that stores or transmits ePHI on your behalf needs a business associate agreement, a BAA, in place before that PHI ever touches their system.',
          'Free consumer email accounts do not offer a BAA. Google Workspace and Microsoft 365 business plans can support one, so patient information should stay in a properly configured business tenant rather than a personal account.',
          {text: 'Helm Core adds phishing and impersonation protection for compatible business tenants, but it does not include encrypted-message delivery or secure file transfer. Helm Command can separately assess the practice\'s email and HIPAA safeguards before any remediation or secure-email solution is proposed.', links: [{phrase: 'Helm Core', to: '/helm-core'}, {phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
      {
        h: 'The patient exception, and the baseline that covers you',
        ps: [
          'A patient can ask to receive their own information by unencrypted email, and the practice may honor that request after warning them plainly of the risk. That exception applies to the patient\'s own records going to the patient, not to PHI moving between staff, referring providers, or billing.',
          'A message containing PHI that goes to the wrong recipient may trigger a breach analysis even when the mistake was accidental. Safeguards and staff training need to be in place before someone selects the wrong address, not added after the message is gone.',
          'A practical baseline includes business email under a signed BAA, MFA on every mailbox, an approved secure-delivery method when the workflow requires it, staff training, and no PHI sent through personal accounts.',
          {text: 'A HIPAA gap assessment can show where a professional services practice meets that baseline and where the documented workflow or evidence is incomplete.', links: [{phrase: 'HIPAA gap assessment', to: '/helm-command'}, {phrase: 'professional services practice', to: '/professional-services'}]},
        ],
      },
    ],
    takeaway:
      'Use business email covered by a signed BAA, require MFA, train staff on when secure delivery is needed, and keep patient information out of personal accounts. If the practice chooses an alternative to an addressable safeguard, document why it is reasonable.',
  },
  {
    slug: 'ai-phishing-red-flags',
    title: 'AI Phishing: Why "Look for the Typos" Is Dead Advice',
    metaDesc:
      'AI-written phishing emails are fluent, personalized, and sent at scale. Why the old typo-spotting advice no longer works, and the controls that still stop the attack.',
    date: '2026-07-03',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A polished phishing email can now match a colleague’s tone, mention a real vendor, and arrive without the spelling mistakes employees were taught to notice. If training still depends on spotting bad grammar, a convincing message can reach the payment or login step before anyone sees a warning sign.',
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
          {text: 'Technical controls do not care how fluent the email is. Domain authentication and DMARC, paired with filtering that inspects the message itself rather than trying to judge the writer\'s intent, catch what a careful reading no longer can.', links: [{phrase: 'Domain authentication and DMARC', to: '/helm-core'}]},
          {text: 'Check your own domain first: a free scan reports how your public email authentication is configured, which helps identify gaps worth fixing before an impersonation attempt.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Process controls hold up just as well. A callback protocol for any new or changed payment instruction, verified by phone to a known-good number, stops the fraud regardless of how convincing the email or the voice on the other end sounds.', links: [{phrase: 'callback protocol', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Train people to report quickly',
        ps: [
          'Stop training people to detect perfectly. Train them to report fast instead: the moment something feels slightly off, forwarding it to security costs nothing and catches attacks no amount of careful reading would have caught.',
          'Celebrate the reports, including the false alarms, and never punish someone for clicking. An employee who is afraid to admit a mistake sits on it, and that silence is far more costly than the click itself.',
        ],
      },
    ],
    takeaway:
      'Stop asking employees to judge an email by its grammar. Make suspicious messages easy to report, protect the domain and mailbox, and verify payment changes through a known phone number.',
  },
  {
    slug: 'cmmc-deadline-checklist',
    ctaMode: 'book-cmmc',
    title: 'CMMC After the Phase 2 Suspension: A 12-Step Checklist for Manufacturers',
    metaDesc:
      'CMMC Phase II was suspended in July 2026. Phase I self-assessments remain. A 12-step readiness checklist for manufacturers and defense subcontractors.',
    date: '2026-07-25',
    updated: '2026-08-18',
    readMin: 7,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'The July 2026 suspension of CMMC Phase II did not erase the cybersecurity requirements already appearing in defense contracts. A manufacturer that stops its readiness work may still face a self-assessment, an unsupported SPRS score, or a customer asking for evidence the shop cannot produce. The practical response is to confirm the contract, keep the assessment current, and avoid spending against a deadline or assessment route that no longer applies.',
    sections: [
      {
        h: 'Steps 1 to 4: Know where you stand',
        ps: [
          'First, confirm your level. Contractors handling Federal Contract Information may fall under Level 1 and its 15 basic safeguarding requirements. If the agreed scope processes, stores, or transmits Controlled Unclassified Information, Level 2 and the 110 Revision 2 requirements may apply. Confirm the information category and the clauses rather than deciding from company size.',
          'Second, locate your CUI. You cannot protect what you have not mapped. Walk every place technical data lives: file servers, email, CAD stations, the quoting inbox, that USB drive in the shop office.',
          'Third, calculate the SPRS score honestly when the assessment requirement applies. Keep the boundary, methodology, working papers, and evidence that reproduce the number. The Department of Justice has resolved False Claims Act allegations involving unsupported cybersecurity representations, including a case centered on a large mismatch between a submitted score and a later assessment.',
          {text: 'Fourth, run a gap assessment against the applicable control set. The useful deliverable is a scored, evidence-linked list that separates what is implemented, what is not proven, and what still needs remediation.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Steps 5 to 9: Close the gaps that matter',
        ps: [
          'Five: implement multi-factor authentication where the requirement and system design call for it, and preserve the configuration evidence. Six: identify where approved cryptography is required to protect CUI and verify the actual product, mode, and boundary rather than relying on a marketing label. Seven: limit access so each role reaches only the CUI and systems needed for its work.',
          'Eight: write and rehearse the incident response process, including the contract-driven reporting path. Nine: keep the System Security Plan current and maintain an owned remediation record for unmet requirements. Generic templates are not evidence that the described control is operating.',
        ],
      },
      {
        h: 'Steps 10 to 12: Stay ready without wasting the year',
        ps: [
          'Ten: do not reserve a third-party assessment solely because of the former Phase II date. Recheck the current DoD guidance and the specific solicitation or contract before committing to an assessment route. Eleven: run an internal mock assessment anyway because the underlying Revision 2 requirements and evidence work remain relevant.',
          'Twelve: assign recurring maintenance. Review access changes, evidence, open remediation, the SSP, and assessment dates on a schedule. A score and policy set can become inaccurate when systems, people, vendors, or the CUI boundary change.',
        ],
      },
    ],
    takeaway:
      'Confirm what the current contract requires before changing course. Keep the system boundary, assessment, score, and supporting evidence current while DoD reviews the next phase of the program.',
  },
  {
    slug: 'job-site-devices-public-wifi',
    title: 'Job Site Devices and Public Wi-Fi: What Actually Puts a Contractor at Risk',
    metaDesc:
      'Why public Wi-Fi is not the real risk for contractors working out of a truck or a job site, what is, and the basic mobile device settings that stop a lost phone from becoming a full account takeover.',
    date: '2026-06-30',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'The more likely job-site problem is not someone quietly reading encrypted traffic on public Wi-Fi. It is a lost phone with email still open, a shared tablet signed in as the owner, or a fake hotspot that captures a password. Any of those can expose job details, payment messages, and the accounts used to run the business.',
    sections: [
      {
        h: 'The Wi-Fi myth, and what replaced it',
        ps: [
          'With HTTPS now standard on nearly every site you actually use, someone snooping on coffee shop or job site Wi-Fi is a much smaller risk than the old folklore suggests. That specific fear is mostly out of date.',
          'The real Wi-Fi risks are fake hotspots set up to look like the real network, and captive-portal lookalike pages designed to harvest a login the moment someone types it in. A phone\'s own hotspot is safer than connecting to any public network at all, and it is usually just as easy.',
        ],
      },
      {
        h: 'The device itself is the real exposure',
        ps: [
          'A lost or stolen phone or tablet that is logged into an email account with no screen lock is not a minor inconvenience, it is a full account takeover the moment it leaves someone\'s hands.',
          'Microsoft 365 and Google Workspace business plans can include basic mobile device management features such as requiring a screen lock, encrypting the device, and remotely wiping a lost device. Those controls are part of your productivity tenant, not Helm Core itself, and the available features depend on your license.',
          {text: 'A shared job-site tablet signed straight into the owner\'s mailbox is a standing risk for any contractor, because everyone who touches that tablet effectively has the owner\'s access. Give it its own limited account instead of the owner\'s login.', links: [{phrase: 'any contractor', to: '/contractors'}]},
        ],
      },
      {
        h: 'One rule that has to survive the field',
        ps: [
          'Never approve a banking or payment-detail change from the field, no matter how the request arrives or how urgent it sounds. Call back a known number from the office first, every time, before anything changes.',
          {text: 'None of this replaces basic email security either. A free scan reports how your domain\'s public authentication records are configured, which is worth knowing before a crew member is troubleshooting it from a truck.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Require screen locks and encryption, give shared tablets limited accounts, and use a phone hotspot when the available network looks questionable. Never approve changed payment instructions from the field without calling a known number.',
  },
  {
    slug: 'employee-offboarding-checklist',
    title: 'The Employee Offboarding Checklist Most Companies Run From Memory (and Miss)',
    metaDesc:
      'A written employee offboarding checklist covering account access, sessions, shared credentials, devices, and the SaaS accounts most companies forget to close.',
    date: '2026-06-29',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'When an employee leaves, their access does not disappear with them. Email may still be open on a phone, browser sessions can remain active, and shared passwords may continue to work. If those accounts are closed gradually over the next week, a former employee or anyone using one of their devices can still read company information or act in the company’s name. A same-day checklist prevents that access from being forgotten.',
    sections: [
      {
        h: 'Same day, not sometime this week',
        ps: [
          'Suspend the account on the person’s last day instead of deleting it. The former employee loses the ability to sign in immediately, while the company keeps the email and files coworkers may still need.',
        ],
      },
      {
        h: 'A password reset alone does not end access',
        ps: [
          'Resetting the password does not always close sessions that are already active on a phone, laptop, or browser. Revoke those sessions and remove registered MFA devices so an already signed-in device cannot continue opening company email or files.',
          'Check for auto-forwarding rules the person may have set up, intentionally or not. A forwarding rule quietly sending copies of future mail to a personal account is one of the easiest things to miss and one of the most useful things for an attacker, or a disgruntled former employee, to have left behind.',
        ],
      },
      {
        h: 'The credentials nobody remembers to rotate',
        ps: [
          'Rotate any shared credential the person knew: the office Wi-Fi password, company social media logins, banking portal access, and any other shared login used across the team. If it was shared, assume it needs to change the moment someone with access leaves.',
        ],
      },
      {
        h: 'Devices, personal phones, and the account nobody thinks about',
        ps: [
          'Collect company-owned devices and remove company data or work profiles from any personal phone that had them installed. This step is easy to remember for a laptop and easy to forget for a phone that only ever had the company email app on it.',
          'The most commonly missed item on the entire list is third-party SaaS accounts created outside your main login system: a tool someone signed up for directly with a company card, never connected to single sign-on, that nobody else on the team knew existed.',
          'If the team needs continuity on the mailbox itself, convert it to a shared mailbox rather than leaving it as an active individual login. That keeps the history accessible without keeping an account open that does not need to be.',
        ],
      },
      {
        h: 'Run it from a checklist, not from memory',
        ps: [
          {text: 'Put these steps on one checklist with a named owner and a completion time. Ongoing security awareness training can reinforce why managers, IT, and payroll need to start the process together instead of assuming someone else handled it.', links: [{phrase: 'Ongoing security awareness training', to: '/helm-core'}]},
          {text: 'A free scan of your domain is a good companion check while you are reviewing access controls, since it shows some of the same exposure an attacker, or a departing employee, would be looking for.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'On the employee’s last day, suspend the main account, revoke active sessions, remove MFA devices, rotate shared passwords, collect equipment, and close separately created apps. Give one person responsibility for confirming the list is complete.',
  },
  {
    slug: 'backup-testing-insurers',
    ctaMode: 'book',
    title: 'Backup Testing: What Cyber Insurers Actually Want to See',
    metaDesc:
      'Cyber insurance questionnaires now ask about offline and immutable backups, encryption, and tested restores, not just whether you back up. The 3-2-1 rule and how to document restore tests.',
    date: '2026-06-27',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A backup can report “successful” every night and still fail when ransomware shuts down the business. It may be reachable from the infected network, missing important data, or impossible to restore within a useful amount of time. Cyber insurers ask about offline copies and restore tests because the existence of a backup does not prove the company can recover.',
    sections: [
      {
        h: 'What the questionnaire is really asking',
        ps: [
          {text: 'Modern cyber insurance applications separate backup questions that were once combined. They may ask whether a copy is offline or immutable, whether it is encrypted, and whether the business has completed a recent restore test. “We back up nightly” does not answer those questions.', links: [{phrase: 'cyber insurance', to: '/professional-services'}]},
          'The 3-2-1 rule is the shorthand carriers are checking for even when they do not spell it out: three copies of your data, on two different types of media, with one copy offline or otherwise out of reach of whatever compromised the network. A single backup sitting on the same network as everything else fails this on the first question.',
        ],
      },
      {
        h: 'Test whether the data can actually be restored',
        ps: [
          'Backups fail quietly. A job that has been "completing successfully" for a year can still be backing up a corrupted database, missing a folder that got excluded by accident, or writing to a drive that filled up months ago and has been silently failing since. You do not find out until the day you need it.',
          'A restore test answers the only question that matters: if your network went down right now, could you actually get the data back, in a usable form, in a reasonable amount of time. Everything else on the questionnaire is a proxy for that one fact.',
        ],
      },
      {
        h: 'Document it, because attestations are warranties',
        ps: [
          'Insurers may rely on the backup answers throughout the policy year. If the process was working at renewal but later stopped being tested or protected, the company may have trouble supporting its application when a claim is reviewed.',
          {text: 'Document quarterly restore tests: date, what was restored, how long it took, who verified it. That log is what turns "we believe our backups work" into proof at claim time. It is worth checking your email authentication with the same discipline; a free scan reports the public records a reviewer can query today.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'If quarterly restore tests are not happening yet, building the schedule and the documentation around them is a fixed, contained piece of work, not an open-ended project.', links: [{phrase: 'fixed, contained piece of work', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep an offline or immutable copy and test a real restore on a schedule. Record what was restored, how long it took, who checked it, and what had to be fixed afterward.',
  },
  {
    slug: 'cyber-insurance-questionnaire',
    ctaMode: 'book',
    title: 'How to Answer a Cyber Insurance Questionnaire (Without Voiding Your Coverage)',
    metaDesc:
      'Cyber insurance questionnaires decide your premium, and whether your claim gets paid. What the 12 common questions mean and how to answer them truthfully.',
    date: '2026-06-24',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'The cyber-insurance questionnaire can determine both the price of the policy and whether the coverage holds up after an incident. An optimistic answer about MFA, backups, or training may seem harmless during renewal, but it can be compared with technical records when the business files a claim.',
    sections: [
      {
        h: 'The questions that actually move your premium',
        ps: [
          'Carriers commonly ask about MFA, device detection, offline or immutable backups, restore tests, email filtering, security awareness training, incident response, and payment verification.',
          'Check whether each question applies to every relevant account, device, or employee. A control that covers only part of the business may require a qualified answer.',
          {text: 'MFA is one of the controls carriers examine closely. If it is only partly deployed, identify the uncovered accounts and finish the rollout before answering “yes.”', links: [{phrase: 'MFA', to: '/helm-core'}]},
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
          {text: 'Treat every “no” or partial answer as a decision: fix the control before signing, describe the limitation accurately, or ask the broker how it affects coverage. A remediation pass can organize that work. Keep screenshots, training logs, and backup-test records together so the answer can be supported later.', links: [{phrase: 'remediation pass', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Verify every answer before signing, fix or accurately disclose incomplete controls, and save the evidence in one place. Helm Command can help assess and organize the gaps under a fixed scope.',
  },
  {
    slug: 'ssp-poam-explained',
    ctaMode: 'book-cmmc',
    title: 'SSP and POA&M Explained: The Evidence Behind CMMC Readiness',
    metaDesc:
      'What an SSP and POA&M document under NIST 800-171, how they support a defensible assessment, and how the Phase II suspension changes the certification context.',
    date: '2026-06-20',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'A shop can have policies, screenshots, and a high SPRS score and still be unable to show which systems were assessed or who is fixing an unmet requirement. The System Security Plan describes the environment and safeguards as they exist today. The Plan of Action and Milestones records the work that remains, who owns it, and when it is expected to be complete.',
    sections: [
      {
        h: 'What each document actually is',
        ps: [
          'The System Security Plan, required by NIST SP 800-171 Revision 2 requirement 3.12.4, describes the system boundary, operating environment, how the security requirements are implemented, and the connections to other systems. It should name the real tools, roles, locations, and processes inside the assessed scope.',
          'The Plan of Action and Milestones, addressed by requirement 3.12.2, tracks security weaknesses or deficiencies, the work required to correct them, the responsible owner, resources, milestones, and completion dates. A POA&M with no owner, evidence target, or date is a list, not an operating plan.',
          {text: 'Together they are the paper trail behind your gap assessment: the SSP shows where you stand today, and the POA&M shows the work still ahead, scored against the same 110 controls.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Why a reviewer starts with the SSP',
        ps: [
          'A reviewer needs to know which people, systems, facilities, and connections are in scope before a control can be tested. A generic SSP cannot answer that question. If the document describes tools the shop does not use or leaves out the quoting mailbox and CAD workstations that hold CUI, the assessment starts from the wrong boundary.',
          'A useful SSP connects each requirement to the people, technology, procedure, and evidence behind it. It also records dependencies and exceptions so a reviewer can compare the document with the way the shop actually works.',
        ],
      },
      {
        h: 'What the Phase II suspension changes',
        ps: [
          'The Department suspended CMMC Phase II on July 13, 2026. That means the planned expansion of third-party Level 2 certification and its conditional-certification path should not be presented as the current default route. Phase I self-assessment requirements remain in force, and the Department says Revision 2 will continue to be enforced through self-assessments and selected government-led assessments.',
          'The POA&M still matters. The DFARS assessment process asks for the date when all requirements are expected to be implemented, and a real remediation plan is how leadership manages that answer. Treat any future conditional-certification rules as subject to the outcome of the current program review and the contract in front of you.',
        ],
      },
      {
        h: 'How the documents are used',
        ps: [
          'A current SSP lets the company explain its boundary and implementation consistently to leadership, primes, technical reviewers, and government assessors. A maintained POA&M lets the same group see what remains open, what evidence will close it, who owns it, and whether the expected completion date is still credible.',
          {text: 'Use both documents during the gap assessment, not after it. Findings should update the SSP where the description is wrong and create or revise POA&M work where a requirement is not fully implemented.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep the SSP aligned with the systems and workflows in scope, and give every POA&M item an owner, target date, and evidence needed for closure. Update both documents when the environment or implementation changes.',
  },
  {
    slug: 'wire-fraud-prevention-law-firms',
    title: 'Wire Fraud Prevention for Law Firms: The Callback Protocol',
    metaDesc:
      'A practical known-number callback protocol for law firms handling changed wire instructions, including approvals, evidence, testing, and immediate response steps.',
    date: '2026-06-17',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Law Firms',
    laneTo: '/law-firms',
    intro:
      'A closing or settlement can put a large transfer, several parties, and a hard deadline into one email thread. If a criminal compromises that thread and changes the account number, staff may release the funds before the real client or title company knows anything changed. A known-number callback gives the firm a way to verify the instruction outside the email conversation.',
    sections: [
      {
        h: 'Why the email can look completely legitimate',
        ps: [
          'The FBI describes business email compromise as a request that appears to come from a known source. In a legal payment workflow, the attacker can wait for a real transaction and then introduce a changed account number, a new beneficiary, or pressure to release funds before a deadline.',
          'Grammar, logos, signatures, and reply history are weak evidence. A message sent from a compromised real mailbox may pass normal email-authentication checks. The control therefore cannot depend on a staff member noticing a visual clue that may not exist.',
        ],
      },
      {
        h: 'Write the payment rule before the matter becomes urgent',
        ps: [
          'At intake or the start of the payment process, record a known-good phone number for every party authorized to give or change instructions. Store it in the matter file or another controlled record. Do not wait for a change request to decide which number is trustworthy.',
          'Name the roles that can receive instructions, perform the callback, approve a release, and resolve an exception. Set a dual-approval threshold based on the firm\'s transaction profile and insurer or client requirements. The rule should also state that urgency, seniority, and a familiar voice do not waive verification.',
        ],
      },
      {
        h: 'The callback protocol',
        ps: [
          {text: 'Pause any new or changed payment instruction. Call the known-good number already held in the file, not a number contained in the request. Ask the authorized person to confirm the beneficiary, financial institution, routing details, account information, and reason for the change. Then record the verifier, time, number used, result, and approver before releasing the payment.', links: [{phrase: 'payment instruction', to: '/helm-command'}]},
          'Test the procedure with an authorized simulation and include the awkward cases: a partner asks to skip the rule, the usual contact is unavailable, or the change arrives minutes before a cutoff. The drill should test whether the process survives pressure, not whether one person can spot a fake email.',
        ],
      },
      {
        h: 'What email controls can and cannot do',
        ps: [
          {text: 'SPF, DKIM, and DMARC can make unauthorized use of the firm\'s exact domain harder. Managed filtering, threat protection, reporting, and triage can reduce the malicious messages that reach staff. Neither control can make a payment change trustworthy, and neither stops every request sent from a compromised real account or a convincing lookalike domain.', links: [{phrase: 'Managed filtering', to: '/helm-core'}]},
          'Use technical controls to reduce exposure and the callback to authorize the money. Keeping those jobs separate prevents the firm from treating an email-security pass as approval of a financial instruction.',
        ],
      },
      {
        h: 'If a transfer has already been sent',
        ps: [
          'Contact the sending financial institution immediately and ask it to contact the receiving institution. Report the event to the FBI Internet Crime Complaint Center, preserve the original messages and headers, and record the timeline without altering the affected mailbox or device more than necessary.',
          'Follow the firm\'s incident plan for insurer, counsel, client, law-enforcement, and professional-responsibility decisions. The right notification path depends on the facts and jurisdiction, so preserve what happened and involve the appropriate advisers instead of making an early conclusion about exposure.',
        ],
      },
    ],
    takeaway:
      'Record trusted phone numbers before the payment becomes urgent. Call one of those numbers for every new or changed instruction, require the appropriate approval, and keep a log showing who verified the transfer.',
  },
  {
    slug: 'cui-handling-shop-floor',
    ctaMode: 'book-cmmc',
    title: 'Explaining CUI to Your Shop Floor: The Rules That Actually Matter',
    metaDesc:
      'A plain-English explanation of FCI and CUI for shop floor staff, the handling rules that keep drawings and specs safe, and why fast internal reporting matters under DFARS.',
    date: '2026-06-16',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'A machinist can undo a carefully written CUI program by taking one phone photo of a drawing, emailing a file home, or leaving a marked print where a visitor can see it. That usually happens because the shop explained the policy without explaining what employees should do during the workday. Floor rules need to be short, specific, and easy to follow when production is moving.',
    sections: [
      {
        h: 'FCI and CUI, in terms that make sense on the floor',
        ps: [
          'Federal Contract Information, FCI, is information provided by or generated for the government under a contract and not meant for public release. It covers a lot of the everyday paperwork of doing government work.',
          'Controlled Unclassified Information, CUI, is a stricter category that requires safeguarding under law, regulation, or policy. For a machine shop, this usually means controlled technical information: drawings, specs, and models tied to a specific part or program. If a document has a distribution statement or a marking on it, treat it as CUI until someone tells you otherwise.',
        ],
      },
      {
        h: 'The floor rules that keep it safe',
        ps: [
          'No photos of drawings or parts on personal phones, ever, even for a quick reference or to text a coworker. Never email specs to a personal email account to work on at home. Access is need-to-know: if a print is not for your job, it is not for you to look at.',
          'Keep marked documents in controlled storage instead of leaving them on a workbench or board where a visitor can see them. Employees also need to know whom to tell when a print is left out or a file goes to the wrong place. Prompt internal reporting gives the company time to meet its contract-driven response duties.',
        ],
      },
      {
        h: 'Why fast reporting is not optional',
        ps: [
          'DFARS 252.204-7012 requires reporting cyber incidents affecting covered defense information to the Department of Defense within 72 hours. That clock does not wait for someone to notice weeks later. An employee who tells a supervisor the same day something looks wrong is the only way that deadline gets met.',
        ],
      },
      {
        h: 'This training is part of the program, not an extra',
        ps: [
          {text: 'NIST 800-171 compliance includes awareness and training requirements. A shop can configure technical controls and still leave a requirement unsupported if the employees handling controlled drawings were never taught the applicable rules.', links: [{phrase: 'NIST 800-171 compliance', to: '/helm-command'}]},
          {text: 'A readiness assessment for manufacturing and defense shops can review the technical controls and the floor-level training against the same agreed scope.', links: [{phrase: 'manufacturing and defense shops', to: '/manufacturing'}, {phrase: 'readiness assessment', to: '/helm-command'}]},
          {text: 'Use training that reflects the drawings, workstations, removable media, and reporting path employees actually encounter. Ongoing security awareness training can reinforce those decisions without relying on a generic annual slide deck.', links: [{phrase: 'Ongoing security awareness training', to: '/helm-core'}]},
        ],
      },
    ],
    takeaway:
      'Teach employees how to recognize marked information, where it may be stored, who may access it, and whom to call when something goes wrong. Make the rules part of normal shop work, including phones, paper drawings, email, shared stations, and visitors.',
  },
  {
    slug: 'pen-test-vs-vulnerability-scan',
    title: 'Penetration Test vs Vulnerability Scan: What You Are Actually Paying For',
    metaDesc:
      'A vulnerability scan and a penetration test are not the same service. What each one actually delivers, how to spot a rebranded scan sold at pen test prices, and which one most small and medium-sized businesses need first.',
    date: '2026-06-13',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A company can pay penetration-test prices and receive little more than an automated list of known vulnerabilities. That leaves leadership with a long report but no clear answer about what an attacker could actually reach. The proposal and deliverables should make clear whether people will attempt exploitation or software will only scan for known weaknesses.',
    sections: [
      {
        h: 'Two different services, often sold under one name',
        ps: [
          'A vulnerability scan is automated. Software enumerates known weaknesses across your systems, it is inexpensive to run, and it belongs on a schedule rather than as a one-time event.',
          'A penetration test is people, not software, attempting to actually exploit and chain those weaknesses together the way a real attacker would. It is scoped to specific systems, it takes days rather than minutes, and it is priced accordingly.',
        ],
      },
      {
        h: 'How to spot a scan wearing a pen test\'s price tag',
        ps: [
          'A "penetration test" quoted at scan prices is usually a rebranded automated scan with a different cover page. Before buying, ask for the methodology being used, who actually performs the testing, and a sample report from prior work.',
          'The deliverables show what was performed. A scan usually produces a list of detected weaknesses. A penetration test should explain which paths were attempted, what could be reached, what evidence supports the finding, and which fixes matter first.',
        ],
      },
      {
        h: 'Which one to buy first',
        ps: [
          'Most small and medium-sized businesses get more value out of fixing what a scan already shows, MFA gaps, missing patches, weak email authentication, before paying for a scoped penetration test on top of it. Insurers and compliance frameworks frequently only require a scan in the first place.',
          {text: 'The free scan is an automated external check of your public domain. If it identifies basic gaps, address those before paying for deeper testing. A readiness engagement can help organize that cleanup and determine whether a penetration test is the next useful step.', links: [{phrase: 'free scan', to: '/free-scan'}, {phrase: 'readiness engagement', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Ask who will perform the work, whether exploitation is included, which systems are in scope, and what the final report will show. Fix known basic weaknesses first so a later penetration test can spend its time on the paths an automated scan cannot answer.',
  },
  {
    slug: 'what-is-dmarc',
    title: 'What Is DMARC? A Plain-English Guide for Business Owners',
    metaDesc:
      'DMARC stops criminals from sending email as your domain. What SPF, DKIM, and DMARC actually do, why "p=none" means unprotected, and how to check your domain in 30 seconds.',
    date: '2026-06-10',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'If someone can send a convincing invoice from your company’s domain, a customer may pay the criminal and call you only after the real invoice becomes overdue. SPF, DKIM, and DMARC help receiving mail systems separate authorized messages from unauthorized ones sent in your name.',
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
          {text: 'A criminal can use spoofed email to send a fake invoice that appears to come from your company. If a customer pays it, your team may have to help untangle the fraud even though the message was not sent from your mailbox. Enforced DMARC can make unauthorized use of the exact domain harder and can support delivery of legitimate mail.', links: [{phrase: 'Enforced DMARC', to: '/helm-core'}]},
          'Getting to enforcement takes care: flip to p=reject carelessly and you can block your own invoices sent through QuickBooks or your marketing platform. The path is: inventory every service that sends as your domain, authorize each one in SPF/DKIM, watch the reports, then enforce.',
        ],
      },
    ],
    takeaway:
      'Check which services send email for your domain, make sure each one is authenticated, and move DMARC toward enforcement only after legitimate senders are accounted for. The free scan shows what your public records currently publish.',
  },
  {
    slug: 'incident-response-plan-small-business',
    title: 'The First Hour After Ransomware or a Wire Fraud Email: An Incident Response Plan for Small and Medium Businesses',
    metaDesc:
      'What to do, who to call, and what not to touch in the first hour after ransomware or a business email compromise, plus why a one-page incident response plan beats a binder nobody reads.',
    date: '2026-06-06',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'The first person to notice ransomware or a fraudulent transfer can accidentally make the situation worse by shutting down a device, deleting a message, or calling a vendor the insurer has not approved. A one-page incident plan tells that person what not to touch, who has authority, and which call comes first.',
    sections: [
      {
        h: 'What not to touch',
        ps: [
          'Do not power off an encrypted machine or wipe and reimage it before anyone has looked at it. It feels like the responsible move, and it can destroy the evidence a forensic investigator needs to figure out how the attacker got in and whether they are still inside.',
          'Do not pay a ransom demand, negotiate with an attacker, or promise anything on your own. That decision, if it is even on the table, belongs with counsel and your carrier, not with whoever answered the first call.',
          'Do not send a company-wide email about the incident from the same system that might be compromised. If a mailbox is involved, assume the attacker may still be reading it.',
        ],
      },
      {
        h: 'Who to call, and in what order',
        ps: [
          'Call your cyber insurance carrier before you call your own IT vendor. This is the step that trips up businesses that otherwise did everything right. Carriers maintain a panel of approved forensic and breach-response vendors and breach counsel, and going outside that panel, even with good intentions, can jeopardize coverage for the exact costs you were counting on the policy to pay.',
          'Your carrier can typically be reached by phone at any hour, and the number should already be on your one-page plan, not searched for during the incident. Once they are looped in, they will direct you to the panel vendor for forensics and, if needed, breach counsel to manage notification obligations.',
          'Only after that call should you loop in your everyday IT vendor, and even then, in a supporting role directed by the carrier\'s panel, not leading the response. A good IT vendor knows this and will not be offended by it.',
        ],
      },
      {
        h: 'Why a one-page plan beats a binder',
        ps: [
          'A fifty-page incident response binder is a document nobody reads twice, usually written once for an insurance application and never opened again. In an actual incident, nobody has time to find the right page.',
          'A one-page plan should list the carrier number, reporting deadline, decision owner, and the first actions employees must avoid. That is enough to guide the opening call while the fuller response plan covers the work that follows.',
          {text: 'A readiness workshop can help build and rehearse both pieces before an incident.', links: [{phrase: 'readiness workshop', to: '/helm-command'}]},
          {text: 'A free scan completed ahead of time also records the public email-authentication signals the response team may need if a mailbox or impersonation attempt is involved.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Put the carrier’s number, decision owner, reporting deadline, and first instructions on one page. Train employees to preserve the evidence and use the approved response path before anyone starts cleaning up.',
  },
  {
    slug: 'deepfake-ceo-fraud',
    title: 'Deepfake CEO Fraud: Real Cases and the Controls That Stop It',
    metaDesc:
      'Voice cloning needs three seconds of audio. Real deepfake fraud cases, including a $25M video-call heist, and the two controls that stop synthetic executives.',
    date: '2026-06-03',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A familiar voice is no longer proof that a payment request came from the owner. Criminals can clone public audio and use it to pressure an employee into sending money before there is time to ask questions. The loss happens because the company treats recognition as authorization.',
    sections: [
      {
        h: 'How little the attacker needs',
        ps: [
          'Three seconds of audio, a voicemail greeting, a conference talk, a social clip, trains a usable voice clone. Your executives\' voices are already public. The attack that follows is not sophisticated: a phone call to accounts payable that sounds exactly like the owner, urgent and plausible: "I\'m boarding a flight, the acquisition closes today, wire the deposit now, keep it quiet."',
          'Smaller businesses are the growth market, not the exception. A $40K fraudulent transfer from a 30-person contractor is easier to execute and rarely makes the news: the playbook is identical.',
        ],
      },
      {
        h: 'Do not make employees judge whether a voice is real',
        ps: [
          '"Listen for robotic artifacts" was 2023 advice. Current voice synthesis passes casual inspection, and video is close behind. Any defense that depends on a stressed employee out-detecting a synthetic voice in real time will eventually fail.',
          {text: 'The controls that work are procedural, because procedure does not care how good the fake is. One: a payment-verification protocol, meaning every new or changed payment instruction gets a callback to a known-good number, no exceptions, including "the CEO" personally. Two: an authorized simulation, testing the process against a realistic impersonation request and coaching on any gap. Helm Command installs the protocol and trains the team; targeted drills are separately scoped.', links: [{phrase: 'payment-verification protocol', to: '/helm-command'}, {phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Require a callback to a known number and a second approval for high-consequence payment changes, even when the request sounds like the owner. Helm Command can help write and rehearse that process.',
  },
  {
    slug: 'law-firm-device-security-checklist',
    title: 'Law Firm Device Security Checklist: Laptops, Remote Work, and Lost Devices',
    metaDesc:
      'A practical device security checklist for small law firms covering inventory, monitoring, encryption, remote work, lost devices, and evidence for clients and insurers.',
    date: '2026-08-18',
    readMin: 6,
    lane: 'Law Firms',
    laneTo: '/law-firms',
    intro:
      'A lost laptop can give someone access to client email, case files, billing, trust-accounting systems, and saved browser sessions. Law-firm devices leave the office every day for court, travel, and remote work, so office-network security alone does not protect the information on them.',
    sections: [
      {
        h: 'Why the device belongs in the confidentiality conversation',
        ps: [
          'ABA Model Rule 1.6(c) calls for reasonable efforts to prevent unauthorized disclosure of, or access to, information relating to a client representation. The ABA describes that as a risk-based duty, which means the sensitivity of the information, the likelihood of exposure, and the practical safeguards available all matter.',
          'The ABA 2023 Cybersecurity TechReport found that 29 percent of respondents said their firm had experienced a security incident. The survey definition included events such as lost or stolen computers and smartphones, so the figure should not be read as 29 percent confirmed data breaches. It does show why device loss and compromise belong in the same risk discussion as hacking.',
        ],
      },
      {
        h: 'Start with a device inventory that names an owner',
        ps: [
          'List every firm-owned Windows and Mac computer, who uses it, what operating system it runs, whether storage encryption is enabled, whether security updates install automatically, and whether the firm can see when its security software stops checking in. Include shared reception computers and seldom-used loaners, not only partner laptops.',
          'Record which systems each device can reach. If a laptop can open email, document management, billing, trust accounting, and cloud storage, losing it may require immediate session revocation and a review of client information that could have been accessible. A kiosk with no saved credentials creates a different level of exposure.',
        ],
      },
      {
        h: 'Apply a baseline that can be checked',
        ps: [
          'Require a screen lock, full-disk encryption, supported operating systems, automatic security updates, separate administrator access, multi-factor authentication, and a managed security service that can investigate suspicious behavior. CISA ransomware guidance recommends centrally managed protection and detection-and-response coverage across organizational assets.',
          {text: 'Helm Core provides round-the-clock monitoring, human investigation, and containment for covered Windows and Mac devices. That does not replace patching, backups, identity controls, or a written incident plan, but it closes the gap between an alert appearing and someone qualified acting on it.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Write the lost-device procedure before a laptop disappears',
        ps: [
          'The procedure should name one person to call, how to disable the user account and revoke active sessions, how to determine what client information may have been accessible, and when counsel, the insurer, affected clients, or other parties must be consulted. Preserve facts and timestamps instead of guessing whether exposure occurred.',
          'Phones and tablets need their own identity, email, and device-management controls. Standard Helm Core coverage does not install the same security agent on iOS or Android, so a complete firm plan must address those devices separately.',
        ],
      },
      {
        h: 'Keep evidence that the checklist is operating',
        ps: [
          'A policy alone cannot show that a device was encrypted, monitored, or updated. Keep a current inventory, deployment status, encryption status, update records, incident contacts, and evidence that departed users were removed. Review exceptions instead of allowing them to become permanent.',
          {text: 'If a client or carrier asks whether every device is protected, the defensible answer is the current inventory plus the evidence behind it. Helm Command can help turn those questions into a documented gap list and an owned remediation plan.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep a current device inventory, require encryption and screen locks, monitor covered computers, and write down what happens when a device is lost. Address phones and tablets separately instead of assuming laptop protection covers them.',
  },
  {
    slug: 'wisp-checklist-accounting-firms',
    title: 'WISP Checklist for Tax and Accounting Firms',
    metaDesc:
      'What a Written Information Security Plan should contain for a small tax or accounting firm, with IRS and FTC requirements translated into an operating checklist.',
    date: '2026-08-18',
    readMin: 6,
    lane: 'Accounting Firms',
    laneTo: '/accounting-firms',
    intro:
      'A generic Written Information Security Plan can create a second problem during a breach or review: it may claim safeguards that the firm never implemented and omit the systems that actually hold client tax data. The IRS requires tax professionals to maintain a WISP, and the FTC Safeguards Rule includes tax-preparation firms. The document needs to describe the practice as it operates today.',
    ctaMode: 'book',
    sections: [
      {
        h: 'Why the plan needs current facts',
        ps: [
          'The IRS reported nearly 300 tax-professional data breaches in the first half of 2025, potentially affecting as many as 250,000 clients. Those are reported incidents, not an estimate of every breach, and they cover tax professionals nationally. The scale shows how one compromised practice can expose far more people than its employee count suggests.',
          'A WISP should be appropriate to the size and complexity of the firm and the sensitivity of the customer information it handles. A five-person tax practice does not need the bureaucracy of a national firm, but it does need a plan that accurately describes its own safeguards.',
        ],
      },
      {
        h: 'Name the coordinator and the information in scope',
        ps: [
          'Assign one person to coordinate the information-security program, even if security is not that person’s full-time role. Give that owner the authority to maintain the plan, collect evidence, follow up on exceptions, and coordinate service providers.',
          'Inventory the customer information the firm receives and where it moves: email, portals, tax software, workstations, shared drives, payroll systems, cloud storage, backups, paper records, and vendor platforms. Include seasonal staff and remote work because the plan must cover the way the firm actually operates during its busiest months.',
        ],
      },
      {
        h: 'Assess risk and match each safeguard to it',
        ps: [
          'For each system or workflow, identify the plausible threat, the weakness that could be exploited, the current safeguard, and what remains unresolved. Common examples include mailbox takeover, malicious attachments, stolen passwords, unsupported computers, excessive access, untested backups, and former workers whose accounts remain active.',
          {text: 'Helm Core addresses managed email filtering, phishing protection, suspicious-message triage, simulations, and awareness learning. Helm Core provides 24/7 investigation and containment for covered Windows and Mac devices. Neither service replaces the WISP, but the controls and operating records can support what the plan says.', links: [{phrase: 'Helm Core', to: '/helm-core'}, {phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Document service providers, testing, and response',
        ps: [
          'The IRS checklist includes selecting service providers that maintain safeguards for customer information. Record what each provider handles, the relevant contract or assurance evidence, the responsible internal owner, and how the relationship is reviewed.',
          'State how the firm checks whether safeguards still work. That can include account reviews, device-coverage checks, training records, backup restoration tests, phishing reporting, and an annual tabletop. Add a response path for a suspected breach that names the insurer, legal contacts, technology providers, and IRS and state reporting steps.',
        ],
      },
      {
        h: 'Keep the WISP evergreen',
        ps: [
          'Review the plan after meaningful technology, staffing, vendor, or workflow changes and after any security incident. Record the review date and decisions made, including risks accepted temporarily and the person responsible for closing each gap.',
          {text: 'Helm Command can assess the plan against the practice that exists today, identify statements that lack evidence, and produce a prioritized remediation roadmap. Remediation is a separate decision after the gaps are known.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Name the person responsible for the WISP, map where client information moves, connect each risk to a safeguard, and document testing, vendors, and incident response. When the document and the practice disagree, correct the control or update the plan.',
  },
  {
    slug: 'hipaa-risk-analysis-medical-practices',
    title: 'HIPAA Security Risk Analysis for Small Medical Practices',
    metaDesc:
      'How a small medical or dental practice can scope and document a HIPAA Security Rule risk analysis across email, devices, EHR access, vendors, and daily workflows.',
    date: '2026-08-18',
    readMin: 7,
    lane: 'Medical Practices',
    laneTo: '/medical-practices',
    intro:
      'A practice that reviews only the EHR can miss patient information in email, billing, imaging, backups, phones, and vendor accounts. Those blind spots matter when a device is lost or an account is compromised because the practice may not know what information was accessible. A HIPAA risk analysis should follow electronic patient information through the systems and workflows the practice actually uses.',
    ctaMode: 'book',
    sections: [
      {
        h: 'Start with scope, not a checklist score',
        ps: [
          'HHS says the analysis covers all electronic protected health information the organization creates, receives, maintains, or transmits. The EHR is only one system. Email, billing, imaging, scheduling, backups, file shares, cloud services, copiers, workstations, laptops, tablets, phones, and vendor access can all enter scope.',
          'HealthIT.gov specifically warns providers not to limit the analysis to the EHR and says to include devices that can access EHR data, including tablets and a practice manager’s mobile phone. A system does not need to store a permanent copy of patient information to create access risk.',
        ],
      },
      {
        h: 'Use the small-practice tools for their intended purpose',
        ps: [
          'The HHS Security Risk Assessment Tool was designed for smaller practices. Its user guide says the historical small-to-medium definition used for the tool is one to ten healthcare providers. HHS also makes clear that completing the tool does not by itself establish compliance.',
          'A tool can organize the work, but the evidence still has to describe the practice. Record each system, the information involved, who can access it, where it is used, the threats and vulnerabilities, existing safeguards, likelihood, impact, and the decision made about remediation.',
        ],
      },
      {
        h: 'Treat email and work devices as different control layers',
        ps: [
          {text: 'Helm Core can protect compatible business email from phishing and impersonation while providing employee reporting, triage, simulations, and awareness learning. It does not include a secure-message portal, encrypted outbound delivery, or secure file transfer, so any workflow that sends patient information may require a separately scoped secure delivery solution.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          {text: 'Helm Core provides 24/7 monitoring, investigation, and containment for covered Windows and Mac workstations. It does not cover every technology in a practice. Phones, tablets, servers, medical devices, identity systems, networks, and vendor platforms must be addressed elsewhere in the risk analysis and separately scoped where protection is needed.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Turn findings into owned decisions',
        ps: [
          'A risk analysis is an input to risk management. For each finding, name the corrective action, owner, expected evidence, target date, and any interim safeguard. If the practice decides that a particular measure is not reasonable and appropriate, document the rationale and any equivalent measure rather than treating the requirement as optional.',
          'Prioritize issues that combine sensitive information, broad access, weak detection, and meaningful operational impact. A front-desk workstation with EHR, email, and billing access may deserve attention before a rarely used system with tightly limited access, even if both appear on the inventory.',
        ],
      },
      {
        h: 'Revisit the analysis when the practice changes',
        ps: [
          'HHS describes risk analysis as an ongoing process. Review it when the practice changes an EHR or billing vendor, opens a location, adopts telehealth, adds remote work, changes email systems, brings in a new device class, or experiences an incident. Keep the previous analysis and document what changed.',
          {text: 'Helm Command provides a fixed-fee HIPAA Security Rule gap assessment for an agreed scope, with documented findings and a prioritized roadmap. It supports readiness and remediation planning, but Helm does not certify that a practice is HIPAA compliant.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Map every place electronic patient information is stored or accessible, record the current safeguards and unresolved risks, and give each corrective action an owner and date. Revisit the analysis when the practice changes systems, vendors, locations, devices, or workflows.',
  },
];
