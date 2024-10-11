import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    first_name : string

    @Column()
    last_name : string

    @Column()
    password : string

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}