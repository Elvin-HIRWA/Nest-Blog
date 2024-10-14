import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";

@Entity({ name: 'Post' })
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    snippet: string

    @Column()
    description: string

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[]

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @Column()
    userId: number;
}