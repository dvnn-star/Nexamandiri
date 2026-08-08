import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group is a company focused on innovation and solutions.',
  },
  hero: {
    headline: '[Company/Project Headline - Nexa Mandiri]',
    description: '[Short supporting description about Nexa Mandiri services and expertise in engineering/construction.]',
    primaryCta: 'Contact Us',
    secondaryCta: 'View Projects'
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
