import { ApiProperty } from '@nestjs/swagger';
import { Severity } from '../schemas/eslint-feature.schema.js';

export class CreateEslintFeatureDto {
  @ApiProperty({ example: 'no-var' })
  name: string;

  @ApiProperty({ example: 'code-quality' })
  category: string;

  @ApiProperty({ example: 'Require let or const instead of var', required: false })
  description?: string;

  @ApiProperty({ enum: Severity, example: Severity.ERROR })
  severity: Severity;
}
