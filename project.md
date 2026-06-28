# Backend Finance (be-finance)

Ini adalah project backend untuk pengelolaan keuangan. Project ini dibangun menggunakan Node.js dan Express.

## Teknologi yang Digunakan
- **Node.js**
- **Express** - Web framework
- **MySQL2** - Database driver dengan dukungan Promise
- **Dotenv** - Pengelolaan environment variable

## Persiapan & Instalasi

1. Pastikan Anda telah menginstal Node.js dan MySQL di perangkat Anda.
2. Clone repository ini atau pastikan Anda berada di direktori project.
3. Jalankan perintah instalasi dependency:
   ```bash
   npm install
   ```

## Konfigurasi Environment (Database)

Pastikan file `.env` sudah sesuai dengan kredensial database MySQL Anda:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=db_finance
DB_USER=root
DB_PASSWORD=password_anda
CONNECTION_LIMIT=10
QUEUE_LIMIT=0
WAIT_FOR_CONNECTIONS=true
```

## Menjalankan Project

Project ini telah diatur menggunakan **ES Modules** (`"type": "module"`), sehingga mendukung sintaks `import` dan `export`. 

Untuk menjalankan server dalam mode pengembangan (dengan hot-reload dari `nodemon`):
```bash
npm run dev
```

Untuk menjalankan server di mode produksi:
```bash
npm start
```

## Struktur Project

- `config/` - Konfigurasi project (misal: koneksi database di `database.js`).
- `controllers/` - Logika bisnis untuk endpoint API.
- `models/` - Struktur data dan interaksi ke tabel database.
- `routes/` - Pengaturan routing endpoint API (misal: `routes/index.js`).
- `docs/` - Dokumentasi API (misal: Swagger UI).
- `server.js` - Entry point atau file utama yang menjalankan server Node.js.

## Troubleshooting

- **Error: `Cannot use import statement outside a module`**: Sudah diperbaiki dengan penambahan `"type": "module"` pada `package.json`.
- **Error: `Cannot find package 'mysql2'` atau `dotenv`**: Pastikan Anda sudah menjalankan `npm install`.
- **Error Database Connection**: Periksa koneksi MySQL Anda dan pastikan service MySQL (seperti XAMPP / Laragon / Docker) sudah berjalan dan kredensial di file `.env` sudah benar.
