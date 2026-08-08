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
