function getOffset(currentPage:number = 1, listPerPage: number):number {
    return (currentPage - 1) * listPerPage;
  }
  
  function emptyOrRows(rows:number) {
    if (!rows) {
      return [];
    }
    return rows;
  }
  
  export default {getOffset,emptyOrRows};