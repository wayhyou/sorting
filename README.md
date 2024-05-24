# SORTING

**_Sorting_** (*pengurutan*) adalah suatu proses *penyusunan* kembali *kumpulan objek* menggunakan *aturan* tertentu.

* Proses dasar dalam algoritma dan struktur data.
* Pentingnya dalam mengatur dan menyusun data secara teratur.
* Digunakan dengan jumlah data yang besar.
* Harus memiliki efisiensi yang tinggi.
* Bahan pertimbangan waktu dan memori komputer yang diperlukan.

> "Sorting algoritma didefinisikan sebagai proses penyusunan data-data mulai dari urutan terkecil menuju terbesar, begitu sebaliknya" *- Buku Informatika Henry Pandia*

Alasan mengapa sorting sangat penting:
* Mempersingkat dalam penggunaan waktu dalam pembuatan proses program.
* Data akan di urutkan oleh algoritma sorting, tidak manual.
* Data yang dihasilkan lebih terstruktur, teratur dan  sesuai dengan kebutuhan.
* Memudahkan dalam proses perubahan perilaku data.


---

## Bubble Sort

**_Bubble Sort_** adalah algoritma pengurutan paling sederhana yang bekerja dengan menukar elemen yang berdekatan berulang kali jika urutannya salah.
Algoritma ini **tidak cocok** untuk kumpulan **data besar** karena kompleksitas waktu rata-rata dan kasus terburuknya cukup tinggi.

* Total no. of passes (Iterasi): ***N* - 1**
    - Setiap iterasi **=>** setidaknya memindahkan 1 elemen ke posisi yang benar.
* Total no. of comparisons (Pengecekan): ***N* * (*N* - 1) / 2**
    - setiap iterasi **=>** membandingkan setiap elemen dengan elemen berikutnya dalam himpunan data. 
    - Dalam himpunan data dengan ***N*** elemen, 
        - pada iterasi pertama, ada **(*N* − 1)** perbandingan, 
        - pada iterasi kedua ada **(*N* − 2)** perbandingan, dan seterusnya. 
        - Jumlah total perbandingan adalah jumlah dari **1** sampai **(*N* − 1)**, yang sama dengan ***N* × (*N* − 1) / 2**.

**CARA KERJA**
* **Membandingkan** setiap **elemen berdekatan** dari kiri.
* **Elemen** yang **lebih besar** akan **diletakkan** di sebelah **kanan**.
* **Step pertama**, akan **menempatkan elemen paling besar** berada pada posisi **paling kanan**.
* Kemudian, **proses** akan **diulang** untuk mencari nilai paling besar ke dua hingga paling besar ke - *n*. 

**KEUNTUNGAN**
* **Mudah** dipahami dan diterapkan.
* Tidak memerlukan memori tambahan.
* Stabil.

**KEKURANGAN**
* Memiliki kompleksitas waktu O(N^2) **=>** **LAMBAT** untuk **DATA BESAR**. 
* **Berbasis perbandingan** 
**=>** Memerlukan operator perbandingan.
**=>** Menentukan urutan relatif elemen dalam kumpulan data masukan.
**=>** Membatasi efisiensi algoritma dalam kasus tertentu.

**O(N^2)**
* Notasi untuk **menyatakan kompleksitas** waktu dari sebuah algoritma atau fungsi dalam teori kompleksitas komputasional.
* **O**, singkatan dari "**Order of**" atau dalam bahasa Indonesia dapat diartikan sebagai "**Orde dari**". 
* **Notasi O**, digunakan dalam analisis kompleksitas algoritma untuk menunjukkan seberapa efisien atau seberapa buruk kinerja algoritma tersebut dalam hal waktu (**kompleksitas waktu**) atau ruang (**kompleksitas ruang**) saat ukuran inputnya bertambah.
* ***N***, mewakili ukuran masukan, seperti jumlah elemen dalam himpunan data yang akan diurutkan.
* Waktu eksekusi algoritma tersebut tumbuh secara **kuadratik** dengan peningkatan ukuran masukan *N*.
* Artinya, ketika *N* bertambah, waktu eksekusi algoritma meningkat dengan faktor *N*^2.

**PENGGUNAAN**
* **Sederhana** **=>** sering digunakan untuk **memperkenalkan** konsep algoritma pengurutan.
* Dalam **grafik komputer** **=>** **populer** **=>** kemampuannya **mendeteksi kesalahan kecil** (seperti pertukaran dua elemen saja) dalam array yang hampir diurutkan dan memperbaikinya hanya dengan kompleksitas linier (2n). 
    * Algoritma pengisian poligon (*polygon filling algorithm*).

---
## Selection Sort

**Selection Sort**
* **Simple** and **Efficient**
* Memilih berulang kali elemen terkecil (atau terbesar) dari bagian daftar yang tidak diurutkan dan memindahkannya ke bagian daftar yang diurutkan. 



---
## Insertion Sort

---
## Merge Sort

---
## Quick Sort

---