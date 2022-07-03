# Submission: Katalog Restoran PWA + Testing and Performance Optimized

## Pengantar

Selamat! Akhirnya Anda sampai di penghujung kelas ini. Anda sudah mempelajari bagaimana cara melakukan automation test, dan merasakan bagaimana menulis kode menggunakan TDD. Anda juga sudah belajar bagaimana mengoptimasi gambar dan bundle agar ukurannya tetap kecil. Anda juga sudah berlatih:

- [Test Driven Development menggunakan Jasmine](https://www.dicoding.com/academies/219/tutorials/9829 'Test Driven Development menggunakan Jasmine').
- [Menerapkan Testing Pada Aplikasi](https://www.dicoding.com/academies/219/tutorials/9839 'Menerapkan Testing Pada Aplikasi').
- [Menerapkan Kontrak Test](https://www.dicoding.com/academies/219/tutorials/9874 'Menerapkan Kontrak Test').
- [Membangun Fitur Menggunakan TDD](https://www.dicoding.com/academies/219/tutorials/9894 'Membangun Fitur Menggunakan TDD').
- [Menerapkan E2E Testing](https://www.dicoding.com/academies/219/tutorials/9944 'Menerapkan E2E Testing').
- [Mengkompresi gambar menggunakan Imagemin](https://www.dicoding.com/academies/219/tutorials/9756 'Mengkompresi gambar menggunakan Imagemin').
- [Mengubah Gif menjadi Video](https://www.dicoding.com/academies/219/tutorials/9766 'Mengubah Gif menjadi Video').
- [Menerapkan Image Responsive](https://www.dicoding.com/academies/219/tutorials/9771 'Menerapkan Image Responsive').
- [Menggunakan WebP sebagai format gambar](https://www.dicoding.com/academies/219/tutorials/9781 'Menggunakan WebP sebagai format gambar').
- [Menerapkan teknik lazy load gambar](https://www.dicoding.com/academies/219/tutorials/9791 'Menerapkan teknik lazy load gambar').
- [Menganalisa ukuran bundle JavaScript](https://www.dicoding.com/academies/219/tutorials/9806 'Menganalisa ukuran bundle JavaScript').
- [Memecah bundle agar muatannya tetap kecil](https://www.dicoding.com/academies/219/tutorials/9816 'Memecah bundle agar muatannya tetap kecil').

Untuk lulus dari kelas ini, Anda harus mengembangkan kembali web app Katalog Restoran dengan menerapkan automation test dan beberapa optimisasi sesuai dengan kriteria berikut.

## Kriteria

Fitur yang harus ada pada aplikasi:

1. **Integration Test**  
   Syarat:

   - Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.

2. **End to End Test**  
   Syarat:

   - Menerapkan End to End Test dengan skenario:
     - Menyukai salah satu restoran.
     - Batal menyukai restoran tersebut.

3. **Image Optimization**  
   Syarat:

   1. Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah _200kb_.
   2. Menerapkan teknik image responsive pada gambar hero. Resolusi gambar pada layar seluler dan desktop harus berbeda.
   3. Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.

4. **Bundle Optimization**
   Syarat:

   1. Memasang bundle analyzer pada proyek submission.
   2. Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.

5. **Pertahankan syarat yang ada pada submission sebelumnya.** Seperti penerapan PWA, responsibilitas tampilan, aksesibilitas pada website dan sebagainya.

## Penilaian

Submission Anda akan dinilai oleh reviewer dengan **skala 1-5** berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa **saran** di bawah ini untuk mendapatkan nilai tinggi, berikut sarannya:

- Menuliskan test case secara lengkap, mulai dari kasus positif hingga kasus negatif. Pastikan test case yang dijalankan berhasil.
- Menerapkan End to End test pada skenario lain di luar yang sudah ditentukan. Pastikan test case yang dijalankan berhasil.  
  Contoh: bila aplikasi terdapat fitur customer review, lakukan End to End test pada fitur tersebut.
- Menerapkan optimasi lain di luar dari optimasi yang menjadi persyaratan. Contoh, Anda bisa menerapkan pendekatan skeleton UI, minify/uglify CSS.
- Mendeploy hasil web app yang Anda kerjakan ke _third-party hosting._ Seperti _[Firebase Hosting](https://firebase.google.com/docs/hosting 'Firebase Hosting')_, _[Netlify](https://www.netlify.com/ 'Netlify')_, _[Heroku](https://www.heroku.com/ 'Heroku')_, _[Github Pages](https://pages.github.com/ 'Github Pages')_, atau yang lainnya. Serta, memperhatikan matrik Web Vitals dengan nilai:

  - **FCP** < 2.5 detik
  - **FID/TBT** < 100 ms
  - **CLS** < 0.1

  Note: Lampirkan URL dari laman web yang sudah di _hosting_ pada Student Notes.

Detail penilaian submission:

- **Bintang 1** : Semua ketentuan terpenuhi, namun kode dan tampilan masih perlu banyak diperbaiki atau terindikasi melakukan plagiat.
- **Bintang 2** : Semua ketentuan terpenuhi, namun kode dan tampilan masih perlu banyak diperbaiki.
- **Bintang 3** : Semua ketentuan terpenuhi namun hanya mengikuti seperti apa yang ada pada latihan.
- **Bintang 4** : Semua ketentuan terpenuhi, mempunyai arsitektur yang baik sehingga meminimalisir _boilerplate_, mempunyai tampilan yang baik, serta menerapkan _salah satu saran_ yang diberikan.
- **Bintang 5** : Semua ketentuan terpenuhi, mempunyai arsitektur yang baik sehingga meminimalisir _boilerplate_, mempunyai tampilan yang baik, serta menerapkan _semua saran_ yang diberikan.

> **Catatan:**  
> _Jika submission Anda ditolak maka tidak ada penilaian. Kriteria penilaian bintang di atas hanya berlaku jika submission Anda lulus._

## Lainnya

### Submission yang Tidak Sesuai Kriteria

Jika submission Anda tidak sesuai dengan kriteria, maka akan ditolak oleh reviewer, berikut poin-poin yang harus diperhatikan:

- Tidak memenuhi kriteria yang telah ditentukan.
- Tidak menggunakan webpack sebagai module bundler dan environment development.
- Menggunakan CSS framework untuk membantu menyusun layout website.
- Menggunakan React, Angular, Vue dalam membangun proyek submission.
- Mengirimkan proyek submission dengan ukuran yang besar, biasanya disebabkan oleh berkas node_modules ikut terkirim.
- Proyek tidak berhasil di-build.
- Mengirimkan proyek yang bukan karya sendiri.

### Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Di dalam folder proyek tersebut terdiri dari **HTML, CSS, JS**, atau aset yang Anda gunakan dalam halaman web yang Anda buat.
- Selain itu, pastikan di dalam folder proyek terdapat berkas **package.json** yang mengandung daftar **dependencies** yang proyek Anda gunakan.
- Mengirimkan proyek dalam bentuk folder Proyek, kemudian arsipkan folder tersebut dalam bentuk **ZIP**.
- Tidak perlu menyertakan package yang berada pada _node_modules_ ke dalam berkas ZIP. Karena akan membuat berkas ZIP memiliki ukuran yang besar.

### Ketentuan Proses Review

Beberapa hal yang perlu Anda ketahui mengenai proses review

- Tim penilai akan mengulas submission Anda dalam waktu **selambatnya 3 (tiga)** hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Tidak disarankan untuk melakukan _submit berkali-kali_ karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman [submission](https://www.dicoding.com/academysubmissions/my 'submission').
- Setelah melakukan submit tugas di submission ini, Anda bisa mengakses modul selanjutnya tanpa harus menunggu hingga proses review selesai dari tim Reviewer.
- Anda masih bisa mengakses modul selanjutnya meskipun submission di-reject oleh tim Reviewer.
- Pastikan submission Anda sudah disetujui (_approved_) oleh tim reviewer, sebelum dapat mengakses submission berikutnya.

### Perhatian!

![No Plagiarism](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/no_to_plagiarism_2.jpg 'No Plagiarism')
Sesuai dengan [terms of use](https://www.dicoding.com/termsofuse 'term of use') di Dicoding, submission kelas Dicoding Academy **haruslah hasil karya Anda sendiri.**

Kode yang didapatkan dari sumber lain (website, buku, forum, GitHub, dan lain-lain) hanya digunakan sebagai referensi. Tingkat kesamaannya **tidak boleh lebih dari 70%.**

Kami memiliki hak mutlak untuk mengenakan **sanksi** kepada peserta **plagiat** yang melanggar ketentuan di atas. Sanksi tersebut berupa **penangguhan akun Dicoding**. Artinya Anda tidak dapat melakukan submission apapun di kelas Dicoding Academy selama masa penangguhan. Progress belajar peserta kelas Dicoding Academy pun, otomatis kami reset ke 0 (nol), tanpa terkecuali.
