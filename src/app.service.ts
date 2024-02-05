import { Injectable, NotFoundException } from '@nestjs/common';
import { UserBalanceDto } from './types/userBalance.dto';
import { TransactionService } from './transactionsAPI/transactions.service';
import { TransactionType } from './transactionsAPI/transactionType.enum';
import { PayoutDto } from './types/payout.dto';
import {
  addToBalance,
  calculateUserBalance,
} from './transactionsAPI/calculations';

@Injectable()
export class AppService {
  constructor(private readonly transactionService: TransactionService) {}

  async getUserBalance(userId: string): Promise<UserBalanceDto> {
    const userExists = await this.transactionService.goesUserExist(userId);
    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    const userTransactions =
      await this.transactionService.getUserTransactions(userId);
    const userBalance = new UserBalanceDto(userId);

    userTransactions.forEach(({ type, amount }) => {
      addToBalance(userBalance, type, amount);
      calculateUserBalance(userBalance);
    });

    return userBalance;
  }

  async getPayouts(): Promise<PayoutDto[]> {
    const allPayouts = await this.transactionService.getTransactionByType(
      TransactionType.PAYOUT,
    );
    const payouts = {};

    allPayouts.forEach(
      ({ userId, amount }) =>
        (payouts[userId] = (payouts?.[userId] ?? 0) + amount),
    );

    return Object.keys(payouts).map((userId) => {
      return new PayoutDto(userId, payouts[userId]);
    });
  }
}
