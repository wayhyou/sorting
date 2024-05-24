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

### Pada Pembahasan Ini Akan Membahas:
<a href="https://github.com/wayhyou/sorting?tab=readme-ov-file#bubble-sort" style="display: inline-block; background-color: #008CBA; color: white; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">Bubble Sort</a> |
<a href="https://github.com/wayhyou/sorting?tab=readme-ov-file#selection-sort" style="display: inline-block; background-color: #008CBA; color: white; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">Selection Sort</a> |
<a href="https://github.com/wayhyou/sorting?tab=readme-ov-file#insertion-sort" style="display: inline-block; background-color: #008CBA; color: white; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">Insertion Sort</a> |
<a href="https://github.com/wayhyou/sorting?tab=readme-ov-file#merge-sort" style="display: inline-block; background-color: #008CBA; color: white; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">Merge Sort</a> |
<a href="https://github.com/wayhyou/sorting?tab=readme-ov-file#quick-sort" style="display: inline-block; background-color: #008CBA; color: white; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 5px; font-size: 16px;">Quick Sort</a> |

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
    * Memerlukan operator perbandingan.
    * Menentukan urutan relatif elemen dalam kumpulan data masukan.
    * Membatasi efisiensi algoritma dalam kasus tertentu.

**O(N^2)**
* Notasi untuk **menyatakan kompleksitas** waktu dari sebuah algoritma atau fungsi dalam teori kompleksitas komputasional.
* **O**, singkatan dari "**Order of**" atau dalam bahasa Indonesia dapat diartikan sebagai "**Orde dari**". 
* **Notasi O**, digunakan dalam analisis kompleksitas algoritma untuk menunjukkan seberapa efisien atau seberapa buruk kinerja algoritma tersebut dalam hal waktu (**kompleksitas waktu**) atau ruang (**kompleksitas ruang**) saat ukuran inputnya bertambah.
* ***N***, mewakili ukuran masukan, seperti jumlah elemen dalam himpunan data yang akan diurutkan.
* Waktu eksekusi algoritma tersebut tumbuh secara **kuadratik** dengan peningkatan ukuran masukan *N*.
* Artinya, ketika *N* bertambah, waktu eksekusi algoritma meningkat dengan faktor *N*^2.

**PENGGUNAAN**
* **Sederhana** **=>** sering digunakan untuk **memperkenalkan** konsep algoritma pengurutan.
    * Kegunaan pendidikan dan pembelajaran.
    * Penggunaan dalam aplikasi kecil.
    * Debugging dan pengujian.
* Dalam **grafik komputer** **=>** **populer** **=>** kemampuannya **mendeteksi kesalahan kecil** (seperti pertukaran dua elemen saja) dalam array yang hampir diurutkan dan memperbaikinya hanya dengan kompleksitas linier (2n). 
    * Algoritma pengisian poligon (*polygon filling algorithm*).

---
## Selection Sort

**Selection Sort**
* **Simple** and **Efficient**
* Memilih berulang kali elemen terkecil (atau terbesar) dari bagian daftar yang tidak diurutkan dan memindahkannya ke bagian daftar yang diurutkan. 

Total no. of passes (Iterasi): ***N* - 1**
Total no. of comparisons (Pengecekan): ***N* * (*N* - 1) / 2**

**CARA KERJA**
* **Memulai pengecekan** data dari **data ke 1** hingga **data ke n**.
* **Menentukan** bilangan dengan index **terkecil** dari data pada bilangan tersebut.
* **Menukar** bilangan index **terkecil** dengan bilangan **pertama**.
* Begitu seterusnya **hingga data berhasil diurutkan semuanya**.

**KEUNTUNGAN**
* **Sederhana** dan **mudah dimengerti**.
* **Bekerja dengan baik** dengan kumpulan **data kecil**.

**KEKURANGAN**
* Memiliki **kompleksitas waktu O(n^2)**, dalam rata-rata kasus terburuk dan terbaik.
* **Tidak berfungsi dengan baik** pada kumpulan **data besar**.
* Tidak mempertahankan urutan relatif item dengan kunci yang sama yang berarti **tidak stabil**.

