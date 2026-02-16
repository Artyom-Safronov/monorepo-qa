import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Project } from './schemas/project.schema.js';
import { EslintFeature } from '../eslint-features/schemas/eslint-feature.schema.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
    @InjectRepository(EslintFeature)
    private readonly featureRepo: Repository<EslintFeature>,
  ) {}

  async create(dto: CreateProjectDto) {
    const features = dto.features?.length
      ? await this.featureRepo.findBy({ id: In(dto.features) })
      : [];
    const project = this.projectRepo.create({
      name: dto.name,
      type: dto.type,
      features,
    });
    return this.projectRepo.save(project);
  }

  findAll() {
    return this.projectRepo.find({ relations: ['features'] });
  }

  async findOne(id: number) {
    const project = await this.projectRepo.findOne({
      where: { id },
      relations: ['features'],
    });
    if (!project) {
      throw new NotFoundException(`Project #${id} not found`);
    }
    return project;
  }

  async update(id: number, dto: UpdateProjectDto) {
    const project = await this.findOne(id);
    if (dto.name !== undefined) project.name = dto.name;
    if (dto.type !== undefined) project.type = dto.type;
    if (dto.features !== undefined) {
      project.features = dto.features.length
        ? await this.featureRepo.findBy({ id: In(dto.features) })
        : [];
    }
    return this.projectRepo.save(project);
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    return this.projectRepo.remove(project);
  }
}
