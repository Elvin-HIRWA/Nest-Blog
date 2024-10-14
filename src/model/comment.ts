import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";
import { Reply } from "./reply";

@Entity({ name: 'Comment' })
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post

    @OneToMany(() => Reply, (reply) => reply.comment)
    replies: Reply[]

    @Column()
    postId: number;

}