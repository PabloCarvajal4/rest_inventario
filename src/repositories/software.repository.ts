import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Software, SoftwareRelations} from '../models';

export class SoftwareRepository extends DefaultCrudRepository<
  Software,
  typeof Software.prototype.id,
  SoftwareRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Software, dataSource);
  }
}
