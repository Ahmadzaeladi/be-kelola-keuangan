import {db} from '../config/db.config.js';

export const getAllTransactions = async () => {
    const [rows] = await db.execute('SELECT * FROM transactions ORDER BY transaction_date DESC');
    return rows;
}

export const getCategoryTypes = async (categoryId) => {
    const [rows] = await db.execute('SELECT * FROM category_types WHERE category_id = ?', [categoryId]);
    return rows.length > 0 ? rows[0].type : null;
}

export const createTransaction = async (data) => {
    const { amount, transaction_date, description, payment_method, category_id, type } = data;
    const [result] = await db.execute(
        'INSERT INTO transactions (amount, transaction_date, description, payment_method, category_id, type) VALUES (?, ?, ?, ?, ?, ?)',
        [amount, transaction_date, description, payment_method, category_id, type]
    );
    return result;
}

