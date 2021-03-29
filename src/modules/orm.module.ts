import { TypeOrmModule } from '@nestjs/typeorm';
import {n8configs} from '@djorellanab/n8-configuration';
import {Entities} from '@djorellanab/n8-orm';

export default TypeOrmModule.forRoot({
    cli: n8configs.databaseConfig.cli,
    logging: n8configs.databaseConfig.logging,
    migrations: n8configs.databaseConfig.migrations,
    subscribers: n8configs.databaseConfig.subscribers,
    type: 'postgres',
    host: n8configs.databaseConfig.host,
    port: n8configs.databaseConfig.port,
    username: n8configs.databaseConfig.username,
    password: n8configs.databaseConfig.password,
    database: n8configs.databaseConfig.database,
    entities: [Entities.Employee, Entities.EmployeeType, Entities.Shop, Entities.ShopEmployee],
    synchronize: true
  });