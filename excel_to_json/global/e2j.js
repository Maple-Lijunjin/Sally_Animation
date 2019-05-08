const convertExcel = require('excel-as-json').processFile;
const options = {
  "sheet":'sheet1',
  "isColOriented": true,
  "omitEmtpyFields": true
}
convertExcel('global_lang.xlsx', 'total.json', options, (err, data) => {
  console.log("err", err)
  console.log("data", data)
});