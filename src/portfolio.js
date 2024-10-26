/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Asif Vora",
  title: "Hi all, I'm Asif",
  subTitle: emoji(
    "I'm JavaScript Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native / Redux / Mobx / Vue / Angular7 / TypeScript and some other cool libraries and frameworks."
  ),
  resumeLink:"https://drive.google.com/file/d/1HSi3yA3zg7ZSjc0auiVp5d7bDz7HR6yG/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asifvora",
  linkedin: "https://www.linkedin.com/in/asif-vora",
  gmail: "asifvora0@gmail.com",
  // gitlab: "https://gitlab.com/",
  medium: "https://medium.com/@asifvora",
  facebook: "https://www.facebook.com/asif.vora.92",
  stackoverflow: "https://stackoverflow.com/users/7833077/asif-vora",
  instagram: 'https://www.instagram.com/007_dark_shadow/',
  twitter: 'https://twitter.com/007_dark_shadow',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK JAVASCRIPT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Supabase.io"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "styled component",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular7",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "electronjs",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "intercom",
      fontAwesomeClassname: "fab fa-intercom"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "L.J. Institute Of Engineering and Technology, Ahemedabad (GTU)",
      logo: require("./assets/images/gtu.jpeg"),
      subHeader: "Master of Computer Applications",
      duration: "2015 - 2017",
      desc: "8.21 CGPA",
      descBullets: []
    },
    {
      schoolName: "L.N.Patel College of COMP & MANAG, Kalyanpura (HNGU)",
      logo: require("./assets/images/hngu.jpeg"),
      subHeader: "Bachelor of Computer Applications",
      duration: "2012 - 2015",
      desc: "84.66%",
      descBullets: []
    },
    {
      schoolName: "Shree Madhymikshala, Viramgam (GHSEB)",
      logo: require("./assets/images/gseb.jpeg"),
      subHeader: "HSC",
      duration: "2010 - 2012",
      desc: "67.14%",
      descBullets: []
    },
    {
      schoolName: "New Education High School, Viramgam (GSEB)",
      logo: require("./assets/images/gseb.jpeg"),
      subHeader: "SSC",
      duration: "2009 - 2010",
      desc: "59.38%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Software Engineer",
      company: "Simform",
      companylogo: require("./assets/images/simform.png"),
      date: "January 2020 – Present",
      desc: "I'm working as a Sr. Software Engineer for building a web appliactions"
      // descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Simform",
      companylogo: require("./assets/images/simform.png"),
      date: "June 2019 – December 2020",
      desc: "I'm working as a Software Engineer for building a web appliactions"
      // descBullets: []
    },
    {
      role: "JavaScript Developer",
      company: "Multidots",
      companylogo: require("./assets/images/multidots.jpeg"),
      date: "July 2017 – May 2019",
      desc: "I'm worked as a JavaScript Developer for building a web appliactions"
    },
    {
      role: "Project Intern",
      company: "Multidots",
      companylogo: require("./assets/images/multidots.jpeg"),
      date: "January 2017 – June 2017",
      desc: "Project Trainee"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "asifvora", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 7600584687",
  email_address: "asifvora0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "007_dark_shadow", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
