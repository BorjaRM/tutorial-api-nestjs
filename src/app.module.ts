import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ShoppingCartModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
