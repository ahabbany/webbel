const COURSE_TOEFL = {
  id: 'toefl',
  title: 'TOEFL Preparation',
  icon: '🎧',
  short: 'TOEFL',
  color: 'blue',
  gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
  cardGradient: 'linear-gradient(135deg, #1E3A8A, #1D4ED8)',
  subtitle: 'Persiapan TOEFL Listening, Structure & Reading',
  description: 'Belajar strategi mengerjakan TOEFL Listening — Part A (Dialog Singkat), Part B (Dialog Panjang), Part C (Monolog/Ceramah). Structure and Written Expression — Part A (Structure) dan Part B (Written Expression). Serta Reading Comprehension — 11 skill membaca.',
  badgeCount: 6,
  materiData: [
    {
      id: 'listening',
      title: 'Listening',
      icon: '🎧',
      color: 'blue',
      short: 'Listening',
      gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
      subtitle: 'TOEFL Listening Section',
      children: [
        {
          id: 'part-a',
          title: 'Part A – Dialog Singkat',
          icon: '🗣️',
          color: 'primary',
          short: 'Part A',
          gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
          subtitle: '13 Skill untuk Dialog Singkat',
          children: [
            {
              id: 'pa-skill-1', title: 'Skill 1 – Fokus pada Baris Kedua Percakapan', icon: '🎯', color: 'blue', short: 'Skill 1', gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', subtitle: 'Pentingnya Respons Pembicara Kedua',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, kamu akan mendengar percakapan singkat yang biasanya terdiri dari dua pembicara. Dalam banyak soal, informasi yang menjadi jawaban terdapat pada ucapan pembicara kedua, sedangkan pembicara pertama hanya memberikan informasi awal atau memulai percakapan.\n\nOleh karena itu, jangan hanya fokus pada kalimat pertama. Dengarkan dengan saksama respons dari pembicara kedua karena di sanalah biasanya terdapat maksud atau informasi yang akan ditanyakan.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan kalimat pertama untuk mengetahui topik pembicaraan.', 'Berikan perhatian lebih pada ucapan pembicara kedua.', 'Pahami maksud pembicara kedua, bukan menghafal setiap kata.', 'Saat pertanyaan dibacakan, ingat kembali inti dari ucapan pembicara kedua.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kalimat pertama = konteks.\nKalimat kedua = petunjuk jawaban.\nJika tidak memahami semua kosakata, jangan panik. Fokuslah pada inti pembicaraan pembicara kedua.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Terlalu fokus pada ucapan pembicara pertama.', 'Berusaha menerjemahkan semua kata satu per satu.', 'Memilih jawaban hanya karena terdapat kata yang sama dengan percakapan.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: The library closes in fifteen minutes.\nMan: Then we\'d better borrow the book now.\n\nQuestion: What does the man mean?\nA. They should return the book tomorrow.\nB. They need to borrow the book immediately.\nC. The library has already closed.\nD. They don\'t need the book anymore.\n\n✅ Jawaban: B\n\nPembahasan:\nKalimat pertama hanya memberikan informasi bahwa perpustakaan akan tutup dalam 15 menit. Informasi penting terdapat pada ucapan pembicara kedua, yaitu "We\'d better borrow the book now."' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Listening Part A biasanya terdiri dari percakapan singkat antara dua orang.', 'Kalimat pertama umumnya hanya memberikan konteks.', 'Kalimat kedua sering berisi informasi yang menjadi jawaban.', 'Fokuslah memahami maksud pembicara kedua, bukan menghafal seluruh percakapan.', 'Jangan terkecoh oleh kata-kata yang muncul pada kalimat pertama.'] }
              ],
              flashcards: [
                { q: 'Bagian mana dalam percakapan TOEFL Listening Part A yang paling penting untuk menemukan jawaban?', a: 'Ucapan pembicara kedua, karena biasanya berisi informasi yang menjadi jawaban soal.' },
                { q: 'Apa fungsi kalimat pertama dalam percakapan TOEFL Listening Part A?', a: 'Memberikan konteks atau topik pembicaraan.' },
                { q: 'Apa yang harus dilakukan jika tidak memahami semua kosakata saat mendengarkan audio?', a: 'Jangan panik, fokuslah pada inti pembicaraan pembicara kedua.' },
                { q: 'Mengapa jangan terkecoh oleh kata-kata pada kalimat pertama?', a: 'Karena kalimat pertama hanya konteks, jawaban biasanya ada di kalimat kedua.' },
                { q: 'Apa kesalahan umum saat mengerjakan soal Listening Part A?', a: 'Terlalu fokus pada ucapan pembicara pertama atau memilih jawaban karena kata yang sama muncul.' }
              ]
            },
            {
              id: 'pa-skill-2', title: 'Skill 2 – Pilih Jawaban Menggunakan Sinonim', icon: '🔄', color: 'blue', short: 'Skill 2', gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)', subtitle: 'Mengenali Sinonim dalam Jawaban',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, jawaban yang benar jarang menggunakan kata yang sama persis dengan yang diucapkan pembicara. Sebaliknya, TOEFL sering mengganti kata tersebut dengan sinonim (kata yang memiliki arti sama atau hampir sama).\n\nOleh karena itu, kamu harus memahami makna dari percakapan, bukan hanya mengingat kata-katanya. Jika mendengar sebuah kata dalam audio, kemungkinan besar jawaban yang benar menggunakan kata lain yang memiliki arti serupa.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan kata-kata penting dalam percakapan.', 'Cari pilihan jawaban yang memiliki makna sama, bukan bunyi atau kata yang sama.', 'Fokus pada arti keseluruhan kalimat.', 'Jangan langsung memilih jawaban karena mengandung kata yang sama dengan audio.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'TOEFL sering menguji kemampuan memahami sinonim, bukan kemampuan menghafal kata.\nBiasakan mengenali kosakata yang memiliki arti sama, misalnya:\nBegin = Start (memulai)\nPurchase = Buy (membeli)\nFinish = Complete (menyelesaikan)\nDifficult = Hard (sulit)' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Memilih jawaban yang mengandung kata yang sama persis dengan audio.', 'Tidak memperhatikan bahwa pilihan jawaban menggunakan sinonim.', 'Terlalu fokus pada satu kata, bukan pada makna kalimat secara keseluruhan.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: I finally purchased a new laptop yesterday.\nWoman: That\'s great! I heard it has excellent performance.\n\nQuestion: What did the man do?\nA. He sold a new laptop.\nB. He repaired his laptop.\nC. He bought a new laptop.\nD. He borrowed a laptop.\n\n✅ Jawaban: C\n\nPembahasan:\nPada audio, pembicara menggunakan kata purchased, sedangkan pada jawaban digunakan kata bought. Kedua kata tersebut merupakan sinonim yang memiliki arti membeli.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Jawaban TOEFL sering menggunakan sinonim, bukan kata yang sama.', 'Pahami arti kalimat, bukan hanya kata yang didengar.', 'Hindari memilih jawaban hanya karena terdapat kata yang sama dengan audio.', 'Semakin banyak kosakata yang kamu kuasai, semakin mudah menemukan sinonim yang tepat.'] }
              ],
              flashcards: [
                { q: 'Mengapa jawaban TOEFL jarang menggunakan kata yang sama persis dengan audio?', a: 'Karena TOEFL menguji kemampuan memahami sinonim, bukan kemampuan menghafal kata.' },
                { q: 'Apa sinonim dari "purchase" dalam konteks TOEFL?', a: 'Buy (membeli).' },
                { q: 'Apa sinonim dari "difficult" dalam konteks TOEFL?', a: 'Hard (sulit).' },
                { q: 'Mengapa memilih jawaban karena ada kata yang sama dengan audio adalah kesalahan?', a: 'Karena jawaban TOEFL biasanya menggunakan sinonim, kata yang sama bisa jadi jebakan.' },
                { q: 'Apa yang harus diprioritaskan saat mendengarkan audio TOEFL?', a: 'Memahami arti keseluruhan kalimat, bukan hanya mengingat kata-kata yang didengar.' }
              ]
            },
            {
              id: 'pa-skill-3', title: 'Skill 3 – Hindari Suara yang Mirip', icon: '👂', color: 'blue', short: 'Skill 3', gradient: 'linear-gradient(135deg, #1E40AF, #3B82F6)', subtitle: 'Jangan Tertipu Kata yang Bunyinya Mirip',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, terkadang pilihan jawaban berisi kata yang bunyinya mirip dengan kata yang diucapkan pada audio. Tujuannya adalah untuk mengecoh peserta tes.\n\nBanyak peserta memilih jawaban tersebut karena merasa pernah mendengarnya. Padahal, kata yang terdengar mirip belum tentu memiliki arti yang sama. Oleh karena itu, jangan hanya mengandalkan bunyi kata, tetapi pahami maksud dari percakapannya.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan makna keseluruhan percakapan, bukan hanya satu kata.', 'Jangan langsung memilih jawaban karena ada kata yang terdengar mirip.', 'Perhatikan konteks pembicaraan untuk menentukan jawaban yang benar.', 'Fokus pada arti, bukan bunyi kata.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'TOEFL sering menggunakan kata yang bunyinya hampir sama sebagai pengecoh (distractor).\nJika menemukan pilihan yang terdengar sangat mirip dengan audio, jangan langsung memilihnya. Periksa kembali apakah artinya benar-benar sesuai dengan isi percakapan.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Memilih jawaban hanya karena bunyinya mirip dengan audio.', 'Tidak memahami konteks percakapan.', 'Terlalu fokus pada satu kata daripada keseluruhan makna.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: Did Tom write the report?\nMan: No, he typed it yesterday.\n\nQuestion: What did Tom do?\nA. He wrote the report.\nB. He typed the report.\nC. He tore the report.\nD. He read the report.\n\n✅ Jawaban: B\n\nPembahasan:\nPada audio terdengar kata typed (mengetik). Pilihan A menggunakan kata wrote (menulis) yang artinya berbeda, sedangkan pilihan C menggunakan tore (merobek) yang bunyinya dapat mengecoh.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Jangan memilih jawaban hanya karena bunyinya mirip dengan audio.', 'Pahami arti dan konteks percakapan.', 'Kata yang terdengar mirip belum tentu memiliki makna yang sama.', 'Fokus pada informasi yang disampaikan, bukan pada kemiripan bunyi kata.'] }
              ],
              flashcards: [
                { q: 'Mengapa TOEFL menggunakan kata yang bunyinya mirip dalam pilihan jawaban?', a: 'Untuk mengecoh peserta tes yang tidak memahami konteks percakapan.' },
                { q: 'Apa bedanya "typed" dan "tore" dalam konteks TOEFL?', a: 'Typed artinya mengetik, sedangkan tore artinya merobek. Keduanya berbeda meskipun bunyinya mirip.' },
                { q: 'Apa yang harus dilakukan jika menemukan jawaban yang bunyinya sangat mirip dengan audio?', a: 'Periksa kembali apakah artinya sesuai dengan isi percakapan sebelum memilih.' },
                { q: 'Mengapa fokus pada arti lebih penting daripada fokus pada bunyi kata?', a: 'Karena TOEFL sengaja menggunakan kata yang bunyinya mirip sebagai jebakan.' },
                { q: 'Apa yang dimaksud dengan distractor dalam soal TOEFL?', a: 'Pilihan jawaban yang sengaja dibuat menyerupai audio untuk mengecoh.' }
              ]
            },
            {
              id: 'pa-skill-4', title: 'Skill 4 – Membuat Simpulan tentang Apa, Siapa, dan Di Mana', icon: '🔍', color: 'blue', short: 'Skill 4', gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)', subtitle: 'Menarik Kesimpulan dari Percakapan',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Tidak semua soal Listening Part A memberikan jawaban secara langsung. Pada beberapa soal, kamu harus menarik kesimpulan (inferensi) berdasarkan percakapan yang didengar.\n\nBiasanya, soal akan menanyakan apa yang sedang terjadi, siapa yang dibicarakan, atau di mana percakapan berlangsung. Jawabannya tidak disebutkan secara langsung, sehingga kamu harus memahami isi percakapan secara keseluruhan.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan seluruh percakapan hingga selesai.', 'Perhatikan kata-kata yang menunjukkan tempat, orang, atau aktivitas.', 'Hubungkan informasi dari kedua pembicara untuk menarik kesimpulan.', 'Pilih jawaban yang paling masuk akal berdasarkan isi percakapan, bukan berdasarkan tebakan.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Perhatikan petunjuk seperti nama tempat, profesi, benda, atau kegiatan.\nJangan mencari jawaban yang disebutkan secara langsung, karena biasanya kamu diminta menyimpulkan.\nGunakan logika berdasarkan informasi yang diberikan.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menjawab berdasarkan dugaan, bukan isi percakapan.', 'Mengabaikan petunjuk penting yang menunjukkan tempat atau orang.', 'Terlalu fokus pada satu kalimat tanpa menghubungkannya dengan kalimat lainnya.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: I\'d like to borrow this novel.\nMan: Sure. Please return it within one week.\n\nQuestion: Where does the conversation most likely take place?\nA. At a restaurant.\nB. At a library.\nC. At a bookstore.\nD. At a hospital.\n\n✅ Jawaban: B\n\nPembahasan:\nPada percakapan terdapat petunjuk borrow (meminjam) dan return it within one week (mengembalikannya dalam satu minggu). Kedua petunjuk tersebut menunjukkan bahwa percakapan kemungkinan besar terjadi di perpustakaan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Beberapa soal TOEFL mengharuskan kamu menarik kesimpulan.', 'Perhatikan petunjuk tentang apa, siapa, dan di mana.', 'Hubungkan informasi dari kedua pembicara.', 'Pilih jawaban yang paling sesuai dengan isi percakapan, bukan berdasarkan tebakan atau pengalaman pribadi.'] }
              ],
              flashcards: [
                { q: 'Kapan kita harus menarik kesimpulan saat mengerjakan soal Listening?', a: 'Ketika soal menanyakan apa yang terjadi, siapa yang dibicarakan, atau di mana percakapan berlangsung.' },
                { q: 'Mengapa jawaban tidak selalu disebutkan langsung dalam percakapan?', a: 'Karena beberapa soal menguji kemampuan inferensi, yaitu menarik kesimpulan dari informasi yang tersirat.' },
                { q: 'Apa petunjuk yang bisa digunakan untuk menarik kesimpulan?', a: 'Petunjuk seperti nama tempat, profesi, benda, atau aktivitas dalam percakapan.' },
                { q: 'Mengapa tidak boleh menjawab berdasarkan dugaan?', a: 'Karena jawaban harus berdasarkan isi percakapan, bukan pengalaman pribadi atau asumsi.' },
                { q: 'Mengapa harus menghubungkan informasi dari kedua pembicara?', a: 'Karena kesimpulan yang tepat biasanya diperoleh dari gabungan informasi kedua pembicara.' }
              ]
            },
            {
              id: 'pa-skill-5', title: 'Skill 5 – Mendengarkan Apa dan Siapa dalam Kalimat Pasif', icon: '🔄', color: 'blue', short: 'Skill 5', gradient: 'linear-gradient(135deg, #1D4ED8, #6366F1)', subtitle: 'Mengenali Passive Voice dalam Audio',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, terkadang pembicara menggunakan kalimat pasif (Passive Voice). Dalam kalimat pasif, objek pada kalimat aktif berubah menjadi subjek, sehingga pelaku tindakan tidak menjadi fokus utama atau bahkan tidak disebutkan.\n\nCiri umum kalimat pasif adalah menggunakan be (is, am, are, was, were, been) diikuti Verb 3 (V3), misalnya:\nThe report was completed yesterday.\nThe window was broken.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Kenali ciri kalimat pasif, yaitu be + Verb 3 (V3).', 'Perhatikan siapa yang menerima tindakan, bukan siapa yang melakukan tindakan.', 'Jika pelaku disebutkan, biasanya diawali dengan kata by.', 'Fokus pada makna kalimat secara keseluruhan.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Jangan langsung menganggap subjek sebagai pelaku tindakan.\nJika mendengar was, were, is, are yang diikuti Verb 3, kemungkinan besar itu adalah kalimat pasif.\nPahami siapa yang menerima tindakan dalam percakapan.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Mengira subjek adalah pelaku tindakan.', 'Tidak menyadari bahwa kalimat yang didengar merupakan kalimat pasif.', 'Mengabaikan kata by yang menunjukkan pelaku tindakan.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: Has the report been finished yet?\nMan: Yes, it was completed this morning.\n\nQuestion: What happened to the report?\nA. It will be completed tomorrow.\nB. It was completed this morning.\nC. Someone is writing it now.\nD. It has not been started.\n\n✅ Jawaban: B\n\nPembahasan:\nKalimat "It was completed this morning." merupakan kalimat pasif. Subjek it (laporan) menerima tindakan yaitu diselesaikan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Kalimat pasif biasanya menggunakan be + Verb 3 (V3).', 'Subjek pada kalimat pasif menerima tindakan, bukan melakukan tindakan.', 'Jika ada pelaku, biasanya diawali dengan kata by.', 'Pahami siapa atau apa yang dikenai tindakan agar tidak salah memilih jawaban.'] }
              ],
              flashcards: [
                { q: 'Apa ciri utama kalimat pasif dalam bahasa Inggris?', a: 'Menggunakan be (is, am, are, was, were, been) diikuti Verb 3 (V3).' },
                { q: 'Dalam kalimat pasif, siapa yang menjadi fokus?', a: 'Objek yang menerima tindakan, bukan pelaku tindakan.' },
                { q: 'Kata apa yang menunjukkan pelaku tindakan dalam kalimat pasif?', a: 'Kata "by", misalnya "The report was completed by the team."' },
                { q: 'Mengapa banyak peserta TOEFL salah memahami kalimat pasif?', a: 'Karena mereka menganggap subjek sebagai pelaku tindakan, padahal subjek justru menerima tindakan.' },
                { q: 'Contoh kalimat pasif: "It was completed this morning."', a: 'Artinya: Itu sudah diselesaikan pada pagi hari. Fokusnya pada bahwa laporan sudah selesai, bukan siapa yang menyelesaikannya.' }
              ]
            },
            {
              id: 'pa-skill-6', title: 'Skill 6 – Mendengarkan Apa dan Siapa dengan Kata Benda Ganda', icon: '🏷️', color: 'blue', short: 'Skill 6', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', subtitle: 'Memahami Hubungan Double Nouns',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, terkadang dalam satu kalimat terdapat dua kata benda (noun) yang berhubungan, misalnya nama orang dengan jabatannya, atau benda dengan pemiliknya. Kondisi ini disebut kata benda ganda (double nouns).\n\nContoh:\nThe student\'s book → buku milik siswa.\nProfessor Smith → Smith adalah seorang profesor.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan kedua kata benda yang muncul dalam percakapan.', 'Perhatikan hubungan antara kedua kata benda tersebut.', 'Tentukan siapa atau apa yang sebenarnya menjadi fokus pembicaraan.', 'Jangan langsung memilih jawaban hanya karena mendengar salah satu kata benda.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Perhatikan tanda kepemilikan seperti \'s atau kata of.\nBedakan antara pemilik dan benda yang dimiliki.\nJika terdapat nama orang dan jabatan, pahami bahwa keduanya mengacu pada orang yang sama.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Hanya memperhatikan satu kata benda.', 'Salah mengartikan hubungan kepemilikan.', 'Mengira kedua kata benda merupakan dua orang atau dua benda yang berbeda, padahal saling berhubungan.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: Did you return Lisa\'s notebook?\nMan: Yes, I gave it back this morning.\n\nQuestion: What did the man return?\nA. Lisa.\nB. A notebook.\nC. A library book.\nD. His notebook.\n\n✅ Jawaban: B\n\nPembahasan:\nPada percakapan terdapat frasa Lisa\'s notebook, yang berarti buku catatan milik Lisa, bukan Lisa yang dikembalikan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Kata benda ganda terdiri dari dua kata benda yang saling berhubungan.', 'Perhatikan hubungan antara kedua kata benda tersebut.', 'Bedakan pemilik dengan benda yang dimiliki.', 'Pahami makna keseluruhan frasa sebelum menentukan jawaban.'] }
              ],
              flashcards: [
                { q: 'Apa yang dimaksud dengan kata benda ganda (double nouns)?', a: 'Dua kata benda yang saling berhubungan dalam satu frasa, seperti nama pemilik dan benda yang dimiliki.' },
                { q: 'Apa arti "Lisa\'s notebook"?', a: 'Buku catatan milik Lisa. Lisa adalah pemiliknya, notebook adalah benda yang dimiliki.' },
                { q: 'Mengapa banyak peserta TOEFL salah dengan double nouns?', a: 'Karena mereka hanya memperhatikan salah satu kata benda tanpa memahami hubungan keduanya.' },
                { q: 'Tanda apa yang menunjukkan kepemilikan dalam frasa "the student\'s book"?', a: 'Tanda apostrof s (\'), menunjukkan bahwa buku adalah milik siswa.' },
                { q: 'Jika audio mengatakan "Professor Smith", apa yang harus dipahami?', a: 'Smith adalah seorang profesor. Keduanya mengacu pada orang yang sama.' }
              ]
            },
            {
              id: 'pa-skill-7', title: 'Skill 7 – Mendengarkan Ekspresi Negatif', icon: '🚫', color: 'blue', short: 'Skill 7', gradient: 'linear-gradient(135deg, #DC2626, #EF4444)', subtitle: 'Mengenali Kata Negatif dalam Audio',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, pembicara sering menggunakan ekspresi negatif untuk menyatakan bahwa sesuatu tidak terjadi, tidak benar, atau tidak dilakukan.\n\nKata-kata negatif ini sangat penting karena dapat mengubah makna seluruh kalimat.\n\nBeberapa kata negatif yang sering muncul antara lain:\nnot, no, never, none, nobody, nothing, nowhere, neither' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan dengan saksama apakah terdapat kata yang menunjukkan makna negatif.', 'Perhatikan perubahan arti setelah muncul kata negatif.', 'Pahami maksud keseluruhan kalimat, bukan hanya kata-katanya.', 'Jangan terburu-buru memilih jawaban sebelum memastikan ada atau tidaknya ekspresi negatif.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kata not sering diucapkan dengan cepat sehingga mudah terlewat.\nJika mendengar kata negatif, pikirkan kembali arti kalimat secara keseluruhan.\nJangan terkecoh oleh pilihan jawaban yang justru menyatakan kebalikan dari percakapan.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Tidak mendengar kata not atau never.', 'Mengabaikan kata negatif karena terlalu fokus pada kata kerja.', 'Memilih jawaban yang memiliki arti positif, padahal percakapan bermakna negatif.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: Did Sarah attend the meeting?\nWoman: No, she wasn\'t able to come.\n\nQuestion: What does the woman mean?\nA. Sarah attended the meeting.\nB. Sarah will attend the next meeting.\nC. Sarah could not come to the meeting.\nD. Sarah arrived late.\n\n✅ Jawaban: C\n\nPembahasan:\nKata No dan wasn\'t able to come menunjukkan makna negatif. Artinya Sarah tidak dapat hadir dalam rapat.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Perhatikan kata-kata yang menunjukkan makna negatif.', 'Kata negatif dapat mengubah arti seluruh kalimat.', 'Jangan sampai melewatkan kata not, never, atau no.', 'Pahami makna kalimat secara keseluruhan sebelum memilih jawaban.'] }
              ],
              flashcards: [
                { q: 'Sebutkan kata-kata negatif yang sering muncul dalam TOEFL Listening!', a: 'Not, no, never, none, nobody, nothing, nowhere, neither.' },
                { q: 'Mengapa kata negatif sangat penting dalam listening TOEFL?', a: 'Karena dapat mengubah makna seluruh kalimat menjadi kebalikan.' },
                { q: 'Mengapa kata "not" sering terlewat?', a: 'Karena diucapkan dengan cepat sehingga sulit didengar.' },
                { q: 'Apa arti kalimat "She wasn\'t able to come"?', a: 'Dia tidak dapat hadir atau datang.' },
                { q: 'Apa kesalahan jika memilih jawaban positif untuk percakapan negatif?', a: 'Jawaban menjadi berlawanan dengan makna sebenarnya dari percakapan.' }
              ]
            },
            {
              id: 'pa-skill-8', title: 'Skill 8 – Mendengarkan Ekspresi Negatif Ganda', icon: '🔁', color: 'blue', short: 'Skill 8', gradient: 'linear-gradient(135deg, #B91C1C, #DC2626)', subtitle: 'Memahami Double Negatives',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, kamu mungkin akan menemukan ekspresi negatif ganda (double negatives), yaitu kalimat yang mengandung dua kata negatif. Dalam bahasa Inggris dua kata negatif sering menghasilkan makna positif.\n\nBeberapa contoh:\nnot impossible = mungkin\nnot uncommon = cukup umum\nnot without = tidak tanpa' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Perhatikan apakah terdapat lebih dari satu kata negatif dalam percakapan.', 'Jangan hanya melihat kata not, tetapi pahami arti kalimat secara keseluruhan.', 'Jika menemukan dua kata negatif, pikirkan kembali apakah maknanya menjadi positif.', 'Pilih jawaban berdasarkan makna, bukan jumlah kata negatif.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Jangan panik saat mendengar dua kata negatif dalam satu kalimat.\nFokus pada maksud pembicara, bukan pada bentuk kalimatnya.\nIngat bahwa dua negatif tidak selalu berarti sangat negatif.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menganggap semua kalimat yang mengandung not pasti bermakna negatif.', 'Mengabaikan kata negatif kedua.', 'Memilih jawaban yang berlawanan dengan maksud sebenarnya.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nWoman: Is the exam difficult?\nMan: It\'s not impossible if you study.\n\nQuestion: What does the man mean?\nA. The exam cannot be passed.\nB. The exam is impossible.\nC. The exam can be passed if you study.\nD. The exam should be cancelled.\n\n✅ Jawaban: C\n\nPembahasan:\nUngkapan not impossible tidak berarti tidak mungkin, tetapi justru bermakna masih mungkin atau bisa dilakukan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Ekspresi negatif ganda mengandung dua kata negatif dalam satu kalimat.', 'Dua kata negatif tidak selalu menghasilkan makna negatif.', 'Pahami arti keseluruhan kalimat sebelum memilih jawaban.', 'Jangan hanya terpaku pada kata not, tetapi pahami maksud pembicara secara keseluruhan.'] }
              ],
              flashcards: [
                { q: 'Apa itu double negatives dalam bahasa Inggris?', a: 'Kalimat yang mengandung dua kata negatif, yang bisa menghasilkan makna positif.' },
                { q: 'Apa arti "not impossible"?', a: 'Masih mungkin atau bisa dilakukan.' },
                { q: 'Mengapa dua negatif bisa menjadi positif dalam bahasa Inggris?', a: 'Karena dalam bahasa Inggris, dua negatif saling meniadakan sehingga maknanya menjadi positif.' },
                { q: 'Contoh double negatives lainnya?', a: 'Not uncommon (cukup umum), not without (tidak tanpa).' },
                { q: 'Apa yang harus dilakukan saat menemukan dua kata negatif?', a: 'Pahami arti keseluruhan kalimat, jangan langsung menganggap bermakna negatif.' }
              ]
            },
            {
              id: 'pa-skill-9', title: 'Skill 9 – Mendengarkan Ekspresi Hampir Negatif', icon: '🤏', color: 'blue', short: 'Skill 9', gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)', subtitle: 'Mengenali Almost Negative Expressions',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Selain menggunakan kata negatif seperti not atau never, TOEFL juga sering menggunakan ekspresi hampir negatif (almost negative expressions). Ekspresi ini tidak mengandung kata "not", tetapi maknanya menunjukkan bahwa jumlah atau kemungkinan suatu hal sangat sedikit.\n\nBeberapa ekspresi hampir negatif:\nhardly = hampir tidak\nbarely = hampir tidak\nscarcely = hampir tidak\nrarely = jarang\nseldom = jarang\nfew = sedikit (kata benda dapat dihitung)\nlittle = sedikit (kata benda tidak dapat dihitung)' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Kenali kata-kata yang memiliki makna hampir negatif.', 'Jangan hanya mencari kata not atau never.', 'Pahami bahwa kata seperti hardly atau rarely menunjukkan sesuatu yang sangat jarang.', 'Pilih jawaban yang sesuai dengan makna tersebut.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Jika mendengar hardly, barely, atau scarcely, anggap maknanya hampir sama dengan almost not.\nKata few dan little menunjukkan jumlah yang sedikit, sehingga maknanya cenderung negatif.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menganggap kalimat bermakna positif karena tidak ada kata not.', 'Tidak mengenali kata-kata yang bermakna hampir negatif.', 'Salah memahami arti few dan little.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: Does David come to class regularly?\nWoman: He rarely misses a class.\n\nQuestion: What does the woman mean?\nA. David often skips class.\nB. David almost never attends class.\nC. David usually attends class.\nD. David has stopped coming to class.\n\n✅ Jawaban: C\n\nPembahasan:\nKata rarely misses berarti jarang tidak masuk kelas. Dengan kata lain, David biasanya hadir di kelas.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Ekspresi hampir negatif tidak menggunakan kata not, tetapi maknanya mendekati negatif.', 'Kata yang sering muncul antara lain hardly, barely, scarcely, rarely, seldom, few, dan little.', 'Pahami arti keseluruhan kalimat, jangan hanya fokus pada satu kata.', 'Perhatikan bagaimana ekspresi hampir negatif mengubah makna kalimat.'] }
              ],
              flashcards: [
                { q: 'Apa itu ekspresi hampir negatif (almost negative expressions)?', a: 'Ekspresi yang tidak mengandung "not" tetapi maknanya menunjukkan sesuatu yang sangat sedikit atau hampir tidak ada.' },
                { q: 'Sebutkan contoh ekspresi hampir negatif!', a: 'Hardly, barely, scarcely, rarely, seldom, few, little.' },
                { q: 'Apa arti "He rarely misses a class"?', a: 'Dia jarang tidak masuk kelas, artinya dia biasanya hadir di kelas.' },
                { q: 'Apa bedanya "few" dan "little"?', a: 'Few digunakan untuk kata benda yang dapat dihitung, little untuk kata benda yang tidak dapat dihitung.' },
                { q: 'Mengapa banyak peserta TOEFL terkecoh dengan ekspresi hampir negatif?', a: 'Karena tidak ada kata "not", sehingga mereka mengira kalimat bermakna positif.' }
              ]
            },
            {
              id: 'pa-skill-10', title: 'Skill 10 – Ekspresi Negatif dengan Kalimat Perbandingan', icon: '⚖️', color: 'blue', short: 'Skill 10', gradient: 'linear-gradient(135deg, #6D28D9, #7C3AED)', subtitle: 'Menggabungkan Negatif dan Perbandingan',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, terkadang ekspresi negatif muncul bersamaan dengan kalimat perbandingan (comparative). Bentuk soal seperti ini sering membingungkan karena menggabungkan dua konsep sekaligus.\n\nKalimat perbandingan biasanya menggunakan kata seperti:\nbetter (lebih baik)\nworse (lebih buruk)\nmore (lebih banyak)\nless (lebih sedikit)\nrather than (daripada)\ninstead of (sebagai pengganti)' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Kenali kata perbandingan dalam percakapan.', 'Perhatikan apakah ada kata negatif yang mengubah makna perbandingan.', 'Pahami apakah pembicara menyatakan preferensi atau penolakan.', 'Jangan terkecoh oleh struktur kalimat yang kompleks.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Perhatikan kata "rather than" dan "instead of" — keduanya menunjukkan pilihan atau perbandingan.\nJika ada kata negatif sebelum perbandingan, maknanya bisa berubah total.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Mengabaikan kata negatif dalam kalimat perbandingan.', 'Salah menentukan apa yang dipilih atau ditolak pembicara.', 'Tidak memahami bahwa perbandingan bisa berubah makna dengan adanya negatif.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: Should we take the bus or walk?\nWoman: Walking is not less convenient than taking the bus.\n\nQuestion: What does the woman mean?\nA. Walking is more convenient.\nB. Taking the bus is more convenient.\nC. Both are equally inconvenient.\nD. Walking is less convenient.\n\n✅ Jawaban: A\n\nPembahasan:\n"Not less convenient" berarti tidak kurang nyaman, artinya sama nyaman atau bahkan lebih nyaman. Pembicara menyatakan bahwa berjalan kaki sama nyaman atau lebih nyaman dari naik bus.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Ekspresi negatif bisa muncul bersama kalimat perbandingan.', 'Kata perbandingan meliputi better, worse, more, less, rather than, instead of.', 'Pahami apakah pembicara menyatakan preferensi atau penolakan.', 'Jangan terkecoh oleh struktur kalimat yang menggabungkan negatif dan perbandingan.'] }
              ],
              flashcards: [
                { q: 'Apa kata perbandingan yang sering muncul dalam TOEFL?', a: 'Better, worse, more, less, rather than, instead of.' },
                { q: 'Apa arti "not less convenient"?', a: 'Tidak kurang nyaman, artinya sama nyaman atau lebih nyaman.' },
                { q: 'Mengapa kalimat negatif dengan perbandingan membingungkan?', a: 'Karena menggabungkan dua konsep sekaligus: negasi dan perbandingan.' },
                { q: 'Kata "rather than" menunjukkan...', a: 'Pilihan atau perbandingan antara dua hal.' },
                { q: 'Yang harus diperhatikan saat mendengar kalimat perbandingan negatif adalah...', a: 'Apa yang dipilih atau ditolak pembicara berdasarkan makna keseluruhan kalimat.' }
              ]
            },
            {
              id: 'pa-skill-11', title: 'Skill 11 – Mendengarkan Persetujuan', icon: '🤝', color: 'blue', short: 'Skill 11', gradient: 'linear-gradient(135deg, #059669, #10B981)', subtitle: 'Mengenali Ekspresi Persetujuan',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, persetujuan tidak selalu diawali dengan kata "yes" atau "I agree". Pembicara bisa menyatakan persetujuan dengan berbagai cara yang lebih halus dan tidak langsung.\n\nContoh ekspresi persetujuan:\n- "You\'re right."\n- "That\'s true."\n- "I think so too."\n- "Exactly."\n- "That makes sense."' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan intonasi dan nada pembicara.', 'Perhatikan frasa yang menunjukkan persetujuan, meskipun tidak menggunakan kata "yes".', 'Jangan langsung menganggap jawaban negatif hanya karena tidak ada kata "yes".', 'Pahami konteks percakapan untuk menentukan apakah pembicara setuju atau tidak.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kata "right", "true", "exactly" bisa menunjukkan persetujuan.\nPerhatikan juga kata "well" di awal kalimat — bisa menunjukkan keraguan atau persetujuan dengan catatan.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menganggap tidak ada persetujuan hanya karena tidak ada kata "yes".', 'Tidak memperhatikan intonasi yang menunjukkan persetujuan.', 'Salah memahami persetujuan yang disertai catatan.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: The weather is really nice today.\nWoman: You\'re right. It\'s perfect for a walk.\n\nQuestion: What does the woman think about the weather?\nA. She disagrees with the man.\nB. She thinks the weather is bad.\nC. She agrees that the weather is nice.\nD. She doesn\'t care about the weather.\n\n✅ Jawaban: C\n\nPembahasan:\n"You\'re right" merupakan ekspresi persetujuan. Wanita tersebut setuju bahwa cuaca hari ini bagus.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Persetujuan tidak selalu diawali kata "yes".', 'Perhatikan frasa seperti "You\'re right", "That\'s true", "Exactly".', 'Intonasi dan nada bicara bisa menunjukkan persetujuan.', 'Pahami konteks untuk membedakan persetujuan tulus dan bersyarat.'] }
              ],
              flashcards: [
                { q: 'Apakah persetujuan dalam TOEFL selalu diawali kata "yes"?', a: 'Tidak, persetujuan bisa dinyatakan dengan frasa lain seperti "You\'re right", "Exactly", "That\'s true".' },
                { q: 'Apa arti "You\'re right" dalam percakapan?', a: 'Pembicara setuju dengan apa yang dikatakan lawan bicaranya.' },
                { q: 'Mengapa intonasi penting dalam menentukan persetujuan?', a: 'Karena intonasi bisa menunjukkan apakah persetujuan itu tulus, ragu-ragu, atau ironis.' },
                { q: 'Kata "well" di awal kalimat bisa menunjukkan...', a: 'Keraguan, persetujuan dengan catatan, atau permulaan yang hati-hati.' },
                { q: 'Contoh lain ekspresi persetujuan selain "yes" adalah...', a: '"I think so too", "Exactly", "That makes sense".' }
              ]
            },
            {
              id: 'pa-skill-12', title: 'Skill 12 – Mendengarkan Keraguan dan Saran', icon: '💭', color: 'blue', short: 'Skill 12', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)', subtitle: 'Mengenali Keraguan dan Saran',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, kamu perlu membedakan antara ekspresi keraguan (doubt) dan ekspresi saran (suggestion). Keduanya memiliki ciri khas yang berbeda.\n\nEkspresi keraguan:\n- "I\'m not sure..."\n- "I doubt it..."\n- "I don\'t know about that..."\n\nEkspresi saran:\n- "You should..."\n- "Why don\'t you..."\n- "You might want to..."\n- "If I were you..."' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Kenali frasa yang menunjukkan keraguan.', 'Kenali frasa yang menunjukkan saran.', 'Perhatikan perbedaan antara keduanya.', 'Jangan mencampuradukkan keraguan dengan saran.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Keraguan sering diungkapkan dengan nada ragu atau kalimat yang tidak tegas.\nSaran biasanya menggunakan modal verb seperti should, might, could.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menganggap keraguan sebagai jawaban yang pasti.', 'Mengira saran adalah perintah yang harus dilakukan.', 'Tidak memperhatikan perbedaan nada antara keraguan dan saran.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: Do you think it will rain today?\nWoman: I doubt it. The sky looks clear.\n\nQuestion: What does the woman mean?\nA. She is sure it will rain.\nB. She thinks it probably won\'t rain.\nC. She wants to go outside.\nD. She doesn\'t know about the weather.\n\n✅ Jawaban: B\n\nPembahasan:\n"I doubt it" menunjukkan keraguan. Wanita tersebut meragukan bahwa akan hujan karena langit terlihat cerah.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Keraguan dan saran memiliki ciri khas yang berbeda.', 'Ekspresi keraguan: "I\'m not sure", "I doubt it".', 'Ekspresi saran: "You should", "Why don\'t you".', 'Perhatikan nada dan frasa untuk membedakan keduanya.'] }
              ],
              flashcards: [
                { q: 'Apa bedanya keraguan dan saran dalam percakapan TOEFL?', a: 'Keraguan menunjukkan ketidakpastian, sedangkan saran menunjukkan usulan atau anjuran.' },
                { q: 'Contoh ekspresi keraguan adalah...', a: '"I\'m not sure", "I doubt it", "I don\'t know about that".' },
                { q: 'Contoh ekspresi saran adalah...', a: '"You should", "Why don\'t you", "If I were you".' },
                { q: 'Apa arti "I doubt it" dalam percakapan?', a: 'Pembicara meragukan atau tidak yakin dengan sesuatu.' },
                { q: 'Modal verb apa yang sering digunakan dalam memberikan saran?', a: 'Should, might, could.' }
              ]
            },
            {
              id: 'pa-skill-13', title: 'Skill 13 – Mendengarkan Respons Tertarik', icon: '😲', color: 'blue', short: 'Skill 13', gradient: 'linear-gradient(135deg, #E11D48, #F43F5E)', subtitle: 'Mengenali Respons Tertarik atau Keterkejutan',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Pada Listening Part A TOEFL, pembicara sering menunjukkan respons tertarik, terkejut, atau antusias melalui ungkapan tertentu. Ungkapan ini bukan pertanyaan, tetapi reaksi emosional terhadap informasi yang diterima.\n\nContoh:\n- "Really?" (keterkejutan)\n- "No way!" (keterkejutan atau ketidakpercayaan)\n- "That\'s amazing!" (kekaguman)\n- "You don\'t say!" (keterkejutan)' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Kenali ungkapan yang menunjukkan keterkejutan atau kekaguman.', 'Jangan menganggap "Really?" sebagai pertanyaan yang harus dijawab.', 'Perhatikan konteks untuk memahami emosi pembicara.', 'Pahami bahwa respons seperti ini menunjukkan reaksi, bukan pertanyaan.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: '"Really?" dan "No way!" sering digunakan untuk menunjukkan keterkejutan, bukan meminta konfirmasi.\nPerhatikan intonasi naik yang menunjukkan kekaguman atau antusiasme.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menganggap "Really?" sebagai pertanyaan yang membutuhkan jawaban.', 'Tidak memahami konteks emosional di balik ungkapan tersebut.', 'Salah menafsirkan respons sebagai keraguan padahal itu kekaguman.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: I got accepted to Harvard University!\nWoman: Really? That\'s incredible! Congratulations!\n\nQuestion: What does the woman mean?\nA. She doesn\'t believe the man.\nB. She is surprised and happy for the man.\nC. She is jealous of the man.\nD. She thinks the man is lying.\n\n✅ Jawaban: B\n\nPembahasan:\n"Really?" dalam konteks ini menunjukkan keterkejutan yang positif, diikuti dengan "That\'s incredible!" yang menunjukkan kegembiraan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Ungkapan seperti "Really?" dan "No way!" menunjukkan keterkejutan, bukan pertanyaan.', 'Perhatikan konteks emosional di balik ungkapan.', 'Intonasi naik menunjukkan kekaguman atau antusiasme.', 'Jangan menganggap respons emosional sebagai pertanyaan literal.'] }
              ],
              flashcards: [
                { q: 'Apa makna "Really?" dalam konteks TOEFL?', a: 'Menunjukkan keterkejutan atau kekaguman, bukan pertanyaan literal.' },
                { q: 'Apa makna "No way!" dalam percakapan?', a: 'Keterkejutan atau ketidakpercayaan terhadap sesuatu.' },
                { q: 'Mengapa "Really?" bukan pertanyaan yang harus dijawab?', a: 'Karena itu adalah reaksi emosional, bukan permintaan informasi.' },
                { q: 'Apa yang diikuti oleh ungkapan keterkejutan?', a: 'Biasanya diikuti ungkapan kekaguman seperti "That\'s amazing!" atau "Congratulations!".' },
                { q: 'Intonasi naik dalam "Really?" menunjukkan...', a: 'Kekaguman atau antusiasme, bukan keraguan.' }
              ]
            }
          ]
        },
        {
          id: 'part-b',
          title: 'Part B – Dialog Panjang',
          icon: '💬',
          color: 'secondary',
          short: 'Part B',
          gradient: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
          subtitle: '3 Skill untuk Dialog Panjang',
          children: [
            {
              id: 'pb-skill-1', title: 'Skill 1 – Prediksi Topik Dialog Panjang', icon: '🔮', color: 'secondary', short: 'Skill 1', gradient: 'linear-gradient(135deg, #0EA5E9, #06B6D4)', subtitle: 'Mengenali Topik dari Kata yang Diulang',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Dalam dialog panjang TOEFL (Part B), kamu akan mendengarkan percakapan yang lebih panjang antara dua pembicara. Untuk menjawab soal dengan tepat, langkah pertama yang harus dilakukan adalah mengenali topik pembicaraan.\n\nSalah satu cara terbaik untuk mengenali topik adalah dengan memperhatikan kata-kata yang sering diulang oleh pembicara. Kata yang diulang biasanya merupakan kata kunci yang berkaitan langsung dengan topik pembicaraan.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan kata-kata kunci yang muncul berulang kali.', 'Catat atau hafalkan kata yang diulang.', 'Gunakan kata tersebut untuk memprediksi topik pembicaraan.', 'Perhatikan juga konteks sekitar kata kunci tersebut.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kata kunci biasanya muncul di awal dan diulang sepanjang percakapan.\nJangan mencoba menghafal seluruh percakapan — cukup fokus pada kata kunci.\nTopik bisa berubah, jadi perhatikan jika ada pergeseran kata kunci.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Tidak memperhatikan kata yang diulang.', 'Fokus pada detail kecil dan kehilangan topik utama.', 'Tidak menyadari pergeseran topik dalam percakapan panjang.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: I\'ve been having trouble with my car lately.\nWoman: What kind of trouble?\nMan: The engine makes a strange noise when I start it. And sometimes it stalls at traffic lights.\nWoman: Have you taken it to a mechanic?\nMan: Not yet. I\'m not sure which one to trust.\n\nKata "car", "engine", "mechanic" diulang → Topik: Masalah mobil dan perbaikan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Perhatikan kata yang sering diulang dalam dialog.', 'Kata yang diulang biasanya merupakan kata kunci topik.', 'Gunakan kata kunci untuk memprediksi arah pertanyaan.', 'Jangan terjebak pada detail kecil, fokus pada topik utama.'] }
              ],
              flashcards: [
                { q: 'Bagaimana cara menentukan topik dalam dialog panjang?', a: 'Perhatikan kata-kata yang sering diulang oleh pembicara, itu adalah kata kunci topik.' },
                { q: 'Mengapa kata yang diulang penting?', a: 'Karena kata yang diulang menunjukkan topik utama pembicaraan.' },
                { q: 'Apa yang harus dilakukan setelah mengenali kata kunci?', a: 'Gunakan kata kunci tersebut untuk memprediksi jenis pertanyaan yang akan muncul.' },
                { q: 'Bagaimana jika topik berubah di tengah percakapan?', a: 'Perhatikan pergeseran kata kunci untuk mengikuti topik baru.' },
                { q: 'Kesalahan umum saat mendengarkan dialog panjang?', a: 'Terjebak pada detail kecil dan kehilangan topik utama.' }
              ]
            },
            {
              id: 'pb-skill-2', title: 'Skill 2 – Memprediksi Pertanyaan', icon: '❓', color: 'secondary', short: 'Skill 2', gradient: 'linear-gradient(135deg, #0891B2, #06B6D4)', subtitle: 'Siapkan Diri Sebelum Pertanyaan Dibacakan',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Salah satu strategi penting dalam mengerjakan TOEFL Listening Part B adalah memprediksi pertanyaan yang akan muncul. Dengan memprediksi pertanyaan, otak kamu akan lebih siap untuk menangkap informasi yang relevan saat mendengarkan dialog.\n\nPertanyaan TOEFL biasanya berkaitan dengan:\n- Topik pembicaraan\n- Pendapat pembicara\n- Alasan atau sebab-akibat\n- Kesimpulan dari percakapan' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Setelah mengenali topik, bayangkan pertanyaan apa yang mungkin muncul.', 'Siapkan mental untuk menjawab pertanyaan tentang topik tersebut.', 'Saat mendengarkan, kumpulkan informasi yang relevan dengan prediksi pertanyaan.', 'Setelah pertanyaan dibacakan, bandingkan dengan prediksi kamu.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Pertanyaan umum: "What is the conversation about?" "Why does the man/woman...?" "What will they do next?"\nJika pembicara membahas masalah, prediksi pertanyaan tentang solusi.\nJika pembicara membahas rencana, prediksi pertanyaan tentang langkah selanjutnya.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Mendengarkan tanpa persiapan prediksi.', 'Tidak bisa membedakan informasi penting dan tidak penting.', 'Kehilangan fokus karena tidak tahu apa yang harus didengar.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Setelah mendengarkan dialog tentang masalah mobil:\n\nPrediksi pertanyaan:\n1. What is the conversation about? → Masalah mobil\n2. What is wrong with the car? → Mesin berisik dan mogok\n3. What does the woman suggest? → Pergi ke mekanik\n4. Why hasn\'t the man gone to a mechanic? → Tidak yakin dengan mekanik yang bisa dipercaya\n\nDengan memprediksi, kamu sudah siap saat pertanyaan dibacakan.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Memprediksi pertanyaan membantu otak fokus pada informasi yang relevan.', 'Pertanyaan biasanya tentang topik, pendapat, alasan, atau kesimpulan.', 'Setelah mengenali topik, bayangkan pertanyaan yang mungkin muncul.', 'Bandingkan prediksi dengan pertanyaan sesungguhnya setelah dibacakan.'] }
              ],
              flashcards: [
                { q: 'Mengapa penting memprediksi pertanyaan sebelum mendengarkan?', a: 'Agar otak sudah siap menangkap informasi yang relevan.' },
                { q: 'Jenis pertanyaan apa yang sering muncul di Part B?', a: 'Topik pembicaraan, pendapat, alasan/sebab-akibat, dan kesimpulan.' },
                { q: 'Bagaimana cara memprediksi pertanyaan?', a: 'Setelah mengenali topik, bayangkan pertanyaan apa yang logis muncul dari topik tersebut.' },
                { q: 'Apa manfaat dari memprediksi pertanyaan?', a: 'Membantu membedakan informasi penting dan tidak penting.' },
                { q: 'Kapan waktu terbaik untuk memprediksi pertanyaan?', a: 'Saat mendengarkan dialog, terutama setelah mengenali topik utama.' }
              ]
            },
            {
              id: 'pb-skill-3', title: 'Skill 3 – Menarik Kesimpulan dari Dialog Panjang', icon: '🧩', color: 'secondary', short: 'Skill 3', gradient: 'linear-gradient(135deg, #0284C7, #0EA5E9)', subtitle: 'Menghubungkan Seluruh Informasi',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Beberapa soal TOEFL Listening Part B meminta kamu menarik kesimpulan dari dialog panjang. Kesimpulan ini tidak selalu disebutkan secara langsung dalam percakapan, sehingga kamu harus menghubungkan berbagai informasi yang diberikan oleh kedua pembicara.\n\nKesimpulan yang baik harus didukung oleh fakta dalam percakapan, bukan berdasarkan asumsi atau pengalaman pribadi.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan seluruh dialog dari awal hingga akhir.', 'Catat informasi penting dari kedua pembicara.', 'Hubungkan informasi untuk membentuk gambaran utuh.', 'Pilih jawaban yang paling didukung oleh fakta dalam percakapan.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Perhatikan perubahan sikap atau rencana pembicara dari awal hingga akhir dialog.\nKesimpulan sering berkaitan dengan hasil akhir atau keputusan yang diambil.\nJangan memilih jawaban yang terlalu luas atau terlalu spesifik tanpa bukti.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menarik kesimpulan tanpa dasar fakta yang kuat.', 'Hanya mengandalkan informasi dari satu bagian dialog.', 'Memilih jawaban yang paling menarik tetapi tidak didukung audio.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\nMan: I was thinking of going to the movies tonight.\nWoman: I thought you had to study for your exam.\nMan: You\'re right. Maybe I should stay home.\nWoman: Good idea. We can study together.\n\nQuestion: What will the man most likely do?\nA. Go to the movies.\nB. Study at home with the woman.\nC. Study alone at the library.\nD. Cancel the exam.\n\n✅ Jawaban: B\n\nPembahasan:\nDari seluruh dialog: pria awalnya ingin nonton → diingatkan harus belajar → setuju tinggal di rumah → wanita menawarkan belajar bersama. Kesimpulan: mereka belajar bersama di rumah.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Kesimpulan harus didukung oleh fakta dalam percakapan.', 'Dengarkan seluruh dialog dari awal hingga akhir.', 'Hubungkan informasi dari kedua pembicara.', 'Hindari asumsi pribadi — gunakan hanya informasi dari audio.'] }
              ],
              flashcards: [
                { q: 'Bagaimana cara menarik kesimpulan dari dialog panjang?', a: 'Hubungkan informasi dari kedua pembicara dari awal hingga akhir percakapan.' },
                { q: 'Mengapa kesimpulan tidak selalu disebutkan langsung?', a: 'Karena beberapa soal menguji kemampuan inferensi — menghubungkan informasi yang tersirat.' },
                { q: 'Apa yang harus dihindari saat menarik kesimpulan?', a: 'Asumsi pribadi atau pengalaman di luar audio.' },
                { q: 'Informasi dari siapa yang harus diperhatikan?', a: 'Dari kedua pembicara, karena kesimpulan sering gabungan dari keduanya.' },
                { q: 'Kapan waktu terbaik untuk menarik kesimpulan?', a: 'Setelah mendengarkan seluruh dialog, saat pertanyaan dibacakan.' }
              ]
            }
          ],
          flashcards: [
            { q: 'Bagaimana cara memprediksi topik dalam dialog panjang?', a: 'Perhatikan kata-kata yang sering diulang oleh pembicara.' },
            { q: 'Mengapa penting memprediksi pertanyaan sebelum dibacakan?', a: 'Agar otak sudah siap menjawab dan tidak kaget saat mendengar pertanyaan.' },
            { q: 'Bagaimana cara menarik kesimpulan dari dialog panjang?', a: 'Hubungkan seluruh informasi dari kedua pembicara sepanjang percakapan.' }
          ]
        },
        {
          id: 'part-c',
          title: 'Part C – Monolog / Ceramah',
          icon: '🎤',
          color: 'accent',
          short: 'Part C',
          gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
          subtitle: '3 Skill untuk Monolog/Ceramah',
          children: [
            {
              id: 'pc-skill-1', title: 'Skill 1 – Kenali Topik Ceramah', icon: '🎤', color: 'accent', short: 'Skill 1', gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)', subtitle: 'Identifikasi Topik sejak Kalimat Pertama',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Part C TOEFL Listening berisi monolog atau ceramah dari satu pembicara. Berbeda dengan Part A dan B yang berisi dialog, Part C memberikan informasi dalam satu arah.\n\nTopik ceramah biasanya diperkenalkan pada kalimat pertama atau dua kalimat pertama. Mengenali topik sejak awal sangat penting karena akan membantu kamu memahami seluruh isi ceramah.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan kalimat pertama dengan sangat saksama.', 'Identifikasi topik utama dari kalimat pertama.', 'Gunakan topik sebagai pedoman untuk memahami sisa ceramah.', 'Catat poin-poin penting yang berkaitan dengan topik.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kalimat pertama sering kali berisi frasa seperti:\n- "Today I\'m going to talk about..."\n- "The topic of this lecture is..."\n- "Have you ever wondered about..."\nJika tidak ada pengenalan langsung, perhatikan kata kunci di awal ceramah.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Tidak fokus pada kalimat pertama.', 'Kehilangan topik karena terlalu fokus pada detail.', 'Tidak bisa membedakan informasi utama dan pendukung.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Audio Script:\n"Today I\'d like to discuss the impact of social media on modern communication. We\'ll look at both the positive and negative effects..."  \n\nKalimat pertama → Topik: Dampak media sosial terhadap komunikasi modern.\nDari topik ini, kamu sudah bisa memprediksi:\n- Soal akan menanyakan topik ceramah\n- Soal mungkin menanyakan dampak positif/negatif\n- Soal bisa menanyakan pendapat pembicara' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Topik ceramah biasanya ada di kalimat pertama.', 'Mengenali topik sejak awal membantu memahami sisa ceramah.', 'Perhatikan frasa pengenalan seperti "Today I\'ll talk about...".', 'Gunakan topik sebagai pedoman untuk memprediksi pertanyaan.'] }
              ],
              flashcards: [
                { q: 'Di mana topik ceramah biasanya diperkenalkan?', a: 'Di kalimat pertama atau dua kalimat pertama ceramah.' },
                { q: 'Mengapa penting mengenali topik sejak awal?', a: 'Karena topik menjadi pedoman untuk memahami seluruh isi ceramah.' },
                { q: 'Apa frasa yang sering digunakan untuk memperkenalkan topik?', a: '"Today I\'m going to talk about...", "The topic is...", "Have you ever wondered..."' },
                { q: 'Bagaimana jika tidak ada pengenalan topik yang jelas?', a: 'Perhatikan kata kunci yang muncul di awal ceramah.' },
                { q: 'Setelah mengenali topik, apa langkah selanjutnya?', a: 'Catat poin-poin penting yang berkaitan dengan topik.' }
              ]
            },
            {
              id: 'pc-skill-2', title: 'Skill 2 – Memprediksi Pertanyaan Ceramah', icon: '🔮', color: 'accent', short: 'Skill 2', gradient: 'linear-gradient(135deg, #6D28D9, #7C3AED)', subtitle: 'Fokus pada Tujuan Pembicara',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Dalam Part C, banyak soal yang menanyakan tujuan atau maksud pembicara. Memprediksi pertanyaan sejak awal ceramah akan membantu kamu fokus pada informasi yang paling relevan.\n\nJenis pertanyaan yang sering muncul di Part C:\n- What is the main topic of the talk?\n- What is the speaker\'s purpose?\n- What does the speaker imply about...?\n- What will the speaker probably discuss next?' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Setelah mengenali topik, prediksi pertanyaan yang mungkin muncul.', 'Perhatikan tujuan pembicara: menginformasikan, membujuk, atau menjelaskan.', 'Dengarkan transisi antar bagian ceramah.', 'Catat poin-poin yang mungkin menjadi bahan pertanyaan.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Jika ceramah berisi daftar atau langkah-langkah, prediksi pertanyaan tentang urutan.\nJika ceramah membandingkan dua hal, prediksi pertanyaan tentang perbedaan/similaritas.\nJika ceramah menjelaskan sebab-akibat, prediksi pertanyaan tentang hubungan sebab-akibat.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Tidak bisa mengidentifikasi tujuan pembicara.', 'Kehilangan informasi penting karena tidak memprediksi pertanyaan.', 'Salah menafsirkan implikasi pembicara.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Ceramah tentang dampak media sosial:\n\nPrediksi pertanyaan:\n1. What is the main topic? → Dampak media sosial\n2. What is the speaker\'s purpose? → Mengedukasi tentang dampak media sosial\n3. What does the speaker say about the positive effects? → Meningkatkan konektivitas\n4. What does the speaker imply about the negative effects? → Bisa menyebabkan isolasi sosial\n5. What will the speaker probably discuss next? → Solusi atau rekomendasi' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Banyak soal Part C menanyakan tujuan pembicara.', 'Prediksi pertanyaan setelah mengenali topik.', 'Perhatikan jenis ceramah: informatif, persuasif, atau eksplanatori.', 'Catat poin-poin yang mungkin menjadi bahan pertanyaan.'] }
              ],
              flashcards: [
                { q: 'Jenis pertanyaan apa yang sering muncul di Part C?', a: 'Topik ceramah, tujuan pembicara, implikasi, dan prediksi pembahasan selanjutnya.' },
                { q: 'Mengapa penting memprediksi pertanyaan?', a: 'Agar bisa fokus pada informasi yang relevan saat mendengarkan ceramah.' },
                { q: 'Apa yang harus diperhatikan dari pembicara?', a: 'Tujuan pembicara: apakah menginformasikan, membujuk, atau menjelaskan.' },
                { q: 'Jika ceramah berisi perbandingan, prediksi pertanyaannya tentang...', a: 'Perbedaan atau kesamaan antara dua hal yang dibandingkan.' },
                { q: 'Bagaimana cara mengetahui apa yang akan dibahas selanjutnya?', a: 'Perhatikan transisi dan petunjuk seperti "Next, I\'ll discuss...".' }
              ]
            },
            {
              id: 'pc-skill-3', title: 'Skill 3 – Menarik Kesimpulan dari Ceramah', icon: '🔗', color: 'accent', short: 'Skill 3', gradient: 'linear-gradient(135deg, #7C3AED, #C084FC)', subtitle: 'Menghubungkan Seluruh Informasi',
              sections: [
                { type: 'pengertian', icon: '📖', title: 'Penjelasan', content: 'Beberapa soal meminta kamu menyimpulkan informasi yang tidak disebutkan secara langsung. Kamu harus menghubungkan seluruh isi ceramah untuk menemukan jawaban yang paling logis.' },
                { type: 'tujuan', icon: '🎯', title: 'Strategi Mengerjakan', checklist: ['Dengarkan ceramah hingga selesai.', 'Hubungkan semua informasi.', 'Pilih kesimpulan yang paling didukung isi ceramah.'] },
                { type: 'tips', icon: '💡', title: 'Tips', content: 'Kesimpulan harus berasal dari informasi dalam audio, bukan dari pengetahuan pribadi.' },
                { type: 'contoh', icon: '⚠️', title: 'Kesalahan yang Sering Terjadi', bullet: ['Menebak jawaban.', 'Mengabaikan informasi penting.'] },
                { type: 'info', icon: '📝', title: 'Contoh Soal dan Pembahasan', content: 'Question: What can be inferred from the talk?\n\nPilih jawaban yang paling sesuai dengan isi ceramah.\n\nPembahasan:\nSoal "What can be inferred from the talk?" meminta kesimpulan berdasarkan isi ceramah. Untuk menjawabnya, hubungkan seluruh informasi yang disampaikan pembicara dan pilih jawaban yang paling didukung oleh fakta dalam audio.' },
                { type: 'ringkasan', icon: '📌', title: 'Ringkasan', bullet: ['Dengarkan hingga selesai.', 'Hubungkan informasi penting.', 'Pilih kesimpulan yang paling logis.', 'Kesimpulan harus didukung fakta dalam audio, bukan asumsi pribadi.'] }
              ],
              flashcards: [
                { q: 'Mengapa soal inferensi penting dalam Part C?', a: 'Karena beberapa informasi tidak disebutkan secara langsung dan harus disimpulkan.' },
                { q: 'Dari mana kesimpulan harus berasal?', a: 'Dari informasi dalam audio, bukan dari pengetahuan pribadi.' },
                { q: 'Mengapa harus mendengarkan ceramah hingga selesai?', a: 'Karena kesimpulan bisa diperoleh dari informasi di akhir ceramah.' },
                { q: 'Apa yang harus dilakukan setelah mendengarkan seluruh ceramah?', a: 'Hubungkan semua informasi dan pilih kesimpulan yang paling didukung.' },
                { q: 'Apa kesalahan umum saat menjawab soal inferensi?', a: 'Menebak jawaban atau mengabaikan informasi penting.' }
              ]
            }
          ],
          flashcards: [
            { q: 'Bagaimana cara mengenali topik ceramah?', a: 'Dengarkan kalimat pertama, biasanya berisi pengenalan topik.' },
            { q: 'Mengapa penting memahami tujuan pembicara?', a: 'Karena banyak soal Part C menanyakan tujuan atau maksud pembicara.' },
            { q: 'Bagaimana cara menarik kesimpulan dari ceramah?', a: 'Hubungkan semua informasi penting dari awal hingga akhir ceramah.' }
          ]
        }
      ],
      quiz: [
        {
          q: 'Man:\nDid you submit the assignment yesterday?\n\nWoman:\nI was going to, but my internet connection stopped working.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'She already submitted the assignment.',
            'She could not submit the assignment because of a problem.',
            'She forgot about the assignment.',
            'She did not have an assignment.'
          ],
          answer: 1,
          explanation: 'The woman could not submit the assignment because her internet connection stopped working.'
        },
        {
          q: 'The solar system consists of the Sun and all objects that move around it. There are eight planets in the solar system. Each planet has different characteristics. Some planets are made mostly of rock, while others contain large amounts of gas.\n\nQuestion:\nWhat is the lecture mainly about?',
          options: [
            'The history of space travel',
            'The planets in the solar system',
            'The formation of Earth',
            'The exploration of Mars'
          ],
          answer: 1,
          explanation: 'The lecture discusses the solar system and its planets.'
        },
        {
          q: 'Woman:\nHow was your exam?\n\nMan:\nLet\'s just say I need to study harder next time.\n\nQuestion:\nWhat does the man imply?',
          options: [
            'He got a perfect score.',
            'He did not perform well on the exam.',
            'He does not need to study.',
            'He has not taken the exam.'
          ],
          answer: 1,
          explanation: 'The expression means his exam result was not good.'
        },
        {
          q: 'Woman:\nAre you joining the science club this semester?\n\nMan:\nI wanted to, but I have too many classes this year.\n\nWoman:\nThat\'s unfortunate. The club activities are interesting.\n\nMan:\nI know. Maybe I can join next semester.\n\nQuestion:\nWhy does the man not join the science club?',
          options: [
            'He does not like science.',
            'He is too busy with classes.',
            'The club is expensive.',
            'The club has ended.'
          ],
          answer: 1,
          explanation: 'He says he has too many classes.'
        },
        {
          q: 'Man:\nDid you hear that Lisa bought a new laptop?\n\nWoman:\nNo wonder she has been spending so much time at the computer store.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'Lisa works at a computer store.',
            'Lisa bought a new laptop.',
            'Lisa dislikes computers.',
            'Lisa lost her laptop.'
          ],
          answer: 1,
          explanation: '"No wonder" indicates she understands why Lisa was at the store — because she bought a laptop.'
        },
        {
          q: 'The Great Wall of China was built over many centuries. It was originally created to protect Chinese territories from invasions. Today, it is one of the world\'s most famous historical landmarks.\n\nQuestion:\nWhy was the Great Wall built?',
          options: [
            'To attract tourists',
            'To protect territories',
            'To connect cities',
            'To create trade routes'
          ],
          answer: 1,
          explanation: 'The text states it was originally created to protect Chinese territories from invasions.'
        },
        {
          q: 'Woman:\nAre you sure you want to drive in this weather?\n\nMan:\nI don\'t think I have much of a choice.\n\nQuestion:\nWhat does the man mean?',
          options: [
            'He does not want to drive.',
            'He has another option.',
            'He must drive.',
            'He enjoys bad weather.'
          ],
          answer: 2,
          explanation: '"I don\'t think I have much of a choice" means he must drive despite the weather.'
        },
        {
          q: 'Man:\nDid you finish reading the article for class?\n\nWoman:\nAlmost. I only have the last two pages left.\n\nMan:\nThe discussion is tomorrow, so make sure you finish it.\n\nWoman:\nDon\'t worry, I will.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'She has not started reading.',
            'She has almost finished reading.',
            'She lost the article.',
            'She does not attend class.'
          ],
          answer: 1,
          explanation: 'She says "Almost. I only have the last two pages left." meaning she has almost finished.'
        },
        {
          q: 'Plants need sunlight, water, and nutrients to grow. Through photosynthesis, plants convert sunlight into energy. This process allows plants to produce food.\n\nQuestion:\nWhat is the purpose of photosynthesis?',
          options: [
            'To produce food for plants',
            'To remove water from plants',
            'To protect plants from animals',
            'To increase soil quality'
          ],
          answer: 0,
          explanation: 'The text states photosynthesis allows plants to produce food.'
        },
        {
          q: 'Man:\nDid Sarah attend the meeting?\n\nWoman:\nShe was supposed to, but she had an emergency.\n\nQuestion:\nWhat happened to Sarah?',
          options: [
            'She attended the meeting.',
            'She cancelled the meeting.',
            'She could not attend the meeting.',
            'She organized the meeting.'
          ],
          answer: 2,
          explanation: 'She was supposed to attend but had an emergency, so she could not attend.'
        },
        {
          q: 'Woman:\nDo you like the new restaurant?\n\nMan:\nIt is not exactly my favorite place.\n\nQuestion:\nWhat does the man mean?',
          options: [
            'He loves the restaurant.',
            'He dislikes the restaurant.',
            'He has never visited it.',
            'He owns the restaurant.'
          ],
          answer: 1,
          explanation: '"Not exactly my favorite place" is an indirect way of saying he dislikes it.'
        },
        {
          q: 'Climate change affects many parts of the world. Rising temperatures can cause melting ice, higher sea levels, and changes in weather patterns.\n\nQuestion:\nWhat is the passage mainly about?',
          options: [
            'Weather prediction',
            'Effects of climate change',
            'Ocean exploration',
            'Ice formation'
          ],
          answer: 1,
          explanation: 'The passage discusses the effects of climate change on the world.'
        },
        {
          q: 'Woman:\nWhy are you going to the library?\n\nMan:\nI need some references for my research paper.\n\nWoman:\nWhen is the paper due?\n\nMan:\nNext Monday.\n\nQuestion:\nWhy does the man go to the library?',
          options: [
            'To meet his friend',
            'To borrow a movie',
            'To find research materials',
            'To study for an exam'
          ],
          answer: 2,
          explanation: 'He says he needs references for his research paper.'
        },
        {
          q: 'Man:\nCan you help me with this computer problem?\n\nWoman:\nI wish I could, but I am not familiar with that software.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'She can solve the problem.',
            'She does not know how to help.',
            'She created the software.',
            'She likes the software.'
          ],
          answer: 1,
          explanation: '"I wish I could, but I am not familiar" means she does not know how to help.'
        },
        {
          q: 'The human brain controls many activities, including movement, memory, and emotions. Scientists continue studying the brain to understand how it works.\n\nQuestion:\nWhat is the lecture about?',
          options: [
            'Human emotions only',
            'The functions of the brain',
            'Computer technology',
            'Medical history'
          ],
          answer: 1,
          explanation: 'The lecture discusses the functions and study of the human brain.'
        },
        {
          q: 'Woman:\nHave you decided which course you want to take next semester?\n\nMan:\nI am thinking about taking a computer programming class.\n\nWoman:\nReally? I thought you were interested in business.\n\nMan:\nI am, but I think programming skills will be useful for my future career.\n\nQuestion:\nWhy does the man want to take a programming class?',
          options: [
            'Because his friend recommended it.',
            'Because he wants to become a teacher.',
            'Because programming skills may help his career.',
            'Because the class is easier than business.'
          ],
          answer: 2,
          explanation: 'The man says programming skills will be useful for his future career.'
        },
        {
          q: 'Man:\nDid you enjoy the concert last night?\n\nWoman:\nI couldn\'t have enjoyed it more.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'She did not like the concert.',
            'She enjoyed the concert very much.',
            'She left before the concert started.',
            'She has never been to a concert.'
          ],
          answer: 1,
          explanation: '"I couldn\'t have enjoyed it more" means she enjoyed it extremely much.'
        },
        {
          q: 'The invention of the telephone changed communication around the world. Before telephones existed, people had to send messages through letters, which could take days or weeks to arrive. Telephones allowed people to communicate instantly over long distances.\n\nQuestion:\nWhat is the main idea of the lecture?',
          options: [
            'How letters are delivered',
            'The history and impact of telephones',
            'The problems with modern technology',
            'How people travel long distances'
          ],
          answer: 1,
          explanation: 'The lecture discusses the invention and impact of telephones.'
        },
        {
          q: 'Woman:\nAre you going to the party tonight?\n\nMan:\nI would rather stay home and finish my project.\n\nQuestion:\nWhat does the man mean?',
          options: [
            'He prefers to work on his project.',
            'He wants to organize the party.',
            'He has finished his project.',
            'He forgot about the party.'
          ],
          answer: 0,
          explanation: '"I would rather" means he prefers one choice over another — staying home to work.'
        },
        {
          q: 'Man:\nDid you buy the textbook for the class?\n\nWoman:\nNot yet. I went to the bookstore, but they were sold out.\n\nMan:\nYou should try ordering it online.\n\nWoman:\nThat\'s a good idea. I\'ll do that tonight.\n\nQuestion:\nWhat will the woman probably do?',
          options: [
            'Drop the class',
            'Buy another book',
            'Order the textbook online',
            'Borrow the book permanently'
          ],
          answer: 2,
          explanation: 'She agrees to order the book online.'
        },
        {
          q: 'Recycling is an important activity that helps reduce waste. Materials such as paper, glass, and plastic can often be processed and used again. Recycling helps conserve natural resources and protect the environment.\n\nQuestion:\nAccording to the lecture, what is one benefit of recycling?',
          options: [
            'Creating more waste',
            'Conserving natural resources',
            'Increasing pollution',
            'Using more energy'
          ],
          answer: 1,
          explanation: 'The text states recycling helps conserve natural resources.'
        },
        {
          q: 'Man:\nHave you seen my keys anywhere?\n\nWoman:\nThey are right where you left them.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'The keys are lost.',
            'The keys are with someone else.',
            'The keys are in the same place as before.',
            'She bought new keys.'
          ],
          answer: 2,
          explanation: '"Right where you left them" means the keys are still in their previous location.'
        },
        {
          q: 'Woman:\nAre you ready for the presentation tomorrow?\n\nMan:\nAlmost. I still need to prepare some slides.\n\nWoman:\nDo you need any help?\n\nMan:\nNo, thanks. I think I can finish them tonight.\n\nQuestion:\nWhat does the man still need to do?',
          options: [
            'Practice speaking',
            'Prepare some slides',
            'Cancel the presentation',
            'Find a new topic'
          ],
          answer: 1,
          explanation: 'He says he still needs to prepare some slides.'
        },
        {
          q: 'Volcanoes are openings in the Earth\'s surface where hot materials can escape. Some volcanoes are active, meaning they may erupt, while others have been inactive for many years.\n\nQuestion:\nWhat is the lecture mainly about?',
          options: [
            'Types of rocks',
            'Volcanoes and their characteristics',
            'Weather changes',
            'Earthquake prevention'
          ],
          answer: 1,
          explanation: 'The lecture explains volcanoes and their conditions.'
        },
        {
          q: 'Woman:\nDid Mark finish his assignment?\n\nMan:\nHe hasn\'t even started it yet.\n\nQuestion:\nWhat does the man mean?',
          options: [
            'Mark completed the assignment.',
            'Mark is still working on it.',
            'Mark has not begun the assignment.',
            'Mark submitted it early.'
          ],
          answer: 2,
          explanation: '"He hasn\'t even started" means he has not begun.'
        },
        {
          q: 'Man:\nAre you interested in joining the photography club?\n\nWoman:\nI would like to, but I have too many activities already.\n\nMan:\nThat\'s understandable. Maybe next semester?\n\nWoman:\nYes, that would be better.\n\nQuestion:\nWhy does the woman not join the club?',
          options: [
            'She dislikes photography.',
            'She has too many activities.',
            'The club is cancelled.',
            'She does not know about it.'
          ],
          answer: 1,
          explanation: 'She says she has too many activities already.'
        },
        {
          q: 'The internet has changed the way people access information. Today, people can quickly search for news, communicate with others, and learn new skills online.\n\nQuestion:\nWhat is one use of the internet mentioned in the lecture?',
          options: [
            'Building houses',
            'Learning new skills',
            'Producing food',
            'Traveling faster'
          ],
          answer: 1,
          explanation: 'The lecture mentions learning new skills online as one use of the internet.'
        },
        {
          q: 'Man:\nDo you think the exam will be difficult?\n\nWoman:\nIt won\'t be a piece of cake.\n\nQuestion:\nWhat does the woman mean?',
          options: [
            'The exam will be easy.',
            'The exam will be challenging.',
            'There will be no exam.',
            'She already passed.'
          ],
          answer: 1,
          explanation: '"Not a piece of cake" means not easy, so the exam will be challenging.'
        },
        {
          q: 'Woman:\nWhy are you carrying so many books?\n\nMan:\nI am preparing for my final exams next week.\n\nWoman:\nYou must be very busy.\n\nMan:\nYes, but I want to get good grades.\n\nQuestion:\nWhy is the man studying hard?',
          options: [
            'He wants good grades.',
            'He wants to change schools.',
            'He dislikes studying.',
            'He has no exams.'
          ],
          answer: 0,
          explanation: 'He says he wants to get good grades.'
        },
        {
          q: 'The Amazon rainforest is one of the most diverse ecosystems on Earth. It contains millions of plant and animal species. However, human activities such as deforestation threaten this environment.\n\nQuestion:\nWhat problem does the lecture mention?',
          options: [
            'Lack of animals',
            'Deforestation',
            'Too much rainfall',
            'Cold temperatures'
          ],
          answer: 1,
          explanation: 'The lecture mentions deforestation as a threat to the Amazon rainforest.'
        }
      ]
    },
    {
      id: 'structure-written',
      title: 'Structure & Written Expression',
      icon: '📝',
      color: 'purple',
      short: 'Structure',
      gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
      subtitle: 'TOEFL Structure & Written Expression Section',
      children: [
        {
          id: 'structure-part-a',
          title: 'Part A – Structure',
          icon: '📝',
          color: 'primary',
          short: 'Part A',
          gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
          subtitle: '17 Skill untuk Structure',
          children: [
            {
              id: 'str-skill-1',
              title: 'Skill 1 – Pastikan Kalimat Memiliki Subject dan Verb',
              icon: '📐',
              color: 'primary',
              short: 'Skill 1',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Subject dan Verb Wajib Ada',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Dalam TOEFL Structure, setiap kalimat harus memiliki Subject (Subjek) dan Verb (Kata Kerja). Jika salah satunya tidak ada, maka kalimat tersebut tidak lengkap. Langkah pertama saat mengerjakan soal adalah mencari siapa atau apa yang dibicarakan (subject) dan apa yang dilakukan (verb).'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari subject terlebih dahulu.',
                    'Setelah itu cari verb utama.',
                    'Jika salah satunya belum ada, pilih jawaban yang melengkapinya.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari subject terlebih dahulu. Setelah itu cari verb utama. Jika salah satunya belum ada, pilih jawaban yang melengkapinya.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap kata setelah preposisi sebagai subject.',
                    'Mengira Verb-ing selalu menjadi verb utama.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The teacher ________ every morning.\n\nA. teach\nB. teaches\nC. teaching\nD. teacher\n\n✅ Jawaban: B. teaches\n\nPembahasan: Subject sudah ada yaitu The teacher, sehingga diperlukan verb. Karena subject tunggal, verb yang benar adalah teaches.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Semua kalimat harus memiliki Subject dan Verb.',
                    'Cari Subject terlebih dahulu.',
                    'Pastikan ada Verb utama.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Mengapa setiap kalimat dalam TOEFL Structure harus memiliki subject dan verb?', a: 'Karena kalimat yang tidak memiliki subject atau verb dianggap tidak lengkap dan salah.' },
                { q: 'Apa langkah pertama saat mengerjakan soal TOEFL Structure?', a: 'Mencari subject (siapa atau apa yang dibicarakan) terlebih dahulu.' },
                { q: 'Bagaimana cara menentukan verb yang benar?', a: 'Setelah menemukan subject, tentukan apakah subject tunggal atau jamak, lalu sesuaikan verb-nya.' },
                { q: 'Apa yang harus dilakukan jika subject atau verb belum ada dalam kalimat?', a: 'Pilih jawaban yang melengkapi subject atau verb yang kurang.' },
                { q: 'Contoh kalimat yang lengkap?', a: '"The students study every day." — memiliki subject (The students) dan verb (study).' }
              ]
            },
            {
              id: 'str-skill-2',
              title: 'Skill 2 – Perhatikan Object of Preposition',
              icon: '📎',
              color: 'primary',
              short: 'Skill 2',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Jangan Tertukar dengan Subject',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Object of Preposition adalah kata benda atau kata ganti yang berada setelah preposisi seperti in, on, at, with, by, from, to, of. Kata tersebut bukan subject, sehingga jangan tertukar saat mencari subject dalam kalimat.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Abaikan sementara frasa setelah preposisi.',
                    'Cari subject di luar prepositional phrase.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Abaikan sementara frasa setelah preposisi. Cari subject di luar prepositional phrase.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap object of preposition sebagai subject.',
                    'Salah memilih verb karena mengira jumlah subject berbeda.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The books on the table ________ mine.\n\nA. is\nB. are\nC. am\nD. be\n\n✅ Jawaban: B. are\n\nPembahasan: Subject sebenarnya adalah The books, sedangkan on the table hanya prepositional phrase.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Object setelah preposisi bukan subject.',
                    'Cari subject di luar prepositional phrase.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu object of preposition?', a: 'Kata benda atau kata ganti yang berada setelah preposisi (in, on, at, with, by, dll).' },
                { q: 'Mengapa object of preposition bukan subject?', a: 'Karena kata tersebut hanya pelengkap preposisi, bukan pelaku atau penerima tindakan utama.' },
                { q: 'Bagaimana cara menghindari kesalahan dengan object of preposition?', a: 'Abaikan frasa setelah preposisi saat mencari subject utama kalimat.' },
                { q: 'Contoh prepositional phrase yang sering mengecoh?', a: '"on the table", "with his friends", "in the classroom" — semua bukan subject.' },
                { q: 'Apa subject sebenarnya dalam "The books on the table are mine"?', a: 'The books (bukan "table").' }
              ]
            },
            {
              id: 'str-skill-3',
              title: 'Skill 3 – Perhatikan Appositives',
              icon: '📌',
              color: 'primary',
              short: 'Skill 3',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Informasi Tambahan Bukan Subject',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Appositive adalah kata atau frasa yang memberikan informasi tambahan tentang subject. Appositive bukan subject baru dan tidak memengaruhi pemilihan verb.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika ada koma yang mengapit informasi tambahan, kemungkinan itu adalah appositive.',
                    'Abaikan appositive saat menentukan subject.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika ada koma yang mengapit informasi tambahan, kemungkinan itu adalah appositive. Abaikan appositive saat menentukan subject.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap appositive sebagai subject.',
                    'Salah memilih verb karena appositive.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Mr. Wilson, our new manager, ________ today.\n\nA. arrive\nB. arrives\nC. arriving\nD. arrival\n\n✅ Jawaban: B. arrives\n\nPembahasan: Subject adalah Mr. Wilson, sedangkan our new manager hanya appositive.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Appositive hanya memberi informasi tambahan.',
                    'Bukan subject baru.',
                    'Tentukan verb berdasarkan subject asli.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu appositive?', a: 'Kata atau frasa yang memberikan informasi tambahan tentang subject, diapit oleh koma.' },
                { q: 'Mengapa appositive tidak memengaruhi pemilihan verb?', a: 'Karena appositive bukan subject, subject asli tetap yang ada di luar appositive.' },
                { q: 'Bagaimana cara mengenali appositive?', a: 'Biasanya diapit oleh dua koma dan memberikan penjelasan tambahan tentang noun sebelumnya.' },
                { q: 'Apa subject dalam "Mr. Wilson, our new manager, arrives today"?', a: 'Mr. Wilson (bukan "our new manager").' },
                { q: 'Jika subject tunggal tapi ada appositive panjang, verb-nya seperti apa?', a: 'Verb tetap menyesuaikan subject asli, bukan appositive.' }
              ]
            },
            {
              id: 'str-skill-4',
              title: 'Skill 4 – Perhatikan Present Participle',
              icon: '🔄',
              color: 'primary',
              short: 'Skill 4',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Verb-ing Bukan Selalu Verb Utama',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Present Participle adalah bentuk Verb + ing. Bentuk ini dapat berfungsi sebagai adjective atau menjadi bagian dari Present Continuous Tense. Jika berdiri sendiri tanpa auxiliary verb (is, am, are, was, were), maka bukan verb utama.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika hanya ada Verb-ing tanpa be, biasanya bukan verb utama.',
                    'Pastikan kalimat tetap memiliki verb utama.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika hanya ada Verb-ing tanpa be, biasanya bukan verb utama. Pastikan kalimat tetap memiliki verb utama.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap Verb-ing selalu menjadi verb utama.',
                    'Lupa menambahkan auxiliary verb.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The boy ________ in the park now.\n\nA. playing\nB. is playing\nC. play\nD. played\n\n✅ Jawaban: B. is playing\n\nPembahasan: Kalimat membutuhkan verb Present Continuous, yaitu is playing.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Present Participle = Verb-ing.',
                    'Biasanya digunakan bersama be.',
                    'Jangan menganggap Verb-ing saja sebagai verb utama.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu present participle?', a: 'Bentuk Verb + ing, bisa berfungsi sebagai adjective atau bagian dari Present Continuous.' },
                { q: 'Kapan Verb-ing menjadi verb utama?', a: 'Hanya jika diawali oleh auxiliary verb (is, am, are, was, were).' },
                { q: 'Apa yang salah dari "The boy playing in the park" sebagai kalimat lengkap?', a: 'Tidak ada verb utama, "playing" hanya berfungsi sebagai adjective.' },
                { q: 'Bagaimana bentuk Present Continuous yang benar?', a: 'Subject + be (is/am/are) + Verb-ing.' },
                { q: 'Apa bedanya "The crying baby" dan "The baby is crying"?', a: '"Crying" dalam "crying baby" adalah adjective, sedangkan "is crying" adalah verb utama (Present Continuous).' }
              ]
            },
            {
              id: 'str-skill-5',
              title: 'Skill 5 – Perhatikan Past Participle',
              icon: '⏪',
              color: 'primary',
              short: 'Skill 5',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Verb 3 Butuh Auxiliary',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Past Participle adalah bentuk Verb 3 (V3). Bentuk ini digunakan dalam Perfect Tense dan Passive Voice. Jika berdiri sendiri tanpa have/has/had atau be, biasanya bukan verb utama.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Kenali bentuk Verb 3.',
                    'Perhatikan apakah digunakan dalam Passive Voice atau Perfect Tense.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Kenali bentuk Verb 3. Perhatikan apakah digunakan dalam Passive Voice atau Perfect Tense.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap Verb 3 dapat berdiri sendiri sebagai verb utama.',
                    'Tertukar dengan Verb 2.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The letter ________ yesterday.\n\nA. sent\nB. was sent\nC. sending\nD. send\n\n✅ Jawaban: B. was sent\n\nPembahasan: Kalimat berbentuk Passive Voice sehingga menggunakan be + Verb 3, yaitu was sent.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Past Participle adalah Verb 3.',
                    'Digunakan dalam Perfect Tense dan Passive Voice.',
                    'Biasanya didahului have/has/had atau be.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu past participle?', a: 'Bentuk Verb 3 (V3) yang digunakan dalam Perfect Tense dan Passive Voice.' },
                { q: 'Kapan past participle menjadi verb utama?', a: 'Ketika didahului oleh auxiliary verb have/has/had (Perfect) atau be (Passive).' },
                { q: 'Apa bedanya Verb 2 dan Verb 3?', a: 'Verb 2 digunakan untuk Simple Past, Verb 3 untuk Perfect Tense dan Passive Voice.' },
                { q: 'Apa yang salah dari "The window broken yesterday"?', a: 'Tidak ada auxiliary verb. Seharusnya "The window was broken yesterday."' },
                { q: 'Apa pola Passive Voice?', a: 'Subject + be (is/am/are/was/were) + Verb 3.' }
              ]
            },
            {
              id: 'str-skill-6',
              title: 'Skill 6 – Penggunaan Coordinate Connectors',
              icon: '🔗',
              color: 'primary',
              short: 'Skill 6',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Menghubungkan Dua Klausa Setara',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Coordinate Connectors adalah kata penghubung yang digunakan untuk menghubungkan dua kata, frasa, atau klausa yang memiliki kedudukan yang sama. Dalam TOEFL, kamu harus memastikan bahwa kedua bagian yang dihubungkan memiliki struktur yang sejajar (parallel). Coordinate connectors: and, but, or, so, yet.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Pastikan sebelum dan sesudah coordinate connector terdapat klausa yang lengkap (memiliki subject dan verb).',
                    'Perhatikan tanda koma jika diperlukan.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Pastikan sebelum dan sesudah coordinate connector terdapat klausa yang lengkap. Perhatikan tanda koma jika diperlukan.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menghubungkan klausa yang tidak lengkap.',
                    'Salah memilih connector sesuai makna kalimat.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The weather was very cold, ________ we still went hiking.\n\nA. because\nB. but\nC. although\nD. when\n\n✅ Jawaban: B. but\n\nPembahasan: Kalimat pertama dan kedua merupakan dua klausa lengkap yang menunjukkan pertentangan. Connector yang tepat adalah but.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Coordinate connectors menghubungkan dua klausa yang setara.',
                    'Kedua klausa harus lengkap.',
                    'Connector harus sesuai dengan hubungan makna.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu coordinate connectors?', a: 'Kata penghubung yang menghubungkan dua klausa yang setara kedudukannya (and, but, or, so, yet).' },
                { q: 'Apa syarat menggunakan coordinate connector?', a: 'Kedua bagian yang dihubungkan harus berupa klausa lengkap (subject + verb).' },
                { q: 'Kapan menggunakan "but" vs "and"?', a: '"But" untuk pertentangan, "and" untuk penambahan informasi.' },
                { q: 'Apa yang salah dari "She likes reading, painting, and to swim"?', a: 'Tidak parallel — dua berbentuk Verb-ing, satu berbentuk to-infinitive.' },
                { q: 'Apa connector yang tepat untuk menunjukkan hasil?', a: '"So" (contoh: "It was raining, so we stayed home.")' }
              ]
            },
            {
              id: 'str-skill-7',
              title: 'Skill 7 – Penggunaan Adverb Time dan Cause Connectors',
              icon: '⏰',
              color: 'primary',
              short: 'Skill 7',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Connector Waktu dan Sebab',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Adverb connectors menghubungkan anak kalimat (dependent clause) dengan induk kalimat (independent clause). Time connectors: when, while, before, after, since, until, as soon as. Cause connectors: because, since, as.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Setelah connector harus ada subject dan verb.',
                    'Tentukan apakah hubungan kalimat menunjukkan waktu atau sebab.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Setelah connector harus ada subject dan verb. Tentukan apakah hubungan kalimat menunjukkan waktu atau sebab.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan connector tanpa klausa.',
                    'Salah memilih connector berdasarkan makna.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: '________ it was raining, the match was postponed.\n\nA. Because\nB. But\nC. Or\nD. So\n\n✅ Jawaban: A. Because\n\nPembahasan: Kalimat menunjukkan hubungan sebab-akibat. Connector yang tepat adalah because.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Time connectors menunjukkan waktu.',
                    'Cause connectors menunjukkan sebab.',
                    'Setelah connector harus terdapat subject dan verb.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa perbedaan time connectors dan cause connectors?', a: 'Time connectors menunjukkan waktu (when, while, before), cause connectors menunjukkan sebab (because, since, as).' },
                { q: 'Apa yang harus ada setelah adverb connector?', a: 'Subject dan verb (klausa lengkap).' },
                { q: 'Kapan menggunakan "since" vs "because"?', a: '"Since" bisa menunjukkan waktu (sejak) atau sebab, "because" khusus untuk sebab.' },
                { q: 'Apa arti "as soon as"?', a: 'Segera setelah (menunjukkan sesuatu terjadi tepat setelah sesuatu yang lain).' },
                { q: 'Pola kalimat dengan adverb connector di awal?', a: 'Connector + Subject + Verb, Independent Clause.' }
              ]
            },
            {
              id: 'str-skill-8',
              title: 'Skill 8 – Penggunaan Adverb Connectors Lain',
              icon: '🔄',
              color: 'primary',
              short: 'Skill 8',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Although, Unless, So That, dll.',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Selain connector waktu dan sebab, TOEFL juga sering menguji connector yang menunjukkan pertentangan, tujuan, syarat, hasil, atau cara. Beberapa: although, even though, though, if, unless, so that, whereas, while.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Pahami hubungan makna antar kalimat.',
                    'Pastikan setelah connector terdapat klausa lengkap.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Pahami hubungan makna antar kalimat. Pastikan setelah connector terdapat klausa lengkap.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Tertukar antara although dan because.',
                    'Menggunakan connector yang tidak sesuai makna.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: '________ he was tired, he finished his homework.\n\nA. Because\nB. Although\nC. Since\nD. So\n\n✅ Jawaban: B. Although\n\nPembahasan: Kalimat menunjukkan pertentangan. Connector yang tepat adalah although.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Adverb connectors memiliki berbagai fungsi.',
                    'Pilih connector sesuai hubungan makna.',
                    'Pastikan terdapat klausa lengkap.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya "although" dan "because"?', a: 'Although menunjukkan pertentangan, because menunjukkan sebab.' },
                { q: 'Apa arti "unless"?', a: 'Kecuali (equals "if...not").' },
                { q: 'Kapan menggunakan "so that"?', a: 'Untuk menunjukkan tujuan (purpose).' },
                { q: 'Apa bedanya "while" sebagai time connector vs contrast?', a: '"While" untuk waktu (selama) atau pertentangan (sedangkan).' },
                { q: 'Apa yang dimaksud "whereas"?', a: 'Connector yang menunjukkan perbandingan atau pertentangan (sedangkan).' }
              ]
            },
            {
              id: 'str-skill-9',
              title: 'Skill 9 – Penggunaan Noun Clause Connectors',
              icon: '📝',
              color: 'primary',
              short: 'Skill 9',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Anak Kalimat sebagai Kata Benda',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Noun Clause adalah anak kalimat yang berfungsi sebagai kata benda. Dalam TOEFL, noun clause dapat menjadi subject, object, atau complement. Connector: what, who, whom, whose, which, where, when, why, how, whether, if, that.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Noun clause harus memiliki subject dan verb.',
                    'Tentukan apakah noun clause berfungsi sebagai subject atau object.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Noun clause harus memiliki subject dan verb. Tentukan apakah noun clause berfungsi sebagai subject atau object.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan urutan kalimat tanya dalam noun clause.',
                    'Lupa menambahkan subject atau verb.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: "I don't know ________ he will come.\n\nA. what\nB. whether\nC. because\nD. although\n\n✅ Jawaban: B. whether\n\nPembahasan: Kalimat menyatakan ketidakpastian, sehingga connector yang tepat adalah whether."
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Noun clause berfungsi sebagai kata benda.',
                    'Gunakan connector yang sesuai.',
                    'Jangan menggunakan pola kalimat tanya.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu noun clause?', a: 'Anak kalimat yang berfungsi sebagai kata benda (subject, object, atau complement).' },
                { q: 'Apa perbedaan "that" dan "whether" dalam noun clause?', a: '"That" untuk pernyataan, "whether" untuk ketidakpastian/pilihan.' },
                { q: 'Apa bedanya "if" dan "whether"?', a: 'Keduanya mirip, tapi "whether" lebih formal dan bisa diikuti "or not".' },
                { q: 'Bagaimana noun clause berfungsi sebagai subject?', a: '"What he said is true." — noun clause "What he said" adalah subject.' },
                { q: 'Apa yang harus diperhatikan dalam noun clause?', a: 'Harus memiliki subject dan verb yang lengkap.' }
              ]
            },
            {
              id: 'str-skill-10',
              title: 'Skill 10 – Penggunaan Adjective Clause Connectors',
              icon: '📎',
              color: 'primary',
              short: 'Skill 10',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Relative Pronoun yang Tepat',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Adjective Clause adalah anak kalimat yang berfungsi menerangkan kata benda. Connector: who, whom, whose, which, that, where, when.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari kata benda yang diterangkan.',
                    'Pilih connector sesuai jenis kata benda (orang, benda, tempat, atau waktu).'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari kata benda yang diterangkan. Pilih connector sesuai jenis kata benda (orang, benda, tempat, atau waktu).'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Salah memilih relative pronoun.',
                    'Menggunakan connector yang tidak sesuai dengan noun yang diterangkan.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The student ________ won the competition received a scholarship.\n\nA. which\nB. who\nC. where\nD. when\n\n✅ Jawaban: B. who\n\nPembahasan: Kata yang diterangkan adalah student (orang), sehingga relative pronoun yang tepat adalah who.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Adjective clause menerangkan kata benda.',
                    'Gunakan who untuk orang, which untuk benda, where untuk tempat, dan when untuk waktu.',
                    'Pilih connector sesuai noun yang diterangkan.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Kapan menggunakan "who" vs "which"?', a: '"Who" untuk orang, "which" untuk benda/hewan.' },
                { q: 'Kapan menggunakan "where" vs "when"?', a: '"Where" untuk tempat, "when" untuk waktu.' },
                { q: 'Apa fungsi "whose" dalam adjective clause?', a: 'Menunjukkan kepemilikan (contoh: "The man whose car was stolen...").' },
                { q: 'Apa bedanya "that" dan "which"?', a: '"That" bisa untuk orang dan benda (restrictive), "which" untuk benda (non-restrictive).' },
                { q: 'Bagaimana cara menentukan connector yang tepat?', a: 'Tentukan jenis noun yang diterangkan: orang (who/whom/whose), benda (which/that), tempat (where), waktu (when).' }
              ]
            },
            {
              id: 'str-skill-11',
              title: 'Skill 11 – Penggunaan Adjective Clause yang Direduksi',
              icon: '✂️',
              color: 'primary',
              short: 'Skill 11',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Mereduksi Adjective Clause',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Adjective Clause terkadang dapat disingkat menjadi Reduced Adjective Clause. Relative pronoun dan be dihilangkan, atau verb diubah menjadi Verb-ing atau Verb 3.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari relative pronoun (who, which, that).',
                    'Jika setelahnya terdapat be, biasanya dapat direduksi.',
                    'Perhatikan apakah kalimat aktif atau pasif.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari relative pronoun (who, which, that). Jika setelahnya terdapat be, biasanya dapat direduksi. Perhatikan apakah kalimat aktif atau pasif.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Mereduksi adjective clause yang tidak bisa direduksi.',
                    'Salah memilih antara Verb-ing dan Verb 3.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The students ________ in the library are preparing for the TOEFL test.\n\nA. studying\nB. studied\nC. study\nD. studies\n\n✅ Jawaban: A. studying\n\nPembahasan: Kalimat lengkapnya adalah "The students who are studying in the library..." Karena who are direduksi, maka menjadi studying.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Adjective clause dapat direduksi.',
                    'Kalimat aktif → gunakan Verb-ing.',
                    'Kalimat pasif → gunakan Verb 3.',
                    'Relative pronoun dan be biasanya dihilangkan.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Bagaimana cara mereduksi adjective clause?', a: 'Hilangkan relative pronoun (who/which/that) dan be (is/are/was/were).' },
                { q: 'Kapan menggunakan Verb-ing vs Verb 3 dalam reduced clause?', a: 'Kalimat aktif → Verb-ing, kalimat pasif → Verb 3.' },
                { q: 'Apa yang terjadi jika adjective clause menggunakan active voice?', a: '"who are studying" → "studying" (hilangkan "who are").' },
                { q: 'Apa yang terjadi jika adjective clause menggunakan passive voice?', a: '"which was written" → "written" (hilangkan "which was").' },
                { q: 'Bisakah semua adjective clause direduksi?', a: 'Tidak, hanya yang menggunakan be (is/are/was/were) setelah relative pronoun.' }
              ]
            },
            {
              id: 'str-skill-12',
              title: 'Skill 12 – Penggunaan Adverb Clause yang Direduksi',
              icon: '✂️',
              color: 'primary',
              short: 'Skill 12',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Mereduksi Adverb Clause',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Adverb clause juga dapat direduksi jika subject pada anak kalimat sama dengan subject pada induk kalimat. Subject dan be dihilangkan sehingga tersisa Verb-ing.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Pastikan kedua klausa memiliki subject yang sama.',
                    'Jika berbeda, adverb clause tidak boleh direduksi.',
                    'Perhatikan connector seperti while, when, after, before, although.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Pastikan kedua klausa memiliki subject yang sama. Jika berbeda, adverb clause tidak boleh direduksi.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Mereduksi adverb clause dengan subject yang berbeda.',
                    'Menghilangkan subject secara tidak tepat.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: '________ to the station, Rina saw her teacher.\n\nA. While walking\nB. While she walking\nC. While walked\nD. While walks\n\n✅ Jawaban: A. While walking\n\nPembahasan: Kalimat lengkapnya "While Rina was walking to the station..." Karena subject sama (Rina), maka dapat direduksi menjadi While walking.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Subject kedua klausa harus sama.',
                    'Subject dan be dapat dihilangkan.',
                    'Biasanya berubah menjadi Verb-ing.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Syarat mereduksi adverb clause?', a: 'Subject pada anak kalimat dan induk kalimat harus sama.' },
                { q: 'Bagaimana cara mereduksi adverb clause?', a: 'Hilangkan subject dan be, sisakan connector + Verb-ing.' },
                { q: 'Contoh reduksi yang benar?', a: '"While she was studying" → "While studying" (subject "she" sama dengan subject induk).' },
                { q: 'Kapan adverb clause TIDAK bisa direduksi?', a: 'Jika subject anak kalimat berbeda dari subject induk kalimat.' },
                { q: 'Apa yang salah dari "While she walking to the station"?', a: 'Masih ada "she" — seharusnya dihilangkan bersama "was".' }
              ]
            },
            {
              id: 'str-skill-13',
              title: 'Skill 13 – Inversi Subject dan Verb dalam Kalimat Tanya',
              icon: '❓',
              color: 'primary',
              short: 'Skill 13',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Auxiliary + Subject dalam Tanya',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Dalam kalimat tanya bahasa Inggris, posisi auxiliary verb dan subject ditukar. Pola ini disebut inversion. TOEFL sering menguji apakah urutan subject dan verb sudah benar dalam kalimat tanya.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Perhatikan posisi auxiliary.',
                    'Jangan menempatkan subject sebelum auxiliary dalam kalimat tanya.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Perhatikan posisi auxiliary. Jangan menempatkan subject sebelum auxiliary dalam kalimat tanya.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan urutan kalimat berita.',
                    'Salah menempatkan auxiliary.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Where ________ going after class?\n\nA. she is\nB. is she\nC. she\nD. are she\n\n✅ Jawaban: B. is she\n\nPembahasan: Kalimat tanya menggunakan pola Auxiliary + Subject, sehingga bentuk yang benar adalah is she.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Kalimat tanya menggunakan inversi.',
                    'Auxiliary berada sebelum subject.',
                    'Jangan menggunakan pola kalimat berita.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu inversi dalam kalimat tanya?', a: 'Penukaran posisi auxiliary verb dan subject (auxiliary + subject).' },
                { q: 'Apa pola kalimat tanya yang benar?', a: 'Question Word + Auxiliary + Subject + Verb.' },
                { q: 'Apa yang salah dari "Where she is going"?', a: 'Urutannya salah — seharusnya "Where is she going" (auxiliary sebelum subject).' },
                { q: 'Bagaimana jika kalimat tidak punya auxiliary?', a: 'Tambahkan do/does/did sesuai tense.' },
                { q: 'Apa bedanya kalimat berita dan kalimat tanya?', a: 'Kalimat berita: Subject + Verb. Kalimat tanya: Auxiliary + Subject + Verb.' }
              ]
            },
            {
              id: 'str-skill-14',
              title: 'Skill 14 – Inversi Subject dan Verb setelah Ekspresi Tempat',
              icon: '📍',
              color: 'primary',
              short: 'Skill 14',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Place Expression + Verb + Subject',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Dalam TOEFL, inversi juga dapat terjadi setelah ekspresi tempat yang berada di awal kalimat. Contoh: Here, There, On the table, In the room, At the corner.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika kalimat diawali ekspresi tempat, periksa apakah terjadi inversi.',
                    'Tidak semua ekspresi tempat menggunakan inversi, tetapi pola ini sering muncul di TOEFL.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika kalimat diawali ekspresi tempat, periksa apakah terjadi inversi. Tidak semua ekspresi tempat menggunakan inversi.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Tetap menggunakan urutan Subject + Verb.',
                    'Salah menentukan subject.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'On the wall ________ a beautiful painting.\n\nA. hangs\nB. hang\nC. hanging\nD. is hanging\n\n✅ Jawaban: A. hangs\n\nPembahasan: Kalimat diawali dengan ekspresi tempat On the wall, sehingga terjadi inversi menjadi Verb + Subject.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Inversi dapat terjadi setelah ekspresi tempat.',
                    'Polanya adalah Ekspresi Tempat + Verb + Subject.',
                    'Perhatikan posisi verb dan subject.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Kapan inversi terjadi setelah ekspresi tempat?', a: 'Ketika kalimat diawali dengan ekspresi tempat seperti "Here", "There", "On the wall".' },
                { q: 'Apa polanya?', a: 'Place Expression + Verb + Subject (contoh: "Here comes the bus").' },
                { q: 'Contoh inversi dengan "There"?', a: '"There goes our chance" — "goes" sebelum "our chance".' },
                { q: 'Apakah semua ekspresi tempat menggunakan inversi?', a: 'Tidak selalu, tapi pola ini sering muncul di TOEFL.' },
                { q: 'Apa bedanya "The painting hangs on the wall" dan "On the wall hangs a painting"?', a: 'Keduanya benar, tapi yang kedua menggunakan inversi (lebih formal).' }
              ]
            },
            {
              id: 'str-skill-15',
              title: 'Skill 15 – Inversi Subject dan Verb setelah Ekspresi Negatif',
              icon: '🚫',
              color: 'primary',
              short: 'Skill 15',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Negative Expression + Aux + Subject',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Jika kalimat diawali dengan ekspresi negatif, maka subject dan auxiliary verb harus dibalik (inversi). Ekspresi negatif: Never, Rarely, Seldom, Hardly ever, Barely, Scarcely, Little, No sooner.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika kalimat dimulai dengan kata negatif, segera cek apakah terjadi inversi.',
                    'Perhatikan posisi auxiliary verb sebelum subject.',
                    'Jika belum ada auxiliary, gunakan do, does, atau did sesuai tense.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika kalimat dimulai dengan kata negatif, segera cek apakah terjadi inversi. Jika belum ada auxiliary, gunakan do, does, atau did.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Tetap menggunakan pola Subject + Verb.',
                    'Lupa menambahkan auxiliary verb.',
                    'Salah memilih auxiliary sesuai tense.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Never ________ such a difficult question before.\n\nA. I have seen\nB. have I seen\nC. I seen\nD. did I saw\n\n✅ Jawaban: B. have I seen\n\nPembahasan: Kalimat diawali dengan Never, sehingga harus menggunakan inversi. Pola yang benar adalah Never + have + I + seen.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Ekspresi negatif di awal kalimat memerlukan inversi.',
                    'Auxiliary verb diletakkan sebelum subject.',
                    'Gunakan auxiliary yang sesuai dengan tense.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa yang terjadi jika kalimat diawali ekspresi negatif?', a: 'Harus terjadi inversi — auxiliary verb diletakkan sebelum subject.' },
                { q: 'Sebutkan ekspresi negatif yang sering muncul di TOEFL!', a: 'Never, rarely, seldom, hardly ever, barely, scarcely, little, no sooner.' },
                { q: 'Apa yang harus dilakukan jika tidak ada auxiliary?', a: 'Tambahkan do/does/did sesuai tense.' },
                { q: 'Contoh inversi dengan "Seldom"?', a: '"Seldom does he arrive late."' },
                { q: 'Apa yang salah dari "Never I have seen such a thing"?', a: 'Tidak ada inversi — seharusnya "Never have I seen such a thing."' }
              ]
            },
            {
              id: 'str-skill-16',
              title: 'Skill 16 – Inversi Subject dan Verb dalam Kalimat Pengandaian',
              icon: '🔀',
              color: 'primary',
              short: 'Skill 16',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Should/Were/Had + Subject (Tanpa If)',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Kalimat pengandaian (Conditional Sentence) terkadang menggunakan bentuk inversi. Kata if dihilangkan dan diganti dengan membalik posisi auxiliary dan subject. Lebih formal dan sering muncul dalam soal TOEFL.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika tidak menemukan kata if, lihat apakah kalimat diawali dengan Should, Were, atau Had.',
                    'Ketiga kata tersebut sering menandakan inversi pada conditional sentence.',
                    'Pahami jenis conditional agar tidak salah memilih bentuk verb.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika tidak menemukan kata if, lihat apakah kalimat diawali dengan Should, Were, atau Had.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Tidak menyadari bahwa if dihilangkan.',
                    'Salah menentukan jenis conditional.',
                    'Menggunakan bentuk verb yang tidak sesuai.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: '________ you need any assistance, please contact me.\n\nA. If\nB. Should\nC. Had\nD. Were\n\n✅ Jawaban: B. Should\n\nPembahasan: Kalimat ini merupakan bentuk inversi dari "If you should need any assistance..." Karena menggunakan inversi, kata if dihilangkan dan diganti menjadi Should you...'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Inversi dapat digunakan pada conditional sentence.',
                    'Kata if dihilangkan.',
                    'Kalimat biasanya diawali dengan Should, Were, atau Had.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bentuk inversi dari "If I were you"?', a: '"Were I you..." — "were" dipindah ke depan dan "if" dihilangkan.' },
                { q: 'Apa bentuk inversi dari "If you should need help"?', a: '"Should you need help..." — "should" dipindah ke depan.' },
                { q: 'Apa bentuk inversi dari "If they had known"?', a: '"Had they known..." — "had" dipindah ke depan.' },
                { q: 'Apakah inversi conditional bisa digunakan untuk semua type?', a: 'Ya, untuk Type 1 (should), Type 2 (were), dan Type 3 (had).' },
                { q: 'Mengapa inversi conditional digunakan?', a: 'Untuk membuat kalimat lebih formal.' }
              ]
            },
            {
              id: 'str-skill-17',
              title: 'Skill 17 – Inversi Subject dan Verb setelah Kalimat Pembanding',
              icon: '⚖️',
              color: 'primary',
              short: 'Skill 17',
              gradient: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              subtitle: 'Than/As + Auxiliary + Subject',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Inversi juga dapat muncul setelah kalimat perbandingan (comparison), terutama setelah kata than atau as. Auxiliary verb diletakkan sebelum subject.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Perhatikan kata than atau as.',
                    'Jika muncul inversi, auxiliary verb berada sebelum subject.',
                    'Bandingkan kedua bagian kalimat dengan saksama.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Perhatikan kata than atau as. Jika muncul inversi, auxiliary verb berada sebelum subject.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Tetap menggunakan urutan Subject + Verb.',
                    'Salah memilih auxiliary verb.',
                    'Tidak menyadari adanya bentuk perbandingan.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The new computer works faster than ________ the old one.\n\nA. the old one does\nB. does the old one\nC. did the old one\nD. the old one do\n\n✅ Jawaban: B. does the old one\n\nPembahasan: Kalimat menggunakan bentuk perbandingan dengan than. Dalam bentuk formal TOEFL, dapat digunakan inversi sehingga auxiliary does diletakkan sebelum subject the old one.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Inversi dapat muncul setelah than atau as.',
                    'Auxiliary verb diletakkan sebelum subject.',
                    'Perhatikan pola perbandingan dan gunakan bentuk verb yang sesuai.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Kapan inversi terjadi dalam kalimat perbandingan?', a: 'Setelah "than" atau "as" dalam bentuk formal.' },
                { q: 'Apa pola inversi dengan "than"?', a: 'Comparison + than + Auxiliary + Subject.' },
                { q: 'Contoh inversi dengan "than"?', a: '"She works harder than does her sister."' },
                { q: 'Apakah inversi perbandingan wajib?', a: 'Tidak, tapi sering muncul dalam soal TOEFL bentuk formal.' },
                { q: 'Apa bedanya "She is taller than her brother" dan "She is taller than is her brother"?', a: 'Keduanya benar, yang kedua menggunakan inversi (lebih formal).' }
              ]
            }
          ]
        },
        {
          id: 'written-part-b',
          title: 'Part B – Written Expression',
          icon: '✍️',
          color: 'secondary',
          short: 'Part B',
          gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
          subtitle: '11 Skill untuk Written Expression',
          children: [
            {
              id: 'we-skill-1',
              title: 'Skill 1 – Subject–Verb Agreement',
              icon: '🤝',
              color: 'secondary',
              short: 'Skill 1',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Pastikan Kesesuaian antara Subject dan Verb',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Pada soal Written Expression, salah satu kesalahan yang paling sering muncul adalah ketidaksesuaian antara subject dan verb. Jika subject tunggal, verb juga harus tunggal. Jika subject jamak, verb juga harus jamak. Kesalahan ini sering dijadikan jebakan karena di antara subject dan verb terdapat banyak kata tambahan.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari subject utama.',
                    'Jangan tertipu noun setelah preposition.',
                    'Ingat bahwa kata tambahan tidak memengaruhi bentuk verb.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari subject utama terlebih dahulu. Jangan tertipu noun setelah preposition. Ingat bahwa kata tambahan tidak memengaruhi bentuk verb.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menganggap noun terdekat sebagai subject.',
                    '"The list of students are complete." seharusnya "is complete" karena subjectnya "list".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The number of visitors have increased significantly this year.\nBagian yang salah adalah...\n\nA. The\nB. number\nC. have\nD. significantly\n\n✅ Jawaban: C. have\n\nPembahasan: Subject kalimat adalah The number (tunggal), bukan visitors. Verb yang benar adalah has.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Cari subject utama.',
                    'Tentukan singular atau plural.',
                    'Sesuaikan verb dengan subject.',
                    'Jangan terkecoh oleh kata tambahan.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa kesalahan paling umum dalam Subject-Verb Agreement?', a: 'Salah memilih verb karena terkecoh oleh kata tambahan antara subject dan verb.' },
                { q: 'Bagaimana cara menghindari kesalahan ini?', a: 'Cari subject utama terlebih dahulu, abaikan kata tambahan seperti prepositional phrase.' },
                { q: 'Mengapa "The list of students are" wrong?', a: 'Karena subjectnya "list" (tunggal), bukan "students". Yang benar: "is".' },
                { q: 'Apa yang harus diperhatikan saat menemukan subject yang panjang?', a: 'Tentukan apakah subject utama tunggal atau jamak, bukan noun terdekat.' },
                { q: 'Contoh lain kesalahan subject-verb agreement?', a: '"The news are good" seharusnya "The news is good" (news = uncountable/tunggal).' }
              ]
            },
            {
              id: 'we-skill-2',
              title: 'Skill 2 – Parallel Structure',
              icon: '⚖️',
              color: 'secondary',
              short: 'Skill 2',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Pastikan Tercapainya Parallel Structure dalam Kalimat',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Parallel Structure berarti unsur-unsur dalam sebuah kalimat harus memiliki bentuk yang sama atau sejajar. Jika menggunakan daftar aktivitas, semua aktivitas harus berbentuk sama: semua Verb, semua Verb-ing, atau semua To infinitive.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari daftar aktivitas.',
                    'Bandingkan bentuk katanya.',
                    'Jika dua berbentuk Verb-ing, maka yang ketiga juga harus Verb-ing.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari daftar aktivitas. Bandingkan bentuk katanya. Jika dua berbentuk Verb-ing, maka yang ketiga juga harus Verb-ing.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Mencampur bentuk kata: reading, writing, to swim.',
                    'Harusnya semuanya sama bentuknya.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'My hobby is reading, painting, and to cook.\nBagian yang salah adalah...\n\nA. reading\nB. painting\nC. to cook\nD. hobby\n\n✅ Jawaban: C. to cook\n\nPembahasan: Dua aktivitas pertama berbentuk Verb-ing. Maka aktivitas ketiga juga harus Verb-ing: cooking.'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Semua bentuk yang sejajar harus sama.',
                    'Jangan mencampur Verb, Verb-ing, dan To Verb.',
                    'Perhatikan connector seperti and, or, dan but.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu parallel structure?', a: 'Unsur-unsur dalam daftar atau perbandingan harus memiliki bentuk yang sama/sejajar.' },
                { q: 'Mengapa parallel structure penting?', a: 'Agar kalimat gramatis dan konsisten dalam penggunaan bentuk kata.' },
                { q: 'Apa yang salah dari "She likes reading, writing, and to swim"?', a: 'Tidak parallel — dua berbentuk Verb-ing, satu berbentuk to-infinitive.' },
                { q: 'Kapan parallel structure perlu diperhatikan?', a: 'Saat ada connector and, or, but, both...and, either...or, neither...nor.' },
                { q: 'Bagaimana cara memperbaikinya?', a: 'Samakan semua bentuk: "reading, writing, and swimming" atau "to read, to write, and to swim."' }
              ]
            },
            {
              id: 'we-skill-3',
              title: 'Skill 3 – Comparatives dan Superlatives',
              icon: '📊',
              color: 'secondary',
              short: 'Skill 3',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Perhatikan Comparatives dan Superlatives',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Comparative digunakan untuk membandingkan dua benda (-er + than atau more + adjective + than). Superlative untuk tiga atau lebih (the + adjective-est atau the most + adjective).'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Jika hanya dua benda → Comparative.',
                    'Jika lebih dari dua → Superlative.',
                    'Perhatikan kata "than" untuk comparative dan "the" untuk superlative.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jika hanya dua benda → Comparative. Jika lebih dari dua → Superlative. Perhatikan kata "than" untuk comparative dan "the" untuk superlative.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan Comparative untuk tiga benda.',
                    'Menggunakan Superlative untuk dua benda.',
                    'Menggunakan "more better" (double comparative).'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Mount Everest is higher mountain in the world.\nBagian yang salah adalah...\n\nA. Mount\nB. higher\nC. mountain\nD. world\n\n✅ Jawaban: B. higher\n\nPembahasan: Membandingkan dengan seluruh gunung di dunia → Superlative. Yang benar: "the highest mountain".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Comparative → membandingkan dua.',
                    'Superlative → membandingkan tiga atau lebih.',
                    'Comparative biasanya diikuti than.',
                    'Superlative biasanya diawali the.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya comparative dan superlative?', a: 'Comparative membandingkan dua benda, superlative membandingkan tiga atau lebih.' },
                { q: 'Kapan menggunakan "more" vs "-er"?', a: 'Kata sifat pendek (1 suku kata) → -er. Kata sifat panjang (3+ suku kata) → more.' },
                { q: 'Apa yang salah dari "more better"?', a: '"Better" sudah merupakan bentuk comparative dari "good", jadi tidak perlu "more".' },
                { q: 'Apa bedanya "taller than" dan "the tallest"?', a: '"Taller than" = membandingkan dua. "The tallest" = yang paling tinggi dari semua.' },
                { q: 'Contoh comparative dan superlative dari "expensive"?', a: 'Comparative: more expensive than. Superlative: the most expensive.' }
              ]
            },
            {
              id: 'we-skill-4',
              title: 'Skill 4 – Perubahan Bentuk Verb',
              icon: '🔄',
              color: 'secondary',
              short: 'Skill 4',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Perhatikan Perubahan Bentuk Verb',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Kamu harus memastikan bahwa bentuk verb sesuai dengan tense yang digunakan. Setiap tense memiliki bentuk verb yang berbeda. Perhatikan kata keterangan waktu: yesterday → Past Tense, now → Present Continuous, every day → Simple Present, since/for → Present Perfect.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari keterangan waktu dalam kalimat.',
                    'Tentukan tense yang digunakan.',
                    'Periksa apakah bentuk verb sudah sesuai.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari keterangan waktu dalam kalimat. Tentukan tense yang digunakan. Periksa apakah bentuk verb sudah sesuai.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan Verb 1 pada Past Tense.',
                    'Menggunakan Verb 2 setelah has/have.',
                    'Menggunakan Verb-ing tanpa be.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Yesterday my father go to Jakarta for a business meeting.\nBagian yang salah adalah...\n\nA. Yesterday\nB. go\nC. Jakarta\nD. business\n\n✅ Jawaban: B. go\n\nPembahasan: "Yesterday" menunjukkan Past Tense. Yang benar: "went" (Verb 2).'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Perhatikan keterangan waktu.',
                    'Sesuaikan bentuk verb dengan tense.',
                    'Jangan mencampur bentuk verb dalam satu tense.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Bagaimana cara menentukan tense yang benar?', a: 'Perhatikan keterangan waktu dalam kalimat (yesterday, now, every day, since, dll).' },
                { q: 'Kapan menggunakan Present Perfect?', a: 'Saat ada keterangan "since", "for", "already", "yet", "just".' },
                { q: 'Apa yang salah dari "She has went to school"?', a: 'Setelah "has" harus Verb 3 (gone), bukan Verb 2 (went).' },
                { q: 'Apa bedanya Simple Past dan Present Perfect?', a: 'Simple Past untuk waktu lampau tertentu, Present Perfect untuk pengalaman/action yang relevan dengan sekarang.' },
                { q: 'Tense apa yang digunakan dengan "every day"?', a: 'Simple Present (contoh: "She studies every day").' }
              ]
            },
            {
              id: 'we-skill-5',
              title: 'Skill 5 – Passive Voice',
              icon: '🔄',
              color: 'secondary',
              short: 'Skill 5',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Penggunaan Kalimat Pasif (Passive Voice)',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Passive Voice digunakan ketika subject menerima tindakan. Pola: Be + Verb 3 (Past Participle). Be disesuaikan dengan tense.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari subject.',
                    'Tentukan apakah subject melakukan atau menerima tindakan.',
                    'Jika menerima tindakan, gunakan Passive Voice dengan Be + Verb 3.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari subject. Tentukan apakah subject melakukan atau menerima tindakan. Jika menerima tindakan, gunakan Passive Voice.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    'Menggunakan Verb 2, Verb 1, atau Verb-ing setelah be.',
                    'Lupa menggunakan be.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The new bridge was build last year.\nBagian yang salah adalah...\n\nA. The\nB. was\nC. build\nD. year\n\n✅ Jawaban: C. build\n\nPembahasan: Passive Voice setelah was memerlukan Verb 3. Build → Built. Yang benar: "was built".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Passive Voice menggunakan Be + Verb 3.',
                    'Perhatikan apakah subject menerima tindakan.',
                    'Gunakan bentuk be sesuai tense.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa pola Passive Voice?', a: 'Subject + be (is/am/are/was/were) + Verb 3 (Past Participle).' },
                { q: 'Kapan menggunakan Passive Voice?', a: 'Ketika subject menerima tindakan, bukan melakukan tindakan.' },
                { q: 'Apa yang salah dari "The cake was ate"?', a: 'Setelah "was" harus Verb 3 (eaten), bukan Verb 2 (ate).' },
                { q: 'Bagaimana Passive Voice Present Perfect?', a: 'Subject + has/have + been + Verb 3.' },
                { q: 'Contoh: "The students are taught by the teacher" active voice-nya?', a: '"The teacher teaches the students."' }
              ]
            },
            {
              id: 'we-skill-6',
              title: 'Skill 6 – Berbagai Jenis Noun',
              icon: '📦',
              color: 'secondary',
              short: 'Skill 6',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Perhatikan Berbagai Jenis Noun',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'TOEFL sering menguji perbedaan countable dan uncountable noun. Uncountable noun tidak boleh diberi akhiran -s dan menggunakan quantifier much/little, bukan many/few.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Perhatikan apakah noun tersebut countable atau uncountable.',
                    'Pastikan quantifier yang digunakan sudah sesuai.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Hafalkan uncountable noun yang sering keluar: advice, information, equipment, furniture, homework, luggage, knowledge, progress, research.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"informations" → salah (information uncountable).',
                    '"advices" → salah.',
                    '"furnitures" → salah.'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The professor gave us many useful informations about the research.\nBagian yang salah adalah...\n\nA. professor\nB. many\nC. informations\nD. research\n\n✅ Jawaban: C. informations\n\nPembahasan: Information adalah uncountable noun, tidak boleh diberi -s. Yang benar: "much useful information".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Bedakan countable dan uncountable noun.',
                    'Jangan menambahkan -s pada uncountable noun.',
                    'Gunakan quantifier yang sesuai.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Sebutkan contoh uncountable noun yang sering muncul di TOEFL!', a: 'Advice, information, equipment, furniture, homework, luggage, knowledge, progress, research.' },
                { q: 'Apa bedanya "many" dan "much"?', a: '"Many" untuk countable noun, "much" untuk uncountable noun.' },
                { q: 'Apa yang salah dari "many information"?', a: 'Information uncountable, seharusnya "much information".' },
                { q: 'Mengapa "informations" salah?', a: 'Karena information adalah uncountable noun yang tidak bisa diberi akhiran -s.' },
                { q: 'Quantifier apa yang tepat untuk uncountable noun?', a: 'Much, little, a little, a lot of.' }
              ]
            },
            {
              id: 'we-skill-7',
              title: 'Skill 7 – Penggunaan Pronouns',
              icon: '🏷️',
              color: 'secondary',
              short: 'Skill 7',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Penggunaan Pronouns',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Pronoun harus sesuai dengan fungsinya: Subject Pronoun (I, you, he, she, it, we, they) sebagai subjek, Object Pronoun (me, you, him, her, it, us, them) sebagai objek, Possessive Adjective (my, your, his, her, its, our, their) sebelum noun, Possessive Pronoun (mine, yours, his, hers, its, ours, theirs) tanpa noun.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari pronoun yang digunakan.',
                    'Tentukan fungsinya: subject, object, atau possessive.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Perhatikan posisi pronoun. Sebelum verb → subject pronoun. Setelah verb → object pronoun. Sebelum noun → possessive adjective. Tanpa noun → possessive pronoun.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"Him is my brother" → seharusnya "He".',
                    '"The teacher gave she a book" → seharusnya "her".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'Her is the best student in the class.\nBagian yang salah adalah...\n\nA. Her\nB. best\nC. student\nD. class\n\n✅ Jawaban: A. Her\n\nPembahasan: Pronoun sebagai subject harus menggunakan Subject Pronoun. Yang benar: "She is the best student".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Gunakan Subject Pronoun sebagai subjek.',
                    'Object Pronoun sebagai objek.',
                    'Possessive Adjective sebelum noun.',
                    'Possessive Pronoun tanpa noun.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya "her" sebagai possessive adjective dan object pronoun?', a: 'Possessive adjective: "her book" (sebelum noun). Object pronoun: "give her" (setelah verb/preposition).' },
                { q: 'Kapan menggunakan "mine" vs "my"?', a: '"My" sebelum noun (my book), "mine" tanpa noun (this is mine).' },
                { q: 'Apa yang salah dari "Him is my brother"?', a: 'Subject harus Subject Pronoun "He", bukan Object Pronoun "Him".' },
                { q: 'Apa bedanya "its" dan "it\'s"?', a: '"Its" = possessive (miliknya), "it\'s" = "it is" (contraction).' },
                { q: 'Apa Subject Pronoun untuk "they"?', a: '"They" (Subject), "them" (Object), "their" (Possessive Adjective), "theirs" (Possessive Pronoun).' }
              ]
            },
            {
              id: 'we-skill-8',
              title: 'Skill 8 – Adjectives vs Adverbs',
              icon: '📝',
              color: 'secondary',
              short: 'Skill 8',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Perbedaan Penggunaan Adjectives dan Adverbs',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Adjective menjelaskan noun (beautiful girl). Adverb menjelaskan verb, adjective, atau adverb lain (sings beautifully). Adverb biasanya berakhiran -ly.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Tanyakan: "Kata ini sedang menjelaskan apa?"',
                    'Jika menjelaskan noun → adjective.',
                    'Jika menjelaskan verb → adverb.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Cari verb utama. Jika kata tersebut menerangkan verb, pilih adverb. Jika menerangkan noun, pilih adjective.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"She sings beautiful" → seharusnya "beautifully".',
                    '"He is a carefully driver" → seharusnya "careful".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The children played happy in the playground.\nBagian yang salah adalah...\n\nA. children\nB. played\nC. happy\nD. playground\n\n✅ Jawaban: C. happy\n\nPembahasan: Kata tersebut menjelaskan verb "played", sehingga harus menggunakan adverb: "happily".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Adjective menjelaskan noun.',
                    'Adverb menjelaskan verb, adjective, atau adverb.',
                    'Jika menerangkan verb, biasanya gunakan bentuk -ly.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya adjective dan adverb?', a: 'Adjective menjelaskan noun (good student). Adverb menjelaskan verb (sings well).' },
                { q: 'Bagaimana cara membentuk adverb dari adjective?', a: 'Biasanya tambahkan -ly (beautiful → beautifully), tapi tidak selalu.' },
                { q: 'Apa yang salah dari "She runs quick"?', a: '"Quick" menjelaskan verb "runs", seharusnya adverb "quickly".' },
                { q: 'Apa yang salah dari "He is a slowly driver"?', a: '"Slowly" menjelaskan noun "driver", seharusnya adjective "slow".' },
                { q: 'Kapan adjective bukan -ly?', a: 'Kata seperti "fast", "hard", "late" bisa berfungsi sebagai adjective dan adverb.' }
              ]
            },
            {
              id: 'we-skill-9',
              title: 'Skill 9 – Articles (A, An, The)',
              icon: '📰',
              color: 'secondary',
              short: 'Skill 9',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Penggunaan Articles (A, An, The)',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: '"A" untuk kata berbunyi konsonan, "an" untuk kata berbunyi vokal. "The" untuk benda spesifik atau sudah diketahui. Perhatikan bunyi awal kata, bukan huruf pertama.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Perhatikan noun setelah article.',
                    'Apakah bunyi awalnya vokal atau konsonan?',
                    'Apakah benda tersebut spesifik?'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jangan hanya melihat huruf pertama. University → bunyi "yu" → "a". Hour → bunyi "our" → "an".'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"a apple" → seharusnya "an".',
                    '"an university" → seharusnya "a university".',
                    '"a hour" → seharusnya "an hour".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'She bought a umbrella yesterday.\nBagian yang salah adalah...\n\nA. bought\nB. a\nC. umbrella\nD. yesterday\n\n✅ Jawaban: B. a\n\nPembahasan: Umbrella diawali bunyi vokal, harus menggunakan "an".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'A → bunyi konsonan.',
                    'An → bunyi vokal.',
                    'The → benda spesifik atau sudah diketahui.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya "a" dan "an"?', a: '"A" untuk kata berbunyi konsonan, "an" untuk kata berbunyi vokal.' },
                { q: 'Mengapa "a university" bukan "an university"?', a: 'Karena "university" dibaca "yu-niversity" → bunyi konsonan "y".' },
                { q: 'Mengapa "an hour" bukan "a hour"?', a: 'Karena "h" tidak dibaca, sehingga bunyi awalnya "our" → vokal.' },
                { q: 'Kapan menggunakan "the"?', a: 'Untuk benda yang spesifik, sudah diketahui, atau hanya ada satu (the sun, the moon).' },
                { q: 'Kapan article tidak digunakan?', a: 'Untuk noun umum/jamak yang tidak spesifik (I like dogs) atau uncountable noun umum (I like water).' }
              ]
            },
            {
              id: 'we-skill-10',
              title: 'Skill 10 – Prepositions (Collocation)',
              icon: '📎',
              color: 'secondary',
              short: 'Skill 10',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Penggunaan Prepositions (Collocation)',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Ada adjective, verb, atau noun yang harus diikuti preposition tertentu (collocation). Jika menggunakan preposition yang salah, kalimat menjadi tidak tepat.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Cari adjective, verb, atau noun yang diikuti preposition.',
                    'Periksa apakah pasangan preposition tersebut sudah benar.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Hafalkan collocation yang sering muncul: interested in, good at, afraid of, depend on, belong to, listen to, wait for.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"interested on" → "interested in".',
                    '"married with" → "married to".',
                    '"good in English" → "good at English".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'She is very interested on learning foreign languages.\nBagian yang salah adalah...\n\nA. very\nB. interested\nC. on\nD. learning\n\n✅ Jawaban: C. on\n\nPembahasan: "Interested" selalu diikuti "in", bukan "on". Yang benar: "interested in".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Beberapa kata memiliki pasangan preposition tertentu (collocation).',
                    'Hafalkan collocation yang sering muncul di TOEFL.',
                    'Jangan memilih preposition berdasarkan terjemahan bahasa Indonesia.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa itu collocation dalam konteks preposition?', a: 'Pasangan kata yang sudah menjadi kebiasaan (interested in, good at, depend on).' },
                { q: 'Preposition apa yang tepat untuk "interested"?', a: '"Interested in" (contoh: interested in music).' },
                { q: 'Apa yang salah dari "married with"?', a: 'Seharusnya "married to" (menikah dengan).' },
                { q: 'Preposition apa untuk "good"?', a: '"Good at" (contoh: good at math).' },
                { q: 'Mengapa collocation penting di TOEFL?', a: 'Karena kesalahan collocation sering menjadi jebakan dalam soal Written Expression.' }
              ]
            },
            {
              id: 'we-skill-11',
              title: 'Skill 11 – Word Choice',
              icon: '📖',
              color: 'secondary',
              short: 'Skill 11',
              gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
              subtitle: 'Perhatikan Pemilihan Kata (Word Choice)',
              sections: [
                {
                  type: 'pengertian',
                  icon: '📖',
                  title: 'Penjelasan',
                  content: 'Tidak semua kesalahan berasal dari grammar. TOEFL juga menguji pemilihan kata (word choice). Sebuah kata mungkin ejaannya benar, tetapi tidak sesuai dengan makna atau fungsi yang dibutuhkan.'
                },
                {
                  type: 'tujuan',
                  icon: '🎯',
                  title: 'Strategi Mengerjakan',
                  checklist: [
                    'Tentukan kelas kata yang dibutuhkan (noun, verb, adjective, adverb).',
                    'Periksa apakah kata yang digunakan sudah sesuai.',
                    'Baca keseluruhan kalimat.'
                  ]
                },
                {
                  type: 'tips',
                  icon: '💡',
                  title: 'Tips',
                  content: 'Jangan hanya melihat ejaannya. Perhatikan fungsi kata dalam kalimat. Pelajari pasangan kata yang sering membingungkan.'
                },
                {
                  type: 'contoh',
                  icon: '⚠️',
                  title: 'Kesalahan yang Sering Terjadi',
                  bullet: [
                    '"lose" (verb) vs "loss" (noun).',
                    '"affect" (verb) vs "effect" (noun).',
                    '"economic" vs "economical".',
                    '"raise" vs "rise".'
                  ]
                },
                {
                  type: 'info',
                  icon: '📝',
                  title: 'Contoh Soal dan Pembahasan',
                  content: 'The company experienced a significant lose during the economic crisis.\nBagian yang salah adalah...\n\nA. experienced\nB. significant\nC. lose\nD. economic\n\n✅ Jawaban: C. lose\n\nPembahasan: Setelah adjective "significant" diperlukan noun. "Lose" adalah verb, "loss" adalah noun. Yang benar: "a significant loss".'
                },
                {
                  type: 'ringkasan',
                  icon: '📌',
                  title: 'Ringkasan',
                  bullet: [
                    'Pilih kata sesuai kelas katanya.',
                    'Jangan terkecoh oleh kata yang ejaannya mirip.',
                    'Selalu baca konteks kalimat secara keseluruhan.'
                  ]
                }
              ],
              flashcards: [
                { q: 'Apa bedanya "lose" dan "loss"?', a: '"Lose" adalah verb (kehilangan), "loss" adalah noun (kehilangan).' },
                { q: 'Apa bedanya "affect" dan "effect"?', a: '"Affect" = verb (memengaruhi), "effect" = noun (akibat).' },
                { q: 'Apa bedanya "economic" dan "economical"?', a: '"Economic" = berkaitan dengan ekonomi, "economical" = hemat/efisien.' },
                { q: 'Apa bedanya "raise" dan "rise"?', a: '"Raise" = transitive (mengangkat sesuatu), "rise" = intransitive (naik dengan sendirinya).' },
                { q: 'Bagaimana cara menghindari kesalahan word choice?', a: 'Perhatikan kelas kata yang dibutuhkan dalam kalimat, bukan hanya ejaannya.' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          q: 'Choose the correct answer.\n\nThe teacher, together with her students, _____ preparing for the science exhibition.',
          options: ['are', 'were', 'is', 'have'],
          answer: 2,
          explanation: 'Subject utamanya adalah The teacher (tunggal). Frasa together with her students bukan subject sehingga verb tetap is.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe students (A) has finished (B) their assignment (C) before the deadline (D) yesterday.',
          options: ['has', 'their', 'before', 'yesterday'],
          answer: 0,
          explanation: 'Subject The students berbentuk jamak, sehingga harus menggunakan have, bukan has.'
        },
        {
          q: 'Choose the correct answer.\n\nThe report _____ by the manager before the meeting started.',
          options: ['reviewed', 'was reviewed', 'reviewing', 'review'],
          answer: 1,
          explanation: 'Kalimat pasif Simple Past menggunakan was + Verb 3.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nShe is interested (A) on learning (B) foreign languages (C) at university (D).',
          options: ['on', 'learning', 'foreign', 'at'],
          answer: 0,
          explanation: 'Collocation yang benar adalah interested in, bukan interested on.'
        },
        {
          q: 'Choose the correct answer.\n\n_____ he finished the project, he submitted it to his supervisor.',
          options: ['After', 'Because', 'Although', 'During'],
          answer: 0,
          explanation: '"After" menunjukkan urutan waktu yang tepat.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe weather (A) today is (B) more colder (C) than yesterday (D).',
          options: ['today', 'more', 'than', 'yesterday'],
          answer: 1,
          explanation: 'Tidak boleh menggunakan more + adjective -er secara bersamaan. Harusnya: colder than atau more cold (meskipun jarang digunakan).'
        },
        {
          q: 'Choose the correct answer.\n\nThe woman _____ lives next door is a famous doctor.',
          options: ['which', 'whose', 'who', 'whom'],
          answer: 2,
          explanation: 'Relative pronoun untuk orang yang menjadi subject adalah who.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nMy brother enjoys (A) to play basketball (B) every weekend (C) with his friends (D).',
          options: ['to play', 'every', 'with', 'friends'],
          answer: 0,
          explanation: 'Setelah enjoy harus menggunakan Verb-ing. Seharusnya: enjoys playing.'
        },
        {
          q: 'Choose the correct answer.\n\nOnly after the guests had left _____ the missing necklace.',
          options: ['did she notice', 'she noticed', 'she notice', 'does she notice'],
          answer: 0,
          explanation: 'Setelah ekspresi negatif seperti Only after, digunakan inversion.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nEach of the students (A) have received (B) a certificate (C) yesterday (D).',
          options: ['have', 'received', 'a', 'yesterday'],
          answer: 0,
          explanation: 'Subject Each selalu dianggap tunggal. Harusnya: has received.'
        },
        {
          q: 'Choose the correct answer.\n\nThe woman _____ won the writing competition is my English teacher.',
          options: ['whom', 'who', 'whose', 'which'],
          answer: 1,
          explanation: 'Karena menjelaskan orang yang menjadi subject, digunakan who.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe news (A) were very surprising (B) because everyone (C) expected a different result (D).',
          options: ['were', 'because', 'expected', 'result'],
          answer: 0,
          explanation: 'News termasuk uncountable noun, sehingga menggunakan was, bukan were.'
        },
        {
          q: 'Choose the correct answer.\n\nThe students were excited because the exam _____.',
          options: ['had cancelled', 'had been cancelled', 'cancelled', 'cancelling'],
          answer: 1,
          explanation: 'Kalimat membutuhkan bentuk past perfect passive karena ujian dibatalkan.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nTom bought (A) a new laptop because (B) he wanted (C) improve his programming skills (D).',
          options: ['a', 'he', 'improve', 'skills'],
          answer: 2,
          explanation: 'Setelah wanted harus menggunakan to + Verb. Seharusnya: wanted to improve.'
        },
        {
          q: 'Choose the correct answer.\n\n_____ the heavy rain, the football match continued as scheduled.',
          options: ['Because', 'Although', 'Despite', 'Since'],
          answer: 2,
          explanation: 'Setelah Despite langsung diikuti noun phrase.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe teacher asked (A) the students if (B) they had (C) finish the assignment (D).',
          options: ['the students', 'they', 'finish', 'assignment'],
          answer: 2,
          explanation: 'Setelah had harus menggunakan Verb 3. Seharusnya: had finished.'
        },
        {
          q: 'Choose the correct answer.\n\nThe engineer explained _____ the machine worked.',
          options: ['what', 'how', 'which', 'whose'],
          answer: 1,
          explanation: 'Kalimat membutuhkan noun clause connector berupa how.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nShe speaks English (A) fluent because (B) she lived (C) abroad for many years (D).',
          options: ['fluent', 'she', 'abroad', 'years'],
          answer: 0,
          explanation: 'Setelah verb speaks harus menggunakan adverb. Seharusnya: fluently.'
        },
        {
          q: 'Choose the correct answer.\n\nNot only _____ late, but he also forgot to bring the report.',
          options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'],
          answer: 1,
          explanation: 'Setelah ekspresi negatif Not only, digunakan inversion.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe manager suggested (A) to hold another meeting (B) next week because (C) several employees were absent (D).',
          options: ['to hold', 'next week', 'several employees', 'were absent'],
          answer: 0,
          explanation: 'Setelah suggest, gunakan Verb-ing, bukan to + Verb. Seharusnya: suggested holding another meeting.'
        },
        {
          q: 'Choose the correct answer.\n\nThe students, _____ were absent yesterday, must take the quiz next week.',
          options: ['whom', 'who', 'whose', 'which'],
          answer: 1,
          explanation: 'Karena menjelaskan students sebagai subjek, gunakan who.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe company (A) have opened (B) a new branch (C) in Jakarta last month (D).',
          options: ['have', 'a', 'in Jakarta', 'last month'],
          answer: 0,
          explanation: 'Subject The company dianggap tunggal. Harusnya: has opened.'
        },
        {
          q: 'Choose the correct answer.\n\n_____ the weather was cold, the children continued playing outside.',
          options: ['Because', 'Although', 'Since', 'Therefore'],
          answer: 1,
          explanation: 'Kalimat menunjukkan pertentangan.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe teacher encouraged (A) the students to (B) studying harder (C) before the final exam (D).',
          options: ['the students', 'studying', 'before', 'final exam'],
          answer: 1,
          explanation: 'Setelah to harus menggunakan bentuk dasar. Seharusnya: to study.'
        },
        {
          q: 'Choose the correct answer.\n\nThe book _____ on the desk belongs to my sister.',
          options: ['placing', 'placed', 'place', 'is placing'],
          answer: 1,
          explanation: 'Menggunakan past participle sebagai reduced adjective clause.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nEvery student (A) are required (B) to bring their (C) student card tomorrow (D).',
          options: ['are', 'to bring', 'their', 'tomorrow'],
          answer: 0,
          explanation: 'Every student adalah subject tunggal. Harusnya: is required.'
        },
        {
          q: 'Choose the correct answer.\n\nOnly after the meeting _____ why the manager was angry.',
          options: ['we understood', 'did we understand', 'we understand', 'understand we'],
          answer: 1,
          explanation: 'Setelah Only after, digunakan inversion.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe information (A) were very useful (B) for completing (C) the assignment.',
          options: ['were', 'for', 'completing', 'assignment'],
          answer: 0,
          explanation: 'Information adalah uncountable noun. Harusnya: was.'
        },
        {
          q: 'Choose the correct answer.\n\nThe manager asked _____ the report had been completed.',
          options: ['if', 'because', 'although', 'during'],
          answer: 0,
          explanation: 'Kalimat membutuhkan noun clause connector.'
        },
        {
          q: 'Identify the underlined word or phrase that must be changed.\n\nThe new library is (A) more larger than (B) the old one because (C) it has three floors (D).',
          options: ['more larger', 'the old one', 'it', 'has'],
          answer: 0,
          explanation: 'Tidak boleh menggunakan more dan -er secara bersamaan. Harusnya: larger than.'
        }
      ]
    },
    {
      id: 'reading',
      title: 'Reading Comprehension',
      icon: '📚',
      color: 'green',
      short: 'Reading',
      gradient: 'linear-gradient(135deg, #059669, #10B981)',
      subtitle: 'TOEFL Reading Comprehension Section',
      children: [
        {
          id: 'rc-skill-1',
          title: 'Skill 1 – Ide Pokok (Main Idea / Topic)',
          icon: '🎯',
          color: 'green',
          short: 'Skill 1',
          gradient: 'linear-gradient(135deg, #059669, #10B981)',
          subtitle: 'Menemukan Gagasan Utama Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Dalam TOEFL Reading, pertanyaan Main Idea bertujuan untuk mengetahui inti atau gagasan utama dari seluruh teks. Ide pokok bukan menanyakan informasi kecil, tetapi menanyakan apa yang paling sering dibahas dalam bacaan tersebut. Biasanya pertanyaan Main Idea muncul dengan bentuk:\n\nWhat is the main idea of the passage?\nWhat is the passage mainly about?\nWhat does the passage mainly discuss?\nWhat is the topic of the passage?'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Perhatikan kata: mainly about, main idea, primarily discusses, best title, topic.',
                'Jika menemukan kata tersebut, berarti pertanyaan meminta kesimpulan umum dari seluruh bacaan.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Baca kalimat pertama dan terakhir — Kalimat pertama memperkenalkan topik, kalimat terakhir memberikan kesimpulan.\n2. Cari kata yang sering muncul — Jika sebuah kata atau konsep muncul berkali-kali, kemungkinan besar itu adalah topik utama.\n3. Jangan pilih jawaban yang terlalu spesifik — Pilih jawaban yang mencakup seluruh isi bacaan, bukan sebagian kecil.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih jawaban berdasarkan satu kalimat saja.',
                'Memilih informasi yang menarik tetapi bukan inti teks.',
                'Memilih jawaban terlalu luas — contoh: "Transportation" terlalu luas untuk teks tentang mobil listrik.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nPenguins are birds that live mostly in cold regions. They cannot fly, but they are excellent swimmers. Penguins use their swimming ability to find food and avoid predators.\n\nWhat is the passage mainly about?\nA. Different types of birds\nB. The ability and life of penguins\nC. How birds learn to fly\nD. Animals living in forests\n\n✅ Jawaban: B\n\nPembahasan: Seluruh teks membahas penguin — tempat hidupnya, kemampuan berenang, cara bertahan hidup. Jadi jawaban yang paling mewakili seluruh teks adalah B.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Main Idea = inti pembahasan seluruh teks.',
                'Jangan fokus pada detail kecil.',
                'Cari topik yang paling sering muncul.',
                'Pilih jawaban yang mencakup seluruh isi bacaan.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Main Idea dalam TOEFL Reading?', a: 'Gagasan utama atau inti pembahasan dari seluruh teks, bukan detail kecil.' },
            { q: 'Bagaimana cara mengenali soal Main Idea?', a: 'Perhatikan kata kunci: mainly about, main idea, primarily discusses, best title, topic.' },
            { q: 'Apa yang harus dilakukan pertama kali saat mencari Main Idea?', a: 'Baca kalimat pertama (topik) dan kalimat terakhir (kesimpulan).' },
            { q: 'Mengapa tidak boleh memilih jawaban yang terlalu spesifik?', a: 'Karena Main Idea mencakup seluruh teks, bukan hanya sebagian kecil dari bacaan.' },
            { q: 'Bagaimana cara menentukan topik utama dari sebuah teks?', a: 'Cari kata atau konsep yang paling sering muncul di sepanjang teks.' }
          ]
        },
        {
          id: 'rc-skill-2',
          title: 'Skill 2 – Susunan Ide (Organization of Ideas)',
          icon: '🗂️',
          color: 'green',
          short: 'Skill 2',
          gradient: 'linear-gradient(135deg, #047857, #059669)',
          subtitle: 'Memahami Pola Penyusunan Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Skill ini bertujuan mengetahui bagaimana penulis menyusun informasi dalam teks. Setiap bacaan memiliki pola penyampaian informasi tertentu. Dalam TOEFL, pertanyaan ini biasanya menanyakan bagaimana teks disusun atau bagaimana informasi berkembang dari awal sampai akhir.\n\nJenis Susunan Ide yang Sering Muncul:\n1. Chronological Order (Urutan Waktu) — informasi disusun berdasarkan waktu kejadian. Ciri: first, then, later, finally.\n2. Cause and Effect (Sebab dan Akibat) — teks menjelaskan penyebab dan dampaknya. Ciri: because, due to, result.\n3. Compare and Contrast (Perbandingan) — teks membandingkan dua hal. Ciri: however, different, similar, unlike.\n4. General to Specific — dimulai dari informasi umum kemudian masuk ke detail.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: How is the passage organized? / How does the author organize the information?',
                'Lihat paragraf pertama — apakah memperkenalkan sejarah, masalah, atau perbandingan?',
                'Lihat hubungan antar paragraf dan tentukan pola terbesar.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Lihat paragraf pertama untuk menentukan apakah memperkenalkan sejarah, masalah, atau perbandingan.\n2. Lihat hubungan antar paragraf.\n3. Tentukan pola terbesar yang mencakup seluruh teks.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih berdasarkan satu paragraf saja.',
                'Tidak melihat hubungan keseluruhan teks.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Teks membahas:\nParagraf 1: Pengertian perubahan iklim.\nParagraf 2: Penyebab perubahan iklim.\nParagraf 3: Dampak perubahan iklim.\n\nHow is the passage organized?\nA. By comparing two ideas\nB. By describing causes and effects\nC. By presenting information from general to specific\nD. By chronological order\n\n✅ Jawaban: C\n\nPembahasan: Teks dimulai dari penjelasan umum kemudian memberikan rincian (penyebab, dampak). Polanya general to specific.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Organization = cara penulis menyusun teks.',
                'Perhatikan hubungan antar paragraf.',
                'Pola umum: waktu, sebab-akibat, perbandingan, umum ke khusus.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Organization of Ideas dalam TOEFL?', a: 'Cara penulis menyusun dan menyampaikan informasi dalam teks.' },
            { q: 'Sebutkan 4 jenis pola penyusunan teks dalam TOEFL!', a: 'Chronological Order, Cause and Effect, Compare and Contrast, General to Specific.' },
            { q: 'Kapan menggunakan pola Chronological Order?', a: 'Saat informasi disusun berdasarkan waktu kejadian (first, then, later, finally).' },
            { q: 'Bagaimana cara mengenali soal Organization of Ideas?', a: 'Pertanyaan berbentuk "How is the passage organized?" atau "How does the author organize the information?"' },
            { q: 'Mengapa tidak boleh memilih berdasarkan satu paragraf?', a: 'Karena Organization of Ideas menanyakan pola keseluruhan teks, bukan satu bagian saja.' }
          ]
        },
        {
          id: 'rc-skill-3',
          title: 'Skill 3 – Informasi Detail yang Tersurat (Explicit Detail)',
          icon: '🔍',
          color: 'green',
          short: 'Skill 3',
          gradient: 'linear-gradient(135deg, #10B981, #34D399)',
          subtitle: 'Menemukan Fakta Langsung dalam Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Pertanyaan detail tersurat meminta informasi yang tertulis langsung dalam teks. Artinya, jawaban bisa ditemukan secara langsung tanpa perlu menyimpulkan. Biasanya pertanyaan menggunakan kata: According to the passage, The passage states that, Which of the following is mentioned?'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan meminta nama, tempat, waktu, jumlah, atau fakta tertentu.',
                'Biasanya menggunakan kata: According to, The passage states, Which is mentioned.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Jangan membaca ulang seluruh teks.\n2. Cari keyword dari pertanyaan di dalam teks.\n3. Baca kalimat sekitar keyword — jawaban biasanya berada dekat dengan informasi tersebut.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Menggunakan pengetahuan sendiri di luar teks.',
                'Memilih jawaban yang masuk akal tetapi tidak ada di teks.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nThe Eiffel Tower was completed in 1889 and is located in Paris, France. It was designed by Gustave Eiffel.\n\nWhen was the Eiffel Tower completed?\nA. 1789\nB. 1889\nC. 1989\nD. 1999\n\n✅ Jawaban: B\n\nPembahasan: Jawaban tertulis langsung dalam teks: "The Eiffel Tower was completed in 1889."'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Detail tersurat = informasi yang tertulis jelas dalam teks.',
                'Cari keyword dari pertanyaan.',
                'Jangan menggunakan opini atau pengetahuan pribadi.',
                'Jawaban biasanya ada langsung dalam teks.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Explicit Detail dalam TOEFL Reading?', a: 'Informasi yang tertulis langsung dan jelas dalam teks, bisa ditemukan tanpa perlu menyimpulkan.' },
            { q: 'Bagaimana cara menjawab soal Explicit Detail?', a: 'Cari keyword dari pertanyaan di dalam teks, lalu baca kalimat sekitar keyword tersebut.' },
            { q: 'Kata kunci apa yang sering muncul dalam soal Explicit Detail?', a: 'According to the passage, The passage states that, Which of the following is mentioned?' },
            { q: 'Mengapa tidak boleh menggunakan pengetahuan pribadi?', a: 'Karena jawaban harus berdasarkan informasi yang tertulis langsung dalam teks.' },
            { q: 'Di mana biasanya jawaban soal Explicit Detail berada?', a: 'Biasanya berada di dekat keyword atau informasi yang ditanyakan dalam teks.' }
          ]
        },
        {
          id: 'rc-skill-4',
          title: 'Skill 4 – Informasi Detail yang Tidak Tersurat (Unstated Detail)',
          icon: '🚫',
          color: 'green',
          short: 'Skill 4',
          gradient: 'linear-gradient(135deg, #047857, #059669)',
          subtitle: 'Menemukan yang Tidak Disebutkan / Salah',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Dalam TOEFL Reading, pertanyaan detail yang tidak tersurat (unstated detail) meminta kita menemukan informasi yang tidak disebutkan atau tidak benar dalam teks. Berbeda dengan detail tersurat yang mencari informasi yang ada, soal ini justru meminta kita mencari pilihan yang salah atau tidak disebutkan.\n\nBiasanya soal menggunakan kata: NOT, EXCEPT, NOT mentioned, NOT stated, All of the following are true EXCEPT.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Perhatikan kata kunci negatif: NOT, EXCEPT, NOT mentioned.',
                'Biasanya 3 pilihan benar dan hanya 1 yang salah/tidak disebutkan.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Jangan mencari jawaban benar terlebih dahulu — cari pilihan yang tidak memiliki bukti dalam teks.\n2. Gunakan teknik eliminasi: periksa satu per satu apakah ada di teks.\n3. Hati-hati dengan sinonim — TOEFL sering mengganti kata dengan padanan yang memiliki arti sama.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih jawaban yang benar tetapi bukan jawaban yang ditanyakan.',
                'Tidak memperhatikan kata NOT/EXCEPT.',
                'Menggunakan pengetahuan pribadi di luar teks.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nThe Amazon rainforest is home to millions of plants and animals. It provides oxygen, regulates climate, and supports many indigenous communities.\n\nWhich of the following is NOT mentioned as a function of the Amazon rainforest?\nA. Providing oxygen\nB. Regulating climate\nC. Supporting communities\nD. Producing electricity\n\n✅ Jawaban: D\n\nPembahasan: Dalam teks disebutkan menyediakan oksigen (A), mengatur iklim (B), mendukung komunitas asli (C). Tidak ada informasi tentang menghasilkan listrik.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Detail tidak tersurat mencari informasi yang tidak ada atau salah.',
                'Perhatikan kata NOT dan EXCEPT.',
                'Gunakan eliminasi berdasarkan bukti dalam teks.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa perbedaan Explicit Detail dan Unstated Detail?', a: 'Explicit Detail mencari informasi yang ada di teks, Unstated Detail mencari informasi yang tidak ada atau salah.' },
            { q: 'Kata kunci apa yang menandakan soal Unstated Detail?', a: 'NOT, EXCEPT, NOT mentioned, NOT stated, All of the following are true EXCEPT.' },
            { q: 'Bagaimana strategi menjawab soal Unstated Detail?', a: 'Gunakan teknik eliminasi — periksa satu per satu pilihan apakah ada bukti dalam teks.' },
            { q: 'Mengapa harus berhati-hati dengan sinonim?', a: 'Karena TOEFL sering mengganti kata dalam pilihan jawaban dengan padanan yang memiliki arti sama.' },
            { q: 'Berapa banyak pilihan yang biasanya benar dalam soal Unstated Detail?', a: 'Biasanya 3 pilihan benar dan 1 yang salah/tidak disebutkan.' }
          ]
        },
        {
          id: 'rc-skill-5',
          title: 'Skill 5 – Rujukan dari Kata Ganti (Reference)',
          icon: '🔗',
          color: 'green',
          short: 'Skill 5',
          gradient: 'linear-gradient(135deg, #065F46, #059669)',
          subtitle: 'Menentukan Apa yang Dimaksud Pronoun',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Dalam teks bahasa Inggris, penulis sering menggunakan kata ganti (pronoun) agar tidak mengulang kata yang sama. Skill Reference bertujuan mengetahui kata yang dimaksud oleh sebuah pronoun. Kata yang sering ditanyakan: it, they, them, this, these, those, which, who.\n\nContoh:\nThe computer was invented many years ago. It changed the way people work.\nKata "It" mengacu kepada: The computer.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: The word "it" refers to... / The word "they" refers to...',
                'Cari pronoun yang ditanyakan dalam teks.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Lihat kalimat sebelum kata ganti — biasanya jawaban berada sebelum pronoun.\n2. Cari noun yang sesuai jumlahnya (singular/plural).\n3. Jangan memilih kata terdekat tanpa melihat makna — bisa saja kata terdekat bukan yang dimaksud.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih kata terdekat tanpa membaca konteks.',
                'Tidak memperhatikan singular/plural — "they" harus mengacu benda jamak.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nThe whale is one of the largest animals on Earth. It can grow up to 30 meters long.\n\nThe word "It" refers to...\nA. Earth\nB. Animals\nC. Whale\nD. Meter\n\n✅ Jawaban: C\n\nPembahasan: Kalimat pertama membahas the whale. Kalimat kedua "It can grow..." — "It" menggantikan kata the whale.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Reference mencari arti kata ganti (pronoun).',
                'Biasanya jawaban ada sebelum pronoun.',
                'Perhatikan jumlah kata (singular/jamak).',
                'Jangan hanya memilih kata yang paling dekat.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Reference dalam TOEFL Reading?', a: 'Menentukan kata benda yang dimaksud oleh sebuah pronoun (kata ganti).' },
            { q: 'Pronoun apa saja yang sering ditanyakan dalam soal Reference?', a: 'It, they, them, this, these, those, which, who.' },
            { q: 'Di mana biasanya jawaban soal Reference berada?', a: 'Biasanya pada kalimat sebelum pronoun tersebut.' },
            { q: 'Mengapa harus memperhatikan singular/plural?', a: 'Karena pronoun harus sesuai jumlah dengan kata benda yang dirujuk (they = jamak, it = tunggal).' },
            { q: 'Mengapa tidak boleh memilih kata terdekat tanpa konteks?', a: 'Karena kata terdekat belum tentu yang dimaksud — harus dilihat dari makna dan konteks kalimat.' }
          ]
        },
        {
          id: 'rc-skill-6',
          title: 'Skill 6 – Informasi Detail yang Tersirat (Inference)',
          icon: '🧠',
          color: 'green',
          short: 'Skill 6',
          gradient: 'linear-gradient(135deg, #059669, #6EE7B7)',
          subtitle: 'Menarik Kesimpulan dari Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Pertanyaan Inference meminta kita menemukan informasi yang tidak ditulis secara langsung, tetapi dapat disimpulkan berdasarkan informasi dalam teks. Berbeda dengan detail tersurat yang jawabannya ada langsung di teks, inference harus dipikirkan berdasarkan petunjuk dalam teks.\n\nContoh sederhana:\nTeks: "Sarah brought an umbrella and wore a raincoat before leaving her house."\nTidak tertulis: "Sarah expects rain." Tetapi kita dapat menyimpulkan Sarah kemungkinan memperkirakan hujan.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan menggunakan: It can be inferred that, It can be concluded that, The passage suggests that, The author implies that.',
                'Jawaban tidak ada langsung dalam teks tetapi bisa disimpulkan.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Jangan menggunakan pendapat pribadi — kesimpulan harus berdasarkan teks.\n2. Gabungkan beberapa informasi dari teks untuk menarik kesimpulan.\n3. Pilih jawaban yang paling logis, bukan yang paling menarik.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih jawaban yang terlalu jauh dari teks.',
                'Menggunakan informasi dari luar bacaan.',
                'Membuat asumsi berlebihan.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nMany people choose bicycles instead of cars because bicycles do not produce pollution and help people stay healthy.\n\nWhat can be inferred from the passage?\nA. Cars are always dangerous.\nB. Cycling has environmental and health benefits.\nC. Everyone should stop using cars.\nD. Bicycles are expensive.\n\n✅ Jawaban: B\n\nPembahasan: Teks menyebutkan tidak menghasilkan polusi (manfaat lingkungan) dan membantu tetap sehat (manfaat kesehatan). Kesimpulan yang tepat adalah B.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Inference = kesimpulan berdasarkan informasi dalam teks.',
                'Jangan mencari kalimat yang sama persis.',
                'Gunakan logika berdasarkan bukti bacaan.',
                'Hindari asumsi pribadi.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Inference dalam TOEFL Reading?', a: 'Informasi yang tidak ditulis langsung tetapi bisa disimpulkan dari petunjuk dalam teks.' },
            { q: 'Bagaimana cara membedakan Inference dan Explicit Detail?', a: 'Explicit Detail jawabannya ada langsung di teks, Inference harus dipikirkan/diambil kesimpulan.' },
            { q: 'Kata kunci apa yang menandakan soal Inference?', a: 'It can be inferred that, It can be concluded that, The passage suggests, The author implies.' },
            { q: 'Mengapa tidak boleh menggunakan pendapat pribadi?', a: 'Karena kesimpulan harus berdasarkan bukti dalam teks, bukan asumsi dari luar bacaan.' },
            { q: 'Bagaimana cara menjawab soal Inference dengan benar?', a: 'Gabungkan beberapa informasi dari teks dan pilih kesimpulan yang paling logis.' }
          ]
        },
        {
          id: 'rc-skill-7',
          title: 'Skill 7 – Makna Kata dari Petunjuk Struktural (Meaning from Structural Clues)',
          icon: '🧩',
          color: 'green',
          short: 'Skill 7',
          gradient: 'linear-gradient(135deg, #047857, #10B981)',
          subtitle: 'Menebak Arti Kata dari Konteks Kalimat',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Skill ini mengajarkan cara menebak arti sebuah kata berdasarkan struktur kalimat di sekitarnya. Structural clues adalah petunjuk yang berasal dari susunan kalimat, seperti tanda baca, kata penghubung, definisi setelah kata tersebut, contoh yang diberikan penulis, dan hubungan antar kalimat.\n\nJenis Petunjuk Struktural:\n1. Definisi (Definition Clue) — penulis menjelaskan arti kata setelah kata "which means" / "refers to" / "is called".\n2. Contoh (Example Clue) — arti kata dapat diketahui melalui contoh dengan kata "such as" / "for example".\n3. Perbandingan (Comparison Clue) — arti kata melalui kesamaan dengan kata lain.\n4. Lawan Kata (Contrast Clue) — penulis memberikan lawan dari kata tersebut dengan "but" / "however" / "unlike".'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: The word "____" is closest in meaning to...',
                'Kata yang ditanyakan biasanya tidak umum atau jarang digunakan.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Jangan langsung panik jika tidak tahu arti kata — baca kalimat sebelum, yang mengandung kata tersebut, dan setelahnya.\n2. Cari petunjuk: definisi, contoh, perbandingan, atau lawan kata.\n3. Ganti pilihan jawaban ke dalam kalimat — jika kalimat tetap masuk akal, kemungkinan benar.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih arti berdasarkan tebakan sendiri.',
                'Hanya melihat satu kata tanpa membaca konteks.',
                'Memilih arti yang benar secara umum tetapi tidak sesuai konteks.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nMany plants can survive in arid areas, where rainfall is very limited.\n\nThe word "arid" is closest in meaning to...\nA. Wet\nB. Dry\nC. Cold\nD. Green\n\n✅ Jawaban: B\n\nPembahasan: Setelah kata "arid" dijelaskan "where rainfall is very limited". Curah hujan yang sedikit menunjukkan daerah kering. Jadi arid = dry.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Gunakan petunjuk dalam kalimat untuk mengetahui arti kata.',
                'Perhatikan definisi, contoh, perbandingan, dan lawan kata.',
                'Jangan bergantung hanya pada hafalan kosakata.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Structural Clues dalam TOEFL Reading?', a: 'Petunjuk dari struktur kalimat untuk menentukan arti sebuah kata.' },
            { q: 'Sebutkan 4 jenis petunjuk struktural!', a: 'Definisi, Contoh, Perbandingan, Lawan Kata.' },
            { q: 'Bagaimana cara mengenali soal Meaning from Structural Clues?', a: 'Pertanyaan berbentuk "The word ____ is closest in meaning to...".' },
            { q: 'Apa yang harus dilakukan jika tidak tahu arti sebuah kata?', a: 'Baca kalimat sebelum, yang mengandung kata tersebut, dan setelahnya untuk mencari petunjuk.' },
            { q: 'Bagaimana cara memverifikasi pilihan jawaban?', a: 'Ganti pilihan jawaban ke dalam kalimat asli — jika tetap masuk akal, kemungkinan benar.' }
          ]
        },
        {
          id: 'rc-skill-8',
          title: 'Skill 8 – Makna dari Imbuhan Kata (Word Formation)',
          icon: '🔤',
          color: 'green',
          short: 'Skill 8',
          gradient: 'linear-gradient(135deg, #10B981, #A7F3D0)',
          subtitle: 'Memahami Prefix dan Suffix',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Dalam bahasa Inggris, sebuah kata dapat berubah arti atau kelas katanya karena mendapatkan imbuhan (prefix atau suffix). TOEFL sering memberikan kata yang sudah memiliki imbuhan dan meminta kamu menentukan maknanya.\n\nContoh: happy → ditambah prefix "un-" = unhappy (tidak bahagia).\n\nPrefix Negatif: un- (tidak), dis- (tidak/berlawanan), in- (tidak), im- (tidak), non- (bukan).\nPrefix Waktu/Jumlah: re- (kembali), pre- (sebelum), post- (setelah), over- (terlalu).\nNoun Suffix: -tion, -ment, -ness, -ity.\nAdjective Suffix: -ful, -less, -able, -ive.\nAdverb Suffix: -ly.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: The word "____" means... / The word "____" is formed from...',
                'Kata yang ditanyakan memiliki prefix atau suffix yang jelas.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Pecah kata menjadi Prefix + Root Word + Suffix.\n2. Cari kata dasar (root word).\n3. Tentukan arti berdasarkan kombinasi prefix, root, dan suffix.\n\nContoh: unbelievable = un (tidak) + believe (percaya) + able (dapat) = tidak dapat dipercaya.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Menganggap imbuhan tidak memiliki arti.',
                'Tidak mengenali kata dasar.',
                'Salah menerjemahkan karena hanya melihat sebagian kata.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'The word "disagreement" is closest in meaning to...\nA. Agreement\nB. Discussion\nC. Difference of opinion\nD. Decision\n\n✅ Jawaban: C\n\nPembahasan: Disagreement = dis (tidak/berlawanan) + agreement (persetujuan) = ketidaksetujuan = difference of opinion.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Prefix mengubah arti kata.',
                'Suffix sering mengubah jenis kata.',
                'Pecah kata menjadi bagian kecil agar mudah memahami arti.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Word Formation dalam TOEFL?', a: 'Perubahan arti atau kelas kata karena adanya imbuhan (prefix/suffix).' },
            { q: 'Apa perbedaan prefix dan suffix?', a: 'Prefix di awal kata (mengubah arti), suffix di akhir kata (mengubah jenis kata).' },
            { q: 'Contoh prefix negatif yang sering muncul di TOEFL?', a: 'un- (tidak), dis- (tidak/berlawanan), in- (tidak), im- (tidak), non- (bukan).' },
            { q: 'Bagaimana cara menganalisis kata berimbuhan?', a: 'Pecah kata: Prefix + Root Word + Suffix, lalu tentukan arti dari masing-masing bagian.' },
            { q: 'Contoh suffix yang mengubah kata menjadi adjective?', a: '-ful (useful), -less (careless), -able (comfortable), -ive (effective).' }
          ]
        },
        {
          id: 'rc-skill-9',
          title: 'Skill 9 – Makna Kata Berdasarkan Konteks (Context Clues)',
          icon: '📖',
          color: 'green',
          short: 'Skill 9',
          gradient: 'linear-gradient(135deg, #059669, #34D399)',
          subtitle: 'Menentukan Arti Kata sesuai Penggunaan',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Satu kata dalam bahasa Inggris bisa memiliki beberapa arti tergantung penggunaannya dalam kalimat. Pada TOEFL, kamu tidak hanya mencari arti kata secara kamus, tetapi harus menentukan arti yang sesuai dengan konteks bacaan.\n\nContoh: Kata "bank" bisa berarti tempat menyimpan uang atau tepi sungai. Artinya tergantung konteks.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: The word "____" is closest in meaning to...',
                'Kata yang ditanyakan memiliki beberapa arti umum.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Baca kalimat lengkap — jangan hanya melihat kata yang ditanyakan.\n2. Perhatikan topik bacaan — arti kata harus sesuai dengan konteks.\n3. Ganti dengan pilihan jawaban dan masukkan ke dalam kalimat — pilih yang paling sesuai.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Menggunakan arti pertama yang diketahui tanpa mempertimbangkan konteks.',
                'Tidak membaca konteks kalimat.',
                'Memilih sinonim yang tidak sesuai topik.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nThe company decided to expand its business by opening new branches in several cities.\n\nThe word "expand" is closest in meaning to...\nA. Reduce\nB. Increase\nC. Close\nD. Stop\n\n✅ Jawaban: B\n\nPembahasan: Konteks "opening new branches" menunjukkan perusahaan memperbesar bisnis. Expand = increase/grow.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Arti kata bergantung pada konteks.',
                'Jangan hanya menghafal arti kamus.',
                'Baca kalimat sekitar kata tersebut.',
                'Gunakan topik bacaan sebagai petunjuk.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Context Clues dalam TOEFL?', a: 'Petunjuk dari konteks kalimat untuk menentukan arti kata yang sesuai.' },
            { q: 'Mengapa satu kata bisa memiliki beberapa arti?', a: 'Karena arti kata bergantung pada bagaimana kata tersebut digunakan dalam kalimat.' },
            { q: 'Bagaimana cara menentukan arti kata yang tepat?', a: 'Baca kalimat lengkap, perhatikan topik bacaan, dan ganti pilihan jawaban ke dalam kalimat.' },
            { q: 'Mengapa tidak boleh menggunakan arti pertama yang diketahui?', a: 'Karena arti yang diketahui belum tentu sesuai dengan konteks bacaan.' },
            { q: 'Contoh kata yang memiliki banyak arti?', a: 'Bank (tempat menyimpan uang / tepi sungai), light (cahaya / ringan), bank (bank / tepi).' }
          ]
        },
        {
          id: 'rc-skill-10',
          title: 'Skill 10 – Letak Informasi Khusus (Location of Information)',
          icon: '📍',
          color: 'green',
          short: 'Skill 10',
          gradient: 'linear-gradient(135deg, #047857, #065F46)',
          subtitle: 'Mencari Lokasi Informasi dalam Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Dalam TOEFL Reading, terkadang soal tidak langsung menanyakan isi informasi, tetapi menanyakan di bagian mana informasi tersebut berada dalam teks. Skill ini menguji kemampuan mencari lokasi informasi tertentu dengan cepat tanpa harus membaca seluruh teks.\n\nContoh pembagian paragraf:\nParagraf 1 → memperkenalkan topik utama.\nParagraf 2 → menjelaskan penyebab atau proses.\nParagraf 3 → membahas dampak atau contoh.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Pertanyaan berbentuk: In which paragraph does the author discuss...? / Where in the passage does the author mention...?',
                'Soal meminta letak, bukan isi informasi.'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: '1. Jangan membaca ulang seluruh teks — gunakan teknik scanning dengan keyword dari pertanyaan.\n2. Perhatikan ide utama setiap paragraf — buat catatan mental saat pertama membaca.\n3. Gunakan kata unik (nama orang, tempat, tahun, istilah khusus) sebagai petunjuk.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Membaca semua teks dari awal setiap menjawab soal.',
                'Tidak memperhatikan pembagian paragraf.',
                'Mencari berdasarkan arti saja tanpa keyword.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nParagraph 1: The smartphone has changed the way people communicate.\nParagraph 2: The development of smartphone technology began with basic mobile phones and later improved with internet features.\nParagraph 3: Today, smartphones are used for education, business, and entertainment.\n\nIn which paragraph does the author discuss the development of smartphone technology?\nA. Paragraph 1\nB. Paragraph 2\nC. Paragraph 3\nD. All paragraphs\n\n✅ Jawaban: B\n\nPembahasan: Paragraf 2 membahas perkembangan teknologi smartphone — perubahan dari telepon sederhana menjadi smartphone modern.'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Location of Information mencari letak informasi dalam teks.',
                'Gunakan teknik scanning.',
                'Cari keyword dari pertanyaan.',
                'Perhatikan ide utama setiap paragraf.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa itu Location of Information dalam TOEFL?', a: 'Soal yang meminta letak informasi tertentu dalam paragraf atau teks.' },
            { q: 'Teknik apa yang digunakan untuk menjawab soal ini?', a: 'Teknik scanning — mencari keyword dari pertanyaan tanpa membaca seluruh teks.' },
            { q: 'Apa yang harus dilakukan saat pertama membaca teks?', a: 'Buat catatan mental tentang ide utama setiap paragraf.' },
            { q: 'Mengapa kata unik penting dalam teknik scanning?', a: 'Karena kata unik (nama, tahun, istilah) lebih mudah ditemukan daripada kata umum.' },
            { q: 'Apa kesalahan terbesar saat menjawab soal ini?', a: 'Membaca ulang seluruh teks dari awal setiap menjawab soal — buang waktu.' }
          ]
        },
        {
          id: 'rc-skill-11',
          title: 'Skill 11 – Tone, Purpose, dan Course',
          icon: '🎨',
          color: 'green',
          short: 'Skill 11',
          gradient: 'linear-gradient(135deg, #059669, #047857)',
          subtitle: 'Nada, Tujuan, dan Bidang Pembahasan Teks',
          sections: [
            {
              type: 'pengertian',
              icon: '📖',
              title: 'Penjelasan',
              content: 'Skill terakhir dalam Reading Comprehension menguji pemahaman secara keseluruhan terhadap bacaan:\n\n1. Tone (Nada Penulis) — sikap atau nada penulis terhadap topik: positif, negatif, netral, kritis, antusias, mendukung.\n   - Positive: beneficial, successful, important, valuable.\n   - Negative: problem, harmful, dangerous, concern.\n   - Neutral: hanya memberikan informasi tanpa pendapat pribadi.\n\n2. Purpose (Tujuan Penulis) — alasan penulis membuat teks.\n   - To Inform: menjelaskan fakta.\n   - To Explain: menjelaskan proses atau cara kerja.\n   - To Describe: menggambarkan karakteristik.\n   - To Persuade: membujuk pembaca menerima pendapat.\n\n3. Course (Bidang Pembahasan) — bidang atau topik yang dibahas: History, Culture, Social, Science, Technology, Health.'
            },
            {
              type: 'tujuan',
              icon: '🎯',
              title: 'Cara Mengenali Soal',
              checklist: [
                'Tone: What is the tone of the passage?',
                'Purpose: What is the purpose of the passage?',
                'Course: What is the topic/field of the passage?'
              ]
            },
            {
              type: 'tips',
              icon: '💡',
              title: 'Strategi Mengerjakan',
              content: 'Untuk Tone: Cari kata yang menunjukkan perasaan penulis.\nUntuk Purpose: Tanyakan "Kenapa penulis membuat teks ini?"\nUntuk Course: Tanyakan "Bidang apa yang paling banyak dibahas?"\n\nStrategi utama: pahami keseluruhan teks, jangan fokus pada satu kalimat.'
            },
            {
              type: 'contoh',
              icon: '⚠️',
              title: 'Kesalahan yang Sering Terjadi',
              bullet: [
                'Memilih tone berdasarkan topik, bukan sikap penulis — teks tentang penyakit tidak selalu tone negatif.',
                'Memilih purpose berdasarkan judul saja.',
                'Memilih course berdasarkan satu kata — ada kata "computer" tidak selalu berarti teknologi.'
              ]
            },
            {
              type: 'info',
              icon: '📝',
              title: 'Contoh Soal dan Pembahasan',
              content: 'Text:\nThe article explains how ancient Egyptians built pyramids and describes their importance in Egyptian civilization.\n\nQuestion 1: What is the purpose?\nA. To criticize ancient Egyptians\nB. To explain the construction and importance of pyramids\nC. To persuade people to visit Egypt\nD. To compare modern buildings\n✅ Jawaban: B\n\nQuestion 2: What is the course?\nA. Technology\nB. Health\nC. History\nD. Biology\n✅ Jawaban: C\n\nQuestion 3: What is the tone?\nA. Angry\nB. Informative\nC. Humorous\nD. Negative\n✅ Jawaban: B'
            },
            {
              type: 'ringkasan',
              icon: '📌',
              title: 'Ringkasan',
              bullet: [
                'Tone → sikap penulis terhadap topik.',
                'Purpose → tujuan penulis membuat teks.',
                'Course → bidang/topik utama yang dibahas.',
                'Pahami keseluruhan teks, jangan fokus pada satu kalimat.'
              ]
            }
          ],
          flashcards: [
            { q: 'Apa perbedaan Tone, Purpose, dan Course?', a: 'Tone = sikap penulis, Purpose = tujuan penulis, Course = bidang/topik teks.' },
            { q: 'Sebutkan 3 jenis Tone yang umum dalam TOEFL!', a: 'Positive (mendukung), Negative (kritikal), Neutral (informatif).' },
            { q: 'Apa tujuan penulis jika teks berisi fakta dan informasi?', a: 'To inform — memberikan informasi kepada pembaca.' },
            { q: 'Bagaimana cara menentukan Course dari sebuah teks?', a: 'Perhatikan kosakata, objek utama, dan jenis informasi yang paling banyak dibahas.' },
            { q: 'Mengapa tidak boleh memilih tone berdasarkan topik?', a: 'Karena teks tentang penyakit belum tentu bernada negatif — bisa saja hanya menjelaskan fakta (neutral).' }
          ]
        }
      ],
      quiz: [
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 1: What is the main idea of the passage?',
          options: ['Forests are only important because they produce oxygen.', 'Forests are valuable, but human activities threaten their existence.', 'Illegal logging is the only cause of deforestation.', 'Governments have completely solved deforestation.'],
          answer: 1,
          explanation: 'Paragraf pertama menjelaskan manfaat hutan, paragraf kedua menjelaskan ancamannya, dan paragraf ketiga menjelaskan upaya pelestarian. Jadi ide utamanya adalah pentingnya hutan sekaligus ancaman terhadap keberadaannya.'
        },
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 2: According to the passage, why are forests important?',
          options: ['They reduce the number of animals.', 'They increase industrial development.', 'They help regulate climate and support living organisms.', 'They make farming easier.'],
          answer: 2,
          explanation: 'Paragraf pertama menyebutkan bahwa hutan membantu mengatur iklim, menghasilkan oksigen, dan menjadi habitat makhluk hidup.'
        },
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 3: The word "They" in the first paragraph refers to...',
          options: ['Animals', 'Plants', 'Forests', 'Organisms'],
          answer: 2,
          explanation: 'Kalimat sebelumnya membahas forests, sehingga kata They merujuk pada forests.'
        },
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 4: It can be inferred from the passage that...',
          options: ['Forest conservation requires long-term effort.', 'Planting trees can restore forests within a few months.', 'Human activities always improve forest ecosystems.', 'National parks are no longer needed.'],
          answer: 0,
          explanation: 'Kalimat terakhir menyatakan bahwa memulihkan hutan membutuhkan waktu bertahun-tahun, sehingga dapat disimpulkan bahwa konservasi membutuhkan usaha jangka panjang.'
        },
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 5: The word "countless" is closest in meaning to...',
          options: ['Few', 'Many', 'Expensive', 'Dangerous'],
          answer: 1,
          explanation: '"Countless species" berarti sangat banyak atau tidak terhitung jumlahnya.'
        },
        {
          q: 'Reading Passage 1 (Environment)\n\nForests play an important role in maintaining the balance of nature. They provide habitats for countless species of animals and plants, help regulate the Earth\'s climate, and produce much of the oxygen needed by living organisms. In addition, forests help prevent soil erosion by holding the soil together with their roots. They also absorb large amounts of carbon dioxide, reducing the effects of global warming.\n\nDespite these benefits, forests around the world continue to disappear because of human activities. Large areas of forests are cut down to make room for agriculture, housing, and industrial development. Illegal logging also contributes to the destruction of forest ecosystems. As forests disappear, many species lose their natural habitats and face the risk of extinction.\n\nTo solve this problem, governments and environmental organizations have introduced various conservation programs. These programs include planting new trees, protecting national parks, and educating local communities about sustainable forest management. Although restoring damaged forests takes many years, these efforts can help preserve biodiversity and improve environmental conditions for future generations.\n\nQuestion 6: What is the author\'s purpose in writing this passage?',
          options: ['To entertain readers with a story about forests.', 'To explain the importance of forests, the threats they face, and conservation efforts.', 'To persuade readers to become farmers.', 'To compare forests with deserts.'],
          answer: 1,
          explanation: 'Penulis bertujuan memberikan informasi mengenai manfaat hutan, ancaman yang dihadapi, serta usaha pelestariannya.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 1: What is the main idea of the passage?',
          options: ['Modern books are better than old books.', 'The invention of the printing press greatly changed the spread of knowledge.', 'Only wealthy people can buy books today.', 'Digital technology has completely replaced printed books.'],
          answer: 1,
          explanation: 'Teks membahas bagaimana penemuan mesin cetak mengubah cara penyebaran informasi dan pendidikan.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 2: How is the passage organized?',
          options: ['Cause → Effect → Present Development', 'Comparison → Contrast', 'Problem → Solution', 'Chronological Story of One Person'],
          answer: 0,
          explanation: 'Paragraf 1 menjelaskan kondisi sebelum mesin cetak, paragraf 2 menjelaskan dampaknya, dan paragraf 3 membahas perkembangannya hingga sekarang.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 3: According to the passage, why were books expensive before the printing press?',
          options: ['Paper was difficult to find.', 'Books were copied by hand.', 'People did not like reading.', 'There were too many books.'],
          answer: 1,
          explanation: 'Paragraf pertama menyatakan bahwa buku disalin dengan tangan sehingga memerlukan banyak waktu dan tenaga.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 4: Which of the following is NOT mentioned in the passage?',
          options: ['Printing helped educational development.', 'Books became more affordable.', 'Printing encouraged scientific discoveries.', 'Gutenberg invented the computer.'],
          answer: 3,
          explanation: 'Teks tidak pernah menyebutkan bahwa Gutenberg menemukan komputer.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 5: The word "It" in the second paragraph refers to...',
          options: ['The book', 'The printing press', 'Europe', 'Knowledge'],
          answer: 1,
          explanation: '"It allowed books to be produced..." mengacu pada the printing press.'
        },
        {
          q: 'Reading Passage 2 (History)\n\nThe invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is considered one of the most important events in human history. Before the printing press was developed, books were copied by hand, a process that required a great deal of time and effort. As a result, books were expensive and available only to a limited number of people, mainly religious leaders and wealthy individuals.\n\nThe printing press changed this situation dramatically. It allowed books to be produced much more quickly and at a much lower cost. As books became more affordable, more people had the opportunity to learn to read and gain access to knowledge. The spread of printed materials also encouraged scientific discoveries, cultural development, and educational progress throughout Europe.\n\nOver time, printing technology continued to improve. Modern printing machines can produce thousands of books, newspapers, and magazines within a short period. Although digital technology has reduced the use of printed materials in some areas, books remain an important source of information and education for millions of people around the world.\n\nQuestion 6: The passage would most likely be found in a textbook about...',
          options: ['Biology', 'History', 'Economics', 'Medicine'],
          answer: 1,
          explanation: 'Teks membahas peristiwa sejarah mengenai penemuan mesin cetak, sehingga bidang pembahasannya adalah History.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 1: What is the main idea of the passage?',
          options: ['Scientists are developing new kinds of plants.', 'Photosynthesis is an important process that supports life on Earth.', 'Plants only need sunlight to survive.', 'Oxygen is harmful to plants.'],
          answer: 1,
          explanation: 'Seluruh bacaan menjelaskan proses fotosintesis, manfaatnya, dan alasan mengapa proses tersebut sangat penting bagi kehidupan.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 2: According to the passage, plants produce glucose by combining...',
          options: ['Oxygen and sunlight', 'Carbon dioxide and oxygen', 'Water and carbon dioxide', 'Water and oxygen'],
          answer: 2,
          explanation: 'Paragraf pertama menjelaskan bahwa tumbuhan menggunakan energi matahari untuk menggabungkan water dan carbon dioxide menjadi glucose.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 3: The word "they" in the first paragraph refers to...',
          options: ['Scientists', 'Plants', 'Leaves', 'Roots'],
          answer: 1,
          explanation: 'Kata they merujuk pada plants yang sedang dibahas pada kalimat sebelumnya.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 4: The word "essential" is closest in meaning to...',
          options: ['Unimportant', 'Necessary', 'Difficult', 'Expensive'],
          answer: 1,
          explanation: 'Essential berarti very important atau necessary.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 5: It can be inferred from the passage that...',
          options: ['Humans could survive without plants.', 'Photosynthesis benefits both plants and other living organisms.', 'Only scientists need oxygen.', 'Plants do not require water.'],
          answer: 1,
          explanation: 'Walaupun tidak disebutkan secara langsung, teks menjelaskan bahwa fotosintesis menghasilkan makanan bagi tumbuhan dan oksigen bagi makhluk hidup lainnya.'
        },
        {
          q: 'Reading Passage 3 (Science)\n\nPhotosynthesis is the process by which green plants produce their own food. During this process, plants absorb sunlight through their leaves and take in carbon dioxide from the air. At the same time, they absorb water through their roots. Using energy from sunlight, plants combine water and carbon dioxide to produce glucose, which serves as food, and oxygen, which is released into the atmosphere.\n\nPhotosynthesis is essential for life on Earth. It provides the oxygen that humans and animals need to breathe. In addition, plants form the base of many food chains, meaning that countless living organisms depend directly or indirectly on photosynthesis for survival. Without this process, the balance of ecosystems would be seriously affected.\n\nScientists continue to study photosynthesis because understanding this natural process may help solve future environmental problems. For example, researchers are exploring ways to improve crop production and develop cleaner sources of energy by learning from the efficiency of plants.\n\nQuestion 6: In which paragraph does the author discuss the future benefits of studying photosynthesis?',
          options: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'All paragraphs'],
          answer: 2,
          explanation: 'Paragraf ketiga membahas penelitian ilmiah dan manfaat fotosintesis di masa depan, seperti meningkatkan hasil pertanian dan mengembangkan energi yang lebih bersih.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 1: What is the main idea of the passage?',
          options: ['Libraries are no longer useful.', 'The Internet has changed many aspects of people\'s lives and brings both benefits and challenges.', 'Smartphones are better than computers.', 'Online learning is the only way to study.'],
          answer: 1,
          explanation: 'Bacaan menjelaskan perubahan yang dibawa Internet dalam kehidupan sehari-hari, sekaligus manfaat dan tantangannya.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 2: According to the passage, one advantage of online learning is that students can...',
          options: ['Graduate more quickly.', 'Study from almost anywhere.', 'Avoid taking examinations.', 'Learn without teachers.'],
          answer: 1,
          explanation: 'Paragraf kedua menyatakan bahwa siswa dapat mengikuti pembelajaran dari hampir di mana saja.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 3: Which of the following is NOT mentioned as a challenge of the Internet?',
          options: ['The spread of false information.', 'Cybercrime.', 'Reduced face-to-face communication.', 'Higher electricity costs.'],
          answer: 3,
          explanation: 'Teks tidak pernah membahas biaya listrik sebagai dampak Internet.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 4: The word "advantages" in the second paragraph is closest in meaning to...',
          options: ['Problems', 'Benefits', 'Risks', 'Methods'],
          answer: 1,
          explanation: 'Advantages berarti benefits atau keuntungan.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 5: What is the author\'s purpose in writing this passage?',
          options: ['To entertain readers with a story about technology.', 'To explain the benefits and challenges of the Internet.', 'To convince readers to stop using smartphones.', 'To compare computers with televisions.'],
          answer: 1,
          explanation: 'Penulis memberikan informasi yang seimbang mengenai manfaat sekaligus tantangan penggunaan Internet.'
        },
        {
          q: 'Reading Passage 4 (Technology)\n\nOver the past few decades, the Internet has transformed the way people communicate, learn, and work. In the past, obtaining information often required visiting libraries or purchasing books and newspapers. Today, people can access millions of sources of information within seconds using computers or smartphones connected to the Internet.\n\nOnline learning has become one of the greatest advantages of modern technology. Students can attend virtual classes, watch educational videos, and access digital libraries from almost anywhere. Many universities now offer online courses, allowing people to continue their education without having to travel long distances.\n\nDespite these advantages, the Internet also presents several challenges. False information can spread quickly, and excessive use of social media may reduce face-to-face communication. In addition, cybercrime has become a growing concern as more personal and financial information is stored online. Therefore, users should learn to evaluate online information carefully and protect their personal data while using the Internet.\n\nQuestion 6: What is the tone of the passage?',
          options: ['Humorous', 'Angry', 'Informative and objective', 'Sarcastic'],
          answer: 2,
          explanation: 'Penulis menyampaikan fakta dan penjelasan secara netral tanpa menunjukkan emosi atau keberpihakan.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 1: What is the main idea of the passage?',
          options: ['Cultural festivals should only be organized for tourists.', 'Cultural festivals preserve traditions while also benefiting society and the economy.', 'Hotels earn more money than restaurants.', 'Traditional clothing is becoming unpopular.'],
          answer: 1,
          explanation: 'Paragraf pertama membahas pelestarian budaya, paragraf kedua manfaat ekonomi, dan paragraf ketiga pentingnya menjaga keseimbangan agar budaya tetap asli.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 2: According to the passage, why do many international tourists attend cultural festivals?',
          options: ['To find employment.', 'To experience local traditions and culture.', 'To study at local universities.', 'To buy modern technology.'],
          answer: 1,
          explanation: 'Paragraf kedua menyebutkan bahwa wisatawan datang untuk menikmati tradisi, makanan khas, dan pertunjukan budaya.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 3: The word "These events" in the first paragraph refers to...',
          options: ['Communities', 'Countries', 'Cultural festivals', 'Traditional clothing'],
          answer: 2,
          explanation: 'Frasa "These events" mengacu pada cultural festivals yang dibahas pada kalimat sebelumnya.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 4: It can be inferred from the passage that...',
          options: ['Tourism always damages local culture.', 'Economic benefits and cultural preservation should go together.', 'Cultural festivals are no longer popular.', 'Only young people attend cultural festivals.'],
          answer: 1,
          explanation: 'Paragraf terakhir menyatakan bahwa penyelenggara harus menjaga keseimbangan antara pariwisata dan pelestarian budaya. Ini menunjukkan bahwa keduanya dapat berjalan bersama.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 5: The word "authenticity" is closest in meaning to...',
          options: ['Popularity', 'Originality', 'Beauty', 'Difficulty'],
          answer: 1,
          explanation: 'Authenticity berarti keaslian atau originality.'
        },
        {
          q: 'Reading Passage 5 (Culture & Society)\n\nCultural festivals are important events that help preserve traditions and strengthen relationships within communities. Many countries organize annual festivals to celebrate their history, customs, music, food, and traditional clothing. These events not only provide entertainment but also allow younger generations to learn about their cultural heritage.\n\nIn recent years, cultural festivals have attracted increasing numbers of international tourists. Visitors attend these events to experience local traditions, taste traditional foods, and watch cultural performances. As a result, many local businesses, including hotels, restaurants, and souvenir shops, benefit from the increase in tourism. This additional income can improve the local economy and create new job opportunities.\n\nHowever, some experts believe that cultural festivals should not focus only on tourism. If festivals become too commercial, some traditional values may gradually disappear. Therefore, organizers should maintain a balance between promoting tourism and preserving the authenticity of local culture. By doing so, future generations will continue to appreciate and protect their cultural identity.\n\nQuestion 6: The passage would most likely be found in a textbook about...',
          options: ['Mathematics', 'Culture and Society', 'Chemistry', 'Astronomy'],
          answer: 1,
          explanation: 'Bacaan membahas festival budaya, masyarakat, dan dampaknya terhadap sosial serta ekonomi, sehingga bidang pembahasannya adalah Culture and Society.'
        }
      ]
    }
  ],
  ringkasan: [
    { icon: '🎧', text: 'Listening Section: 19 skill — Part A (13), Part B (3), Part C (3) untuk menguasai percakapan dan ceramah.' },
    { icon: '📝', text: 'Structure (Part A): 17 skill untuk memahami tata bahasa Inggris — subject-verb agreement, clauses, inversi, dan lainnya.' },
    { icon: '✍️', text: 'Written Expression (Part B): 11 skill untuk mengenali kesalahan penulisan — parallel structure, word choice, articles, dll.' },
    { icon: '📚', text: 'Reading Comprehension: 11 skill — main idea, inference, detail, word meaning, organization, dan lainnya.' },
  ],
  illustrations: {
    toefl: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="70" r="50" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2"/>
      <circle cx="100" cy="55" r="18" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
      <circle cx="100" cy="50" r="6" fill="#93C5FD" stroke="#1D4ED8" stroke-width="1.5"/>
      <path d="M92 58 Q100 66 108 58" fill="none" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="85" y="72" width="30" height="35" rx="4" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="1.5"/>
      <rect x="88" y="78" width="24" height="4" rx="2" fill="#BFDBFE"/>
      <rect x="88" y="86" width="18" height="4" rx="2" fill="#BFDBFE" opacity="0.7"/>
      <rect x="88" y="94" width="22" height="4" rx="2" fill="#BFDBFE" opacity="0.5"/>
      <circle cx="55" cy="50" r="14" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.5"/>
      <path d="M49 47 Q55 42 61 47" fill="none" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="55" cy="52" r="3" fill="#93C5FD"/>
      <circle cx="145" cy="50" r="14" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.5"/>
      <path d="M139 47 Q145 42 151 47" fill="none" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="145" cy="52" r="3" fill="#93C5FD"/>
      <path d="M69 50 L85 60" stroke="#1D4ED8" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M131 50 L115 60" stroke="#1D4ED8" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="68" y="140" font-size="10" fill="#1D4ED8" font-weight="700">TOEFL LISTENING</text>
    </svg>`
  }
};
