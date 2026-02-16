import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EslintFeature } from './schemas/eslint-feature.schema.js';
import { EslintFeaturesService } from './eslint-features.service.js';
import { EslintFeaturesController } from './eslint-features.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([EslintFeature])],
  controllers: [EslintFeaturesController],
  providers: [EslintFeaturesService],
  exports: [EslintFeaturesService],
})
export class EslintFeaturesModule {}
