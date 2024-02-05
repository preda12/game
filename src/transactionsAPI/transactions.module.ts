import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TransactionService } from './transactions.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
