import { EntityManager } from "@mikro-orm/core";
import { Controller, DefaultValuePipe, Get, NotFoundException, Param, ParseIntPipe, Query } from "@nestjs/common";
import { Cat } from "../../entities/Cat";
import { ParseStringPipe } from "../services/pipes/ParseStringPipe";

@Controller("api/cats")
export class CatsController {
    constructor(private readonly db: EntityManager) { }

    @Get()
    // Example: localhost:3000/api/cats?q=pus
    public async getCats(@Query("q", new DefaultValuePipe(""), ParseStringPipe) query: string) {
        // Normalize search query
        query = query.trim().toLowerCase();


        // More example at:
        // 1. https://mikro-orm.io/docs/entity-manager
        // 2. https://github.com/mikro-orm/nestjs-realworld-example-app
        const res = await this.db.find(Cat, {
            name: {
                $like: `%${query}%`
            }
        }, {
            orderBy: { catId: "desc" }
        });

        return res;
    }

    @Get(":id")
    // Example: localhost:3000/api/cats/1
    public async getCat(@Param("id", ParseIntPipe) id: number) {
        const res = await this.db.findOne(Cat, { catId: id });

        if (res === null) {
            return new NotFoundException();
        }

        return res;
    }
}
