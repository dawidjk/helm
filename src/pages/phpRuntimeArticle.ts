import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

// Reviewed reader-directed manuscript; authored prose preserved in the editorial record.
export const phpRuntimeArticle: Article = {
  "slug": "php-runtime-security-update",
  "collection": "blog",
  "title": "WordPress can be current while PHP stays vulnerable",
  "metaTitle": "WordPress can be current while PHP stays vulnerable | Helm",
  "metaDesc": "Your WordPress and plugin update history won't establish which PHP fixes are running on your live site. Start by reading the version yourself.",
  "date": "2026-10-28",
  "readMin": 6,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "You can finish updating WordPress and still have an urgent PHP update to deal with. PHP runs WordPress's code on the server, and its updates happen separately. Your WordPress and plugin update history won't establish which PHP fixes are running on your live site. WordPress's PHP guide",
    "links": [
      {
        "phrase": "WordPress's PHP guide",
        "to": "https://wordpress.org/support/update-php/",
        "className": "contextual-resource-link"
      }
    ]
  },
  "lead": [
    {
      "text": "Start by reading the version yourself. In your live site's WordPress dashboard, open Tools > Site Health, select Info, then expand Server and find PHP version. This is the inspection path in the WordPress documentation. Record the full number, the site address and the date you checked. Use the live site for this check; a staging copy answers a different question.",
      "links": [
        {
          "phrase": "WordPress documentation",
          "to": "https://wordpress.org/support/update-php/",
          "className": "contextual-resource-link"
        }
      ]
    },
    "If your account doesn't show Site Health, look in your hosting documentation for another permitted way to read the live PHP version. Check any maintenance or deployment records you can already access for a runtime assigned to this site. If neither route identifies it, record the gap as live PHP version unknown. You can still read the update and backup requirements below; a missing screen doesn't establish a missing patch."
  ],
  "sections": [
    {
      "h": "Match the full version to the fix",
      "ps": [
        {
          "text": "On October 21, 2026, PHP released fixes for two critical vulnerabilities, CVE-2026-109618 and CVE-2026-109619. Both PHP advisories list the same first fixed releases:",
          "links": [
            {
              "phrase": "PHP advisories",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "first fixed releases",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "table": {
            "caption": "First PHP project release fixing both vulnerabilities",
            "headers": [
              "PHP branch",
              "First PHP project release fixing both vulnerabilities"
            ],
            "rows": [
              [
                "8.2",
                "8.2.35"
              ],
              [
                "8.3",
                "8.3.36"
              ],
              [
                "8.4",
                "8.4.27"
              ],
              [
                "8.5",
                "8.5.12"
              ]
            ],
            "compact": true
          }
        },
        "Compare the whole number within its branch. For example, 8.3.35 is earlier than the fixed 8.3.36 release. Reading only \"8.3\" loses the part that tells you whether the PHP project has included these fixes.",
        {
          "text": "There is a legitimate reason an older number might still be patched. A maintained distribution package can include a backport: a security fix applied to an older software version. Red Hat explains why its packages can retain an older base version after a security fix.",
          "links": [
            {
              "phrase": "Red Hat explains why its packages can retain an older base version after a security fix.",
              "to": "https://access.redhat.com/security/updates/backporting",
              "className": "contextual-resource-link"
            }
          ]
        },
        "To check that exception, use any software inventory, maintenance history or deployment record you can already read. Look for the exact installed package or build identifier, its distribution or supplier, and the live service it covers. Match that identifier to the supplier's advisory covering both CVEs. A plain PHP runtime number doesn't establish the installed package identity. If those records aren't available, check the environment's documentation for a read-only package-version check within your existing access. If that isn't available either, leave the backport status unconfirmed and record the missing package identity.",
        {
          "text": "If you find PHP 8.1 or earlier, add a move to a supported branch to your plan. Those versions are outside normal PHP project support. PHP supplied limited source patches for 7.4, 8.0 and 8.1 for these two flaws; that exception did not restore general support. PHP's October 21 notice",
          "links": [
            {
              "phrase": "normal PHP project support",
              "to": "https://www.php.net/supported-versions.php",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "PHP's October 21 notice",
              "to": "https://www.php.net/archive/2026.php#2026-10-21-5",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Why this check is urgent",
      "ps": [
        {
          "text": "CISA added both vulnerabilities to its Known Exploited Vulnerabilities catalog on October 26. That establishes exploitation of the listed vulnerabilities; it does not establish that your site has been compromised. It gives you a reason to resolve an unknown PHP patch status promptly.",
          "links": [
            {
              "phrase": "Known Exploited Vulnerabilities catalog",
              "to": "https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "PHP's warning covers all installations serving web requests and identifies Apache mod_php as the highest risk. In the demonstrated mod_php attack, an unauthenticated request can trigger code execution before the application's code runs, with the web worker's permissions. PHP's memory-corruption advisory",
          "links": [
            {
              "phrase": "PHP's warning",
              "to": "https://www.php.net/archive/2026.php#2026-10-21-5",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "PHP's memory-corruption advisory",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "PHP-FPM is also within the update's scope. The first advisory reports no complete demonstrated FPM exploit for that flaw. The second documents code execution through a session-handling path in FPM, conditional on a suitable application operation. Keep FPM in your patch check. PHP's stale-state advisory",
          "links": [
            {
              "phrase": "PHP's stale-state advisory",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Two later notices need their own check",
      "ps": [
        {
          "text": "PHP's October 23 notice describes a separate session issue, CVE-2026-115560. The combination is specific: upload progress is enabled, the configured serializer is php_binary or php_serialize, and application code changes it to php with ini_set() before session_start(). Your PHP version display cannot show that code behavior. Read existing configuration documentation for the deployed application, or its code only if you already have access and understand it. PHP's full conditions",
          "links": [
            {
              "phrase": "PHP's full conditions",
              "to": "https://www.php.net/archive/2026.php",
              "className": "contextual-resource-link"
            }
          ]
        },
        "PHP recommends disabling session upload progress until the next bugfix release. If records confirm it is already disabled, keep that precaution in place. Where the application never changes serializers at runtime, PHP allows the feature to stay enabled. If you cannot establish that behavior, keep a separate session item open: serializer switching unknown. Review the environment's documented procedure for PHP's temporary precaution before considering a live change. A runtime version match alone cannot close this item.",
        {
          "text": "For Windows hosting, inspect the package build as well. PHP's October 26 -1 rebuilds bundle Brotli 1.2.1 to fix CVE-2026-111497, a separate decompression flaw. The PHP runtime version stays unchanged. The vulnerable decoder is reachable through cURL when automatic HTTP response decompression is enabled; that is off by default, but applications or client libraries can enable it. PHP's Windows notice",
          "links": [
            {
              "phrase": "PHP's Windows notice",
              "to": "https://www.php.net/archive/2026.php",
              "className": "contextual-resource-link"
            }
          ]
        },
        "If you use the PHP project's Windows packages, look for the -1 rebuild in the installed-build record for the live service. Use the package-evidence path above if that record isn't available to you. The runtime number alone leaves the Brotli rebuild unconfirmed.",
        {
          "text": "CISA added the Brotli vulnerability to its catalog on October 27. That component listing does not establish exploitation of your PHP installation.",
          "links": [
            {
              "phrase": "catalog",
              "to": "https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Verify the update and the site separately",
      "ps": [
        {
          "text": "Temporary configuration controls cover particular October 21 attack paths; an update containing both complete patches is still required for a full fix. PHP's memory-corruption advisory, stale-state advisory",
          "links": [
            {
              "phrase": "PHP's memory-corruption advisory",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "stale-state advisory",
              "to": "https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "If you find a missing fix, make the PHP update a priority. Before changing the live runtime, follow WordPress's preparation guidance: back up the site and check theme and plugin compatibility. Use the PHP update instructions for your hosting environment. If your role does not permit a runtime change, stop at inspection and preparation, keeping any missing version or package evidence unconfirmed.",
          "links": [
            {
              "phrase": "WordPress's preparation guidance",
              "to": "https://wordpress.org/support/update-php/",
              "className": "contextual-resource-link"
            }
          ]
        },
        "After an authorized change, read the live PHP version again and match it to the release or package evidence. In any deployment or maintenance record you can read, check the live service, installed release or build, instances covered, and completion of any required activation. If the record doesn't establish coverage of all serving instances, keep that coverage unconfirmed. A Site Health reading is a starting observation, not a complete inventory of the hosting setup.",
        "Then test the site the way you use it. Submit an enquiry or booking and check that it arrives. If you use a client login, complete a normal login too. A working form tells you that function still works; the runtime and package evidence establish whether the fixes are active. Keep both results before closing the update."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "inline"
};

export const phpRuntimeArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "vulnerability-management-new-jersey",
    "check-website-security",
    "zero-day-vs-known-vulnerabilities"
  ],
  "sources": [
    {
      "title": "WordPress: Update PHP",
      "href": "https://wordpress.org/support/update-php/"
    },
    {
      "title": "PHP: CVE-2026-109618 advisory",
      "href": "https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w"
    },
    {
      "title": "PHP: CVE-2026-109619 advisory",
      "href": "https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp"
    },
    {
      "title": "Red Hat: Security backporting",
      "href": "https://access.redhat.com/security/updates/backporting"
    },
    {
      "title": "PHP: Supported versions",
      "href": "https://www.php.net/supported-versions.php"
    },
    {
      "title": "PHP: October 21 critical security notice",
      "href": "https://www.php.net/archive/2026.php#2026-10-21-5"
    },
    {
      "title": "CISA: Known Exploited Vulnerabilities catalog",
      "href": "https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json"
    },
    {
      "title": "PHP: October 23 session and October 26 Windows notices",
      "href": "https://www.php.net/archive/2026.php"
    }
  ]
};
