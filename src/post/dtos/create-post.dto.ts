import { PostCategory } from '../enums';
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { EnumToString } from '../../helpers/enumToString';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsEnum(PostCategory, {
    message: ` option invalid, the valid option are ${EnumToString(
      PostCategory,
    )} `,
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}
