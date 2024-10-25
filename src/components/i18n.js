import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // inisialisasi react-i18next
  .init({
    resources: {
      // daftar bahasa dan terjemahan Anda di sini
      en: {
        translation: {
          // daftar teks dalam bahasa Inggris
          //Navbar
          "Navbar Home": "Home",
          "Navbar About Us": "Our Teams",
          "Navbar Services": "Services",
          "Navbar Case Studies": "Case Studies",
          "Navbar Contact Us": "Contact Us",
          //Footer
          "Footer Address": "Gendong Raya Street Number 17, Sendang Mulyo Village, Tembalang Subdistrict, Semarang City, Central Java Province.",
          "Footer Our Page Title": "Our Page",
          "Footer Services": "Our Services",
          "Footer Services Litigation": "Litigation",
          "Footer Services Non Litigation": "Non Litigation",
          "Footer Services Retainer": "Retainer",
          //Page Home
          "Page Home Aboutus 1": "The idea of progressive law emerged due to concerns about the legal system in Indonesia. Our esteemed professor, Prof. Satjipto Rahardjo, explained that the concept of progressive law is a correction to the shortcomings of the modern legal system, which is laden with bureaucracy and procedures, thus having the potential to marginalize truth and justice.",
          "Page Home Aboutus 2": "One important postulate of progressive law is that it is law for humans. The concept of progressive law can be likened to a signpost, constantly reminding us that the law must continuously break down, replace, and liberate stagnant laws that are unable to serve a changing environment. This is why the law always evolves, as human life is inherently dynamic and changes over time. Therefore, to realize the vision of our esteemed professor, Lawfirm Abdurrahman & Co. is here to be a pioneer and a model center in the practice of law in Indonesia.",
          "Page Home Clients Corporate": "Corporate Clients",
          "Page Home Clients": "Total Clients",
          "Page Home Services": "Services",
          "Page Home Visi Misi Title": "Vision and Mission",
          "Page Home Visi Misi": "Abdurrahman & Co Lawfirm was founded in Semarang, with the vision of humanizing humans by safeguarding justice for those who are fighters for justice. To realize this vision we have a mission that every opportunity we receive from clients, we will work professionally, progressively and provide high quality service so that we can maintain trust and satisfaction with our clients. And the most important thing is to become a pilot center for legal practice in Indonesia",
          "Page Home Tim Title": "Our Professional",
          "Page Home Button Tim Selengkapnya": "Meet Our Teams",
          "Page Home Article Title": "Read News",
          "Page Home Visit Us": "Visit Us",
          "Page Home Contact Us": "Contact Us On",
          //Page About Us
          "Page Aboutus Solution Title": "Our Solutions",
          "Page Aboutus Litigation Title": "LITIGATION",
          "Page Aboutus Litigation": "Litigation itself is a term in law concerning the resolution of a dispute through the court system. This process involves the disclosure of information and evidence related to the dispute being brought before the court.",
          "Page Aboutus Non Litigation Title": "NON LITIGATION",
          "Page Aboutus Non Litigation": "Alternative Dispute Resolution (ADR), also known as the resolution of disputes outside the court, is a cooperative process that prioritizes agreements or solutions to disputes in a win-win solution.",
          "Page Aboutus Retainer Title": "RETAINER",
          "Page Aboutus Retainer": "One of the best service products for your company is the futures service we provide with competitive quality and pricing standards, which will undoubtedly make you feel more comfortable and secure in running your business.",
          "Page Aboutus Solutions Button": "Our Solutions",
          "Page Aboutus Alif 1": "A seasoned and skilled lawyer, legal auditor, curator, and manager experienced in handling corporate issues, specializing in corporate law, mining and mineral law, as well as debt payment postponement (PKPU) and bankruptcy. Active in various organizations and involved in various activities and training programs at campuses.",
          "Page Aboutus Alif 2": "Education :",
          "Page Aboutus Alif 3": "• Bachelor of Law - Diponegoro University",
          "Page Aboutus Alif 4": "• Master of Notary - Diponegoro University",
          "Page Aboutus Alif 5": "• Short Course in Tax Brevet - Gadjah Mada University",
          "Page Aboutus Alif 6": "• Certificate in Legal Auditing - Jimly School of Law and Government",
          "Page Aboutus Alif 7": "• Curator and Manager Education - Indonesian Curator and Manager Association (AKPI)",
          "Page Aboutus Cerry 1": "Experienced and specializing in criminal law, civil law, and land law.",
          "Page Aboutus Erdi 1": "Experienced and specializing in industrial relations dispute law, criminal law, and tax law.",
          "Page Aboutus Agung 1": "Experienced and specializing in intellectual property law (HAKI), religious court litigation, and inheritance law.",
          "Page Aboutus Trinov 1": "Experienced and specializing in land law, contract law, and tax law.",
          //Page Services
          "Page Services Focus": "FOCUS",
          "Page Services Subtitle": "We specialize in several areas of law",
          "Page Services Corporation Title": "Corporation",
          "Page Services Corporation": "With a deep understanding of corporate law and business regulations, we provide legal solutions that assist your company in achieving success, from licensing to litigation.",
          "Page Services Mining Title": "Mining",
          "Page Services Mining": "With expertise in environmental regulations and permits, we help mining companies overcome their challenges, ensuring compliance and maximizing growth opportunities.",
          "Page Services Construction Title": "Real Estate",
          "Page Services Construction": "With our experience and expertise in the field of real estate, including industrial areas, plantations, land acquisition, land disputes, and permitting, we certainly assist your business in running smoothly.",
          "Page Services Litigation Title 1": "LITIGATION ",
          "Page Services Litigation Title 2": "ASSISTANCE",
          "Page Services Litigation Text": "Litigation itself is a term in law regarding the resolution of a dispute through the court system. This process involves the disclosure of relevant information and evidence related to the dispute being litigated.",
          "Page Services Litigation Pidana": "Criminal Law",
          "Page Services Litigation Perdata": "Civil Law",
          "Page Services Litigation Tata Usaha Negara": "Administrative Law",
          "Page Services Litigation Niaga": "Commercial Law",
          "Page Services Litigation Pajak": "Tax Law",
          "Page Services Litigation Agama": "Religious Law",
          "Page Services Litigation PKPU dan Kepailitan": "Bankruptcy and Insolvency Law",
          "Page Services Litigation PHI": "Intellectual Property Law",
          "Page Services Litigation Militer": "Amilitary Court",
          "Page Services Litigation MK": "Constitutional Court",
          "Page Services Litigation Sengketa Pilkada/Pemilu": "Election Disputes",
          "Page Services Non Litigation Title 1": "NON LITIGATION ",
          "Page Services Non Litigation Title 2": "ASSISTANCE",
          "Page Services Non Litigation Text": "Alternative Dispute Resolution, commonly known as ADR, is a cooperative method of resolving disputes outside of the court system that prioritizes mutual agreement or win-win solutions.",
          "Page Services Non Litigation Mediasi": "Mediation",
          "Page Services Non Litigation Konsultasi": "Consultation",
          "Page Services Non Litigation Negosiasi": "Negotiation",
          "Page Services Non Litigation Text Konsoliasi dan Penilaian Ahli": "Consolidation and Expert Assessment",
          "Page Services Non Litigation Text Arbitrase": "Arbitration",
          "Page Services Non Litigation Text Pengurusan Perizinan": "Licensing Management",
          "Page Services Retainer Title 1": "RETAINER ",
          "Page Services Retainer Title 2": "ASSISTANCE",
          "Page Services Retainer Text": "One of the best service products for your company is the futures service we provide with competitive quality and pricing standards, which will undoubtedly make you feel more comfortable and secure in running your business.",
          "Page Services Retainer Legal Drafting": "Legal Drafting",
          "Page Services Retainer Legal Opinion": "Legal Opinion",
          "Page Services Retainer Legal Audit": "Legal Audit",
          "Page Services Retainer Review Contract": "Review Contract ",
          "Page Services Retainer Merger": "Merger",
          "Page Services Retainer Akuisisi": "Acquisition",
          "Page Services Retainer Spin Off & Split Off": "Spin Off & Split Off",
          "Page Services Retainer Protect Perusahaan": "Protect The Company",
          //Page Portofolio
          "Page Portofolio Title 1": "CASE ",
          "Page Portofolio Title 2": "STUDIES",
          "Page Portofolio Text": "Our case studies encompass various legal aspects that we specialize in, and we have extensive experience in handling cases within these areas to provide the best legal solutions for our clients.",
          //Page Blog
          "Page Blog Title 1": "Our ",
          "Page Blog Title 2": "Article",
          "Page Blog Text": "Read Our Latest Articles to Stay Informed About Current Legal Issues and Avoid Missing Out on Legal Matters Today",
          "Page Blog Search": "Search Article",
          "Page Blog Category All":"All",
          "Page Blog Category Hukum":"Law",
          "Page Blog Category Perusahaan":"Corporation",
          "Page Blog Category Pertambangan":"Mining",
          "Page Blog Category Konstruksi":"Construction",
          //Page Contact Us
          "Page Contact Us Title": "Partner Your Corporate",
          "Page Contact Us Text": "Thank you for your interest in us. We are ready to assist you with all your legal needs. If you have any questions or require consultation, please do not hesitate to contact us through one of the following options:",
        },
      },
      id: {
        translation: {
          // daftar teks dalam bahasa Indonesia
          //Navbar
          "Navbar Home": "Beranda",
          "Navbar About Us": "Tim Kami",
          "Navbar Services": "Layanan",
          "Navbar Case Studies": "Studi Kasus",
          "Navbar Contact Us": "Hubungi Kami",
          //Footer
          "Footer Address": "JI. Gendong Raya No.17, Kel. Sendang Mulyo, Kec.Tembalang, Kota Semarang, Provinsi Jawa Tengah",
          "Footer Our Page Title": "Laman Kami",
          "Footer Services": "Layanan Kami",
          "Footer Services Litigation": "Litigasi",
          "Footer Services Non Litigation": "Non Litigasi",
          "Footer Services Retainer": "Retainer",
          //Page Home
          "Page Home Aboutus 1": "Guru besar kami Prof. Satjipto Rahardjo menerangkan bahwa gagasan hukum progresif merupakan koreksi terhadap kelemahan system hukum modern yang sarat dengan birokrasi dan prosedur, sehingga sangat berpotensi memarjinalkan kebernaran dan keadilan.",
          "Page Home Aboutus 2": "Salah satu postulat penting dari hukum progresif adalah hukum untuk manusia, gagasan hukum progresif bisa diibaratkan sebagai papan penunjuk, yang selalu memperingatkan, hukum itu harus terus menerus merobohkan, mengganti, membebaskan hukum yang mandeg, karena tidak mampu melayani lingkungan, yang berubah. Itulah sebabnya hukum selalu mengalir, karena kehidupan manusia memang penuh dengan dinamika dan berubah dari waktu ke waktu. Oleh karena itu, demi mewujudkan gagasan dari pada guru besar kami Lawfirm Abdurrahman & Co hadir guna menjadi pionir dan pusat percontohan dalam praktek hukum di Indonesia.",
          "Page Home Clients Corporate": "Klien Perusahaan",
          "Page Home Clients": "Total Klien",
          "Page Home Services": "Layanan",
          "Page Home Visi Misi Title": "Visi Misi",
          "Page Home Visi Misi": "Lawfirm Abdurrahman & Co didirikan di Semarang, dengan visi memanusiakan manusia dengan jalan mengawal keadilan bagi mereka pejuang keadilan, untuk mewujudkan visi tersebut kami memiliki misi disetiap kesempatan yang kami terima dari klien, kami akan bekerja secara professional, progresif serta memberikan high quality service agar dapat menjaga kepercayaan dan kepuasan terhadap klien kami. Dan yang paling penting adalah menjadi pusat percontohan dalam praktek hukum di Indonesia",
          "Page Home Tim Title": "Tim Kami",
          "Page Home Button Tim Selengkapnya": "Selengkapnya",
          "Page Home Article Title": "Baca Artikel",
          "Page Home Visit Us": "Kunjungi Kami",
          "Page Home Contact Us": "Hubungi Kami",
          //Page About Us
          "Page Aboutus Solution Title": "Layanan Kami",
          "Page Aboutus Litigation Title": "LITIGASI",
          "Page Aboutus Litigation": "Litigasi sendiri merupakan suatu istilah dalam hukum mengenai penyelesaian suatu sengketa yang dihadapi melalui jalur pengadilan. Proses tersebut melibatkan pembeberan informasi dan alat bukti terkait atas sengketa yang dipersidangkan.",
          "Page Aboutus Non Litigation Title": "NON LITIGASI",
          "Page Aboutus Non Litigation": "Penyelesaian sengketa diluar pengadilan atau yang lebih dikenal dengan Alternative Dispute resolution adalah Penyelesaian Sengketa di luar Pengadilan, dilakukan secera koopratif yang mengkedepankan kesepakatan atau solusi terhadap sengketa yang bersifat win-win solution.",
          "Page Aboutus Retainer Title": "RETAINER",
          "Page Aboutus Retainer": "Salah satu produk layanan terbaik untuk perusahaan anda, service berjangka yang kami berikan dengan kualitas dan standar harga yang kompetitif.",
          "Page Aboutus Solutions Button": "Selengkapnya",
          "Page Aboutus Alif 1": "Seorang advokat, auditor hukum, kurator dan pengurus yang berpengalaman serta handal dalam menangani permasalahan corporate, memiliki spesialisasi khusus di bidang hukum perusahaan, hukum pertambangan dan minerba, serta penundaan kewajiban pembayaran utang (PKPU) dan kepailitan. Aktif di berbagai organisasi dan mengisi berbagai kegiatan dan pelatihan di kampus-kampus.",
          "Page Aboutus Alif 2": "Pendidikan : ",
          "Page Aboutus Alif 3": "• S1 Ilmu Hukum - Universitas Diponegoro ",
          "Page Aboutus Alif 4": "• S2 Magister Kenotariatan : Universitas Diponegoro ",
          "Page Aboutus Alif 5": "• Short Course Brevet Pajak : Universitas Gadjah Mada",
          "Page Aboutus Alif 6": "• Certificate Legal Auditor : Jimly School of Law and Goverment ",
          "Page Aboutus Alif 7": "• Pendidikan Kurator dan Pengurus : Asosiasi Kurator dan Pengurus Indonesia (AKPI)",
          "Page Aboutus Cerry 1": "Spesialisasi khusus dalam bidang hukum pidana, hukum perdata, dan hukum pertanahan.",
          "Page Aboutus Erdi 1": "Spesialisasi khusus dalam bidang hukum perselisihan hubungan indsutrial, hukum pidana dan hukum pajak.",
          "Page Aboutus Agung 1": "Spesialisasi khusus dalam bidang hukum hak kekayaan intelektual (HAKI), pengadilan agama, dan hukum waris.",
          "Page Aboutus Trinov 1": "Spesialisasi khusus dalam bidang hukum pertanahan, hukum kontrak, dan hukum pajak.",
          //Page Services
          "Page Services Focus": "FOKUS",
          "Page Services Subtitle": "Kami Memiliki Spealisasi Dalam Bebearapa Bidang Hukum",
          "Page Services Corporation Title": "Perusahaan",
          "Page Services Corporation": "Dengan pemahaman mendalam tentang hukum perusahaan dan regulasi bisnis, kami memberikan solusi hukum yang membantu perusahaan Anda meraih kesuksesan, dari perizinan hingga litigasi.",
          "Page Services Mining Title": "Pertambangan",
          "Page Services Mining": "Dengan pengetahuan tentang regulasi lingkungan dan perizinan, kami membantu perusahaan pertambangan mengatasi tantangan mereka, memastikan kepatuhan dan peluang pertumbuhan yang maksimal.",
          "Page Services Construction Title": "Pertanahan",
          "Page Services Construction": "Dengan pengalaman dan kemampuan kami di bidang pertanahan seperti kawasan indsutri, kawasan perkebunan, pembebasan lahan, sengketa pertanahan, dan pengurusan perizinan tentunya sangat membantu bisnis anda untuk berjalan dengan lancar.",
          "Page Services Litigation Title 1": "BANTUAN ",
          "Page Services Litigation Title 2": "LITIGASI",
          "Page Services Litigation Text": "Litigasi sendiri merupakan suatu istilah dalam hukum mengenai penyelesaian suatu sengketa yang dihadapi melalui jalur pengadilan. Proses tersebut melibatkan pembeberan informasi dan alat bukti terkait atas sengketa yang dipersidangkan.",
          "Page Services Litigation Pidana": "Pidana",
          "Page Services Litigation Perdata": "Perdata",
          "Page Services Litigation Tata Usaha Negara": "Pengadilan Tata Usaha Negara",
          "Page Services Litigation Niaga": "Pengadilan Niaga",
          "Page Services Litigation Pajak": "Pengadilan Pajak",
          "Page Services Litigation Agama": "Pengadilan Agama",
          "Page Services Litigation PKPU dan Kepailitan": "Penundaan Kewajiban Pembayaran Utang (PKPU) dan Kepailitan ",
          "Page Services Litigation PHI": "Pengadilan Hubungan Industrial",
          "Page Services Litigation Militer": "Pengadilan Militer",
          "Page Services Litigation MK": "Mahkamah Konstitusi",
          "Page Services Litigation Sengketa Pilkada/Pemilu": "Sengketa Pilkada/Pemilu",
          "Page Services Non Litigation Title 1": "BANTUAN ",
          "Page Services Non Litigation Title 2": "NON LITIGASI",
          "Page Services Non Litigation Text": "Penyelesaian sengketa diluar pengadilan atau yang lebih dikenal dengan Alternative Dispute resolution adalah Penyelesaian Sengketa di luar Pengadilan, dilakukan secera koopratif yang mengkedepankan kesepakatan atau solusi terhadap sengketa yang bersifat win-win solution.",
          "Page Services Non Litigation Mediasi": "Mediasi",
          "Page Services Non Litigation Konsultasi": "Konsultasi",
          "Page Services Non Litigation Negosiasi": "Negosiasi",
          "Page Services Non Litigation Text Konsoliasi dan Penilaian Ahli": "Konsoliasi dan Penilaian Ahli",
          "Page Services Non Litigation Text Arbitrase": "Arbitrase",
          "Page Services Non Litigation Text Pengurusan Perizinan": "Pengurusan Perizinan",
          "Page Services Retainer Title 1": "BANTUAN ",
          "Page Services Retainer Title 2": "RETAINER",
          "Page Services Retainer Text": "Salah satu produk layanan terbaik untuk perusahaan anda, service berjangka yang kami berikan dengan kualitas dan standar harga yang kompetitif, tentunya akan semakin membuat anda nyaman dan aman dalam menjalankan perusahaan anda.",
          "Page Services Retainer Legal Drafting": "Legal Drafting",
          "Page Services Retainer Legal Opinion": "Legal Opinion",
          "Page Services Retainer Legal Audit": "Legal Audit",
          "Page Services Retainer Review Contract": "Peninjauan Kontrak",
          "Page Services Retainer Merger": "Merger",
          "Page Services Retainer Akuisisi": "Akuisisi",
          "Page Services Retainer Spin Off & Split Off": "Spin Off & Split Off",
          "Page Services Retainer Protect Perusahaan": "Perlindungan Perusahaan",
          //Page Portofolio
          "Page Portofolio Title 1": "STUDI ",
          "Page Portofolio Title 2": "KASUS",
          "Page Portofolio Text": "Bidang Studi Kasus kami mencakup berbagai aspek hukum yang kami spesialisasikan, dan kami memiliki pengalaman luas dalam menangani kasus-kasus dalam bidang-bidang ini untuk memberikan solusi hukum terbaik bagi klien kami.",
          //Page Blog
          "Page Blog Title 1": "Artikel ",
          "Page Blog Title 2": "Kami",
          "Page Blog Text": "Baca Artikel Terbaru Kami Agar Anda Tidak Tertinggal Permasalahan Hukum Saat Ini",
          "Page Blog Search": "Cari Artikel",
          "Page Blog Category All":"Semua",
          "Page Blog Category Hukum":"Hukum",
          "Page Blog Category Perusahaan":"Perusahaan",
          "Page Blog Category Pertambangan":"Pertambangan",
          "Page Blog Category Konstruksi":"Konstruksi",
          //Page Contact Us
          "Page Contact Us Title": "Mitra Korporasi Anda",
          "Page Contact Us Text": "Terima kasih atas minat Anda terhadap kami. Kami siap membantu Anda dalam semua kebutuhan hukum Anda. Jika Anda memiliki pertanyaan atau memerlukan konsultasi, jangan ragu untuk menghubungi kami melalui salah satu opsi berikut :",
        },
      },
    },
    lng: 'id', // bahasa default
    fallbackLng: 'id', // bahasa cadangan jika bahasa yang diminta tidak tersedia
    interpolation: {
      escapeValue: false, // menghindari escape HTML
    },
  });

export default i18n;
