# Submission: Katalog Restoran

## Pengenalan

Anda sudah mempelajari cara menuliskan JavaScript dengan gaya yang konsisten dan mengikuti kaidah yang baik menurut buku Clean Code. Selain itu Anda juga sudah belajar membangun web app secara progressive dengan menerapkan sifat offline capability dan installable. Anda juga sudah berlatih:

- Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript ([Using ESLint](https://www.dicoding.com/academies/219/tutorials/9316 'Using ESLint')).
- Membuat website dengan arsitektur Application Shell ([Practice: Application Shell](https://www.dicoding.com/academies/219/tutorials/9416 'Practice: Application Shell')).
- Menerapkan Web App Manifest ([Practice: Web App Manifest](https://www.dicoding.com/academies/219/tutorials/9466 'Practice: Web App Manifest')).
- Menerapkan Service Worker ([Practice: Service Worker](https://www.dicoding.com/academies/219/tutorials/9501 'Practice: Service Worker')).
- Menggunakan IndexedDB untuk menyimpan data dalam bentuk objek ([Practice: IndexedDB](https://www.dicoding.com/academies/219/tutorials/9554 'Practice: IndexedDB')).
- Serta menerapkan WebSocket dan Notification ([Practice: Web Socket](https://www.dicoding.com/academies/219/tutorials/9621 'Practice: Web Socket') & [Notification](https://www.dicoding.com/academies/219/tutorials/9631 'Notification')).

Untuk mempelajari modul berikutnya, Anda harus mengembangkan kembali web app Katalog Restoran hingga menjadi Progressive Web Apps dengan kriteria yang sudah ditentukan.

## Kriteria

Fitur yang harus ada pada aplikasi:

1. **Halaman Utama (Daftar Restoran)**  
   Syarat:

   - Menampilkan daftar restoran yang datanya bersumber dari API [https://restaurant-api.dicoding.dev/](https://restaurant-api.dicoding.dev/ 'https://restaurant-api.dicoding.dev/'). Silakan lihat dokumentasinya pada halaman tersebut.
   - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
   - Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
   - Hero elemen tetap dipertahankan.

2. **Halaman Detail Restoran**  
   Syarat:

   - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
   - Pada halaman detail restoran harus terdapat:
     - Nama restoran
     - Gambar
     - Alamat
     - Kota
     - Deskripsi
     - Menu Makanan
     - Menu Minuman
     - Customer Reviews
   - Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).

3. **Halaman Daftar Restoran Favorit**  
   Syarat:

   - Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
   - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
   - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
   - Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.

4. **Native Capability**
   Syarat:

   - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
   - Aplikasi harus menampilkan icon Add to Home Screen.
   - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.

5. **Code Quality**  
   Syarat:

   - Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. _Harap lampirkan berkas konfigurasi ESLint ya_.
   - Menerapkan salah satu style guide baik itu [Google JavaScript Code Style](https://google.github.io/styleguide/jsguide.html 'Google JavaScript Code Style'), [AirBnB JavaScript Code Style](https://github.com/airbnb/javascript 'AirBnB JavaScript Code Style'), atau [StandardJS Code Style](https://standardjs.com/rules.html 'StandardJS Code Style').
   - Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun _error_ ketika menjalankan eslint.

6. **Pertahankan syarat yang ada pada submission sebelumnya**. Seperti responsibilitas tampilan, aksesibilitas pada website, appbar, footer dan sebagainya.

> **Catatan:**  
> Dalam mengerjakan submission ini, _Anda tidak diperkenankan_ menggunakan css framework (seperti Bootstrap, Materialize, Tailwind, dll) yang dapat membantu dalam menyusun tampilan yang responsif. Tuliskan kode CSS from scratch, sistem layouting CSS murni saat ini sudah cukup powerful untuk membuat tampilan website responsif.

## Penilaian

Submission Anda akan dinilai oleh reviewer dengan **skala 1-5** berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa **saran** di bawah ini untuk mendapatkan nilai tinggi, berikut sarannya:

- Tambahkan fitur untuk memberikan consumer review baru pada halaman detail. Silakan simak caranya pada [dokumentasi API](https://restaurant-api.dicoding.dev/ 'dokumentasi API') (Gunakan testing key untuk api key-nya).
- Alangkah baiknya bila Anda menerapkan Web Component secara native menggunakan Custom Element.
- Tambahkan indikator loading ketika data sedang dimuat dari server dan tampilkanlah keterangan/halaman bila request yang dilakukan gagal.

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
- Proyek tidak berhasil di-_build_.
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
