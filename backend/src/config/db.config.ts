import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'mouse.db.elephantsql.com',
  port: 5432,
  username: 'ttlioqtx',
  password: 'yvKklW8BIbFOMrh-NzLRD13imkW7ZBC-',
  database: 'ttlioqtx',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
