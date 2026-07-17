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
    slug: 'mfa-methods-compared',
    title: 'MFA Methods Compared: Apps, SMS, and Security Keys for Small Business',
    metaDesc:
      'Authenticator apps, SMS codes, and hardware security keys all stop different attacks. A plain-English comparison for small businesses deciding where to start.',
    date: '2026-07-17',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'The advice to "turn on MFA" is right, but it treats every method as interchangeable, and they are not. An app, a text message, and a physical key each stop a different attack, and each has a different weak spot. Here is what actually separates them, and where to start if you are rolling this out for the first time.',
    sections: [
      {
        h: 'The one rule that matters more than which method you pick',
        ps: [
          'Any multi-factor authentication beats none. A password alone is one stolen or guessed credential away from a full account takeover, and every method below closes that gap. If the choice is between debating which option is best and turning nothing on at all, turn something on today.',
          'That said, the methods are not equally strong, and knowing where each one bends helps you decide who gets which method first.',
        ],
      },
      {
        h: 'SMS codes: better than nothing, but the weakest link',
        ps: [
          'A text-message code is easy to set up and better than a password on its own, but it has two real weaknesses. SIM swapping lets an attacker convince a phone carrier to move your number onto a device they control, which sends your codes straight to them. Real-time phishing relays capture the code the moment you type it into a fake login page and use it within seconds on the real one.',
          'Neither attack is common against every small business, but both are well documented, and neither requires much skill once someone is specifically targeted. SMS still beats password-only, it just should not be the method protecting your most sensitive accounts.',
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
          'A FIDO2 hardware security key is a small physical device, often on a keychain, that plugs in or taps to approve a sign-in. What makes it different is that the key itself checks whether it is talking to the real site before it will authenticate, so it simply will not work on a convincing fake login page. That is what phishing-resistant actually means in practice, not just a marketing phrase.',
          'Keys typically run under $60 each, and most people only need one plus a backup.',
        ],
      },
      {
        h: 'A sensible rollout order',
        ps: [
          'Start with the accounts that matter most: admins, and anyone who can move money or approve payments, get the strongest option, hardware security keys. Everyone else gets an authenticator app with number matching turned on. SMS is a reasonable fallback for low-risk accounts, not the default for the accounts you would miss most if they were taken over.',
          {text: 'Rolling this out well is as much about explaining why as it is about the settings themselves, which is exactly what security awareness training is built to cover.', links: [{phrase: 'security awareness training', to: '/helm-aware'}]},
          {text: 'Not sure where your own accounts currently stand? A free scan of your domain is a quick way to see what is exposed before you decide where to start.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Any MFA beats none, but SMS, apps, and hardware keys are not interchangeable. Give admins and anyone who moves money the strongest option you have, put apps with number matching on everyone else, and treat SMS as a fallback rather than a plan.',
  },
  {
    slug: 'm365-security-baseline',
    title: 'The Microsoft 365 Security Baseline You Can Set This Week',
    metaDesc:
      'A practical Microsoft 365 security checklist for small businesses: MFA everywhere, no legacy authentication, separate admin accounts, and the forwarding rules attackers rely on after a breach.',
    date: '2026-07-16',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'You do not need a security budget to fix the biggest gaps in Microsoft 365. Most of what matters is already included in the license you are paying for, sitting in a settings menu nobody has opened. Here is what to turn on this week, in order.',
    sections: [
      {
        h: 'Lock the front door first',
        ps: [
          'Multi-factor authentication is the single highest-value setting in your tenant, and it is often still off for at least a few accounts: the owner\'s own mailbox, a shared inbox, an old vendor login nobody remembers creating. If you have not rolled out a full MFA policy, turning on security defaults gets every account covered in one step rather than none.',
          {text: 'Legacy authentication protocols let an attacker sign in with just a stolen password, bypassing MFA entirely, because those older protocols were never built to ask for a second factor. Disabling legacy auth closes a door most tenants leave open by default, and it pairs directly with the email protections behind Helm Mail.', links: [{phrase: 'Helm Mail', to: '/helm-mail'}]},
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
          {text: 'A free scan of your domain checks all three in under a minute and tells you, in plain English, what is missing.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'None of this requires new software or a big budget: MFA everywhere, legacy auth disabled, separated admin accounts, external tagging, a forwarding-rule review, and DNS records that are already yours to set. Do it this week instead of after the incident that makes you wish you had.',
  },
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
    slug: 'password-managers-small-teams',
    title: 'Password Managers for Small Teams: What a Vault Adds Over Browser-Saved Passwords',
    metaDesc:
      'Why password reuse is the most common small-team security failure, what a shared password vault adds beyond browser-saved logins, and the order to roll one out across your team.',
    date: '2026-07-14',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Ask most small business owners where the shared logins live and the honest answer is a spreadsheet, a sticky note on a monitor, or a browser quietly remembering everything. That works fine until someone leaves the company or a password from an unrelated website leaks. Here is what an actual password vault fixes, and the order to introduce one in.',
    sections: [
      {
        h: 'The failure mode behind most small-team compromises',
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
          {text: 'Roll it out in order rather than all at once: admin and financial accounts first, since those carry the most risk, then the shared credentials living in spreadsheets and sticky notes, then everyone else\'s individual logins. Pairing the rollout with a short explanation of how credential stuffing actually works, the kind of thing covered in security awareness training, cuts down on people quietly going back to old habits.', links: [{phrase: 'security awareness training', to: '/helm-aware'}]},
          {text: 'Credential hygiene is one half of the picture. The other half is whether your own domain can be spoofed in the first place, and a free scan checks that in under a minute.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Reuse is the failure mode, credential stuffing is how it gets exploited, and a shared vault fixes both the individual and the team problem at once. Roll it out to admin and financial accounts first, then the shared logins, then everyone else.',
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
    slug: 'invoice-fraud-red-flags',
    title: 'Invoice Fraud Red Flags: What to Check Before You Pay a Vendor',
    metaDesc:
      'The red flags that separate a legitimate vendor payment change from an invoice fraud attempt, and the callback habit that catches it every time.',
    date: '2026-07-12',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'If you are the one who pays invoices, whether that is your job title or just a task that landed on your desk, you are the last line of defense against one of the most common frauds a small business faces. It rarely looks suspicious. That is exactly the problem.',
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
          'New banking details on an existing vendor relationship is the single biggest flag by itself. Pair it with urgency or late-fee pressure, a new contact person you have not dealt with before, a sender domain that is one character off from the real one, or a reply-to address that quietly differs from the display name, and the picture gets clearer fast.',
          'One more flag matters as much as the others: any request to keep the change quiet, skip your normal approval process, or move fast because something is time-sensitive. Legitimate vendors do not ask you to bypass your own controls.',
        ],
      },
      {
        h: 'The control that actually stops it',
        ps: [
          'Call back a known number from your own records, never a number in the email itself, before changing any payment details. This single habit defeats nearly every version of this scam, because the fraudster cannot answer a call placed to the vendor\'s real office.',
          'Add dual approval above a set dollar threshold so no single person can push a payment change through alone, even under pressure. Between the callback and the second set of eyes, both the easy version of this scam and the more convincing one get caught.',
        ],
      },
      {
        h: 'Protect your own name too',
        ps: [
          {text: 'The same scam runs in the other direction: someone spoofs your domain and sends a fake invoice or a fake banking change to your own customers. DMARC and proper email authentication make your domain much harder to fake, which protects your customers and your reputation at the same time.', links: [{phrase: 'DMARC and proper email authentication', to: '/helm-mail'}]},
          {text: 'A free scan of your domain checks whether that protection is already in place or still missing.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'A new bank account number on a familiar vendor relationship is the flag that matters most. Call back a known number before you change anything, add dual approval above a threshold, and lock down your own domain so your name cannot be used the same way against your customers.',
  },
  {
    slug: 'what-a-soc-actually-does',
    title: 'What a SOC Actually Does (and Why an Alert Is Not the Same as a Response)',
    metaDesc:
      'What a security operations center actually does around the clock, why EDR software alone still needs a human behind it, and the questions to ask before buying a managed SOC subscription.',
    date: '2026-07-11',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Every vendor pitch mentions a SOC, and few explain what one actually does all day. A security operations center is a team that watches security alerts around the clock, decides which ones matter, and steps in when something real is happening. Here is what that looks like in practice, and why most small businesses cannot build one themselves.',
    sections: [
      {
        h: 'An alert is not the same as a response',
        ps: [
          'EDR software on a laptop or server is genuinely good at its job: it detects suspicious activity and raises an alert. What it does not do on its own is decide whether that alert is a false positive or an active attacker, and take action either way. That step still needs a person, and it needs to happen whether the alert fires in the middle of the afternoon or in the middle of the night.',
          'A SOC is the team that does that watching, triaging, and containing. Left alone, an EDR alert just sits in a dashboard until someone with the right access opens it, reads it, and acts.',
        ],
      },
      {
        h: 'Why continuous coverage is hard to build yourself',
        ps: [
          'Watching alerts around the clock is not a part-time job for one person. It takes multiple analysts covering different shifts so someone is always awake and paying attention, which is a staffing commitment that is simply out of reach for most small businesses on their own.',
          'Attackers know this, and they plan around it. Nights, weekends, and holidays are not random timing, they are deliberately chosen because fewer people are watching. Attackers also commonly sit quietly inside a network for a while before doing anything visible, which is exactly the kind of activity that only shows up if someone is actually looking.',
        ],
      },
      {
        h: 'What a managed SOC actually buys you',
        ps: [
          'A managed SOC, or managed detection and response subscription, shares one SOC team across many businesses at once, which is how it delivers around-the-clock coverage at a fraction of what staffing your own would cost.',
          {text: 'If continuous coverage sounds like something your business needs but could never staff on its own, that is exactly what Helm Watch provides: 24/7 managed detection and response on your endpoints, with human analysts behind every alert.', links: [{phrase: 'Helm Watch', to: '/helm-watch'}]},
          {text: 'Before signing with any provider, ask three questions: who actually investigates an alert, a real analyst or an algorithm; will they take containment action themselves, like isolating an infected machine, or only notify you and leave the response to you; and what is the escalation path when something real is found, including how fast you actually hear about it. A free scan of your own domain is a reasonable first look at where you stand before that conversation even starts.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'A SOC is the difference between an alert sitting unread and someone actually acting on it, day or night. Staffing that yourself is rarely realistic, which is what a shared managed SOC is built to solve, as long as you ask who is actually behind it.',
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
    slug: 'vendor-email-compromise-contractors',
    title: 'Vendor Email Compromise: When Your Supplier\'s Invoice Is Actually a Scam',
    metaDesc:
      'How fraudsters compromise or spoof a supplier or general contractor to redirect payment on a real invoice, and the callback and DMARC controls that stop it before the money moves.',
    date: '2026-07-08',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'The invoice looks completely normal, because in every way that matters, it is normal: the right job number, the right amount, the right letterhead. The only thing wrong with it is the bank account, and by the time anyone notices, the job is finished and the money is gone.',
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
          {text: 'The same scam runs in the other direction: someone spoofs your company\'s domain and sends a fake invoice to one of your own customers. DMARC on your domain, set up correctly, is what stops your business name from being used to defraud the people who trust you.', links: [{phrase: 'DMARC on your domain', to: '/helm-mail'}]},
          {text: 'Lookalike domains are the other half of this: a supplier name spelled with a swapped letter or a different ending, close enough to pass a fast read on a phone screen. Checking your own domain is the first step; a free scan shows whether your setup currently makes spoofing easy.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'A real job number and a real amount do not make an invoice real. Verify any banking change by phone to a known number, keep the rule exception-free, and lock down your own domain so your name cannot be used against your own customers.',
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
    slug: 'cyber-insurance-application-walkthrough',
    title: 'Walking Through a Cyber Insurance Application Without Tripping Over Your Own Answers',
    metaDesc:
      'What a cyber insurance application actually asks, why the answers are treated as sworn statements rather than a survey, and the order to work through it in.',
    date: '2026-07-06',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A cyber insurance application reads like a routine form until you understand what happens to your answers later. Every yes and no on that page can be checked against reality at claim time, and the gap between what you wrote and what was actually true is exactly where carriers look first. Here is how to work through the form without setting that trap for yourself.',
    sections: [
      {
        h: 'What the application actually asks',
        ps: [
          'The questions cluster around a familiar set of topics: multi-factor authentication, asked separately for email, remote access, and admin accounts; endpoint detection and response on your devices; whether backups are kept offline or immutable and whether restores are actually tested, not just assumed to work; how often you patch; whether staff get security awareness training; and whether a written incident response plan exists.',
          'None of these questions are unreasonable. Each one maps to a control that measurably reduces how bad a claim turns out to be, which is exactly why carriers ask.',
        ],
      },
      {
        h: 'Why the answers matter more than a form usually does',
        ps: [
          'Your answers are treated as attestations the insurer is entitled to rely on, not a rough self-assessment. Answer inaccurately, even without meaning to mislead anyone, and you risk denial of a future claim or rescission of the policy entirely. Carriers have litigated cases specifically over MFA misstatements on applications, which is a sign of how closely this particular answer gets checked.',
          'The trap is answering with what you intend to have in place rather than what is actually running today. A policy that says MFA is enabled everywhere, when it is actually enabled on most accounts, is the exact gap a carrier can use to deny a claim later.',
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
          {text: 'A readiness review is built exactly for this: closing the gaps the application asks about before you have to answer for them.', links: [{phrase: 'readiness review', to: '/helm-ready'}]},
          {text: 'A free scan of your domain is a fast way to see where a few of those answers already stand.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'The application is a sworn statement about your security, not a formality. Fix or honestly document each gap before you answer, keep the evidence, and start weeks ahead so accurate answers are actually possible by the time renewal arrives.',
  },
  {
    slug: 'hipaa-email-rules-small-practices',
    title: 'HIPAA Email Rules for Small Practices: What "Addressable" Actually Means',
    metaDesc:
      'What the HIPAA Security Rule actually requires for email containing PHI, why an addressable specification is not the same as optional, and the baseline that keeps a small practice covered.',
    date: '2026-07-05',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'Most small practices know HIPAA applies to email somehow and stop there. The actual rule is more specific than that, and more workable than the horror stories suggest. Here is what the Security Rule requires for electronic PHI in transit, and the baseline that gets a small practice covered without turning every message into a project.',
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
          {text: 'Free consumer email accounts do not come with a BAA available at all. Google Workspace and Microsoft 365 business plans do, which is one more reason a practice should be running real business email under Helm Mail rather than a free personal account for anything touching patient information.', links: [{phrase: 'business email under Helm Mail', to: '/helm-mail'}]},
        ],
      },
      {
        h: 'The patient exception, and the baseline that covers you',
        ps: [
          'A patient can ask to receive their own information by unencrypted email, and the practice may honor that request after warning them plainly of the risk. That exception applies to the patient\'s own records going to the patient, not to PHI moving between staff, referring providers, or billing.',
          'An email with PHI sent to the wrong recipient can be a reportable breach on its own, regardless of intent, which is exactly why the safeguards matter before the moment someone fat-fingers an address.',
          {text: 'The practical baseline is not complicated: business email under a signed BAA, MFA on every mailbox, encryption for any message that actually contains PHI, staff training on what can and cannot go in an email, and no PHI ever sent through a personal account. If you are not sure where your practice actually stands against that list, a HIPAA gap assessment for your professional services practice is the fastest way to find out.', links: [{phrase: 'HIPAA gap assessment', to: '/helm-ready'}, {phrase: 'professional services practice', to: '/professional-services'}]},
        ],
      },
    ],
    takeaway:
      'Addressable means implement it or document why you did not, not skip it. Get business email under a signed BAA, MFA on every mailbox, encryption on PHI messages, trained staff, and nothing patient-related through a personal account.',
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
    slug: 'job-site-devices-public-wifi',
    title: 'Job Site Devices and Public Wi-Fi: What Actually Puts a Contractor at Risk',
    metaDesc:
      'Why public Wi-Fi is not the real risk for contractors working out of a truck or a job site, what is, and the basic mobile device settings that stop a lost phone from becoming a full account takeover.',
    date: '2026-06-30',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'Every contractor has heard the warning about coffee shop Wi-Fi and logged into email there anyway. The good news is that warning is mostly outdated. The bad news is what actually puts a job site crew at risk is a different problem entirely, and it is sitting in everyone\'s pocket.',
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
          {text: 'Microsoft 365 and Google Workspace both include basic mobile device management as part of the plans your business already uses through Helm Mail: requiring a screen lock, encrypting the device, and remote-wiping a lost or stolen one before anyone gets into it.', links: [{phrase: 'plans your business already uses through Helm Mail', to: '/helm-mail'}]},
          {text: 'A shared job-site tablet signed straight into the owner\'s mailbox is a standing risk for any contractor, because everyone who touches that tablet effectively has the owner\'s access. Give it its own limited account instead of the owner\'s login.', links: [{phrase: 'any contractor', to: '/contractors'}]},
        ],
      },
      {
        h: 'One rule that has to survive the field',
        ps: [
          'Never approve a banking or payment-detail change from the field, no matter how the request arrives or how urgent it sounds. Call back a known number from the office first, every time, before anything changes.',
          {text: 'None of this replaces basic email security either. A free scan shows whether your domain\'s own authentication is already exposed, which is worth knowing before a crew member is troubleshooting it from a truck.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Public Wi-Fi is not the threat it used to be; fake hotspots and an unlocked device are. Turn on basic mobile management, give a shared tablet its own limited account, and never approve a payment change without a callback to a known number.',
  },
  {
    slug: 'employee-offboarding-checklist',
    title: 'The Employee Offboarding Checklist Most Companies Run From Memory (and Miss)',
    metaDesc:
      'A written employee offboarding checklist covering account access, sessions, shared credentials, devices, and the SaaS accounts most companies forget to close.',
    date: '2026-06-29',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Offboarding usually happens the way most improvised processes happen: from memory, spread out over the following week, done by whoever remembers to do it. That gap between someone\'s last day and their last piece of access closed is exactly where risk sits. A written checklist run the same day closes it.',
    sections: [
      {
        h: 'Same day, not sometime this week',
        ps: [
          'Disable the account the same day, and suspend it rather than deleting it outright. Suspending preserves the mail and files that the account holder, and often the rest of the team, still needs access to, while immediately cutting off the ability to sign in.',
        ],
      },
      {
        h: 'A password reset alone does not end access',
        ps: [
          'Resetting the password feels like it should be enough, but it does not end sessions that are already active on a phone, a laptop, or a browser tab still logged in somewhere. Revoke active sessions directly and remove any registered MFA devices, or the old password reset accomplishes very little.',
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
          {text: 'Every step above should live on a written checklist that gets run the same day someone leaves, not pieced together from memory over the following week. The gap between those two approaches is exactly where most offboarding failures happen, and it is a gap security awareness training can help close by making the process a habit rather than a favor someone remembers to do.', links: [{phrase: 'security awareness training', to: '/helm-aware'}]},
          {text: 'A free scan of your domain is a good companion check while you are reviewing access controls, since it shows some of the same exposure an attacker, or a departing employee, would be looking for.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Same-day suspension, revoked sessions and MFA devices, rotated shared credentials, collected devices, and closed third-party SaaS accounts: run all of it from a written checklist the same day someone leaves, not from memory over the following week.',
  },
  {
    slug: 'backup-testing-insurers',
    title: 'Backup Testing: What Cyber Insurers Actually Want to See',
    metaDesc:
      'Cyber insurance questionnaires now ask about offline and immutable backups, encryption, and tested restores, not just whether you back up. The 3-2-1 rule and how to document restore tests.',
    date: '2026-06-27',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'Every cyber insurance questionnaire asks about your backups, and almost every business answers yes without reading the follow-up questions closely. The follow-up questions are where the real answer lives, and they are not asking whether you back up. They are asking whether the backup would actually work.',
    sections: [
      {
        h: 'What the questionnaire is really asking',
        ps: [
          {text: 'Modern cyber insurance applications ask three separate questions where an older one asked one: do you keep an offline or immutable copy that ransomware cannot reach and encrypt along with everything else, is that copy encrypted, and have you tested restoring from it recently. "We back up nightly" answers none of those three on its own.', links: [{phrase: 'cyber insurance', to: '/professional-services'}]},
          'The 3-2-1 rule is the shorthand carriers are checking for even when they do not spell it out: three copies of your data, on two different types of media, with one copy offline or otherwise out of reach of whatever compromised the network. A single backup sitting on the same network as everything else fails this on the first question.',
        ],
      },
      {
        h: 'A backup you have never restored is a hope, not a control',
        ps: [
          'Backups fail quietly. A job that has been "completing successfully" for a year can still be backing up a corrupted database, missing a folder that got excluded by accident, or writing to a drive that filled up months ago and has been silently failing since. You do not find out until the day you need it.',
          'A restore test answers the only question that matters: if your network went down right now, could you actually get the data back, in a usable form, in a reasonable amount of time. Everything else on the questionnaire is a proxy for that one fact.',
        ],
      },
      {
        h: 'Document it, because attestations are warranties',
        ps: [
          'Insurers treat your questionnaire answers as warranties that stay true for the whole policy year, not a one-time snapshot. A backup process that was solid at renewal and quietly degraded by the time of a claim is exactly the gap carriers look for when deciding whether to pay.',
          {text: 'Document quarterly restore tests: date, what was restored, how long it took, who verified it. That log is what turns "we believe our backups work" into proof at claim time. It is worth checking your email authentication with the same discipline; a free scan shows what a carrier would find if it looked today.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'If quarterly restore tests are not happening yet, building the schedule and the documentation around them is a fixed, contained piece of work, not an open-ended project.', links: [{phrase: 'fixed, contained piece of work', to: '/helm-ready'}]},
        ],
      },
    ],
    takeaway:
      'Insurers do not want to hear that you back up. They want to see the 3-2-1 pattern, offline or immutable copies, and a dated log of restores that actually worked. Build that log before the questionnaire asks for it, not after a claim depends on it.',
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
    slug: 'ssp-poam-explained',
    title: 'SSP and POA&M Explained: The Two Documents Your CMMC Assessor Reads First',
    metaDesc:
      'What a System Security Plan and a Plan of Action and Milestones actually are under NIST 800-171, and when a POA&M can still get you conditionally certified under CMMC.',
    date: '2026-06-20',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'Two documents decide how your CMMC assessment goes before the assessor ever walks your floor: the System Security Plan and the Plan of Action and Milestones. Most shop owners have heard the acronyms, and few have seen either one explained without the jargon.',
    sections: [
      {
        h: 'What each document actually is',
        ps: [
          'The System Security Plan, required under NIST 800-171 control 3.12.4, describes how each of the 110 controls is actually met in your environment: which policy, which setting, which tool, which process. It is not a statement that you comply; it is the specific explanation of how you comply, control by control.',
          'The Plan of Action and Milestones, control 3.12.2, is the honest companion document: it tracks the controls you have not fully met yet, who owns closing each gap, and the date it is due. A POA&M with no owner and no date is not really a plan.',
          {text: 'Together they are the paper trail behind your gap assessment: the SSP shows where you stand today, and the POA&M shows the work still ahead, scored against the same 110 controls.', links: [{phrase: 'gap assessment', to: '/helm-ready'}]},
        ],
      },
      {
        h: 'Why assessors read the SSP first',
        ps: [
          'An assessor forms a first impression of your shop from the SSP, before they interview anyone or look at a single screen. A thin, generic template copied from somewhere else reads as exactly that, and it sets the tone for the rest of the assessment.',
          'A specific SSP, one that names your actual tools, your actual access controls, your actual backup process, tells the assessor you know your own environment. That is worth more going in than any single control being perfect.',
        ],
      },
      {
        h: 'When a POA&M can still get you certified',
        ps: [
          'Under the CMMC final rule, Level 2 allows conditional certification with an open POA&M, but only within specific limits. Your assessment score has to reach at least 80 percent of the maximum, a score of 88 out of 110, and the open items have to fall within a defined set of lower-weight controls, not the ones that carry the most points.',
          {text: 'Even then, the clock is running: open POA&M items have to be closed out within 180 days. It is a bridge to full certification for your manufacturing operation, not a permanent way to avoid finishing the work.', links: [{phrase: 'manufacturing operation', to: '/manufacturing'}]},
        ],
      },
    ],
    takeaway:
      'The SSP tells the assessor how you meet each control, and the POA&M tells them what you are still fixing and when. Get both specific and current before the assessment, not written the week of it.',
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
    slug: 'cui-handling-shop-floor',
    title: 'Explaining CUI to Your Shop Floor: The Rules That Actually Matter',
    metaDesc:
      'A plain-English explanation of FCI and CUI for shop floor staff, the handling rules that keep drawings and specs safe, and why fast internal reporting matters under DFARS.',
    date: '2026-06-16',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'Your compliance program can be well designed on paper and still fail on the floor, because the person actually handling a marked drawing every day was never told what makes it different from any other piece of paper. Here is how to explain FCI and CUI to shop floor staff in terms that hold up under a real workday, not just an audit.',
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
          'Keep marked documents in controlled storage, not sitting loose on a workbench or pinned to a board where anyone walking by can see them. And know who to tell when something looks mishandled, a print left out, a file emailed somewhere it should not have gone, because catching it internally and fast is the whole point of the rule.',
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
          {text: 'Training the floor on these rules is part of NIST 800-171 compliance itself, not a nice-to-have layered on top of it. A shop that has every technical control in place but never explained the rules to the people handling the actual drawings still has a real gap.', links: [{phrase: 'NIST 800-171 compliance', to: '/helm-ready'}]},
          {text: 'For manufacturing and defense shops working through what a program like this should look like end to end, a readiness assessment covers both the technical controls and the floor-level training in one pass.', links: [{phrase: 'manufacturing and defense shops', to: '/manufacturing'}, {phrase: 'readiness assessment', to: '/helm-ready'}]},
          {text: 'Building the specific training your floor needs, rather than a generic slide deck, is exactly what security awareness training is for.', links: [{phrase: 'security awareness training', to: '/helm-aware'}]},
        ],
      },
    ],
    takeaway:
      'FCI is everyday government paperwork; CUI, usually drawings, specs, and models on a shop floor, requires real safeguarding. No photos, no personal email, need-to-know access, controlled storage, and fast internal reporting, all of it taught as part of compliance, not bolted on after.',
  },
  {
    slug: 'pen-test-vs-vulnerability-scan',
    title: 'Penetration Test vs Vulnerability Scan: What You Are Actually Paying For',
    metaDesc:
      'A vulnerability scan and a penetration test are not the same service. What each one actually delivers, how to spot a rebranded scan sold at pen test prices, and which one most small businesses need first.',
    date: '2026-06-13',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Two very different services get sold under overlapping language, and the price tag alone will not tell you which one you are buying. Here is the actual difference between a vulnerability scan and a penetration test, and which one is worth paying for first.',
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
          'The deliverables tell the real story even when the sales pitch does not: a scan produces a raw list exported straight from the software, while a real pen test produces a narrative showing what an attacker could actually reach and a prioritized list of fixes.',
        ],
      },
      {
        h: 'Which one to buy first',
        ps: [
          'Most small businesses get more value out of fixing what a scan already shows, MFA gaps, missing patches, weak email authentication, before paying for a scoped penetration test on top of it. Insurers and compliance frameworks frequently only require a scan in the first place.',
          {text: 'A free scan is exactly this kind of automated check, run against your own domain, at no cost. If you want help closing what it finds before spending money on anything scoped as a pen test, that prioritized cleanup work is what a readiness engagement is built for.', links: [{phrase: 'free scan', to: '/free-scan'}, {phrase: 'readiness engagement', to: '/helm-ready'}]},
        ],
      },
    ],
    takeaway:
      'A scan is automated and cheap; a pen test is human, scoped, and priced for the days it takes. Fix what the scan already shows you before paying for anything scoped as a pen test, and ask for methodology, tester identity, and a sample report before you buy one.',
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
    slug: 'incident-response-plan-small-business',
    title: 'The First Hour After Ransomware or a Wire Fraud Email: A Small Business Incident Response Plan',
    metaDesc:
      'What to do, who to call, and what not to touch in the first hour after ransomware or a business email compromise, plus why a one-page incident response plan beats a binder nobody reads.',
    date: '2026-06-06',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Most small businesses find out they do not have an incident response plan the same way they would find out they do have one: in the first hour of an actual incident. Ransomware and business email compromise both move fast, and the decisions made in that first hour, sometimes made by whoever happens to be at their desk, shape everything that follows.',
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
          {text: 'A one-page plan works because it fits what an incident actually needs in the first hour: the carrier phone number, the claim reporting deadline, who has authority to make decisions, and the one instruction that matters most, do not touch anything until the first call is made. Building that page, and the fuller plan behind it, is exactly the kind of gap a readiness workshop closes before you need it.', links: [{phrase: 'readiness workshop', to: '/helm-ready'}]},
          {text: 'The same first hour goes faster if you already know your domain\'s exposure instead of learning it live: a free scan run ahead of time tells you whether email spoofing is even possible in the first place, which shapes how fast you can rule causes in or out.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'The first hour is not the time to improvise. Call your carrier before your IT vendor, touch nothing until you have, and keep the whole plan to one page so someone can actually follow it under pressure.',
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
