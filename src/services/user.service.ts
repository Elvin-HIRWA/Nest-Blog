import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user-dto';
import { User } from 'src/model/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly user: Repository<User>) { }

    createUser(dto: CreateUserDto) {
        return this.user.save(
            {
                "first_name": dto.first_name,
                "last_name": dto.last_name,
                "password": dto.password,
                "isActive": dto.isActive
            }
        );
    }

    getUsers() {
        return this.user.find()
    }
}
