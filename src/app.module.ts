import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user';
import { Post } from './model/post';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Post]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33980,
      username: 'user',
      password: 'password',
      database: 'nest',
      entities: [User, Post],
      synchronize: true,
    }),
  ],
  controllers: [UserController, PostController],
  providers: [PostService, {
    provide: 'USER_SERVICE',
    useClass: UserService
  }],
})
export class AppModule { }
