import { CompanyDTO } from "./CompanyDTO";

export const mockCompanies: CompanyDTO[] = [
  {
    id: "1",
    theirStackId: "stack-1",
    name: "Google",
    domain: "google.com",
    industry: "Technology",
    country: "United States",
    countryCode: "US",
    employeeCount: 156000,
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    readings: [{
      id: "reading-1",
      createdAt: new Date("2024-03-15"),
      employeeCount: 156000,
      totalJobsCount: 2500,
      jobsOpen: 450,
      jobsOpen30Days: 120
    }],
    reliabilityScore: 78
  },
  {
    id: "2",
    theirStackId: "stack-2",
    name: "Microsoft",
    domain: "microsoft.com",
    industry: "Technology",
    country: "United States",
    countryCode: "US",
    employeeCount: 221000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    readings: [{
      id: "reading-2",
      createdAt: new Date("2024-03-15"),
      employeeCount: 221000,
      totalJobsCount: 3200,
      jobsOpen: 680,
      jobsOpen30Days: 210
    }],
    reliabilityScore: 92
  },
  {
    id: "3",
    theirStackId: "stack-3",
    name: "Apple",
    domain: "apple.com",
    industry: "Technology",
    country: "United States",
    countryCode: "US",
    employeeCount: 164000,
    logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
    readings: [{
      id: "reading-3",
      createdAt: new Date("2024-03-15"),
      employeeCount: 164000,
      totalJobsCount: 1800,
      jobsOpen: 320,
      jobsOpen30Days: 95
    }],
    reliabilityScore: 45
  },
  {
    id: "4",
    theirStackId: "stack-4",
    name: "Amazon",
    domain: "amazon.com",
    industry: "E-commerce",
    country: "United States",
    countryCode: "US",
    employeeCount: 1608000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    readings: [{
      id: "reading-4",
      createdAt: new Date("2024-03-15"),
      employeeCount: 1608000,
      totalJobsCount: 8500,
      jobsOpen: 2100,
      jobsOpen30Days: 650
    }],
    reliabilityScore: 63
  },
  {
    id: "5",
    theirStackId: "stack-5",
    name: "Meta",
    domain: "meta.com",
    industry: "Technology",
    country: "United States",
    countryCode: "US",
    employeeCount: 86482,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    readings: [{
      id: "reading-5",
      createdAt: new Date("2024-03-15"),
      employeeCount: 86482,
      totalJobsCount: 1200,
      jobsOpen: 280,
      jobsOpen30Days: 85
    }],
    reliabilityScore: 29
  },
  {
    id: "6",
    theirStackId: "stack-6",
    name: "Netflix",
    domain: "netflix.com",
    industry: "Entertainment",
    country: "United States",
    countryCode: "US",
    employeeCount: 12500,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    readings: [{
      id: "reading-6",
      createdAt: new Date("2024-03-15"),
      employeeCount: 12500,
      totalJobsCount: 350,
      jobsOpen: 85,
      jobsOpen30Days: 25
    }],
    reliabilityScore: 87
  },
  {
    id: "7",
    theirStackId: "stack-7",
    name: "Spotify",
    domain: "spotify.com",
    industry: "Music Streaming",
    country: "Sweden",
    countryCode: "SE",
    employeeCount: 9800,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    readings: [{
      id: "reading-7",
      createdAt: new Date("2024-03-15"),
      employeeCount: 9800,
      totalJobsCount: 280,
      jobsOpen: 65,
      jobsOpen30Days: 20
    }],
    reliabilityScore: 51
  },
  {
    id: "8",
    theirStackId: "stack-8",
    name: "Airbnb",
    domain: "airbnb.com",
    industry: "Travel",
    country: "United States",
    countryCode: "US",
    employeeCount: 6800,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    readings: [{
      id: "reading-8",
      createdAt: new Date("2024-03-15"),
      employeeCount: 6800,
      totalJobsCount: 180,
      jobsOpen: 45,
      jobsOpen30Days: 15
    }],
    reliabilityScore: 94
  },
  {
    id: "9",
    theirStackId: "stack-9",
    name: "Uber",
    domain: "uber.com",
    industry: "Transportation",
    country: "United States",
    countryCode: "US",
    employeeCount: 32900,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    readings: [{
      id: "reading-9",
      createdAt: new Date("2024-03-15"),
      employeeCount: 32900,
      totalJobsCount: 750,
      jobsOpen: 180,
      jobsOpen30Days: 55
    }],
    reliabilityScore: 12
  },
  {
    id: "10",
    theirStackId: "stack-10",
    name: "Twitter",
    domain: "twitter.com",
    industry: "Social Media",
    country: "United States",
    countryCode: "US",
    employeeCount: 7500,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    readings: [{
      id: "reading-10",
      createdAt: new Date("2024-03-15"),
      employeeCount: 7500,
      totalJobsCount: 200,
      jobsOpen: 50,
      jobsOpen30Days: 15
    }],
    reliabilityScore: 36
  },
  {
    id: "11",
    theirStackId: "stack-11",
    name: "LinkedIn",
    domain: "linkedin.com",
    industry: "Professional Network",
    country: "United States",
    countryCode: "US",
    employeeCount: 21000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    readings: [{
      id: "reading-11",
      createdAt: new Date("2024-03-15"),
      employeeCount: 21000,
      totalJobsCount: 480,
      jobsOpen: 120,
      jobsOpen30Days: 35
    }],
    reliabilityScore: 71
  },
  {
    id: "12",
    theirStackId: "stack-12",
    name: "GitHub",
    domain: "github.com",
    industry: "Software Development",
    country: "United States",
    countryCode: "US",
    employeeCount: 3000,
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    readings: [{
      id: "reading-12",
      createdAt: new Date("2024-03-15"),
      employeeCount: 3000,
      totalJobsCount: 85,
      jobsOpen: 25,
      jobsOpen30Days: 8
    }],
    reliabilityScore: 83
  }
];