**PENGGUNAAN**
* Ketika memori terbatas.
* Pengimplementasian yang sederhana.
    * Aplikasi Embedded atau IoT dengan deterbatasan dumber daya.
    * Sorting data dalam Aplikasi Mobile dengan sedikit data.
    * Sorting data pada Front-End Web untuk keperluan tampilan.
    * Pemrosesan data real-time dalam aplikasi yang tidak sangat sensitif terhadap kinerja.


---
## Insertion Sort

**Insertion Sort** adalah adalah algoritma pengurutan **sederhana** yang bekerja dengan **menyisipkan setiap elemen** dari daftar yang **tidak disortir** secara **berulang** ke **posisi yang benar** di bagian **daftar yang diurutkan**.

Algoritma pengurutan yang **stabil**:
* Elemen dengan nilai yang sama **mempertahankan** urutan relatifnya dalam keluaran yang diurutkan.

Total no. of passes (Iterasi): ***N* - 1**
Total no. of comparisons (Pengecekan): ***N* * (*N* - 1) / 2**

**Kompleksitas Waktu Pengurutan Penyisipan**
* Kasus **terbaik**: **O(*N*)**, Jika daftar sudah diurutkan, di mana n adalah jumlah elemen dalam daftar.
* Kasus **rata-rata**: **O(*N*^2)**, Jika daftar diurutkan secara acak
* Kasus **terburuk**: **O(*N*^2)**, Jika daftarnya dalam urutan terbalik

**CARA KERJA**
* Kita harus **mulai** dengan elemen **data kedua** dari array.
    *  **Elemen pertama** dalam array **diasumsikan telah diurutkan**.
* Membandingkan **data kedua** dengan **data kesatu**.
    * Apabila data ke dua **lebih kecil** maka **tukar posisinya**.
* **Data ketiga** dibandingkan dengan **data kesatu dan kedua**.
    * Apabila data ketiga **lebih kecil** tukar lagi posisinya.
* **Data keempat** dibandingkan dengan **data ketiga hingga kesatu**.
    * Apabila data keempat **lebih kecil** dari seluruh data sebelumnya,
    * maka letakkan data keempat ke **posisi paling depan**.
    * **Jika tidak**, letakkan data pada posisi **setelah data yang lebih kecil** dari **data keempat**.
* **Begitu seterusnya** hingga **tidak ada** lagi data **yang dapat dipindahkan**.

**KEUNTUNGAN**
* **Sederhana** dan **mudah diterapkan**.
* Algoritma pengurutan yang **stabil**.
* **Efisien** untuk **daftar kecil** dan **daftar yang hampir diurutkan**.
* Hemat ruang.

**KEKURANGAN**
* **Tidak efisien** untuk **daftar besar**.
* **Tidak seefisien algoritma pengurutan lainnya** (misalnya, **merge sort**, **quick sort**) untuk sebagian besar kasus.

**PENGGUNAAN**
* Daftarnya **kecil** atau **hampir terurut**.
* **Kesederhanaan** dan **stabilitas** itu **penting**.


---
## Merge Sort

**Merge Sort** adalah algoritma pengurutan yang mengikuti pendekatan **divide-and-conquer**.
* **Membagi array** masukan secara rekursif **menjadi subarray** yang **lebih kecil**.
* **Mengurutkan subarray** tersebut kemudian **menggabungkannya kembali** untuk mendapatkan **array** yang **diurutkan**.

**Secara sederhana,**
* **Membagi array** menjadi **dua bagian**, 
* **Mengurutkan** masing-masing bagian, 
* dan kemudian **menggabungkan** bagian yang telah diurutkan kembali **menjadi satu**. 
* Proses ini **diulangi** hingga **seluruh array diurutkan**.

**CARA KERJA**
* **Divide**: Bagilah daftar atau array secara rekursif menjadi dua bagian hingga tidak dapat dibagi lagi.
* **Conquer**: Setiap subarray diurutkan satu per satu menggunakan algoritma pengurutan gabungan.
* **Merge**: Subarray yang telah diurutkan digabungkan kembali menjadi satu dalam urutan yang diurutkan. Proses berlanjut hingga semua elemen dari kedua subarray telah digabungkan.

