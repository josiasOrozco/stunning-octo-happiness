import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dtos';


@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'OK';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return {
      message: 'getOne',
    };
  }
  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditPostDto) {
    return dto;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {}
}