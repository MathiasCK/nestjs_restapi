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
  findAll(): Item[] {
    return this.itemsService.findall();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: ItemDto): string {
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Body() item: ItemDto, @Param('id') id): string {
    return this.itemsService.update(item, id);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return this.itemsService.delete(id);
  }
}
