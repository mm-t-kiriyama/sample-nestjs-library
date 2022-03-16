import { Module } from '@nestjs/common';
import { PrefecturesService } from './prefectures.service';

@Module({
  providers: [PrefecturesService],
  exports: [PrefecturesService],
})
export class PrefecturesModule {}
