import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from './entities/post.entity';
import { CreatePostDto, EditPostDto } from './dtos';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async getMany() {
    return await this.postRepository.find();
  }

  async getOne(id: object) {
    const post = await this.postRepository.findOneBy(id);
    if (!post) throw new NotFoundException();

    return post;
  }

  async createOne(dto: CreatePostDto) {
    const post = this.postRepository.create(dto as any);
    return await this.postRepository.save(post);
  }

  async editOne(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOneBy({ id });

    if (!post) throw new NotFoundException('Post does not exist');

    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
