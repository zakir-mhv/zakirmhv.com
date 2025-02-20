type WorkExperience = {
  title: string
  company: string
  start: string
  end: string
  location: string
  description: string
  id: string
}

type Education = {
  title: string
  description: string
  date: string
  id: string
}

type Skill = {
  title: string
  description: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Senior Front-end Developer (Team Lead)',
    company: 'Cybernet LLC',
    start: 'September 2021',
    end: 'Present',
    location: 'Baku, Azerbaijan (On-site)',
    description:
      'One of the largest and most complex web projects in Azerbaijan - the development of an Automated Taxation Information System for the State Tax Service of the Azerbaijani government. I have contributed to various major modules and, for over a year, have been leading the declaration module, enhancing its workflow and risk management processes.',
    id: 'work1',
  },
  {
    title: 'JavaScript and React Instructor',
    company: 'IT Innovations Academy',
    start: 'September 2024',
    end: 'February 2025',
    location: 'Baku, Azerbaijan (Part-time)',
    description:
      'I provided hands-on training, mentored students, and helped them build real-world projects, focusing on modern front-end development best practices.',
    id: 'work2',
  },
  {
    title: 'Junior Front-end Developer',
    company: 'TechNova',
    start: 'April 2020',
    end: 'May 2021',
    location: 'Saint Petersburg, Russia (Remote)',
    description:
      'I contributed to the development of various projects, including a flower shop, a language course platform, and a website for a beverage production company. I focused on creating user-friendly interfaces and enhancing the overall user experience.',
    id: 'work3',
  },
]

export const EDUCATIONS: Education[] = [
  {
    title: 'Sapienza Università di Roma',
    description: 'Master’s degree in Advanced Economics',
    date: '2014 - 2017',
    id: 'education1',
  },
  {
    title: 'Azerbaijan State University of Economics',
    description: 'Bachelor’s degree in Finance',
    date: '2007 - 2011',
    id: 'education2',
  },
]

export const SKILLS: Skill[] = [
  {
    title: 'Programming',
    description:
      `JavaScript, TypeScript, React, Next
Vue, Python, Git, HTML, CSS, Sass
Bootstrap, Tailwind CSS, Ant Design, jQuery`,
    id: 'skill1',
  },
  {
    title: 'Languages',
    description:
      `Azerbaijani       Native
English           Full Professional
Russian           Full Professional
Turkish           Full Professional
Italian           Professional Working`,
    id: 'skill2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zakir-mhv/',
  },
  {
    label: 'Telegram',
    link: 'https://t.me/zakirmhv',
  },
  {
    label: 'Skype',
    link: 'https://join.skype.com/invite/N5bceQZxLMxE',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/zakirmhv',
  },
  {
    label: 'Github',
    link: 'https://github.com/zakir-mhv',
  },
]

export const EMAIL = 'your@email.com'
