import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment";

@Entity({ name: 'Reply' })
export class Reply {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => Comment, (comment) => comment.replies)
    comment: Comment

    @Column()
    commentId: number;

}