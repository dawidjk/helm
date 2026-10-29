import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const tailscaleArticle: Article = {
  "slug": "tailscale-ssh-serve-security-update",
  "collection": "blog",
  "title": "Tailscale SSH needs a patch, even when access is restricted",
  "metaTitle": "Tailscale SSH and Serve: update to 1.104.4 | Helm",
  "metaDesc": "Tailscale 1.104.4 fixes SSH and Serve flaws. Identify the affected hosts, update them, and verify their versions and expected access.",
  "date": "2026-10-29",
  "readMin": 4,
  "lane": "All industries",
  "laneTo": "/",
  "intro": {
    "text": "A person allowed to log in to a server should still be limited by the account they use. Tailscale's latest security fixes address failures in those limits, along with a way to disrupt connections. If your firm uses Tailscale SSH or the affected Tailscale Serve features, update the hosts running them to version 1.104.4 or later. Tailscale lists the release on October 28, 2026.",
    "links": [
      {
        "phrase": "October 28, 2026",
        "to": "https://tailscale.com/changelog",
        "className": "contextual-resource-link"
      }
    ]
  },
  "lead": [
    {
      "text": "Tailscale says the SSH findings concerned what could happen after a connection had been authorized. Exploitation required access to an authorized device in the tailnet, with SSH access permitted by policy and the relevant vulnerable functionality available. These findings do not describe an unauthenticated attacker connecting to arbitrary Tailscale SSH servers. Restricting access still matters, but an allowed connection also needs to stay within its permissions.",
      "links": [
        {
          "phrase": "Tailscale says",
          "to": "https://tailscale.com/blog/tailscale-ssh-findings-fixes",
          "className": "contextual-resource-link"
        }
      ]
    }
  ],
  "sections": [
    {
      "h": "Find out which kind of SSH you use",
      "ps": [
        {
          "text": "An SSH connection carried over Tailscale is not necessarily Tailscale SSH. You can run a conventional SSH server, such as OpenSSH, over the Tailscale network. Tailscale SSH is the separate built-in server that uses Tailscale identities and policies to control access. The distinction changes which machines you need to investigate for these SSH flaws. Tailscale explains both arrangements.",
          "links": [
            {
              "phrase": "Tailscale explains both arrangements",
              "to": "https://tailscale.com/blog/tailscale-ssh-findings-fixes",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Open the Machines page in your Tailscale admin console. Under Filters, select Property, then Tailscale SSH to find devices with the feature enabled. The documented filter gives you a better starting point than assuming every laptop with Tailscale installed is an affected SSH server.",
          "links": [
            {
              "phrase": "The documented filter",
              "to": "https://tailscale.com/docs/features/access-control/device-management/how-to/filter",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Focus on the machine accepting the connection. Updating the laptop you connect from is not evidence that you have updated the server. Keep that server's identity beside the version you check so the update record describes the right device."
      ]
    },
    {
      "h": "What an allowed connection could do",
      "ps": [
        {
          "text": "One SSH flaw let authenticated peers with permitted local or remote forwarding reach Unix sockets reserved for root, the machine's privileged administrator account. The fixed version performs that forwarding with the authenticated user's permissions. A separate session-handling flaw allowed unbounded memory growth in the Tailscale daemon. The release fixes both issues. Release notes",
          "links": [
            {
              "phrase": "Release notes",
              "to": "https://tailscale.com/changelog",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Tailscale says a policy-permitted SSH session could exhaust memory, kill the daemon and disrupt every Tailscale connection on that node. Disabling forwarding alone does not address this separate session-handling issue. TS-2026-015",
          "links": [
            {
              "phrase": "TS-2026-015",
              "to": "https://tailscale.com/security-bulletins#ts-2026-015",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Serve needs its own check. TS-2026-016 concerns Unix socket backends where a local operator can write Serve configurations or local users can write to configured backend paths. TS-2026-017 concerns Serve with TLS and at least two served paths (mounts) with different capability requirements on the same node. Concurrent HTTP/2 streams on one connection could mix capability values between those mounts, potentially causing a backend application to grant access it should deny. Tailscale recommends that users of Serve with Unix socket backends or TLS upgrade to 1.104.4 or newer. Serve bulletins",
          "links": [
            {
              "phrase": "Serve bulletins",
              "to": "https://tailscale.com/security-bulletins#ts-2026-017",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "On a host using Serve, the read-only tailscale serve status command lists currently running servers. If you use Tailscale Services, the documentation also identifies tailscale serve get-config --all for reading their configuration. Use the Serve command reference to inspect what you run, rather than trying a setup command that changes it.",
          "links": [
            {
              "phrase": "Serve command reference",
              "to": "https://tailscale.com/docs/reference/tailscale-cli/serve",
              "className": "contextual-resource-link"
            }
          ],
          "codePhrases": [
            "tailscale serve status",
            "tailscale serve get-config --all"
          ]
        }
      ]
    },
    {
      "h": "Close the update with a check on the host",
      "ps": [
        {
          "text": "Use Tailscale's update instructions for the way you installed the client. The Machines page shows each device's client version in its Version column. Check for 1.104.4 or later on the hosts you identified; an enabled auto-update setting is not confirmation that this release has arrived. Tailscale documents that automatic updates do not happen immediately after release.",
          "links": [
            {
              "phrase": "update instructions",
              "to": "https://tailscale.com/docs/features/client/update",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Plan the update around work in progress. Tailscale notes that restarting its daemon, including during an upgrade, stops existing Tailscale SSH sessions. Save your work first and make sure you have an approved way back into the host if the connection drops. SSH limitations",
          "links": [
            {
              "phrase": "SSH limitations",
              "to": "https://tailscale.com/docs/features/tailscale-ssh#devices",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Afterward, reconnect using the account you normally use and confirm the service you depend on still works. For an application behind Serve, check access with an account that should be allowed and, where you have an authorized test account, one that should be denied. These are checks on expected access after the change, not a test that reproduces the vulnerabilities.",
        "Treat any host still on an older version as awaiting the fix. You should be able to point to the affected machine, its fixed version and the access you checked. A narrower access policy can reduce who reaches a service; it cannot replace the code fix on the machine running it."
      ]
    }
  ],
  "takeaway": "",
  "hideVisual": true,
  "readingLayout": true,
  "ctaMode": "inline"
};

export const tailscaleArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "network-hardening-small-business",
    "vulnerability-management-new-jersey",
    "palo-alto-pan-os-management-interface-attacks"
  ],
  "sources": [
    {
      "title": "Tailscale release changelog",
      "href": "https://tailscale.com/changelog"
    },
    {
      "title": "Tailscale SSH findings and fixes",
      "href": "https://tailscale.com/blog/tailscale-ssh-findings-fixes"
    },
    {
      "title": "Tailscale: filter",
      "href": "https://tailscale.com/docs/features/access-control/device-management/how-to/filter"
    },
    {
      "title": "Tailscale: security-bulletins#ts-2026-015",
      "href": "https://tailscale.com/security-bulletins#ts-2026-015"
    },
    {
      "title": "Tailscale: security-bulletins#ts-2026-017",
      "href": "https://tailscale.com/security-bulletins#ts-2026-017"
    },
    {
      "title": "Tailscale: serve",
      "href": "https://tailscale.com/docs/reference/tailscale-cli/serve"
    },
    {
      "title": "Tailscale: update",
      "href": "https://tailscale.com/docs/features/client/update"
    },
    {
      "title": "Tailscale: tailscale-ssh#devices",
      "href": "https://tailscale.com/docs/features/tailscale-ssh#devices"
    }
  ]
};
