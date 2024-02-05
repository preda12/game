import { TransactionType } from 'src/transactionsAPI/transactionType.enum';

export interface Transaction {
  id: string;
  userId: string;
  createdAt: Date;
  type: TransactionType;
  amount: number;
}
