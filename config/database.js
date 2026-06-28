// Memanggil library mysql2 dengan dukungan Promise (untuk async/await)
import mysql from 'mysql2/promise';

// Membuat Connection Pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,           // User default jika Anda menggunakan XAMPP/Laragon
    password: process.env.DB_PASSWORD,           // Kosongkan jika tidak ada password di MySQL lokal Anda
    database: process.env.DB_NAME, // Pastikan database ini sudah Anda buat di MySQL
    waitForConnections: process.env.WAIT_FOR_CONNECTIONS === 'true',
    connectionLimit: process.env.CONNECTION_LIMIT,
    queueLimit: process.env.QUEUE_LIMIT
});

// Mengetes koneksi saat server pertama kali dijalankan
export default async function connectDB() {
    const connection = await db.getConnection();
    connection.release();
    return "Terhubung ke MySQL (finance_db) dengan sukses!";
}