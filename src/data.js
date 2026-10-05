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
        name: 'Personal Portfolio Website',
        type: 'Personal project',
        status: '',
        summary: 'A responsive personal portfolio website showcasing my projects, technical skills, education, and experience.',
        problem: 'Provides a central place to showcase my work, skills, and professional information to potential employers.',
        role: 'Designed and developed the portfolio using React and Vite, then deployed it with Vercel.',
        tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Git/GitHub', 'Vercel'],
        features: [
          'Responsive design for desktop and mobile',
          'Dark and light mode',
          'Project showcase',
          'Downloadable CV',
          'GitHub and LinkedIn links',
        ],
        github: 'https://github.com/FevenTe/feven-portfolio.git'
      },
      {
        name: 'House Price Prediction',
        type: 'Machine Learning Web Application',
        status: '',
        summary: 'A machine learning web application that predicts house prices based on property characteristics.',
        problem: 'Provides an estimated house price based on property details such as area, rooms, property age, location-related distances, and other characteristics.',
        role: 'Performed data analysis and machine learning work, then connected the prediction model to a React web application.',
        tech: ['Python', 'Machine Learning', 'React', 'JavaScript', 'Vercel'],
        features: [
          'Property details input form',
          'House price prediction',
          'Multiple property characteristics',
          'Machine learning model integration',
          'Web-based prediction interface',
        ],
        github: 'https://github.com/FevenTe/House-price-app.git',
        demo: 'https://house-price-app-omega.vercel.app/',
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
      demo: 'https://daily-planner-silk.vercel.app/',
    }
  ]