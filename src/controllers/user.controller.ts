import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user-dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {

    constructor(@Inject('USER_SERVICE') private readonly service: UserService) { }


    @Post('/create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() dto: CreateUserDto) {
        return this.service.createUser(dto)
    }

    @Get('')
    getUsers(){
        return this.service.getUsers()
    }
}
