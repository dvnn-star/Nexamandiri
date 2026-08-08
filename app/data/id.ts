import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi.',
  },
  hero: {
    headline: 'Partner Proyek Terpercaya, dari Perencanaan hingga Penyelesaian.',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi. Nexa Mandiri Group mendukung pemilik proyek melalui perencanaan praktis, estimasi biaya, koordinasi pengadaan, dukungan pengawasan, dan pelaksanaan konstruksi.',
    primaryCta: 'Hubungi Kami',
    secondaryCta: 'Lihat Proyek'
  },
  about: {
    heading: 'Siapa Kami',
    subheading: 'Satu mitra di seluruh tahap perencanaan dan pengiriman.',
    description: 'PT Nexa Mandiri Group adalah perusahaan solusi pengembangan dan konstruksi proyek yang berbasis di Batam, Indonesia.',
    details: 'Kami mendukung pemilik proyek dari perencanaan awal hingga penyelesaian dengan mengintegrasikan perencanaan praktis, estimasi biaya, koordinasi pengadaan, dukungan pengawasan, dan pelaksanaan konstruksi.',
    role: 'Peran kami beradaptasi pada setiap proyek—baik sebagai konsultan, perwakilan pemilik, mitra konstruksi, atau mitra desain-dan-bangun—sambil memberikan rute penyelesaian yang jelas, terukur, dan kolaboratif. Kami selalu berdiri di pihak pemilik.'
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