**Kompleksitas Waktu**
* Kasus **Terbaik**: **O(n log n)**, Ketika array sudah terurut atau hampir terurut.
* Kasus **Rata-rata**: **O(n log n)**, Ketika array diurutkan secara acak.
* Kasus **Terburuk**: **O(n log n)**, Ketika array diurutkan dalam urutan terbalik.

**Kompleksitas Ruang**
* **O(n)**, Ruang tambahan diperlukan untuk array sementara yang digunakan selama penggabungan.

**KEUNTUNGAN**
* **Stability**: Pengurutan gabungan adalah algoritme pengurutan yang stabil, yang berarti algoritme ini mempertahankan urutan relatif elemen yang sama dalam larik masukan.
* **Guaranteed worst-case performance**: Pengurutan gabungan memiliki kompleksitas waktu kasus terburuk sebesar O(N logN) , yang berarti ia bekerja dengan baik bahkan pada kumpulan data yang besar.
* **Simple to implement**: Pendekatan memecah-belah dan menaklukkan sangatlah mudah.

**KEKURANGAN**
* **Space complexity**: Pengurutan gabungan **memerlukan memori tambahan** untuk menyimpan sub-array yang digabungkan selama proses pengurutan. 
* **Not in-place**: Pengurutan gabungan **bukan**lah algoritma pengurutan **in-place**, yang berarti **memerlukan memori tambahan untuk menyimpan** data yang diurutkan. Hal ini dapat menjadi **kelemahan** dalam aplikasi yang mengutamakan **penggunaan memori**.

**PENGGUNAAN**
* Menyortir kumpulan **data besar**.
* **Penyortiran eksternal** (ketika kumpulan data terlalu besar untuk dimasukkan ke dalam memori)
* **Penghitungan inversi** (menghitung jumlah inversi dalam sebuah array)
* Menemukan **median** dari sebuah array

---
## Quick Sort

**Quick Sort**
* **Divide and Conquer**, yang **memilih elemen** sebagai **pivot** dan **mempartisi** array tertentu di sekitar pivot yang dipilih dengan menempatkan pivot pada posisi yang benar dalam array yang diurutkan.

Ada **banyak pilihan** berbeda untuk **memilih pivot**:
* Elemen **pertama**.
* Elemen **terakhir**.
* Elemen **acak**.
* Elemen **tengah**.

**Algoritma Partisi**:
* Mulai dari elemen **paling kiri** dan **melacak** indeks elemen yang **lebih kecil** (atau **sama dengan** i). 
* Saat melakukan **traversing**, 
    * Jika kita **menemukan** elemen yang **lebih kecil**, kita **menukar** elemen saat ini dengan arr[i]. 
    * Jika **tidak**, kita **mengabaikan** elemen saat ini.

**CARA KERJA**
* Proses utama **=>** *partisi()*. 
    * Target dari partisi,
        * **menempatkan pivot** (elemen apa pun dapat dipilih menjadi pivot) **pada posisi yang benar** dalam susunan yang diurutkan dan meletakkan semua elemen yang **lebih kecil** di **sebelah kiri pivot**, dan semua elemen yang **lebih besar** di **sebelah kanan pivot**.

    * **Partisi** **=>** **rekursif** pada setiap **sisi pivot** setelah **pivot ditempatkan** pada posisi yang **benar** dan akhirnya **mengurutkan array**.
* Karena **proses partisi** dilakukan secara **rekursif**, 
    * Menempatkan **pivot** pada **posisi sebenarnya** dalam array yang diurutkan. 
    * **Menempatkan pivot berulang kali pada posisi sebenarnya** akan membuat **array terurut**.

**Analisis Kompleksitas Quick Sort**:
* Kasus **Terbaik** : **Ω (N log (N))**.
* Kasus **Rata-rata**: **θ ( N log (N))**.
* Kasus **Terburuk**: **O(N2)**.

