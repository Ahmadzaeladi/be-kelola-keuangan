import express from 'express';
import{getTransactions, createTransaction } from '../controllers/transaction.controller.js';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();

// authentication routes
router.post('/login', login);

// transaction routes
router.get('/transactions', getTransactions);
router.post('/transaction', createTransaction);

export default router;