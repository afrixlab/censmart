import { Module } from "@nestjs/common";
import { CardsService } from "./cards.service";
import { CardsController } from "./cards.controller";
import { CardsResolver } from "./cards.resolver";

@Module({
  controllers: [CardsController],
  providers: [CardsService, CardsResolver],
  exports: [CardsService],
})
export class CardsModule {}
