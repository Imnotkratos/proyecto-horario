const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
});

// Prueba la conexión al iniciar el servidor
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conexión exitosa a MySQL');
        connection.release(); // Liberar la conexión
    } catch (error) {
        console.error('❌ Error al conectar a MySQL:', error.message);
        process.exit(1); // Detener la aplicación si hay error
    }
}

testConnection();
module.exports = pool;