import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    snippet: string

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.posts)
    user: User
}