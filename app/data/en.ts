import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group is a company focused on innovation and solutions.',
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
    headline: 'Ready to build the future together?',
    statement: 'Contact us to discuss your project requirements and find out how we can help.',
    button: 'Get in Touch'
  },
  footer: {
    description: 'PT Nexa Mandiri Group is a project development and construction solutions company based in Batam, Indonesia.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    address: 'Batam, Riau Islands, Indonesia',
    email: 'info@nexamandiri.com',
    phone: '+62 811 777 888',
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
      description: 'Nexa Mandiri Group is a premier construction and engineering firm dedicated to transforming visions into enduring realities. With decades of combined experience, our team of experts specializes in delivering large-scale commercial, industrial, and infrastructure projects across the region. We are driven by a commitment to safety, innovation, and unparalleled quality.'
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
          title: 'General Contracting',
          description: 'Comprehensive management of day-to-day oversight of construction sites, management of vendors and trades, and communication of information.'
        },
        {
          title: 'Design-Build',
          description: 'A seamless, unified workflow from initial design concept through construction completion, ensuring faster delivery and cost efficiency.'
        },
        {
          title: 'Project Management',
          description: 'Strategic planning, risk management, and rigorous quality control to ensure projects are delivered on time and within budget.'
        },
        {
          title: 'Infrastructure Development',
          description: 'Large-scale civil engineering projects including roads, bridges, and public utilities that form the backbone of modern society.'
        }
      ]
    },
    nexaWay: {
      title: 'The Nexa Way',
      description: 'It is not just what we build, but how we build it. The Nexa Way is our operational philosophy centered around four core pillars:',
      pillars: [
        'Uncompromising Safety Standards',
        'Transparent Communication',
        'Sustainable Construction Practices',
        'Relentless Pursuit of Quality'
      ]
    }
  },
  services: [
    {
      id: 'service-1',
      title: 'Service 1',
      description: 'Service 1 description'
    }
  ] as Service[],
  projects: [
    {
      id: 'project-1',
      slug: 'first-project',
      title: 'First Project',
      description: 'First project description',
      year: 2024
    }
  ] as Project[],
}
