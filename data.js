const RESIDENCY_ITEMS = {
  'international': [
    { id: 'int1', text: 'Connect with the Division of International Education for international student advising', link: 'https://international.sfsu.edu/contact-us', tag: 'Visa' },
    { id: 'int2', text: 'Maintain your F-1 or J-1 visa status — report address and contact changes on time', link: 'https://international.sfsu.edu/maintaining-status', tag: 'Visa' },
    { id: 'int3', text: 'Enroll in the mandatory SF State international student health insurance plan', link: 'https://international.sfsu.edu/healthinsurance', tag: 'Health' },
    { id: 'int4', text: 'Understand on-campus work authorization for F-1 and J-1 students', link: 'https://international.sfsu.edu/ocec', tag: 'Work' },
    { id: 'int5', text: 'Apply for a Social Security Number after you have work authorization', link: 'https://international.sfsu.edu/ssn', tag: 'Admin' },
  ],
  'out-of-state': [
    { id: 'oos1', text: 'Complete your FAFSA — federal aid applies to out-of-state students', link: 'https://financialaid.sfsu.edu/applying-financial-aid', tag: 'Financial Aid' },
    { id: 'oos2', text: 'Understand your out-of-state tuition costs and payment options', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
    { id: 'oos3', text: 'Learn about California residency reclassification after 1 year', link: 'https://registrar.sfsu.edu', tag: 'Residency' },
    { id: 'oos4', text: 'Note: Cal Grant is for CA residents only — explore other scholarships', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
  ],
  'resident': [
    { id: 'res1', text: 'Apply for Cal Grant via FAFSA — priority deadline is March 2', link: 'https://financialaid.sfsu.edu/state-grants', tag: 'Financial Aid' },
    { id: 'res2', text: 'Check your eligibility for the Middle Class Scholarship', link: 'https://financialaid.sfsu.edu/state-grants', tag: 'Financial Aid' },
  ],
  'other': [
    { id: 'oth1', text: 'Apply via the California Dream Act (CADAA) if you are AB540-eligible', link: 'https://financialaid.sfsu.edu/ab540', tag: 'Financial Aid' },
    { id: 'oth2', text: 'Connect with the Dream Resource Center for advising and support', link: 'https://drc.sfsu.edu', tag: 'Support' },
    { id: 'oth3', text: 'Visit Financial Aid to explore all options available to you', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
  ]
};

const CHECKLISTS = {
  'undecided-freshman': {
    title: 'Undecided Freshman Roadmap',
    sub: "New to SF State and still figuring things out? Start here.",
    items: [
      { id: 'uf1', text: 'Set up your SFSU account, email, and multi-factor authentication', link: 'https://web.sfsu.edu/account', tag: 'Getting Started' },
      { id: 'uf2', text: 'Register for New Student Orientation', link: 'https://activities.sfsu.edu/new-student-orientation', tag: 'Orientation' },
      { id: 'uf3', text: 'Apply for EOP (Educational Opportunity Program) if eligible', link: 'https://eop.sfsu.edu/how-apply', tag: 'Support' },
      { id: 'uf4', text: 'Meet with an academic advisor to plan your first semester', link: 'https://advising.sfsu.edu', tag: 'Advising' },
      { id: 'uf5', text: 'Enroll in your first-semester classes via the Student Center', link: 'https://cms.sfsu.edu/student-center', tag: 'Registration' },
      { id: 'uf6', text: 'Explore major options in the SF State Bulletin', link: 'https://bulletin.sfsu.edu', tag: 'Academics' },
      { id: 'uf7', text: 'Visit Financial Aid to understand your award package', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
      { id: 'uf8', text: 'Get your SF State OneCard student ID', link: 'https://onecard.sfsu.edu/students', tag: 'Getting Started' },
      { id: 'uf9', text: 'Join a club or student organization', link: 'https://dos.sfsu.edu/student-organizations', tag: 'Campus Life' },
    ]
  },
  'declared-freshman-sophomore': {
    title: 'Declared Student Roadmap',
    sub: "You know your major — now let's map out your path to graduation.",
    items: [
      { id: 'df1', text: 'Attend New Student Orientation', link: 'https://activities.sfsu.edu/new-student-orientation', tag: 'Orientation' },
      { id: 'df2', text: 'Meet with your major advisor', link: 'https://advising.sfsu.edu', tag: 'Advising' },
      { id: 'df3', text: 'Review your degree requirements in the SF State Bulletin', link: 'https://bulletin.sfsu.edu', tag: 'Academics' },
      { id: 'df4', text: 'Check your Degree Progress Report', link: 'https://registrar.sfsu.edu/dprguide', tag: 'Academics' },
      { id: 'df5', text: 'Apply for EOP if you are eligible', link: 'https://eop.sfsu.edu/how-apply', tag: 'Support' },
      { id: 'df6', text: 'Create a Handshake profile for internships and jobs', link: 'https://career.sfsu.edu', tag: 'Career' },
      { id: 'df7', text: 'Join a major-related student organization', link: 'https://dos.sfsu.edu/student-organizations', tag: 'Campus Life' },
      { id: 'df8', text: 'Understand your full financial aid package', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
      { id: 'df9', text: 'Explore on-campus jobs and Work-Study opportunities', link: 'https://financialaid.sfsu.edu', tag: 'Financial Aid' },
    ]
  },
  'transfer': {
    title: 'Transfer Student Roadmap',
    sub: "Welcome to SF State. Here's how to hit the ground running.",
    items: [
      { id: 'tr1', text: 'Check your transfer credit articulation on ASSIST.org', link: 'https://assist.org', tag: 'Transfer' },
      { id: 'tr2', text: 'Register for Transfer Student Orientation', link: 'https://activities.sfsu.edu/new-student-orientation', tag: 'Orientation' },
      { id: 'tr3', text: 'Meet with your department advisor', link: 'https://advising.sfsu.edu', tag: 'Advising' },
      { id: 'tr4', text: 'Review your Degree Progress Report', link: 'https://registrar.sfsu.edu/dprguide', tag: 'Academics' },
      { id: 'tr5', text: 'Verify residency requirements for in-state tuition', link: 'https://registrar.sfsu.edu', tag: 'Admin' },
      { id: 'tr6', text: 'Explore Transfer Student resources', link: 'https://transfer.sfsu.edu', tag: 'Transfer' },
      { id: 'tr7', text: 'Create a Handshake profile for internship and job search', link: 'https://career.sfsu.edu', tag: 'Career' },
      { id: 'tr8', text: 'Learn about your priority registration date', link: 'https://registrar.sfsu.edu', tag: 'Registration' },
      { id: 'tr9', text: 'Get your SF State OneCard student ID', link: 'https://onecard.sfsu.edu/students', tag: 'Getting Started' },
    ]
  },
  'junior-senior': {
    title: 'Junior / Senior Roadmap',
    sub: "The finish line is in sight. Let's make sure you're on track.",
    items: [
      { id: 'js1', text: 'Run your Degree Progress Report to confirm all requirements', link: 'https://registrar.sfsu.edu/dprguide', tag: 'Graduation' },
      { id: 'js2', text: "Apply for graduation through the Registrar's Office", link: 'https://registrar.sfsu.edu', tag: 'Graduation' },
      { id: 'js3', text: 'Visit Career and Leadership Development', link: 'https://career.sfsu.edu', tag: 'Career' },
      { id: 'js4', text: "Create or update your resume with CLD's help", link: 'https://career.sfsu.edu/learn-about-cld-services', tag: 'Career' },
      { id: 'js5', text: 'Apply to internships and jobs on Handshake', link: 'https://career.sfsu.edu/get-experience', tag: 'Career' },
      { id: 'js6', text: 'Request letters of recommendation from professors', link: null, tag: 'Graduation' },
      { id: 'js7', text: 'Attend a career fair or employer networking event', link: 'https://career.sfsu.edu', tag: 'Career' },
      { id: 'js8', text: 'Research graduate school options if interested', link: 'https://career.sfsu.edu/learn-about-cld-services', tag: 'Next Steps' },
      { id: 'js9', text: 'Complete a mock interview at Career and Leadership Development', link: 'https://career.sfsu.edu', tag: 'Career' },
    ]
  }
};

const RESOURCES_BASE = [
  { label: 'Financial Aid', url: 'https://financialaid.sfsu.edu' },
  { label: 'Undergraduate Advising Center', url: 'https://advising.sfsu.edu' },
  { label: "Registrar's Office", url: 'https://registrar.sfsu.edu' },
  { label: 'Career & Leadership Dev.', url: 'https://career.sfsu.edu' },
  { label: 'New Student Orientation', url: 'https://activities.sfsu.edu/new-student-orientation' },
];

const RESOURCES_BY_RESIDENCY = {
  'international': [
    { label: 'Division of International Education', url: 'https://international.sfsu.edu' },
    { label: 'Visa & Immigration', url: 'https://international.sfsu.edu/visa-and-immigration' },
    { label: 'International Health Insurance', url: 'https://international.sfsu.edu/healthinsurance' },
    { label: 'International Student Advising', url: 'https://international.sfsu.edu/contact-us' },
  ],
  'out-of-state': [
    { label: 'Residency Reclassification', url: 'https://registrar.sfsu.edu' },
  ],
  'resident': [
    { label: 'State Grants (Cal Grant)', url: 'https://financialaid.sfsu.edu/state-grants' },
  ],
  'other': [
    { label: 'Dream Resource Center', url: 'https://drc.sfsu.edu' },
  ]
};

const FAQS = [
  {
    keywords: ['fafsa', 'financial aid', 'money', 'scholarship', 'grant', 'aid', 'afford', 'pay', 'tuition'],
    answer: '<strong>Applying for Financial Aid at SF State:</strong><br><br>Submit the <strong>FAFSA</strong> (US citizens and eligible non-citizens) or the <strong>California Dream Act Application (CADAA)</strong> (AB540/undocumented students) every year.<br><br>Priority deadline: <strong>March 2</strong> — apply early for the best award.<br><br><a href="https://financialaid.sfsu.edu/applying-financial-aid" target="_blank">Apply for Financial Aid →</a>'
  },
  {
    keywords: ['major', 'declare', 'undecided', 'change major', 'switch major', 'undeclared'],
    answer: "<strong>Declaring or Changing Your Major:</strong><br><br>1. Choose your major in the SF State Bulletin<br>2. Get department approval<br>3. Submit a Change of Major form through the Registrar<br><br><a href='https://registrar.sfsu.edu' target='_blank'>Registrar's Office →</a> &nbsp;·&nbsp; <a href='https://bulletin.sfsu.edu' target='_blank'>SF State Bulletin →</a>"
  },
  {
    keywords: ['advisor', 'advising', 'counselor', 'appointment', 'adviser'],
    answer: "<strong>Meeting with an Academic Advisor:</strong><br><br>SF State offers advising through:<br>· <strong>Undergraduate Advising Center</strong> — for general education, major exploration, and academic planning<br>· <strong>EOP Academic Counseling</strong> — for EOP students<br>· <strong>Department Advisors</strong> — specific to your major<br><br><a href='https://advising.sfsu.edu' target='_blank'>Undergraduate Advising Center →</a> &nbsp;·&nbsp; <a href='https://eop.sfsu.edu/academic-counseling' target='_blank'>EOP Academic Counseling →</a>"
  },
  {
    keywords: ['eop', 'opportunity program', 'first gen', 'first generation', 'support program'],
    answer: "<strong>What is EOP?</strong><br><br>The Educational Opportunity Program supports first-generation, low-income, and underserved students with advising, financial aid counseling, and personal support. Apply early — spots are limited.<br><br><a href='https://eop.sfsu.edu/how-apply' target='_blank'>Apply to EOP →</a>"
  },
  {
    keywords: ['orientation', 'new student', 'first day', 'welcome'],
    answer: "<strong>New Student Orientation:</strong><br><br>Orientation is required for all new SF State students. You will register for classes, learn about resources, and meet other Gators. Register early — dates fill quickly.<br><br><a href='https://activities.sfsu.edu/new-student-orientation' target='_blank'>Register for Orientation →</a>"
  },
  {
    keywords: ['register', 'classes', 'enroll', 'schedule', 'registration', 'student center'],
    answer: "<strong>Registering for Classes:</strong><br><br>Use the <strong>Student Center</strong> to browse and enroll. Registration opens based on your enrollment appointment — check your Student Center for your date. EOP students often receive priority registration.<br><br><a href='https://cms.sfsu.edu/student-center' target='_blank'>Student Center →</a>"
  },
  {
    keywords: ['transfer', 'community college', 'assist', 'articulation', 'transfer credits'],
    answer: "<strong>Transfer Credits at SF State:</strong><br><br>Use <strong>ASSIST.org</strong> to see exactly how your courses transfer. After arriving, meet with your department advisor to confirm which credits count toward your major.<br><br><a href='https://assist.org' target='_blank'>ASSIST.org →</a> &nbsp;·&nbsp; <a href='https://transfer.sfsu.edu' target='_blank'>Transfer Resources →</a>"
  },
  {
    keywords: ['graduation', 'graduate', 'apply to graduate', 'degree check', 'commencement', 'dpr', 'degree progress'],
    answer: "<strong>Applying for Graduation:</strong><br><br>1. Run your <strong>Degree Progress Report</strong> to confirm requirements<br>2. Submit a graduation application through the Registrar<br>3. Apply one year before your expected graduation term<br><br><a href='https://registrar.sfsu.edu/dprguide' target='_blank'>Degree Progress Report →</a> &nbsp;·&nbsp; <a href='https://registrar.sfsu.edu' target='_blank'>Registrar →</a>"
  },
  {
    keywords: ['internship', 'job', 'career', 'handshake', 'resume', 'employment', 'interview'],
    answer: "<strong>Career Resources:</strong><br><br>Career and Leadership Development offers resume reviews, mock interviews, and <strong>Handshake</strong> with thousands of job and internship listings. Sign up with your SFSU email.<br><br><a href='https://career.sfsu.edu' target='_blank'>Career & Leadership Dev. →</a>"
  },
  {
    keywords: ['gpa', 'grades', 'academic probation', 'academic standing', 'failing'],
    answer: "<strong>GPA and Academic Standing:</strong><br><br>SF State requires a minimum 2.0 GPA to stay in good standing. If you fall below, meet with your advisor immediately — early action makes a real difference. Financial aid may also be affected.<br><br><a href='https://advising.sfsu.edu' target='_blank'>Talk to an Advisor →</a>"
  },
  {
    keywords: ['tutor', 'tutoring', 'academic support', 'writing help', 'math help', 'study'],
    answer: "<strong>Free Academic Support:</strong><br><br>SF State offers free tutoring and academic support through the Tutoring and Academic Support Center (TASC), plus department programs.<br><br><a href='https://tutoring.sfsu.edu' target='_blank'>Tutoring & Academic Support →</a>"
  },
  {
    keywords: ['housing', 'dorm', 'live on campus', 'residential', 'apartment'],
    answer: "<strong>Housing at SF State:</strong><br><br>SF State has on-campus residential communities. Apply early — demand is high. Off-campus resources are also available.<br><br><a href='https://housing.sfsu.edu' target='_blank'>Housing and Residence Life →</a>"
  },
  {
    keywords: ['food', 'hungry', 'food pantry', 'basic needs', 'meal'],
    answer: "<strong>Food and Basic Needs:</strong><br><br>SF State's Basic Needs Program offers a free on-campus food pantry, emergency funds, and housing support. These resources are confidential.<br><br><a href='https://basicneeds.sfsu.edu' target='_blank'>Basic Needs Program →</a>"
  },
  {
    keywords: ['health', 'counseling', 'mental health', 'therapy', 'anxiety', 'stress', 'wellness', 'caps'],
    answer: "<strong>Health and Counseling Services:</strong><br><br>SF State offers:<br>· Student Health Services — medical care<br>· CAPS — therapy and crisis support<br><br>It's okay to ask for help.<br><br><a href='https://health.sfsu.edu' target='_blank'>Student Health →</a> &nbsp;·&nbsp; <a href='https://caps.sfsu.edu' target='_blank'>CAPS Counseling →</a>"
  },
  {
    keywords: ['dream act', 'undocumented', 'daca', 'ab540', 'cadaa', 'dreamer'],
    answer: "<strong>Resources for Undocumented and AB540 Students:</strong><br><br>Apply for the <strong>California Dream Act (CADAA)</strong> instead of FAFSA to access state financial aid. SF State also has a Dream Resource Center with dedicated advising.<br><br><a href='https://drc.sfsu.edu' target='_blank'>Dream Resource Center →</a> &nbsp;·&nbsp; <a href='https://financialaid.sfsu.edu/ab540' target='_blank'>AB 540 Financial Aid →</a>"
  },
  {
    keywords: ['visa', 'f-1', 'f1', 'j-1', 'international student services', 'iss', 'sevis', 'opt', 'cpt'],
    answer: "<strong>International Student Visa Support:</strong><br><br>F-1 and J-1 visa matters are handled by SF State's <strong>Division of International Education</strong>. Use their visa, maintaining status, and advising pages for address changes, enrollment status, OPT/CPT authorization, and other status questions — never delay on visa matters.<br><br><a href='https://international.sfsu.edu/visa-and-immigration' target='_blank'>Visa & Immigration →</a> &nbsp;·&nbsp; <a href='https://international.sfsu.edu/maintaining-status' target='_blank'>Maintaining Status →</a> &nbsp;·&nbsp; <a href='https://international.sfsu.edu/contact-us' target='_blank'>Contact International Advising →</a>"
  },
  {
    keywords: ['health insurance', 'insurance', 'mandatory insurance'],
    answer: "<strong>Health Insurance for International Students:</strong><br><br>F-1 international students, J-1 exchange students, and J-1 research scholars must purchase and maintain SF State pre-approved international student health insurance. Start with the Division of International Education health insurance page for current instructions.<br><br><a href='https://international.sfsu.edu/healthinsurance' target='_blank'>International Health Insurance →</a>"
  },
  {
    keywords: ['email', 'gatorlink', 'portal', 'login', 'account', 'canvas'],
    answer: "<strong>Setting Up Your SF State Accounts:</strong><br><br>Your <strong>SFSU account</strong> gives you access to email, Canvas, the Student Center, Wi-Fi, and other university resources. Set up your account and multi-factor authentication as soon as you are admitted.<br><br><a href='https://web.sfsu.edu/account' target='_blank'>SFSU Account Help →</a>"
  },
];

const FALLBACK = 'I\'m not sure about that one. SF State\'s <a href="https://studentresources.sfsu.edu/resources" target="_blank">Student Resources page</a> is a good place to start, or visit the One Stop Enrollment Center on campus.';

const TAG_COLORS = {
  'Financial Aid':   ['#FFF3CD', '#7A5000'],
  'Visa':            ['#D1F0EC', '#0B5C55'],
  'Health':          ['#FCE4EC', '#880E4F'],
  'Work':            ['#E8F5E9', '#2E7D32'],
  'Residency':       ['#E3F2FD', '#0D47A1'],
  'Admin':           ['#F3E5F5', '#6A1B9A'],
  'Orientation':     ['#FFF8E1', '#7A4F00'],
  'Academics':       ['#EDE7F6', '#4527A0'],
  'Career':          ['#E8EAF6', '#283593'],
  'Support':         ['#E8F5E9', '#1B5E20'],
  'Transfer':        ['#E1F5FE', '#01579B'],
  'Getting Started': ['#FFF8E1', '#6D4C00'],
  'Registration':    ['#FBE9E7', '#BF360C'],
  'Graduation':      ['#E8F5E9', '#1B5E20'],
  'Next Steps':      ['#FFF3E0', '#7A3500'],
  'Campus Life':     ['#FCE4EC', '#880E4F'],
};

const RESIDENCY_LABELS = {
  'resident': 'CA Resident',
  'out-of-state': 'Out-of-State',
  'international': 'International',
  'other': 'Other',
};

const TYPE_LABELS = {
  'undecided-freshman': 'Undecided Freshman',
  'declared-freshman-sophomore': 'Declared Freshman / Sophomore',
  'transfer': 'Transfer Student',
  'junior-senior': 'Junior / Senior',
};
