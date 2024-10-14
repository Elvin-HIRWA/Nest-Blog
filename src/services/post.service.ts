import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dtos/create-post-dto';
import { Post } from 'src/model/post';
import { User } from 'src/model/user';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRep: Repository<Post>) { }
    @InjectRepository(User)
    private readonly user: Repository<User>

    // createPost(dto: CreatePostDto) {
    async createPost(createPostDto: CreatePostDto): Promise<Post> {
        const user = await this.user.findOne({ where: { id: createPostDto.userId } });

        if (!user) {
            throw new Error('User not found');
        }

        const post = this.postRep.create({
            ...createPostDto,
            user, // associate the User entity
        });

        return this.postRep.save(post);
    }
}

