import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EslintFeaturesService } from './eslint-features.service.js';
import { CreateEslintFeatureDto } from './dto/create-eslint-feature.dto.js';
import { UpdateEslintFeatureDto } from './dto/update-eslint-feature.dto.js';

@ApiTags('eslint-features')
@Controller('eslint-features')
export class EslintFeaturesController {
  constructor(private readonly eslintFeaturesService: EslintFeaturesService) {}

  @Post()
  @ApiOperation({ summary: 'Create an ESLint feature' })
  create(@Body() dto: CreateEslintFeatureDto) {
    return this.eslintFeaturesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all ESLint features' })
  findAll() {
    return this.eslintFeaturesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an ESLint feature by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eslintFeaturesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an ESLint feature' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEslintFeatureDto) {
    return this.eslintFeaturesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an ESLint feature' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eslintFeaturesService.remove(id);
  }
}
