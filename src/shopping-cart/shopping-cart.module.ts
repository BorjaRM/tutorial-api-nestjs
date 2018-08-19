import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';

@Module({
  controllers: [ShoppingCartController],
})
export class ShoppingCartModule {}
