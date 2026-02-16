import { PartialType } from '@nestjs/swagger';
import { CreateEslintFeatureDto } from './create-eslint-feature.dto.js';

export class UpdateEslintFeatureDto extends PartialType(CreateEslintFeatureDto) {}
