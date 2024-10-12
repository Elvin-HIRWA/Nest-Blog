import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user';
import { Post } from './model/post';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User, Post]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User, Post],
        synchronize: true,
      }),
      inject: [ConfigService]

    }),
  ],
  controllers: [UserController, PostController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService
    }, {
      provide: 'POST_SERVICE',
      useClass: PostService
    }
  ],
})
export class AppModule { }
