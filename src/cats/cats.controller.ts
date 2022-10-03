import { Body, Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return "This action adds a new cat";
    }

    @Get()
    findAll(@Req() request: Request): string {
        return "This action returns all cats";
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id)
        return `This action returns a #${params.id} cat`;
    }
}
