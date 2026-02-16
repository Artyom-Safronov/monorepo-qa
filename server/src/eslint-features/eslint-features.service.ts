import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EslintFeature } from './schemas/eslint-feature.schema.js';
import { CreateEslintFeatureDto } from './dto/create-eslint-feature.dto.js';
import { UpdateEslintFeatureDto } from './dto/update-eslint-feature.dto.js';

@Injectable()
export class EslintFeaturesService {
  constructor(
    @InjectRepository(EslintFeature)
    private readonly repo: Repository<EslintFeature>,
  ) {}

  create(dto: CreateEslintFeatureDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const feature = await this.repo.findOneBy({ id });
    if (!feature) {
      throw new NotFoundException(`EslintFeature #${id} not found`);
    }
    return feature;
  }

  async update(id: number, dto: UpdateEslintFeatureDto) {
    const feature = await this.findOne(id);
    Object.assign(feature, dto);
    return this.repo.save(feature);
  }

  async remove(id: number) {
    const feature = await this.findOne(id);
    return this.repo.remove(feature);
  }
}
