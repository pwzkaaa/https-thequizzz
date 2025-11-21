// Scripts extracted from the original HTML

const defaultConfig = {
            website_title: 'THE QUIZ',
            hero_title: 'SELAMAT DATANG DI THE QUIZ  Tantang Pengetahuanmu Sekarang!',
            hero_subtitle: 'Quiz pelajaran SMA dengan tampilan interaktif, soal menarik, dan skor langsung.',
            cta_button_text: 'START QUIZ'
        };

        const quizData = {
            'Matematika': [
                {
                    question: 'Berapakah hasil dari 15 × 12 - 48 ÷ 6?',
                    options: ['172', '174', '176', '178'],
                    correct: 0
                },
                {
                    question: 'Jika f(x) = 2x + 5, maka f(3) = ?',
                    options: ['9', '11', '13', '15'],
                    correct: 1
                },
                {
                    question: 'Berapa nilai dari sin 90°?',
                    options: ['0', '0.5', '1', 'v2/2'],
                    correct: 2
                },
                {
                    question: 'Sebuah segitiga memiliki sudut 45° dan 65°. Berapa sudut ketiga?',
                    options: ['60°', '70°', '80°', '90°'],
                    correct: 1
                },
                {
                    question: 'Akar dari persamaan x² - 5x + 6 = 0 adalah?',
                    options: ['x = 1 dan x = 6', 'x = 2 dan x = 3', 'x = -2 dan x = -3', 'x = 0 dan x = 5'],
                    correct: 1
                },
                {
                    question: 'Berapakah nilai dari log2 32?',
                    options: ['3', '4', '5', '6'],
                    correct: 2
                },
                {
                    question: 'Jika 2? = 16, maka x = ?',
                    options: ['2', '3', '4', '5'],
                    correct: 2
                },
                {
                    question: 'Turunan dari f(x) = 3x² + 2x - 5 adalah?',
                    options: ['6x + 2', '3x + 2', '6x - 5', '3x² + 2'],
                    correct: 0
                },
                {
                    question: 'Luas lingkaran dengan jari-jari 7 cm adalah? (p = 22/7)',
                    options: ['144 cm²', '154 cm²', '164 cm²', '174 cm²'],
                    correct: 1
                },
                {
                    question: 'Dalam deret aritmatika 5, 8, 11, 14, ... berapa suku ke-10?',
                    options: ['30', '32', '34', '36'],
                    correct: 1
                },
                {
                    question: 'Nilai dari ³v64 adalah?',
                    options: ['2', '3', '4', '6'],
                    correct: 2
                },
                {
                    question: 'Jika cos a = 3/5, maka sin a = ? (a di kuadran I)',
                    options: ['3/5', '4/5', '5/4', '5/3'],
                    correct: 1
                },
                {
                    question: 'Median dari data: 5, 8, 3, 9, 7, 6 adalah?',
                    options: ['5.5', '6', '6.5', '7'],
                    correct: 2
                },
                {
                    question: 'Nilai dari 5! (faktorial) adalah?',
                    options: ['60', '100', '120', '150'],
                    correct: 2
                },
                {
                    question: 'Jika matriks A = [[2, 1], [3, 4]], determinan A adalah?',
                    options: ['3', '5', '7', '9'],
                    correct: 1
                },
                {
                    question: 'Persamaan garis yang melalui titik (2,3) dengan gradien 2 adalah?',
                    options: ['y = 2x - 1', 'y = 2x + 1', 'y = 2x - 3', 'y = 2x + 3'],
                    correct: 0
                },
                {
                    question: 'Volume kubus dengan rusuk 5 cm adalah?',
                    options: ['100 cm³', '125 cm³', '150 cm³', '175 cm³'],
                    correct: 1
                },
                {
                    question: 'Integral dari ?2x dx adalah?',
                    options: ['x² + C', '2x² + C', 'x²/2 + C', '2x + C'],
                    correct: 0
                },
                {
                    question: 'Dalam sebuah kelas dengan 30 siswa, 18 suka matematika dan 20 suka fisika. Berapa minimal siswa yang suka keduanya?',
                    options: ['6', '8', '10', '12'],
                    correct: 1
                },
                {
                    question: 'Jika barisan geometri memiliki suku pertama 3 dan rasio 2, suku ke-5 adalah?',
                    options: ['24', '36', '48', '96'],
                    correct: 2
                }
            ],
            'Bahasa Indonesia': [
                {
                    question: 'Apa yang dimaksud dengan majas personifikasi?',
                    options: ['Perbandingan dua hal', 'Membandingkan dengan menggunakan kata seperti', 'Memberikan sifat manusia pada benda mati', 'Melebih-lebihkan sesuatu'],
                    correct: 2
                },
                {
                    question: 'Kata "membaca" termasuk jenis kata?',
                    options: ['Kata benda', 'Kata kerja', 'Kata sifat', 'Kata keterangan'],
                    correct: 1
                },
                {
                    question: 'Imbuhan "ber-" pada kata "berlari" berfungsi sebagai?',
                    options: ['Awalan', 'Akhiran', 'Sisipan', 'Konfiks'],
                    correct: 0
                },
                {
                    question: 'Puisi dengan 4 baris per bait disebut?',
                    options: ['Karmina', 'Pantun', 'Syair', 'Gurindam'],
                    correct: 1
                },
                {
                    question: 'Unsur intrinsik cerpen adalah?',
                    options: ['Biografi pengarang', 'Tema dan amanat', 'Latar belakang penulis', 'Tahun penerbitan'],
                    correct: 1
                },
                {
                    question: 'Kalimat "Dia pergi ke pasar kemarin" termasuk kalimat?',
                    options: ['Kalimat tanya', 'Kalimat berita', 'Kalimat perintah', 'Kalimat seru'],
                    correct: 1
                },
                {
                    question: 'Antonim dari kata "gelap" adalah?',
                    options: ['Suram', 'Terang', 'Redup', 'Pudar'],
                    correct: 1
                },
                {
                    question: 'Kata ulang "bolak-balik" termasuk jenis kata ulang?',
                    options: ['Berimbuhan', 'Berubah bunyi', 'Murni', 'Semu'],
                    correct: 1
                },
                {
                    question: 'Ejaan Yang Disempurnakan (EYD) mulai berlaku tahun?',
                    options: ['1945', '1972', '1985', '1998'],
                    correct: 1
                },
                {
                    question: 'Tokoh yang menulis novel "Laskar Pelangi" adalah?',
                    options: ['Andrea Hirata', 'Pramoedya Ananta Toer', 'Ahmad Tohari', 'Tere Liye'],
                    correct: 0
                },
                {
                    question: 'Kalimat efektif harus memiliki syarat?',
                    options: ['Panjang dan rumit', 'Subjek dan predikat jelas', 'Banyak kata sambung', 'Menggunakan bahasa daerah'],
                    correct: 1
                },
                {
                    question: 'Jenis karangan yang bertujuan meyakinkan pembaca disebut?',
                    options: ['Narasi', 'Deskripsi', 'Argumentasi', 'Eksposisi'],
                    correct: 2
                },
                {
                    question: 'Kata "meN-" pada "menulis" mengalami perubahan menjadi "me-" karena?',
                    options: ['Bertemu huruf t', 'Bertemu huruf p', 'Bertemu huruf s', 'Bertemu huruf k'],
                    correct: 0
                },
                {
                    question: 'Tanda baca yang digunakan untuk mengakhiri kalimat perintah adalah?',
                    options: ['Titik (.)', 'Tanda tanya (?)', 'Tanda seru (!)', 'Koma (,)'],
                    correct: 2
                },
                {
                    question: 'Sinonim dari kata "pandai" adalah?',
                    options: ['Bodoh', 'Cerdas', 'Malas', 'Lamban'],
                    correct: 1
                },
                {
                    question: 'Unsur ekstrinsik sastra meliputi?',
                    options: ['Tokoh dan penokohan', 'Nilai moral dan sosial', 'Alur dan latar', 'Sudut pandang'],
                    correct: 1
                },
                {
                    question: 'Kata serapan dari bahasa Inggris "computer" menjadi?',
                    options: ['Komputer', 'Komputir', 'Kompyuter', 'Komputor'],
                    correct: 0
                },
                {
                    question: 'Majas hiperbola adalah?',
                    options: ['Perbandingan', 'Melebih-lebihkan', 'Sindiran', 'Pertentangan'],
                    correct: 1
                },
                {
                    question: 'Gagasan utama dalam paragraf disebut?',
                    options: ['Kalimat penjelas', 'Kalimat utama', 'Kalimat penutup', 'Kalimat transisi'],
                    correct: 1
                },
                {
                    question: 'Pantun terdiri dari berapa baris?',
                    options: ['2 baris', '4 baris', '6 baris', '8 baris'],
                    correct: 1
                }
            ],
            'Bahasa Inggris': [
                {
                    question: 'What is the correct past tense of "go"?',
                    options: ['Goed', 'Went', 'Gone', 'Going'],
                    correct: 1
                },
                {
                    question: 'Which word is a noun?',
                    options: ['Beautiful', 'Quickly', 'Happiness', 'Run'],
                    correct: 2
                },
                {
                    question: '"She ____ to school every day." Fill in the blank.',
                    options: ['go', 'goes', 'going', 'went'],
                    correct: 1
                },
                {
                    question: 'What does "gregarious" mean?',
                    options: ['Shy', 'Sociable', 'Angry', 'Lazy'],
                    correct: 1
                },
                {
                    question: 'Which is the correct plural form of "child"?',
                    options: ['Childs', 'Childes', 'Children', 'Childrens'],
                    correct: 2
                },
                {
                    question: '"I have ____ finished my homework." Which word fits?',
                    options: ['yet', 'already', 'still', 'never'],
                    correct: 1
                },
                {
                    question: 'What is the comparative form of "good"?',
                    options: ['Gooder', 'Goodest', 'Better', 'Best'],
                    correct: 2
                },
                {
                    question: 'Which sentence is in passive voice?',
                    options: ['She writes a letter', 'A letter is written by her', 'She is writing', 'She wrote'],
                    correct: 1
                },
                {
                    question: 'What does "procrastinate" mean?',
                    options: ['To hurry', 'To delay', 'To finish', 'To start'],
                    correct: 1
                },
                {
                    question: '"He is ____ intelligent than his brother."',
                    options: ['more', 'most', 'much', 'many'],
                    correct: 0
                },
                {
                    question: 'Which is a conjunction?',
                    options: ['Happy', 'And', 'Quickly', 'Table'],
                    correct: 1
                },
                {
                    question: 'What is the superlative of "far"?',
                    options: ['Farer', 'Farrest', 'Farthest', 'More far'],
                    correct: 2
                },
                {
                    question: '"If I ____ rich, I would travel the world."',
                    options: ['am', 'was', 'were', 'be'],
                    correct: 2
                },
                {
                    question: 'What tense is "She has been studying"?',
                    options: ['Present simple', 'Past simple', 'Present perfect continuous', 'Future simple'],
                    correct: 2
                },
                {
                    question: 'Which word is an adjective?',
                    options: ['Swim', 'Beautiful', 'Quickly', 'Happiness'],
                    correct: 1
                },
                {
                    question: 'What is the meaning of "abundant"?',
                    options: ['Scarce', 'Plentiful', 'Small', 'Few'],
                    correct: 1
                },
                {
                    question: '"Neither John ____ Mary came to the party."',
                    options: ['or', 'nor', 'and', 'but'],
                    correct: 1
                },
                {
                    question: 'What is a synonym for "difficult"?',
                    options: ['Easy', 'Hard', 'Simple', 'Clear'],
                    correct: 1
                },
                {
                    question: 'Which sentence uses correct punctuation?',
                    options: ['Hello how are you', 'Hello, how are you?', 'Hello how are you.', 'Hello? how are you'],
                    correct: 1
                },
                {
                    question: '"She plays the piano ____."',
                    options: ['good', 'well', 'better', 'best'],
                    correct: 1
                }
            ],
            'Biologi': [
                {
                    question: 'Organel sel yang berfungsi sebagai pusat kontrol sel adalah?',
                    options: ['Mitokondria', 'Nukleus', 'Ribosom', 'Lisosom'],
                    correct: 1
                },
                {
                    question: 'Proses fotosintesis terjadi di bagian?',
                    options: ['Mitokondria', 'Kloroplas', 'Nukleus', 'Vakuola'],
                    correct: 1
                },
                {
                    question: 'DNA tersusun dari unit dasar yang disebut?',
                    options: ['Asam amino', 'Nukleotida', 'Glukosa', 'Lipid'],
                    correct: 1
                },
                {
                    question: 'Eritrosit adalah nama lain dari?',
                    options: ['Sel darah putih', 'Sel darah merah', 'Platelet', 'Plasma'],
                    correct: 1
                },
                {
                    question: 'Kingdom yang mencakup jamur adalah?',
                    options: ['Plantae', 'Animalia', 'Fungi', 'Protista'],
                    correct: 2
                },
                {
                    question: 'Organ yang berfungsi menyaring darah adalah?',
                    options: ['Hati', 'Ginjal', 'Paru-paru', 'Jantung'],
                    correct: 1
                },
                {
                    question: 'Hormon yang mengatur kadar gula darah adalah?',
                    options: ['Adrenalin', 'Insulin', 'Testosteron', 'Estrogen'],
                    correct: 1
                },
                {
                    question: 'Mitosis menghasilkan berapa sel anak?',
                    options: ['1 sel', '2 sel', '4 sel', '8 sel'],
                    correct: 1
                },
                {
                    question: 'Bagian otak yang mengatur keseimbangan tubuh adalah?',
                    options: ['Cerebrum', 'Cerebellum', 'Medula oblongata', 'Hipotalamus'],
                    correct: 1
                },
                {
                    question: 'Enzim amilase berfungsi untuk memecah?',
                    options: ['Protein', 'Lemak', 'Karbohidrat', 'Vitamin'],
                    correct: 2
                },
                {
                    question: 'Nama latin manusia adalah?',
                    options: ['Homo sapiens', 'Homo erectus', 'Pan troglodytes', 'Australopithecus'],
                    correct: 0
                },
                {
                    question: 'Proses pernapasan sel yang menghasilkan energi disebut?',
                    options: ['Fotosintesis', 'Respirasi seluler', 'Fermentasi', 'Transpirasi'],
                    correct: 1
                },
                {
                    question: 'Kromosom pada manusia berjumlah?',
                    options: ['23 pasang', '46 pasang', '23 buah', '92 buah'],
                    correct: 0
                },
                {
                    question: 'Antibodi diproduksi oleh sel?',
                    options: ['Sel darah merah', 'Sel darah putih', 'Platelet', 'Sel saraf'],
                    correct: 1
                },
                {
                    question: 'Bagian jantung yang memompa darah ke seluruh tubuh adalah?',
                    options: ['Atrium kanan', 'Atrium kiri', 'Ventrikel kanan', 'Ventrikel kiri'],
                    correct: 3
                },
                {
                    question: 'Tumbuhan berbiji tertutup disebut?',
                    options: ['Gymnospermae', 'Angiospermae', 'Pteridophyta', 'Bryophyta'],
                    correct: 1
                },
                {
                    question: 'Vitamin yang larut dalam lemak adalah?',
                    options: ['Vitamin C', 'Vitamin B', 'Vitamin A', 'Vitamin B12'],
                    correct: 2
                },
                {
                    question: 'Simbiosis mutualisme contohnya adalah?',
                    options: ['Kutu dan anjing', 'Lebah dan bunga', 'Benalu dan pohon', 'Singa dan rusa'],
                    correct: 1
                },
                {
                    question: 'Bagian mata yang berfungsi mengatur cahaya adalah?',
                    options: ['Kornea', 'Pupil', 'Retina', 'Iris'],
                    correct: 3
                },
                {
                    question: 'Hukum pewarisan sifat dikemukakan oleh?',
                    options: ['Darwin', 'Mendel', 'Lamarck', 'Watson'],
                    correct: 1
                }
            ],
            'Fisika': [
                {
                    question: 'Satuan dari gaya dalam SI adalah?',
                    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                    correct: 1
                },
                {
                    question: 'Rumus untuk menghitung energi kinetik adalah?',
                    options: ['E = mc²', 'E = ½mv²', 'E = mgh', 'E = Pt'],
                    correct: 1
                },
                {
                    question: 'Hukum Newton I berbunyi?',
                    options: ['F = ma', 'Benda diam akan tetap diam kecuali ada gaya', 'Aksi = reaksi', 'E = mc²'],
                    correct: 1
                },
                {
                    question: 'Percepatan gravitasi bumi adalah?',
                    options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.8 km/s²'],
                    correct: 0
                },
                {
                    question: 'Gelombang cahaya termasuk gelombang?',
                    options: ['Mekanik', 'Elektromagnetik', 'Longitudinal', 'Bunyi'],
                    correct: 1
                },
                {
                    question: 'Daya listrik dengan satuan Watt dihitung dengan rumus?',
                    options: ['P = V × I', 'P = I × R', 'P = V / I', 'P = I²R'],
                    correct: 0
                },
                {
                    question: 'Hukum kekekalan energi menyatakan bahwa energi tidak dapat?',
                    options: ['Diciptakan atau dimusnahkan', 'Berubah bentuk', 'Berpindah', 'Diukur'],
                    correct: 0
                },
                {
                    question: 'Satuan tekanan dalam SI adalah?',
                    options: ['Newton', 'Pascal', 'Joule', 'Watt'],
                    correct: 1
                },
                {
                    question: 'Bunyi merambat paling cepat melalui medium?',
                    options: ['Gas', 'Cair', 'Padat', 'Vakum'],
                    correct: 2
                },
                {
                    question: 'Rumus momentum adalah?',
                    options: ['p = mv', 'p = ma', 'p = Ft', 'p = ½mv²'],
                    correct: 0
                },
                {
                    question: 'Lensa cembung bersifat?',
                    options: ['Menyebarkan cahaya', 'Mengumpulkan cahaya', 'Memantulkan cahaya', 'Menyerap cahaya'],
                    correct: 1
                },
                {
                    question: 'Usaha (W) dihitung dengan rumus?',
                    options: ['W = F × s', 'W = m × a', 'W = P × t', 'W = ½mv²'],
                    correct: 0
                },
                {
                    question: 'Besar muatan elektron adalah?',
                    options: ['1.6 × 10?¹? C', '1.6 × 10?¹8 C', '9.1 × 10?³¹ kg', '6.02 × 10²³'],
                    correct: 0
                },
                {
                    question: 'Hukum Ohm menyatakan bahwa?',
                    options: ['V = I × R', 'V = I / R', 'V = R / I', 'V = I + R'],
                    correct: 0
                },
                {
                    question: 'Kalor jenis air adalah?',
                    options: ['4200 J/kg°C', '2100 J/kg°C', '1000 J/kg°C', '3360 J/kg°C'],
                    correct: 0
                },
                {
                    question: 'Frekuensi gelombang dihitung dengan rumus?',
                    options: ['f = v / ?', 'f = ? / v', 'f = v × ?', 'f = 1 / T'],
                    correct: 0
                },
                {
                    question: 'Transformator bekerja berdasarkan prinsip?',
                    options: ['Induksi elektromagnetik', 'Hukum Ohm', 'Hukum Coulomb', 'Efek fotolistrik'],
                    correct: 0
                },
                {
                    question: 'Benda yang massa jenisnya lebih kecil dari air akan?',
                    options: ['Tenggelam', 'Melayang', 'Terapung', 'Hancur'],
                    correct: 2
                },
                {
                    question: 'Satuan frekuensi adalah?',
                    options: ['Meter', 'Hertz', 'Newton', 'Joule'],
                    correct: 1
                },
                {
                    question: 'Rumus energi potensial adalah?',
                    options: ['Ep = mgh', 'Ep = ½mv²', 'Ep = mc²', 'Ep = Pt'],
                    correct: 0
                }
            ],
            'Sejarah': [
                {
                    question: 'Proklamasi kemerdekaan Indonesia dibacakan pada tanggal?',
                    options: ['17 Agustus 1945', '1 Juni 1945', '10 November 1945', '28 Oktober 1928'],
                    correct: 0
                },
                {
                    question: 'Presiden pertama Indonesia adalah?',
                    options: ['Mohammad Hatta', 'Soekarno', 'Soeharto', 'BJ Habibie'],
                    correct: 1
                },
                {
                    question: 'Peristiwa Sumpah Pemuda terjadi pada tahun?',
                    options: ['1908', '1928', '1945', '1965'],
                    correct: 1
                },
                {
                    question: 'Kerajaan Hindu pertama di Indonesia adalah?',
                    options: ['Majapahit', 'Sriwijaya', 'Kutai', 'Mataram'],
                    correct: 2
                },
                {
                    question: 'Perang Diponegoro terjadi pada tahun?',
                    options: ['1825-1830', '1811-1816', '1873-1904', '1945-1949'],
                    correct: 0
                },
                {
                    question: 'Borobudur dibangun pada masa kerajaan?',
                    options: ['Majapahit', 'Sriwijaya', 'Mataram Kuno', 'Kutai'],
                    correct: 2
                },
                {
                    question: 'VOC didirikan pada tahun?',
                    options: ['1596', '1602', '1619', '1800'],
                    correct: 1
                },
                {
                    question: 'Konferensi Meja Bundar diadakan di?',
                    options: ['Jakarta', 'Den Haag', 'Amsterdam', 'London'],
                    correct: 1
                },
                {
                    question: 'Siapa yang menjahit bendera Merah Putih pertama kali?',
                    options: ['Ibu Fatmawati', 'Cut Nyak Dien', 'RA Kartini', 'Dewi Sartika'],
                    correct: 0
                },
                {
                    question: 'Peristiwa Rengasdengklok terjadi pada tanggal?',
                    options: ['15 Agustus 1945', '16 Agustus 1945', '17 Agustus 1945', '18 Agustus 1945'],
                    correct: 1
                },
                {
                    question: 'Agresi Militer Belanda I terjadi pada tahun?',
                    options: ['1945', '1947', '1948', '1949'],
                    correct: 1
                },
                {
                    question: 'Raja Majapahit yang terkenal adalah?',
                    options: ['Hayam Wuruk', 'Ken Arok', 'Kertanegara', 'Airlangga'],
                    correct: 0
                },
                {
                    question: 'Sistem tanam paksa (cultuurstelsel) diterapkan oleh?',
                    options: ['Daendels', 'Van den Bosch', 'Raffles', 'JP Coen'],
                    correct: 1
                },
                {
                    question: 'Organisasi pergerakan nasional pertama adalah?',
                    options: ['Budi Utomo', 'Sarekat Islam', 'Indische Partij', 'PNI'],
                    correct: 0
                },
                {
                    question: 'Pertempuran Surabaya terjadi pada tanggal?',
                    options: ['10 November 1945', '17 Agustus 1945', '1 Maret 1949', '15 Agustus 1945'],
                    correct: 0
                },
                {
                    question: 'Kerajaan Islam pertama di Indonesia adalah?',
                    options: ['Demak', 'Mataram', 'Samudra Pasai', 'Banten'],
                    correct: 2
                },
                {
                    question: 'Siapa penulis teks proklamasi?',
                    options: ['Soekarno', 'Mohammad Hatta', 'Soekarno-Hatta', 'Ahmad Soebardjo'],
                    correct: 2
                },
                {
                    question: 'Peristiwa G30S/PKI terjadi pada tahun?',
                    options: ['1960', '1965', '1966', '1970'],
                    correct: 1
                },
                {
                    question: 'Cut Nyak Dien adalah pahlawan dari?',
                    options: ['Aceh', 'Jawa', 'Sumatera Barat', 'Sulawesi'],
                    correct: 0
                },
                {
                    question: 'Kerajaan Sriwijaya berpusat di?',
                    options: ['Jawa', 'Sumatera', 'Kalimantan', 'Sulawesi'],
                    correct: 1
                }
            ]
        };

        let currentSubject = '';
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let timerInterval;
        let timeRemaining = 900;

        async function onConfigChange(config) {
            const titleElement = document.getElementById('websiteTitle');
            const heroTitleElement = document.getElementById('heroTitle');
            const heroSubtitleElement = document.getElementById('heroSubtitle');
            const ctaButtonTextElement = document.getElementById('ctaButtonText');

            if (titleElement) {
                titleElement.textContent = config.website_title || defaultConfig.website_title;
            }
            if (heroTitleElement) {
                heroTitleElement.textContent = config.hero_title || defaultConfig.hero_title;
            }
            if (heroSubtitleElement) {
                heroSubtitleElement.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
            }
            if (ctaButtonTextElement) {
                ctaButtonTextElement.textContent = config.cta_button_text || defaultConfig.cta_button_text;
            }
        }

        function showSubjects() {
            document.getElementById('subjectsSection').style.display = 'block';
            document.getElementById('subjectsSection').scrollIntoView({ behavior: 'smooth' });
        }

        function startQuiz(subject) {
            currentSubject = subject;
            currentQuestionIndex = 0;
            userAnswers = new Array(quizData[subject].length).fill(null);
            timeRemaining = 900;
            
            document.getElementById('landingPage').classList.remove('active');
            document.getElementById('quizPage').classList.add('active');
            document.getElementById('quizSubject').textContent = subject;
            
            startTimer();
            showQuestion();
        }

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            
            timerInterval = setInterval(() => {
                timeRemaining--;
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                document.getElementById('timeLeft').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    showResult();
                }
            }, 1000);
        }

        function showQuestion() {
            const questions = quizData[currentSubject];
            const question = questions[currentQuestionIndex];
            
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('totalQuestions').textContent = questions.length;
            document.getElementById('questionText').textContent = question.question;
            
            const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                if (userAnswers[currentQuestionIndex] === index) {
                    optionDiv.classList.add('selected');
                }
                optionDiv.textContent = option;
                optionDiv.onclick = () => selectOption(index);
                optionsContainer.appendChild(optionDiv);
            });
            
            document.getElementById('prevBtn').style.display = 
                currentQuestionIndex === 0 ? 'none' : 'block';
            
            const isLastQuestion = currentQuestionIndex === questions.length - 1;
            document.getElementById('nextBtn').textContent = 
                isLastQuestion ? 'Selesai' : 'Selanjutnya';
        }

        function selectOption(index) {
            userAnswers[currentQuestionIndex] = index;
            showQuestion();
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion();
            }
        }

        function nextQuestion() {
            const questions = quizData[currentSubject];
            
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                clearInterval(timerInterval);
                showResult();
            }
        }

        function showResult() {
            const questions = quizData[currentSubject];
            let correctCount = 0;
            
            questions.forEach((question, index) => {
                if (userAnswers[index] === question.correct) {
                    correctCount++;
                }
            });
            
            const wrongCount = questions.length - correctCount;
            const score = Math.round((correctCount / questions.length) * 100);
            
            document.getElementById('quizPage').classList.remove('active');
            document.getElementById('resultPage').classList.add('active');
            
            document.getElementById('scoreDisplay').textContent = score + '/100';
            document.getElementById('correctCount').textContent = correctCount;
            document.getElementById('wrongCount').textContent = wrongCount;
            
            let badge = '';
            if (score >= 90) badge = 'EXCELLENT! ??';
            else if (score >= 75) badge = 'GREAT JOB! ??';
            else if (score >= 60) badge = 'GOOD! ??';
            else badge = 'KEEP PRACTICING! ??';
            
            document.getElementById('badge').textContent = badge;
        }

        function retryQuiz() {
            startQuiz(currentSubject);
        }

        function goHome() {
            document.getElementById('resultPage').classList.remove('active');
            document.getElementById('landingPage').classList.add('active');
            window.scrollTo(0, 0);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig: defaultConfig,
                onConfigChange: onConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [],
                    borderables: [],
                    fontEditable: undefined,
                    fontSizeable: undefined
                }),
                mapToEditPanelValues: (config) => {
                    return new Map([
                        ['website_title', config.website_title || defaultConfig.website_title],
                        ['hero_title', config.hero_title || defaultConfig.hero_title],
                        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
                        ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text]
                    ]);
                }
            });
        }

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a1cd245c126fd37',t:'MTc2MzY5MjgxNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();