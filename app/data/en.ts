import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group is a company focused on innovation and solutions.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact Us',
    contactShort: 'Contact',
    language: 'Language'
  },
  hero: {
    headline: 'Reliable Project Partner from Planning to Completion.',
    description: 'Nexa Mandiri Group supports project owners through practical planning, cost estimation, procurement coordination, supervision support, and construction execution.',
    primaryCta: 'Contact Us',
    secondaryCta: 'View Projects'
  },
  about: {
    heading: 'Who We Are',
    subheading: 'One partner across planning and delivery.',
    description: 'PT Nexa Mandiri Group is a project development and construction solutions company based in Batam, Indonesia.',
    details: 'We support owners from early planning through completion by integrating practical planning, cost estimation, procurement coordination, supervision support, and construction execution.',
    role: 'Our role adapts to each project—whether as consultant, owner representative, construction partner, or design-and-build partner—while providing a clear, measurable, and collaborative route to completion. We stand on the owner\'s side.'
  },
  why: {
    label: 'WHY NEXA EXISTS',
    headline: 'Built to close the gap between decisions and execution.',
    introduction: 'Nexa was established in 2026 in response to recurring patterns observed across construction projects:',
    problems: [
      'Scope that is difficult to evaluate',
      'Quotations that owners cannot compare clearly',
      'Weak coordination before work starts',
      'Uncontrolled variations and repeated work',
      'Communication that fails when problems arise'
    ],
    response: 'Our answer is practical knowledge, transparent cost communication, responsible coordination, and execution that can be monitored, documented, and held accountable.'
  },
  industries: {
    label: 'OUR PROJECTS',
    headline: 'Cross-sector experience, applied with practical project judgment.',
    statement: 'Professional exposure across multiple sectors supports practical technical and commercial judgment for each development.',
    items: [
      { id: 'hospitality', name: 'Hospitality & Resorts' },
      { id: 'industrial', name: 'Industrial & Manufacturing' },
      { id: 'commercial', name: 'Commercial & Retail' },
      { id: 'educational', name: 'Educational Buildings' },
      { id: 'infrastructure', name: 'Infrastructure & Utilities' },
      { id: 'specialised', name: 'Specialised Construction Packages' }
    ]
  },
  clients: {
    label: 'OUR CLIENTS',
    headline: 'Trusted by industry leaders across multiple sectors.',
    items: [
      { id: 'client-1', name: 'Global Manufacturing Co.' },
      { id: 'client-2', name: 'Pacific Resorts' },
      { id: 'client-3', name: 'Metro Retail Group' },
      { id: 'client-4', name: 'EduBuild Partners' },
      { id: 'client-5', name: 'Prime Infrastructure' },
      { id: 'client-6', name: 'Apex Construction' }
    ]
  },
  cta: {
    headline: 'Ready to build your next project?',
    statement: 'Contact us to discuss your project requirements and find out how we can help.',
    button: 'Get in Touch'
  },
  footer: {
    description: 'PT Nexa Mandiri Group is a project development and construction solutions company based in Batam, Indonesia.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    address: 'Batam, Riau Islands, Indonesia',
    email: 'nexamandirigroup@gmail.com',
    phone: '6285121538265',
    rights: 'All rights reserved.'
  },
  contactPage: {
    title: 'Contact Us',
    subtitle: 'Let\'s start a conversation.',
    description: 'Whether you have a specific project in mind or just want to explore how we can help, our team is ready to assist you.',
    infoTitle: 'Contact Information',
    formTitle: 'Send us a Message',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    country: 'Country',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message'
  },
  aboutPage: {
    heroTitle: 'About Us',
    heroSubtitle: 'Practical expertise, from planning to execution.',
    whoWeAre: {
      title: 'Who We Are',
      description: 'Nexa Mandiri Group is a premier construction and engineering firm dedicated to transforming visions into enduring realities.We support owners from early planning through project completion by integrating practical planning, cost estimation, procurement coordination, supervision support, and construction execution.'
    },
    whyExists: {
      title: 'Why Nexa Exists',
      description: 'We believe that the built environment shapes human experience. Nexa exists to construct spaces that empower communities, drive economic growth, and stand the test of time. Our purpose goes beyond laying bricks and pouring concrete; we exist to solve complex engineering challenges and create sustainable foundations for tomorrow.'
    },
    coreServices: {
      title: 'Core Services',
      description: 'Our comprehensive suite of services covers every phase of the project lifecycle, from initial concept to final handover.',
      items: [
        {
          title: 'Project Development & Consultancy',
          description: 'We support project development from the early stages through needs assessment, planning, budget and cost estimation, BOQ and tender support, vendor evaluation, and value engineering.'
        },
        {
          title: 'Project Management & Supervision',
          description: 'We support project management through coordination, schedule and cost monitoring, progress reporting, quality and site supervision, and change and handover coordination.'
        },
        {
          title: 'Construction & Fit Out ',
          description: 'We deliver construction and renovation works, covering civil and architectural works, interior and fit-out, finishing, glass and aluminium works, and supporting infrastructure.'
        },
        {
          title: 'Procurement & Material Supply',
          description: 'We support procurement through construction material sourcing, supplier comparison, procurement coordination, vendor management, and project-based material supply.'
        }
      ]
    },
    nexaWay: {
      eyebrow: 'THE NEXA WAY',
      title: 'A clear process creates better project decisions.',
      steps: [
        { title: 'DISCOVER', description: 'Objectives, budget, timing' },
        { title: 'DEFINE', description: 'Requirements, scope, risks' },
        { title: 'PLAN', description: 'Drawings, cost plan, schedule' },
        { title: 'VALIDATE', description: 'Buildability, feasibility, risks' },
        { title: 'EXECUTE', description: 'Construction, contractor coordination' },
        { title: 'CONTROL', description: 'Cost, schedule, quality, safety' },
        { title: 'DELIVER', description: 'Testing, handover, close-out' },
        { title: 'SUPPORT', description: 'Warranty, maintenance, future development' }
      ]
    },
    founder: {
      title: 'Founder & Project Leadership',
      headline: 'Hands-on judgement across planning and execution.',
      name: 'Herman Cahyadi',
      paragraphs: [
        'Herman brings hands-on experience across construction planning, estimating, procurement, coordination, and project execution in the Riau Islands.',
        'His professional exposure includes educational facilities, industrial works, infrastructure, hospitality developments, retail fit-outs, structural works, and aluminium and glazing packages.',
        'He established Nexa to bridge planning decisions and on-site execution through practical, transparent project leadership.'
      ]
    },
    registration: {
      title: 'Registered Company Information',
      subtitle: 'Official registration and corporate details of PT Nexa Mandiri Group.',
      labels: {
        name: 'Registered Name',
        legalForm: 'Legal Form',
        nib: 'NIB',
        investment: 'Investment Status',
        domicile: 'Registered Domicile',
        established: 'Established'
      },
      values: {
        name: 'PT Nexa Mandiri Group',
        legalForm: 'Indonesian Limited Liability Company (PT)',
        nib: '1905260072336',
        investment: 'PMDN',
        domicile: 'Batam City, Riau Islands',
        established: '2026'
      },
      card: {
        title: 'Corporate Registration',
        description: 'PT Nexa Mandiri Group is an Indonesian limited liability company established in 2026 and registered to provide construction, project consultancy, material supply, and related project support services.',
        footer: 'Based on the company\'s available registration records.'
      }
    }
  },
  services: [
    {
      id: 'service-1',
      title: 'Service 1',
      description: 'Service 1 description'
    }
  ] as Service[],
  projectsPage: {
    title: 'Our Projects',
    description: 'Explore our portfolio of engineering and construction projects spanning multiple industries. We pride ourselves on delivering excellence, innovation, and sustainability.',
    noImage: 'No Image',
    details: {
      client: 'Client',
      year: 'Year',
      budget: 'Budget',
      scope: 'Scope of Service'
    }
  },
  projects: [
    {
      id: 'mustafa',
      slug: 'mustafa',
      title: 'Mustafa Retail Fit-Out – Lagoy Bay Mall',
      description: 'Commercial construction project ensuring high quality standards and modern execution.',
      category: 'Commercial',
      image: '/images/projects/commercial/1.webp',
      year: 2025,
      budget: 'IDR 8,189,062,000',
      client: 'Mustafa Retail Fit Out -Lagoi Bay Mall',
      scopeOfService: ['General Contracting', 'Project Management', 'Structural Engineering'],
      gallery: [
        '/images/projects/commercial/mustafa/2.webp',
        '/images/projects/commercial/mustafa/3.webp',
        '/images/projects/commercial/mustafa/4.webp',
        '/images/projects/commercial/mustafa/5.webp',
        '/images/projects/commercial/mustafa/6.webp',
        '/images/projects/commercial/mustafa/7.webp'
      ]
    },
    {
      id: 'clubmed',
      slug: 'clubmed',
      title: 'Club Med Aluminium Door & Window Works',
      description: 'Luxury hospitality development designed to deliver exceptional guest experiences.',
      category: 'Hospitality',
      image: '/images/projects/hospitality/1.webp',
      year: 2026,
      budget: 'IDR 10,820,421,798',
      client: 'Club Med Alumunium Door & Window Works',
      scopeOfService: ['Design-Build', 'Interior Fit-out', 'Landscaping'],
      gallery: [
        '/images/projects/hospitality/clubmed/IMG_0446.webp',
        '/images/projects/hospitality/clubmed/IMG_0447.webp',
        '/images/projects/hospitality/clubmed/IMG_0454.webp',
        '/images/projects/hospitality/clubmed/IMG_0456.webp',
        '/images/projects/hospitality/clubmed/IMG_0458.webp',
        '/images/projects/hospitality/clubmed/IMG_0459.webp',
        '/images/projects/hospitality/clubmed/IMG_0462.webp'
      ]
    },
    {
      id: 'hotel-indigo',
      slug: 'hotel-indigo',
      title: 'Hotel Indigo, Holiday Inn & Meatshop Bintan',
      description: 'Premium hotel construction delivering aesthetic appeal and structural durability.',
      category: 'Hospitality',
      image: '/images/projects/hospitality/hotel indigo/1.webp',
      year: 2023,
      budget: 'IDR 14,893,646,297',
      client: 'Hotel Indigo,Holiday Inn & Meatshop Bintan',
      scopeOfService: ['General Contracting', 'MEP Installation', 'Quality Assurance'],
      gallery: [
        '/images/projects/hospitality/hotel indigo/1.webp',
        '/images/projects/hospitality/hotel indigo/IMG_0413.webp',
        '/images/projects/hospitality/hotel indigo/IMG_0418.webp',
        '/images/projects/hospitality/hotel indigo/IMG_0419.webp',
        '/images/projects/hospitality/hotel indigo/IMG_0420.webp'
      ]
    },
    {
      id: 'weighbridge',
      slug: 'weighbridge',
      title: 'Weighbridge Foundation',
      description: 'Robust industrial infrastructure constructed to handle heavy-duty operational demands.',
      category: 'Industrial',
      image: '/images/projects/industrial/1.webp',
      year: 2019,
      budget: 'IDR 181,500,000',
      client: 'Weighbridge Foundation',
      scopeOfService: ['Civil Engineering', 'Structural Fabrication', 'Equipment Installation'],
      gallery: [
        '/images/projects/industrial/weighbridge/IMG_0384.webp',
        '/images/projects/industrial/weighbridge/IMG_0385.webp',
        '/images/projects/industrial/weighbridge/IMG_0386.webp',
        '/images/projects/industrial/weighbridge/IMG_0387.webp'
      ]
    },
    {
      id: 'terminal-batu-ampar',
      slug: 'terminal-batu-ampar',
      title: 'Batu Ampar Terminal Entrance',
      description: 'Major infrastructure development enhancing regional logistics and transportation capacity.',
      category: 'Infrastructure',
      image: '/images/projects/infrastructure/1.webp',
      year: 2021,
      budget: 'IDR 6,080,457,005',
      client: 'Batu Ampar Terminal Entrance',
      scopeOfService: ['Infrastructure Development', 'Piling & Foundation', 'Concrete Works'],
      gallery: [
        '/images/projects/infrastructure/terminalbatuampar/2.webp',
        '/images/projects/infrastructure/terminalbatuampar/3.webp',
        '/images/projects/infrastructure/terminalbatuampar/4.webp',
        '/images/projects/infrastructure/terminalbatuampar/5.webp',
        '/images/projects/infrastructure/terminalbatuampar/6.webp'
      ]
    },
    {
      id: 'alumina-school',
      slug: 'alumina-school',
      title: 'Alumina School – Bintan',
      description: 'Modern educational facility built to provide a safe and inspiring learning environment.',
      category: 'School',
      image: '/images/projects/school/aluminaschool/1.webp',
      year: 2019,
      budget: 'IDR 3,293,779,088',
      client: 'Alumina School Bintan',
      scopeOfService: ['Design-Build', 'MEP Installation'],
      gallery: [
        '/images/projects/school/aluminaschool/1.webp',
        '/images/projects/school/aluminaschool/2.webp',
        '/images/projects/school/aluminaschool/3.webp',
        '/images/projects/school/aluminaschool/4.webp',
        '/images/projects/school/aluminaschool/5.webp'
      ]
    }
  ] as Project[],
}
