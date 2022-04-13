# Submission Aplikasi Pengelolaan Data Menggunakan DOM dan Web Storage
Selamat! Akhirnya Anda telah sampai di penghujung pembelajaran. Anda telah mempelajari:

- Dasar-dasar JavaScript mulai dari *statement*, *expressions*, pembuatan variabel, tipe data, operator, percabangan *if* dan *switch*, *data structure* dengan *array* dan *object*, hingga pembuatan *function*.
- Mengetahui Browser Object Model (BOM), Document Object Model (DOM), dan Event di dalam *website*. Serta Anda mampu mengubah konten *website* melalui teknik manipulasi DOM dan memberikan Event.
- Mengenal *localStorage* dan *sessionStorage* sebagai Web Storage. Serta menggunakan keduanya.
- Terakhir, Anda sudah mampu membuat website memiliki fungsionalitas mengelola To-Do menggunakan JavaScript dengan memanfaatkan teknik manipulasi DOM, Event, dan Web Storage melalui latihan yang diberikan pada kelas ini.

Untuk bisa lulus dan mendapatkan sertifikat dari akademi ini, Anda harus mengerjakan tugas yakni membuat proyek **Bookshelf Apps** sesuai kriteria lengkap di bawah ini. Tim Reviewer akan memeriksa pekerjaan Anda dan memberikan reviu pada proyek yang Anda buat.


## Kriteria Bookshelf Apps
Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak. 

Untuk lebih jelasnya, terdapat 5 kriteria utama pada Bookshelf Apps yang harus Anda buat.


### Kriteria 1: Mampu Menambahkan Data Buku
- Bookshelf Apps harus mampu menambahkan data buku baru.
- Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:
```Javascript
{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}
```
&emsp;&emsp;Berikut contoh data riilnya:
```Javascript
{
  id: 3657848524,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K Rowling",
  year: 1997,
  isComplete: false,
}
```
> Catatan:  
> Untuk id buku pada tiap buku yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions **+new Date()**.


### Kriteria 2: Memiliki Dua Rak Buku
- Bookshelf Apps harus **memiliki 2 Rak buku**. Yakni, “Belum selesai dibaca” dan “Selesai dibaca”.
- Rak buku Belum selesai dibaca hanya menyimpan buku yang properti ***isComplete*** nya bernilai *false*.
- Rak buku Selesai dibaca hanya menyimpan buku yang properti ***isComplete*** nya bernilai *true*.


### Kriteria 3: Dapat Memindahkan Buku antar Rak
- Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dipindahkan di antara keduanya**.


### Kriteria 4: Dapat Menghapus Data Buku
- Buku yang ditampilkan pada rak baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dihapus**.


### Kriteria 5: Manfaatkan localStorage dalam Menyimpan Data Buku
- Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat bertahan walaupun halaman web ditutup**.
- Dengan begitu, Anda **harus menyimpan data buku pada localStorage**.


