import db from '../config/database.js';

const authenticateUser = async (username, password) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    return rows.length > 0 ? rows[0] : null;
}

export default { authenticateUser };
