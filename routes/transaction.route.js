// routes/transaction.route.js
import express from 'express';
import { getTransactions, createTransaction } from '../controllers/transaction.controller.js';

const router = express.Router();

router.get('/', getTransactions);s
router.post('/', createTransaction);

export default router;