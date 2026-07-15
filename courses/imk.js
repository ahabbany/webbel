const COURSE_IMK = {
  id: 'imk',
  title: 'Interaksi Manusia dan Komputer',
  icon: '💻',
  short: 'IMK',
  color: 'primary',
  gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  cardGradient: 'linear-gradient(135deg, #1E40AF, #4F46E5)',
  subtitle: 'Persiapan UAS Interaksi Manusia dan Komputer',
  description: 'Belajar mengenai Human Computer Interaction, UI/UX, Ergonomi, Faktor Manusia, Ragam Dialog, Piranti Interaktif, dan materi IMK lainnya.',
  badgeCount: 6,
  materiData: [
    {
      id: 'imk', title: 'Interaksi Manusia dan Komputer',
      icon: '📘', color: 'primary', short: 'IMK',
      gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
      subtitle: 'Pengertian, Tujuan, dan Konsep Dasar',
      sections: [
        { type: 'pengertian', icon: '🎯', title: 'Apa itu IMK?',
          content: 'Interaksi Manusia dan Komputer (IMK) adalah ilmu yang mempelajari bagaimana manusia berkomunikasi dan berinteraksi dengan komputer agar komputer mudah digunakan, nyaman, aman, efektif, dan efisien. Tujuan utama IMK bukan membuat komputer semakin canggih, tetapi membuat pengguna lebih mudah mencapai tujuannya saat menggunakan sistem.' },
        { type: 'info', icon: '🎯', title: 'Inti Materi',
          content: 'IMK = Ilmu tentang cara manusia berinteraksi dengan komputer agar sistem mudah digunakan dan nyaman.' },
        { type: 'tujuan', icon: '📋', title: 'Tujuan IMK',
          checklist: ['Mempermudah pengguna menggunakan sistem.', 'Mengurangi kesalahan saat menggunakan aplikasi.', 'Meningkatkan kenyamanan pengguna.', 'Membuat pekerjaan lebih cepat dan efisien.', 'Memberikan pengalaman yang menyenangkan.'] },
        { type: 'pengertian', icon: '🔑', title: '3 Komponen Utama IMK',
          content: '1. Manusia (User) — memiliki kemampuan berpikir, mengingat, belajar, dan mengambil keputusan.\n2. Komputer — meliputi hardware, software, dan interface.\n3. Interaksi — komunikasi antara manusia dan komputer, misalnya saat pengguna menekan tombol lalu sistem memberikan respon.' },
        { type: 'info', icon: '📚', title: 'Bidang Ilmu Terkait',
          bullet: ['Ilmu Komputer → membuat sistem.', 'Psikologi → memahami perilaku pengguna.', 'Ergonomi → membuat penggunaan komputer nyaman.', 'Desain Grafis → membuat tampilan menarik.', 'Linguistik → komunikasi manusia dengan komputer.', 'Antropologi & Sosiologi → memahami kebiasaan pengguna.'] },
        { type: 'contoh', icon: '💡', title: 'Contoh Penerapan',
          items: ['ATM', 'Shopee', 'Instagram', 'Google Maps', 'Website kampus'] },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Pengertian IMK, tujuan IMK, dan bidang ilmu yang mendukung IMK.' }
      ],
      flashcards: [
        { q: 'Apa kepanjangan IMK?', a: 'Interaksi Manusia dan Komputer' },
        { q: 'Apa tujuan utama IMK?', a: 'Membuat pengguna lebih mudah mencapai tujuannya saat menggunakan sistem.' },
        { q: 'Sebutkan 3 komponen utama IMK!', a: 'Manusia (User), Komputer, dan Interaksi.' },
        { q: 'Sebutkan 2 bidang ilmu yang mendukung IMK!', a: 'Psikologi (perilaku pengguna) dan Ergonomi (kenyamanan).' },
        { q: 'Sebutkan 3 tujuan IMK!', a: 'Mempermudah pengguna, mengurangi kesalahan, meningkatkan kenyamanan.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan IMK?', options: ['Ilmu tentang jaringan komputer', 'Ilmu tentang interaksi manusia dan komputer', 'Ilmu tentang pemrograman', 'Ilmu tentang database'], answer: 1, explanation: 'IMK adalah Interaksi Manusia dan Komputer.' },
        { q: 'Berikut adalah tujuan IMK, KECUALI:', options: ['Mempermudah pengguna', 'Mengurangi kesalahan', 'Membuat komputer semakin canggih', 'Meningkatkan kenyamanan'], answer: 2, explanation: 'Tujuan IMK bukan membuat komputer semakin canggih.' },
        { q: 'Manakah yang BUKAN bidang ilmu pendukung IMK?', options: ['Psikologi', 'Ergonomi', 'Akuntansi', 'Desain Grafis'], answer: 2, explanation: 'Akuntansi tidak termasuk bidang ilmu yang mendukung IMK.' },
        { q: '3 komponen utama IMK adalah...', options: ['Manusia, Komputer, Jaringan', 'Manusia, Komputer, Interaksi', 'Hardware, Software, Brainware', 'Input, Proses, Output'], answer: 1, explanation: 'Manusia, Komputer, dan Interaksi.' },
        { q: 'Contoh penerapan IMK adalah...', options: ['CPU', 'RAM', 'ATM', 'Harddisk'], answer: 2, explanation: 'ATM melibatkan interaksi manusia dan komputer.' }
      ]
    },
    {
      id: 'uiux', title: 'UI / UX', icon: '🎨', color: 'secondary', short: 'UI/UX',
      gradient: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
      subtitle: 'User Interface & User Experience',
      sections: [
        { type: 'pengertian', icon: '🎨', title: 'Apa itu UI?',
          content: 'User Interface (UI) adalah tampilan yang dilihat pengguna ketika menggunakan aplikasi. UI mencakup tombol, ikon, warna, font, menu, dan tata letak.' },
        { type: 'pengertian', icon: '🤗', title: 'Apa itu UX?',
          content: 'User Experience (UX) adalah pengalaman yang dirasakan pengguna ketika menggunakan aplikasi. UX menilai apakah aplikasi mudah digunakan, nyaman, cepat, dan membuat pengguna ingin menggunakannya kembali.' },
        { type: 'info', icon: '🔄', title: 'Perbedaan UI dan UX',
          content: 'UI berfokus pada tampilan visual. UX berfokus pada pengalaman pengguna.' },
        { type: 'contoh', icon: '💡', title: 'Contoh Perbedaan',
          items: ['Aplikasi dengan desain menarik tapi membingungkan → UI bagus, UX buruk.', 'Aplikasi dengan tampilan sederhana tapi mudah digunakan → UI sederhana, UX bagus.'] },
        { type: 'tujuan', icon: '✅', title: 'Faktor UX yang Baik',
          checklist: ['Mudah dipelajari.', 'Cepat digunakan.', 'Nyaman.', 'Berguna.', 'Mudah diakses.', 'Dapat dipercaya.'] },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Perbedaan UI dan UX.' }
      ],
      flashcards: [
        { q: 'Kepanjangan UI?', a: 'User Interface' },
        { q: 'Kepanjangan UX?', a: 'User Experience' },
        { q: 'Fokus utama UI?', a: 'Tampilan visual (warna, font, tombol, ikon, tata letak).' },
        { q: 'Fokus utama UX?', a: 'Pengalaman pengguna (kemudahan, kenyamanan, kecepatan).' },
        { q: 'Sebutkan 3 faktor UX yang baik!', a: 'Mudah dipelajari, cepat digunakan, nyaman.' }
      ],
      quiz: [
        { q: 'UI adalah singkatan dari...', options: ['User Integration', 'User Interface', 'Universal Interface', 'Unified Interaction'], answer: 1, explanation: 'UI = User Interface.' },
        { q: 'UX adalah singkatan dari...', options: ['User Experience', 'User Extension', 'Universal Experience', 'Unified Exchange'], answer: 0, explanation: 'UX = User Experience.' },
        { q: 'Perbedaan utama UI dan UX adalah...', options: ['UI untuk web, UX untuk mobile', 'UI fokus tampilan, UX fokus pengalaman', 'UI > UX', 'Sama saja'], answer: 1, explanation: 'UI berfokus pada tampilan visual, UX berfokus pada pengalaman.' },
        { q: 'Yang termasuk faktor UX baik adalah...', options: ['Mahal', 'Rumit', 'Mudah dipelajari', 'Banyak fitur'], answer: 2, explanation: 'Mudah dipelajari adalah faktor UX yang baik.' },
        { q: 'Aplikasi menarik tapi sulit digunakan = ...', options: ['UI buruk, UX bagus', 'UI bagus, UX buruk', 'Keduanya bagus', 'Keduanya buruk'], answer: 1, explanation: 'Tampilan menarik = UI bagus. Sulit digunakan = UX buruk.' }
      ]
    },
    {
      id: 'ragam-dialog', title: 'Ragam Dialog', icon: '💬', color: 'accent', short: 'Dialog',
      gradient: 'linear-gradient(135deg, #F59E0B, #F97316)',
      subtitle: 'GUI, CLI, dan Prinsip Dialog',
      sections: [
        { type: 'pengertian', icon: '💬', title: 'Apa itu Ragam Dialog?',
          content: 'Ragam dialog adalah cara komunikasi antara pengguna dengan komputer.' },
        { type: 'pengertian', icon: '🖥️', title: 'GUI (Graphical User Interface)',
          content: 'Antarmuka yang menggunakan gambar dan elemen visual. Contoh: Windows, Android, Shopee, Instagram.' },
        { type: 'info', icon: '📝', title: 'Komponen GUI',
          content: 'Button, Menu, Icon, Textbox, Checkbox, Scrollbar.\nKelebihan: Mudah dipelajari, menarik, cocok untuk pemula.\nKekurangan: Membutuhkan grafis tinggi, lebih berat dari CLI.' },
        { type: 'pengertian', icon: '⌨️', title: 'CLI (Command Line Interface)',
          content: 'Antarmuka berbasis perintah teks. Contoh: CMD, Terminal Linux, PowerShell.\nKelebihan: Cepat, ringan, fleksibel.\nKekurangan: Harus hafal perintah, sulit bagi pemula.' },
        { type: 'contoh', icon: '💻', title: 'Contoh Perintah CLI',
          items: ['dir — melihat daftar file', 'cd — pindah direktori', 'mkdir — membuat folder', 'copy — menyalin file'] },
        { type: 'tujuan', icon: '📋', title: 'Prinsip Dialog yang Baik',
          checklist: ['Konsisten.', 'Memberikan feedback.', 'Ada bantuan (Help).', 'Bisa membatalkan (Undo).', 'Mudah memahami pesan error.', 'Mengurangi beban ingatan pengguna.'] },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Perbedaan GUI dan CLI.' }
      ],
      flashcards: [
        { q: 'Apa itu GUI?', a: 'Graphical User Interface — antarmuka berbasis gambar dan elemen visual.' },
        { q: 'Apa itu CLI?', a: 'Command Line Interface — antarmuka berbasis perintah teks.' },
        { q: '2 kelebihan GUI?', a: 'Mudah dipelajari dan menarik secara visual.' },
        { q: '2 kelebihan CLI?', a: 'Cepat dan ringan (tanpa grafis).' },
        { q: '3 prinsip dialog yang baik?', a: 'Konsisten, memberikan feedback, bisa membatalkan (Undo).' }
      ],
      quiz: [
        { q: 'GUI adalah singkatan dari...', options: ['Graphical User Interface', 'General User Interface', 'Graphical Universal Input', 'Global User Integration'], answer: 0, explanation: 'GUI = Graphical User Interface.' },
        { q: 'CLI adalah singkatan dari...', options: ['Command Line Interface', 'Computer Language Interface', 'Central Logic Input', 'Common Line Integration'], answer: 0, explanation: 'CLI = Command Line Interface.' },
        { q: 'Yang termasuk contoh GUI adalah...', options: ['CMD', 'Terminal', 'Windows', 'PowerShell'], answer: 2, explanation: 'Windows adalah contoh GUI.' },
        { q: 'Kelebihan CLI dibanding GUI adalah...', options: ['Mudah dipelajari', 'Menarik', 'Cepat dan ringan', 'Cocok pemula'], answer: 2, explanation: 'CLI cepat dan ringan tanpa grafis.' },
        { q: 'Berikut prinsip dialog baik, KECUALI:', options: ['Konsisten', 'Feedback', 'Menghafal perintah', 'Ada Help'], answer: 2, explanation: 'Dialog baik tidak membebani ingatan pengguna.' }
      ]
    },
    {
      id: 'faktor-manusia', title: 'Faktor Manusia', icon: '🧠', color: 'green', short: 'Manusia',
      gradient: 'linear-gradient(135deg, #22C55E, #16A34A)',
      subtitle: 'Kemampuan, Memori, dan Persepsi',
      sections: [
        { type: 'pengertian', icon: '🧠', title: 'Apa itu Faktor Manusia?',
          content: 'Faktor manusia adalah karakteristik pengguna yang harus dipahami ketika membuat sistem agar aplikasi sesuai dengan kemampuan manusia.' },
        { type: 'tujuan', icon: '💪', title: 'Kemampuan Manusia',
          bullet: ['Berpikir.', 'Mengingat.', 'Belajar.', 'Mengenali pola.', 'Beradaptasi.', 'Mengambil keputusan.'] },
        { type: 'pengertian', icon: '🗂️', title: 'Memori Manusia',
          content: '1. Sensory Memory — menyimpan informasi beberapa detik.\n2. Short Term Memory — menyimpan 20–30 detik. Manusia hanya mampu mengingat ±7 informasi.\n3. Long Term Memory — menyimpan informasi dalam waktu lama.' },
        { type: 'info', icon: '📝', title: 'Catatan Penting',
          content: 'Manusia hanya mampu mengingat 7±2 informasi dalam short term memory. Aplikasi harus dirancang agar tidak membebani ingatan pengguna.' },
        { type: 'pengertian', icon: '👁️', title: 'Persepsi',
          content: 'Persepsi adalah cara manusia menerima informasi melalui panca indera. Dalam IMK yang terpenting: Penglihatan, Pendengaran, dan Sentuhan.' },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Jenis memori manusia dan mengapa tampilan aplikasi harus sederhana.' }
      ],
      flashcards: [
        { q: 'Apa itu faktor manusia dalam IMK?', a: 'Karakteristik pengguna yang harus dipahami agar aplikasi sesuai kemampuan manusia.' },
        { q: '3 jenis memori manusia?', a: 'Sensory Memory, Short Term Memory, Long Term Memory.' },
        { q: 'Lama Short Term Memory?', a: 'Sekitar 20–30 detik.' },
        { q: 'Jumlah info dalam Short Term Memory?', a: '7±2 informasi.' },
        { q: 'Apa itu persepsi?', a: 'Cara manusia menerima informasi melalui panca indera.' }
      ],
      quiz: [
        { q: 'Berikut kemampuan manusia, KECUALI:', options: ['Berpikir', 'Mengingat', 'Menyimpan data seperti komputer', 'Belajar'], answer: 2, explanation: 'Manusia tidak menyimpan data seperti komputer.' },
        { q: 'Short Term Memory menyimpan info selama...', options: ['Beberapa detik', '20-30 detik', 'Selamanya', 'Beberapa jam'], answer: 1, explanation: 'Short Term Memory ±20-30 detik.' },
        { q: 'Manusia mengingat ±... info di STM.', options: ['3±1', '5±2', '7±2', '10±3'], answer: 2, explanation: '7±2 informasi.' },
        { q: 'Persepsi adalah...', options: ['Cara menyimpan data', 'Cara menerima info lewat panca indera', 'Cara berpikir', 'Cara mengambil keputusan'], answer: 1, explanation: 'Persepsi = menerima informasi melalui panca indera.' },
        { q: 'Indera terpenting dalam IMK?', options: ['Penciumam', 'Penglihatan, pendengaran, sentuhan', 'Penglihatan saja', 'Semua sama'], answer: 1, explanation: 'Penglihatan, pendengaran, dan sentuhan.' }
      ]
    },
    {
      id: 'piranti-interaktif', title: 'Piranti Interaktif', icon: '⌨️', color: 'pink', short: 'Piranti',
      gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
      subtitle: 'Perangkat Input dan Output',
      sections: [
        { type: 'pengertian', icon: '⌨️', title: 'Apa itu Piranti Interaktif?',
          content: 'Piranti interaktif adalah perangkat yang digunakan manusia untuk berkomunikasi dengan komputer.' },
        { type: 'pengertian', icon: '📥', title: 'Piranti Input',
          content: 'Digunakan untuk memasukkan data. Contoh: Keyboard, Mouse, Scanner, Joystick, Touchscreen, Microphone, Webcam, Trackball, Light Pen.' },
        { type: 'pengertian', icon: '📤', title: 'Piranti Output',
          content: 'Digunakan untuk menampilkan hasil. Contoh: Monitor, Printer, Speaker, Proyektor.' },
        { type: 'info', icon: '⌨️', title: 'Jenis Keyboard',
          content: 'QWERTY (paling umum), Dvorak, Alphabetik, Klockenberg.' },
        { type: 'contoh', icon: '🖱️', title: 'Fungsi Mouse',
          items: ['Memilih objek', 'Klik', 'Drag', 'Memindahkan kursor'] },
        { type: 'tujuan', icon: '✅', title: 'Hal yang Perlu Diperhatikan',
          checklist: ['Sesuai kebutuhan pengguna.', 'Mudah digunakan.', 'Nyaman.', 'Akurat.', 'Cepat.'] },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Contoh perangkat input dan output serta fungsi masing-masing.' }
      ],
      flashcards: [
        { q: 'Apa itu piranti interaktif?', a: 'Perangkat untuk berkomunikasi dengan komputer.' },
        { q: '3 contoh piranti input?', a: 'Keyboard, Mouse, Touchscreen.' },
        { q: '3 contoh piranti output?', a: 'Monitor, Printer, Speaker.' },
        { q: 'Jenis keyboard paling umum?', a: 'QWERTY.' },
        { q: 'Fungsi mouse?', a: 'Memilih objek, klik, drag, memindahkan kursor.' }
      ],
      quiz: [
        { q: 'Yang termasuk piranti input adalah...', options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'], answer: 2, explanation: 'Keyboard adalah piranti input.' },
        { q: 'Yang termasuk piranti output adalah...', options: ['Mouse', 'Scanner', 'Monitor', 'Keyboard'], answer: 2, explanation: 'Monitor adalah piranti output.' },
        { q: 'Jenis keyboard paling umum adalah...', options: ['Dvorak', 'QWERTY', 'Alphabetik', 'Klockenberg'], answer: 1, explanation: 'QWERTY paling umum.' },
        { q: 'Touchscreen termasuk jenis piranti...', options: ['Output', 'Input & Output', 'Input', 'Penyimpanan'], answer: 2, explanation: 'Touchscreen adalah piranti input.' },
        { q: 'Hal yang perlu diperhatikan saat memilih piranti, KECUALI:', options: ['Mudah digunakan', 'Nyaman', 'Mahal', 'Akurat'], answer: 2, explanation: 'Harga mahal bukan pertimbangan utama.' }
      ]
    },
    {
      id: 'ergonomi', title: 'Ergonomik', icon: '🪑', color: 'secondary', short: 'Ergonomik',
      gradient: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
      subtitle: 'Kenyamanan, Keamanan, dan Efisiensi Kerja',
      sections: [
        { type: 'pengertian', icon: '🪑', title: 'Apa itu Ergonomik?',
          content: 'Ergonomik adalah ilmu yang mempelajari kenyamanan, keamanan, dan efisiensi manusia saat bekerja menggunakan komputer.' },
        { type: 'tujuan', icon: '🎯', title: 'Tujuan Ergonomik',
          checklist: ['Meningkatkan kenyamanan kerja.', 'Mengurangi kelelahan.', 'Mencegah cedera.', 'Meningkatkan produktivitas.'] },
        { type: 'info', icon: '🌍', title: 'Aspek Ergonomik',
          content: 'Lingkungan kerja.\nPencahayaan.\nKualitas udara.\nGangguan suara.\nKebiasaan bekerja.' },
        { type: 'pengertian', icon: '📏', title: 'Antropometri',
          content: 'Ilmu yang mempelajari ukuran tubuh manusia untuk menentukan ukuran meja, kursi, monitor, dan perangkat kerja yang sesuai.' },
        { type: 'info', icon: '👁️', title: 'Beban Akibat Penggunaan Komputer — Beban Visual',
          content: 'Mata lelah, iritasi, pandangan kabur.' },
        { type: 'info', icon: '💪', title: 'Beban Akibat Penggunaan Komputer — Beban Otot',
          content: 'Nyeri bahu, tangan, leher.' },
        { type: 'info', icon: '🧍', title: 'Beban Akibat Penggunaan Komputer — Beban Postur',
          content: 'Sakit punggung dan pinggang akibat posisi duduk yang salah.' },
        { type: 'info', icon: '😰', title: 'Beban Akibat Penggunaan Komputer — Beban Emosi',
          content: 'Stres dan kelelahan mental.' },
        { type: 'tujuan', icon: '💡', title: 'Pencahayaan yang Baik',
          checklist: ['Hindari pantulan cahaya pada monitor.', 'Gunakan pencahayaan yang cukup.', 'Seimbangkan cahaya ruangan dan layar.'] },
        { type: 'tujuan', icon: '👍', title: 'Kebiasaan Kerja yang Baik',
          checklist: ['Duduk dengan posisi benar.', 'Lakukan peregangan secara berkala.', 'Beristirahat setelah bekerja cukup lama.', 'Hindari mengetik terus-menerus tanpa jeda.'] },
        { type: 'contoh', icon: '⚠️', title: 'Peralatan yang Dapat Menyebabkan Gangguan',
          items: ['Keyboard.', 'Monitor.', 'Meja.', 'Kursi.', 'Printer.'] },
        { type: 'info', icon: '⌨️', title: 'Jenis Keyboard — QWERTY',
          content: 'Keyboard yang paling umum digunakan.' },
        { type: 'info', icon: '⌨️', title: 'Jenis Keyboard — DVORAK',
          content: 'Dirancang agar mengetik lebih efisien dan mengurangi kelelahan jari.' },
        { type: 'info', icon: '⌨️', title: 'Jenis Keyboard — KLOCKENBERG',
          content: 'Keyboard terpisah menjadi dua bagian agar posisi tangan lebih nyaman.' },
        { type: 'tujuan', icon: '✅', title: 'Posisi Kerja yang Ergonomis',
          checklist: ['Monitor sejajar dengan mata.', 'Punggung bersandar pada kursi.', 'Siku membentuk sudut sekitar 90°.', 'Kaki menapak lantai.', 'Pergelangan tangan tetap rileks saat mengetik.'] },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Pengertian ergonomik, jenis beban akibat penggunaan komputer, dan posisi kerja yang ergonomis.' }
      ],
      flashcards: [
        { q: 'Apa itu ergonomik?', a: 'Ilmu yang mempelajari kenyamanan, keamanan, dan efisiensi manusia saat bekerja menggunakan komputer.' },
        { q: 'Sebutkan 4 tujuan ergonomik!', a: 'Meningkatkan kenyamanan, mengurangi kelelahan, mencegah cedera, meningkatkan produktivitas.' },
        { q: 'Apa itu antropometri?', a: 'Ilmu yang mempelajari ukuran tubuh manusia untuk menentukan ukuran perangkat kerja.' },
        { q: 'Sebutkan 4 beban akibat penggunaan komputer!', a: 'Beban Visual, Beban Otot, Beban Postur, Beban Emosi.' },
        { q: 'Sebutkan 3 jenis keyboard!', a: 'QWERTY, DVORAK, KLOCKENBERG.' },
        { q: 'Posisi siku yang ergonomis?', a: 'Membentuk sudut sekitar 90°.' }
      ],
      quiz: [
        { q: 'Pengertian ergonomik adalah...', options: ['Ilmu desain grafis', 'Ilmu kenyamanan, keamanan, dan efisiensi kerja dengan komputer', 'Ilmu jaringan', 'Ilmu pemrograman'], answer: 1, explanation: 'Ergonomik = ilmu kenyamanan, keamanan, dan efisiensi.' },
        { q: 'Berikut adalah tujuan ergonomik, KECUALI:', options: ['Meningkatkan kenyamanan', 'Mengurangi kelelahan', 'Mempercepat komputer', 'Mencegah cedera'], answer: 2, explanation: 'Mempercepat komputer bukan tujuan ergonomik.' },
        { q: 'Beban mata lelah dan iritasi disebut...', options: ['Beban Otot', 'Beban Postur', 'Beban Visual', 'Beban Emosi'], answer: 2, explanation: 'Beban Visual = mata lelah, iritasi, pandangan kabur.' },
        { q: 'Keyboard yang dirancang lebih efisien adalah...', options: ['QWERTY', 'DVORAK', 'KLOCKENBERG', 'Alphabetik'], answer: 1, explanation: 'DVORAK dirancang agar mengetik lebih efisien.' },
        { q: 'Posisi siku yang ergonomis membentuk sudut...', options: ['45°', '90°', '120°', '180°'], answer: 1, explanation: 'Siku membentuk sudut sekitar 90°.' },
        { q: 'Apa itu antropometri?', options: ['Ilmu tentang komputer', 'Ilmu tentang ukuran tubuh manusia', 'Ilmu tentang desain', 'Ilmu tentang jaringan'], answer: 1, explanation: 'Antropometri mempelajari ukuran tubuh manusia.' },
        { q: 'Yang termasuk beban postur adalah...', options: ['Mata lelah', 'Nyeri bahu', 'Sakit punggung', 'Stres'], answer: 2, explanation: 'Sakit punggung dan pinggang akibat posisi duduk salah = beban postur.' },
        { q: 'Berikut pencahayaan yang baik, KECUALI:', options: ['Hindari pantulan cahaya', 'Cahaya cukup', 'Cahaya ruangan dan layar seimbang', 'Monitor menyala sangat terang'], answer: 3, explanation: 'Monitor tidak boleh terlalu terang.' }
      ]
    },
    {
      id: 'perancangan-tampilan', title: 'Perancangan Tampilan', icon: '🎨', color: 'tosca', short: 'Tampilan',
      gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
      subtitle: 'Desain Antarmuka dan Prinsip Tampilan',
      sections: [
        { type: 'pengertian', icon: '🎯', title: 'Apa itu Perancangan Tampilan?',
          content: 'Perancangan tampilan adalah proses mendesain antarmuka (interface) agar aplikasi mudah dipelajari, nyaman digunakan, dan menarik bagi pengguna.' },
        { type: 'tujuan', icon: '📋', title: 'Tujuan Perancangan Antarmuka',
          checklist: ['Mempermudah pengguna mempelajari aplikasi.', 'Mempercepat penyelesaian tugas.', 'Mengurangi kesalahan pengguna.', 'Mudah diingat.', 'Memberikan kepuasan saat digunakan.'] },
        { type: 'info', icon: '💼', title: 'Jenis Program — Special Purpose Software',
          content: 'Aplikasi untuk pengguna tertentu.\nContoh: Sistem Perpustakaan, Sistem Akademik.' },
        { type: 'info', icon: '📱', title: 'Jenis Program — General Purpose Software',
          content: 'Aplikasi untuk banyak pengguna.\nContoh: Microsoft Word, Google Chrome.' },
        { type: 'pengertian', icon: '👥', title: 'Pendekatan Perancangan — User Centered Design (UCD)',
          content: 'Pengguna ikut berpartisipasi dalam proses desain sehingga antarmuka sesuai kebutuhan.' },
        { type: 'pengertian', icon: '✏️', title: 'Pendekatan Perancangan — User Design Approach',
          content: 'Pengguna merancang tampilan sendiri sesuai keinginannya.' },
        { type: 'info', icon: '🧩', title: 'Empat Komponen Antarmuka',
          content: '1. Model Pengguna — Cara pengguna memahami cara kerja sistem.\n2. Bahasa Perintah — Media untuk memberi perintah, misalnya tombol atau menu.\n3. Feedback — Respon sistem setelah menerima tindakan pengguna.\n4. Tampilan Informasi — Informasi yang menunjukkan kondisi atau status sistem.' },
        { type: 'tujuan', icon: '📝', title: 'Tahapan Perancangan',
          checklist: ['Pemilihan dialog.', 'Perancangan struktur dialog.', 'Perancangan format pesan.', 'Penanganan kesalahan.', 'Perancangan struktur data.'] },
        { type: 'tujuan', icon: '📄', title: 'Prinsip Tampilan Berbasis Teks',
          checklist: ['Urutan penyajian jelas.', 'Tata letak rapi.', 'Informasi dikelompokkan.', 'Relevan.', 'Konsisten.', 'Sederhana.'] },
        { type: 'tujuan', icon: '🎨', title: 'Prinsip Tampilan Berbasis Grafis',
          checklist: ['Objek mudah dikenali.', 'Fokus pengguna jelas.', 'Struktur tampilan teratur.', 'Ikon mudah dipahami.', 'Sesuai media yang digunakan.'] },
        { type: 'info', icon: '⚠️', title: 'Penanganan Kesalahan',
          content: 'Compile Time Error — Kesalahan saat program dibuat.\nRun Time Error — Kesalahan saat program dijalankan.\n\nPesan kesalahan yang baik harus jelas, sopan, dan membantu pengguna menyelesaikan masalah.' },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Tujuan perancangan antarmuka, perbedaan special purpose dan general purpose software, prinsip tampilan berbasis teks dan grafis.' }
      ],
      flashcards: [
        { q: 'Apa itu perancangan tampilan?', a: 'Proses mendesain antarmuka agar aplikasi mudah dipelajari, nyaman digunakan, dan menarik.' },
        { q: 'Sebutkan 3 tujuan perancangan antarmuka!', a: 'Mempermudah belajar, mempercepat tugas, mengurangi kesalahan.' },
        { q: 'Contoh Special Purpose Software?', a: 'Sistem Perpustakaan, Sistem Akademik.' },
        { q: 'Contoh General Purpose Software?', a: 'Microsoft Word, Google Chrome.' },
        { q: 'Apa itu UCD?', a: 'User Centered Design — pengguna ikut berpartisipasi dalam proses desain.' },
        { q: 'Sebutkan 4 komponen antarmuka!', a: 'Model Pengguna, Bahasa Perintah, Feedback, Tampilan Informasi.' },
        { q: 'Sebutkan 3 prinsip tampilan berbasis teks!', a: 'Urutan jelas, tata letak rapi, informasi dikelompokkan.' },
        { q: 'Apa perbedaan compile time error dan run time error?', a: 'Compile time error saat program dibuat, run time error saat program dijalankan.' }
      ],
      quiz: [
        { q: 'Apa itu perancangan tampilan?', options: ['Proses membuat kode program', 'Proses mendesain antarmuka aplikasi', 'Proses menguji aplikasi', 'Proses memasang aplikasi'], answer: 1, explanation: 'Perancangan tampilan = mendesain antarmuka.' },
        { q: 'Yang termasuk Special Purpose Software adalah...', options: ['Microsoft Word', 'Google Chrome', 'Sistem Perpustakaan', 'Adobe Photoshop'], answer: 2, explanation: 'Sistem Perpustakaan untuk pengguna tertentu.' },
        { q: 'Kepanjangan UCD adalah...', options: ['User Computer Design', 'User Centered Design', 'Universal Control Design', 'Unified Component Design'], answer: 1, explanation: 'UCD = User Centered Design.' },
        { q: 'Komponen antarmuka yang merupakan respon sistem disebut...', options: ['Model Pengguna', 'Bahasa Perintah', 'Feedback', 'Tampilan Informasi'], answer: 2, explanation: 'Feedback = respon sistem setelah tindakan pengguna.' },
        { q: 'Berikut prinsip tampilan teks, KECUALI:', options: ['Urutan jelas', 'Tata letak rapi', 'Animasi bergerak', 'Informasi dikelompokkan'], answer: 2, explanation: 'Animasi bukan prinsip tampilan teks.' },
        { q: 'Kesalahan saat program dijalankan disebut...', options: ['Compile Time Error', 'Run Time Error', 'Syntax Error', 'Logic Error'], answer: 1, explanation: 'Run Time Error terjadi saat program dijalankan.' }
      ]
    },
    {
      id: 'sistem-menu', title: 'Sistem Menu', icon: '📋', color: 'orange', short: 'Menu',
      gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
      subtitle: 'Jenis, Komponen, dan Struktur Menu',
      sections: [
        { type: 'pengertian', icon: '📋', title: 'Apa itu Sistem Menu?',
          content: 'Sistem menu adalah kumpulan pilihan yang membantu pengguna menjalankan fungsi dalam aplikasi.' },
        { type: 'info', icon: '📄', title: 'Menu Datar (Flat Menu)',
          content: 'Semua pilihan langsung ditampilkan pada layar.\n\nKelebihan: Mudah dibuat, mudah dipahami.\nKekurangan: Kurang efektif jika menu terlalu banyak.' },
        { type: 'info', icon: '📂', title: 'Menu Tarik (Pull Down Menu)',
          content: 'Menu utama memiliki submenu yang tersusun secara hierarki.\n\nKelebihan: Tampilan lebih rapi, cocok untuk aplikasi besar.\nKekurangan: Lebih kompleks dibanding menu datar.' },
        { type: 'tujuan', icon: '🧩', title: 'Komponen Menu Tarik',
          checklist: ['Menu utama.', 'Submenu.', 'Status menu.'] },
        { type: 'info', icon: '⌨️', title: 'Cara Pengoperasian — Keyboard',
          content: 'Menggunakan tombol panah, Enter, dan Esc.' },
        { type: 'info', icon: '🖱️', title: 'Cara Pengoperasian — Mouse',
          content: 'Mengklik menu dan submenu.' },
        { type: 'info', icon: '🔑', title: 'Cara Pengoperasian — Extended Key',
          content: 'Tombol khusus seperti: ↑, ↓, ←, →, Home, End, Page Up, Page Down.' },
        { type: 'pengertian', icon: '🌳', title: 'Struktur Hirarki',
          content: 'Menu tarik menggunakan struktur pohon sehingga submenu berada di bawah menu utama.' },
        { type: 'tips', icon: '⚠️', title: 'Yang Sering Keluar di Ujian',
          content: 'Perbedaan menu datar dan menu tarik, komponen menu tarik, dan cara pengoperasian menu.' }
      ],
      flashcards: [
        { q: 'Apa itu sistem menu?', a: 'Kumpulan pilihan yang membantu pengguna menjalankan fungsi dalam aplikasi.' },
        { q: 'Apa itu menu datar (flat menu)?', a: 'Semua pilihan langsung ditampilkan pada layar.' },
        { q: 'Kelebihan menu datar?', a: 'Mudah dibuat dan mudah dipahami.' },
        { q: 'Kekurangan menu datar?', a: 'Kurang efektif jika menu terlalu banyak.' },
        { q: 'Apa itu menu tarik (pull down menu)?', a: 'Menu utama memiliki submenu yang tersusun secara hierarki.' },
        { q: 'Kelebihan menu tarik?', a: 'Tampilan lebih rapi, cocok untuk aplikasi besar.' },
        { q: 'Sebutkan komponen menu tarik!', a: 'Menu utama, submenu, status menu.' },
        { q: 'Sebutkan 3 extended key!', a: 'Home, End, Page Up.' }
      ],
      quiz: [
        { q: 'Apa itu sistem menu?', options: ['Tampilan aplikasi', 'Kumpulan pilihan fungsi dalam aplikasi', 'Bahasa pemrograman', 'Perangkat keras'], answer: 1, explanation: 'Sistem menu = kumpulan pilihan fungsi.' },
        { q: 'Menu datar juga disebut...', options: ['Pull Down Menu', 'Flat Menu', 'Hierarki Menu', 'Pop Up Menu'], answer: 1, explanation: 'Menu datar = Flat Menu.' },
        { q: 'Kelebihan menu datar adalah...', options: ['Cocok aplikasi besar', 'Mudah dibuat', 'Tampilan rapi', 'Kompleks'], answer: 1, explanation: 'Menu datar mudah dibuat dan dipahami.' },
        { q: 'Menu tarik cocok untuk...', options: ['Aplikasi kecil', 'Aplikasi besar', 'Semua aplikasi', 'Game'], answer: 1, explanation: 'Menu tarik cocok untuk aplikasi besar.' },
        { q: 'Yang termasuk komponen menu tarik adalah...', options: ['Icon', 'Submenu', 'Toolbar', 'Scrollbar'], answer: 1, explanation: 'Submenu adalah komponen menu tarik.' },
        { q: 'Extended key berikut adalah, KECUALI:', options: ['Home', 'End', 'Enter', 'Page Up'], answer: 2, explanation: 'Enter bukan extended key, termasuk keyboard biasa.' },
        { q: 'Struktur menu tarik menggunakan...', options: ['Struktur datar', 'Struktur pohon', 'Struktur jaringan', 'Struktur linear'], answer: 1, explanation: 'Menu tarik menggunakan struktur pohon (hierarki).' }
      ]
    }
  ],
  ringkasan: [
    { icon: '📘', text: 'IMK → Ilmu tentang interaksi manusia & komputer agar sistem mudah digunakan.' },
    { icon: '🎨', text: 'UI → Tampilan visual aplikasi (warna, font, tombol).' },
    { icon: '🤗', text: 'UX → Pengalaman pengguna saat menggunakan aplikasi.' },
    { icon: '🖥️', text: 'GUI → Antarmuka grafis (ikon, menu, tombol).' },
    { icon: '⌨️', text: 'CLI → Antarmuka perintah teks.' },
    { icon: '🧠', text: 'Faktor manusia → Kemampuan berpikir, memori, persepsi.' },
    { icon: '⌨️', text: 'Piranti interaktif → Input (keyboard, mouse) & Output (monitor, printer).' },
    { icon: '🪑', text: 'Ergonomik → Ilmu kenyamanan, keamanan, & efisiensi kerja.' },
    { icon: '🎨', text: 'Perancangan Tampilan → Desain antarmuka & prinsip tampilan.' },
    { icon: '📋', text: 'Sistem Menu → Kumpulan pilihan fungsi dalam aplikasi.' }
  ],
  illustrations: {
    imk: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="60" width="60" height="70" rx="8" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <rect x="36" y="66" width="48" height="36" rx="4" fill="#C7D2FE"/>
      <rect x="36" y="108" width="20" height="4" rx="2" fill="#4F46E5" opacity="0.4"/>
      <rect x="36" y="116" width="32" height="4" rx="2" fill="#4F46E5" opacity="0.3"/>
      <rect x="36" y="124" width="24" height="4" rx="2" fill="#4F46E5" opacity="0.2"/>
      <circle cx="85" cy="55" r="25" fill="#E0E7FF" stroke="#4F46E5" stroke-width="2"/>
      <circle cx="85" cy="48" r="8" fill="#C7D2FE" stroke="#4F46E5" stroke-width="1.5"/>
      <path d="M72 65 Q85 78 98 65" fill="none" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
      <line x1="110" y1="80" x2="140" y2="70" stroke="#4F46E5" stroke-width="2" stroke-dasharray="4 3"/>
      <line x1="110" y1="80" x2="140" y2="95" stroke="#4F46E5" stroke-width="2" stroke-dasharray="4 3"/>
      <rect x="140" y="60" width="40" height="50" rx="6" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <rect x="148" y="68" width="24" height="20" rx="3" fill="#E0E7FF"/>
      <text x="156" y="100" font-size="8" fill="#4F46E5" font-weight="600">OK</text>
    </svg>`,
    uiux: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="100" height="130" rx="12" fill="#ECFEFF" stroke="#06B6D4" stroke-width="2"/>
      <rect x="56" y="28" width="88" height="20" rx="4" fill="#CFFAFE"/>
      <circle cx="68" cy="38" r="4" fill="#06B6D4" opacity="0.5"/>
      <rect x="78" y="34" width="40" height="6" rx="3" fill="#06B6D4" opacity="0.4"/>
      <rect x="56" y="56" width="88" height="14" rx="4" fill="#E0F2FE"/>
      <rect x="56" y="76" width="88" height="14" rx="4" fill="#E0F2FE" opacity="0.7"/>
      <rect x="56" y="96" width="88" height="14" rx="4" fill="#E0F2FE" opacity="0.4"/>
      <circle cx="100" cy="128" r="12" fill="#06B6D4"/>
      <path d="M94 128 L98 132 L106 124" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="90" y="15" width="20" height="6" rx="3" fill="#06B6D4" opacity="0.6"/>
      <circle cx="100" cy="18" r="2" fill="#06B6D4"/>
    </svg>`,
    'ragam-dialog': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="70" height="50" rx="10" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
      <text x="38" y="62" font-size="10" fill="#D97706" font-weight="600">CMD</text>
      <text x="33" y="50" font-size="7" fill="#D97706">C:\\&gt;</text>
      <rect x="110" y="30" width="70" height="50" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <rect x="118" y="38" width="54" height="8" rx="3" fill="#FDE68A"/>
      <rect x="118" y="50" width="40" height="6" rx="2" fill="#FDE68A" opacity="0.6"/>
      <rect x="118" y="60" width="30" height="6" rx="2" fill="#FDE68A" opacity="0.4"/>
      <path d="M55 90 L55 105" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3 2"/>
      <path d="M145 90 L145 105" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3 2"/>
      <rect x="30" y="105" width="50" height="30" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="45" cy="120" r="6" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5"/>
      <rect x="56" y="114" width="12" height="4" rx="2" fill="#F59E0B" opacity="0.5"/>
      <rect x="56" y="122" width="16" height="4" rx="2" fill="#F59E0B" opacity="0.3"/>
      <rect x="120" y="105" width="50" height="30" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <rect x="128" y="113" width="34" height="6" rx="3" fill="#FDE68A"/>
      <rect x="128" y="123" width="24" height="6" rx="3" fill="#FDE68A" opacity="0.5"/>
    </svg>`,
    'faktor-manusia': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="60" r="40" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>
      <path d="M73 50 Q85 40 100 45 Q115 40 127 50" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
      <path d="M73 50 Q85 58 100 53 Q115 58 127 50" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
      <circle cx="90" cy="52" r="4" fill="#22C55E"/>
      <circle cx="110" cy="52" r="4" fill="#22C55E"/>
      <circle cx="100" cy="62" r="3" fill="#22C55E"/>
      <circle cx="100" cy="72" r="6" fill="#BBF7D0" stroke="#22C55E" stroke-width="1.5"/>
      <path d="M60 110 L70 100 L90 108" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
      <path d="M140 110 L130 100 L110 108" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
      <rect x="80" y="105" width="40" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E" stroke-width="2"/>
      <rect x="87" y="112" width="26" height="6" rx="3" fill="#BBF7D0" opacity="0.6"/>
      <rect x="87" y="122" width="18" height="6" rx="3" fill="#BBF7D0" opacity="0.4"/>
      <text x="88" y="145" font-size="8" fill="#22C55E" font-weight="600">MEMORI</text>
    </svg>`,
    'piranti-interaktif': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="50" width="60" height="35" rx="6" fill="#FDF2F8" stroke="#EC4899" stroke-width="2"/>
      <rect x="30" y="56" width="50" height="8" rx="2" fill="#FCE7F3"/>
      <rect x="30" y="68" width="35" height="6" rx="2" fill="#FCE7F3" opacity="0.6"/>
      <rect x="60" y="78" width="18" height="4" rx="2" fill="#EC4899" opacity="0.3"/>
      <rect x="100" y="40" width="70" height="60" rx="8" fill="#FDF2F8" stroke="#EC4899" stroke-width="2"/>
      <rect x="106" y="46" width="58" height="40" rx="4" fill="#FCE7F3"/>
      <rect x="130" y="92" width="10" height="10" rx="2" fill="#EC4899" opacity="0.4"/>
      <circle cx="115" cy="66" r="4" fill="#FDF2F8" stroke="#EC4899" stroke-width="1.5"/>
      <rect x="125" y="62" width="12" height="4" rx="2" fill="#EC4899" opacity="0.3"/>
      <rect x="125" y="70" width="16" height="4" rx="2" fill="#EC4899" opacity="0.2"/>
      <rect x="125" y="78" width="10" height="4" rx="2" fill="#EC4899" opacity="0.15"/>
      <path d="M75 80 L95 65" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M75 80 L95 85" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="3 2"/>
      <rect x="40" y="100" width="120" height="6" rx="3" fill="#FCE7F3" stroke="#EC4899" stroke-width="1"/>
      <rect x="40" y="108" width="60" height="4" rx="2" fill="#FCE7F3" stroke="#EC4899" stroke-width="1" opacity="0.5"/>
    </svg>`,
    ergonomi: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="60" width="80" height="50" rx="8" fill="#ECFEFF" stroke="#06B6D4" stroke-width="2"/>
      <rect x="68" y="68" width="64" height="16" rx="4" fill="#CFFAFE"/>
      <circle cx="100" cy="50" r="16" fill="#CFFAFE" stroke="#06B6D4" stroke-width="2"/>
      <circle cx="100" cy="45" r="5" fill="#A5F3FC" stroke="#06B6D4" stroke-width="1.5"/>
      <path d="M92 56 Q100 63 108 56" fill="none" stroke="#06B6D4" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="100" y1="66" x2="100" y2="78" stroke="#06B6D4" stroke-width="2"/>
      <line x1="100" y1="78" x2="85" y2="95" stroke="#06B6D4" stroke-width="2"/>
      <line x1="100" y1="78" x2="115" y2="95" stroke="#06B6D4" stroke-width="2"/>
      <line x1="85" y1="95" x2="75" y2="115" stroke="#06B6D4" stroke-width="2"/>
      <line x1="115" y1="95" x2="125" y2="115" stroke="#06B6D4" stroke-width="2"/>
      <rect x="130" y="55" width="8" height="60" rx="2" fill="#06B6D4" opacity="0.3"/>
      <rect x="131" y="113" width="6" height="6" rx="1" fill="#06B6D4" opacity="0.2"/>
      <text x="82" y="135" font-size="9" fill="#06B6D4" font-weight="600">50-70cm</text>
      <line x1="70" y1="60" x2="70" y2="130" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="130" y1="60" x2="130" y2="130" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>`,
    'perancangan-tampilan': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="25" width="140" height="110" rx="10" fill="#F0FDFA" stroke="#14B8A6" stroke-width="2"/>
      <rect x="40" y="35" width="120" height="16" rx="4" fill="#CCFBF1"/>
      <circle cx="48" cy="43" r="3" fill="#14B8A6" opacity="0.5"/>
      <rect x="56" y="40" width="60" height="6" rx="3" fill="#14B8A6" opacity="0.3"/>
      <rect x="40" y="58" width="55" height="30" rx="4" fill="#CCFBF1" stroke="#14B8A6" stroke-width="1"/>
      <rect x="45" y="63" width="20" height="4" rx="2" fill="#14B8A6" opacity="0.4"/>
      <rect x="45" y="71" width="40" height="4" rx="2" fill="#14B8A6" opacity="0.3"/>
      <rect x="45" y="79" width="30" height="4" rx="2" fill="#14B8A6" opacity="0.2"/>
      <rect x="105" y="58" width="55" height="30" rx="4" fill="#CCFBF1" stroke="#14B8A6" stroke-width="1"/>
      <rect x="110" y="63" width="30" height="4" rx="2" fill="#14B8A6" opacity="0.4"/>
      <rect x="110" y="71" width="20" height="4" rx="2" fill="#14B8A6" opacity="0.3"/>
      <rect x="110" y="79" width="35" height="4" rx="2" fill="#14B8A6" opacity="0.2"/>
      <rect x="40" y="95" width="120" height="30" rx="4" fill="#CCFBF1" stroke="#14B8A6" stroke-width="1"/>
      <rect x="45" y="100" width="15" height="6" rx="2" fill="#14B8A6" opacity="0.4"/>
      <rect x="65" y="100" width="30" height="6" rx="2" fill="#14B8A6" opacity="0.3"/>
      <rect x="100" y="100" width="40" height="6" rx="2" fill="#14B8A6" opacity="0.3"/>
      <circle cx="48" cy="118" r="2" fill="#14B8A6" opacity="0.3"/>
      <circle cx="56" cy="118" r="2" fill="#14B8A6" opacity="0.3"/>
      <rect x="64" y="116" width="20" height="4" rx="2" fill="#14B8A6" opacity="0.2"/>
    </svg>`,
    'sistem-menu': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="15" width="80" height="28" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
      <text x="78" y="34" font-size="11" fill="#EA580C" font-weight="600">MENU</text>
      <line x1="100" y1="43" x2="100" y2="60" stroke="#F97316" stroke-width="2"/>
      <line x1="100" y1="60" x2="50" y2="75" stroke="#F97316" stroke-width="2"/>
      <line x1="100" y1="60" x2="100" y2="75" stroke="#F97316" stroke-width="2"/>
      <line x1="100" y1="60" x2="150" y2="75" stroke="#F97316" stroke-width="2"/>
      <rect x="15" y="75" width="70" height="26" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
      <text x="28" y="92" font-size="9" fill="#EA580C" font-weight="500">Submenu 1</text>
      <rect x="65" y="75" width="70" height="26" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
      <text x="80" y="92" font-size="9" fill="#EA580C" font-weight="500">Submenu 2</text>
      <rect x="115" y="75" width="70" height="26" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
      <text x="130" y="92" font-size="9" fill="#EA580C" font-weight="500">Submenu 3</text>
      <line x1="50" y1="101" x2="50" y2="115" stroke="#F97316" stroke-width="1.5"/>
      <line x1="100" y1="101" x2="100" y2="115" stroke="#F97316" stroke-width="1.5"/>
      <line x1="150" y1="101" x2="150" y2="115" stroke="#F97316" stroke-width="1.5"/>
      <rect x="20" y="115" width="60" height="24" rx="5" fill="#FED7AA" stroke="#F97316" stroke-width="1.5"/>
      <text x="28" y="131" font-size="8" fill="#EA580C">Item A</text>
      <rect x="70" y="115" width="60" height="24" rx="5" fill="#FED7AA" stroke="#F97316" stroke-width="1.5"/>
      <text x="78" y="131" font-size="8" fill="#EA580C">Item B</text>
      <rect x="120" y="115" width="60" height="24" rx="5" fill="#FED7AA" stroke="#F97316" stroke-width="1.5"/>
      <text x="128" y="131" font-size="8" fill="#EA580C">Item C</text>
    </svg>`
  }
};
