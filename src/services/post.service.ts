import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dtos/create-post-dto';
import { Post } from 'src/model/post';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly post: Repository<Post>) { }

    createPost(dto: CreatePostDto) {
        return this.post.save({
            title: dto.title,
            snippet: dto.snippet,
            description: dto.description,
            userId: dto.userId
        });
    }
}
