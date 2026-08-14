import type { Project } from '../types/project'
import type { Service } from '../types/service'

export const content = {
  seo: {
    index: {
      title: 'Perusahaan Konstruksi & Kontraktor Umum di Batam ',
      description: 'Nexa Mandiri Group adalah Perusahaan Konstruksi dan Kontraktor Umum terpercaya di Batam. Kami melayani jasa konstruksi fisik, perencanaan, hingga estimasi biaya.'
    },
    about: {
      title: 'Tentang Kami | Kontraktor Umum & Perusahaan Konstruksi Batam',
      description: 'Pelajari lebih lanjut mengenai PT Nexa Mandiri Group, Perusahaan Konstruksi dan Kontraktor Umum di Batam yang berdedikasi membangun proyek berkualitas.'
    },
    contact: {
      title: 'Hubungi Kami | Kontraktor Umum Batam ',
      description: 'Hubungi Nexa Mandiri Group, Perusahaan Konstruksi dan Kontraktor Umum terkemuka di Batam. Kami siap membantu merealisasikan kebutuhan proyek Anda.'
    }
  },
  company: {
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group adalah perusahaan yang berfokus pada inovasi dan solusi.',
  },
  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    projects: 'Proyek Kami',
    contact: 'Hubungi Kami',
    contactShort: 'Kontak',
    language: 'Bahasa'
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
    role: 'Peran kami beradaptasi pada setiap proyek baik sebagai konsultan, perwakilan pemilik, mitra konstruksi, atau mitra desain dan bangun sambil memberikan rute penyelesaian yang jelas, terukur, dan kolaboratif. Kami selalu berdiri di pihak pemilik.'
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
    label: 'Pengalaman Profesional Utama',
    headline: 'Pengalaman lintas sektor, diterapkan dengan pertimbangan proyek yang praktis.',
    statement: 'Pengalaman profesional di berbagai sektor mendukung pertimbangan teknis dan komersial yang praktis dalam setiap pengembangan proyek.',
    statement2: 'Proyek-proyek yang dipilih telah diselesaikan melalui pengalaman profesional pendiri dan tim proyek Nexa. Proyek-proyek yang diselesaikan sebelum pendirian PT Nexa Mandiri Group ditampilkan sebagai pengalaman profesional dan tidak mewakili kontrak Nexa langsung kecuali dinyatakan lain.',
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
    label: 'KLIEN ',
    headline: 'Pengalaman Bersama Organisasi Terkemuka',
    subline: 'Organisasi dan pengembangan yang terkait dengan pengalaman proyek profesional pendiri dan tim proyek kami. Pencamtuman  ini tidak selalu menunjukkan hubungan kontraktual langsung dengan PT Nexa Mandiri Group.',
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
    headline: 'Siap membangun proyek Anda selanjutnya?',
    statement: 'Hubungi kami untuk mendiskusikan kebutuhan proyek Anda dan temukan bagaimana kami dapat membantu.',
    button: 'Hubungi Kami'
  },
  footer: {
    description: 'PT Nexa Mandiri Group adalah perusahaan solusi pengembangan dan konstruksi proyek yang berbasis di Batam, Indonesia.',
    quickLinks: 'Tautan Cepat',
    contact: 'Hubungi Kami',
    address: 'Batam, Kepulauan Riau, Indonesia',
    email: 'nexamandirigroup@gmail.com',
    phone: '6285121538265',
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
      description: 'Nexa Mandiri Group adalah perusahaan konstruksi dan teknik terkemuka yang berdedikasi untuk mewujudkan visi menjadi kenyataan yang abadi. Kami mendampingi pemilik proyek sejak tahap perencanaan awal hingga penyelesaian proyek melalui perencanaan yang praktis, estimasi biaya, koordinasi pengadaan, dukungan supervisi, hingga pelaksanaan konstruksi.'
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
      eyebrow: 'CARA NEXA (THE NEXA WAY)',
      title: 'Proses yang jelas menghasilkan keputusan proyek yang lebih baik.',
      steps: [
        { title: 'DISCOVER', description: 'Tujuan, anggaran, jadwal' },
        { title: 'DEFINE', description: 'Persyaratan, ruang lingkup, risiko' },
        { title: 'PLAN', description: 'Gambar desain, rencana biaya, jadwal' },
        { title: 'VALIDATE', description: 'Keterbangunan, kelayakan, risiko' },
        { title: 'EXECUTE', description: 'Konstruksi, koordinasi kontraktor' },
        { title: 'CONTROL', description: 'Biaya, jadwal, kualitas, keselamatan' },
        { title: 'DELIVER', description: 'Pengujian, serah terima, penutupan' },
        { title: 'SUPPORT', description: 'Garansi, pemeliharaan, pengembangan masa depan' }
      ]
    },
    founder: {
      title: 'Pendiri & Kepemimpinan Proyek',
      headline: 'Penilaian langsung di seluruh perencanaan dan eksekusi.',
      name: 'Herman Cahyadi',
      paragraphs: [
        'Herman memiliki pengalaman langsung dalam perencanaan konstruksi, estimasi, pengadaan, koordinasi, dan eksekusi proyek di Kepulauan Riau.',
        'Pengalaman profesionalnya mencakup fasilitas pendidikan, kawasan industri, infrastruktur, perhotelan, ritel, pekerjaan struktural, serta paket pengerjaan aluminium dan kaca.',
        'Ia mendirikan Nexa untuk menjembatani keputusan perencanaan dan eksekusi di lapangan melalui kepemimpinan proyek yang praktis dan transparan.'
      ]
    },
    registration: {
      title: 'Informasi Registrasi Perusahaan',
      subtitle: 'Registrasi resmi dan detail korporat PT Nexa Mandiri Group.',
      labels: {
        name: 'Nama Terdaftar',
        legalForm: 'Bentuk Hukum',
        nib: 'NIB',
        investment: 'Status Penanaman Modal',
        domicile: 'Domisili Terdaftar',
        established: 'Didirikan'
      },
      values: {
        name: 'PT Nexa Mandiri Group',
        legalForm: 'Perseroan Terbatas (PT)',
        nib: '1905260072336',
        investment: 'PMDN',
        domicile: 'Kota Batam, Kepulauan Riau',
        established: '2026'
      },
      card: {
        title: 'Registrasi Perusahaan',
        description: 'PT Nexa Mandiri Group adalah perseroan terbatas (PT) di Indonesia yang didirikan pada tahun 2026 dan terdaftar untuk menyediakan layanan konstruksi, konsultasi proyek, pasokan material, dan dukungan proyek terkait.',
        footer: 'Berdasarkan catatan registrasi perusahaan yang tersedia.'
      }
    }
  },
  services: [
    {
      id: 'service-1',
      title: 'Layanan 1',
      description: 'Deskripsi layanan 1'
    }
  ] as Service[],
  projectsPage: {
    title: 'Proyek Kami',
    description: 'Jelajahi portofolio proyek rekayasa dan konstruksi kami yang mencakup berbagai industri. Kami bangga memberikan keunggulan, inovasi, dan keberlanjutan.',
    noImage: 'Tidak Ada Gambar',
    details: {
      client: 'Klien',
      year: 'Tahun',
      budget: 'Anggaran',
      scope: 'Cakupan Layanan'
    }
  },
  projects: [
    {
      id: 'mustafa',
      slug: 'mustafa',
      title: 'Mustafa Retail Fit-Out – Lagoy Bay Mall',
      description: 'Proyek konstruksi komersial yang memastikan standar kualitas tinggi dan eksekusi modern.',
      category: 'Komersial',
      image: '/images/projects/commercial/1.webp',
      year: 2025,
      budget: 'IDR 8,189,062,000',
      client: 'Mustafa Retail Fit Out -Lagoi Bay Mall',
      scopeOfService: ['Kontraktor Umum', 'Manajemen Proyek', 'Teknik Struktural'],
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
      description: 'Pengembangan perhotelan mewah yang dirancang untuk memberikan pengalaman tamu yang luar biasa.',
      category: 'Perhotelan',
      image: '/images/projects/hospitality/1.webp',
      year: 2026,
      budget: 'IDR 10,820,421,798',
      client: 'Club Med Alumunium Door & Window Works',
      scopeOfService: ['Rancang-Bangun', 'Interior Fit-out', 'Lanskap'],
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
      description: 'Konstruksi hotel premium yang memberikan daya tarik estetika dan daya tahan struktural.',
      category: 'Perhotelan',
      image: '/images/projects/hospitality/hotel indigo/1.webp',
      year: 2023,
      budget: 'IDR 14,893,646,297',
      client: 'Hotel Indigo,Holiday Inn & Meatshop Bintan',
      scopeOfService: ['Kontraktor Umum', 'Instalasi MEP', 'Jaminan Kualitas'],
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
      description: 'Infrastruktur industri tangguh yang dibangun untuk menangani tuntutan operasional tugas berat.',
      category: 'Industri',
      image: '/images/projects/industrial/1.webp',
      year: 2019,
      budget: 'IDR 181,500,000',
      client: 'Weighbridge Foundation',
      scopeOfService: ['Teknik Sipil', 'Fabrikasi Struktural', 'Instalasi Peralatan'],
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
      description: 'Pengembangan infrastruktur utama yang meningkatkan kapasitas logistik dan transportasi regional.',
      category: 'Infrastruktur',
      image: '/images/projects/infrastructure/1.webp',
      year: 2021,
      budget: 'IDR 6,080,457,005',
      client: 'Pintu Masuk Terminal Batu Ampar',
      scopeOfService: ['Pengembangan Infrastruktur', 'Pemancangan & Fondasi', 'Pekerjaan Beton'],
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
      description: 'Fasilitas pendidikan modern yang dibangun untuk menyediakan lingkungan belajar yang aman dan inspiratif.',
      category: 'Pendidikan',
      image: '/images/projects/school/aluminaschool/1.webp',
      year: 2019,
      budget: 'IDR 3,293,779,088',
      client: 'Alumina School Bintan',
      scopeOfService: ['Rancang-Bangun', 'Instalasi MEP'],
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
