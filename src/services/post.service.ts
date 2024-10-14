import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dtos/create-post-dto';
import { PostResponseDto } from 'src/interfaces/post-response-dto';
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

    async getAllPosts(): Promise<PostResponseDto[]> {
        const posts = await this.postRep.find({
            relations: ['user', 'comments', 'comments.replies'], // This will join the User entity
        });

        console.log(posts);


        // Format the posts as required
        return posts.map(post => ({
            title: post.title,
            snippet: post.snippet,
            description: post.description,
            owner: {
                first_name: post.user.first_name,
                last_name: post.user.last_name,
                isActive: post.user.isActive,
            },
            comments: post.comments.map(comment => ({
                content: comment.title,
                replies: comment.replies.map(reply => ({
                    content: reply.title,
                }))
            }))
        }));
    }
}

