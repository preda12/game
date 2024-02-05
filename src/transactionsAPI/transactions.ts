import { Transaction } from 'src/types/transaction.interface';
import { TransactionType } from 'src/transactionsAPI/transactionType.enum';

enum Users {
  USER_1 = '1',
  USER_2 = '2',
}

export const transactions: Transaction[] = [
  {
    id: '1',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.EARNED,
    amount: 5000,
  },
  {
    id: '2',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.SPENT,
    amount: 100,
  },
  {
    id: '3',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.PAYOUT,
    amount: 100,
  },
  {
    id: '4',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.PAYOUT,
    amount: 200,
  },
  {
    id: '5',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.PAYOUT,
    amount: 300,
  },
  {
    id: '6',
    userId: Users.USER_1,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.PAID_OUT,
    amount: 500,
  },

  {
    id: '7',
    userId: Users.USER_2,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.EARNED,
    amount: 5000,
  },
  {
    id: '8',
    userId: Users.USER_2,
    createdAt: new Date('2021-01-01'),
    type: TransactionType.PAYOUT,
    amount: 500,
  },
];
