import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './api/items.interface';
import { ValidationPipe } from '../shared/validation.pipe';
import { ItemsDto } from './dto/items.dto';

@Controller('items')
export class ItemsController {

    // private readonly makes this instance unchangeable and only visible inside this class
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Items[]> {
      return this.itemsService.findAll();
    }

    /*@Post()
    async create(@Body() item: Items) {
        this.itemsService.create(item);
    }*/

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() itemsDto: ItemsDto) {
        this.itemsService.create(itemsDto);
    }
}