**Ruang Tambahan**: **O(1)**
* jika kita **tidak mempertimbangkan** ruang tumpukan rekursif.
* Jika kita **mempertimbangkan** ruang tumpukan rekursif, dalam kasus terburuk **Quick Sort** dapat menghasilkan **O(N)**.

**KEUNTUNGAN**
* Algoritma **divide-and-conquer** yang memper**mudah** penyelesaian masalah.
* Ini **efisien** pada kumpulan **data besar**.
* Ini memiliki **overhead** yang **rendah**, karena hanya memerlukan sejumlah **kecil memori** untuk **berfungsi**,
    * mengurutkan data **in-place** dan **bekerja** pada **sub-array** yang lebih kecil.

**KEKURANGAN**
* Memiliki **kompleksitas waktu** kasus **terburuk** **O(N^2)**, yang terjadi ketika **poros** dipilih dengan **buruk**.
* **Bukan pilihan** yang **baik** untuk kumpulan **data kecil**.
* **Bukan pengurutan stabil**, 
    * Jika **dua elemen** memiliki **kunci yang sama**, urutan relatifnya tidak akan dipertahankan dalam keluaran yang diurutkan,
    * Jika terjadi **Quick Sort**, karena di sini kita **menukar elemen** sesuai dengan **posisi pivot** (tanpa mempertimbangkan aslinya) posisi.
* **Overhead Rekursi**, 
    * Meskipun **rekursi** memungkinkan **struktur kode** yang **bersih dan elegan**, 
    * **Menimbulkan overhead tambahan**.
    * Dalam kasus **ekstrim** dengan **data set sangat besar** dan **kedalaman rekursi tinggi**, ini dapat menyebabkan **stack overflow**.

**PENGGUNAAN**
* Sistem Manajemen Database.
    * **Mengurutkan** hasil **pencarian** berdasarkan **kriteria** tertentu, seperti nama, tanggal, atau nilai tertentu.
        * Misalnya, dalam aplikasi perbankan, Quicksort dapat digunakan untuk mengurutkan transaksi berdasarkan tanggal.
* Aplikasi E-commerce.
    * **Mengurutkan** daftar produk berdasarkan harga, popularitas, atau **kriteria** lainnya. Ini **memungkinkan** pengguna untuk dengan mudah **menemukan** produk yang mereka **cari**.
* Aplikasi Manajemen Stok.
    * **Mengurutkan** daftar barang berdasarkan berbagai **kriteria**, seperti nama, kategori, atau jumlah stok. Ini **membantu** dalam **pemantauan dan pengelolaan** stok yang **efisien**.
* Sistem Pencarian.
    * **Mengurutkan** hasil pencarian berdasarkan **relevansi** atau **kriteria** lainnya.
        * Misalnya, dalam mesin pencari web, hasil pencarian dapat **diurutkan** berdasarkan tingkat **relevansi** atau **popularitas**.
* Aplikasi Analisis Data.
    * **Mengurutkan** data yang **besar** sebelum melakukan **operasi analisis** atau **pemrosesan lanjutan**. Ini **membantu** dalam pengolahan data yang **efisien** dan **cepat**.

---

**O(n), O(log n) dan O(n log n)**

* **Pencarian Linier (O(n))**: 
    * Melakukan pencarian linier melalui **setiap halaman** buku telepon
        * Hingga **menemukan** nama yang dicari. 
    * Misalnya, 1000 halaman dalam buku telepon, 
        * maka kita mungkin harus **memeriksa setiap halaman** untuk **menemukan** nomor telepon yang kita cari.
    * **Kompleksitas waktu** pencarian linier adalah O(n), di mana **𝑛** adalah **jumlah halaman dalam buku telepon**.

