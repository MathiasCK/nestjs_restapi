import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './items.types';
import { ItemDto } from './items.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findall(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: ItemDto): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async update(item: ItemDto, id: string): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }
}
