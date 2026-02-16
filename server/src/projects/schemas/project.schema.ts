import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { EslintFeature } from '../../eslint-features/schemas/eslint-feature.schema.js';

export enum ProjectType {
  LEGACY = 'legacy',
  TRANSITIONAL = 'transitional',
  MODERN = 'modern',
}

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', default: ProjectType.LEGACY })
  type: ProjectType;

  @ManyToMany(() => EslintFeature, { eager: true })
  @JoinTable()
  features: EslintFeature[];
}
