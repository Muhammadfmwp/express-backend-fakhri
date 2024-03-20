import db from '../config/database';
import helper from '../config/helper';
import config from '../config/config'

async function getMultiple(page:number = 1){
  const offset:number = helper.getOffset(page, config.listPerPage);
  const rows: number = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`, []
  );
  const data:any = helper.emptyOrRows(rows);
  const meta:any = {page};

  return {
    data,
    meta
  }
}

export {getMultiple};