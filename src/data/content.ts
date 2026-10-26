/**
 * ALL WEBSITE CONTENT LIVES HERE.
 * Edit this file to change text, links, or dates. You do not need to touch the components.
 */

export interface LinkItem {
  label: string;
  href: string;
  /** Short note for screen readers / tooltip */
  description: string;
}

export interface ImageSlot {
  /** Path inside /public, e.g. "/images/profile.jpg". Keep null to show the placeholder. */
  src: string | null;
  /** Describes the real image once added. */
  alt: string;
  /** Text shown inside the placeholder box while src is null. */
  placeholderLabel: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: { label: string; href: string } | null;
  image: ImageSlot;
}

export interface TimelineEntry {
  title: string;
  date: string;
  organization?: string;
  note?: string;
  image?: ImageSlot;
}

export const profile = {
  name: "Xyze G. Mantalaba",
  title: "Information Technology Student",
  location: "Davao City, Philippines",
  email: "xyzemph@gmail.com",
  // Safe default: the site uses a first-name greeting only in the hero.
  firstName: "Xyze",
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Xyze G. Mantalaba",
    placeholderLabel: "Profile photo",
  } as ImageSlot,
};

export const intro =
  "I got curious about computers back in high school, mostly by taking them apart in the computer lab to see how they worked. I didn't expect programming to be such a big part of IT when I started, and I'm still figuring out which part of the field fits me best. What I do know is that I learn quickly when something is explained clearly, and I like the process of finding out.";

export const objective =
  "I hope to build practical IT skills, explore hardware support, troubleshooting and related fields, learn from real-world projects, and contribute thoughtfully to a team.";

export const about = [
  "I'm an introvert, and I tend to do my best thinking in quiet environments. Outside of coursework, I write short stories, drabbles, and personal pieces about feelings and experiences, usually in narrative form. I also enjoy gaming. Stardew Valley and Left 4 Dead 2 are two I keep coming back to.",
  "I'm naturally detail-oriented. People often ask me to look over their written work for spelling, grammar, and wording, or to help find the English equivalent of a Tagalog or Bisaya word.",
  "I also enjoy troubleshooting at home. I sometimes end up fixing printers and other devices, and there's a specific kind of satisfaction in tracing a problem back to its cause and solving it.",
  "I'm still exploring which area of IT I want to focus on. Rather than committing to one path early, I'm using courses like this one to try different things and see what actually interests me.",
];

export const basicInfo = [
  { label: "Name", value: profile.name },
  { label: "Career title", value: profile.title },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export const interests = [
  "Hardware technician / hardware support",
  "Practical device troubleshooting",
  "Video editing and content creation",
  "Creative writing",
  "Technology-related educational content",
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Davao del Norte State College",
    detail: "4th Year (currently enrolled)",
  },
  {
    degree: "Senior High School",
    school: "Cabantian National High School",
    detail: "Animation strand",
  },
];

export interface SkillGroup {
  category: string;
  note?: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Video & Audio",
    items: [
      "Video editing: previously used Adobe Premiere Pro and CapCut",
      "Video editing: currently uses Shotcut and Filmcraft",
      "Basic music making",
    ],
  },
  {
    category: "Troubleshooting",
    note: "Practical, hands-on experience. No formal certification.",
    items: ["Troubleshooting printers and household devices", "Tracing a problem back to its cause"],
  },
  {
    category: "Writing & Communication",
    items: ["Proofreading and editing", "Written communication", "Creative writing"],
  },
  {
    category: "Personal Strengths",
    items: ["Attention to detail", "Problem-solving"],
  },
  {
    category: "Programming (Beginner)",
    note: "Shown only as evidenced by my while-loop coding activity.",
    items: ["Basic programming concepts, including the while loop"],
  },
];

export const siteTech = {
  heading: "Technologies used to build this website",
  items: ["React", "TypeScript", "Vite", "CSS", "GitHub", "Vercel"],
};

export const projects: Project[] = [
  {
    title: "Photography Project (Google Sites)",
    description:
      "A photography-related group website created with Google Sites as part of a class activity.",
    tags: ["Group project", "Google Sites", "Photography"],
    link: {
      label: "View the site",
      href: "https://sites.google.com/dnsc.edu.ph/group-2-photos-bsit1a",
    },
    image: {
      src: "/images/Photogroup.png",
      alt: "Preview of the photography group website",
      placeholderLabel: "Project preview placeholder",
    },
  },
  {
    title: "Coding Using the While Loop",
    description:
      "A programming activity and video demo about how a while loop works.",
    tags: ["Programming activity", "Video demo"],
    link: {
      label: "Watch on YouTube",
      href: "https://www.youtube.com/watch?v=cmN_iYDwNns",
    },
    image: {
      src: "/images/Loopvideo.png",
      alt: "Preview of the while loop coding video",
      placeholderLabel: "Video preview placeholder",
    },
  },
  {
    title: "Personal CV Website",
    description:
      "This personal portfolio and CV project. It lives in the personal-cv folder of my IT415-Tasks repository and is still being improved.",
    tags: ["React", "TypeScript", "Ongoing"],
    link: {
      label: "View source on GitHub",
      href: "https://github.com/xyzemph/IT415-Tasks/tree/main/personal-cv",
    },
    image: {
      src: "images/Githubcv.png",
      alt: "Screenshot of the personal CV website",
      placeholderLabel: "CV screenshot placeholder",
    },
  },
];

// Chronological: earliest to latest.
export const achievements: TimelineEntry[] = [
  {
    title: "SPG Grade 6 Representative",
    date: "School year 2015–2016",
  },
  {
    title: "2nd Place, Essay Writing Contest",
    date: "November 29, 2018",
        image: {
      src: "images/essay.jpg",
      alt: "2nd Place certificate",
      placeholderLabel: "Certificate essay placeholder",
    }
  },
  {
    title: "Certificate of Attendance",
    organization: "Learning Ultra Behavioral Impact for Development (LUBID) Training",
    date: "November 29, 2018",
        image: {
      src: "/images/LUBID.jpg",
      alt: "Certificate of Participation from LUBID",
      placeholderLabel: "Certificate image placeholder",
        }
  },
  {
    title: "Certificate of Participation",
    organization: "DavNoVators: Showcase of Local Innovations in Davao del Norte",
    date: "September 17, 2025",
    image: {
      src: "images/davnor.jpg",
      alt: "Certificate of Participation from DavNoVators",
      placeholderLabel: "Certificate image placeholder",
    },
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Part-time Encoder (Social Work)",
    date: "2020–2022",
  },
  {
    title: "Manual YouTube Video Promotion",
    organization: "Upwork",
    date: "April 2023 – August 2024",
  },
  {
    title: "NSTP Feeding Program",
    organization: "Volunteer / community participation",
    date: "May 2024",
    image: {
      src: "images/feedingprogram.JPG",
      alt: "Photo from the NSTP Feeding Program",
      placeholderLabel: "NSTP photo placeholder",
    },
  },
];

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/xyzemph", description: "Xyze's GitHub profile" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xyze-m-1a2055447/",
    description: "Xyze's LinkedIn profile",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@XeeLeyah17",
    description: "Xyze's YouTube channel",
  },
  {
    label: "BandLab",
    href: "https://www.bandlab.com/xeeleyah",
    description: "Xyze's BandLab music profile",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const githubRepoUrl = "https://github.com/xyzemph/IT415-Tasks";
