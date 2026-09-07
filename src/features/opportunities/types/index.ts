export interface AiMatchDetails {
  overall: number;
  techStack: number;
  experience: number;
  budget: number;
  location: number;
  roleFit: number;
}

export interface OpportunityItem {
  id: string;
  company: string;
  role: string;
  logoType: "vercel" | "stripe" | "notion" | "revolut" | "github" | "linear" | "turing";
  logoBg: string;
  logoColor: string;
  logoInitial?: string;
  location: string;
  salary: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Freelance";
  postedTime: string;
  matchScore: number;
  skills: string[];
  isSaved?: boolean;
  source: "LinkedIn" | "Indeed" | "Company Websites" | "Other";
  aboutRole: string;
  aiMatch: AiMatchDetails;
  whyMatches: string[];
  missingSkills: string[];
}

export interface FilterState {
  jobTypes: string[];
  experienceLevels: string[];
  techStack: string[];
  locations: string[];
  salaryRange: string;
  searchTechQuery: string;
}
