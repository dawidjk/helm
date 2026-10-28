import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const googleMeetRecapArticle: Article = {
  "slug": "google-meet-recap-audience",
  "collection": "blog",
  "title": "Your Google Meet recap can reach someone who never joined",
  "metaTitle": "Who Can Read Your Google Meet Recap? | Helm",
  "metaDesc": "Google Meet recaps can reach internal invitees who missed the call. Check the Chat audience, separate notes access and sharing choices before a confidential meeting.",
  "date": "2026-10-19",
  "readMin": 4,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "An internal colleague who misses your Google Meet call can still read its meeting chat. Google's new automatic recaps can put a summary into that conversation, so it can reach people beyond those who appeared on screen. The audience follows the meeting's existing access rules, including its Calendar invitation. Google's meeting-chat guidance explains that access.",
    "links": [
      {
        "phrase": "Google's new automatic recaps",
        "to": "https://workspaceupdates.googleblog.com/2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html"
      },
      {
        "phrase": "Google's meeting-chat guidance",
        "to": "https://support.google.com/meet/answer/9308979"
      }
    ]
  },
  "lead": [
    "If your professional-services firm has already approved AI meeting notes, this is a reason to revisit what that approval covered. Permission to generate notes may be settled. Whether a summary should appear automatically in the meeting chat deserves its own answer, especially before a client discussion that only a few colleagues need to follow.",
    {
      "text": "In its October 19 announcement, Google describes recaps with meeting summaries, decisions and action items, plus links to meeting artifacts. The feature is on by default where Gemini for Google Workspace is enabled and honors existing Gemini and note-taking policies. There is no separate end-user recap setting.",
      "links": [
        {
          "phrase": "October 19 announcement",
          "to": "https://workspaceupdates.googleblog.com/2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html"
        }
      ]
    },
    "Availability is limited to Business Standard and Plus, Enterprise Standard and Plus, and Frontline Plus. Rapid Release rollout began October 16, 2026; Scheduled Release begins October 27. Google allows up to 15 days for visibility in each rollout. An eligible account therefore may not have it yet.",
    {
      "text": "The recap also needs Google Workspace smart features enabled, \"Take notes for me\" started during the call, and a meeting chat message. When those conditions are met, the recap appears in the meeting conversation after the call. Google's recap instructions include an important exception: selecting \"Hosts and co-hosts only\" for notes prevents the recap from being posted.",
      "links": [
        {
          "phrase": "Google's recap instructions",
          "to": "https://support.google.com/chat/answer/17140251?hl=en"
        }
      ]
    }
  ],
  "sections": [
    {
      "h": "The invitation matters after the call",
      "ps": [
        {
          "text": "The existing audiences explain why this deserves attention without treating every recap as a problem. Under continuous meeting chat, internal Calendar invitees can read the conversation even if they weren't in the call. External guests and internal people who weren't invited have access only while they're in the meeting, without the postmeeting history. These are Google's documented chat rules, not a new audience created by the recap announcement. If the organizer turns off \"See guest list\" after a meeting chat exists, later Calendar guest-list changes no longer update that chat. Removing someone from the invitation then leaves their chat access in place.",
          "links": [
            {
              "phrase": "Google's documented chat rules",
              "to": "https://support.google.com/meet/answer/9308979"
            }
          ]
        },
        {
          "text": "The notes document has its own sharing choice. Hosts can select all invited guests, including external guests; invited people within the organization; or hosts and co-hosts only, subject to admin restrictions. \"Invited\" includes people who never attended. Google's note-taking documentation makes that distinction explicit. An external client may receive the notes document even though they cannot return to the meeting chat afterward.",
          "links": [
            {
              "phrase": "Google's note-taking documentation",
              "to": "https://support.google.com/meet/answer/14754931"
            }
          ]
        },
        "For a routine project update, helping absent colleagues catch up is useful. If those colleagues are the intended readers, automatic delivery may fit the firm's policy already. But an invitation sent for scheduling or awareness can become a poor fit when the discussion moves into confidential client details. A host looking at the faces on screen won't see everyone with continuing access."
      ]
    },
    {
      "h": "Decide the audience before the meeting",
      "ps": [
        {
          "text": "Check which audience controls your edition supports before deciding how to share notes. For Business and Enterprise Standard or Plus editions, Google documents controls that let administrators choose the default notes audience and prevent hosts from changing it. Those controls can apply to a department or group, but they cover scheduled meetings only, not impromptu calls. Configuring them requires both Meet's Gemini features and Gemini note-taking to be on. Google's default audience is internal invitees. The admin documentation describes these controls. If you cannot inspect the admin settings, keep enforcement unconfirmed; a choice you can make as a host does not establish an organization-wide restriction.",
          "links": [
            {
              "phrase": "The admin documentation",
              "to": "https://knowledge.workspace.google.com/admin/meet/let-google-meet-ai-take-notes-for-my-users"
            }
          ]
        },
        {
          "text": "The choice has a practical cost: hosts-only notes suppress the Chat recap, so colleagues lose that automatic catch-up. Use that restriction where the intended audience justifies it. A general smart-features default cannot enforce that choice because users can override that default in their own settings.",
          "links": [
            {
              "phrase": "users can override that default",
              "to": "https://knowledge.workspace.google.com/admin/security/manage-google-workspace-smart-features-for-your-users"
            }
          ]
        },
        "Before the next confidential client call, run a scheduled test meeting with harmless content and the same sharing choices you would normally use. Include a consenting internal invitee who doesn't attend. Check the conversation's current membership and, with that invitee, compare what they can read in Chat and in the notes document. Confirm whether you can change the notes audience as host. If client guests normally join, include an approved external test account and check its document and chat access separately.",
        "Record the observed recipients and settings, along with any rollout limitation. A missing recap during rollout doesn't establish that your chosen restriction worked. Use the results to approve an audience for ordinary updates and decide which discussions need narrower sharing. If you cannot establish who will receive the information, keep confidential content out of the test and postpone automatic notes for that discussion.",
        {
          "text": "Any participant in the meeting conversation can delete the recap card. That permanently removes the Chat summary while leaving the notes document in Drive. Agree on the readers before a confidential discussion starts, while there's still time to choose how its notes will be shared.",
          "links": [
            {
              "phrase": "permanently removes the Chat summary while leaving the notes document in Drive",
              "to": "https://support.google.com/chat/answer/17140251?hl=en"
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "consultation": {
    "title": "Discuss an AI workflow",
    "sub": "Come ready to describe the task, who does it, and what takes time today. You can discuss the workflow without sharing client records or sensitive information.",
    "label": "Discuss an AI workflow",
    "to": "/contact/?service=secure-ai-adoption"
  }
};

export const googleMeetRecapArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "ai-access-business-documents",
    "retest-ai-workflow-changes",
    "google-workspace-security-managed-vs-diy"
  ],
  "sources": [
    {
      "title": "Google Workspace Updates: automatic meeting recaps in Google Chat",
      "href": "https://workspaceupdates.googleblog.com/2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html"
    },
    {
      "title": "Google Meet Help: continuous meeting chat and guest-list synchronization",
      "href": "https://support.google.com/meet/answer/9308979"
    },
    {
      "title": "Google Chat Help: meeting recap requirements and deletion",
      "href": "https://support.google.com/chat/answer/17140251?hl=en"
    },
    {
      "title": "Google Meet Help: AI notes and their recipients",
      "href": "https://support.google.com/meet/answer/14754931"
    },
    {
      "title": "Google Workspace Admin Help: AI note-taking sharing controls",
      "href": "https://knowledge.workspace.google.com/admin/meet/let-google-meet-ai-take-notes-for-my-users"
    },
    {
      "title": "Google Workspace Admin Help: smart-feature defaults and user choices",
      "href": "https://knowledge.workspace.google.com/admin/security/manage-google-workspace-smart-features-for-your-users"
    }
  ]
};
