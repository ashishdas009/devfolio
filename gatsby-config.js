module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ashishdas009.com/`,
    // Your Name
    name: 'Ashish Das',
    // Main Site Title
    title: `Ashish Das | Security Engineer`,
    // Description that goes under your name in main bio
    description: `Hey there, nice to meet you!`,
    // Optional: Twitter account handle
    author: `@ashdas009`,
    // Optional: Github account URL
    github: `https://github.com/ashishdas009`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ashish-das-285389110/`,
    //Optional: email address
    email: 'akd410@nyu.edu',
    // Content of the About Me section
    about: `Security Engineer by profession, and security researcher by passion. I am on a lifelong mission of protecting user data and privacy on the internet.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Search over encrypted data on cloud platforms',
        description:
          'Built an application which sends and stores data on public cloud in encrypted form so that it is never accessible to third parties.This data is tagged using TensorFlow’s Deep-Learning Algorithm and can be retrieved just by searching tags.',
        link: 'https://github.com/ashishdas009/Project2_AppliedCryptography',
      },
      {
        name: 'Machine Learning based Intrusion Detection System',
        description:
          'An intelligent Intrusion Detection System which is trained using CSE-CIC-IDS2018 dataset. The model uses deep learning methods representing a promising application which can differentiate between benign and malicious traffic data. This model is particularly useful to detect novel attack types.',
        link: 'https://github.com/ashishdas009/ids',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Linode',
        description: 'Security Engineer Intern, January 2021 - Present',
        link: 'https://github.com/ashishdas009/',
      },
      {
        name: 'IBM Research',
        description: 'Research Intern, Cloud Infrastructure Security, June 2020 - August 2020',
        link: 'https://github.com/ashishdas009/dynamic-syscall-filtering-for-qemu',
      },
      {
        name: 'Sophos',
        description: 'Network Security Engineer, January 2017 - April 2019',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python3, Golang, C++, C, MATLAB',
      },
      {
        name: 'Platforms',
        description: 'Amazon Web Serverices (AWS), Google Cloud Platform (GCP), IBM Cloud',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, REST API, OSQuery, ELK, SaltStack, OpenShift, Nessus, Snort, FreeIPA, Microsoft Active Directory',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
