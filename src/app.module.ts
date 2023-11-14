import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { PhoneModule } from './phone/phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneEntity } from './phone/phone.entity';

@Module({
  imports: [
    UserModule, 
    ClientModule, 
    PhoneModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'tap',
      entities: [PhoneEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
