# Penilaian Mahasiswa - React App

Aplikasi web sederhana untuk membantu dosen melakukan penilaian terhadap mahasiswa berdasarkan beberapa aspek penilaian.  
Aplikasi dibuat menggunakan **React** dengan tujuan meminimalkan proses render dan menghasilkan output dalam bentuk **JSON** sesuai kebutuhan soal.

---

## 📌 Fitur Aplikasi

-   Menampilkan 10 mahasiswa
-   Setiap mahasiswa memiliki 4 aspek penilaian:
    -   Kehadiran
    -   Tugas
    -   UTS
    -   UAS
-   Rentang nilai: **1 – 10**
-   Output ditampilkan dalam bentuk **JSON**
-   Render seminimal mungkin menggunakan satu state utama

---

## 🛠️ Teknologi

-   React (Vite)
-   JavaScript
-   HTML & CSS

---

## 📦 Cara Install & Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/aprakarsa/penilaian-mahasiswa-react.git
```

### 2. Masuk ke Folder Project

```bash
cd penilaian-mahasiswa-react
```

### 3. Install Dependency

```bash
npm install
```

### 4. Jalankan Aplikasi

```bash
npm run dev
```

### 5.Buka browser:

```bash
http://localhost:5173
```

## 💾 Cara Melihat Output JSON

Isi nilai mahasiswa (1–10)

Klik tombol Simpan

Output JSON akan muncul di bawah tabel penilaian

## Contoh Output JSON

```bash
[
{
"nama": "Mahasiswa 1",
"penilaian": {
"kehadiran": 8,
"tugas": 9,
"uts": 7,
"uas": 8
}
},
{
"nama": "Mahasiswa 2",
"penilaian": {
"kehadiran": 7,
"tugas": 8,
"uts": 8,
"uas": 9
}
}
]
```

## 🚀 Build untuk Production

```bash
npm run build
```

### Hasil build akan berada di folder:

```bash
dist/

```
