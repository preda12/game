import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Transaction } from 'src/types/transaction.interface';
import { transactions } from './transactions';
import { TransactionType } from 'src/transactionsAPI/transactionType.enum';
import * as NodeCache from 'node-cache';

@Injectable()
export class TransactionService {
  private cache: NodeCache;
  constructor(private readonly httpService: HttpService) {
    this.cache = new NodeCache({ stdTTL: 120 });
  }

  public getAllTransactions = async (): Promise<Transaction[]> => {
    let cachedTransactions = this.cache.get('transactions');
    if (!cachedTransactions) {
      this.cache.set('transactions', transactions, 120);
      cachedTransactions = transactions;
    }
    return Promise.resolve(cachedTransactions as Transaction[]);
  };

  public goesUserExist = async (userId: string): Promise<any> => {
    const allUsers = (await this.getAllTransactions()).reduce(
      (users, transaction) => {
        return {
          ...users,
          [transaction.userId]: true,
        };
      },
      {},
    );
    return !!Object.keys(allUsers).find(
      (existingUserId) => existingUserId === userId,
    );
  };

  public getUserTransactions = async (
    userId: string,
  ): Promise<Transaction[]> => {
    const allTransactions = await this.getAllTransactions();

    const userTransactions = allTransactions.filter(
      (transaction: any) => transaction.userId === userId,
    );

    return Promise.resolve(userTransactions);
  };

  public getTransactionByType = async (
    transactionType: TransactionType,
  ): Promise<Transaction[]> => {
    const allTransactions = await this.getAllTransactions();

    const transactions = allTransactions.filter(
      (transaction: Transaction) => transaction.type === transactionType,
    );

    return Promise.resolve(transactions);
  };
}
