import { ApiProperty } from '@nestjs/swagger';
import { ProjectType } from '../schemas/project.schema.js';

export class CreateProjectDto {
  @ApiProperty({ example: 'my-app' })
  name: string;

  @ApiProperty({ enum: ProjectType, example: ProjectType.LEGACY })
  type: ProjectType;

  @ApiProperty({
    type: [Number],
    description: 'Array of EslintFeature IDs',
    required: false,
    example: [],
  })
  features?: number[];
}
