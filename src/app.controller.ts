import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PayoutDto } from './types/payout.dto';
import { UserBalanceDto } from './types/userBalance.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('transactions')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Get('user/:userId')
  getUserBalance(@Param('userId') userId: string): Promise<UserBalanceDto> {
    return this.appService.getUserBalance(userId);
  }

  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Get('payouts')
  getPayouts(): Promise<PayoutDto[]> {
    return this.appService.getPayouts();
  }
}
