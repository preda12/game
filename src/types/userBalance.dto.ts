import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserBalanceDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  balance: number;

  @IsNumber()
  earned: number;

  @IsNumber()
  spent: number;

  @IsNumber()
  payout: number;

  @IsNumber()
  paidOut: number;

  constructor(userId: string) {
    this.userId = userId;

    this.balance = 0;
    this.earned = 0;
    this.spent = 0;
    this.payout = 0;
    this.paidOut = 0;
  }
}
