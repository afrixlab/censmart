import * as graphql from "@nestjs/graphql";
import { CardsService } from "./cards.service";

export class CardsResolver {
  constructor(protected readonly service: CardsService) {}
}
