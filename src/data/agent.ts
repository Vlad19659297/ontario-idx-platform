import type { AgentInfo } from '@/types/listing';

export const AGENT: AgentInfo = {
  name: 'Sarah Mitchell',
  title: 'Sales Representative',
  brokerage: 'HomeKey Realty',
  brokerageLegalName: 'HomeKey Realty Inc., Brokerage',
  registrationNumber: 'RECO #12345',
  phone: '(416) 555-0199',
  email: 'sarah@homekeyrealty.ca',
  photo: '',
  bio: 'With over 12 years of experience in the Greater Toronto Area real estate market, Sarah Mitchell has helped hundreds of families find their dream homes. Specializing in residential properties across Toronto, Mississauga, Brampton, and the surrounding areas, Sarah provides expert guidance through every step of the buying and selling process.',
  specializations: [
    'First-Time Home Buyers',
    'Luxury Properties',
    'Investment Properties',
    'Pre-Construction',
    'Downsizing',
  ],
  serviceAreas: [
    'Toronto',
    'Mississauga',
    'Brampton',
    'Vaughan',
    'Markham',
    'Richmond Hill',
    'Oakville',
    'Burlington',
    'Milton',
    'Hamilton',
  ],
};

export const MLS_DISCLAIMER = `The listing data is provided under copyright by the Toronto Regional Real Estate Board (TRREB). The listing data is deemed reliable but is not guaranteed accurate by TRREB or ${AGENT.brokerageLegalName}. The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA.`;

export const IDX_DISCLAIMER = `This website is operated by ${AGENT.brokerageLegalName}, a brokerage who is a member of the Toronto Regional Real Estate Board (TRREB). IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information is deemed reliable but not guaranteed. Data last updated: ${new Date().toLocaleDateString('en-CA')}.`;

export const RECO_INFO_LINK = 'https://www.reco.on.ca/RegistrantSearch';
