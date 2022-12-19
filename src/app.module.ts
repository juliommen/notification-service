import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { MessaginModule } from './infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessaginModule],
})
export class AppModule {}
