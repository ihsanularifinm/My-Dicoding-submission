# Submission: Membuat Aplikasi Web dengan ES6, Custom Element, NPM, Webpack, dan AJAX
Selamat, akhirnya Anda telah sampai di penghujung pembelajaran. Anda sudah mempelajari 

- Sintaks ES6 (dapat dipelajari mulai dari modul [ECMAScript 6](https://www.dicoding.com/academies/163/freemodule/6567 " ECMAScript 6")),
- Web Components (dapat dipelajari mulai dari modul [Web Component](https://www.dicoding.com/academies/163/tutorials/6945?hl=web+component "Web Component")),
- Node Package Manager (dapat dipelajari mulai dari modul [Node Package Manager](https://www.dicoding.com/academies/163/tutorials/7085?hl=node+package "Node Package Manager")),
- Webpack (dapat dipelajari mulai dari modul [Webpack](https://www.dicoding.com/academies/163/tutorials/7155?hl=webpack "Webpack")), dan
- Asynchronous JavaScript Request menggunakan XHR dan Fetch (dapat dipelajari mulai dari modul [Asynchronous JavaScript Request](https://www.dicoding.com/academies/163/tutorials/7260?hl=XHR "Asynchronous JavaScript Request")). 

Anda juga sudah mengerjakan semua latihan yang sudah diberikan pada kelas ini.

Untuk bisa lulus dan mendapatkan sertifikat dari akademi ini, **Anda harus membuat sebuah proyek akhir yang menerapkan seluruh komponen yang sudah Anda pelajari**. Tim reviewer akan memeriksa pekerjaan Anda dan memberikan review pada semua kode yang Anda tulis.


## Kriteria Submission
Berikut kriteria dari proyek submission yang harus Anda penuhi:

- Menggunakan standar *ES6 sintaks* dalam menuliskan kode *JavaScript* pada proyek yang dibuat.
- Terdapat minimal satu penerapan *custom element*.
- Menggunakan *Webpack* sebagai module bundler (tahap produksi).
- Memanfaatkan *Webpack* sebagai *environment* dalam pengembangan proyek (tahap *development*).
- Memanfaatkan API dengan menggunakan konsep *AJAX* dalam menampilkan data yang dinamis pada aplikasi yang dibuat.
- Anda bebas menentukkan tema aplikasi yang ingin dibuat, ***terkecuali*** **tema** ***Club Finder/Pencarian Klub Olahraga, Sepak Bola,*** **atau** ***Dicoding Books.***


## Saran Submission
Submission Anda akan dinilai oleh reviewer dengan **penilaian bintang berskala 1-5** berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa **saran** untuk mendapatkan nilai tinggi, berikut sarannya:

- Menerapkan tampilan aplikasi yang menarik:
  - Memiliki pemilihan warna yang pas dengan tema aplikasi (dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti [colorhunt.co](http://colorhunt.co/ "colorhunt.co")).
  - Tata letak elemen yang pas.  
    Contoh : Tidak ada konten yang bertumpuk.
  - Penggunaan font yang pas dengan tema.
  - Penerapan padding, margin yang pas.
  - Responsif pada seluruh ukuran layar perangkat.
- Menggunakan package pihak ke-3 yang di-install melalui package manager (bukan CDN), contohnya:
  - Lodash
  - Axios
  - JQuery
  - dsb.
- Menuliskan kode dengan bersih dan konsisten. Anda bisa memanfaatkan Linter seperti ESLint dalam menjaga gaya penulisan kode.
- Bereksplorasi pada penerapan webpack. Seperti: 
  - Menggunakan Loader atau Plugin di luar yang diajarkan pada modul.
  - Menerapkan optimasi bundle seperti minifying atau split chunk.

Detail penilaian submission:

- **Bintang 1** : Semua ketentuan terpenuhi, namun terdapat indikasi plagiat yaitu dengan menggunakan proyek orang lain dan hanya mengubah kontennya saja.
- **Bintang 2** : Semua ketentuan terpenuhi, namun tidak lebih baik dari latihan yang diberikan.
- **Bintang 3** : Semua ketentuan terpenuhi, namun hanya mengikuti latihan yang ada di kelas.
- **Bintang 4** : Semua ketentuan terpenuhi dan menerapkan *minimal 2 (dua)* saran di atas.
- **Bintang 5** : Semua ketentuan terpenuhi dan menerapkan *minimal 4 (empat)* saran di atas.

> Catatan:  
> Jika *submission Anda ditolak* maka *tidak ada penilaian*. Kriteria penilaian bintang di atas hanya berlaku *jika submission Anda lulus*.


## Submission yang Tidak Sesuai Kriteria
Jika submission Anda tidak sesuai dengan kriteria, maka akan ditolak oleh reviewer, berikut poin-poin yang harus diperhatikan:

- Tidak memenuhi kriteria yang sudah ditentukan.
- Tidak memanfaatkan *Webpack* sebagai development environment (gunakanlah *webpack-dev-server*).
- Proyek yang Anda kirim tidak berjalan dengan baik ketika reviewer mencoba untuk *build* pada tahap *production*.
- Menggunakan *JavaScript* framework seperti *React, Angular, atau Vue.*
- Mengirimkan proyek yang sama atau tidak terdapat perubahan yang signifikan seperti latihan yang diberikan pada kelas ini. Baik itu *Club Finder*, ataupun *Dicoding Books*.
- Menyertakan package yang berada pada *node_modules* ke dalam berkas ZIP. Karena akan membuat berkas ZIP memiliki *ukuran yang besar* dan fitur code review tidak dapat berfungsi.
- Menggunakan proyek peserta lain dalam mengirimkan submission.
- Tidak terdapat berkas *package.json* yang mengandung daftar dependencies yang proyek Anda gunakan.


## Resources
Berikut beberapa rekomendasi public API yang bisa Anda manfaatkan dalam pengerjaan submission:

- **TheMovieDB** : [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api "https://www.themoviedb.org/documentation/api")
- **TheSportDB** : [https://www.thesportsdb.com/api.php](https://www.thesportsdb.com/api.php "https://www.thesportsdb.com/api.php")
- **TheMealDB** : [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php "https://www.themealdb.com/api.php")
- **TheCockTailDB** : [https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php "https://www.thecocktaildb.com/api.php")
- **Covid-19 Statistic** : [https://github.com/mathdroid/covid-19-api](https://github.com/mathdroid/covid-19-api "https://github.com/mathdroid/covid-19-api")


## Tips
Beberapa poin di bawah ini mungkin akan membantu Anda dalam pengerjaan submission:

- Anda bisa menggunakan JQuery dalam memanipulasi DOM jika Anda sudah terbiasa menggunakannya.
- Anda bisa menggunakan CSS Framework seperti Bootstrap, Materialize, atau lainnya dalam menyusun tampilan web app.
- Anda bisa menggunakan package pihak ketiga untuk melakukan AJAX pada proyek ini.


## Forum Diskusi
Jika mengalami kesulitan, Anda bisa menanyakan langsung ke forum diskusi. [https://www.dicoding.com/academies/163/discussions](https://www.dicoding.com/academies/163/discussions "https://www.dicoding.com/academies/163/discussions").


## Ketentuan Berkas Submission
Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Di dalam folder proyek tersebut terdiri dari **HTML**, **CSS**, **JS**, atau aset yang Anda gunakan dalam halaman web yang Anda buat.
- Selain itu, pastikan di dalam folder proyek terdapat berkas **package.json** yang mengandung daftar **dependencies** yang proyek Anda gunakan.
- Mengirimkan proyek dalam bentuk **folder** Proyek, kemudian arsipkan folder tersebut dalam bentuk **ZIP**.
- Tidak perlu menyertakan *package* yang berada pada *node_modules* ke dalam berkas ZIP. ***Karena akan membuat berkas ZIP memiliki ukuran yang besar.***


## Ketentuan Proses Review
Beberapa hal yang perlu Anda ketahui mengenai proses review

- Tim penilai akan mengulas submission Anda dalam waktu **selambatnya 3 (tiga)** hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Tidak disarankan untuk melakukan *submit berkali-kali* karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman [submission](https://www.dicoding.com/academysubmissions/my "submission").

## Perhatian!
![No Plagiarism](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/no_to_plagiarism_2.jpg "No Plagiarism")
Sesuai dengan [terms of use](https://www.dicoding.com/termsofuse "term of use") di Dicoding, submission kelas Dicoding Academy **haruslah hasil karya Anda sendiri.**

Kode yang didapatkan dari sumber lain (website, buku, forum, GitHub, dan lain-lain) hanya digunakan sebagai referensi. Tingkat kesamaannya **tidak boleh lebih dari 70%.**

Kami memiliki hak mutlak untuk mengenakan **sanksi** kepada peserta **plagiat** yang melanggar ketentuan di atas. Sanksi tersebut berupa **penangguhan akun Dicoding**. Artinya Anda tidak dapat melakukan submission apapun di kelas Dicoding Academy selama masa penangguhan. Progress belajar peserta kelas Dicoding Academy pun, otomatis kami reset ke 0 (nol), tanpa terkecuali.