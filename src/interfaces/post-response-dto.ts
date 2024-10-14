import { PostOwnerDto } from "./post-owner-dto";

export interface PostResponseDto {
    title: string;
    snippet: string;
    description: string;
    owner: PostOwnerDto;
}