import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class PayoutDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  payoutAmount: number;

  constructor(userId: string, payoutAmount: number) {
    this.userId = userId;
    this.payoutAmount = payoutAmount;
  }
}
