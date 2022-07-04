const Data = {
  basics: {
    name: 'José Gabriel García Muñoz',
    label: 'Full Stack Developer',
    picture: './image_profile.webp',
    email: {
      mail: 'gabogarciam71@gmail.com',
      img: './email.svg',
      alt: 'email_logo',
    },
    phone: {
      number: '(+34) 677178232',
      img: './phone.svg',
      alt: 'phone_logo',
    },
    website: {
      url: 'https://gabogarciam.github.io/resume/',
      img: './website.svg',
      alt: 'website_logo',
      name: 'gabogarcia.dev',
    },
    location: {
      address: 'Calle Padilla 175',
      postalCode: '08013',
      city: 'Barcelona',
      country: 'Spain',
      region: 'Catalunya',
      img: './ubicacion.svg',
    },
    profiles: [
      {
        network: 'github',
        username: 'gabogarciam',
        url: 'https://github.com/gabogarciam?tab=repositories',
        img: './github.svg',
        alt: 'github_logo',
      },
      {
        network: 'linkedin',
        username: 'gabrielgarciamunoz',
        url: 'https://www.linkedin.com/in/jos%C3%A9-gabriel-garc%C3%ADa-mu%C3%B1oz-82390484/',
        img: './linkedin.svg',
        alt: 'linkedin_logo',
      },
    ],
  },
  aboutMe: {
    label: 'Perfil',
    description:
      'Programmer Analyst, with experience developing computer and web applications in various technologies with JavaScript, Typescript, applying agile development methodologies, including identification of needs and system designs based on development models.',
    description_2:
      'Programmer Analyst, graduated at UniversitIronhack in Barcelona. I have experience with JavaScript, Typescript, Nodejs, React, Webpack. I am also Information System Technologist and passionate about the new technologies, versatile and dynamic, leader, proactive, eager to learn, identify and solve the different problems and needs to meet demand.',
  },
  experience: {
    works: [
      {
        company: 'eDreams ODIGEO',
        position: 'Full Stack Developer',
        website: 'https://www.edreamsodigeo.com',
        startDate: '2021-03-21',
        endDate: 'Present',
        summary:
          'Development of REST Web Services in Nodejs(JS/TS), CI/CD Pipeline with Bitbucket, Jenkins and GCP as infrastructure.',
        highlights: ['Started the company'],
      },
      {
        company: 'Marfeel',
        position: 'Front-End Developer',
        website: 'https://www.marfeel.com/',
        startDate: '2018-11-10',
        endDate: '2020-07-15',
        summary:
          'Solving technical problems equally well with OO, DOM oriented, or functional JS, understanding web technology stack using tools like Typescript, ES6, Jasmine, JSON Schemas, SASS, JSP',
        highlights: ['Started the company'],
      },
      {
        company: 'Fujitsu System LTDA',
        position: 'Informartion Systems Technician',
        website: 'https://',
        startDate: '2010-04-20',
        endDate: '2017-10-30',
        summary: 'Helpdesk for banks products.',
        highlights: ['Started the company'],
      },
    ],
    volunteer: [
      {
        organization: 'Organization',
        position: 'Volunteer',
        website: 'http://organization.com/',
        startDate: '2012-01-01',
        endDate: '2013-01-01',
        summary: 'Description...',
        highlights: ['Awarded "Volunteer of the Month"'],
      },
    ],
    education: [
      {
        institution: 'Ironhack',
        area: 'Full Stack Web Developer',
        studyType: 'Web Development Bootcamp',
        startDate: '2018-06-01',
        endDate: '2018-09-12',
        gpa: '4.0',
        courses: ['DB1101 - Basic SQL'],
      },
      {
        institution: 'University Antonio José Camacho Perea',
        area: 'Software Development',
        studyType: 'Bachelor',
        startDate: '2000-09-16',
        endDate: '2004-07-12',
        gpa: '4.0',
        courses: ['DB1101 - Basic SQL'],
      },
    ],
    awards: [
      {
        title: 'Award',
        date: '2014-11-01',
        awarder: 'Company',
        summary: 'There is no spoon.',
      },
    ],
    publications: [
      {
        name: 'Publication',
        publisher: 'Company',
        releaseDate: '2014-10-01',
        website: 'http://publication.com',
        summary: 'Description...',
      },
    ],
  },
  skills: {
    technicalSkills: [
      {
        name: 'React',
        level: 'Intermediate',
        keywords: ['HTML', 'CSS', 'Javascript'],
      },
      {
        name: 'Nodejs',
        level: 'Intermediate',
        keywords: ['NodeJS', 'Javascript'],
      },
      {
        name: 'Express.js',
        level: 'Intermediate',
        keywords: ['Express.js', 'Javascript'],
      },
      {
        name: 'TypeScript',
        level: 'Intermediate',
        keywords: ['TypeScript'],
      },
      {
        name: 'Jest / Jasmine / Webpack / Babel',
        level: 'Intermediate',
        keywords: ['HTML', 'CSS', 'Javascript'],
      },
      {
        name: 'Databases SQL && NoSQL',
        level: 'Intermediate',
        keywords: ['SQL', 'NoSQL', 'Javascript'],
      },
      {
        name: 'HTML / CSS / Sass',
        level: 'Intermediate',
        keywords: ['HTML', 'CSS', 'SASS'],
      },
      {
        name: 'ESLint / Prettier',
        level: 'Intermediate',
        keywords: ['HTML', 'CSS', 'SASS'],
      },
      {
        name: 'Git',
        level: 'Intermediate',
        keywords: ['Git', 'Javascript'],
      },
    ],
  },
  languages: {
    tongues: [
      {
        language: 'English',
        fluency: 'B2',
      },
      {
        language: 'Spanish',
        fluency: 'Native',
      },
    ],
  },
  interests: [
    {
      name: 'Wildlife',
      keywords: ['Ferrets', 'Unicorns'],
    },
  ],
  references: [
    {
      name: 'Jane Doe',
      reference: 'Reference...',
    },
  ],
};

export default Data;
