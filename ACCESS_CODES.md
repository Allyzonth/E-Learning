# 🔐 Access Codes - Bootcamp 1 Day

## Cara Menggunakan
Sistem access code bekerja di **level learning path/subject**, bukan per materi. Ketika user mengklik subject (Roblox, Scratch, Website Development, atau Design), mereka akan diminta memasukkan access code untuk membuka SEMUA materi di subject tersebut.

Access code bersifat **case-insensitive** (bisa menggunakan huruf besar atau kecil).

---

## 📚 4 Access Code untuk 4 Learning Path

| Learning Path | Access Code | Keterangan |
|---------------|-------------|-----------|
| **Roblox** 🎮 | `ROBLOX` | Membuka semua 6 materi Roblox |
| **Website Development** 🌐 | `WEB` | Membuka semua 7 materi Website Development |
| **Scratch** 🧩 | `SCRATCH` | Membuka semua 4 materi Scratch |
| **Design** 🎭 | `DESIGN` | Membuka semua 1 materi Design (Animation Bootcamp) |

---

## 📝 Contoh Penggunaan

1. **User membuka halaman materi** → `materi.html?subject=1` (Roblox)
2. **System cek apakah subject punya access code** → Ya (accessCode: 'ROBLOX')
3. **Modal muncul** → "🔐 Masukkan Access Code untuk Learning Path"
4. **User input code** → Misalnya: `roblox` atau `ROBLOX`
5. **Validasi** → Cocok! Akses diberikan
6. **Materi terbuka** → User bisa melihat semua materi di subject Roblox
7. **Simpan ke localStorage** → User tidak perlu re-enter code untuk subject Roblox di browser yang sama

---

## 🔧 Cara Mengubah Access Code

Jika Anda ingin mengubah access code untuk suatu learning path, edit file `js/data.js` dan ubah nilai `accessCode` pada subject yang diinginkan:

```javascript
{
  id: 1,
  title: 'Roblox',
  description: '...',
  icon: '🎮',
  color: '#FF6B35',
  accessCode: 'ROBLOX',  // ← Ubah ke code lain, misalnya 'ROBLOX2024'
  materials: [
    // ... list materi
  ]
}
```

Kemudian simpan file dan refresh browser.

---

## 💾 Penyimpanan di Browser

- **Key format**: `accessCode_subject_{subjectId}`
- **Value**: `'granted'` (ketika user memasukkan code yang benar)
- **Lokasi**: Browser's localStorage
- **Durasi**: Persisten selama cache browser tidak dihapus

Contoh:
- `accessCode_subject_1` = 'granted' (untuk Roblox)
- `accessCode_subject_2` = 'granted' (untuk Website Development)
- `accessCode_subject_3` = 'granted' (untuk Scratch)
- `accessCode_subject_4` = 'granted' (untuk Design)

---

## 🎯 Keuntungan Sistem Subject-Level Access Code

✅ **Simple** - Hanya 4 code untuk seluruh bootcamp  
✅ **User-friendly** - User hanya perlu input code sekali per subject  
✅ **Fleksibel** - Mudah untuk mengubah code kapan saja  
✅ **Aman** - Setiap learning path terlindungi dengan code unik  

