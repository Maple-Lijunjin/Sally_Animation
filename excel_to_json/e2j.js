const convertExcel = require('excel-as-json').processFile;
const options = {
  "sheet":'sheet1',
  "isColOriented": true,
  "omitEmtpyFields": true
}
convertExcel('global_lang.xlsx', 'motion.json', options, (err, data) => {
  console.log("err", err)
  console.log("data", data)
  //打印一级二级目录

  // const result = [];
  // for(let i in data) {
  //   if(typeof data[i] == 'object') {
  //     result.push([i]);
  //     for(let j in data[i]) {
  //       if(typeof data[i][j] == 'object') {
  //         result.push([j]);
  //       } else {
  //         result.push([j, data[i][j]]);
  //       }
  //     }
  //   } else {
  //     result.push([i, data[i]]);
  //   }
  // }
  // console.log("result", result)
});