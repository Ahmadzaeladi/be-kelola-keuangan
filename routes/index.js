import express from 'express';
// Nantinya kita akan mengimpor transactionRoutes di sini
// import transactionRoutes from './transactionRoutes.js';

const router = express.Router();

// Test router
router.get('/ping', (req, res) => {
    res.json({ message: "Router API terhubung!" });
});

export default router;