import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi.',
  },
  services: [
    {
      id: 'service-1',
      title: 'Layanan 1',
      description: 'Deskripsi layanan 1'
    }
  ] as Service[],
  projects: [
    {
      id: 'project-1',
      slug: 'proyek-pertama',
      title: 'Proyek Pertama',
      description: 'Deskripsi proyek pertama',
      year: 2024
    }
  ] as Project[],
}
