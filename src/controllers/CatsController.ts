import { EntityManager, FilterQuery } from "@mikro-orm/core";
import { FilterValue } from "@mikro-orm/core/typings";
import { BadRequestException, Body, Controller, DefaultValuePipe, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { Account } from "../../entities/Account";
import { Cat } from "../../entities/Cat";
import { CreateOrEditCatDto } from "../models/cat/CreateOrEditCatDto";
import { ParseStringOptionalPipe } from "../services/pipes/optionals/ParseStringOptionalPipe";
import { ParseUUIDOptionalPipe } from "../services/pipes/optionals/ParseUUIDOptionalPipe";

@Controller("api/cats")
export class CatsController {
    constructor(private readonly db: EntityManager) { }

    @Get()
    // api/cats
    // all the query parameters are optional.
    // ?term=meong1
    // &accountId=b02259ae-8eaf-411d-bf00-e8ba3374421b
    // &page=1
    // &perPage=1
    public async findByFilter(@Query("term", ParseStringOptionalPipe) term: string | null,
        @Query("accountId", ParseUUIDOptionalPipe) accountId: string | null,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query("perPage", new DefaultValuePipe(4), ParseIntPipe) perPage: number) {

        if (page < 1) {
            page = 1;
        }

        if (perPage < 1) {
            perPage = 1;
        }

        let filterQuery: FilterQuery<Cat> = {};

        if (term !== null) {
            filterQuery = {
                ...filterQuery,
                name: {
                    $like: `%${term.trim()}%`
                }
            };
        }

        if (accountId !== null) {
            filterQuery = {
                ...filterQuery,
                accountId: {
                    accountId: accountId
                }
            };
        }

        const [res, totalItems] = await this.db.findAndCount(Cat, filterQuery, {
            disableIdentityMap: true,
            populate: ["accountId"],

            orderBy: { name: "asc" },
            offset: Math.floor((page - 1) * perPage),
            limit: perPage
        });

        return {
            totalItems: totalItems,
            totalPages: Math.floor((totalItems + perPage - 1) / perPage),
            items: res.map(Q => {
                const account = Q.accountId as Account | null;

                return {
                    catId: Q.catId,
                    catName: Q.name,
                    accountName: account?.fullName
                };
            })
        };
    }

    @Post()
    public async insert(@Body() form: CreateOrEditCatDto) {
        const account = await this.db.findOne(Account, { accountId: form.accountId });

        if (account === null) {
            return new BadRequestException("Account doesn't exist");
        }

        const existingItem = await this.db.findOne(Cat, { name: form.name });

        if (existingItem !== null) {
            return new BadRequestException("Cat with the same name already exist.");
        }

        const cat = new Cat();
        cat.accountId = account;
        cat.name = form.name;

        await this.db.persistAndFlush(cat);

        return true;
    }

    @Get(":id")
    // Example: api/cats/1
    public async findById(@Param("id", ParseIntPipe) id: number) {
        const res = await this.db.findOne(Cat, { catId: id });

        if (res === null) {
            return new NotFoundException();
        }

        return res;
    }
}
