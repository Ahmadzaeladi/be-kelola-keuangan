import express from 'express';
// Nantinya kita akan mengimpor transactionRoutes di sini
// import transactionRoutes from './transactionRoutes.js';

const router = express.Router();

// Test router
router.use('/transactions', transactionRoutes);

export default router;