// This file contains the two API functions which you'll use: fetchProviders, and fetchProviders

export interface ProvidersList {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  availabilty: string;
  occupation: string;
  education?: string;
  location?: string;
  languages?: string[];
}

export interface LocationsList {
  name: string;
  abbr: string;
}

/**
 * We are mimicking a REST request here, so it takes a half sec to respond
 */
const REQUEST_RESPONSE_TIME = 500;

/**
 * Fetch a a given provider by ID, and get the complete representation
 * @param providerId - The ID of the provider to "fetch"
 * @return {Promise<{id: string, name: string, title: string, avatarUrl: string, bio: string, }>}
 */
export const fetchProvider = (providerId: string): Promise<ProvidersList> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const [matchingProvider] = fullDataset.filter(({ id }) => id === providerId);
      if (matchingProvider) {
        resolve(matchingProvider);
      } else {
        reject(`Provider with id ${providerId} not found!`);
      }
    }, REQUEST_RESPONSE_TIME),
  );
};

/**
 * Fetch all the providers to be displayed, in a minimal representation
 * @return {Promise<Array<{id: string, name: string, title: string, avatarUrl: string, bio: string, location: string, availabilty: string, occupation: string}>>>}
 */
export const fetchProviders = (): Promise<ProvidersList[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fullDataset.map(makePartialRepresentation)), REQUEST_RESPONSE_TIME),
  );
};

const makePartialRepresentation = ({
  id,
  name,
  title,
  avatarUrl,
  bio,
  availabilty,
  location,
  occupation,
}: ProvidersList) => ({
  id,
  name,
  title,
  avatarUrl,
  bio,
  availabilty,
  location,
  occupation,
});

const fullDataset: ProvidersList[] = [
  {
    id: '1',
    name: 'Caroline Champagne',
    title: 'MSW',
    avatarUrl: '1.png',
    availabilty: 'tomorrow',
    location: 'Quebec City, Quebec',
    education: 'Concordia University\n',
    languages: ['French'],
    occupation: 'Registered Social Worker',
    bio:
      'Caroline Champagne is a Registered Social Worker and a member of the OTSTCFQ. While in university, she had ' +
      'the chance to work at the CISSS-CA for several years, taking on different mandates and working with various ' +
      'clienteles. Her experiences have allowed her to develop expertise in mental health issues that range from mood' +
      ' disorders to psychotic disorders and personality disorders.\n' +
      'Transient adjustment disorders such as depression, burnout, anxiety and separation are some of the subjects' +
      ' that Caroline masters in her interventions. Added to her expertise are family issues and relationship ' +
      'challenges, such as separation conflicts, parent-child / adolescent relationships, behavioral issues and' +
      'development of children under 5 years old. Her approach focuses on needs, strengths, and empowerment.',
  },
  {
    id: '2',
    name: 'Tamara Childs',
    title: 'MA, RCC',
    avatarUrl: '2.png',
    availabilty: 'next-week',
    location: 'Toronto, Ontario',
    education: 'University of Toronto',
    languages: ['English'],
    occupation: 'Registered Clinical Counsellor',
    bio:
      'Tamara is a Registered Clinical Counsellor, insured to provide online counselling for anyone across Canada.' +
      ' She works with clients of all ages and has extensive experience with those between the ages of 18 to 35. ' +
      'With over 15 years of experience in counselling and social work, Tamara is equipped to help clients living ' +
      'through anxiety, stress, depression, grief & loss, career and life transitions, addiction, relationship ' +
      'issues, trauma and difficulty incorporating health-promoting behaviors into daily life.\n' +
      'Tamara draws from different approaches, including Cognitive Behavioral Therapy, Narrative Therapy, ' +
      'Motivational Interviewing, solution-focused, and mindfulness, depending on client needs and preferences. ' +
      "The highly evidence-based pillars of Positive Psychology also inform Tamara's approach towards helping her " +
      'clients live their best lives. Clients working with Tamara can expect to be deeply heard, held in an ' +
      'emotionally safe space, empowered toward making change and restored towards health and wholeness.',
  },
  {
    id: '3',
    name: 'Francois-Pierre Decoste',
    title: 'MSW',
    avatarUrl: '3.png',
    availabilty: 'tomorrow',
    location: 'Montreal, Quebec',
    education: 'McGill',
    languages: ['English', 'French'],
    occupation: 'Registered Social Worker',
    bio:
      'Dynamic and easy to approach, François-Pierre Decoste is a social worker who will help you take control of ' +
      'your life. He specializes in issues that affect mood (anxiety, depression, grief, burnout, posttrauma) and ' +
      'the quality of your relationships (communication, couple and family issues). His approach promotes better ' +
      'self-esteem, techniques to develop assertiveness, and healthy management of emotions.',
  },
  {
    id: '4',
    name: 'Marco DiCroce',
    title: 'MSW',
    avatarUrl: '4.png',
    availabilty: 'tomorrow',
    location: 'Toronto, Ontario',
    education: 'University of Toronto',
    languages: ['English'],
    occupation: 'Registered Social Worker',
    bio:
      'Marco is a Registered Social Worker. He has worked extensively in community mental health and has ' +
      'counselled individuals experiencing depression, anxiety, bipolar disorder, schizophrenia, and borderline ' +
      'personality disorder. He views therapy as a partnership and likes to work collaboratively with clients to find' +
      'what works for them. He often utilizes CBT, brief solution-focused, and narrative approaches to therapy.',
  },
];

const locations: { [key: string]: string } = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon',
};

/**
 * Fetch all the locations to be displayed
 * @return {Promise<Array<{name: string, abbr: string}>>>}
 */
export const fetchLocations = (): Promise<LocationsList[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(Object.keys(locations).map((loc) => ({ name: locations[loc], abbr: loc }))),
      REQUEST_RESPONSE_TIME,
    ),
  );
};
