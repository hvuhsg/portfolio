// gitprofile.config.js

const config = {
  github: {
    username: 'hvuhsg', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['MultiSC', 'QWhaleNotifierClient', 'NetworkScanDetector', 'Baileys', 'NotifierApp', 'ClientWars', 'QWhaleDBClient'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'yehoyada',
    twitter: '',
    mastodon: '',
    facebook: '100021736594758',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'yehoyada_55829',
    dev: 'hvuhsg',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'yoyo_programming',
    website: '',
    phone: '',
    email: 'hvuhsg5@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Golang',
    'JavaScript',
    'Svelte',
    'Node.js',
    'Django',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CI/CD',
    'CSS',
    'Linux',
    'Flutter',
    'C/CPP',
    'AWS',
    'Nginx',
    'Firebase',
    'MongoDB',
    'Telegram Bots',
    'gRPC',
  ],
  experiences: [
    {
      company: 'Brew',
      position: 'Backend developer',
      from: 'January 2021',
      to: 'March 2022',
      companyLink: 'https://getbrew.com',
    },
    {
      company: 'NotifyMe',
      position: 'CTO',
      from: 'August 2020',
      to: 'January 2021',
      companyLink: 'blank',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Magshimim',
      degree: 'CS',
      from: '2016',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'YFace',
      description:
        'Face recognition for events, send your selfie and get your photos',
      imageUrl: 'https://th.bing.com/th/id/R.d7a0ecb76b30e5d0d33ce35c1eb8eae1?rik=zR3lmezB6lk5Gw&pid=ImgRaw&r=0',
      link: 'https://y-faces.com',
    },
    {
      title: 'Notrix',
      description:
        'Payment Gateway for Crypto',
      imageUrl: 'https://th.bing.com/th/id/OIP.Cpqy-qkvXZItRzDuEGu7cwAAAA?pid=ImgDet&rs=1',
      link: 'https://notrix.yoyoserver.win',
    },
    {
      title: 'Podcast מעשיות קוד',
      description: 'Thecnical podcast about latest projects and inevations',
      imageUrl: 'https://podcastim.org.il/wp-content/uploads/2023/07/Screenshot_26.jpg',
      link: 'https://podcasters.spotify.com/pod/show/ypod0/',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'yehoyada_55829', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'dark',
      'light',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
