import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDto } from 'src/dtos/create-post-dto';
import { PostService } from 'src/services/post.service';

@Controller('posts')
export class PostController {
    constructor(@Inject('POST_SERVICE') private readonly service: PostService) { }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() dto: CreatePostDto) {
        return this.service.createPost(dto)
    }

    @Get('')
    getAllPosts(){
        return this.service.getAllPosts();
    }
}
