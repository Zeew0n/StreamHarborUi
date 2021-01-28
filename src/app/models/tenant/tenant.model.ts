import { BaseEntity } from '../base-entity';

export class TenantModel extends BaseEntity {
    tenantId: string;
    organizationName: string;
    organizationEmail: string;
    subDomain: string;
}