// Course Data
const coursesData = {
  subjects: [
    {
      id: 1,
      title: 'Roblox',
      description: 'Learn to create amazing games and worlds',
      icon: '🎮',
      color: '#FF6B35',
      accessCode: 'BTCMPTDPCMRBLX2026',
      materials: [
        {
          id: 1,
          title: 'Apa Itu Roblox Studio?',
          description: 'Pengenalan dasar tentang Roblox Studio dan cara menggunakannya',
          image: '🏗️',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Memahami Roblox Studio',
              content: 'Roblox Studio adalah platform untuk membuat game 3D dengan tools yang powerful dan user-friendly.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Teens/roblox%20exp/1/17.png']
            },
            {
              number: 2,
              title: 'Pelajari Mouse Control',
              content: 'Untuk dapat mengoperasikan Roblox Studio dengan baik, kita perlu mengerti Mouse Control yang akan digunakan nantinya.',
              images: ['roblox/image.png']
            },
            {
              number: 3,
              title: 'Buka Roblox Studio dan Pilih Template',
              content: 'Buka Roblox Studio lalu pilih Template hingga muncul tampilan template selection.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d6e762-8a3c-4969-a547-942ead228dd7']
            },
            {
              number: 4,
              title: 'Pilih Template Baseplate',
              content: 'Pilih Baseplate sebagai template. Baseplate adalah salah satu Empty Project yang dapat digunakan untuk membuat project baru. Contoh Empty Project yang lain adalah Classic Baseplate dan Flat Terrain.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d6e84f-f397-4d7e-a068-67eba6a7d4e6']
            },
            {
              number: 5,
              title: 'Template Terbuka',
              content: 'Template akan segera terbuka setelah selesai loading.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d1c862-9c35-4831-b15a-e2a308bf57fe']
            }
          ]
        },
        {
          id: 2,
          title: 'Mini Adventure Game - Terrain',
          description: 'Buat lingkungan game menggunakan Terrain Editor dengan berbagai material',
          image: '⛰️',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Memahami Terrain Editor',
              content: 'Dalam membuat sebuah lingkungan dalam game, kita memerlukan sebuah Tools yang bernama Terrain Editor.',
              images: ['roblox/image 1.png', 'https://filemanager.tmdsite.my.id/api/files/presigned/a13b0814-367b-4daf-86ac-bb14fdb8f290']
            },
            {
              number: 2,
              title: 'Buka Template Flat Terrain',
              content: 'Buka Roblox Studio > Templates > Flat Terrain untuk memulai project Mini Adventure Game.'
            },
            {
              number: 3,
              title: 'Buka Terrain Editor',
              content: 'Pada bagian tab Home, klik icon Terrain. Ini akan membuka Terrain Editor pada sisi kiri layar-mu.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b07c1-59c3-4833-8ba0-4df14e104ed2']
            },
            {
              number: 4,
              title: 'Gunakan Paint Tool',
              content: 'Pada Terrain Editor, pilih tab Edit. Lalu gunakan Paint Tool untuk mengubah material sesuai keinginanmu. Tools paint dapat digunakan untuk menggambar dengan material lain di Terrain kamu. Kamu bisa mengubahnya menjadi Air, Batu, bahkan Lava.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b089f-3216-419c-a6f0-50f38c67abf2']
            },
            {
              number: 5,
              title: 'Ubah Material',
              content: 'Untuk mengubah material, pilih Material Setting -> Material yang kamu inginkan. Material Setting berisi pilihan material yang dapat mengubah dasar material (Source Material) menjadi material target (Target Material).',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b0ab9-1d70-4c5f-a974-a9e1b510b074']
            },
            {
              number: 6,
              title: 'Gambar Desain Lingkungan',
              content: 'Gambarlah desain lingkungan terrain sesuai dengan keinginanmu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/1.5.png']
            },
            {
              number: 7,
              title: 'Buat Bukit dengan Add dan Subtract',
              content: 'Buatlah bukit menggunakan tool Add dan Subtract. Sesuaikan dengan rencana desainmu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/add%20subtract%20met4.png']
            }
          ]
        },
        {
          id: 3,
          title: 'Mini Adventure Game - Harvestable Item',
          description: 'Buat item yang bisa dikumpulkan (Cupcake) dalam game',
          image: '🧁',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Tujuan: Mengumpulkan Harvestable Items',
              content: 'Tujuan akhir dari mini game adventure ini adalah mengumpulkan Harvestable Items, yaitu Cupcake.',
              images: ['roblox/image 2.png']
            },
            {
              number: 2,
              title: 'Buat Model Cupcake',
              content: 'Pada Explore Tab -> Workspace -> Klik Kanan -> Model -> Klik kanan -> Rename menjadi Cupcake.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a150b267-f100-427f-879a-3694775ab5c5']
            },
            {
              number: 3,
              title: 'Pahami Parent-Child Relationship',
              content: 'Explore Tab biasanya ada di bagian kanan layar kerjamu. Namun jika tidak muncul kamu bisa membuka dibagian tab Home -> pilih Explore Tab. List hirarki pada Explore Tab lebih sering disebut dengan Parent-Child Relationship. Untuk membuat sebuah object menjadi Child dari sebuah object cukup dengan drag-and-drop ke dalam object parent yang diinginkan.',
              images: ['roblox/image 3.png', 'https://filemanager.tmdsite.my.id/api/files/presigned/a13b0d10-fcd4-4aa3-aea3-5b729f6fa0cc', 'roblox/image 4.png']
            },
            {
              number: 4,
              title: 'Tentang Default Object',
              content: 'Dalam Explore Tab sudah terdapat Object - Object yang disebut dengan Default Object. Object ini adalah Object yang penting dan harus ada di Engine Game Roblox. Default Object dibagi kedalam 4 bagian besar.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Explorer/Meeting%204/objectiv.png']
            },
            {
              number: 5,
              title: 'Tambahkan Beberapa Part',
              content: 'Tambahkan beberapa Part lalu susunanlah menjadi Cupcake.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Explorer/Meeting%204/ck.png']
            },
            {
              number: 6,
              title: 'Gunakan Union',
              content: 'Select semua Part dan pilih Union. Ini akan membuat semua part dalam model tersebut menjadi satu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/Part%202%20Modelling%20Harvestable%20Item%20(Harvestable%20Item).gif']
            },
            {
              number: 7,
              title: 'Anchor Part',
              content: 'Pastikan part telah di Anchor agar terkunci di posisinya. Jika tidak maka part akan jatuh atau menggelinding.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b0e12-532e-4b2d-a8b0-c1461397988e']
            },
            {
              number: 8,
              title: 'Masukkan ke Model Cupcake',
              content: 'Lalu masukkan ke dalam sebuah Model dengan nama Cupcake.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a150d225-008e-4b23-aebd-1ff612bfa028']
            },
            {
              number: 9,
              title: 'Tambahkan BoolValue',
              content: 'Dalam Model Cupcake tadi tambahkan objek BoolValue. Ganti nama BoolValue tersebut menjadi canHarvest. Aktifkan Valuenya dengan cara klik Properties -> Value -> Centang.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/Part%206%20Modelling%20Harvestable%20Item%20(Harvestable%20Item).gif']
            }
          ]
        },
        {
          id: 4,
          title: 'Mini Adventure Game - Spoon Tool',
          description: 'Tambahkan tool untuk mengumpulkan item dalam game',
          image: '🥄',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          toolDownloadUrl: 'https://bit.ly/SpoonRoblox',
          steps: [
            {
              number: 1,
              title: 'Pengenalan Spoon Tool',
              content: 'Untuk membuat tool langsung berada ada pada player pada saat pertama kali start. Tool akan ditambahkan di folder StarterPack.'
            },
            {
              number: 2,
              title: 'Download Starter Tool',
              content: 'Download terlebih dahulu starter tool. Tool ini akan kita gunakan sebagai basis untuk membuat Spoon Tool.'
            },
            {
              number: 3,
              title: 'Import Tool ke StarterPack',
              content: 'Pada Tab Explore, dibagian bawah Workspace, klik kanan pada StarterPack. Lalu Insert > Import Roblox Model > Pilih Starter Tool yang sudah kamu download tadi.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a140946e-7f20-4847-b771-915db2261d47']
            },
            {
              number: 4,
              title: 'Rename Tool',
              content: 'Rename Tool yang sudah ditambahkan, dengan nama sesuai yang ingin kamu tampilkan pada game. Contoh: Scoop.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a14095bc-a577-4e31-993f-db96653a8a5c']
            }
          ]
        },
        {
          id: 5,
          title: 'Mini Adventure Game - Coding For Spoon',
          description: 'Buat coding untuk fungsi Spoon Tool',
          image: '💻',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Pengenalan Coding',
              content: 'Kita akan membuat kode, Jika Tool menyentuh Harvestable Item dan player masih memiliki spaces untuk itemnya, maka Item akan bertambah 1 pada Leaderboard. Lalu Harvestable Item akan menghilang beberapa detik sebelum akhirnya nanti muncul kembali.'
            },
            {
              number: 2,
              title: 'Tambahkan Script pada Tool',
              content: 'Pada Tool, tambahkan sebuah script didalamnya. Lalu Rename script tersebut menjadi ToolScript.',
              images: ['https://tmd-academy-dev.s3.ap-southeast-1.amazonaws.com/uploads/photos/shares/Roblox/ROBLOX2/scrip.png', 'roblox/image 5.png']
            },
            {
              number: 3,
              title: 'Buat Local Variables',
              content: 'Hapus kode yang ada pada Script lalu tambahkan kode untuk membuat variable bernama tool dan scoop. local scoop = tool.Scoop berfungsi untuk menyimpan part Scoop ke dalam variable.',
              images: ['roblox/image 5.png']
            },
            {
              number: 4,
              title: 'Buat Function onTouch',
              content: 'Untuk membuatnya kita perlu membuat sebuah function bernama onTouch() dengan parameter partTouch. Ketika Scoop menyentuh Cupcake akan mengubah nilai dari Boolvalue dan mencetak "Found an Item".',
              images: ['roblox/image 6.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%204%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 5,
              title: 'Tambahkan Print untuk Testing',
              content: 'Tambahkan kode untuk membuat kode print didalam conditional statement untuk testing apakah code yang dibuat berjalan dengan baik.',
              images: ['roblox/image 7.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%205%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 6,
              title: 'Buat Leaderboard Variables',
              content: 'Tambahkan kode pada ToolScript setelah kode local scoop = tool.Scoop. Variable-variable ini berfungsi untuk membuat leaderboard dapat menghitung berapa jumlah Gold dan Item.',
              images: ['roblox/image 8.png', 'roblox/image 9.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%206%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 7,
              title: 'Tambahkan Harvest Logic',
              content: 'Tambahkan kode berikut ini setelah kode print("Found an item"). Kode di atas artinya Jika terdapat BoolValue CanHarvest dan jumlah Item kurang dari Spaces, maka nilai Items bertambah 1.',
              images: ['roblox/image 10.png']
            },
            {
              number: 8,
              title: 'Set Respawn Timer',
              content: 'Selanjutnya tambahkan kode di bawah ini setelah kode canHarvest.Value = false. Ini akan membuat Harvestable Item menghilang beberapa detik sebelum muncul kembali.',
              images: ['roblox/image 11.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%207%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 9,
              title: 'Connect onTouch ke Event',
              content: 'Terakhir hubungkan function onTouch() dengan Event Touched() di baris paling bawah setelah penutup function.',
              images: ['roblox/image 12.png']
            }
          ]
        },
        {
          id: 6,
          title: 'Mini Adventure Game - Testing',
          description: 'Test dan debug game Mini Adventure yang sudah dibuat',
          image: '🧪',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Jalankan Game',
              content: 'Klik tombol Play untuk menjalankan game dan test semua fungsi yang sudah dibuat.',
              images: ['roblox/image 13.png']
            },
            {
              number: 2,
              title: 'Test Pengumpulan Item',
              content: 'Gunakan Scoop Tool untuk menyentuh Cupcake dan lihat apakah item bertambah di leaderboard.',
              images: ['roblox/image 14.png']
            },
            {
              number: 3,
              title: 'Test Respawn',
              content: 'Pastikan Cupcake menghilang dan muncul kembali setelah beberapa detik.'
            },
            {
              number: 4,
              title: 'Debugging',
              content: 'Jika ada error, periksa Output Console untuk melihat pesan error dan perbaiki code sesuai kebutuhan.'
            },
            {
              number: 5,
              title: 'Selesai!',
              content: 'Selamat! Anda sudah berhasil membuat Mini Adventure Game pertama Anda di Roblox!'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Website Development',
      description: 'Build beautiful websites with modern web technologies',
      icon: '🌐',
      color: '#4169E1',
      accessCode: 'BTCMPTDPCMWD2026',
      materials: [
        {
          id: 3,
          title: 'Intro to Website',
          description: 'Kenalan dengan HTML, CSS, dan JavaScript — tiga bahan utama pembuat website!',
          image: '🌐',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Apa Itu Website?',
              content: 'Kamu pasti sudah pernah membuka YouTube, Google, atau Tokopedia kan? Nah, semuanya itu adalah website! Website adalah halaman yang bisa dibuka lewat browser dan diakses oleh siapa saja di seluruh dunia.',
              images: [
                'https://images.unsplash.com/photo-1746608942838-a484d55ffeda?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                'https://images.unsplash.com/photo-1648091855145-73b112984e19?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb'
              ]
            },
            {
              number: 2,
              title: '3 Bagian Utama Website',
              content: 'Website secara umum dibagi menjadi 3 bagian utama:\n\n🦴 HTML — Kerangka Website. Seperti tulang pada tubuh manusia, HTML membentuk struktur dasar website. Tanpa HTML, website tidak punya bentuk sama sekali.\n\n⚡ JavaScript — Logika Website. Seperti otak yang menggerakkan tubuh, JavaScript membuat website bisa berinteraksi — seperti tombol yang bisa diklik!\n\n👗 CSS — Tampilan Website. Seperti pakaian yang kita pakai, CSS membuat website terlihat indah. CSS mengatur warna, ukuran, dan tata letak.'
            },
            {
              number: 3,
              title: 'Tipe-tipe Tag HTML Penting',
              content: 'HTML punya banyak tag yang masing-masing punya fungsinya sendiri:\n\n• &lt;h1&gt; sampai &lt;h6&gt; — Tag Heading untuk membuat judul\n• &lt;p&gt; — Tag Paragraph untuk membuat tulisan paragraf\n• &lt;br&gt; — Tag Break untuk membuat baris baru (tidak perlu tag penutup)\n• &lt;b&gt; — Tag Bold untuk membuat tulisan tebal\n• &lt;i&gt; — Tag Italic untuk membuat tulisan miring\n• &lt;u&gt; — Tag Underline untuk membuat tulisan bergaris bawah\n• &lt;img&gt; — Untuk menampilkan gambar'
            }
          ]
        },
        {
          id: 4,
          title: 'Setup & Buat Halaman Pertama',
          description: 'Install VSCode, setup Live Server, dan buat halaman web pertamamu!',
          image: '⚙️',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Setup VSCode',
              content: 'Kita butuh tools dulu sebelum mulai coding:\n\n1. Klik link berikut untuk download VSCode: https://code.visualstudio.com/download\n2. Setelah install, buka VSCode\n3. Buka bagian Extensions (icon di sidebar kiri)\n4. Cari "Live Server" lalu klik Install\n\nLive Server berguna supaya kita bisa langsung melihat hasil web kita di browser secara real-time!'
            },
            {
              number: 2,
              title: 'Cari Gambar untuk Tokomu',
              content: 'Sebelum mulai coding, siapkan dulu gambar-gambar yang akan dipakai di website tokomu. Kamu bisa cari di:\n\n• https://www.freepik.com/\n• https://id.pinterest.com/\n\nDownload gambar yang kamu suka dan simpan di folder yang mudah dicari ya!'
            },
            {
              number: 3,
              title: 'Buat File index.html dan Folder Asset',
              content: 'Sekarang kita mulai membuat project:\n\n1. Buat folder baru untuk project (misal: "toko-ku")\n2. Buka folder itu di VSCode\n3. Buat file baru bernama index.html\n4. Buat folder baru bernama /asset (untuk menyimpan gambar)\n5. Pindahkan gambar-gambar yang sudah dicari ke dalam folder /asset'
            },
            {
              number: 4,
              title: 'Mulai Struktur HTML',
              content: 'Untuk memulai template HTML di VSCode sangat mudah:\n\n1. Buka file index.html\n2. Ketik tanda seru "!" lalu tekan Enter\n3. VSCode akan otomatis membuat template HTML dasar\n\nSetelah itu, ganti teks di dalam tag &lt;title&gt; jadi nama tokomu:\n\n&lt;title&gt; Perusahaan Maju Jaya &lt;/title&gt;\n\nIni akan mengubah nama tab di browser menjadi nama toko!'
            },
            {
              number: 5,
              title: 'Tambahkan Konten Pertama',
              content: 'Sekarang tambahkan judul dan deskripsi toko di dalam tag &lt;body&gt;:\n\n&lt;h1&gt; Toko Maju Jaya Abadi &lt;/h1&gt;\n&lt;p&gt; Toko ini buka sejak 1972 &lt;/p&gt;\n\nJangan lupa tambahkan gambar toko dengan tag &lt;img&gt;:\n\n&lt;img src="asset/foto.jpg" alt="foto toko"&gt;\n\nKlik kanan di VSCode → Open with Live Server untuk melihat hasilnya di browser!'
            }
          ]
        },
        {
          id: 5,
          title: 'Styling dengan CSS',
          description: 'Rapikan dan percantik tampilan websitemu menggunakan CSS!',
          image: '🎨',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Buat File style.css',
              content: 'Jika web masih tampak berantakan, sekarang kita rapikan dengan CSS!\n\n1. Buat file baru bernama style.css di dalam folder project yang sama\n2. Kembali ke file index.html\n3. Tambahkan class pada tag h1 dan p:\n\n&lt;h1 class="judul"&gt; Toko Maju Jaya Abadi &lt;/h1&gt;\n&lt;p class="desc"&gt; Toko ini buka sejak 1972 &lt;/p&gt;'
            },
            {
              number: 2,
              title: 'Tulis CSS Pertamamu',
              content: 'Buka file style.css dan tambahkan kode berikut untuk membuat teks menjadi rata tengah:\n\n.judul {\n\ttext-align: center;\n}\n.desc {\n\ttext-align: center;\n}\n\nSimbol titik (.) di depan nama berarti kita menargetkan elemen berdasarkan class-nya!'
            },
            {
              number: 3,
              title: 'Hubungkan CSS ke HTML',
              content: 'CSS yang sudah dibuat belum otomatis terhubung ke HTML. Tambahkan tag &lt;link&gt; di dalam tag &lt;head&gt; di file HTML:\n\n&lt;head&gt;\n    &lt;meta charset="UTF-8"&gt;\n    &lt;meta name="viewport" ...&gt;\n    &lt;title&gt;Document&lt;/title&gt;\n    &lt;link rel="stylesheet" href="style.css"&gt;\n&lt;/head&gt;\n\nSekarang style sudah aktif!'
            },
            {
              number: 4,
              title: 'Styling Gambar',
              content: 'Tambahkan CSS ini untuk membuat gambar terlihat lebih rapi dan terpusat:\n\nimg {\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\n\nPropertymargin auto di kiri dan kanan akan membuat gambar otomatis berada di tengah halaman.'
            },
            {
              number: 5,
              title: 'Tambahkan Background Image',
              content: 'Buat websitemu makin keren dengan background gambar! Tambahkan di CSS:\n\nbody {\n   background-image: url("assets/bg.jpg");\n   background-size: cover;\n}\n\nKamu juga bisa pasang background hanya di satu section tertentu:\n\nsection.cover {\n    background-image: url("assets/bg.jpg");\n    background-size: cover;\n}'
            }
          ]
        },
        {
          id: 6,
          title: 'Header & Navigasi',
          description: 'Buat header dengan navbar yang bisa diklik untuk berpindah halaman!',
          image: '🧭',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Tambahkan Header',
              content: 'Header adalah bagian atas web yang biasanya berisi nama website dan navigasi. Tambahkan kode ini di dalam &lt;body&gt; paling atas, sebelum konten lainnya:\n\n&lt;header&gt;\n  &lt;div class="main-header"&gt;\n    &lt;h3 class="header-info"&gt;\n      &lt;a href="index.html"&gt; Florist Shop &lt;/a&gt;\n    &lt;/h3&gt;\n    &lt;nav&gt;\n      &lt;a href=""&gt;Home&lt;/a&gt;\n      &lt;a href=""&gt;About Us&lt;/a&gt;\n    &lt;/nav&gt;\n  &lt;/div&gt;\n&lt;/header&gt;'
            },
            {
              number: 2,
              title: 'Styling Header',
              content: 'Tambahkan CSS berikut untuk membuat header menjadi menarik dan fixed di atas:\n\n.main-header {\n   background-image: linear-gradient(rgb(197, 141, 137), rgb(252, 232, 204));\n   position: fixed;\n   top: 0;\n   right: 0;\n   left: 0;\n   height: 48px;\n}\n.header-info {\n   color: rgb(219, 84, 75);\n   text-align: left;\n   margin: 14px 14px 0 14px;\n}\n.header-info a {\n   text-decoration: none;\n}\n\nGanti warna sesuai tema tokomu ya!'
            },
            {
              number: 3,
              title: 'Styling Navigasi',
              content: 'Sekarang rapikan tampilan link navigasinya:\n\nnav {\n  position: absolute;\n  right: 0;\n  display: flex;\n}\na {\n  text-decoration: none;\n  color: rgb(219, 84, 75);\n  padding: 15px;\n  float: left;\n}\na:hover {\n  background-color: burlywood;\n}\n\nProperty display: flex membuat link-link di navbar berjajar ke samping dengan rapi.'
            },
            {
              number: 4,
              title: 'Perbaiki Konten yang Tertutup Header',
              content: 'Karena header kita fixed (menempel di atas), konten di bawahnya bisa tertutup. Solusinya bungkus konten dengan div dan beri margin-top:\n\nHTML:\n&lt;div class="jumbotron"&gt;\n   &lt;h1&gt; Florist Shop &lt;/h1&gt;\n   &lt;p&gt; We Sell Bouquet Made With Love &lt;/p&gt;\n   &lt;img src="assets/big-image.jpg" alt="BigImage"&gt;\n&lt;/div&gt;\n\nCSS:\n.jumbotron {\n  margin-top: 5%;\n}'
            }
          ]
        },
        {
          id: 7,
          title: 'Tambahkan Produk & Footer',
          description: 'Tampilkan produk tokomu dan lengkapi dengan footer yang informatif!',
          image: '🛍️',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Siapkan Gambar Produk',
              content: 'Sebelum menambahkan produk ke web, siapkan dulu gambar-gambarnya:\n\n1. Cari gambar produk di freepik.com atau pinterest.com\n2. Simpan gambar ke dalam folder /asset di dalam project\n3. Beri nama file yang mudah diingat, misal: produk1.jpg, produk2.jpg'
            },
            {
              number: 2,
              title: 'Tambahkan Section Produk',
              content: 'Tambahkan kode HTML berikut di bawah jumbotron untuk menampilkan produk:\n\n&lt;main&gt;\n  &lt;section id="products"&gt;\n    &lt;h2 class="header"&gt;Our Products&lt;/h2&gt;\n    &lt;p class="header"&gt;Custom Bouquet, Made by Order&lt;/p&gt;\n    &lt;div class="items"&gt;\n      &lt;div class="item"&gt;\n        &lt;img src="asset/img1.jpg" class="portrait"&gt;\n        &lt;h3&gt;Full White Bouquet&lt;/h3&gt;\n        &lt;p&gt;IDR 150.000&lt;/p&gt;\n        &lt;p&gt;For Wedding or Birthday Present&lt;/p&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n&lt;/main&gt;'
            },
            {
              number: 3,
              title: 'Styling Section Produk',
              content: 'Tambahkan CSS untuk membuat tampilan produk menjadi card yang rapi:\n\n.items {\n    display: flex;\n    justify-content: center;\n}\n.item {\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    background-color: gainsboro;\n}\n.portrait {\n    width: 260px;\n    height: 350px;\n}\n\n🧩 Challenge: Sekarang coba tambahkan 3 produk lagi! Cukup copy-paste div class "item" dan ganti gambar serta isinya.'
            },
            {
              number: 4,
              title: 'Tambahkan Footer',
              content: 'Footer adalah bagian paling bawah website berisi info kontak dan lainnya. Tambahkan sebelum tag &lt;/body&gt;:\n\n&lt;footer&gt;\n  &lt;div class="main-footer"&gt;\n    &lt;div class="left-footer"&gt;\n      &lt;h3&gt;Address&lt;/h3&gt;\n      &lt;p&gt;Jl. Bunga No.45, Denpasar&lt;/p&gt;\n    &lt;/div&gt;\n    &lt;div class="right-footer"&gt;\n      &lt;h3&gt;Contacts&lt;/h3&gt;\n      &lt;p&gt;Phone: 087876667564&lt;/p&gt;\n      &lt;p&gt;Instagram: @floristshop&lt;/p&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;p&gt;&copy; 2026 Florist Shop&lt;/p&gt;\n&lt;/footer&gt;'
            },
            {
              number: 5,
              title: 'Styling Footer',
              content: 'Tambahkan CSS berikut untuk mempercantik footer:\n\nfooter {\n  background-image: linear-gradient(rgb(252, 232, 204), rgb(197, 141, 137));\n}\n.main-footer {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n.left-footer {\n    margin-right: auto;\n    margin-left: 40px;\n}\n.right-footer {\n    margin-left: auto;\n    margin-right: 40px;\n}\n\nGanti warna gradient footer sesuai tema warna website tokomu!'
            }
          ]
        },
        {
          id: 8,
          title: 'Halaman About & Multi-Page',
          description: 'Buat halaman About dan hubungkan beberapa halaman website!',
          image: '📄',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Buat File about.html',
              content: 'Website yang lengkap punya lebih dari satu halaman. Sekarang kita buat halaman About:\n\n1. Buat file baru bernama about.html di dalam folder project\n2. Buka file about.html dan ketik "!" lalu Enter untuk membuat template HTML\n3. Ganti title menjadi: &lt;title&gt;About - Florist Shop&lt;/title&gt;\n4. Tambahkan link CSS supaya styling yang sama bisa digunakan:\n\n&lt;link rel="stylesheet" href="style.css"&gt;'
            },
            {
              number: 2,
              title: 'Tambahkan Header di Halaman About',
              content: 'Karena kita punya satu file style.css yang sama, header akan otomatis terlihat sama. Cukup copy-paste kode header yang sama dari index.html, tapi update link navigasinya:\n\n&lt;nav&gt;\n  &lt;a href="index.html"&gt;Home&lt;/a&gt;\n  &lt;a href="about.html"&gt;About Us&lt;/a&gt;\n&lt;/nav&gt;\n\nInilah keuntungan menggunakan 1 file CSS — tidak perlu styling ulang!'
            },
            {
              number: 3,
              title: 'Buat Konten Halaman About',
              content: 'Tambahkan jumbotron dan section cerita toko di dalam &lt;main&gt;:\n\n&lt;main&gt;\n  &lt;div class="jumbotron"&gt;\n    &lt;h1&gt;About Us&lt;/h1&gt;\n    &lt;p&gt;Kenali kami lebih dekat!&lt;/p&gt;\n  &lt;/div&gt;\n\n  &lt;section class="about-section"&gt;\n    &lt;div class="about-content"&gt;\n      &lt;img src="assets/about-img.jpg" alt="Foto Toko" class="about-img"&gt;\n      &lt;div class="about-text"&gt;\n        &lt;h2&gt;Cerita Kami&lt;/h2&gt;\n        &lt;p&gt;Florist Shop berdiri sejak 1972...&lt;/p&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n&lt;/main&gt;'
            },
            {
              number: 4,
              title: 'Styling Halaman About',
              content: 'Tambahkan CSS berikut di file style.css untuk halaman About:\n\n.about-section {\n    padding: 40px 20px;\n}\n.about-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n.about-img {\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n    border-radius: 10px;\n}\n.about-text h2 {\n    text-align: left;\n}\n.about-text p {\n    text-align: left;\n    line-height: 1.8;\n}'
            },
            {
              number: 5,
              title: 'Hubungkan Navbar Antar Halaman',
              content: 'Terakhir, pastikan navbar di kedua halaman sudah terhubung. Di index.html update navnya:\n\n&lt;nav&gt;\n  &lt;a href="index.html"&gt;Home&lt;/a&gt;\n  &lt;a href="about.html"&gt;About Us&lt;/a&gt;\n&lt;/nav&gt;\n\n🧩 Challenge: Sesuaikan isi halaman About dengan toko yang kamu buat. Ganti nama, cerita, dan foto tim sesuai kreativitasmu!'
            }
          ]
        },
        {
          id: 9,
          title: 'Tambahkan JavaScript',
          description: 'Buat websitemu jadi interaktif dengan JavaScript — tombol, promo, dan lebih banyak lagi!',
          image: '⚡',
          video: 'https://www.youtube.com/embed/FpZhPnVdB_g?si=bcxACc2_UgHQOgbh',
          steps: [
            {
              number: 1,
              title: 'Buat File script.js',
              content: 'JavaScript membuat website bisa bereaksi terhadap aksi pengguna seperti klik tombol, isi form, dan masih banyak lagi.\n\n1. Buat file baru bernama script.js di dalam folder project\n2. Hubungkan script.js ke dalam HTML dengan menambahkan kode ini tepat sebelum tag &lt;/body&gt; paling bawah:\n\n&lt;script src="script.js"&gt;&lt;/script&gt;\n\nLetakkan di bawah (bukan di &lt;head&gt;) agar halaman web selesai dimuat dulu sebelum script berjalan.'
            },
            {
              number: 2,
              title: 'Buat Tombol Sapa Pengunjung',
              content: 'Mulai dari yang paling sederhana — sebuah tombol! Tambahkan di dalam &lt;main&gt; di index.html:\n\n&lt;div style="text-align: center; margin: 20px;"&gt;\n  &lt;button onclick="sapaPengunjung()" class="btn-sapa"&gt;Klik Aku!&lt;/button&gt;\n  &lt;p id="pesan-sapa"&gt;&lt;/p&gt;\n&lt;/div&gt;\n\nLalu tambahkan CSS untuk tombolnya:\n\n.btn-sapa {\n    background-color: rgb(219, 84, 75);\n    color: white;\n    border: none;\n    padding: 12px 24px;\n    font-size: 16px;\n    border-radius: 8px;\n    cursor: pointer;\n}'
            },
            {
              number: 3,
              title: 'Tulis Function JavaScript Pertama',
              content: 'Sekarang buat fungsinya di file script.js supaya tombol bisa bekerja:\n\nfunction sapaPengunjung() {\n  document.getElementById("pesan-sapa").textContent = "Selamat datang di toko kami! 🌸";\n}\n\nCoba klik tombolnya di browser. Kalau berhasil muncul teks sambutan, berarti JavaScript-mu sudah berjalan!'
            },
            {
              number: 4,
              title: 'Buat Fitur Show Promo',
              content: 'Sekarang kita buat fitur yang lebih keren — tombol untuk menampilkan dan menyembunyikan promo:\n\nHTML (tambahkan di index.html):\n&lt;div style="text-align: center; margin: 20px;"&gt;\n  &lt;button onclick="togglePromo()" class="btn-sapa"&gt;Lihat Promo 🎁&lt;/button&gt;\n  &lt;div id="kotak-promo" style="display: none;"&gt;\n    &lt;div class="promo-box"&gt;\n      &lt;h3&gt;🎉 Promo Spesial!&lt;/h3&gt;\n      &lt;p&gt;Diskon 20% untuk pembelian pertama!&lt;/p&gt;\n      &lt;p&gt;Kode: &lt;b&gt;BUNGA20&lt;/b&gt;&lt;/p&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;'
            },
            {
              number: 5,
              title: 'Function Toggle Promo',
              content: 'Tambahkan function berikut di file script.js:\n\nfunction togglePromo() {\n  const kotak = document.getElementById("kotak-promo");\n  const tombol = event.target;\n\n  if (kotak.style.display === "none") {\n    kotak.style.display = "block";\n    tombol.textContent = "Tutup Promo ✕";\n  } else {\n    kotak.style.display = "none";\n    tombol.textContent = "Lihat Promo 🎁";\n  }\n}\n\nCSS untuk kotak promo di style.css:\n\n.promo-box {\n    background-color: #fff3cd;\n    border: 2px dashed rgb(219, 84, 75);\n    border-radius: 10px;\n    padding: 20px;\n    margin: 10px auto;\n    max-width: 400px;\n}'
            },
            {
              number: 6,
              title: '🎉 Selamat! Website Sudah Jadi!',
              content: 'Luar biasa! Kamu sudah berhasil membuat website lengkap dari awal dengan:\n\n✅ Halaman utama dengan produk\n✅ Header & navigasi\n✅ Halaman About\n✅ Styling dengan CSS\n✅ Interaksi dengan JavaScript\n\n🧩 Challenge Terakhir: Sesuaikan lagi website-mu! Tambahkan lebih banyak produk, ubah warna sesuai tema tokomu, dan kembangkan halaman About-nya. Jadikan ini benar-benar websitemu sendiri!'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Scratch',
      description: 'Learn programming through visual block coding',
      icon: '🧩',
      color: '#FF6B9D',
      accessCode: 'BTCMPTDPCMSCH2026',
      materials: [
        {
          id: 5,
          title: 'Apa Itu Scratch?',
          description: 'Pengenalan dasar tentang Scratch dan cara menggunakannya',
          image: '🎬',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          steps: [
            {
              number: 1,
              title: 'Memahami Scratch',
              content: 'Scratch adalah aplikasi untuk membuat animasi dan game sederhana dengan menggunakan blok coding yang telah disiapkan.',
              images: ['scratch/dreamina-2026-05-12-2571-Change_the_background_to_white_keeping_....jpeg']
            },
            {
              number: 2,
              title: 'Buka Website Scratch',
              content: 'Kunjungi website https://scratch.mit.edu/ dan buat akun gratis Anda.'
            },
            {
              number: 3,
              title: 'Klik Create',
              content: 'Setelah login, klik tombol "Create" untuk membuat project baru.'
            },
            {
              number: 4,
              title: 'Explore Interface',
              content: 'Pelajari tentang Stage (area permainan), Sprites (karakter), Block palette, dan Script area.'
            },
            {
              number: 5,
              title: 'Siap Membuat Game',
              content: 'Sekarang Anda sudah siap untuk membuat game pertama Anda dengan Scratch!'
            }
          ]
        },
        {
          id: 6,
          title: 'Scratch - Clone Wars',
          description: 'Buat game menembak dengan spaceship dan alien',
          image: '🚀',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/715403315',
          steps: [
            {
              number: 1,
              title: 'Buat Variable Speed',
              content: 'Buat Variable bernama "Speed" dan sembunyikan variable dengan cara menghapus tanda centang pada variable tersebut.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/17.png']
            },
            {
              number: 2,
              title: 'Setup Title Sprite',
              content: 'Tambahkan coding pada Title sprite untuk membuatnya muncul ketika game dimulai.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/19.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/7.png']
            },
            {
              number: 3,
              title: 'Setup Rocketship Movement',
              content: 'Tambahkan coding pada Rocketship untuk membuatnya bergerak ke kiri-kanan jika tombol panah keyboard ditekan.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/8.png']
            },
            {
              number: 4,
              title: 'Setup Rocketship Collision',
              content: 'Tambahkan coding pada Rocketship untuk membuatnya meledak jika terkena Alien dan mengirim pesan dengan Broadcast.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/9.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/15.png']
            },
            {
              number: 5,
              title: 'Setup Laser Clone',
              content: 'Tambahkan coding pada Laser untuk membuat clone setiap kali tombol Space di tekan (gunakan Control > Clone).',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/10.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/16.png']
            },
            {
              number: 6,
              title: 'Setup Laser Movement',
              content: 'Tambahkan coding pada Laser untuk membuat clone menuju spaceship dan bergerak ke atas.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/11.png']
            },
            {
              number: 7,
              title: 'Setup Alien Clone',
              content: 'Tambahkan coding pada Alien untuk membuat clone setiap 2 sampai 5 detik.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/12.png']
            },
            {
              number: 8,
              title: 'Setup Alien Movement',
              content: 'Tambahkan coding pada Alien untuk membuat clone muncul secara random di sisi atas layar dan bergerak dengan kecepatan 0,5 sampai 2. Clone akan hancur apabila terkena Laser.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/13.png']
            },
            {
              number: 9,
              title: 'Setup Alien Hit',
              content: 'Tambahkan coding pada Alien untuk membuat clone hancur ketika menerima broadcast Hit dari Spaceship.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/14.png']
            },
            {
              number: 10,
              title: 'Challenge - Tambah Score System',
              content: 'Tambahkan Variable Score agar player mendapat skor ketika laser berhasil mengenai alien.',
            },
            {
              number: 11,
              title: 'Challenge - Create Win Screen',
              content: 'Tambahkan Sprite Win menggunakan Paint Sprite > Text. Berikan coding agar jika player mendapat skor 10, semua sprite hide dan sprite ini muncul.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/28.png']
            },
            {
              number: 12,
              title: 'Challenge - Create Lose Screen',
              content: 'Tambahkan Sprite Lose dengan coding agar jika player hancur, semua sprite hide dan sprite ini akan muncul saat menerima broadcast Hit.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/29.png']
            },
            {
              number: 13,
              title: 'Challenge - Add Start Button',
              content: 'Tambahkan tombol Start sehingga ketika game dimulai semua sprite hide dan hanya menampilkan tombol start. Ketika start di klik semua sprite muncul dan game dimulai.'
            },
            {
              number: 14,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Sekarang mainkan game Clone Wars yang sudah Anda buat!'
            }
          ]
        },
        {
          id: 7,
          title: 'Scratch - Car Racing',
          description: 'Buat game balap mobil dengan obstacle dan nyawa',
          image: '🏎️',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/1318949686',
          steps: [
            {
              number: 1,
              title: 'Buat Variables',
              content: 'Buat Variable bernama "Speed", "Life", dan "Score". Sembunyikan variable Speed dan Life dengan menghapus tanda centang pada variable tersebut.',
              images: ['scratch/image.png']
            },
            {
              number: 2,
              title: 'Setup Buildings Background',
              content: 'Tambahkan coding pada sprite Buildings untuk membuat gedung bergerak terus dari atas ke bawah seperti background berjalan.',
              images: ['scratch/image 1.png']
            },
            {
              number: 3,
              title: 'Setup Buildings2 Background',
              content: 'Tambahkan coding pada sprite Buildings2 (di sisi kanan) untuk membuat gedung bergerak turun terus seperti background berjalan.',
              images: ['scratch/image 2.png']
            },
            {
              number: 4,
              title: 'Setup Road Marking',
              content: 'Tambahkan coding pada sprite Road Marking untuk membuat garis jalan muncul terus dan bergerak ke bawah seperti efek jalan berjalan.',
              images: ['scratch/image 3.png']
            },
            {
              number: 5,
              title: 'Setup Opponent Car',
              content: 'Tambahkan coding pada sprite Opponent Car untuk membuat mobil musuh bergerak turun dari atas dan muncul kembali secara acak.',
              images: ['scratch/image 4.png']
            },
            {
              number: 6,
              title: 'Setup Normal Car',
              content: 'Tambahkan coding pada sprite Normal Car untuk menampilkan mobil, mengatur posisi awal, menggerakkan mobil ke kiri, kanan, atas, bawah menggunakan tombol panah keyboard, serta mendeteksi tabrakan dengan musuh.',
              images: ['scratch/image 5.png']
            },
            {
              number: 7,
              title: 'Setup Life Display',
              content: 'Tambahkan coding pada sprite Life untuk menampilkan jumlah nyawa pemain dan mengubah tampilan nyawa saat terkena musuh.',
              images: ['scratch/image 6.png']
            },
            {
              number: 8,
              title: 'Challenge - Create Game Over Screen',
              content: 'Tambahkan Backdrop "Game Over" menggunakan Paint Background > Text. Tambahkan coding agar jika nyawa player = 0, semua sprite stop dan menuju backdrop game over.',
              images: ['scratch/image 7.png']
            },
            {
              number: 9,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Game Car Racing Anda sudah siap dimainkan. Hindari mobil musuh dan raih skor setinggi mungkin!'
            }
          ]
        },
        {
          id: 8,
          title: 'Scratch - Astronaut',
          description: 'Buat game petualangan astronaut dengan sistem oksigen',
          image: '👨‍🚀',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/1318946201',
          steps: [
            {
              number: 1,
              title: 'Buat Variable Oxygen',
              content: 'Buat Variable bernama "Oxygen" untuk melacak tingkat oksigen astronaut Anda.',
              images: ['scratch/image 8.png']
            },
            {
              number: 2,
              title: 'Setup Astronaut Movement',
              content: 'Tambahkan coding pada sprite Astronaut untuk membuat astronaut bergerak ke atas, bawah, kiri, dan kanan menggunakan tombol panah keyboard.',
              images: ['scratch/image 9.png']
            },
            {
              number: 3,
              title: 'Setup Star Collection',
              content: 'Tambahkan coding pada sprite Star untuk membuat bintang berpindah ke posisi acak dan mengeluarkan suara saat disentuh oleh Astronaut.',
              images: ['scratch/Cuplikan_layar_2026-05-12_130738.png']
            },
            {
              number: 4,
              title: 'Setup Meteor Falling',
              content: 'Tambahkan coding pada sprite Meteor untuk membuat meteor jatuh dari atas secara acak dan mengurangi Oxygen saat menyentuh Astronaut.',
              images: ['scratch/image 10.png']
            },
            {
              number: 5,
              title: 'Setup Oxygen Depletion',
              content: 'Kembali ke sprite Astronaut dan tambahkan coding untuk membuat oksigen berkurang secara otomatis setiap 1 detik. Jika oksigen habis (kurang dari 1), maka semua permainan akan berhenti.',
              images: ['scratch/image 11.png']
            },
            {
              number: 6,
              title: 'Setup Oxygen Increase',
              content: 'Tambahkan coding pada sprite Astronaut untuk menambah oksigen saat menyentuh sprite Star. Jika oksigen melebihi 100, maka nilainya akan kembali menjadi maksimal 100.',
              images: ['scratch/image 12.png']
            },
            {
              number: 7,
              title: 'Challenge - Create Game Over Screen',
              content: 'Tambahkan Backdrop "Game Over" menggunakan Paint Background > Text. Tambahkan coding agar jika Oxygen = 0, semua sprite stop dan menuju backdrop game over.',
              images: ['scratch/image 13.png']
            },
            {
              number: 8,
              title: 'Tambah Challenge',
              content: 'Coba tambahkan fitur lain seperti scoring, level yang berbeda, atau musuh tambahan untuk membuat game lebih seru!'
            },
            {
              number: 9,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Game Astronaut Anda sudah selesai. Jangan biarkan oksigen Anda habis dan kumpulkan bintang sebanyak mungkin!'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Design',
      description: 'Master visual design and user experience principles',
      icon: '🎭',
      color: '#9D4EDD',
      accessCode: 'BTCMPTDPCMDSGN2026',
      materials: [
        {
          id: 9,
          title: 'Animation Bootcamp: Cityscape Parallax',
          description: 'Buat animasi cityscape 3D dengan efek parallax yang memukau menggunakan Illustrator dan After Effects',
          image: '🎬',
          video: 'https://www.youtube.com/embed/ce_Ugo77MuM?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Selamat Datang di Dunia Animasi',
              content: 'Pernahkah kalian menonton film kartun kesayangan dan bertanya-tanya, "Wah, bagaimana ya cara gambar ini bisa bergerak dan hidup?" Hari ini rasa penasaran kalian akan terjawab! Kami tidak hanya akan menjadi penonton, tapi kita akan menjadi ANIMATOR sungguhan!\n\nMisi rahasia kita hari ini:\n1. Menggambar kota dan landmark terkenal di Illustrator\n2. Membuat Animasi Sederhana di After Effect\n3. Membuat gambar kota terasa nyata dan bergerak seperti dunia 3D\n4. Memasukkan karakter animasi kita agar bisa berjalan melintasi kota!\n\nSudah siap berpetualang? Let\'s go!',
              images: ['design/be3d6d25-b8d3-41cf-b48c-c99bf375f82b.png']
            },
            {
              number: 2,
              title: 'Pengenalan Cityscape & Landmark',
              content: 'Apakah kalian pernah pergi ke suatu tempat wisata? Tempat wisata biasanya memiliki "landmark", yaitu salah satu objek terkenal di suatu tempat yang bisa dikenali dari jarak yang jauh.\n\nHari ini, kita akan membuat cityscape! Cityscape adalah gambar kota yang menampilkan berbagai bangunan dan landmark. Bangunan-bangunan ini akan memiliki ciri khas yang berbeda sesuai kota masing-masing.\n\nBelajar Illustrator:\nPada saat "Create New" file pada Illustrator, perhatikan beberapa hal: Kalian dapat mengubah ukuran sesuai dengan kebutuhan. Dan jangan lupa menyesuaikan kebutuhan color kalian ya! (CMYK vs RGB). Gunakan RGB.',
              images: ['design/image 1.png']
            },
            {
              number: 3,
              title: 'Shape Tools di Illustrator',
              content: 'Yuk, buat basic shapes bersama. Uniknya pada Illustrator, shape star dan polygon dapat di edit jumlah sisi dan radius mereka!\n\nBagian-bagian cityscape terdiri dari:\n- Rumput = Rectangle shape tool + Color tool (green)\n- Rumah = Rectangle shape tool + Polygon shape tool (triangle) + Color\n- Jendela & Pintu rumah = Rectangle shape tool + Direct Selection Tool\n\nBuatlah 3 cityscape dengan 3 landmark berbeda! Bedakan setiap cityscape dengan kondisi kota masing-masing ya. Gunakan referensi dari internet! Contoh: cityscape Jakarta akan mempunyai gedung-gedung tinggi perkantoran, daripada Phuket yang lebih tradisional.',
              images: ['design/image 2.png', 'design/image 3.png', 'design/image 4.png', 'design/image 5.png']
            },
            {
              number: 4,
              title: 'Download Asset & Setup Document',
              content: 'Kalian bisa download asset LANDMARK di link berikut: https://drive.google.com/drive/folders/13evpEJsKhyyBR-dLadPQ4aJjPMuwICGm?usp=share_link\n\nUntuk membuat cityscape Create New pada Illustrator dan atur document preset seperti ini. Pilih ukuran yang sesuai dengan kebutuhan Anda. Pastikan menggunakan RGB color mode agar kompatibel dengan After Effects nanti.',
              images: ['design/image 6.png', 'design/image 7.png']
            },
            {
              number: 5,
              title: 'Mengorganisir Layer untuk Cityscape',
              content: 'Cityscape memerlukan beberapa layer untuk membedakan beberapa bagian background, midground, dan foreground. Jika ingin menambah layers, maka pergi ke tab layers, lalu klik ikon +\n\nContoh ada 5 layer yang terdiri dari:\n- Langit (background paling jauh)\n- Awan (di atas langit)\n- Gedung jauh (midground)\n- Landmark (midground depan)\n- Gedung dekat (foreground paling depan)\n\nOrganisasi ini sangat penting untuk efek parallax nanti!',
              images: ['design/image 8.png', 'design/image 9.png', 'design/image 10.png', 'design/image 11.png', 'design/image 12.png']
            },
            {
              number: 6,
              title: 'Pengenalan After Effects',
              content: 'Warm Up! Kalian sering menonton kartun kan? Kartun itu ternyata ada banyak macamnya! Ada yang dibuat dengan tangan, dengan aplikasi, atau dengan kamera.\n\nBelajar After Effect:\nSaat pertama kali membuka After Effect, kalian akan melihat window untuk membuka "New Project". Saat file baru terbuka kita bisa membuat komposisi baru dengan klik "New Composition".\n\nPada composition settings, yang penting untuk diperhatikan adalah:\n- Composition Name\n- Ukuran Komposisi (1920x1080 disarankan)\n- Frame Rate (30 FPS disarankan)',
              images: ['design/3249aef0-b697-49bf-8bd4-61f142c38727.png', 'design/199154dc-6ded-4fdd-bcc1-bbc9f47e4eb3.png', 'design/image 13.png', 'design/image 14.png']
            },
            {
              number: 7,
              title: 'Tools Penting di After Effects',
              content: '1. Selection Tools - Digunakan untuk menseleksi dan memindahkan object-object pada timeline\n\n2. Pan Behind Tool (Anchor Point) - Digunakan untuk menentukan titik pusat dari object dalam timeline seperti teks dan gambar\n\n3. Rectangle Tools - Digunakan untuk membuat shape dan juga dapat digunakan untuk menseleksi video sesuai shape\n\n4. Pen Tool - Digunakan untuk membuat shape dan juga seleksi dengan bentuk yang dibuat sesuai keinginan\n\nAsset dapat didownload pada link berikut: https://drive.google.com/drive/folders/1gh0wOQVNjX6l-43Q2PLOQeIPbBZBgkN8?usp=drive_link',
              images: ['design/image 15.png']
            },
            {
              number: 8,
              title: 'Membuat Animasi Sederhana - Langkah Praktis',
              content: '1. Buat komposisi baru pada After Effect dengan ukuran komposisi 1920x1080 dengan Frame Rate sekitar 30 Fps.\n\n2. Masukan asset karakter yang kalian miliki kedalam komposisi. Masukan asset-assets karakter kalian kedalam timeline komposisi.\n\n3. Atur timeline dengan membentuk "tangga" pada timelinenya agar masing-masing karakter dapat muncul bergantian.\n\nAyo coba buat Animasi sederhana dengan mengikuti step-step diatas!',
              images: ['design/image 16.png']
            },
            {
              number: 9,
              title: 'Konsep Parallax Motion',
              content: 'Mari kita lihat contoh dari Motion Parallax: https://www.youtube.com/watch?v=ce_Ugo77MuM\n\nParallax adalah efek visual di mana objek-objek yang lebih dekat bergerak lebih cepat daripada objek-objek yang lebih jauh. Ini menciptakan ilusi kedalaman dan dimensi 3D dalam gambar 2D.\n\nEfek ini sangat sering digunakan dalam film animasi untuk membuat adegan terasa lebih hidup dan memiliki kedalaman yang lebih besar!',
              images: ['design/image 17.png', 'design/image 18.png']
            },
            {
              number: 10,
              title: 'Setup Komposisi & Camera untuk Parallax',
              content: '1. Buat Komposisi pada After Effect dengan ukuran 1920px x 1080px\n\n2. Susunlah Cityscape kalian kembali pada after effect kalian dengan layer-layer yang sudah dibuat di Illustrator\n\n3. Buat Camera dengan pergi ke Layer > New > Camera\n\n4. Buat Null Object dengan pergi ke Layer > New > Null Object\n\n5. Letakan Camera dan Null Object pada layer paling atas',
              images: ['design/image 19.png', 'design/image 20.png']
            },
            {
              number: 11,
              title: 'Nyalakan 3D Mode pada Semua Layer',
              content: 'Nyalakan 3D Object pada semua layer yang ada. 3D Object bisa dilihat dalam bentuk Cube pada panel layer.\n\nLangkah-langkahnya:\n1. Seleksi setiap layer dan klik tombol 3D Cube icon\n2. Hubungkan (connect) parent & link ke Null Object\n\nUntuk lebih memudahkan untuk melihat dari tampilan atas, mari nyalakan 2 view pada bagian bawah preview. Ini akan membantu Anda melihat perspektif 3D dari sudut pandang berbeda.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20113121.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20132437.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20133924.png']
            },
            {
              number: 12,
              title: 'Setup Null Object Position',
              content: 'Ubah Z-position Null Object menjadi 0 agar titik null object berpindah ke kamera.\n\nLalu matikan parent null object yang tadi dikoneksikan ke camera. Ini akan melepaskan null object dari hierarchy camera.\n\nInilah setup yang diperlukan untuk membuat efek parallax 3D bekerja dengan optimal!',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20144708.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20145111.png']
            },
            {
              number: 13,
              title: 'Parent Semua Layer Ke Null Object',
              content: 'Seleksi semua layer termasuk camera dan parent semua layernya ke null object-nya.\n\nSetelah diparent kedalam null layer, matikan satu persatu parent dari layer paling atas dan ubah scale dari null object menjadi lebih besar dan lihatlah pada view (tampak atas) agar membentuk view seperti piramida.\n\nIni akan menciptakan efek perspektif 3D yang membuat cityscape terlihat memiliki kedalaman!',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20145403.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20151923.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-10%20152009.png']
            },
            {
              number: 14,
              title: 'Keyframing untuk Animasi Parallax',
              content: 'Aturlah keyframe pada Null Object yang dibuat dengan position dari kiri ke kanan atau sebaliknya.\n\nLangkah-langkahnya:\n1. Klik Stopwatch pada Position untuk mulai recording keyframe\n2. Di frame pertama (0), atur posisi null object ke salah satu sisi\n3. Geser ke frame terakhir dan atur posisi ke sisi yang berlawanan\n4. After Effects akan otomatis membuat animasi smooth antara dua keyframe\n\nMotion Parallax ini sudah jadi!',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-02%20104628.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Bootcamp/ID%20Bootcamp%20Animation/Meeting%204/Screenshot%202024-12-02%20104633.png']
            },
            {
              number: 15,
              title: 'Finishing: Masukkan Karakter ke Kota',
              content: 'Kotanya sudah keren dan bisa bergerak 3D, tapi rasanya ada yang kurang, ya? Betul sekali! Kotanya masih sepi. Sekarang saatnya kita memasukkan karakter animasi yang sudah kita buat sebelumnya untuk berjalan-jalan keliling kota!\n\nBuka jendela Project Panel (tempat berkumpulnya semua folder aset), lalu klik dan tarik (drag) Composition Karakter ke dalam Timeline Composition Cityscape milikmu.\n\nLetakkan layer karaktermu di atas layer cityscape.'
            },
            {
              number: 16,
              title: 'Atur Ukuran & Posisi Karakter',
              content: 'Tekan tombol S (Scale) di keyboard untuk menyesuaikan ukuran karaktermu agar tidak terlalu besar atau terlalu kecil.\n\nSesuaikan posisi karakter agar berada di depan (foreground) cityscape dengan perbandingan ukuran yang masuk akal.'
            },
            {
              number: 17,
              title: 'Buat Karakter Berjalan (Keyframe Position)',
              content: 'Sekarang kita buat karaktermu berjalan melintasi layar!\n\n1. Pindahkan garis waktu (indikator biru) ke detik pertama (detik 0)\n2. Geser karaktermu hingga berada di ujung sebelah KIRI (sampai keluar layar sedikit)\n3. Buka pengaturan posisi dengan menekan tombol P (Position) pada layer karakter, lalu klik ikon Stopwatch ⏱️ untuk menyalakan perekaman keyframe. Titik biru (Keyframe pertama) akan muncul!\n4. Selanjutnya, geser garis waktu (timeline) hingga ke detik terakhir animasimu\n5. Klik tahan karaktermu di layar dan geser pelan-pelan secara lurus ke ujung sebelah KANAN (hingga keluar layar di kanan). Keyframe kedua akan otomatis tercipta!',
              images: ['design/image 21.png', 'design/image 22.png']
            },
            {
              number: 18,
              title: 'Final Touch & Selesai!',
              content: 'Ta-daaa! Sekarang coba tekan tombol Spasi untuk memutar hasil akhirnya!\n\nKaraktermu terlihat berjalan dari kiri ke kanan melintasi dunia 3D yang sangat keren!\n\nJangan lupa tambahkan suara efek langkah kaki dan lagu yang ceria agar video animasimu semakin sempurna layaknya film!\n\nSelamat, kamu sudah menjadi Animator hebat! 🚀\n\nTips bonus:\n- Tambahkan lebih banyak karakter untuk membuat animasi lebih ramai\n- Coba buat animasi dengan arah berbeda (dari atas ke bawah, diagonal, dll)\n- Eksplorasi lebih banyak effect dan plugin untuk hasil yang lebih profesional!'
            }
          ]
        }
      ]
    }
  ]
};

// Get subject by ID
function getSubject(id) {
  return coursesData.subjects.find(subject => subject.id === id);
}

// Get material by subject ID and material ID
function getMaterial(subjectId, materialId) {
  const subject = getSubject(subjectId);
  return subject ? subject.materials.find(material => material.id === materialId) : null;
}

// Get all materials for a subject
function getSubjectMaterials(subjectId) {
  const subject = getSubject(subjectId);
  return subject ? subject.materials : [];
}