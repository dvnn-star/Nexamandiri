import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi.',
  },
  hero: {
    headline: 'Partner Proyek Terpercaya, dari Perencanaan hingga Penyelesaian.',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi. Nexa Mandiri Group mendukung pemilik proyek melalui perencanaan praktis, estimasi biaya  dan pelaksanaan konstruksi.',
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
  why: {
    label: 'MENGAPA NEXA ADA',
    headline: 'Dibangun untuk menutup kesenjangan antara keputusan dan eksekusi.',
    introduction: 'Nexa didirikan pada tahun 2026 sebagai respons terhadap pola berulang yang diamati di berbagai proyek konstruksi:',
    problems: [
      'Ruang lingkup yang sulit dievaluasi',
      'Penawaran harga yang sulit dibandingkan dengan jelas oleh pemilik',
      'Koordinasi yang lemah sebelum pekerjaan dimulai',
      'Variasi yang tidak terkendali dan pekerjaan berulang',
      'Komunikasi yang terputus saat masalah muncul'
    ],
    response: 'Jawaban kami adalah pengetahuan praktis, komunikasi biaya yang transparan, koordinasi yang bertanggung jawab, dan eksekusi yang dapat dipantau, didokumentasikan, dan dipertanggungjawabkan.'
  },
  industries: {
    label: 'PROJECT KAMI',
    headline: 'Pengalaman lintas sektor, diterapkan dengan pertimbangan proyek yang praktis.',
    statement: 'Pengalaman profesional di berbagai sektor mendukung pertimbangan teknis dan komersial yang praktis dalam setiap pengembangan proyek.',
    items: [
      { id: 'hospitality', name: 'Perhotelan & Resort' },
      { id: 'industrial', name: 'Industri & Manufaktur' },
      { id: 'commercial', name: 'Komersial & Ritel' },
      { id: 'educational', name: 'Bangunan Pendidikan' },
      { id: 'infrastructure', name: 'Infrastruktur & Utilitas' },
      { id: 'specialised', name: 'Paket Konstruksi Khusus' }
    ]
  },
  clients: {
    label: 'KLIEN KAMI',
    headline: 'Dipercaya oleh para pemimpin industri di berbagai sektor.',
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
    headline: 'Siap membangun masa depan bersama?',
    statement: 'Hubungi kami untuk mendiskusikan kebutuhan proyek Anda dan temukan bagaimana kami dapat membantu.',
    button: 'Hubungi Kami'
  },
  footer: {
    description: 'PT Nexa Mandiri Group adalah perusahaan solusi pengembangan dan konstruksi proyek yang berbasis di Batam, Indonesia.',
    quickLinks: 'Tautan Cepat',
    contact: 'Hubungi Kami',
    address: 'Batam, Kepulauan Riau, Indonesia',
    email: 'info@nexamandiri.com',
    phone: '+62 811 777 888',
    rights: 'Hak cipta dilindungi undang-undang.'
  },
  contactPage: {
    title: 'Hubungi Kami',
    subtitle: 'Mari mulai percakapan.',
    description: 'Apakah Anda memiliki proyek spesifik atau sekadar ingin mengetahui bagaimana kami dapat membantu, tim kami siap melayani Anda.',
    infoTitle: 'Informasi Kontak',
    formTitle: 'Kirim Pesan',
    name: 'Nama Lengkap',
    email: 'Alamat Email',
    phone: 'Nomor Telepon',
    country: 'Negara',
    subject: 'Subjek',
    message: 'Pesan',
    submit: 'Kirim Pesan'
  },
  aboutPage: {
    heroTitle: 'Tentang Kami',
    heroSubtitle: 'Keahlian praktis untuk setiap tahap, dari perencanaan hingga pelaksanaan.',
    whoWeAre: {
      title: 'Siapa Kami',
      description: 'Nexa Mandiri Group adalah perusahaan konstruksi dan teknik terkemuka yang berdedikasi untuk mewujudkan visi menjadi kenyataan yang abadi. Dengan pengalaman puluhan tahun, tim ahli kami berspesialisasi dalam menyelesaikan proyek komersial, industri, dan infrastruktur berskala besar di seluruh wilayah. Kami didorong oleh komitmen terhadap keselamatan, inovasi, dan kualitas yang tak tertandingi.'
    },
    whyExists: {
      title: 'Mengapa Nexa Ada',
      description: 'Kami percaya bahwa lingkungan binaan membentuk pengalaman manusia. Nexa hadir untuk membangun ruang yang memberdayakan masyarakat, mendorong pertumbuhan ekonomi, dan bertahan melintasi zaman. Tujuan kami melampaui sekadar meletakkan batu bata dan mengecor beton; kami hadir untuk memecahkan tantangan teknik yang kompleks dan menciptakan fondasi berkelanjutan untuk hari esok.'
    },
    coreServices: {
      title: 'Layanan Utama',
      description: 'Rangkaian layanan komprehensif kami mencakup setiap fase siklus hidup proyek, mulai dari konsep awal hingga serah terima akhir.',
      items: [
        {
          title: 'Kontraktor Umum',
          description: 'Manajemen komprehensif pengawasan harian lokasi konstruksi, manajemen vendor dan pekerja, serta komunikasi informasi.'
        },
        {
          title: 'Rancang-Bangun',
          description: 'Alur kerja yang mulus dan terpadu dari konsep desain awal hingga penyelesaian konstruksi, memastikan pengiriman yang lebih cepat dan efisiensi biaya.'
        },
        {
          title: 'Manajemen Proyek',
          description: 'Perencanaan strategis, manajemen risiko, dan kontrol kualitas yang ketat untuk memastikan proyek diselesaikan tepat waktu dan sesuai anggaran.'
        },
        {
          title: 'Pengembangan Infrastruktur',
          description: 'Proyek teknik sipil berskala besar termasuk jalan, jembatan, dan utilitas publik yang menjadi tulang punggung masyarakat modern.'
        }
      ]
    },
    nexaWay: {
      title: 'Cara Nexa (The Nexa Way)',
      description: 'Bukan hanya tentang apa yang kami bangun, tetapi bagaimana kami membangunnya. "The Nexa Way" adalah filosofi operasional kami yang berpusat pada empat pilar utama:',
      pillars: [
        'Standar Keselamatan Tanpa Kompromi',
        'Komunikasi yang Transparan',
        'Praktik Konstruksi Berkelanjutan',
        'Pengejaran Kualitas Tanpa Henti'
      ]
    }
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
