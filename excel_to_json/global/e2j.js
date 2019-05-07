const convertExcel = require('excel-as-json').processFile;
const options = {
  "sheet":'sheet2',
  "isColOriented": true,
  "omitEmtpyFields": true
}
convertExcel('global_lang.xlsx', 'motion.json', options, (err, data) => {
  console.log("err", err)
  console.log("data", data)
});