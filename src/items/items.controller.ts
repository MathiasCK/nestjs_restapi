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

@Controller('/api/items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item id: ${id}`;
  }

  @Post()
  create(@Body() item: ItemDto): string {
    return `Creating item: ${item.name}. Description: ${item.description}. Qty: ${item.qty}`;
  }

  @Put(':id')
  update(@Body() item: ItemDto, @Param('id') id): string {
    return `Update id: ${id} - Name: ${item.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item id: ${id} deleted`;
  }
}
