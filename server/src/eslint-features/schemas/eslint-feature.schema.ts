import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Severity {
  ERROR = 'error',
  WARN = 'warn',
  OFF = 'off',
}

@Entity('eslint_features')
export class EslintFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'text', default: Severity.ERROR })
  severity: Severity;
}
