import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDto } from './items.dto';
import { ItemsService } from './items.service';
import { Item } from './items.types';

@Controller('/api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findall();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() item: ItemDto): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Put(':id')
  async update(@Body() item: ItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(item, id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
