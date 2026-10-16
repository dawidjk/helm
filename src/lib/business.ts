export const businessPhone = {
  display: '(732) 943-0866',
  e164: '+17329430866',
};

export const linkedInUrl = 'https://www.linkedin.com/company/helm-secured/';
export const facebookUrl = 'https://www.facebook.com/profile.php?id=61592718124707';
export const instagramUrl = 'https://www.instagram.com/helm.security';

export const serviceAreaText = 'New Jersey';

export const serviceAreaJsonLd = [{'@type': 'AdministrativeArea', name: 'New Jersey'}];
import {siteUrl} from './urls';


// Keep the existing organization ID across all pages. LocalBusiness was
// confirmed by the owner; this is the published mailing address.
export const organizationJsonLd = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': siteUrl('/#organization'),
  logo: {'@type': 'ImageObject', url: siteUrl('/favicon.png'), width: 2048, height: 2048},
  name: 'Helm Security LLC',
  alternateName: ['Helm Security', 'Helm'],
  url: siteUrl('/'),
  sameAs: [linkedInUrl, facebookUrl, instagramUrl],
  email: 'hello@helmsecured.com',
  telephone: businessPhone.e164,
  areaServed: serviceAreaJsonLd,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '865 NJ 33, Ste 3, Unit #256',
    addressLocality: 'Freehold',
    addressRegion: 'NJ',
    postalCode: '07728',
    addressCountry: 'US',
  },
  description: 'Managed cybersecurity alongside existing IT, with security-program leadership through Helm Command.',
};
