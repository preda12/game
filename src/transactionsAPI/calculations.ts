import { UserBalanceDto } from 'src/types/userBalance.dto';
import { TransactionType } from 'src/transactionsAPI/transactionType.enum';

export const addToBalance = (
  userBalance: UserBalanceDto,
  type: TransactionType,
  amount: number,
): any => {
  switch (type) {
    case TransactionType.EARNED:
      userBalance.earned += amount;
      break;
    case TransactionType.SPENT:
      userBalance.spent += amount;
      break;
    case TransactionType.PAYOUT:
      userBalance.payout += amount;
      break;
    case TransactionType.PAID_OUT:
      userBalance.paidOut += amount;
      break;
    default:
      break;
  }

  userBalance.balance =
    userBalance.earned -
    userBalance.spent -
    userBalance.payout -
    userBalance.paidOut;
};

export const calculateUserBalance = (userBalace: UserBalanceDto): number => {
  return (
    userBalace.earned -
    userBalace.spent -
    userBalace.payout -
    userBalace.paidOut
  );
};
