export const businessPhone = {
  display: '(732) 943-0866',
  e164: '+17329430866',
};

export const linkedInUrl = 'https://www.linkedin.com/company/helm-secured/';
export const facebookUrl = 'https://www.facebook.com/profile.php?id=61592718124707';
export const instagramUrl = 'https://www.instagram.com/helm.security';

export const serviceAreaText =
  'Monmouth, Ocean, and Middlesex counties, New Jersey';

export const serviceAreaJsonLd = [
  'Monmouth County, New Jersey',
  'Ocean County, New Jersey',
  'Middlesex County, New Jersey',
].map((name) => ({'@type': 'AdministrativeArea', name}));
