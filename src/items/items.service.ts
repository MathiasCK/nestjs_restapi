import { Injectable } from '@nestjs/common';
import { Item } from './items.types';
import { ItemDto } from './items.dto';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1111111',
      name: 'Item 1',
      description: 'Description 1',
      qty: 1,
    },
    {
      id: '2222222',
      name: 'Item 2',
      description: 'Description 2',
      qty: 2,
    },
  ];

  findall(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: ItemDto): string {
    return `Creating item: ${item.name}. Description: ${item.description}. Qty: ${item.qty}`;
  }

  update(item: ItemDto, id: string): string {
    return `Update id: ${id} - Name: ${item.name}`;
  }

  delete(id: string): string {
    return `Item id: ${id} deleted`;
  }
}
