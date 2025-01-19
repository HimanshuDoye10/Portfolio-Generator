export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}