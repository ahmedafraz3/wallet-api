import express from 'express';
import { sql } from '../config/db.js';
import {getSummaryByUserId , getTransactionsByUserId, createTransaction, deleteTransaction} from '../controllers/transactionController.js'
const router = express.Router()

router.get('/:userId', getTransactionsByUserId)
router.get('/summary/:userId', getSummaryByUserId )


router.post("/", createTransaction )

router.delete('/:id', deleteTransaction )

export default router