## Referensi Proyek dan Project Starter Aplikasi Bookshelf Apps
Silakan untuk akses web aplikasi [Bookshelf Apps](https://bookshelfappsdicoding.netlify.app/ "Bookshelf Apps") berikut agar Anda memiliki bayangan seperti apa harus membuat proyek submission-nya. Atau Anda bisa simak video singkat berikut:

[![Web Pemula Submission](https://assets-jpcust.jwpsrv.com/thumbnails/foxbwvvf-720.jpg)](https://cdn.jwplayer.com/players/7QgUcmFH-LeXgVIHJ.html "Web Pemula Submission")

Karena di kelas ini kita hanya berfokus pada JavaScript, Browser Object, DOM, Event, dan Web Storage, maka kami telah menyediakan *project starter* yang di dalamnya terdapat HTML dan CSS yang serupa dengan proyek di atas.

Silakan unduh *project starter* pada tautan berikut:
- [Starter project Bookshelf Apps](https://github.com/dicodingacademy/a315-web-pemula-labs/raw/shared-files/bookshelf-apps.zip "Starter project Bookshelf Apps").

Anda bisa memanfaatkan *project starter* tersebut untuk pengerjaan submission, namun bila tidak pun tidak masalah. Justru, kami sangat mengapresiasi Anda untuk mengerjakan submission dengan tampilan sekreatif mungkin.


## Kriteria Penilaian Submission
Submission Anda akan dinilai oleh Tim Reviewer guna menentukkan kelulusan Anda. Untuk lulus dari kelas ini, proyek Bookshelf Apps harus memenuhi seluruh kriteria yang telah disebutkan pada bagian Kriteria Bookshelf Apps.

Submission Anda akan dinilai oleh Tim Reviewer dengan skala 1-5. Untuk mendapatkan nilai tinggi, silakan penuhi saran-saran berikut ini:

- Tambahkan fitur pencarian untuk mem-*filter* buku yang ditampilkan pada rak sesuai dengan *title* buku yang dituliskan pada kolom pencarian.
- Berkreasilah dengan membuat proyek Bookshelf Apps tanpa menggunakan *project starter*.
- Menuliskan kode dengan bersih.
  - Bersihkan comment dan kode yang tidak digunakan.
  - Indentasi yang sesuai.
- Terdapat improvisasi fitur seperti (pilih satu): 
  - Custom Dialog ketika menghapus buku.
  - Dapat meng-*edit* buku.
  - dsb.

Berikut adalah detail penilaian submission:

- **Bintang 1** : Semua ketentuan terpenuhi, namun terdapat indikasi kecurangan dalam mengerjakan submission.
- **Bintang 2** : Semua ketentuan terpenuhi, namun terdapat kekurangan pada penulisan kode.
- **Bintang 3** : Semua ketentuan terpenuhi, namun tidak terdapat improvisasi atau saran yang dipenuhi.
- **Bintang 4** : Semua ketentuan terpenuhi dan menerapkan minimal satu saran yang diberikan.
- **Bintang 5** : Semua ketentuan terpenuhi dan menerapkan seluruh saran yang diberikan.

> Catatan: 
> Jika *submission Anda ditolak* maka *tidak ada penilaian*. Kriteria penilaian bintang di atas hanya berlaku *jika submission Anda lulus*.


## Ketentuan Berkas Submission
- Berkas submission yang dikirim merupakan folder proyek dari Bookshelf Apps dalam bentuk **ZIP**. 
- Pastikan di dalam folder proyek yang Anda kirim terdapat berkas HTML, CSS, dan JavaScript.
- Jangan memasukan berkas lain yang tidak digunakan pada proyek Anda. Karena itu hanya memperbesar ukuran ZIP dan membuat proses reviu menjadi lebih lama.
- Anda boleh menambahkan berkas aset seperti gambar selama aset tersebut digunakan pada proyek Anda.


## Submission Anda akan Ditolak Bila
- Kriteria dari Bookshelf Apps tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Menggunakan JQuery atau library serupa untuk memudahkan proses manipulasi DOM (kami ingin memastikan Anda sudah mampu menggunakan teknik dasar manipulasi DOM).
- Mengirimkan kode JavaScript yang telah di-minify.
- Melakukan kecurangan seperti tindakan plagiasi.


## Forum Diskusi
Jika mengalami kesulitan, Anda bisa menanyakan langsung ke forum diskusi. https://www.dicoding.com/academies/315/discussions.


## Ketentuan Proses Review
Beberapa hal yang perlu Anda ketahui mengenai proses *review*:

- Tim Reviewer akan mengulas submission Anda dalam waktu **selambatnya 3 (tiga) hari kerja** (*tidak termasuk Sabtu, Minggu,* dan *hari libur nasional*).
- Tidak disarankan untuk melakukan *submit berkali-kali* karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman [submission](https://www.dicoding.com/academysubmissions/my "submission").

## Perhatian!
![No Plagiarism](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/no_to_plagiarism_2.jpg "No Plagiarism")
Sesuai dengan [terms of use](https://www.dicoding.com/termsofuse "terms of use") di Dicoding, submission kelas Dicoding Academy **haruslah hasil karya Anda sendiri.**

Kode yang didapatkan dari sumber lain (website, buku, forum, GitHub, dan lain-lain) hanya digunakan sebagai referensi. Tingkat kesamaannya **tidak boleh lebih dari 70%.**

Kami memiliki hak mutlak untuk mengenakan **sanksi** kepada peserta **plagiat** yang melanggar ketentuan di atas. Sanksi tersebut berupa **penangguhan akun Dicoding**. Artinya Anda tidak dapat melakukan submission apapun di kelas Dicoding Academy selama masa penangguhan. Progress belajar peserta kelas Dicoding Academy pun, otomatis kami reset ke 0 (nol), tanpa terkecuali.