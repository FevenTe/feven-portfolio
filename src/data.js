export const profile = {
    photo: 'fev.jpg',
    name: 'Feven Temesgen',
    title: 'Computer Science Graduate',
    focus: 'Web Development · Data Analysis · Machine Learning',
    intro:
      'Computer Science graduate with project experience in web development, data analysis and machine learning, seeking an entry-level technology role.',
    openTo: [
        'Junior Software Developer',
        'Frontend / Web Developer',
        'Junior Data Analyst',
        'AI / Machine Learning roles',
        'Graduate programs and internships',
    ],
    location: 'Addis Abeba, Ethiopia',
    email: 'feventemesgen91@gmail.com',
    github: 'https://github.com/FevenTe',
    linkedin: 'https://www.linkedin.com/in/feven-temesgen91',
    cv: 'Feven_Temesgen_CV.pdf',
  }
  
  export const about = [

    "I'm a Computer Science graduate with hands on experience building web applications using React, Angular, JavaScript, and SQL. I've worked on team based projects, including MentorMeet, a tutoring and mentorship platform, and gained practical experience in data analysis and machine learning through hands on training with real world datasets.",
  
    "I enjoy building practical applications, learning new technologies, and improving my skills through hands on projects and continuous learning.",
  
    "I'm looking for an entry level role where I can apply my programming and data skills while continuing to grow as a developer.",
  
  ]
  
  export const skills = [
    { group: 'Programming', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
    {
      group: 'Web Development',
      items: ['React', 'Angular', 'Next.js', 'Tailwind CSS'],
      note: 'Used in projects',
    },
    {
      group: 'Data & AI',
      items: [
        'Data cleaning',
        'Data preprocessing',
        'Exploratory data analysis',
        'Supervised machine learning',
        'Regression & classification',
        'Feature selection',
        'Model evaluation',
      ],
    },
    {
      group: 'Databases',
      items: ['SQL', 'MySQL', 'SQL Server', 'PostgreSQL', 'Prisma'],
      note: 'PostgreSQL and Prisma used in a project',
    },
    {
      group: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Anaconda', 'DBeaver'],
    },
  ]
  
  // Used in Step 4. Leave '' for any link you don't have yet.
  export const projects = [
    {
      name: 'MentorMeet',
      type: 'Senior project (team)',
      status: '',
      summary: 'A web platform that connects students and parents with verified tutors.',
      problem: 'Makes it easier for students and parents to find verified tutors and book sessions in one place.',
      role: 'Worked primarily on the React frontend. The backend (ASP.NET, SQL Server) ',
      tech: ['React', 'Vite', 'JavaScript', 'HTML/CSS', 'Git/GitHub'],
      features: [
        'Authentication',
        'Tutor profiles, subjects ',
        'Booking, availability and scheduling',
        'Admin functionality',
        'Learning materials and attendance',
      ],
      github: 'https://github.com/mentormeet-teem/MentorMeet_frontend.git',
      demo: '',
    },
    {
      name: 'Data Preprocessing & Machine Learning',
      type: 'AI Engineering training project (Qiyas)',
      status: '',
      summary: 'Practical data preparation and supervised learning exercises on real-world style datasets.',
      problem: 'Raw data has to be cleaned and prepared before a model can learn from it.',
      role: 'Individual training work in Python, using weather-related and COVID-19-related datasets among others.',
      tech: ['Python', 'Jupyter Notebook', 'Google Colab'],
      features: [
        'Handling missing values and duplicates',
        'Identifying outliers and encoding categorical variables',
        'Feature selection and train/test splitting',
        'Regression and classification, model evaluation, predictions',
      ],
      github: 'https://github.com/FevenTe/qiyas-2026-006371.git',
      demo: '',
    },
    {
      name: 'Daily Planner',
      type: 'Web application',
      status: '',
      summary: 'A task planner for organizing the day.',
      problem: 'Keeps daily tasks organized by date in one simple page.',
      role: 'Developed the application.',
      tech: ['Angular', 'HTML', 'CSS', 'Local Storage'],
      features: [
        'Task creation and management',
        'Date-based planning',
        'Filtering',
        'Drag-and-drop organization',
        'Tasks saved in the browser with local storage',
      ],
      github: 'https://github.com/FevenTe/daily-planner.git',
      demo: '',
    }
  ]