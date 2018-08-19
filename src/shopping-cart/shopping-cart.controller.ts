import { Controller, Post } from '@nestjs/common';

@Controller('cart')
export class ShoppingCartController {

    @Post()
    async addItem() {
    return 'This is a fake service :D';
  }
}
