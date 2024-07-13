import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CardsService } from "./cards.service";

@swagger.ApiTags("cards")
@common.Controller("cards")
export class CardsController {
  constructor(protected readonly service: CardsService) {}
}