* **Pencarian Biner (O(log n))**: 
    * **Alternatif** yang lebih **efisien** adalah dengan menggunakan **pencarian biner**. 
        * Karena **nama-nama** dalam buku telepon **sudah diurutkan** berdasarkan **urutan abjad**,
        * kita bisa **memulai** pencarian di **tengah buku** telepon.
    * Kemudian, kita **membandingkan** nama yang dicari **dengan nama** di **halaman tengah**. 
        * Jika **nama** tersebut **sebelum** nama di **halaman tengah**, kita bisa **membuang setengah buku** telepon yang berada **setelah halaman tengah**.
            * Begitu pun sebaliknya.
        * Demikian **seterusnya**, **sampai** kita **menemukan** nama yang dicari. 
    * **Kompleksitas waktu** pencarian biner adalah **O(log n)**, di mana **𝑛** adalah **jumlah halaman dalam buku telepon**.

* **Gabungan (O(n log n))**: 
* Asumsikan bahwa kita **memiliki daftar nama-nama** yang akan kita cari dalam buku telepon,
    * **mencari** nomor telepon untuk setiap nama. 
* Jika kita **menggunakan pencarian biner** untuk setiap nama dalam daftar, 
    * kita akan **membutuhkan waktu O(n log n)** untuk menemukan nomor telepon untuk semua nama dalam daftar. 
* Ini **karena** kita harus **melakukan pencarian biner** untuk **setiap nama dalam daftar**, 
    * yang masing-masing memiliki **kompleksitas waktu O(log n)**, dan kita **memiliki total 𝑛 nama** dalam daftar.


**BIG O**
Big O notation is used to analyze  the efficiency of an algorithm as its input approaches infinity, which means that as the size of the input to the algorithm grows how drastically do the space or time requirements grow with it.

For example, let's say we have a dentist and she takes 30 minutes to treat one patient, as her line of patient is increases the time that it takes for her to treat all of the patients will scale linearly with the number of patients waiting in line. 

This is because it always takes her a constant amount of time to treat each individual patient which is 30 minutes, this give us a general understanding of how long our dentist would take to treat 10, 20, or more patients. Because we know the constant amount of time which is 30 minutes to treat each patient. We can always calculate would take for her to treat any number of patients by multiplying the number patients times 30 minutes. 

With this in mind, we can categorize her efficiency as being linear or as we would say in Big O terms O(n), where n is equal to the number of patients. 

Big O(n)
Big O(patients)

We use this same technique to determine the efficiency of algorithms. We can get a general idea of how a functions time efficiency scales, by categorizing a given functions efficiency the same way that we categorize the dentist efficiency.

Let's create an easily comprehensible function that scales similiary to the dentists.

```
function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7]
linearFunc(arr)
```

So this function is in the same linear category as our dentist.

```
console.log(1000 * 100000);
```

This line will of code takes constant time, which brings me a important point when considering the efficiency of a function, this lines that take constant time do not matter.
Well, at least for our puposes they done, this is because if our array were some crazy length like 200 million, changing this expression to something simpler, like 1 + 1, would have a negligible effect on the efficiency of the function as a whole we'd still need iterate throught 200 millions item in an array.

In fact even if the function looked like this.

```
function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
        let something = (200000000 * 200000000) / 2;
        console.log(something);
    }
}
```

We would still ignore all of these constants and say that, this function scales linearly or Big O(n). Similarly, if we think back to our dentist example, we see that she took 30 minutes per patient, but even if she took three hours per patient, the amount of time it takes her to see all of her patients will still scale linearly, this can be difficult to grasp at first, but it starts to make sense over time.

**Constant**

```
function constant(arr) {
    var result = 100 * 1000;
    return result;
}
```

Constant is any step that doesn't scale with the input to the function, for example the time to evaluate this expression does not change with the input, because both 100 and 1000 are constants. That is these values are always the same.

This expression always results in the same value.

```
var result = 100 * 1000; // 100000
```

And it always takes the same amount of time or constant time to return the same result. Just like we use Big O(n) to describe linear functions. we also habe a big O name for constant algorithms which is Big O(1).

A good way to think about it is every line of code, is actually a function in and of it's self, which is actually true. For example, let's reintroduce this function. 

```
function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
        let something = (200000000 * 200000000) / 2;
        console.log(something);
    }
}
```

