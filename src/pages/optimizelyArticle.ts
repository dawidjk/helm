import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const optimizelyArticle: Article = {
  "slug": "optimizely-incident-website-script-off-switch",
  "collection": "blog",
  "title": "Stopping a website script shouldn't stop your inquiries",
  "metaTitle": "Optimizely incident: keep the inquiry form working",
  "metaDesc": "Optimizely says it removed injected JavaScript. Test how to stop an outside website script, keep inquiries working, and preserve project-specific evidence.",
  "date": "2026-11-17",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": "If your website brings in new work, you need a way to stop an outside script while keeping the inquiry form working. The Optimizely Web Experimentation incident is a reason to rehearse that change while you can test it safely.",
  "lead": [
    {
      "text": "Optimizely reported that an unauthorized party exploited a vulnerability in Experimentation and inserted malicious JavaScript into some customer projects. Its notice, posted at 01:02 UTC on November 17 (8:02 p.m. Eastern on November 16), says it fixed the vulnerability and removed the injected code. It also reports steps to secure affected accounts and prevent further unauthorized code delivery. The incident was still marked Monitoring at 15:04 UTC on November 17; its listed component is Web Experimentation's Snippet Delivery.",
      "links": [
        {
          "phrase": "reported",
          "to": "https://status.optimizely.com/incidents/ftw0fh9wx43z",
          "className": "contextual-resource-link"
        }
      ]
    },
    {
      "text": "Scott Helme's investigation for Report URI records the first Optimizely injection it observed at 04:21 UTC on November 16. That is an observation, not an established start time for the compromise. In his November 17 update at 09:17 UTC, Helme said the infected Optimizely files Report URI had observed were cleaned by 23:11 UTC on November 16 and remained clean through that update.",
      "links": [
        {
          "phrase": "Scott Helme's investigation for Report URI",
          "to": "https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/",
          "className": "contextual-resource-link"
        }
      ]
    },
    "Outside JavaScript can change what runs in a visitor's browser without a deployment of your own site. A vendor's cleanup notice addresses its code delivery; it cannot by itself establish what ran on your pages earlier."
  ],
  "sections": [
    {
      "h": "Test one inquiry journey",
      "ps": [
        "Start with an important inquiry page and identify the outside scripts it loads. For one selected script, record the exact setting or tag that loads it, an authorized person who can switch it off, and a backup person. Keep the reversal steps with that record. If a web maintainer needs to make the change, settle who can authorize it before an urgent request arrives.",
        "Rehearse on a test copy of the site with synthetic details, submissions sent to a test destination and real notifications disabled. Submit the form before the change. Then disable only the selected script, check the form's validation, submit again and confirm the inquiry arrives at the intended test destination. Follow any booking step that belongs to that journey. Restore the setting and repeat the check. Save the before-and-after observations and the exact control used.",
        "Analytics and experiments can be useful, and a tag container can load several features. Removing the whole container can therefore disrupt more than the script you intend to stop. Keep the rehearsal narrow. A test copy can reveal a dependency to resolve, but it cannot prove that every production condition is safe."
      ]
    },
    {
      "h": "Keep a separate record if your project is notified",
      "ps": [
        "If you receive a notification identifying your project as affected, retain it with the project identifier. Keep the exact page URLs or templates where the code loaded, relevant account activity, the change and deployment history, and the vendor's remediation record. Use those records to establish the project's exposure window in UTC. Leave an unknown start or end time unknown; the investigator's first observation and the vendor's announcement are different events.",
        "Finding Optimizely on a site now establishes neither a past injection nor current malicious delivery. A clean script today or the absence of a current alert cannot settle what ran earlier.",
        "Record the control and restore steps where the authorized owner and backup can find them. Mark the rehearsal complete only after the test inquiry arrives with the selected script switched off."
      ]
    }
  ],
  "takeaway": "",
  "hideVisual": true,
  "readingLayout": true,
  "ctaMode": "inline"
};

export const optimizelyArticleSupport: ArticleSupport = {
  "relatedSlugs": [],
  "sources": [
    {
      "title": "Optimizely Service Status - Web Experimentation Security Incident",
      "href": "https://status.optimizely.com/incidents/ftw0fh9wx43z"
    },
    {
      "title": "World's Largest Brands Infected With Malware Via Optimizely",
      "href": "https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/"
    }
  ]
};
