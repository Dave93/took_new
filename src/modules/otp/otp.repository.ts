import { PaginationRequest } from '@libs/pagination';
import { EntityRepository, Repository } from 'typeorm';
import { OtpEntity } from './entities/otp.entity';

EntityRepository(OtpEntity);
export class OtpRepository extends Repository<OtpEntity> {}