So this line of code `for (let i = 0; i < arr.length; i++)` is the reason why the entire `linearFunc()` function is O(n). Because as the size of n is increases the number of iterations that the for loop must traverse increases as well. But take this line `console.log(1000 * 100000);` into consideration, let's for one second pretend that we have a function that contains only this line. 

```
function linearFunc(arr) {
    console.log(1000 * 100000);
}
```

With that function we pass in an array `arr` but the function does nothing with the array, the only operation within the function is constant, because it doesn't scale with any input. 
So regardless of how large of an array is passed to this function. This line `console.log(1000 * 100000);` always produces the same result and this is the only line in the function, so therefore this entire function is O(1). 

But wait, in this function, we have multiple lines that are O(1), yet we still prioritize  the line that is O(n) and ignore the O(1) operations. 

```
function linearFunc(arr) {
    O(n) => for (let i = 0; i < arr.length; i++) {
        O(1) => console.log(1000 * 100000); // O(1)
        O(1) => let something = (200000000 * 200000000) / 2;
        O(1) => console.log(something);
    }
}
```

Why is this? Well this brings us to our last important note. In Big O, we have a growth hierarchy like this:

```
O(1)       => Constant               => Good
O(log n)   => Logarithmic            ||
O(n)       => Linear                 ||
O(n log n) => Linearithmic           ||
O(n^2)     => Quadratic              ||
O(n^3)     => Cubic                  ||
O(2^n)     => Exponential            \/
O(n!)      => Factorial              => Bad
```

In Big O notation, when determining the efficiency of an algorithm we only care about the worst case so that means that the worst case or the  highest order operation, trumps the operations that have better performance. So, if we add the performance of all of these lines up like so `O(n) + O(1) + O(1) + O(1) = O(n) // Ignore O(1) because constant`. 

All of the lines of code that are O of 1 get cancelled out, because of in is the worst performing or highest order part of the function. And is why we ignore constants, because we are actually just eliminating the non-dominant items, because as a function's input moves towards infinity constants become less and less significant. So, to recap when evaluating an algorithm's efficiency we must take into consideration the efficiency of each step within the algortihm, we then find the highest order step or the step that has the worst performance and prioritize it over all the better  performing steps.
Steps that are constant or that are all of one or as good as it gets in term of efficiency, so we always ignore them unless the entirety of the function is constant or O(1). And in that case we would categorize the entire function as constant or O(1). 

And that is Big O notation.

---

Konsep Big O adalah cara untuk mengukur kinerja atau kompleksitas waktu dari algoritma atau fungsi. Ini membantu dalam memprediksi bagaimana kinerja suatu algoritma akan berubah saat ukuran masukan menjadi besar.

Pernyataan yang Anda sertakan menjelaskan bagaimana Big O memperlakukan konstanta dan faktor konstan lainnya dalam analisis kompleksitas algoritma. Pada dasarnya, Big O mengabaikan faktor konstan karena fokusnya adalah pada pertumbuhan algoritma saat ukuran masukan menjadi besar. Algoritma yang memiliki kompleksitas O(1) dianggap memiliki kinerja yang konstan, yang berarti waktu eksekusi tidak tergantung pada ukuran masukan. Oleh karena itu, dalam analisis Big O, faktor konstan seperti waktu tetap diabaikan karena tidak berdampak pada pertumbuhan algoritma saat ukuran masukan menjadi besar.

Jika sebuah algoritma memiliki kompleksitas waktu O(n), misalnya, ini berarti waktu eksekusi algoritma akan tumbuh secara linier seiring dengan peningkatan ukuran masukan (n). Namun, faktor konstan, seperti koefisien yang mungkin muncul dalam suatu ekspresi, tidak dipertimbangkan dalam analisis Big O karena tidak mempengaruhi pertumbuhan algoritma dalam skala yang besar.

Dengan menggunakan analisis Big O, kita dapat membandingkan kinerja berbagai algoritma dan memilih yang paling efisien untuk digunakan dalam situasi tertentu, terutama ketika kita berurusan dengan masukan yang sangat besar.