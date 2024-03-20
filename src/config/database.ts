import mysql, {Connection, Pool, PoolOptions} from 'mysql2/promise';
import config from './config';

async function query(sql:any, params:any): Promise<any> {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

export default { query };