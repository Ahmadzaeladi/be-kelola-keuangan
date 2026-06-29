import * as TransactionModel from '../models/transaction.model.js';

export const getTransactions = async (req, res) => {
    try {
        const data = await TransactionModel.getAllTransactions();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error getTransactions:", error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan di server.' });
    }
};

export const createTransaction = async (req, res) => {
    try {
        const { amount, transaction_date, description, payment_method, category_id, type } = req.body;

        // Validasi Kategori
        const categoryType = await TransactionModel.getCategoryType(category_id);
        if (!categoryType) {
            return res.status(404).json({ success: false, message: 'Kategori tidak ditemukan!' });
        }

        // Validasi Keamanan Tipe Transaksi
        if (categoryType !== type) {
            return res.status(400).json({ success: false, message: 'Manipulasi data terdeteksi!' });
        }

        // Simpan ke Database
        await TransactionModel.createTransaction({ amount, transaction_date, description, payment_method, category_id, type });
        res.status(201).json({ success: true, message: 'Transaksi berhasil dicatat!' });

    } catch (error) {
        console.error("Error createTransaction:", error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan di server.' });
    }
};