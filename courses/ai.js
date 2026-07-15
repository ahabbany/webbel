const COURSE_AI = {
  id: 'ai',
  title: 'Artificial Intelligence',
  icon: '🤖',
  short: 'AI',
  color: 'purple',
  gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
  cardGradient: 'linear-gradient(135deg, #6D28D9, #7C3AED)',
  subtitle: 'Kecerdasan Buatan',
  description: 'Belajar mengenai Artificial Intelligence, Machine Learning, Search Algorithm, Knowledge Representation, Expert System, dan materi AI lainnya.',
  badgeCount: 7,
  materiData: [
    {
      id: 'logika-proposisional',
      title: 'Logika Proposisional dan Keterbatasannya',
      icon: '🧮',
      color: 'purple',
      short: 'Logika',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Propositional Logic dalam AI',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Sebelum mempelajari Machine Learning, Sistem Pakar, atau Artificial Intelligence (AI) yang lebih kompleks, kita perlu memahami bagaimana komputer melakukan proses penalaran (reasoning). Salah satu metode penalaran paling dasar dalam AI adalah Logika Proposisional (Propositional Logic).\n\nLogika proposisional merupakan sistem logika yang menggunakan pernyataan-pernyataan sederhana (proposisi) yang hanya memiliki dua kemungkinan nilai kebenaran, yaitu Benar (True) atau Salah (False).\n\nKonsep ini menjadi dasar bagi banyak sistem AI klasik, terutama sistem yang bekerja menggunakan aturan IF-THEN (Jika-Maka).\n\nMeskipun sederhana, logika proposisional memiliki beberapa keterbatasan sehingga pada perkembangan AI modern digunakan metode yang lebih canggih seperti First Order Logic (FOL).'
        },
        {
          type: 'pengertian',
          icon: '🧠',
          title: 'Apa itu Logika?',
          content: 'Logika adalah ilmu yang mempelajari cara berpikir secara benar dan sistematis sehingga dapat menghasilkan suatu kesimpulan yang logis.\n\nDalam kehidupan sehari-hari kita sering menggunakan logika, misalnya:\n\nJika hujan maka jalan menjadi basah.\n\nPernyataan tersebut dapat digunakan untuk mengambil keputusan.\n\nMisalnya:\n• Jika hujan → bawa payung.\n• Jika nilai ujian di atas 75 → dinyatakan lulus.\n• Jika lampu merah → kendaraan berhenti.\n\nKomputer juga bekerja menggunakan prinsip yang hampir sama.'
        },
        {
          type: 'pengertian',
          icon: '📋',
          title: 'Apa itu Proposisi?',
          content: 'Proposisi adalah kalimat deklaratif yang memiliki nilai kebenaran, yaitu hanya dapat bernilai Benar (True) atau Salah (False).'
        },
        {
          type: 'contoh',
          icon: '✅',
          title: 'Contoh Proposisi',
          items: [
            'Indonesia berada di Asia. ✅ (Benar)',
            '2 + 3 = 6. ❌ (Salah)',
            'Matahari terbit dari timur. ✅ (Benar)'
          ],
          content: 'Ketiga kalimat tersebut merupakan proposisi karena dapat dinilai benar atau salah.'
        },
        {
          type: 'contoh',
          icon: '❌',
          title: 'Yang Bukan Proposisi',
          content: 'Tidak semua kalimat merupakan proposisi.\n\nContohnya:',
          bullet: [
            'Pertanyaan — "Siapa nama kamu?" — Tidak memiliki nilai benar atau salah.',
            'Perintah — "Tutuplah pintunya!" — Merupakan kalimat perintah sehingga bukan proposisi.',
            'Seruan — "Wah, indah sekali!" — Ungkapan perasaan sehingga tidak memiliki nilai kebenaran.'
          ]
        },
        {
          type: 'info',
          icon: '🎯',
          title: 'Kesimpulan tentang Proposisi',
          content: 'Hanya kalimat yang dapat dinilai Benar atau Salah yang disebut proposisi.'
        },
        {
          type: 'info',
          icon: '🤖',
          title: 'Mengapa Logika Proposisional Penting dalam AI?',
          content: 'Komputer tidak memiliki akal seperti manusia.\n\nKomputer hanya dapat mengambil keputusan berdasarkan aturan yang telah diberikan.\n\nContohnya:\n\nJika nilai >= 75\nMaka Lulus\n\nAturan tersebut dapat diterapkan oleh komputer.\n\nContoh lainnya:\n\nJika hujan\nMaka bawa payung\n\nKomputer akan mengevaluasi apakah kondisi "hujan" benar atau salah.\n\nJika benar, maka sistem akan menjalankan tindakan "bawa payung".\n\nInilah dasar dari logika proposisional.'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen Logika Proposisional',
          content: 'Biasanya suatu proposisi diberi simbol berupa huruf kapital.\n\nMisalnya:\nP = Hari ini hujan.\nQ = Saya membawa payung.\nR = Jalan menjadi basah.\n\nDengan menggunakan simbol, komputer lebih mudah melakukan proses penalaran.'
        },
        {
          type: 'info',
          icon: '🔗',
          title: '1. Negasi (NOT)',
          content: 'Simbol: ¬P\nArtinya: "Tidak P"\n\nMisalnya:\nP = Hari ini hujan.\nMaka ¬P berarti: Hari ini tidak hujan.\n\nJika P benar maka ¬P salah.\nJika P salah maka ¬P benar.\n\nTabel Kebenaran:\nP | ¬P\nT | F\nF | T'
        },
        {
          type: 'info',
          icon: '🔗',
          title: '2. Konjungsi (AND)',
          content: 'Simbol: P ∧ Q\nArtinya: P dan Q\n\nContoh:\nP = Saya belajar.\nQ = Saya mengerjakan tugas.\n\nP ∧ Q berarti: "Saya belajar dan mengerjakan tugas."\n\nPernyataan hanya bernilai benar apabila kedua proposisi benar.\n\nTabel Kebenaran:\nP | Q | P ∧ Q\nT | T | T\nT | F | F\nF | T | F\nF | F | F'
        },
        {
          type: 'info',
          icon: '🔗',
          title: '3. Disjungsi (OR)',
          content: 'Simbol: P ∨ Q\nArtinya: P atau Q\n\nContoh:\nP = Saya makan nasi.\nQ = Saya makan mie.\n\nKalimat: "Saya makan nasi atau mie."\n\nBernilai salah hanya jika kedua-duanya salah.\n\nTabel Kebenaran:\nP | Q | P ∨ Q\nT | T | T\nT | F | T\nF | T | T\nF | F | F'
        },
        {
          type: 'info',
          icon: '🔗',
          title: '4. Implikasi (IF-THEN)',
          content: 'Simbol: P → Q\nArtinya: Jika P maka Q\n\nContoh:\nP = Saya belajar.\nQ = Saya lulus.\n\nKalimat: Jika saya belajar maka saya lulus.\n\nTabel Kebenaran:\nP | Q | P → Q\nT | T | T\nT | F | F\nF | T | T\nF | F | T\n\nMengapa ketika P salah hasilnya tetap benar?\nKarena implikasi hanya mengatakan: "Jika P terjadi, maka Q harus terjadi."\nJika P tidak terjadi, maka aturan tersebut tidak dilanggar.\n\nContohnya: Jika hujan maka jalan basah.\nHari ini ternyata tidak hujan.\nMau jalan basah ataupun tidak, aturan tersebut tetap dianggap benar karena syarat awalnya (hujan) tidak terpenuhi.'
        },
        {
          type: 'info',
          icon: '🔗',
          title: '5. Biimplikasi (IFF)',
          content: 'Simbol: P ↔ Q\nArtinya: P jika dan hanya jika Q\n\nKedua proposisi harus memiliki nilai yang sama.\n\nTabel Kebenaran:\nP | Q | P ↔ Q\nT | T | T\nT | F | F\nF | T | F\nF | F | T'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Contoh Penggunaan Logika Proposisional dalam AI',
          content: 'Misalnya dibuat sebuah sistem pakar sederhana.\n\nAturannya:\nJika demam DAN batuk\nMaka kemungkinan flu.\n\nMisalkan:\nP = Demam\nQ = Batuk\nR = Flu\n\nAturannya ditulis:\nP ∧ Q → R\n\nJika pasien mengalami demam dan batuk, maka sistem akan menyimpulkan kemungkinan flu.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Kelebihan Logika Proposisional',
          checklist: [
            'Mudah dipahami.',
            'Aturannya sederhana.',
            'Cocok untuk sistem dengan aturan sedikit.',
            'Menjadi dasar perkembangan AI klasik.',
            'Mudah diimplementasikan dalam program komputer.'
          ]
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 1: Tidak Mengenal Objek',
          content: 'Logika proposisional hanya mengetahui bahwa suatu proposisi bernilai benar atau salah.\n\nMisalnya:\nP = Andi adalah mahasiswa.\n\nKomputer hanya mengetahui simbol P.\nKomputer tidak memahami siapa Andi.\nKomputer tidak mengetahui apa itu mahasiswa.\nKomputer hanya mengetahui bahwa P bernilai benar atau salah.'
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 2: Tidak Mengenal Relasi Antar Objek',
          content: 'Misalnya terdapat kalimat:\nAndi menyukai Matematika.\nBudi menyukai Matematika.\nCitra menyukai Bahasa Inggris.\n\nDalam logika proposisional harus dibuat:\nP, Q, R\n— Satu proposisi untuk setiap kalimat.\n\nKomputer tidak mengetahui hubungan antara Andi dan Matematika.\nPadahal hubungan (relasi) tersebut sangat penting dalam AI.'
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 3: Tidak Dapat Menggunakan Variabel',
          content: 'Misalnya kita ingin menyatakan:\n"Setiap mahasiswa wajib mengerjakan tugas."\n\nLogika proposisional tidak dapat menulis:\n"Untuk setiap mahasiswa x"\n— Karena tidak mengenal variabel.\n\nAkibatnya setiap mahasiswa harus ditulis satu per satu:\n• Andi wajib mengerjakan tugas.\n• Budi wajib mengerjakan tugas.\n• Citra wajib mengerjakan tugas.\n\nSemakin banyak data, semakin tidak efisien.'
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 4: Tidak Mengenal Kuantor',
          content: 'Dalam bahasa sehari-hari sering digunakan kata:\n• Semua\n• Setiap\n• Ada\n• Sebagian\n\nContoh:\nSemua mahasiswa belajar.\nAda mahasiswa yang mendapat nilai A.\n\nLogika proposisional tidak memiliki simbol untuk menyatakan kata "semua" atau "ada".\nHal ini membuat representasi pengetahuan menjadi terbatas.'
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 5: Sulit untuk Pengetahuan Kompleks',
          content: 'Misalnya sebuah universitas memiliki:\n• 20 dosen\n• 500 mahasiswa\n• 100 mata kuliah\n\nJika setiap hubungan harus dibuat menjadi proposisi tersendiri, jumlah aturan akan sangat banyak dan sulit dikelola.'
        },
        {
          type: 'info',
          icon: '❌',
          title: 'Keterbatasan 6: Tidak Fleksibel',
          content: 'Setiap fakta baru harus dibuat menjadi proposisi baru.\nSemakin banyak data, jumlah proposisi akan terus bertambah sehingga sistem menjadi rumit.'
        },
        {
          type: 'contoh',
          icon: '🔍',
          title: 'Contoh Analisis Keterbatasan',
          content: 'Misalkan terdapat pernyataan:\n"Semua mahasiswa Informatika belajar AI."\n\nDalam logika proposisional hanya bisa ditulis:\nP = Semua mahasiswa Informatika belajar AI.\n\nKomputer tidak mengetahui:\n• siapa saja mahasiswa Informatika,\n• berapa jumlahnya,\n• apakah Andi termasuk mahasiswa Informatika,\n• apakah Budi belajar AI.\n\nSemua informasi tersebut "disembunyikan" di dalam satu proposisi P. Inilah mengapa logika proposisional tidak cukup kuat untuk merepresentasikan pengetahuan yang kompleks.\n\nSebaliknya, pada First Order Logic (FOL), pernyataan tersebut dapat ditulis menggunakan variabel dan kuantor sehingga komputer dapat melakukan penalaran yang lebih rinci.'
        },
        {
          type: 'info',
          icon: '🔄',
          title: 'Hubungan dengan First Order Logic (FOL)',
          content: 'Karena memiliki banyak keterbatasan, logika proposisional dikembangkan menjadi First Order Logic (FOL).\n\nFOL mampu:\n• mengenali objek,\n• menggunakan variabel,\n• menyatakan hubungan antar objek,\n• menggunakan kuantor seperti "semua" dan "ada".\n\nDengan demikian, FOL jauh lebih cocok digunakan untuk merepresentasikan pengetahuan dalam sistem AI yang kompleks.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Logika proposisional adalah sistem logika yang menggunakan proposisi bernilai Benar (True) atau Salah (False).',
            'Proposisi merupakan kalimat deklaratif yang memiliki nilai kebenaran.',
            'Operator utama: NOT (¬), AND (∧), OR (∨), Implikasi (→), dan Biimplikasi (↔).',
            'Logika proposisional digunakan dalam AI klasik untuk membuat aturan IF–THEN.',
            'Kelebihan: sederhana, mudah dipahami, mudah diimplementasikan.',
            'Keterbatasan: tidak mengenal objek, relasi, variabel, kuantor, tidak efektif untuk pengetahuan kompleks.',
            'Keterbatasan tersebut menjadi alasan munculnya First Order Logic (FOL).'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Kalau dosen bertanya "Mengapa Logika Proposisional memiliki keterbatasan?", ingat lima kata kunci ini:\n\nObjek – Relasi – Variabel – Kuantor – Kompleksitas\n\nJika kamu bisa menjelaskan kelima poin tersebut beserta contohnya, biasanya kamu sudah dapat menjawab soal tentang keterbatasan logika proposisional dengan baik.'
        }
      ],
      flashcards: [
        { q: 'Apa itu logika?', a: 'Ilmu yang mempelajari cara berpikir secara benar dan sistematis sehingga dapat menghasilkan kesimpulan yang logis.' },
        { q: 'Apa itu proposisi?', a: 'Kalimat deklaratif yang memiliki nilai kebenaran, yaitu hanya dapat bernilai Benar (True) atau Salah (False).' },
        { q: 'Sebutkan 3 contoh yang BUKAN proposisi!', a: 'Pertanyaan ("Siapa nama kamu?"), Perintah ("Tutuplah pintunya!"), Seruan ("Wah, indah sekali!").' },
        { q: 'Apa simbol Negasi (NOT) dan bagaimana cara kerjanya?', a: 'Simbol: ¬P. Jika P benar maka ¬P salah. Jika P salah maka ¬P benar.' },
        { q: 'Apa simbol Konjungsi (AND) dan kapan bernilai benar?', a: 'Simbol: P ∧ Q. Bernilai benar hanya apabila kedua proposisi (P dan Q) benar.' },
        { q: 'Apa simbol Disjungsi (OR) dan kapan bernilai salah?', a: 'Simbol: P ∨ Q. Bernilai salah hanya jika kedua proposisi (P dan Q) salah.' },
        { q: 'Apa simbol Implikasi (IF-THEN) dan mengapa jika P salah hasilnya tetap benar?', a: 'Simbol: P → Q. Karena implikasi hanya mengatakan "Jika P terjadi maka Q harus terjadi." Jika P tidak terjadi, aturan tidak dilanggar.' },
        { q: 'Apa simbol Biimplikasi (IFF) dan kapan bernilai benar?', a: 'Simbol: P ↔ Q. Bernilai benar jika kedua proposisi memiliki nilai yang sama (sama-sama benar atau sama-sama salah).' },
        { q: 'Sebutkan 5 kelebihan logika proposisional!', a: '1. Mudah dipahami. 2. Aturannya sederhana. 3. Cocok untuk sistem dengan aturan sedikit. 4. Menjadi dasar AI klasik. 5. Mudah diimplementasikan.' },
        { q: 'Sebutkan 5 kata kunci keterbatasan logika proposisional!', a: 'Objek, Relasi, Variabel, Kuantor, Kompleksitas.' },
        { q: 'Apa perbedaan utama logika proposisional dengan First Order Logic (FOL)?', a: 'FOL mampu mengenali objek, menggunakan variabel, menyatakan hubungan antar objek, dan menggunakan kuantor seperti "semua" dan "ada", sedangkan logika proposisional tidak bisa.' },
        { q: 'Mengapa logika proposisional penting dalam AI?', a: 'Karena komputer tidak memiliki akal seperti manusia. Komputer mengambil keputusan berdasarkan aturan IF-THEN, dan logika proposisional adalah dasar dari aturan tersebut.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan logika?', options: ['Ilmu tentang angka dan perhitungan', 'Ilmu yang mempelajari cara berpikir secara benar dan sistematis', 'Ilmu tentang bahasa pemrograman', 'Ilmu tentang jaringan komputer'], answer: 1, explanation: 'Logika adalah ilmu yang mempelajari cara berpikir secara benar dan sistematis.' },
        { q: 'Manakah yang merupakan proposisi?', options: ['Siapa nama kamu?', 'Tutuplah pintunya!', 'Indonesia berada di Asia.', 'Wah, indah sekali!'], answer: 2, explanation: '"Indonesia berada di Asia" adalah kalimat deklaratif yang memiliki nilai kebenaran (Benar).' },
        { q: 'Apa simbol dari Negasi (NOT)?', options: ['∧', '∨', '¬', '→'], answer: 2, explanation: 'Negasi (NOT) dilambangkan dengan simbol ¬.' },
        { q: 'Pernyataan P ∧ Q bernilai benar apabila...', options: ['Salah satu benar', 'Keduanya salah', 'Keduanya benar', 'P benar Q salah'], answer: 2, explanation: 'Konjungsi (AND) hanya bernilai benar jika kedua proposisi benar.' },
        { q: 'Pernyataan P ∨ Q bernilai salah apabila...', options: ['Keduanya benar', 'Keduanya salah', 'P benar Q salah', 'P salah Q benar'], answer: 1, explanation: 'Disjungsi (OR) bernilai salah hanya jika kedua proposisi salah.' },
        { q: 'Dalam implikasi P → Q, mengapa ketika P salah hasilnya tetap benar?', options: ['Karena aturan IF-THEN selalu benar', 'Karena syarat awal tidak terpenuhi sehingga aturan tidak dilanggar', 'Karena Q pasti benar', 'Karena P tidak memengaruhi Q'], answer: 1, explanation: 'Jika P tidak terjadi, aturan tersebut tidak dilanggar, sehingga tetap dianggap benar.' },
        { q: 'Simbol biimplikasi (IFF) adalah...', options: ['P → Q', 'P ∧ Q', 'P ∨ Q', 'P ↔ Q'], answer: 3, explanation: 'Biimplikasi dilambangkan dengan P ↔ Q, berarti P jika dan hanya jika Q.' },
        { q: 'Berikut adalah kelebihan logika proposisional, KECUALI:', options: ['Mudah dipahami', 'Aturannya sederhana', 'Mengenal objek dan relasi', 'Mudah diimplementasikan'], answer: 2, explanation: 'Logika proposisional tidak mengenal objek dan relasi — itu adalah keterbatasannya.' },
        { q: 'Mengapa logika proposisional tidak dapat menyatakan "Semua mahasiswa belajar"?', options: ['Karena terlalu panjang', 'Karena tidak memiliki kuantor', 'Karena komputer tidak bisa membaca', 'Kecause bukan kalimat deklaratif'], answer: 1, explanation: 'Logika proposisional tidak memiliki simbol untuk menyatakan kata "semua" (kuantor universal).' },
        { q: 'Apa pengembangan dari logika proposisional yang lebih kuat?', options: ['Machine Learning', 'First Order Logic (FOL)', 'Deep Learning', 'Neural Network'], answer: 1, explanation: 'First Order Logic (FOL) dikembangkan untuk mengatasi keterbatasan logika proposisional.' },
        { q: 'Manakah yang BUKAN termasuk keterbatasan logika proposisional?', options: ['Tidak mengenal objek', 'Tidak dapat menggunakan variabel', 'Sulit dipahami', 'Tidak mengenal kuantor'], answer: 2, explanation: 'Logika proposisional justru mudah dipahami — itu adalah kelebihannya.' },
        { q: 'Jika P = "Hari ini hujan" dan Q = "Jalan basah", maka P → Q berarti...', options: ['Hari ini hujan dan jalan basah', 'Hari ini hujan atau jalan basah', 'Jika hari ini hujan maka jalan basah', 'Hari ini hujan jika dan hanya jika jalan basah'], answer: 2, explanation: 'P → Q berarti "Jika P maka Q", yaitu jika hari ini hujan maka jalan basah.' },
        { q: 'Dalam sistem pakar, aturan "Jika demam DAN batuk maka flu" ditulis sebagai...', options: ['P ∨ Q → R', 'P ∧ Q → R', 'P → Q ∧ R', 'P ↔ Q → R'], answer: 1, explanation: 'P ∧ Q → R, artinya jika demam (P) dan batuk (Q) maka flu (R).' },
        { q: 'Mengapa logika proposisional tidak efisien untuk data besar?', options: ['Karena lambat diproses', 'Karena setiap fakta harus dibuat proposisi baru', 'Karena membutuhkan banyak memori', 'Karena tidak bisa dijalankan di komputer'], answer: 1, explanation: 'Setiap fakta baru harus dibuat menjadi proposisi baru, sehingga jumlah proposisi terus bertambah dan sistem menjadi rumit.' }
      ]
    },
    {
      id: 'first-order-logic',
      title: 'First Order Logic (FOL)',
      icon: '🔤',
      color: 'purple',
      short: 'FOL',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'First Order Logic dalam AI',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Setelah mempelajari Logika Proposisional, kita menemukan bahwa logika proposisional memiliki beberapa keterbatasan, terutama dalam merepresentasikan hubungan antar objek dan penggunaan variabel.\n\nFirst Order Logic (FOL) — disebut juga Logika Predikat — hadir untuk mengatasi keterbatasan tersebut. FOL merupakan sistem logika yang lebih ekspresif dan banyak digunakan dalam bidang Kecerdasan Buatan (AI) untuk merepresentasikan pengetahuan secara lebih detail dan terstruktur.\n\nFOL memungkinkan kita untuk:\n• Mendefinisikan objek-objek dalam dunia nyata.\n• Menyatakan hubungan (relasi) antar objek.\n• Menggunakan variabel untuk menyatakan sekelompok objek.\n• Menggunakan kuantor untuk menyatakan "semua" atau "beberapa".\n\nDengan kemampuan tersebut, FOL menjadi alat yang sangat penting dalam Knowledge Representation dan Reasoning di bidang AI.'
        },
        {
          type: 'pengertian',
          icon: '🧠',
          title: 'Apa itu First Order Logic (FOL)?',
          content: 'First Order Logic (FOL) adalah sistem logika yang memungkinkan kita untuk merepresentasikan pengetahuan dengan lebih terperinci dibandingkan logika proposisional.\n\nDalam FOL, suatu pernyataan dapat terdiri dari:\n• Objek (seperti Andi, Kucing, Mobil)\n• Predikat (sifat atau hubungan antar objek, seperti "adalah mahasiswa", "menyukai")\n• Fungsi (memetakan objek ke objek lain)\n• Kuantor (∀ untuk "semua", ∃ untuk "ada")\n• Variabel (x, y, z)\n• Konstanta (Andi, Budi, 5)\n\nFOL disebut "First Order" karena kuantornya hanya berlaku untuk variabel, bukan untuk predikat atau fungsi. Jika kuantor berlaku untuk predikat, maka disebut Higher Order Logic.'
        },
        {
          type: 'info',
          icon: '❓',
          title: 'Mengapa FOL Dibutuhkan?',
          content: 'Bayangkan kita ingin menyatakan:\n"Semua mahasiswa Informatika belajar AI."\n\nPada logika proposisional:\nP = Semua mahasiswa Informatika belajar AI.\n⟶ Tidak diketahui siapa mahasiswanya.\n\nPada FOL:\n∀x (Mahasiswa_Informatika(x) → Belajar_AI(x))\n⟶ Untuk setiap x, jika x adalah mahasiswa Informatika, maka x belajar AI.\n\nDengan FOL, komputer dapat menalar:\n• Andi adalah mahasiswa Informatika.\n• Maka Andi belajar AI.\n\nFOL memungkinkan sistem AI untuk memahami hubungan antar entitas secara lebih mendalam, sehingga penalaran yang dihasilkan menjadi lebih akurat dan fleksibel.'
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbedaan Logika Proposisional dan FOL',
          content: '| Aspek | Logika Proposisional | First Order Logic (FOL) |\n|-------|---------------------|------------------------|\n| Unit dasar | Proposisi (kalimat utuh) | Objek, Predikat, Variabel |\n| Contoh | P = Andi adalah mahasiswa | Mahasiswa(Andi) |\n| Variabel | Tidak ada | Ada (x, y, z) |\n| Kuantor | Tidak ada | ∀ (Universal), ∃ (Eksistensial) |\n| Relasi antar objek | Tidak dapat dinyatakan | Dapat dinyatakan dengan predikat |\n| Ekspresivitas | Rendah | Tinggi |\n| Contoh kompleks | P = Semua mahasiswa belajar | ∀x (Mahasiswa(x) → Belajar(x)) |\n| Cocok untuk | Sistem aturan sederhana | Representasi pengetahuan kompleks |'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 1. Konstanta',
          content: 'Konstanta adalah simbol yang merepresentasikan objek spesifik dalam dunia yang sedang dimodelkan.\n\nKonstanta biasanya ditulis dengan huruf kecil atau diawali huruf kecil.\n\nContoh:\n• andi — merepresentasikan objek Andi.\n• budi — merepresentasikan objek Budi.\n• kucing — merepresentasikan objek kucing.\n• 5 — merepresentasikan angka lima.\n\nKonstanta bersifat tetap (tidak berubah) dan merujuk pada objek yang sama dalam semua interpretasi.'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 2. Variabel',
          content: 'Variabel adalah simbol yang digunakan untuk merujuk pada objek yang tidak dispesifikkan.\n\nVariabel biasanya ditulis dengan huruf kecil x, y, z.\n\nContoh:\n• x — dapat merujuk pada objek apa pun.\n• y — dapat merujuk pada objek apa pun.\n\nVariabel sangat berguna ketika dikombinasikan dengan kuantor untuk menyatakan pernyataan yang berlaku untuk sekelompok objek.\n\nMisalnya:\n∀x (Manusia(x) → Bernapas(x))\n"Untuk setiap x, jika x adalah manusia maka x bernapas."\n\nVariabel x akan digantikan dengan objek-objek konkret saat dilakukan penalaran.'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 3. Predikat',
          content: 'Predikat adalah simbol yang menyatakan sifat suatu objek atau hubungan antar objek.\n\nPredikat mengembalikan nilai True atau False.\n\nDitulis dengan huruf kapital.\n\nContoh predikat dengan 1 argumen (sifat):\n• Mahasiswa(Andi) — "Andi adalah mahasiswa" → True/False.\n• Kucing(Kitty) — "Kitty adalah kucing" → True/False.\n• Genap(4) — "4 adalah bilangan genap" → True.\n\nContoh predikat dengan 2 argumen (relasi):\n• Menyukai(Andi, Matematika) — "Andi menyukai Matematika" → True/False.\n• LebihBesar(10, 5) — "10 lebih besar dari 5" → True.\n• IbuDari(Siti, Budi) — "Siti adalah ibu dari Budi" → True/False.'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 4. Fungsi',
          content: 'Fungsi adalah simbol yang memetakan satu atau lebih objek ke objek lain.\n\nBerbeda dengan predikat yang mengembalikan True/False, fungsi mengembalikan suatu objek.\n\nDitulis dengan huruf kecil.\n\nContoh:\n• ayah(Andi) — mengembalikan objek yang merupakan ayah dari Andi.\n• ibu(Budi) — mengembalikan objek yang merupakan ibu dari Budi.\n• tambah(3, 5) — mengembalikan objek hasil penjumlahan 3 dan 5.\n\nPerhatikan perbedaannya:\n• IbuDari(Siti, Budi) → predikat (Siti adalah ibu Budi? Bernilai True/False).\n• ibu(Budi) → fungsi (siapa ibu Budi? Mengembalikan objek Siti).'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 5. Kuantor Universal (∀)',
          content: 'Kuantor Universal (∀) berarti "untuk semua" atau "untuk setiap".\n\nBentuk: ∀x P(x)\nArti: Untuk setiap x, P(x) bernilai benar.\n\nContoh:\n∀x (Mahasiswa(x) → Belajar(x))\n"Semua mahasiswa belajar."\n\n∀x (Manusia(x) → Bernapas(x))\n"Semua manusia bernapas."\n\n∀x (Burung(x) → BisaTerbang(x))\n"Semua burung bisa terbang."\n\nCatatan: Kuantor universal biasanya dikombinasikan dengan implikasi (→) untuk menyatakan "jika termasuk kelompok maka memiliki sifat tertentu."'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Komponen FOL: 6. Kuantor Eksistensial (∃)',
          content: 'Kuantor Eksistensial (∃) berarti "ada" atau "terdapat" atau "beberapa".\n\nBentuk: ∃x P(x)\nArti: Terdapat x sedemikian sehingga P(x) bernilai benar.\n\nContoh:\n∃x (Mahasiswa(x) ∧ NilaiA(x))\n"Ada mahasiswa yang mendapat nilai A."\n\n∃x (Manusia(x) ∧ Tinggi(x))\n"Ada manusia yang tinggi."\n\n∃x (Kucing(x) ∧ WarnaHitam(x))\n"Ada kucing yang berwarna hitam."\n\nCatatan: Kuantor eksistensial biasanya dikombinasikan dengan konjungsi (∧) untuk menyatakan "ada objek yang memiliki kedua sifat tersebut."'
        },
        {
          type: 'info',
          icon: '🔗',
          title: 'Operator Logika pada FOL',
          content: 'FOL juga menggunakan operator logika yang sama dengan logika proposisional:\n\n1. Negasi: ¬P — Tidak P\n2. Konjungsi: P ∧ Q — P dan Q\n3. Disjungsi: P ∨ Q — P atau Q\n4. Implikasi: P → Q — Jika P maka Q\n5. Biimplikasi: P ↔ Q — P jika dan hanya jika Q\n\nPerbedaannya adalah dalam FOL, P dan Q dapat berupa predikat yang mengandung variabel dan kuantor.\n\nContoh:\n∀x (Mahasiswa(x) → ¬Malas(x))\n"Semua mahasiswa tidak malas."\n\n∃x (Mahasiswa(x) ∧ (Belajar(x) ∨ MengerjakanTugas(x)))\n"Ada mahasiswa yang belajar atau mengerjakan tugas."'
        },
        {
          type: 'contoh',
          icon: '📝',
          title: 'Contoh Representasi Pengetahuan dengan FOL',
          items: [
            '"Andi adalah mahasiswa."',
            '"Budi adalah mahasiswa."',
            '"Andi menyukai AI."',
            '"Budi menyukai AI."',
            '"Semua mahasiswa menyukai AI."'
          ],
          content: 'Representasi dalam FOL:\n\n• Mahasiswa(Andi)\n• Mahasiswa(Budi)\n• Menyukai(Andi, AI)\n• Menyukai(Budi, AI)\n• ∀x (Mahasiswa(x) → Menyukai(x, AI))'
        },
        {
          type: 'contoh',
          icon: '🏛️',
          title: 'Contoh Kasus Lengkap',
          content: 'Diketahui:\n1. Semua manusia adalah makhluk hidup.\n2. Andi adalah manusia.\n3. Semua makhluk hidup perlu makan.\n\nRepresentasi FOL:\n1. ∀x (Manusia(x) → MakhlukHidup(x))\n2. Manusia(Andi)\n3. ∀x (MakhlukHidup(x) → PerluMakan(x))\n\nPenalaran:\nDari (1) dan (2): Manusia(Andi) → MakhlukHidup(Andi)\nMaka: MakhlukHidup(Andi)\n\nDari (3): MakhlukHidup(Andi) → PerluMakan(Andi)\nMaka: PerluMakan(Andi)\n\nKesimpulan: Andi perlu makan.\n\nDengan FOL, komputer dapat melakukan penalaran berantai (chaining) seperti contoh di atas.'
        },
        {
          type: 'info',
          icon: '✅',
          title: 'Mengapa FOL Lebih Baik dari Logika Proposisional?',
          content: 'FOL lebih unggul karena:\n\n1. Ekspresivitas tinggi — mampu merepresentasikan pengetahuan kompleks.\n2. Mengenal objek — setiap entitas direpresentasikan secara eksplisit.\n3. Relasi antar objek — dapat menyatakan hubungan antar objek.\n4. Variabel dan kuantor — mampu menyatakan pernyataan umum.\n5. Penalaran otomatis — mesin dapat melakukan inferensi secara logis.\n6. Modular — pengetahuan dapat ditambahkan tanpa mengubah struktur yang sudah ada.'
        },
        {
          type: 'tujuan',
          icon: '🎯',
          title: 'Kelebihan First Order Logic (FOL)',
          checklist: [
            'Ekspresif — dapat merepresentasikan pengetahuan yang kompleks.',
            'Terstruktur — objek dan relasi didefinisikan secara jelas.',
            'Reusable — pengetahuan dapat digunakan kembali di berbagai konteks.',
            'Mendukung penalaran otomatis — cocok untuk sistem AI.',
            'Dasar bagi berbagai sistem representasi pengetahuan lainnya.',
            'Digunakan luas dalam berbagai aplikasi AI seperti Sistem Pakar, Semantic Web, dan Natural Language Processing.'
          ]
        },
        {
          type: 'info',
          icon: '⚠️',
          title: 'Keterbatasan First Order Logic (FOL)',
          content: 'Meskipun lebih unggul, FOL juga memiliki beberapa keterbatasan:\n\n1. Tidak dapat menangani ketidakpastian — FOL hanya bekerja dengan nilai benar/salah, tidak dapat menangani kemungkinan (probabilitas).\n\n2. Tidak dapat menyatakan perubahan — FOL bersifat statis, tidak dapat merepresentasikan perubahan keadaan seiring waktu.\n\n3. Kompleksitas komputasi — penalaran pada FOL bisa menjadi sangat lambat untuk data yang besar.\n\n4. Tidak dapat menyatakan pengetahuan tentang pengetahuan — FOL tidak dapat merepresentasikan keyakinan atau kepercayaan.\n\n5. Masalah semi-decidable — tidak ada algoritma yang dapat menentukan apakah suatu pernyataan FOL adalah konsekuensi logis dari sekumpulan pernyataan dalam waktu terbatas (secara umum).\n\nUntuk mengatasi keterbatasan ini, dikembangkan logika tingkat lanjut seperti Probabilistic Logic, Temporal Logic, Modal Logic, dan Descriptive Logic.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Penerapan FOL dalam AI',
          items: [
            'Sistem Pakar (Expert System): Aturan-aturan dalam sistem pakar sering menggunakan FOL untuk merepresentasikan pengetahuan medis, teknik, atau diagnostik.',
            'Semantic Web: Bahasa OWL (Web Ontology Language) berbasis pada FOL untuk mendefinisikan ontologi dan relasi antar konsep.',
            'Natural Language Processing (NLP): FOL digunakan untuk merepresentasikan makna kalimat secara formal.',
            'Robotik: FOL digunakan untuk merepresentasikan pengetahuan tentang lingkungan dan tugas robot.',
            'Basis Data Cerdas: FOL digunakan untuk query yang melibatkan penalaran logis pada basis data.',
            'Automated Theorem Proving: FOL menjadi dasar bagi sistem yang membuktikan teorema secara otomatis.'
          ],
          content: 'Berikut adalah beberapa penerapan FOL dalam dunia AI:'
        },
        {
          type: 'contoh',
          icon: '✏️',
          title: 'Contoh Soal',
          items: [
            'Ubahlah kalimat berikut ke dalam notasi FOL: "Semua kucing suka ikan."',
            'Ubahlah kalimat berikut ke dalam notasi FOL: "Ada mahasiswa yang pintar."',
            'Ubahlah kalimat berikut ke dalam notasi FOL: "Setiap orang memiliki seorang ibu."',
            'Ubahlah kalimat berikut ke dalam notasi FOL: "Tidak ada manusia yang sempurna."',
            'Ubahlah kalimat berikut ke dalam notasi FOL: "Andi dan Budi adalah bersaudara."'
          ],
          content: 'Coba ubah kalimat-kalimat berikut ke dalam notasi FOL:\n\n1. "Semua kucing suka ikan."\n   Jawaban: ∀x (Kucing(x) → SukaIkan(x))\n\n2. "Ada mahasiswa yang pintar."\n   Jawaban: ∃x (Mahasiswa(x) ∧ Pintar(x))\n\n3. "Setiap orang memiliki seorang ibu."\n   Jawaban: ∀x (Orang(x) → ∃y (IbuDari(y, x)))\n\n4. "Tidak ada manusia yang sempurna."\n   Jawaban: ¬∃x (Manusia(x) ∧ Sempurna(x))\n   Atau: ∀x (Manusia(x) → ¬Sempurna(x))\n\n5. "Andi dan Budi adalah bersaudara."\n   Jawaban: Bersaudara(Andi, Budi)'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'First Order Logic (FOL) adalah pengembangan dari logika proposisional yang lebih ekspresif.',
            'FOL memiliki komponen: konstanta, variabel, predikat, fungsi, dan kuantor.',
            'Kuantor Universal (∀) berarti "untuk semua", Kuantor Eksistensial (∃) berarti "ada".',
            'Operator logika (¬, ∧, ∨, →, ↔) tetap digunakan dalam FOL.',
            'Predikat menyatakan sifat atau relasi, sedangkan fungsi mengembalikan objek.',
            'FOL lebih unggul karena mengenal objek, relasi, variabel, dan kuantor.',
            'FOL banyak digunakan dalam Sistem Pakar, Semantic Web, NLP, Robotik, dan Automated Theorem Proving.',
            'Keterbatasan FOL: tidak menangani ketidakpastian, statis, kompleksitas komputasi tinggi, tidak dapat menyatakan keyakinan.',
            'FOL adalah dasar penting untuk memahami representasi pengetahuan dalam AI.'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Untuk menghadapi UAS, ingatlah perbedaan utama antara Logika Proposisional dan FOL:\n\nLogika Proposisional = Proposisi (P, Q, R) — sederhana namun terbatas.\nFirst Order Logic (FOL) = Predikat + Variabel + Kuantor — lebih ekspresif.\n\nTips menghafal komponen FOL:\n"Kucing Vokal Pasti Fungsi Kuantor"\n→ Konstanta, Variabel, Predikat, Fungsi, Kuantor\n\nTips menghafal kuantor:\n• ∀ = All (A terbalik) → Semua\n• ∃ = Exists (E terbalik) → Ada\n\nJika soal meminta representasi FOL, lakukan langkah berikut:\n1. Identifikasi objek → jadikan konstanta atau variabel.\n2. Identifikasi sifat/relasi → jadikan predikat.\n3. Apakah ada kata "semua"? → Gunakan ∀.\n4. Apakah ada kata "ada/beberapa"? → Gunakan ∃.\n5. Tulis dengan format: Kuantor Variabel (Predikat → Sifat)'
        }
      ],
      flashcards: [
        { q: 'Apa itu First Order Logic (FOL)?', a: 'Sistem logika yang memungkinkan representasi pengetahuan dengan lebih terperinci, terdiri dari objek, predikat, fungsi, variabel, dan kuantor.' },
        { q: 'Apa perbedaan utama FOL dengan logika proposisional?', a: 'FOL mengenal objek, variabel, kuantor, dan relasi antar objek, sedangkan logika proposisional hanya menggunakan proposisi utuh tanpa memahami struktur internalnya.' },
        { q: 'Apa itu konstanta dalam FOL?', a: 'Simbol yang merepresentasikan objek spesifik, ditulis dengan huruf kecil, misalnya andi, budi, kucing.' },
        { q: 'Apa itu predikat dalam FOL?', a: 'Simbol yang menyatakan sifat suatu objek atau hubungan antar objek, mengembalikan True/False, ditulis dengan huruf kapital, misalnya Mahasiswa(Andi).' },
        { q: 'Apa perbedaan predikat dan fungsi dalam FOL?', a: 'Predikat mengembalikan nilai True/False (contoh: IbuDari(Siti, Budi)). Fungsi mengembalikan suatu objek (contoh: ibu(Budi) → Siti).' },
        { q: 'Apa itu kuantor universal (∀) dan berikan contoh?', a: '∀ berarti "untuk semua" atau "untuk setiap". Contoh: ∀x (Manusia(x) → Bernapas(x)) artinya "Semua manusia bernapas."' },
        { q: 'Apa itu kuantor eksistensial (∃) dan berikan contoh?', a: '∃ berarti "ada" atau "terdapat". Contoh: ∃x (Mahasiswa(x) ∧ NilaiA(x)) artinya "Ada mahasiswa yang mendapat nilai A."' },
        { q: 'Mengapa kuantor universal biasanya dikombinasikan dengan implikasi (→)?', a: 'Karena kita ingin menyatakan "jika termasuk kelompok maka memiliki sifat tertentu", bukan "semua objek di dunia adalah mahasiswa."' },
        { q: 'Mengapa kuantor eksistensial biasanya dikombinasikan dengan konjungsi (∧)?', a: 'Karena kita ingin menyatakan "ada objek yang memiliki kedua sifat tersebut secara bersamaan."' },
        { q: 'Sebutkan 3 penerapan FOL dalam AI!', a: '1. Sistem Pakar, 2. Semantic Web (OWL), 3. Natural Language Processing (NLP).' },
        { q: 'Apa keterbatasan utama FOL?', a: 'Tidak dapat menangani ketidakpastian, bersifat statis (tidak bisa menyatakan perubahan waktu), kompleksitas komputasi tinggi, dan tidak bisa menyatakan keyakinan.' },
        { q: 'Ubahlah kalimat "Semua burung bisa terbang" ke dalam notasi FOL!', a: '∀x (Burung(x) → BisaTerbang(x))' }
      ],
      quiz: [
        { q: 'Apa kepanjangan FOL?', options: ['First Order Logic', 'Final Order Logic', 'First Object Logic', 'Formal Object Logic'], answer: 0, explanation: 'FOL adalah singkatan dari First Order Logic, yaitu sistem logika yang lebih ekspresif dari logika proposisional.' },
        { q: 'Komponen FOL yang menyatakan sifat suatu objek adalah...', options: ['Konstanta', 'Variabel', 'Predikat', 'Fungsi'], answer: 2, explanation: 'Predikat menyatakan sifat suatu objek atau hubungan antar objek, misalnya Mahasiswa(Andi).' },
        { q: 'Apa perbedaan predikat dan fungsi dalam FOL?', options: ['Predikat mengembalikan objek, fungsi mengembalikan True/False', 'Predikat mengembalikan True/False, fungsi mengembalikan objek', 'Predikat dan fungsi sama saja', 'Predikat hanya untuk objek, fungsi hanya untuk angka'], answer: 1, explanation: 'Predikat mengembalikan True/False (contoh: IbuDari(Siti, Budi)), sedangkan fungsi mengembalikan objek (contoh: ibu(Budi) → Siti).' },
        { q: 'Kuantor universal (∀) berarti...', options: ['Ada', 'Tidak ada', 'Untuk semua', 'Sebagian'], answer: 2, explanation: '∀ berarti "untuk semua" atau "untuk setiap", digunakan untuk menyatakan pernyataan yang berlaku untuk seluruh anggota suatu kelompok.' },
        { q: 'Kuantor eksistensial (∃) berarti...', options: ['Untuk semua', 'Tidak ada', 'Ada', 'Sebagian besar'], answer: 2, explanation: '∃ berarti "ada" atau "terdapat", digunakan untuk menyatakan keberadaan setidaknya satu objek dengan sifat tertentu.' },
        { q: 'Manakah representasi FOL yang benar untuk "Semua kucing suka ikan"?', options: ['∃x (Kucing(x) → SukaIkan(x))', '∀x (Kucing(x) ∧ SukaIkan(x))', '∀x (Kucing(x) → SukaIkan(x))', '∃x (Kucing(x) ∧ SukaIkan(x))'], answer: 2, explanation: '"Semua kucing suka ikan" menggunakan ∀ (untuk semua) dan implikasi (→): ∀x (Kucing(x) → SukaIkan(x)).' },
        { q: 'Manakah representasi FOL yang benar untuk "Ada mahasiswa yang pintar"?', options: ['∀x (Mahasiswa(x) → Pintar(x))', '∃x (Mahasiswa(x) ∧ Pintar(x))', '∀x (Mahasiswa(x) ∧ Pintar(x))', '∃x (Mahasiswa(x) → Pintar(x))'], answer: 1, explanation: '"Ada mahasiswa yang pintar" menggunakan ∃ (ada) dan konjungsi (∧): ∃x (Mahasiswa(x) ∧ Pintar(x)).' },
        { q: 'Mengapa kuantor universal menggunakan implikasi (→) bukan konjungsi (∧)?', options: ['Karena lebih mudah ditulis', 'Karena jika menggunakan ∧ maka semua objek di dunia harus menjadi mahasiswa', 'Karena implikasi lebih cepat diproses', 'Karena konjungsi tidak boleh digunakan dengan kuantor'], answer: 1, explanation: 'Jika menggunakan ∧, maka ∀x (Mahasiswa(x) ∧ Belajar(x)) berarti "semua objek di dunia adalah mahasiswa dan belajar" — yang jelas salah.' },
        { q: 'Berikut adalah penerapan FOL dalam AI, KECUALI:', options: ['Sistem Pakar', 'Semantic Web', 'Image Processing sederhana', 'Automated Theorem Proving'], answer: 2, explanation: 'Image Processing sederhana umumnya tidak menggunakan FOL. FOL banyak digunakan di Sistem Pakar, Semantic Web, dan Automated Theorem Proving.' },
        { q: 'Manakah yang merupakan fungsi dalam FOL?', options: ['Mahasiswa(Andi)', 'Menyukai(Andi, AI)', 'ibu(Budi)', 'Manusia(x)'], answer: 2, explanation: 'ibu(Budi) adalah fungsi karena mengembalikan objek (siapa ibu Budi), bukan True/False.' },
        { q: 'Apa keterbatasan FOL?', options: ['Tidak bisa menggunakan variabel', 'Tidak bisa menangani ketidakpastian', 'Tidak bisa menggunakan predikat', 'Tidak bisa menggunakan kuantor'], answer: 1, explanation: 'FOL hanya bekerja dengan nilai benar/salah dan tidak dapat menangani ketidakpastian (probabilitas).' },
        { q: 'Kalimat "Tidak ada manusia yang sempurna" dalam FOL adalah...', options: ['∀x (Manusia(x) ∧ ¬Sempurna(x))', '∃x (Manusia(x) → ¬Sempurna(x))', '¬∃x (Manusia(x) ∧ Sempurna(x))', '∀x (¬Manusia(x) → Sempurna(x))'], answer: 2, explanation: '"Tidak ada manusia yang sempurna" berarti tidak terdapat x yang merupakan manusia dan sempurna: ¬∃x (Manusia(x) ∧ Sempurna(x)).' }
      ]
    },
    {
      id: 'sistem-pakar',
      title: 'Sistem Pakar (Expert System)',
      icon: '🩺',
      color: 'purple',
      short: 'Sistem Pakar',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Expert System dalam AI',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Salah satu cabang awal dalam Artificial Intelligence (AI) adalah Sistem Pakar (Expert System). Sistem ini dikembangkan untuk meniru cara berpikir dan pengambilan keputusan seorang ahli (pakar) dalam bidang tertentu.\n\nMisalnya, seorang dokter dapat mendiagnosis penyakit berdasarkan gejala yang dialami pasien. Pengalaman dan pengetahuan dokter tersebut kemudian disimpan ke dalam komputer sehingga komputer dapat memberikan diagnosis yang hampir sama seperti seorang dokter.\n\nInilah konsep dasar dari Sistem Pakar.\n\nPada masa awal perkembangan AI (sekitar tahun 1970–1990), Sistem Pakar menjadi salah satu teknologi AI yang paling populer karena mampu membantu manusia dalam mengambil keputusan di berbagai bidang, seperti kesehatan, pertanian, pendidikan, industri, hingga perbankan.'
        },
        {
          type: 'pengertian',
          icon: '🧠',
          title: 'Apa itu Sistem Pakar?',
          content: 'Sistem Pakar (Expert System) adalah program komputer yang dirancang untuk meniru kemampuan berpikir dan mengambil keputusan seperti seorang pakar di bidang tertentu dengan memanfaatkan pengetahuan (knowledge) dan aturan (rules) yang telah disimpan di dalam sistem.\n\nDengan kata lain:\n\nSistem Pakar adalah sistem komputer yang mampu memberikan solusi atau saran seperti seorang ahli berdasarkan pengetahuan yang dimilikinya.'
        },
        {
          type: 'pengertian',
          icon: '👨‍⚕️',
          title: 'Mengapa Disebut "Pakar"?',
          content: 'Disebut "pakar" karena pengetahuan yang digunakan berasal dari seseorang yang benar-benar ahli di bidangnya.\n\nContohnya:\n• Dokter → ahli dalam diagnosis penyakit.\n• Mekanik → ahli memperbaiki kendaraan.\n• Dosen → ahli pada bidang ilmunya.\n• Ahli pertanian → ahli mengidentifikasi penyakit tanaman.\n\nPengetahuan para ahli tersebut dikumpulkan, kemudian dimasukkan ke dalam komputer sehingga dapat digunakan oleh banyak orang.'
        },
        {
          type: 'tujuan',
          icon: '🎯',
          title: 'Tujuan Sistem Pakar',
          checklist: [
            'Membantu masyarakat memperoleh solusi tanpa harus selalu bertemu pakar.',
            'Menyimpan pengetahuan seorang ahli agar tidak hilang.',
            'Mempercepat proses pengambilan keputusan.',
            'Mengurangi kesalahan manusia dalam menganalisis suatu masalah.',
            'Memberikan konsultasi kapan saja selama sistem tersedia.'
          ]
        },
        {
          type: 'contoh',
          icon: '💡',
          title: 'Contoh Sistem Pakar dalam Kehidupan Sehari-hari',
          content: '1. Diagnosis Penyakit\n\nPasien memasukkan gejala:\n• Demam\n• Batuk\n• Pilek\n\nSistem kemudian menyimpulkan: Kemungkinan pasien mengalami influenza.\n\n2. Bengkel Kendaraan\n\nPengguna memilih gejala:\n• Mesin sulit hidup\n• Lampu redup\n\nSistem menyimpulkan: Kemungkinan aki kendaraan lemah.\n\n3. Pertanian\n\nPetani memasukkan gejala tanaman:\n• Daun menguning\n• Batang membusuk\n\nSistem memberikan diagnosis penyakit tanaman beserta solusi penanganannya.\n\n4. Pendidikan\n\nMahasiswa menjawab beberapa pertanyaan.\nSistem memberikan rekomendasi:\n• Konsentrasi AI\n• Data Science\n• Multimedia\nberdasarkan kemampuan dan minat mahasiswa.'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Cara Kerja Sistem Pakar',
          content: 'Secara sederhana, alur kerja Sistem Pakar adalah sebagai berikut:\n\nPengguna → Input Gejala / Fakta → Mesin Inferensi → Knowledge Base → Kesimpulan / Solusi\n\nArtinya:\n1. Pengguna memasukkan fakta atau gejala.\n2. Sistem membaca aturan yang tersimpan.\n3. Mesin inferensi melakukan proses penalaran.\n4. Sistem memberikan hasil berupa diagnosis atau solusi.'
        },
        {
          type: 'info',
          icon: '🔧',
          title: 'Komponen 1: Knowledge Base (Basis Pengetahuan)',
          content: 'Knowledge Base merupakan bagian terpenting dalam Sistem Pakar.\n\nKnowledge Base berisi:\n• fakta,\n• aturan,\n• pengalaman,\n• pengetahuan dari seorang pakar.\n\nMisalnya:\nRule 1\nIF Demam AND Batuk THEN Flu\n\nRule 2\nIF Flu THEN Istirahat dan minum obat\n\nSemua aturan tersebut disimpan dalam Knowledge Base.'
        },
        {
          type: 'info',
          icon: '🧠',
          title: 'Komponen 2: Inference Engine (Mesin Inferensi)',
          content: 'Inference Engine adalah "otak" dari Sistem Pakar.\n\nTugasnya adalah:\n• membaca fakta,\n• mencocokkan fakta dengan aturan,\n• menarik kesimpulan.\n\nMesin inferensi bekerja menggunakan metode seperti:\n• Forward Chaining\n• Backward Chaining\n\n(Kedua metode ini akan dipelajari pada materi berikutnya.)'
        },
        {
          type: 'info',
          icon: '🖥️',
          title: 'Komponen 3: User Interface',
          content: 'User Interface merupakan media komunikasi antara pengguna dan sistem.\n\nContohnya:\nHalaman konsultasi.\n\nPengguna mengisi:\n✔ Demam\n✔ Batuk\n✔ Sakit kepala\n\nKemudian sistem menampilkan hasil diagnosis.'
        },
        {
          type: 'info',
          icon: '📚',
          title: 'Komponen 4: Knowledge Acquisition',
          content: 'Knowledge Acquisition adalah proses memperoleh pengetahuan dari pakar.\n\nPengetahuan dapat diperoleh melalui:\n• wawancara,\n• observasi,\n• buku,\n• jurnal,\n• pengalaman pakar.\n\nPengetahuan tersebut kemudian diubah menjadi aturan yang dapat dipahami komputer.'
        },
        {
          type: 'info',
          icon: '💬',
          title: 'Komponen 5: Explanation Facility',
          content: 'Salah satu kelebihan Sistem Pakar adalah dapat menjelaskan alasan mengapa suatu kesimpulan diperoleh.\n\nMisalnya:\nDiagnosis: Influenza.\nPenjelasan: Karena pasien mengalami demam, batuk, pilek, dan sakit tenggorokan sehingga memenuhi aturan nomor 5.\n\nFitur ini membuat pengguna lebih percaya terhadap hasil sistem.'
        },
        {
          type: 'info',
          icon: '💾',
          title: 'Komponen 6: Working Memory',
          content: 'Working Memory adalah tempat penyimpanan sementara yang berisi fakta-fakta yang sedang diproses.\n\nMisalnya pengguna memasukkan:\n• Demam\n• Batuk\n\nData tersebut disimpan sementara selama proses inferensi berlangsung.'
        },
        {
          type: 'contoh',
          icon: '🔄',
          title: 'Ilustrasi Cara Kerja',
          content: 'Misalnya terdapat aturan berikut.\n\nRule 1\nIF Demam AND Batuk THEN Flu\n\nRule 2\nIF Flu THEN Istirahat\n\nPengguna memasukkan:\n✔ Demam\n✔ Batuk\n\nMesin inferensi membaca Rule 1.\nKarena syarat terpenuhi, maka: Flu.\n\nSelanjutnya membaca Rule 2.\nKarena Flu sudah diketahui, maka sistem menyimpulkan: Istirahat.\n\nInilah yang disebut proses penalaran.'
        },
        {
          type: 'info',
          icon: '📋',
          title: 'Representasi Pengetahuan',
          content: 'Pengetahuan dalam Sistem Pakar biasanya ditulis dalam bentuk aturan IF-THEN.\n\nContoh:\nIF MesinTidakMenyala AND LampuRedup THEN AkiRusak\n\nContoh lain:\nIF Demam AND Batuk AND Pilek THEN Influenza\n\nAturan seperti ini disebut Rule-Based System.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Kelebihan Sistem Pakar',
          checklist: [
            'Pengetahuan Pakar Tidak Hilang — walaupun pakarnya pensiun atau meninggal, ilmunya tetap tersimpan.',
            'Dapat Digunakan Banyak Orang — satu sistem dapat membantu ribuan pengguna secara bersamaan.',
            'Cepat — diagnosis hanya membutuhkan beberapa detik.',
            'Konsisten — sistem selalu memberikan keputusan yang sama apabila fakta yang diberikan sama.',
            'Menghemat Biaya — pengguna tidak selalu harus berkonsultasi langsung kepada pakar.'
          ]
        },
        {
          type: 'info',
          icon: '⚠️',
          title: 'Kekurangan Sistem Pakar',
          content: '1. Sulit Membuat Knowledge Base — mengumpulkan pengetahuan dari pakar membutuhkan waktu yang lama.\n\n2. Tidak Bisa Belajar Sendiri — Sistem Pakar klasik tidak dapat belajar dari pengalaman. Semua aturan harus dibuat secara manual.\n\n3. Bergantung pada Pakar — jika pengetahuan pakar kurang lengkap, maka hasil sistem juga kurang akurat.\n\n4. Sulit Menangani Kasus Baru — jika muncul penyakit baru atau kondisi baru, aturan harus diperbarui secara manual.'
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbedaan Sistem Pakar dan Machine Learning',
          content: '| Aspek | Sistem Pakar | Machine Learning |\n|-------|-------------|-----------------|\n| Sumber pengetahuan | Berasal dari pakar | Dipelajari dari data |\n| Bentuk pengetahuan | Aturan IF-THEN | Algoritma pembelajaran |\n| Kemampuan belajar | Tidak belajar sendiri | Dapat belajar dari data baru |\n| Cocok untuk | Masalah dengan aturan yang jelas | Data yang kompleks dan besar |\n\nContoh:\nSistem Pakar:\nIF Demam AND Batuk THEN Flu\n\nMachine Learning:\nTidak membutuhkan aturan tersebut. Sistem akan mempelajarinya sendiri dari ribuan data pasien.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Contoh Kasus',
          content: 'Misalnya dibuat Sistem Pakar diagnosis penyakit.\n\nKnowledge Base:\nRule 1: IF Demam AND Batuk THEN Influenza\nRule 2: IF Influenza THEN Minum Obat dan Istirahat\n\nInput pengguna:\n✔ Demam\n✔ Batuk\n\nProses:\nRule 1 cocok → Kesimpulan: Influenza → Rule 2 aktif → Saran: Minum obat dan istirahat.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Penerapan Sistem Pakar',
          content: 'Beberapa contoh penerapan Sistem Pakar:\n\n1. Diagnosis penyakit di rumah sakit.\n2. Deteksi kerusakan kendaraan.\n3. Identifikasi penyakit tanaman.\n4. Konsultasi hukum.\n5. Analisis keuangan.\n6. Sistem rekomendasi investasi.\n7. Identifikasi kerusakan komputer.\n8. Penentuan kualitas produk industri.'
        },
        {
          type: 'info',
          icon: '🔗',
          title: 'Hubungan dengan Materi Berikutnya',
          content: 'Pada Sistem Pakar terdapat komponen Inference Engine yang bertugas menarik kesimpulan.\n\nInference Engine memiliki dua metode utama, yaitu:\n• Forward Chaining — penalaran dimulai dari fakta menuju kesimpulan.\n• Backward Chaining — penalaran dimulai dari tujuan (hipotesis) lalu mencari fakta yang mendukung.\n\nKedua metode ini akan dibahas lebih mendalam pada materi berikutnya.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Sistem Pakar (Expert System) adalah sistem AI yang meniru kemampuan seorang ahli dalam menyelesaikan masalah pada bidang tertentu.',
            'Pengetahuan sistem berasal dari pakar dan disimpan dalam Knowledge Base.',
            'Inference Engine bertugas mencocokkan fakta dengan aturan untuk menghasilkan kesimpulan.',
            'Komponen utama Sistem Pakar meliputi Knowledge Base, Inference Engine, User Interface, Knowledge Acquisition, Working Memory, dan Explanation Facility.',
            'Pengetahuan biasanya direpresentasikan dalam bentuk aturan IF–THEN.',
            'Kelebihannya adalah cepat, konsisten, dan mampu menyimpan pengetahuan pakar.',
            'Kekurangannya adalah tidak dapat belajar sendiri, bergantung pada pakar, dan membutuhkan waktu lama untuk membangun basis pengetahuan.',
            'Perbedaan utama dengan Machine Learning: Sistem Pakar belajar dari pakar (aturan buatan manusia), ML belajar dari data (pola dipelajari komputer).'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Kalau dosen bertanya "Apa saja komponen utama Sistem Pakar?", ingat urutan berikut:\n\nKnowledge Base → Inference Engine → User Interface → Knowledge Acquisition → Working Memory → Explanation Facility\n\nSedangkan jika ditanya "Apa perbedaan Sistem Pakar dan Machine Learning?", ingat kalimat sederhana ini:\n\nSistem Pakar belajar dari pakar (aturan dibuat manusia), sedangkan Machine Learning belajar dari data (pola dipelajari komputer).\n\nKalimat ini sering menjadi inti jawaban pada soal UAS karena menunjukkan perbedaan mendasar antara AI klasik dan AI modern.'
        }
      ],
      flashcards: [
        { q: 'Apa itu Sistem Pakar (Expert System)?', a: 'Program komputer yang dirancang untuk meniru kemampuan berpikir dan mengambil keputusan seperti seorang pakar di bidang tertentu dengan memanfaatkan pengetahuan dan aturan yang telah disimpan.' },
        { q: 'Sebutkan 3 contoh penerapan Sistem Pakar dalam kehidupan sehari-hari!', a: '1. Diagnosis penyakit, 2. Deteksi kerusakan kendaraan, 3. Identifikasi penyakit tanaman.' },
        { q: 'Apa fungsi Knowledge Base dalam Sistem Pakar?', a: 'Menyimpan fakta, aturan, pengalaman, dan pengetahuan dari seorang pakar yang digunakan sebagai dasar penalaran.' },
        { q: 'Apa tugas Inference Engine dalam Sistem Pakar?', a: 'Membaca fakta, mencocokkan fakta dengan aturan, dan menarik kesimpulan (merupakan "otak" dari Sistem Pakar).' },
        { q: 'Sebutkan 6 komponen utama Sistem Pakar!', a: 'Knowledge Base, Inference Engine, User Interface, Knowledge Acquisition, Working Memory, Explanation Facility.' },
        { q: 'Apa itu Knowledge Acquisition?', a: 'Proses memperoleh pengetahuan dari pakar melalui wawancara, observasi, buku, jurnal, atau pengalaman pakar.' },
        { q: 'Apa fungsi Explanation Facility dalam Sistem Pakar?', a: 'Menjelaskan alasan mengapa suatu kesimpulan diperoleh, sehingga pengguna lebih percaya terhadap hasil sistem.' },
        { q: 'Sebutkan 3 kelebihan Sistem Pakar!', a: '1. Pengetahuan pakar tidak hilang, 2. Cepat dan konsisten, 3. Dapat digunakan banyak orang.' },
        { q: 'Sebutkan 3 kekurangan Sistem Pakar!', a: '1. Sulit membuat Knowledge Base, 2. Tidak bisa belajar sendiri, 3. Bergantung pada pakar.' },
        { q: 'Apa perbedaan utama Sistem Pakar dengan Machine Learning?', a: 'Sistem Pakar belajar dari pakar (aturan dibuat manusia), sedangkan Machine Learning belajar dari data (pola dipelajari komputer).' },
        { q: 'Apa bentuk representasi pengetahuan yang paling umum dalam Sistem Pakar?', a: 'Aturan IF-THEN (Rule-Based System), misalnya: IF Demam AND Batuk THEN Flu.' },
        { q: 'Apa itu Working Memory dalam Sistem Pakar?', a: 'Tempat penyimpanan sementara yang berisi fakta-fakta yang sedang diproses selama proses inferensi berlangsung.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan Sistem Pakar (Expert System)?', options: ['Sistem yang menggunakan machine learning untuk belajar dari data', 'Program komputer yang meniru kemampuan berpikir seorang pakar di bidang tertentu', 'Sistem database untuk menyimpan data pasien', 'Aplikasi web untuk konsultasi online'], answer: 1, explanation: 'Sistem Pakar adalah program komputer yang meniru kemampuan berpikir dan mengambil keputusan seperti seorang pakar.' },
        { q: 'Komponen Sistem Pakar yang berfungsi sebagai tempat penyimpanan pengetahuan adalah...', options: ['Inference Engine', 'User Interface', 'Knowledge Base', 'Working Memory'], answer: 2, explanation: 'Knowledge Base (Basis Pengetahuan) menyimpan fakta, aturan, dan pengetahuan dari pakar.' },
        { q: 'Komponen Sistem Pakar yang bertugas mencocokkan fakta dengan aturan disebut...', options: ['Knowledge Base', 'Inference Engine', 'Explanation Facility', 'Knowledge Acquisition'], answer: 1, explanation: 'Inference Engine adalah "otak" Sistem Pakar yang membaca fakta, mencocokkan dengan aturan, dan menarik kesimpulan.' },
        { q: 'Proses memperoleh pengetahuan dari pakar disebut...', options: ['Knowledge Base', 'Knowledge Acquisition', 'Working Memory', 'Explanation Facility'], answer: 1, explanation: 'Knowledge Acquisition adalah proses memperoleh pengetahuan dari pakar melalui wawancara, observasi, buku, atau jurnal.' },
        { q: 'Bentuk representasi pengetahuan yang paling umum dalam Sistem Pakar adalah...', options: ['Diagram alir', 'Aturan IF-THEN', 'Persamaan matematika', 'Grafik'], answer: 1, explanation: 'Pengetahuan dalam Sistem Pakar biasanya ditulis dalam bentuk aturan IF-THEN (Rule-Based System).' },
        { q: 'Berikut adalah kelebihan Sistem Pakar, KECUALI:', options: ['Cepat dan konsisten', 'Dapat belajar dari pengalaman', 'Pengetahuan pakar tidak hilang', 'Dapat digunakan banyak orang'], answer: 1, explanation: 'Sistem Pakar klasik tidak dapat belajar dari pengalaman — itu adalah kekurangannya.' },
        { q: 'Apa kekurangan utama Sistem Pakar?', options: ['Terlalu cepat dalam mengambil keputusan', 'Tidak bisa belajar sendiri dan bergantung pada pakar', 'Membutuhkan data yang sangat besar', 'Hanya bisa digunakan oleh satu orang'], answer: 1, explanation: 'Sistem Pakar tidak bisa belajar sendiri, semua aturan harus dibuat manual, dan sangat bergantung pada pengetahuan pakar.' },
        { q: 'Apa perbedaan utama Sistem Pakar dengan Machine Learning?', options: ['Sistem Pakar lebih murah', 'Sistem Pakar belajar dari pakar, Machine Learning belajar dari data', 'Machine Learning lebih lambat', 'Sistem Pakar tidak membutuhkan komputer'], answer: 1, explanation: 'Sistem Pakar menggunakan aturan yang dibuat oleh pakar, sedangkan Machine Learning mempelajari pola dari data.' },
        { q: 'Jika seorang pasien mengalami demam dan batuk, lalu sistem menyimpulkan influenza, ini adalah contoh...', options: ['Machine Learning', 'Sistem Pakar', 'Deep Learning', 'Neural Network'], answer: 1, explanation: 'Sistem menggunakan aturan IF-THEN untuk mendiagnosis berdasarkan gejala — ini adalah contoh klasik Sistem Pakar.' },
        { q: 'Komponen yang menjelaskan alasan suatu kesimpulan diperoleh disebut...', options: ['Knowledge Base', 'Working Memory', 'Explanation Facility', 'User Interface'], answer: 2, explanation: 'Explanation Facility memberikan penjelasan mengapa suatu kesimpulan diperoleh, meningkatkan kepercayaan pengguna.' },
        { q: 'Apa fungsi User Interface dalam Sistem Pakar?', options: ['Menyimpan aturan', 'Menarik kesimpulan', 'Media komunikasi antara pengguna dan sistem', 'Memperoleh pengetahuan dari pakar'], answer: 2, explanation: 'User Interface adalah media komunikasi antara pengguna dan sistem, misalnya halaman konsultasi.' },
        { q: 'Pada masa apa Sistem Pakar menjadi teknologi AI yang paling populer?', options: ['1960–1970', '1970–1990', '1990–2010', '2010–sekarang'], answer: 1, explanation: 'Pada masa sekitar tahun 1970–1990, Sistem Pakar menjadi salah satu teknologi AI yang paling populer.' }
      ]
    },
    {
      id: 'forward-backward-chaining',
      title: 'Forward Chaining dan Backward Chaining',
      icon: '🔄',
      color: 'purple',
      short: 'Chaining',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Metode Inferensi dalam Sistem Pakar',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Pada materi sebelumnya telah dipelajari bahwa Sistem Pakar (Expert System) memiliki sebuah komponen yang disebut Inference Engine (Mesin Inferensi). Inference Engine bertugas melakukan proses penalaran (reasoning), yaitu mencocokkan fakta dengan aturan yang ada di dalam Knowledge Base untuk menghasilkan suatu kesimpulan.\n\nNamun, bagaimana cara mesin inferensi tersebut bekerja?\n\nDalam Sistem Pakar terdapat dua metode penalaran yang paling banyak digunakan, yaitu:\n• Forward Chaining (Penelusuran Maju)\n• Backward Chaining (Penelusuran Mundur)\n\nKedua metode ini memiliki tujuan yang sama, yaitu mencari solusi atau kesimpulan, tetapi cara berpikirnya berbeda.\n\nMemahami perbedaan kedua metode ini sangat penting karena sering muncul dalam soal UAS, baik dalam bentuk teori maupun studi kasus.'
        },
        {
          type: 'pengertian',
          icon: '🧠',
          title: 'Apa itu Inference Engine?',
          content: 'Sebelum membahas Forward dan Backward Chaining, kita perlu memahami terlebih dahulu apa itu Inference Engine.\n\nInference Engine adalah bagian dari Sistem Pakar yang bertugas:\n• Membaca fakta yang diberikan pengguna.\n• Mencocokkan fakta tersebut dengan aturan (rule).\n• Menarik kesimpulan berdasarkan aturan yang sesuai.\n\nTanpa Inference Engine, Knowledge Base hanyalah kumpulan aturan yang tidak dapat digunakan untuk mengambil keputusan.'
        },
        {
          type: 'info',
          icon: '📋',
          title: 'Apa itu Rule (Aturan)?',
          content: 'Sistem Pakar bekerja menggunakan aturan IF–THEN.\n\nContoh:\nIF Demam AND Batuk THEN Influenza\n\nArtinya:\nJika seseorang mengalami demam dan batuk, maka kemungkinan penyakitnya adalah influenza.\n\nRule inilah yang nantinya diproses oleh Forward Chaining maupun Backward Chaining.'
        },
        {
          type: 'pengertian',
          icon: '➡️',
          title: 'Forward Chaining — Pengertian',
          content: 'Forward Chaining adalah metode penalaran yang dimulai dari fakta-fakta yang diketahui, kemudian mencari aturan yang sesuai hingga memperoleh suatu kesimpulan.\n\nMetode ini disebut juga Data Driven Reasoning, karena proses penalarannya dimulai dari data atau fakta yang dimiliki.\n\nSederhananya:\nFakta → Aturan → Kesimpulan'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Forward Chaining — Cara Kerja',
          content: 'Langkah-langkahnya sebagai berikut:\n\n1. Pengguna memasukkan fakta.\n2. Sistem mencari aturan yang sesuai.\n3. Jika syarat aturan terpenuhi, aturan dijalankan.\n4. Hasil aturan menjadi fakta baru.\n5. Proses diulang hingga tidak ada aturan lain yang dapat dijalankan atau tujuan telah tercapai.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Forward Chaining — Contoh',
          content: 'Misalkan terdapat aturan berikut.\n\nRule 1: IF Demam AND Batuk THEN Flu\nRule 2: IF Flu THEN Minum Obat\n\nFakta awal: Pasien mengalami Demam dan Batuk.\n\nLangkah 1: Sistem membaca fakta ✔ Demam ✔ Batuk\nLangkah 2: Rule 1 cocok → diperoleh fakta baru: Flu\nLangkah 3: Rule 2 dijalankan → Kesimpulan: Minum Obat\n\nUrutan berpikir:\nDemam + Batuk → Rule 1 → Flu → Rule 2 → Minum Obat\n\nSistem bergerak maju dari fakta menuju kesimpulan.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Forward Chaining — Analogi',
          content: 'Bayangkan kamu adalah seorang dokter.\n\nPasien datang dan mengatakan:\n• Saya demam.\n• Saya batuk.\n• Saya pilek.\n\nBerdasarkan gejala tersebut, kamu mulai berpikir: "Kalau begitu kemungkinan influenza."\n\nArtinya kamu memulai dari gejala, kemudian menuju diagnosis. Itulah Forward Chaining.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Forward Chaining — Kelebihan dan Kekurangan',
          checklist: [
            'KELEBIHAN: Cocok jika fakta awal sudah diketahui.',
            'KELEBIHAN: Mampu menghasilkan beberapa kesimpulan sekaligus.',
            'KELEBIHAN: Sangat baik untuk proses monitoring atau diagnosis.',
            'KELEBIHAN: Mudah diterapkan pada Sistem Pakar.',
            'KEKURANGAN: Jika aturan sangat banyak, proses pencarian menjadi lebih lama.',
            'KEKURANGAN: Kadang menghasilkan banyak kesimpulan yang tidak diperlukan.',
            'KEKURANGAN: Kurang efisien jika tujuan akhir sudah diketahui.'
          ]
        },
        {
          type: 'pengertian',
          icon: '⬅️',
          title: 'Backward Chaining — Pengertian',
          content: 'Backward Chaining adalah metode penalaran yang dimulai dari tujuan atau hipotesis, kemudian mencari fakta-fakta yang dapat membuktikan tujuan tersebut.\n\nMetode ini disebut juga Goal Driven Reasoning, karena penalarannya dimulai dari tujuan.\n\nSederhananya:\nTujuan → Aturan → Fakta'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Backward Chaining — Cara Kerja',
          content: 'Langkah-langkahnya:\n\n1. Sistem menentukan tujuan terlebih dahulu.\n2. Mencari aturan yang menghasilkan tujuan tersebut.\n3. Memeriksa apakah syarat aturan telah terpenuhi.\n4. Jika belum, sistem mencari fakta yang diperlukan.\n5. Jika semua syarat terpenuhi, tujuan dinyatakan benar.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Backward Chaining — Contoh',
          content: 'Misalkan aturan:\nRule 1: IF Demam AND Batuk THEN Flu\nRule 2: IF Flu THEN Minum Obat\n\nSistem ingin membuktikan: Apakah pasien mengalami Flu?\n\nLangkah 1: Sistem melihat Rule 1.\nLangkah 2: Untuk membuktikan Flu, sistem harus memastikan:\n• Apakah pasien demam?\n• Apakah pasien batuk?\n\nJika kedua jawaban "Ya", maka kesimpulan Flu bernilai benar.\n\nUrutan berpikir:\nFlu? → Rule 1 → Demam? Batuk?\n\nBerbeda dengan Forward Chaining, proses dimulai dari kesimpulan, kemudian mundur mencari fakta.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Backward Chaining — Analogi',
          content: 'Bayangkan seorang dokter sudah menduga pasien terkena influenza.\n\nDokter kemudian bertanya:\n• Apakah Anda demam?\n• Apakah Anda batuk?\n• Apakah Anda pilek?\n\nDokter memulai dari dugaan penyakit, kemudian mencari bukti. Inilah Backward Chaining.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Backward Chaining — Kelebihan dan Kekurangan',
          checklist: [
            'KELEBIHAN: Lebih efisien jika tujuan sudah diketahui.',
            'KELEBIHAN: Tidak perlu memeriksa semua aturan.',
            'KELEBIHAN: Proses lebih cepat untuk pembuktian hipotesis.',
            'KEKURANGAN: Kurang cocok jika fakta awal sangat banyak.',
            'KEKURANGAN: Tidak efektif jika harus mencari banyak kemungkinan kesimpulan sekaligus.',
            'KEKURANGAN: Membutuhkan tujuan yang jelas sejak awal.'
          ]
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbedaan Forward Chaining dan Backward Chaining',
          content: '| Aspek | Forward Chaining | Backward Chaining |\n|-------|-----------------|-------------------|\n| Awal proses | Dimulai dari fakta | Dimulai dari tujuan/hipotesis |\n| Nama lain | Data Driven Reasoning | Goal Driven Reasoning |\n| Arah penalaran | Bergerak menuju kesimpulan | Bergerak mencari bukti |\n| Cocok untuk | Diagnosis dari gejala | Membuktikan dugaan |\n| Hasil | Dapat menghasilkan banyak kesimpulan | Biasanya fokus pada satu tujuan |'
        },
        {
          type: 'contoh',
          icon: '🌧️',
          title: 'Contoh Perbandingan',
          content: 'Misalkan terdapat aturan:\nIF Hujan THEN Jalan Basah\n\nForward Chaining:\nFakta: Hujan → Sistem menyimpulkan: Jalan Basah\n\nBackward Chaining:\nTujuan: Apakah Jalan Basah? → Sistem bertanya: Apakah hujan? Jika ya, maka tujuan terbukti.'
        },
        {
          type: 'info',
          icon: '🎯',
          title: 'Kapan Menggunakan Forward Chaining?',
          content: 'Forward Chaining cocok digunakan ketika:\n• Banyak fakta telah diketahui.\n• Ingin mencari semua kemungkinan solusi.\n• Sistem diagnosis penyakit.\n• Monitoring industri.\n• Deteksi kerusakan mesin.\n\nContoh: Dokter menerima semua gejala pasien, kemudian menentukan penyakitnya.'
        },
        {
          type: 'info',
          icon: '🎯',
          title: 'Kapan Menggunakan Backward Chaining?',
          content: 'Backward Chaining cocok digunakan ketika:\n• Tujuan sudah diketahui.\n• Ingin membuktikan suatu hipotesis.\n• Konsultasi hukum.\n• Pemeriksaan kelayakan kredit.\n• Pemeriksaan syarat beasiswa.\n\nContoh: "Apakah mahasiswa ini layak menerima beasiswa?" Sistem kemudian memeriksa satu per satu syaratnya.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Penerapan dalam Kehidupan Sehari-hari',
          content: 'Forward Chaining:\n1. Diagnosis penyakit.\n2. Identifikasi kerusakan mobil.\n3. Monitoring jaringan komputer.\n4. Sistem deteksi hama tanaman.\n(Semua dimulai dari fakta yang diamati.)\n\nBackward Chaining:\n1. Pemeriksaan kelayakan pinjaman bank.\n2. Seleksi penerima beasiswa.\n3. Audit keuangan.\n4. Verifikasi persyaratan administrasi.\n(Semua dimulai dari tujuan yang ingin dibuktikan.)'
        },
        {
          type: 'contoh',
          icon: '✏️',
          title: 'Contoh Soal',
          content: 'Soal 1:\nApa perbedaan utama antara Forward Chaining dan Backward Chaining?\nJawaban: Forward Chaining memulai dari fakta menuju kesimpulan (Data Driven), sedangkan Backward Chaining memulai dari tujuan lalu mencari fakta pendukung (Goal Driven).\n\nSoal 2:\nDiketahui aturan: IF Demam AND Batuk THEN Flu. Jika diketahui pasien mengalami demam dan batuk, metode apakah yang digunakan untuk langsung menyimpulkan flu?\nJawaban: Forward Chaining, karena sistem memulai dari fakta yang sudah diketahui.\n\nSoal 3:\nJika sistem ingin membuktikan apakah pasien menderita influenza dengan cara memeriksa apakah pasien mengalami demam dan batuk, metode apa yang digunakan?\nJawaban: Backward Chaining, karena sistem memulai dari tujuan (influenza) lalu mencari fakta yang mendukung.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Forward Chaining adalah metode penalaran yang dimulai dari fakta menuju kesimpulan (Data Driven Reasoning).',
            'Backward Chaining adalah metode penalaran yang dimulai dari tujuan menuju fakta (Goal Driven Reasoning).',
            'Forward Chaining cocok jika banyak fakta diketahui dan ingin mencari semua kemungkinan kesimpulan.',
            'Backward Chaining cocok jika tujuan sudah jelas dan sistem hanya perlu membuktikan tujuan tersebut.',
            'Keduanya merupakan metode inferensi yang digunakan oleh Inference Engine pada Sistem Pakar berdasarkan aturan IF–THEN.'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Cara paling mudah mengingat perbedaannya adalah dengan kata kunci berikut:\n\nForward Chaining = Fakta → Kesimpulan → Data Driven\nBackward Chaining = Tujuan → Fakta → Goal Driven\n\nKalau dosen memberikan studi kasus, tanyakan pada diri sendiri:\n• Apakah sistem memulai dari gejala/fakta? → Forward Chaining.\n• Apakah sistem memulai dari dugaan atau tujuan yang ingin dibuktikan? → Backward Chaining.\n\nDengan mengingat pola ini, kamu biasanya bisa menjawab hampir semua soal tentang Forward Chaining dan Backward Chaining di UAS.'
        }
      ],
      flashcards: [
        { q: 'Apa itu Inference Engine dalam Sistem Pakar?', a: 'Bagian dari Sistem Pakar yang bertugas membaca fakta, mencocokkan fakta dengan aturan, dan menarik kesimpulan.' },
        { q: 'Apa itu Forward Chaining?', a: 'Metode penalaran yang dimulai dari fakta-fakta yang diketahui, kemudian mencari aturan yang sesuai hingga memperoleh kesimpulan (Data Driven Reasoning).' },
        { q: 'Apa itu Backward Chaining?', a: 'Metode penalaran yang dimulai dari tujuan atau hipotesis, kemudian mencari fakta-fakta yang dapat membuktikan tujuan tersebut (Goal Driven Reasoning).' },
        { q: 'Sebutkan langkah-langkah Forward Chaining!', a: '1. Input fakta, 2. Cari aturan sesuai, 3. Jika syarat terpenuhi jalankan aturan, 4. Hasil jadi fakta baru, 5. Ulangi hingga tidak ada aturan lain atau tujuan tercapai.' },
        { q: 'Sebutkan langkah-langkah Backward Chaining!', a: '1. Tentukan tujuan, 2. Cari aturan yang menghasilkan tujuan, 3. Periksa syarat aturan, 4. Jika belum terpenuhi cari fakta, 5. Jika semua terpenuhi tujuan dinyatakan benar.' },
        { q: 'Apa perbedaan utama Forward dan Backward Chaining?', a: 'Forward Chaining dimulai dari fakta ke kesimpulan (Data Driven), Backward Chaining dimulai dari tujuan ke fakta (Goal Driven).' },
        { q: 'Kapan sebaiknya menggunakan Forward Chaining?', a: 'Ketika banyak fakta diketahui, ingin mencari semua kemungkinan solusi, diagnosis penyakit, monitoring, dan deteksi kerusakan.' },
        { q: 'Kapan sebaiknya menggunakan Backward Chaining?', a: 'Ketika tujuan sudah diketahui, ingin membuktikan hipotesis, konsultasi hukum, pemeriksaan kelayakan kredit/beasiswa.' },
        { q: 'Apa kelebihan Forward Chaining?', a: 'Cocok jika fakta awal diketahui, mampu menghasilkan beberapa kesimpulan, baik untuk diagnosis/monitoring, mudah diterapkan.' },
        { q: 'Apa kelebihan Backward Chaining?', a: 'Lebih efisien jika tujuan diketahui, tidak perlu periksa semua aturan, proses lebih cepat untuk pembuktian hipotesis.' },
        { q: 'Apa kekurangan Forward Chaining?', a: 'Jika aturan banyak, proses lama; kadang menghasilkan kesimpulan tidak diperlukan; kurang efisien jika tujuan sudah diketahui.' },
        { q: 'Apa kekurangan Backward Chaining?', a: 'Kurang cocok jika fakta awal banyak; tidak efektif untuk banyak kesimpulan; butuh tujuan jelas sejak awal.' }
      ],
      quiz: [
        { q: 'Apa tugas utama Inference Engine dalam Sistem Pakar?', options: ['Menyimpan aturan', 'Mencocokkan fakta dengan aturan dan menarik kesimpulan', 'Menampilkan hasil diagnosis', 'Memperoleh pengetahuan dari pakar'], answer: 1, explanation: 'Inference Engine membaca fakta, mencocokkan dengan aturan, dan menarik kesimpulan.' },
        { q: 'Forward Chaining disebut juga...', options: ['Goal Driven Reasoning', 'Data Driven Reasoning', 'Backward Reasoning', 'Rule Based Reasoning'], answer: 1, explanation: 'Forward Chaining disebut Data Driven Reasoning karena dimulai dari data/fakta.' },
        { q: 'Backward Chaining disebut juga...', options: ['Data Driven Reasoning', 'Forward Reasoning', 'Goal Driven Reasoning', 'Fact Based Reasoning'], answer: 2, explanation: 'Backward Chaining disebut Goal Driven Reasoning karena dimulai dari tujuan.' },
        { q: 'Dalam Forward Chaining, proses penalaran dimulai dari...', options: ['Tujuan', 'Hipotesis', 'Fakta', 'Kesimpulan'], answer: 2, explanation: 'Forward Chaining dimulai dari fakta yang diketahui, kemudian mencari aturan yang sesuai menuju kesimpulan.' },
        { q: 'Dalam Backward Chaining, proses penalaran dimulai dari...', options: ['Fakta', 'Gejala', 'Aturan', 'Tujuan atau hipotesis'], answer: 3, explanation: 'Backward Chaining dimulai dari tujuan/hipotesis, kemudian mencari fakta yang mendukung.' },
        { q: 'Jika seorang dokter menerima gejala pasien lalu menentukan diagnosis, metode yang digunakan adalah...', options: ['Backward Chaining', 'Forward Chaining', 'Random Chaining', 'Reverse Chaining'], answer: 1, explanation: 'Dokter memulai dari gejala (fakta) menuju diagnosis (kesimpulan) — Forward Chaining.' },
        { q: 'Jika seorang dokter sudah menduga penyakit tertentu lalu memeriksa gejala untuk membuktikannya, metode yang digunakan adalah...', options: ['Forward Chaining', 'Backward Chaining', 'Data Mining', 'Deep Learning'], answer: 1, explanation: 'Dokter memulai dari dugaan (tujuan) lalu mencari bukti (fakta) — Backward Chaining.' },
        { q: 'Manakah yang merupakan kelebihan Forward Chaining?', options: ['Lebih efisien jika tujuan diketahui', 'Tidak perlu periksa semua aturan', 'Mampu menghasilkan beberapa kesimpulan sekaligus', 'Cocok untuk membuktikan hipotesis'], answer: 2, explanation: 'Forward Chaining mampu menghasilkan beberapa kesimpulan sekaligus. Opsi lainnya adalah kelebihan Backward Chaining.' },
        { q: 'Manakah yang merupakan kelebihan Backward Chaining?', options: ['Cocok jika fakta awal diketahui', 'Mampu menghasilkan banyak kesimpulan', 'Proses lebih cepat untuk pembuktian hipotesis', 'Baik untuk monitoring'], answer: 2, explanation: 'Backward Chaining lebih cepat untuk pembuktian hipotesis karena fokus pada satu tujuan.' },
        { q: 'Manakah yang merupakan kekurangan Forward Chaining?', options: ['Membutuhkan tujuan yang jelas sejak awal', 'Kurang cocok jika fakta awal banyak', 'Jika aturan banyak, proses lama', 'Tidak efektif untuk banyak kesimpulan'], answer: 2, explanation: 'Forward Chaining bisa menjadi lambat jika aturan sangat banyak karena harus memeriksa semua aturan.' },
        { q: 'Manakah yang merupakan kekurangan Backward Chaining?', options: ['Kadang menghasilkan kesimpulan tidak perlu', 'Kurang efisien jika tujuan sudah diketahui', 'Kurang cocok jika fakta awal sangat banyak', 'Sulit diterapkan pada Sistem Pakar'], answer: 2, explanation: 'Backward Chaining kurang cocok jika fakta awal sangat banyak karena harus mencari fakta yang relevan.' },
        { q: 'Diketahui aturan: IF Hujan THEN Jalan Basah. Sistem ingin membuktikan "Jalan Basah" dengan mengecek apakah hujan. Metode apa yang digunakan?', options: ['Forward Chaining', 'Backward Chaining', 'Both', 'Neither'], answer: 1, explanation: 'Sistem memulai dari tujuan (Jalan Basah) lalu mencari fakta (Hujan) — Backward Chaining.' }
      ]
    },
    {
      id: 'knowledge-acquisition-bottleneck',
      title: 'Knowledge Acquisition Bottleneck dan Brittleness',
      icon: '🔻',
      color: 'purple',
      short: 'Bottleneck',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Kelemahan Sistem Pakar',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Pada materi sebelumnya kita telah mempelajari bahwa Sistem Pakar (Expert System) bekerja menggunakan pengetahuan yang berasal dari seorang ahli (pakar). Pengetahuan tersebut kemudian disimpan ke dalam Knowledge Base agar komputer dapat memberikan solusi layaknya seorang pakar.\n\nNamun, dalam praktiknya, membangun Sistem Pakar bukanlah hal yang mudah. Salah satu tantangan terbesar adalah bagaimana memperoleh pengetahuan dari seorang pakar dan memasukkannya ke dalam sistem. Selain itu, Sistem Pakar juga memiliki kelemahan ketika menghadapi kasus baru yang belum pernah diprogram sebelumnya.\n\nDua masalah utama tersebut dikenal sebagai:\n• Knowledge Acquisition Bottleneck\n• Brittleness\n\nKedua istilah ini sering dianggap sebagai kelemahan terbesar dari Sistem Pakar klasik.'
        },
        {
          type: 'pengertian',
          icon: '📚',
          title: 'Apa itu Knowledge Acquisition?',
          content: 'Sebelum memahami Knowledge Acquisition Bottleneck, kita perlu mengetahui terlebih dahulu apa itu Knowledge Acquisition.\n\nKnowledge Acquisition adalah proses memperoleh, mengumpulkan, dan mengubah pengetahuan dari seorang pakar menjadi bentuk yang dapat dipahami oleh komputer.\n\nSumber pengetahuan bisa berasal dari:\n• wawancara dengan pakar,\n• observasi langsung,\n• buku,\n• jurnal ilmiah,\n• standar operasional (SOP),\n• pengalaman kerja pakar.\n\nSetelah dikumpulkan, pengetahuan tersebut diterjemahkan menjadi aturan (rule) seperti:\nIF Demam AND Batuk THEN Influenza\n\nAturan inilah yang nantinya disimpan di dalam Knowledge Base.'
        },
        {
          type: 'info',
          icon: '🍾',
          title: 'Apa itu Knowledge Acquisition Bottleneck?',
          content: 'Knowledge Acquisition Bottleneck adalah kondisi ketika proses memperoleh dan memasukkan pengetahuan dari pakar ke dalam sistem menjadi sangat sulit, lambat, dan membutuhkan banyak waktu serta biaya.\n\nIstilah bottleneck berarti "leher botol", yaitu bagian yang sempit sehingga menghambat aliran. Dalam konteks Sistem Pakar, hambatan tersebut terjadi saat proses pengumpulan pengetahuan.\n\nDengan kata lain: Semakin sulit memperoleh pengetahuan dari pakar, semakin lambat pula pembangunan Sistem Pakar.'
        },
        {
          type: 'info',
          icon: '❓',
          title: 'Mengapa Terjadi Knowledge Acquisition Bottleneck? — 1. Pengetahuan Sulit Dijelaskan',
          content: 'Tidak semua pakar mampu menjelaskan bagaimana mereka mengambil keputusan.\n\nMisalnya seorang dokter berpengalaman. Ketika ditanya "Mengapa Anda yakin pasien ini terkena pneumonia?" Dokter mungkin menjawab "Saya sudah terbiasa."\n\nPadahal komputer membutuhkan alasan yang sangat rinci, seperti:\n• suhu tubuh,\n• hasil laboratorium,\n• foto rontgen,\n• riwayat penyakit,\n• usia pasien.\n\nSemua itu harus dijelaskan satu per satu.'
        },
        {
          type: 'info',
          icon: '⏰',
          title: 'Mengapa Terjadi? — 2. Waktu Pakar Terbatas',
          content: 'Pakar biasanya memiliki pekerjaan utama.\n\nContohnya:\n• dokter melayani pasien,\n• dosen mengajar,\n• mekanik memperbaiki kendaraan.\n\nMereka tidak selalu memiliki waktu untuk diwawancarai selama berjam-jam demi membangun Sistem Pakar.'
        },
        {
          type: 'info',
          icon: '📊',
          title: 'Mengapa Terjadi? — 3. Pengetahuan Sangat Banyak',
          content: 'Misalnya ingin membuat Sistem Pakar untuk diagnosis penyakit. Terdapat:\n• ribuan penyakit,\n• puluhan ribu gejala,\n• berbagai kombinasi kondisi pasien.\n\nSemua aturan tersebut harus dimasukkan secara manual. Ini membutuhkan waktu yang sangat lama.'
        },
        {
          type: 'info',
          icon: '🔄',
          title: 'Mengapa Terjadi? — 4. Pengetahuan Selalu Berkembang',
          content: 'Ilmu pengetahuan tidak pernah berhenti berkembang.\n\nContohnya: saat muncul penyakit baru, aturan lama mungkin sudah tidak relevan. Knowledge Base harus diperbarui kembali. Jika tidak diperbarui, hasil diagnosis bisa menjadi salah.'
        },
        {
          type: 'info',
          icon: '🧩',
          title: 'Mengapa Terjadi? — 5. Sulit Mengubah Pengetahuan Menjadi Aturan',
          content: 'Manusia sering berpikir secara intuitif, sedangkan komputer membutuhkan aturan yang sangat jelas.\n\nMisalnya dokter mengatakan "Pasien ini kemungkinan besar terkena flu." Komputer tidak memahami kata "kemungkinan", "mungkin", atau "agak".\n\nKomputer membutuhkan aturan yang pasti, seperti:\nIF Demam AND Batuk AND Pilek THEN Flu'
        },
        {
          type: 'info',
          icon: '⚠️',
          title: 'Dampak Knowledge Acquisition Bottleneck',
          content: 'Jika masalah ini tidak diatasi, maka:\n• pembangunan Sistem Pakar menjadi sangat lama,\n• biaya pengembangan meningkat,\n• jumlah aturan menjadi sedikit,\n• sistem menjadi kurang lengkap,\n• kualitas keputusan menurun.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Contoh Kasus Knowledge Acquisition Bottleneck',
          content: 'Misalnya sebuah rumah sakit ingin membuat Sistem Pakar diagnosis penyakit.\n\nTim pengembang harus:\n• mewawancarai dokter spesialis,\n• membaca buku kedokteran,\n• mempelajari jurnal terbaru,\n• menulis ribuan aturan IF–THEN.\n\nProses tersebut bisa memakan waktu berbulan-bulan bahkan bertahun-tahun. Inilah contoh nyata Knowledge Acquisition Bottleneck.'
        },
        {
          type: 'pengertian',
          icon: '💔',
          title: 'Apa itu Brittleness?',
          content: 'Selain sulit dibuat, Sistem Pakar juga memiliki kelemahan lain, yaitu Brittleness.\n\nBrittleness adalah kondisi ketika Sistem Pakar tidak mampu menangani kasus baru atau kondisi yang belum terdapat di dalam Knowledge Base.\n\nKata brittle berarti "rapuh" atau "mudah patah".\n\nArtinya:\nSistem bekerja sangat baik untuk kasus yang sudah diketahui. Namun ketika menghadapi kasus baru, sistem menjadi bingung atau gagal memberikan jawaban.'
        },
        {
          type: 'info',
          icon: '❓',
          title: 'Mengapa Brittleness Terjadi?',
          content: 'Karena Sistem Pakar hanya mengetahui aturan yang telah dimasukkan.\n\nSistem tidak mampu belajar sendiri. Jika aturan tidak tersedia, maka sistem tidak dapat mengambil keputusan.'
        },
        {
          type: 'contoh',
          icon: '🦠',
          title: 'Contoh Brittleness',
          content: 'Misalnya terdapat aturan: IF Demam AND Batuk THEN Flu\n\nSuatu hari datang pasien dengan gejala: Demam, Batuk, dan Kehilangan penciuman. Padahal aturan tersebut belum pernah dibuat.\n\nSistem mungkin tetap menyimpulkan Flu, padahal sebenarnya pasien terkena COVID-19. Karena sistem tidak mengenal aturan baru, hasilnya menjadi salah.'
        },
        {
          type: 'contoh',
          icon: '🔧',
          title: 'Contoh Brittleness Lain',
          content: 'Misalnya Sistem Pakar bengkel memiliki aturan: IF Mesin Tidak Menyala AND Lampu Redup THEN Aki Rusak\n\nNamun ternyata penyebabnya adalah sensor elektronik rusak. Karena aturan tersebut belum ada, sistem tidak mampu memberikan diagnosis yang benar.'
        },
        {
          type: 'info',
          icon: '⚠️',
          title: 'Dampak Brittleness',
          content: 'Akibat Brittleness:\n• sistem gagal mendiagnosis kasus baru,\n• hasil keputusan menjadi kurang akurat,\n• sistem tidak fleksibel,\n• pengguna kehilangan kepercayaan terhadap sistem.'
        },
        {
          type: 'info',
          icon: '🔗',
          title: 'Hubungan Knowledge Acquisition Bottleneck dan Brittleness',
          content: 'Kedua masalah ini sebenarnya saling berkaitan.\n\nKnowledge Acquisition Bottleneck menyebabkan sedikit aturan berhasil dibuat. Karena aturan sedikit, maka banyak kasus tidak dikenali. Akibatnya muncul Brittleness.\n\nJadi:\nKnowledge Acquisition Bottleneck → Knowledge Base tidak lengkap → Brittleness.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Cara Mengatasi Knowledge Acquisition Bottleneck',
          content: 'Beberapa solusi yang dapat dilakukan antara lain:\n\n1. Melibatkan Banyak Pakar — jangan hanya bergantung pada satu orang ahli.\n\n2. Menggunakan Dokumen Digital — pengetahuan tidak hanya berasal dari wawancara, tetapi juga dari jurnal, buku, database, SOP.\n\n3. Memperbarui Knowledge Base Secara Berkala — aturan harus selalu diperbarui agar mengikuti perkembangan ilmu pengetahuan.\n\n4. Menggunakan Machine Learning — ML mampu mempelajari pola dari data sehingga tidak perlu seluruh aturan dibuat secara manual.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Cara Mengurangi Brittleness',
          content: 'Beberapa cara yang dapat dilakukan:\n• memperbanyak aturan,\n• memperbarui Knowledge Base,\n• mengombinasikan Sistem Pakar dengan Machine Learning,\n• menggunakan data terbaru,\n• melakukan evaluasi sistem secara berkala.'
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbedaan Knowledge Acquisition Bottleneck dan Brittleness',
          content: '| Aspek | Knowledge Acquisition Bottleneck | Brittleness |\n|-------|----------------------------------|-------------|\n| Fokus masalah | Saat mengumpulkan pengetahuan | Saat sistem digunakan |\n| Tahap | Terjadi pada tahap pengembangan | Terjadi pada tahap penggunaan |\n| Penyebab | Sulit memperoleh pengetahuan pakar | Aturan tidak lengkap |\n| Dampak | Menghambat pembangunan sistem | Menghambat kemampuan sistem menangani kasus baru |'
        },
        {
          type: 'contoh',
          icon: '✏️',
          title: 'Contoh Soal',
          content: 'Soal 1:\nMengapa proses Knowledge Acquisition sering disebut bottleneck?\nJawaban: Karena proses memperoleh pengetahuan dari pakar membutuhkan waktu, biaya, dan tenaga yang besar sehingga menjadi hambatan utama dalam pembangunan Sistem Pakar.\n\nSoal 2:\nApa yang dimaksud Brittleness?\nJawaban: Brittleness adalah kelemahan Sistem Pakar yang menyebabkan sistem tidak mampu menangani kasus baru atau kasus yang belum memiliki aturan di dalam Knowledge Base.\n\nSoal 3:\nMengapa Machine Learning dapat mengurangi masalah Knowledge Acquisition Bottleneck?\nJawaban: Karena Machine Learning mempelajari pola langsung dari data sehingga tidak semua pengetahuan harus diperoleh dan ditulis secara manual oleh pakar dalam bentuk aturan IF–THEN.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Knowledge Acquisition adalah proses memperoleh pengetahuan dari pakar untuk dimasukkan ke dalam Knowledge Base.',
            'Knowledge Acquisition Bottleneck adalah hambatan dalam proses memperoleh dan mengubah pengetahuan pakar menjadi aturan yang dapat dipahami komputer.',
            'Penyebabnya antara lain pengetahuan pakar sulit dijelaskan, waktu pakar terbatas, pengetahuan sangat banyak, dan ilmu terus berkembang.',
            'Brittleness adalah kelemahan Sistem Pakar yang membuat sistem tidak mampu menangani kasus baru karena hanya bergantung pada aturan yang telah ada.',
            'Kedua masalah ini merupakan kelemahan utama Sistem Pakar klasik dan menjadi salah satu alasan berkembangnya pendekatan AI modern seperti Machine Learning.'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Agar mudah mengingat perbedaannya, gunakan kalimat berikut:\n\nKnowledge Acquisition Bottleneck = Sulit mengumpulkan ilmu dari pakar.\nBrittleness = Sistem rapuh saat menghadapi kasus baru.\n\nIngat juga hubungan keduanya:\nKnowledge Acquisition Bottleneck → Knowledge Base tidak lengkap → Brittleness.\n\nKalau kamu memahami alur ini beserta contohnya, biasanya kamu sudah bisa menjawab soal analisis mengenai kelemahan Sistem Pakar dengan baik.'
        }
      ],
      flashcards: [
        { q: 'Apa itu Knowledge Acquisition?', a: 'Proses memperoleh, mengumpulkan, dan mengubah pengetahuan dari seorang pakar menjadi bentuk yang dapat dipahami oleh komputer.' },
        { q: 'Apa itu Knowledge Acquisition Bottleneck?', a: 'Kondisi ketika proses memperoleh dan memasukkan pengetahuan dari pakar ke dalam sistem menjadi sangat sulit, lambat, dan membutuhkan banyak waktu serta biaya.' },
        { q: 'Apa itu Brittleness dalam Sistem Pakar?', a: 'Kondisi ketika Sistem Pakar tidak mampu menangani kasus baru atau kondisi yang belum terdapat di dalam Knowledge Base.' },
        { q: 'Sebutkan 3 penyebab Knowledge Acquisition Bottleneck!', a: '1. Pengetahuan pakar sulit dijelaskan, 2. Waktu pakar terbatas, 3. Pengetahuan sangat banyak dan selalu berkembang.' },
        { q: 'Mengapa pengetahuan pakar sulit dijelaskan?', a: 'Karena pakar sering berpikir secara intuitif ("saya sudah terbiasa") dan tidak mampu merinci alasan pengambilan keputusan secara detail.' },
        { q: 'Apa dampak Knowledge Acquisition Bottleneck?', a: 'Pembangunan sistem lambat, biaya meningkat, aturan sedikit, sistem kurang lengkap, kualitas keputusan menurun.' },
        { q: 'Mengapa Brittleness terjadi?', a: 'Karena Sistem Pakar hanya mengetahui aturan yang telah dimasukkan dan tidak mampu belajar sendiri. Jika aturan tidak tersedia, sistem tidak dapat mengambil keputusan.' },
        { q: 'Apa dampak Brittleness?', a: 'Sistem gagal mendiagnosis kasus baru, hasil keputusan kurang akurat, sistem tidak fleksibel, pengguna kehilangan kepercayaan.' },
        { q: 'Apa hubungan Knowledge Acquisition Bottleneck dan Brittleness?', a: 'Knowledge Acquisition Bottleneck → Knowledge Base tidak lengkap → Brittleness. Keduanya saling berkaitan.' },
        { q: 'Sebutkan 2 cara mengatasi Knowledge Acquisition Bottleneck!', a: '1. Melibatkan banyak pakar, 2. Menggunakan Machine Learning agar tidak semua aturan harus dibuat manual.' },
        { q: 'Apa perbedaan utama Knowledge Acquisition Bottleneck dan Brittleness?', a: 'Bottleneck adalah masalah saat mengumpulkan pengetahuan (tahap pengembangan), sedangkan Brittleness adalah masalah saat sistem digunakan (tahap penggunaan).' },
        { q: 'Mengapa Machine Learning dapat mengurangi Knowledge Acquisition Bottleneck?', a: 'Karena ML mempelajari pola langsung dari data, sehingga tidak semua pengetahuan harus diperoleh dan ditulis manual dalam aturan IF–THEN.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan Knowledge Acquisition?', options: ['Proses menyimpan aturan ke dalam database', 'Proses memperoleh pengetahuan dari pakar untuk dimasukkan ke sistem', 'Proses menampilkan hasil diagnosis', 'Proses mencocokkan fakta dengan aturan'], answer: 1, explanation: 'Knowledge Acquisition adalah proses memperoleh, mengumpulkan, dan mengubah pengetahuan dari pakar menjadi bentuk yang dapat dipahami komputer.' },
        { q: 'Knowledge Acquisition Bottleneck berarti...', options: ['Sistem bekerja dengan cepat', 'Proses memperoleh pengetahuan menjadi hambatan', 'Pengetahuan pakar mudah diperoleh', 'Sistem mampu belajar sendiri'], answer: 1, explanation: 'Bottleneck berarti "leher botol" — bagian yang sempit sehingga menghambat aliran. Dalam konteks ini, proses memperoleh pengetahuan menjadi hambatan utama.' },
        { q: 'Berikut adalah penyebab Knowledge Acquisition Bottleneck, KECUALI:', options: ['Pengetahuan pakar sulit dijelaskan', 'Waktu pakar sangat terbatas', 'Sistem dapat belajar dari pengalaman', 'Pengetahuan selalu berkembang'], answer: 2, explanation: 'Sistem Pakar klasik tidak dapat belajar dari pengalaman — itu adalah kekurangannya, bukan penyebab bottleneck.' },
        { q: 'Mengapa seorang dokter sulit menjelaskan pengetahuannya kepada sistem?', options: ['Karena dokter tidak pintar', 'Karena dokter berpikir secara intuitif', 'Karena komputer tidak bisa membaca', 'Karena aturan IF-THEN terlalu rumit'], answer: 1, explanation: 'Pakar sering berpikir secara intuitif ("saya sudah terbiasa") sehingga sulit merinci alasan keputusan secara detail.' },
        { q: 'Apa dampak dari Knowledge Acquisition Bottleneck?', options: ['Sistem menjadi lebih cepat', 'Biaya pengembangan menurun', 'Jumlah aturan menjadi sedikit', 'Sistem dapat belajar sendiri'], answer: 2, explanation: 'Karena sulit memperoleh pengetahuan, jumlah aturan yang berhasil dibuat menjadi sedikit.' },
        { q: 'Apa yang dimaksud dengan Brittleness dalam Sistem Pakar?', options: ['Sistem sangat kuat dan kokoh', 'Sistem tidak mampu menangani kasus baru', 'Sistem dapat belajar dari data', 'Sistem bekerja sangat cepat'], answer: 1, explanation: 'Brittle berarti "rapuh" — sistem tidak mampu menangani kasus baru di luar aturan yang ada.' },
        { q: 'Mengapa Brittleness terjadi pada Sistem Pakar?', options: ['Karena sistem terlalu pintar', 'Karena sistem hanya mengetahui aturan yang dimasukkan dan tidak bisa belajar sendiri', 'Karena sistem menggunakan terlalu banyak aturan', 'Karena sistem membutuhkan banyak data'], answer: 1, explanation: 'Sistem Pakar tidak mampu belajar sendiri. Jika aturan tidak tersedia, sistem tidak dapat mengambil keputusan.' },
        { q: 'Apa dampak Brittleness?', options: ['Sistem menjadi lebih fleksibel', 'Pengguna lebih percaya pada sistem', 'Sistem gagal mendiagnosis kasus baru', 'Sistem dapat belajar dari kesalahan'], answer: 2, explanation: 'Brittleness menyebabkan sistem gagal mendiagnosis kasus baru karena aturan untuk kasus tersebut belum ada.' },
        { q: 'Apa hubungan Knowledge Acquisition Bottleneck dan Brittleness?', options: ['Tidak ada hubungan', 'Bottleneck menyebabkan Brittleness', 'Brittleness menyebabkan Bottleneck', 'Keduanya sama'], answer: 1, explanation: 'Bottleneck menyebabkan sedikit aturan → Knowledge Base tidak lengkap → Brittleness (sistem tidak bisa menangani kasus baru).' },
        { q: 'Bagaimana Machine Learning dapat mengatasi Knowledge Acquisition Bottleneck?', options: ['Dengan membuat aturan lebih banyak', 'Dengan mempelajari pola dari data sehingga tidak semua aturan harus dibuat manual', 'Dengan mengganti semua aturan', 'Dengan mempercepat wawancara pakar'], answer: 1, explanation: 'ML mempelajari pola langsung dari data, mengurangi ketergantungan pada aturan manual dari pakar.' },
        { q: 'Pada tahap apa Knowledge Acquisition Bottleneck terjadi?', options: ['Tahap penggunaan', 'Tahap pengembangan', 'Tahap evaluasi', 'Tahap pemeliharaan'], answer: 1, explanation: 'Bottleneck terjadi pada tahap pengembangan saat mengumpulkan pengetahuan dari pakar.' },
        { q: 'Pada tahap apa Brittleness terjadi?', options: ['Tahap pengembangan', 'Tahap penggunaan', 'Tahap perencanaan', 'Tahap desain'], answer: 1, explanation: 'Brittleness terjadi pada tahap penggunaan ketika sistem menghadapi kasus baru yang belum ada aturannya.' }
      ]
    },
    {
      id: 'ml-vs-ai-klasik',
      title: 'Machine Learning vs AI Klasik',
      icon: '🤖',
      color: 'purple',
      short: 'ML vs AI',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Perbandingan AI Klasik dan Machine Learning',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Artificial Intelligence (AI) atau Kecerdasan Buatan adalah cabang ilmu komputer yang bertujuan membuat mesin mampu melakukan tugas yang biasanya membutuhkan kecerdasan manusia, seperti berpikir, mengambil keputusan, mengenali pola, memahami bahasa, hingga belajar dari pengalaman.\n\nSeiring perkembangan teknologi, AI berkembang menjadi dua pendekatan utama, yaitu:\n• AI Klasik (Classical AI / Symbolic AI)\n• Machine Learning (ML)\n\nKeduanya sama-sama termasuk Artificial Intelligence, tetapi memiliki cara kerja yang sangat berbeda.\n\nAI Klasik bekerja menggunakan aturan (rules) yang dibuat oleh manusia, sedangkan Machine Learning bekerja dengan belajar dari data.\n\nMemahami perbedaan kedua pendekatan ini sangat penting karena menjadi dasar perkembangan AI modern.'
        },
        {
          type: 'pengertian',
          icon: '🧠',
          title: 'Apa itu Artificial Intelligence (AI)?',
          content: 'Artificial Intelligence (AI) adalah teknologi yang memungkinkan komputer melakukan tugas yang biasanya memerlukan kecerdasan manusia.\n\nContohnya:\n• mengenali wajah,\n• bermain catur,\n• menerjemahkan bahasa,\n• menjawab pertanyaan,\n• mendiagnosis penyakit,\n• mengendarai mobil tanpa sopir.\n\nNamun, AI tidak selalu bekerja dengan cara yang sama. Ada AI yang bekerja menggunakan aturan tetap, dan ada AI yang mampu belajar sendiri dari data.'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Apa itu AI Klasik?',
          content: 'AI Klasik adalah pendekatan AI yang menggunakan aturan logika (rule-based) yang dibuat secara manual oleh manusia.\n\nAturan tersebut biasanya berbentuk:\nIF kondisi THEN aksi\n\nKomputer hanya menjalankan aturan yang telah diberikan. Komputer tidak belajar dan tidak membuat aturan baru.'
        },
        {
          type: 'info',
          icon: '🔄',
          title: 'Cara Kerja AI Klasik',
          content: 'Alur kerja AI Klasik:\n\nPakar → Membuat aturan → Knowledge Base → Inference Engine → Keputusan\n\nArtinya:\n1. Pakar membuat aturan.\n2. Aturan disimpan dalam Knowledge Base.\n3. Komputer mencocokkan fakta dengan aturan.\n4. Sistem menghasilkan keputusan.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Contoh AI Klasik',
          content: 'Misalnya terdapat aturan:\nIF Demam AND Batuk THEN Influenza\n\nJika pasien mengalami Demam dan Batuk, maka sistem langsung menyimpulkan Influenza.\n\nSistem tidak pernah belajar bahwa ada penyakit lain dengan gejala yang mirip.'
        },
        {
          type: 'info',
          icon: '📋',
          title: 'Ciri-Ciri AI Klasik',
          content: '• Menggunakan aturan IF–THEN.\n• Pengetahuan berasal dari pakar.\n• Tidak belajar dari pengalaman.\n• Semua aturan dibuat secara manual.\n• Cocok untuk masalah yang memiliki aturan jelas.'
        },
        {
          type: 'pengertian',
          icon: '📊',
          title: 'Apa itu Machine Learning?',
          content: 'Machine Learning (ML) adalah cabang Artificial Intelligence yang memungkinkan komputer belajar dari data, menemukan pola, dan membuat keputusan tanpa harus diprogram dengan aturan satu per satu.\n\nDengan kata lain: Pada Machine Learning, manusia tidak lagi menuliskan semua aturan. Komputer mempelajari aturan tersebut sendiri dari data.'
        },
        {
          type: 'info',
          icon: '🔄',
          title: 'Cara Kerja Machine Learning',
          content: 'Secara sederhana:\n\nData → Algoritma Machine Learning → Belajar Pola → Model → Prediksi\n\nBerbeda dengan AI Klasik yang dimulai dari aturan, Machine Learning dimulai dari kumpulan data.'
        },
        {
          type: 'contoh',
          icon: '🐱',
          title: 'Contoh Machine Learning',
          content: 'Misalnya ingin membuat sistem pendeteksi kucing.\n\nAI Klasik:\nProgrammer harus membuat aturan seperti:\nIF Telinga Lancip AND Memiliki Kumis AND Berkaki Empat THEN Kucing\nMasalahnya: tidak semua kucing memiliki bentuk yang sama.\n\nMachine Learning:\nKita cukup memberikan 10.000 gambar kucing dan 10.000 gambar bukan kucing. Komputer mempelajari sendiri pola dari gambar tersebut. Ketika melihat gambar baru, komputer dapat mengatakan "Ini kemungkinan besar adalah kucing." Tanpa programmer menuliskan aturan secara manual.'
        },
        {
          type: 'info',
          icon: '❓',
          title: 'Mengapa Machine Learning Dikembangkan?',
          content: 'AI Klasik memiliki beberapa kelemahan:\n• aturan harus dibuat satu per satu,\n• sulit menangani data yang sangat besar,\n• sulit menghadapi kondisi baru,\n• tidak dapat belajar sendiri.\n\nMachine Learning hadir untuk mengatasi kelemahan tersebut.'
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbedaan AI Klasik dan Machine Learning',
          content: '| Aspek | AI Klasik | Machine Learning |\n|-------|-----------|-----------------|\n| Pendekatan | Menggunakan aturan (rule) | Menggunakan data |\n| Pembuat aturan | Aturan dibuat manusia | Pola dipelajari komputer |\n| Kemampuan belajar | Tidak belajar sendiri | Belajar dari data |\n| Pembaruan | Sulit diperbarui | Mudah diperbarui dengan data baru |\n| Cocok untuk | Masalah sederhana | Masalah kompleks |\n| Dasar | Berbasis logika | Berbasis statistik dan algoritma |'
        },
        {
          type: 'info',
          icon: '🍎',
          title: 'Analogi Kehidupan Sehari-hari',
          content: 'Bayangkan kita ingin mengajari seorang anak mengenali buah apel.\n\nAI Klasik:\nKita memberi aturan: warna merah, bentuk bulat, ada tangkai. Anak mengenali apel berdasarkan aturan tersebut. Jika ada apel hijau, anak mungkin mengatakan "Ini bukan apel." Karena aturan hanya menyebutkan warna merah.\n\nMachine Learning:\nAnak diperlihatkan ribuan gambar apel merah, apel hijau, apel kuning. Lama-kelamaan anak memahami sendiri ciri-ciri apel. Tanpa harus menghafal aturan satu per satu.'
        },
        {
          type: 'contoh',
          icon: '🏥',
          title: 'Contoh Kasus 1 — Diagnosis Penyakit',
          content: 'AI Klasik:\nIF Demam AND Batuk THEN Flu\nJika gejalanya berubah sedikit, aturan harus diperbarui.\n\nMachine Learning:\nDiberikan 100.000 data pasien. Komputer mempelajari hubungan antara gejala dan penyakit. Semakin banyak data, semakin baik hasil prediksi.'
        },
        {
          type: 'contoh',
          icon: '📧',
          title: 'Contoh Kasus 2 — Filter Spam Email',
          content: 'AI Klasik:\nHarus membuat aturan seperti: IF Ada Kata "Gratis" THEN Spam\nMasalahnya: Spam selalu berubah.\n\nMachine Learning:\nBelajar dari jutaan email, sehingga mampu mengenali spam baru.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Kelebihan dan Kekurangan AI Klasik',
          checklist: [
            'KELEBIHAN: Mudah dipahami.',
            'KELEBIHAN: Keputusan dapat dijelaskan.',
            'KELEBIHAN: Cepat jika aturan sedikit.',
            'KELEBIHAN: Cocok untuk Sistem Pakar.',
            'KEKURANGAN: Tidak dapat belajar.',
            'KEKURANGAN: Sulit diperbarui.',
            'KEKURANGAN: Bergantung pada pakar.',
            'KEKURANGAN: Sulit menangani data besar.',
            'KEKURANGAN: Memiliki masalah Knowledge Acquisition Bottleneck dan Brittleness.'
          ]
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Kelebihan dan Kekurangan Machine Learning',
          checklist: [
            'KELEBIHAN: Belajar otomatis dari data.',
            'KELEBIHAN: Dapat menangani data yang sangat besar.',
            'KELEBIHAN: Akurasi meningkat jika data bertambah.',
            'KELEBIHAN: Lebih fleksibel.',
            'KELEBIHAN: Dapat menemukan pola yang sulit dibuat secara manual.',
            'KEKURANGAN: Membutuhkan data yang banyak dan berkualitas.',
            'KEKURANGAN: Proses pelatihan (training) bisa memakan waktu lama.',
            'KEKURANGAN: Membutuhkan komputasi yang lebih besar.',
            'KEKURANGAN: Hasil prediksi tidak selalu mudah dijelaskan (black box).'
          ]
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Penerapan AI Klasik dan Machine Learning',
          content: 'Penerapan AI Klasik:\n1. Sistem Pakar.\n2. Diagnosis penyakit berbasis aturan.\n3. Sistem konsultasi hukum.\n4. Pemeriksaan syarat administrasi.\n5. Konfigurasi perangkat.\n\nPenerapan Machine Learning:\n1. Google Translate.\n2. Rekomendasi film di Netflix.\n3. Rekomendasi video YouTube.\n4. Filter spam email.\n5. Face Recognition.\n6. Chatbot modern.\n7. Mobil otonom.\n8. Deteksi penipuan transaksi bank.'
        },
        {
          type: 'info',
          icon: '🔗',
          title: 'Hubungan AI Klasik dan Machine Learning',
          content: 'Banyak mahasiswa mengira bahwa Machine Learning berbeda dengan AI.\n\nSebenarnya:\nArtificial Intelligence\n├── AI Klasik\n└── Machine Learning\n      └── Deep Learning\n\nArtinya: Machine Learning adalah bagian dari Artificial Intelligence, bukan teknologi yang berdiri sendiri.'
        },
        {
          type: 'contoh',
          icon: '✏️',
          title: 'Contoh Soal',
          content: 'Soal 1:\nApa perbedaan utama AI Klasik dan Machine Learning?\nJawaban: AI Klasik menggunakan aturan yang dibuat manusia, sedangkan Machine Learning mempelajari pola secara otomatis dari data.\n\nSoal 2:\nMengapa Machine Learning lebih cocok digunakan pada pengenalan wajah?\nJawaban: Karena wajah manusia memiliki banyak variasi sehingga sulit dibuat aturan secara manual. Machine Learning mampu mempelajari pola wajah dari data dalam jumlah besar sehingga lebih akurat.\n\nSoal 3:\nMengapa Sistem Pakar termasuk AI Klasik?\nJawaban: Karena Sistem Pakar menggunakan aturan IF–THEN yang dibuat secara manual oleh pakar dan tidak memiliki kemampuan untuk belajar dari data.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Artificial Intelligence (AI) adalah teknologi yang membuat komputer mampu melakukan tugas yang membutuhkan kecerdasan manusia.',
            'AI Klasik bekerja menggunakan aturan (rule-based) yang dibuat oleh manusia dan tidak dapat belajar sendiri.',
            'Machine Learning adalah cabang AI yang memungkinkan komputer belajar dari data untuk menemukan pola dan membuat prediksi.',
            'AI Klasik cocok untuk masalah yang memiliki aturan jelas, sedangkan Machine Learning lebih cocok untuk masalah yang kompleks dan melibatkan data dalam jumlah besar.',
            'Machine Learning merupakan bagian dari AI dan menjadi dasar berbagai aplikasi modern seperti pengenalan wajah, sistem rekomendasi, deteksi spam, dan mobil otonom.'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Kalau dosen bertanya "Apa perbedaan paling mendasar antara AI Klasik dan Machine Learning?", ingat satu kalimat ini:\n\nAI Klasik belajar dari aturan yang dibuat manusia, sedangkan Machine Learning belajar dari data.\n\nCara cepat mengingatnya:\nAI Klasik = Rule-Based (aturan).\nMachine Learning = Data-Based (data).\n\nKalau kamu hafal dua kata kunci ini beserta contohnya, biasanya kamu sudah bisa menjawab sebagian besar soal UAS mengenai perbandingan AI Klasik dan Machine Learning.'
        }
      ],
      flashcards: [
        { q: 'Apa itu Artificial Intelligence (AI)?', a: 'Teknologi yang memungkinkan komputer melakukan tugas yang biasanya memerlukan kecerdasan manusia, seperti mengenali wajah, bermain catur, menerjemahkan bahasa, dan mendiagnosis penyakit.' },
        { q: 'Apa itu AI Klasik?', a: 'Pendekatan AI yang menggunakan aturan logika (rule-based) yang dibuat secara manual oleh manusia, biasanya dalam bentuk IF–THEN.' },
        { q: 'Apa itu Machine Learning?', a: 'Cabang AI yang memungkinkan komputer belajar dari data, menemukan pola, dan membuat keputusan tanpa harus diprogram dengan aturan satu per satu.' },
        { q: 'Apa perbedaan utama AI Klasik dan Machine Learning?', a: 'AI Klasik menggunakan aturan yang dibuat manusia (Rule-Based), sedangkan Machine Learning mempelajari pola dari data (Data-Based).' },
        { q: 'Sebutkan ciri-ciri AI Klasik!', a: 'Menggunakan aturan IF–THEN, pengetahuan dari pakar, tidak belajar dari pengalaman, semua aturan dibuat manual, cocok untuk masalah dengan aturan jelas.' },
        { q: 'Mengapa Machine Learning dikembangkan?', a: 'Karena AI Klasik memiliki kelemahan: aturan harus dibuat manual, sulit menangani data besar, sulit menghadapi kondisi baru, dan tidak dapat belajar sendiri.' },
        { q: 'Apa kelebihan AI Klasik?', a: 'Mudah dipahami, keputusan dapat dijelaskan, cepat jika aturan sedikit, cocok untuk Sistem Pakar.' },
        { q: 'Apa kelebihan Machine Learning?', a: 'Belajar otomatis dari data, dapat menangani data besar, akurasi meningkat seiring data bertambah, lebih fleksibel.' },
        { q: 'Apa kekurangan AI Klasik?', a: 'Tidak dapat belajar, sulit diperbarui, bergantung pada pakar, sulit menangani data besar, memiliki masalah Bottleneck dan Brittleness.' },
        { q: 'Apa kekurangan Machine Learning?', a: 'Membutuhkan data banyak dan berkualitas, proses training lama, komputasi besar, hasil prediksi sulit dijelaskan (black box).' },
        { q: 'Apakah Machine Learning bagian dari AI?', a: 'Ya. Machine Learning adalah cabang dari Artificial Intelligence, bukan teknologi yang berdiri sendiri.' },
        { q: 'Sebutkan 3 penerapan Machine Learning!', a: '1. Google Translate, 2. Rekomendasi film Netflix, 3. Face Recognition.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan Artificial Intelligence (AI)?', options: ['Teknologi yang membuat komputer bisa berpikir seperti manusia dan belajar dari aturan saja', 'Teknologi yang memungkinkan komputer melakukan tugas yang membutuhkan kecerdasan manusia', 'Sistem yang hanya menggunakan aturan IF-THEN', 'Program yang bisa berjalan otomatis'], answer: 1, explanation: 'AI adalah teknologi yang membuat komputer mampu melakukan tugas yang biasanya memerlukan kecerdasan manusia.' },
        { q: 'Apa perbedaan utama AI Klasik dan Machine Learning?', options: ['AI Klasik lebih cepat, ML lebih lambat', 'AI Klasik menggunakan aturan buatan manusia, ML belajar dari data', 'AI Klasik menggunakan data, ML menggunakan aturan', 'Tidak ada perbedaan'], answer: 1, explanation: 'AI Klasik menggunakan aturan yang dibuat manusia (Rule-Based), sedangkan Machine Learning belajar dari data (Data-Based).' },
        { q: 'Manakah yang termasuk AI Klasik?', options: ['Google Translate', 'Sistem Pakar', 'Face Recognition', 'Chatbot modern'], answer: 1, explanation: 'Sistem Pakar menggunakan aturan IF–THEN buatan manusia — termasuk AI Klasik.' },
        { q: 'Manakah yang termasuk Machine Learning?', options: ['Sistem Pakar', 'Sistem diagnosis berbasis aturan', 'Filter spam email', 'Pemeriksaan syarat administrasi'], answer: 2, explanation: 'Filter spam email modern menggunakan Machine Learning untuk belajar dari jutaan email.' },
        { q: 'Mengapa Machine Learning lebih cocok untuk pengenalan wajah?', options: ['Karena lebih murah', 'Karena wajah memiliki banyak variasi sehingga sulit dibuat aturan manual', 'Karena AI Klasik tidak bisa diprogram', 'Karena lebih cepat'], answer: 1, explanation: 'Wajah manusia memiliki banyak variasi sehingga sulit dibuat aturan manual. ML belajar dari data gambar.' },
        { q: 'Apa kelebihan AI Klasik?', options: ['Belajar dari data', 'Mudah dipahami dan keputusan dapat dijelaskan', 'Dapat menangani data besar', 'Akurasi meningkat seiring waktu'], answer: 1, explanation: 'AI Klasik mudah dipahami karena aturannya jelas dan keputusan dapat dijelaskan secara logis.' },
        { q: 'Apa kekurangan Machine Learning?', options: ['Tidak bisa belajar', 'Sulit diperbarui', 'Membutuhkan data yang banyak dan berkualitas', 'Bergantung pada pakar'], answer: 2, explanation: 'ML membutuhkan data dalam jumlah besar dan berkualitas baik untuk menghasilkan model yang akurat.' },
        { q: 'Apa hubungan Machine Learning dengan AI?', options: ['ML berbeda dengan AI', 'ML adalah cabang dari AI', 'ML dan AI sama', 'ML adalah pengganti AI'], answer: 1, explanation: 'Machine Learning adalah cabang dari Artificial Intelligence, bukan teknologi yang berdiri sendiri.' },
        { q: 'Manakah yang BUKAN penerapan Machine Learning?', options: ['Google Translate', 'Rekomendasi Netflix', 'Sistem Pakar berbasis aturan', 'Face Recognition'], answer: 2, explanation: 'Sistem Pakar berbasis aturan adalah AI Klasik, bukan Machine Learning.' },
        { q: 'Apa yang dimaksud dengan "black box" dalam Machine Learning?', options: ['Sistem berwarna hitam', 'Hasil prediksi sulit dijelaskan bagaimana diperoleh', 'Sistem tidak bisa digunakan', 'Sistem hanya bekerja di malam hari'], answer: 1, explanation: 'Black box berarti hasil prediksi ML, terutama Deep Learning, sulit dijelaskan bagaimana prosesnya.' },
        { q: 'Mengapa Machine Learning lebih fleksibel daripada AI Klasik?', options: ['Karena menggunakan lebih banyak kode', 'Karena dapat belajar dari data baru tanpa mengubah aturan manual', 'Karena lebih murah', 'Karena tidak membutuhkan komputer'], answer: 1, explanation: 'ML dapat belajar dari data baru dan menyesuaikan modelnya, sedangkan AI Klasik harus diubah aturannya secara manual.' },
        { q: 'Sebutkan kelemahan AI Klasik yang mendorong perkembangan Machine Learning!', options: ['Terlalu cepat', 'Terlalu murah', 'Tidak dapat belajar dan sulit menangani data besar', 'Terlalu akurat'], answer: 2, explanation: 'AI Klasik tidak dapat belajar sendiri, sulit diperbarui, dan sulit menangani data dalam jumlah besar.' }
      ]
    },
    {
      id: 'paradigma-machine-learning',
      title: 'Paradigma Machine Learning',
      icon: '🧩',
      color: 'purple',
      short: 'Paradigma ML',
      gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
      subtitle: 'Supervised, Unsupervised, Reinforcement Learning',
      sections: [
        {
          type: 'pengertian',
          icon: '📖',
          title: 'Pendahuluan',
          content: 'Pada materi sebelumnya kita telah mempelajari bahwa Machine Learning (ML) adalah cabang dari Artificial Intelligence (AI) yang memungkinkan komputer belajar dari data tanpa harus diprogram dengan aturan secara manual.\n\nNamun, Machine Learning tidak hanya memiliki satu cara belajar. Terdapat beberapa paradigma (pendekatan) yang digunakan sesuai dengan jenis data dan tujuan yang ingin dicapai.\n\nParadigma Machine Learning menjelaskan bagaimana komputer memperoleh pengetahuan dari data. Setiap paradigma memiliki cara belajar, jenis data, dan penggunaan yang berbeda.\n\nSecara umum terdapat tiga paradigma utama Machine Learning, yaitu:\n• Supervised Learning\n• Unsupervised Learning\n• Reinforcement Learning\n\nKetiga paradigma ini merupakan dasar hampir seluruh aplikasi AI modern.'
        },
        {
          type: 'info',
          icon: '🧠',
          title: 'Apa itu Paradigma Machine Learning?',
          content: 'Paradigma Machine Learning adalah cara atau metode yang digunakan komputer untuk mempelajari pola dari data sehingga dapat membuat prediksi, klasifikasi, atau mengambil keputusan.\n\nPemilihan paradigma bergantung pada:\n• apakah data memiliki label atau tidak,\n• apakah komputer diberi jawaban yang benar,\n• atau apakah komputer belajar melalui pengalaman.'
        },
        {
          type: 'pengertian',
          icon: '📋',
          title: '1. Supervised Learning — Pengertian',
          content: 'Supervised Learning adalah metode Machine Learning di mana komputer belajar menggunakan data yang sudah memiliki label atau jawaban yang benar.\n\nArtinya, selama proses belajar komputer selalu mengetahui jawaban yang benar sehingga dapat membandingkan hasil prediksinya dengan jawaban tersebut.\n\nSederhananya: Komputer belajar menggunakan contoh soal yang sudah memiliki kunci jawaban.'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Supervised Learning — Cara Kerja',
          content: 'Alur kerjanya:\n\nData + Label → Algoritma Belajar → Model → Prediksi Data Baru\n\nMisalnya terdapat data:\n| Nilai Ujian | Status |\n|-------------|--------|\n| 90          | Lulus  |\n| 80          | Lulus  |\n| 40          | Tidak Lulus |\n| 50          | Tidak Lulus |\n\nKolom Status merupakan label. Komputer mempelajari hubungan antara nilai ujian dan status kelulusan. Ketika diberikan nilai baru misalnya 75, komputer dapat memprediksi: Lulus.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Supervised Learning — Analogi',
          content: 'Guru memberikan: soal dan jawaban yang benar. Siswa belajar dari jawaban tersebut. Semakin banyak latihan, semakin pintar siswa tersebut. Begitulah cara kerja Supervised Learning.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Supervised Learning — Contoh Penerapan',
          content: '• Prediksi harga rumah.\n• Deteksi spam email.\n• Diagnosis penyakit.\n• Prediksi cuaca.\n• Face Recognition.\n• Prediksi kelulusan mahasiswa.'
        },
        {
          type: 'info',
          icon: '🔤',
          title: 'Supervised Learning — Jenis Masalah',
          content: 'A. Classification (Klasifikasi)\nDigunakan jika hasil akhirnya berupa kategori.\nContoh: Spam atau Tidak Spam, Lulus atau Tidak Lulus, Kucing atau Anjing, Positif atau Negatif.\n\nB. Regression (Regresi)\nDigunakan jika hasil akhirnya berupa angka.\nContoh: Harga rumah, Tinggi badan, Penjualan bulan depan, Suhu udara.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Supervised Learning — Kelebihan dan Kekurangan',
          checklist: [
            'KELEBIHAN: Akurasi tinggi jika data berkualitas.',
            'KELEBIHAN: Mudah dievaluasi.',
            'KELEBIHAN: Cocok untuk prediksi.',
            'KEKURANGAN: Membutuhkan data berlabel.',
            'KEKURANGAN: Proses pelabelan membutuhkan waktu.',
            'KEKURANGAN: Jika label salah, hasil model juga salah.'
          ]
        },
        {
          type: 'pengertian',
          icon: '🔍',
          title: '2. Unsupervised Learning — Pengertian',
          content: 'Unsupervised Learning adalah metode Machine Learning yang menggunakan data tanpa label. Komputer harus mencari pola atau hubungan antar data secara mandiri.\n\nDengan kata lain: Komputer tidak diberi jawaban yang benar. Komputer harus menemukan sendiri pola yang tersembunyi di dalam data.'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Unsupervised Learning — Cara Kerja',
          content: 'Data Tanpa Label → Algoritma → Mencari Pola → Kelompok (Cluster)\n\nContoh:\nMisalnya terdapat data pelanggan: umur, pendapatan, jumlah belanja. Komputer tidak mengetahui kelompok pelanggan tersebut. Setelah diproses, komputer menemukan sendiri:\n• Kelompok A: sering belanja.\n• Kelompok B: jarang belanja.\n• Kelompok C: pelanggan baru.\nSemua kelompok ditemukan otomatis.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Unsupervised Learning — Analogi',
          content: 'Bayangkan terdapat sekotak buah. Isinya: apel, jeruk, pisang. Tidak ada tulisan nama buah. Seorang anak diminta mengelompokkan buah. Anak tersebut mungkin mengelompokkan berdasarkan warna, bentuk, atau ukuran. Anak menemukan pola sendiri. Begitulah Unsupervised Learning bekerja.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Unsupervised Learning — Contoh Penerapan',
          content: '• Segmentasi pelanggan.\n• Rekomendasi produk.\n• Analisis perilaku konsumen.\n• Deteksi pola pembelian.\n• Pengelompokan berita.\n• Clustering data.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Unsupervised Learning — Kelebihan dan Kekurangan',
          checklist: [
            'KELEBIHAN: Tidak membutuhkan label.',
            'KELEBIHAN: Mampu menemukan pola tersembunyi.',
            'KELEBIHAN: Cocok untuk eksplorasi data.',
            'KEKURANGAN: Sulit mengevaluasi hasil.',
            'KEKURANGAN: Hasil kelompok belum tentu sesuai keinginan manusia.',
            'KEKURANGAN: Akurasi lebih sulit diukur.'
          ]
        },
        {
          type: 'pengertian',
          icon: '🎮',
          title: '3. Reinforcement Learning — Pengertian',
          content: 'Reinforcement Learning (RL) adalah metode Machine Learning di mana komputer belajar melalui pengalaman, yaitu dengan mencoba berbagai tindakan dan menerima reward (hadiah) atau punishment (hukuman).\n\nTujuan komputer adalah memperoleh reward sebanyak mungkin.\n\nSederhananya: Belajar melalui coba-coba, kemudian memperbaiki kesalahan berdasarkan hadiah atau hukuman yang diterima.'
        },
        {
          type: 'info',
          icon: '⚙️',
          title: 'Reinforcement Learning — Cara Kerja',
          content: 'Komponen utama:\n• Agent → sistem yang belajar.\n• Environment → lingkungan tempat agent berinteraksi.\n• Action → tindakan yang dilakukan.\n• Reward → nilai yang diterima setelah melakukan tindakan.\n• State → kondisi lingkungan saat itu.\n\nAlur: Agent mengambil Action di Environment → mendapat Reward → Agent belajar dari Reward → mengulang hingga mendapat reward maksimal.'
        },
        {
          type: 'contoh',
          icon: '🤖',
          title: 'Reinforcement Learning — Contoh',
          content: 'Robot belajar berjalan. Awalnya robot sering jatuh. Setiap berhasil melangkah, robot memperoleh reward. Lama-kelamaan robot mengetahui cara berjalan yang benar.'
        },
        {
          type: 'info',
          icon: '💡',
          title: 'Reinforcement Learning — Analogi',
          content: 'Bayangkan sedang bermain game. Jika berhasil melewati level, mendapat poin. Jika kalah, kehilangan nyawa. Semakin sering bermain, semakin tahu strategi terbaik. Begitulah Reinforcement Learning.'
        },
        {
          type: 'contoh',
          icon: '💻',
          title: 'Reinforcement Learning — Contoh Penerapan',
          content: '• Mobil tanpa sopir.\n• Robot industri.\n• AI bermain catur.\n• AI bermain Go.\n• AI bermain game.\n• Pengaturan lalu lintas pintar.'
        },
        {
          type: 'tujuan',
          icon: '✅',
          title: 'Reinforcement Learning — Kelebihan dan Kekurangan',
          checklist: [
            'KELEBIHAN: Dapat belajar sendiri melalui pengalaman.',
            'KELEBIHAN: Mampu menangani masalah yang kompleks.',
            'KELEBIHAN: Cocok untuk pengambilan keputusan bertahap.',
            'KEKURANGAN: Membutuhkan waktu pelatihan yang lama.',
            'KEKURANGAN: Memerlukan banyak percobaan.',
            'KEKURANGAN: Membutuhkan komputasi tinggi.'
          ]
        },
        {
          type: 'info',
          icon: '⚖️',
          title: 'Perbandingan Ketiga Paradigma',
          content: '| Aspek | Supervised Learning | Unsupervised Learning | Reinforcement Learning |\n|-------|-------------------|---------------------|----------------------|\n| Data | Memiliki label | Tidak memiliki label | Belajar dari reward dan punishment |\n| Tujuan | Memprediksi label | Mencari pola | Memperoleh reward maksimal |\n| Jawaban | Ada jawaban benar | Tidak ada jawaban | Belajar dari pengalaman |\n| Contoh | Prediksi nilai | Segmentasi pelanggan | Robot dan game |'
        },
        {
          type: 'info',
          icon: '🎯',
          title: 'Kapan Menggunakan Masing-Masing Paradigma?',
          content: 'Gunakan Supervised Learning jika:\n• Data sudah memiliki label.\n• Ingin melakukan klasifikasi atau prediksi.\nContoh: Prediksi penyakit, prediksi harga rumah.\n\nGunakan Unsupervised Learning jika:\n• Tidak memiliki label.\n• Ingin mengetahui pola yang tersembunyi.\nContoh: Mengelompokkan pelanggan.\n\nGunakan Reinforcement Learning jika:\n• Sistem harus belajar melalui interaksi.\n• Ada reward dan punishment.\nContoh: Robot berjalan, AI bermain game.'
        },
        {
          type: 'contoh',
          icon: '✏️',
          title: 'Contoh Soal',
          content: 'Soal 1:\nSebuah sistem dilatih menggunakan ribuan email yang sudah diberi label "Spam" dan "Bukan Spam". Paradigma apa yang digunakan?\nJawaban: Supervised Learning, karena data sudah memiliki label.\n\nSoal 2:\nSebuah perusahaan ingin mengelompokkan pelanggan berdasarkan kebiasaan belanja tanpa mengetahui kelompoknya terlebih dahulu. Paradigma apa yang tepat?\nJawaban: Unsupervised Learning, karena sistem mencari pola dari data tanpa label.\n\nSoal 3:\nRobot belajar berjalan dengan mencoba berbagai gerakan dan memperoleh reward ketika berhasil. Paradigma apa yang digunakan?\nJawaban: Reinforcement Learning, karena robot belajar melalui trial and error dengan mekanisme reward dan punishment.'
        },
        {
          type: 'ringkasan',
          icon: '📌',
          title: 'Ringkasan',
          bullet: [
            'Paradigma Machine Learning adalah pendekatan yang digunakan komputer untuk belajar dari data.',
            'Supervised Learning menggunakan data yang sudah memiliki label sehingga cocok untuk klasifikasi dan prediksi.',
            'Unsupervised Learning menggunakan data tanpa label dan bertujuan menemukan pola atau kelompok secara otomatis.',
            'Reinforcement Learning belajar melalui interaksi dengan lingkungan menggunakan mekanisme reward dan punishment.',
            'Ketiga paradigma tersebut memiliki karakteristik, cara kerja, dan penerapan yang berbeda, sehingga dipilih sesuai jenis masalah yang ingin diselesaikan.'
          ]
        },
        {
          type: 'tips',
          icon: '💡',
          title: 'Tips Mengingat untuk UAS',
          content: 'Cara paling mudah mengingat ketiga paradigma adalah dengan menghubungkannya dengan cara manusia belajar:\n\nSupervised Learning = Belajar dengan guru. (Ada soal dan kunci jawaban/label.)\nUnsupervised Learning = Belajar sendiri. (Tidak ada jawaban, harus mencari pola.)\nReinforcement Learning = Belajar dari pengalaman. (Mencoba, salah, mendapat hukuman; benar, mendapat hadiah.)\n\nTrik Hafalan Cepat:\nSupervised → Label\nUnsupervised → Pola\nReinforcement → Reward\n\nKalau di soal UAS kamu bisa mengenali tiga kata kunci tersebut, biasanya kamu sudah bisa menentukan paradigma Machine Learning yang tepat beserta alasannya.'
        }
      ],
      flashcards: [
        { q: 'Apa itu paradigma Machine Learning?', a: 'Cara atau metode yang digunakan komputer untuk mempelajari pola dari data sehingga dapat membuat prediksi, klasifikasi, atau mengambil keputusan.' },
        { q: 'Apa itu Supervised Learning?', a: 'Metode ML di mana komputer belajar menggunakan data yang sudah memiliki label atau jawaban yang benar (belajar dengan guru).' },
        { q: 'Apa itu Unsupervised Learning?', a: 'Metode ML yang menggunakan data tanpa label, komputer harus mencari pola atau hubungan antar data secara mandiri.' },
        { q: 'Apa itu Reinforcement Learning?', a: 'Metode ML di mana komputer belajar melalui pengalaman dengan mencoba tindakan dan menerima reward atau punishment.' },
        { q: 'Apa perbedaan utama Supervised dan Unsupervised Learning?', a: 'Supervised Learning menggunakan data berlabel (ada jawaban benar), Unsupervised Learning menggunakan data tanpa label (mencari pola sendiri).' },
        { q: 'Apa dua jenis masalah dalam Supervised Learning?', a: 'Classification (hasil berupa kategori) dan Regression (hasil berupa angka).' },
        { q: 'Sebutkan 3 contoh penerapan Supervised Learning!', a: '1. Deteksi spam email, 2. Prediksi harga rumah, 3. Diagnosis penyakit.' },
        { q: 'Sebutkan 3 contoh penerapan Unsupervised Learning!', a: '1. Segmentasi pelanggan, 2. Rekomendasi produk, 3. Pengelompokan berita.' },
        { q: 'Sebutkan 3 contoh penerapan Reinforcement Learning!', a: '1. Mobil tanpa sopir, 2. AI bermain catur, 3. Robot industri.' },
        { q: 'Apa kelebihan Supervised Learning?', a: 'Akurasi tinggi jika data berkualitas, mudah dievaluasi, cocok untuk prediksi.' },
        { q: 'Apa kelebihan Unsupervised Learning?', a: 'Tidak membutuhkan label, mampu menemukan pola tersembunyi, cocok untuk eksplorasi data.' },
        { q: 'Apa kelebihan Reinforcement Learning?', a: 'Dapat belajar sendiri melalui pengalaman, mampu menangani masalah kompleks, cocok untuk pengambilan keputusan bertahap.' }
      ],
      quiz: [
        { q: 'Apa yang dimaksud dengan paradigma Machine Learning?', options: ['Jenis data yang digunakan', 'Cara komputer mempelajari pola dari data', 'Algoritma yang digunakan', 'Bahasa pemrograman untuk ML'], answer: 1, explanation: 'Paradigma ML adalah cara atau metode yang digunakan komputer untuk belajar dari data.' },
        { q: 'Supervised Learning menggunakan data...', options: ['Tanpa label', 'Yang sudah memiliki label', 'Hanya angka', 'Hanya teks'], answer: 1, explanation: 'Supervised Learning menggunakan data yang sudah memiliki label atau jawaban yang benar.' },
        { q: 'Unsupervised Learning menggunakan data...', options: ['Yang sudah memiliki label', 'Tanpa label', 'Hanya gambar', 'Hanya suara'], answer: 1, explanation: 'Unsupervised Learning menggunakan data tanpa label, komputer mencari pola sendiri.' },
        { q: 'Reinforcement Learning belajar melalui...', options: ['Data berlabel', 'Data tanpa label', 'Reward dan punishment', 'Aturan IF-THEN'], answer: 2, explanation: 'Reinforcement Learning belajar melalui reward (hadiah) dan punishment (hukuman) dari lingkungan.' },
        { q: 'Klasifikasi dan regresi termasuk dalam paradigma...', options: ['Unsupervised Learning', 'Supervised Learning', 'Reinforcement Learning', 'Semi-supervised Learning'], answer: 1, explanation: 'Classification dan Regression adalah dua jenis masalah dalam Supervised Learning.' },
        { q: 'Segmentasi pelanggan termasuk contoh dari...', options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning'], answer: 1, explanation: 'Segmentasi pelanggan menggunakan Unsupervised Learning untuk mengelompokkan pelanggan tanpa label.' },
        { q: 'Robot yang belajar berjalan melalui trial and error termasuk...', options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Classification'], answer: 2, explanation: 'Robot belajar melalui percobaan dengan reward — khas Reinforcement Learning.' },
        { q: 'Mana yang merupakan kelebihan Supervised Learning?', options: ['Tidak membutuhkan label', 'Akurasi tinggi jika data berkualitas', 'Mampu menemukan pola tersembunyi', 'Cocok untuk eksplorasi data'], answer: 1, explanation: 'Supervised Learning memiliki akurasi tinggi jika data yang digunakan berkualitas dan memiliki label yang benar.' },
        { q: 'Mana yang merupakan kekurangan Unsupervised Learning?', options: ['Membutuhkan data berlabel', 'Sulit mengevaluasi hasil', 'Membutuhkan reward', 'Proses training lama'], answer: 1, explanation: 'Unsupervised Learning sulit dievaluasi karena tidak ada label yang bisa dijadikan acuan kebenaran.' },
        { q: 'Apa komponen utama dalam Reinforcement Learning?', options: ['Data dan label', 'Agent, Environment, Action, Reward', 'Cluster dan centroid', 'Fitur dan target'], answer: 1, explanation: 'Komponen utama RL adalah Agent, Environment, Action, Reward, dan State.' },
        { q: 'Jika Anda ingin memprediksi harga rumah berdasarkan data historis, paradigma yang tepat adalah...', options: ['Unsupervised Learning', 'Supervised Learning (Regression)', 'Reinforcement Learning', 'Clustering'], answer: 1, explanation: 'Prediksi harga rumah adalah masalah regresi dalam Supervised Learning karena target berupa angka.' },
        { q: 'Trik cepat mengingat ketiga paradigma ML adalah...', options: ['Supervised = Reward, Unsupervised = Label, Reinforcement = Pola', 'Supervised = Label, Unsupervised = Pola, Reinforcement = Reward', 'Supervised = Pola, Unsupervised = Reward, Reinforcement = Label', 'Supervised = Data, Unsupervised = Aturan, Reinforcement = Reward'], answer: 1, explanation: 'Supervised → Label, Unsupervised → Pola, Reinforcement → Reward.' }
      ]
    }
  ],
  ringkasan: [
    { icon: '🧮', text: 'Logika proposisional menggunakan proposisi bernilai True/False sebagai dasar penalaran AI.' },
    { icon: '📋', text: 'Proposisi adalah kalimat deklaratif yang memiliki nilai kebenaran (Benar/Salah).' },
    { icon: '🔗', text: '5 operator utama: NOT (¬), AND (∧), OR (∨), Implikasi (→), Biimplikasi (↔).' },
    { icon: '🏥', text: 'Contoh penerapan: sistem pakar dengan aturan IF-THEN seperti "Jika demam DAN batuk maka flu".' },
    { icon: '✅', text: 'Kelebihan: sederhana, mudah dipahami, mudah diimplementasikan, dasar AI klasik.' },
    { icon: '❌', text: 'Keterbatasan: tidak mengenal objek, relasi, variabel, kuantor, dan sulit untuk pengetahuan kompleks.' },
    { icon: '🔄', text: 'First Order Logic (FOL) adalah pengembangan yang mengatasi keterbatasan logika proposisional.' },
    { icon: '🔤', text: 'Komponen FOL: Konstanta, Variabel, Predikat, Fungsi, dan Kuantor (∀, ∃).' },
    { icon: '📝', text: 'Contoh FOL: ∀x (Mahasiswa(x) → Belajar(x)) — "Semua mahasiswa belajar."' },
    { icon: '💻', text: 'Penerapan FOL: Sistem Pakar, Semantic Web, NLP, Robotik, Automated Theorem Proving.' },
    { icon: '🩺', text: 'Sistem Pakar (Expert System) adalah AI yang meniru kemampuan seorang ahli dalam bidang tertentu.' },
    { icon: '🧠', text: 'Inference Engine adalah otak Sistem Pakar yang mencocokkan fakta dengan aturan.' },
    { icon: '⚖️', text: 'Perbedaan Sistem Pakar dan ML: Pakar dari aturan manusia, ML dari data.' },
    { icon: '➡️', text: 'Forward Chaining: penalaran dari fakta ke kesimpulan (Data Driven).' },
    { icon: '⬅️', text: 'Backward Chaining: penalaran dari tujuan ke fakta (Goal Driven).' },
    { icon: '🍾', text: 'Knowledge Acquisition Bottleneck: hambatan memperoleh pengetahuan dari pakar.' },
    { icon: '💔', text: 'Brittleness: sistem rapuh saat menghadapi kasus baru di luar aturan.' },
    { icon: '⚙️', text: 'AI Klasik menggunakan aturan buatan manusia (Rule-Based).' },
    { icon: '📊', text: 'Machine Learning belajar dari data, menemukan pola, dan membuat prediksi (Data-Based).' },
    { icon: '📋', text: 'Supervised Learning: belajar dengan data berlabel untuk klasifikasi dan prediksi.' },
    { icon: '🔍', text: 'Unsupervised Learning: mencari pola dari data tanpa label (clustering).' },
    { icon: '🎮', text: 'Reinforcement Learning: belajar dari reward dan punishment melalui interaksi.' }
  ],
  illustrations: {
    ai: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="25" width="90" height="70" rx="18" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2.5"/>
      <circle cx="82" cy="52" r="11" fill="#E9D5FF" stroke="#7C3AED" stroke-width="2"/>
      <circle cx="82" cy="52" r="5" fill="#7C3AED"/>
      <circle cx="118" cy="52" r="11" fill="#E9D5FF" stroke="#7C3AED" stroke-width="2"/>
      <circle cx="118" cy="52" r="5" fill="#7C3AED"/>
      <rect x="85" y="70" width="30" height="7" rx="3.5" fill="#7C3AED" opacity="0.5"/>
      <line x1="100" y1="25" x2="100" y2="12" stroke="#7C3AED" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="8" r="6" fill="#A855F7" stroke="#7C3AED" stroke-width="1.5"/>
      <circle cx="100" cy="8" r="2" fill="white" opacity="0.6"/>
      <rect x="60" y="95" width="80" height="45" rx="10" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2.5"/>
      <rect x="68" y="103" width="64" height="8" rx="4" fill="#DDD6FE"/>
      <rect x="68" y="115" width="48" height="8" rx="4" fill="#DDD6FE" opacity="0.6"/>
      <rect x="68" y="127" width="40" height="8" rx="4" fill="#DDD6FE" opacity="0.4"/>
      <circle cx="155" cy="50" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="165" cy="38" r="3" fill="#A855F7" opacity="0.2"/>
      <circle cx="45" cy="50" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="35" cy="38" r="3" fill="#A855F7" opacity="0.2"/>
      <line x1="145" y1="95" x2="165" y2="108" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"/>
      <line x1="55" y1="95" x2="35" y2="108" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"/>
      <circle cx="170" cy="112" r="5" fill="#A855F7" opacity="0.4"/>
      <circle cx="30" cy="112" r="5" fill="#A855F7" opacity="0.4"/>
    </svg>`,
    'logika-proposisional': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="150" height="120" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="50" y="48" font-size="11" fill="#6D28D9" font-weight="700">Logika Proposisional</text>
      <rect x="40" y="56" width="50" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="48" y="74" font-size="10" fill="#7C3AED" font-weight="600">P = Hujan</text>
      <rect x="40" y="88" width="50" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="48" y="106" font-size="10" fill="#7C3AED" font-weight="600">Q = Basah</text>
      <rect x="110" y="56" width="50" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="118" y="74" font-size="9" fill="#6D28D9" font-weight="600">P → Q</text>
      <text x="118" y="90" font-size="8" fill="#6D28D9">Jika Hujan</text>
      <text x="118" y="104" font-size="8" fill="#6D28D9">Maka Basah</text>
      <line x1="90" y1="70" x2="110" y2="80" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="90" y1="100" x2="110" y2="92" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="20" cy="15" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="185" cy="140" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="180" cy="18" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'first-order-logic': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="32" y="42" font-size="11" fill="#6D28D9" font-weight="700">First Order Logic</text>
      <rect x="22" y="52" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="70" font-size="9" fill="#7C3AED" font-weight="600">∀x (Mhs(x) → Bljr(x))</text>
      <rect x="22" y="84" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="102" font-size="9" fill="#7C3AED" font-weight="600">∃y (Mhs(y) ∧ Pntr(y))</text>
      <rect x="108" y="52" width="64" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="70" font-size="9" fill="#6D28D9" font-weight="600">Predikat:</text>
      <text x="114" y="84" font-size="8" fill="#6D28D9">Mahasiswa(x)</text>
      <text x="114" y="98" font-size="8" fill="#6D28D9">Menyukai(x, AI)</text>
      <line x1="94" y1="66" x2="108" y2="70" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="90" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="190" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="188" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'forward-backward-chaining': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="28" y="42" font-size="11" fill="#6D28D9" font-weight="700">Forward & Backward</text>
      <rect x="22" y="52" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="26" y="70" font-size="8" fill="#7C3AED" font-weight="600">Fakta → Forward</text>
      <rect x="22" y="84" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="26" y="102" font-size="8" fill="#7C3AED" font-weight="600">Tujuan → Backward</text>
      <rect x="108" y="52" width="64" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="68" font-size="8" fill="#6D28D9" font-weight="600">Inference</text>
      <text x="114" y="80" font-size="8" fill="#6D28D9">Engine</text>
      <text x="114" y="96" font-size="7" fill="#6D28D9">Data Driven</text>
      <text x="114" y="106" font-size="7" fill="#6D28D9">Goal Driven</text>
      <line x1="94" y1="66" x2="108" y2="70" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="90" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="190" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="188" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'knowledge-acquisition-bottleneck': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="28" y="42" font-size="10" fill="#6D28D9" font-weight="700">Knowledge Bottleneck</text>
      <rect x="22" y="52" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="70" font-size="8" fill="#7C3AED" font-weight="600">Knowledge Base</text>
      <rect x="22" y="84" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="102" font-size="8" fill="#7C3AED" font-weight="600">⬜ Aturan ?</text>
      <rect x="108" y="52" width="64" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="68" font-size="8" fill="#6D28D9" font-weight="600">Brittle</text>
      <text x="114" y="82" font-size="7" fill="#6D28D9">Kasus Baru</text>
      <text x="114" y="94" font-size="7" fill="#6D28D9">❌ Gagal</text>
      <text x="114" y="106" font-size="7" fill="#6D28D9">❌ Tidak Tahu</text>
      <line x1="94" y1="66" x2="108" y2="72" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="88" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="190" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="188" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'ml-vs-ai-klasik': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="40" y="42" font-size="11" fill="#6D28D9" font-weight="700">ML vs AI Klasik</text>
      <rect x="22" y="52" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="70" font-size="8" fill="#7C3AED" font-weight="600">AI Klasik</text>
      <rect x="22" y="84" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="102" font-size="8" fill="#7C3AED" font-weight="600">Machine Learning</text>
      <rect x="108" y="52" width="64" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="68" font-size="8" fill="#6D28D9" font-weight="600">Rule vs Data</text>
      <text x="114" y="84" font-size="7" fill="#6D28D9">Aturan Manual</text>
      <text x="114" y="98" font-size="7" fill="#6D28D9">Pola Otomatis</text>
      <line x1="94" y1="66" x2="108" y2="72" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="88" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="190" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="188" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'paradigma-machine-learning': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="28" y="42" font-size="10" fill="#6D28D9" font-weight="700">Paradigma ML</text>
      <rect x="22" y="52" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="28" y="70" font-size="8" fill="#7C3AED" font-weight="600">Supervised</text>
      <rect x="22" y="84" width="72" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="32" y="102" font-size="8" fill="#7C3AED" font-weight="600">Unsupervised</text>
      <rect x="108" y="52" width="64" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="66" font-size="8" fill="#6D28D9" font-weight="600">Reinforcement</text>
      <text x="114" y="80" font-size="7" fill="#6D28D9">Label → Prediksi</text>
      <text x="114" y="94" font-size="7" fill="#6D28D9">Pola → Cluster</text>
      <text x="114" y="106" font-size="7" fill="#6D28D9">Reward → Aksi</text>
      <line x1="94" y1="66" x2="108" y2="72" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="88" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="190" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="188" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`,
    'sistem-pakar': `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="160" height="130" rx="12" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
      <text x="38" y="42" font-size="11" fill="#6D28D9" font-weight="700">Sistem Pakar</text>
      <rect x="28" y="52" width="66" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="34" y="70" font-size="9" fill="#7C3AED" font-weight="600">IF Demam</text>
      <rect x="28" y="84" width="66" height="28" rx="6" fill="#E9D5FF" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="34" y="102" font-size="9" fill="#7C3AED" font-weight="600">AND Batuk</text>
      <rect x="108" y="52" width="60" height="60" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
      <text x="114" y="70" font-size="9" fill="#6D28D9" font-weight="600">THEN Flu</text>
      <text x="114" y="86" font-size="7" fill="#6D28D9">Diagnosis:</text>
      <text x="114" y="100" font-size="8" fill="#6D28D9">✔ Influenza</text>
      <line x1="94" y1="66" x2="108" y2="72" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <line x1="94" y1="98" x2="108" y2="90" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="14" cy="12" r="6" fill="#A855F7" opacity="0.3"/>
      <circle cx="188" cy="145" r="5" fill="#A855F7" opacity="0.2"/>
      <circle cx="186" cy="12" r="4" fill="#A855F7" opacity="0.25"/>
    </svg>`
  }
};
