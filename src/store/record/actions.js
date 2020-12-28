import * as types from './types'
import * as xlsx from 'xlsx'

export default {
  [types.SET_RESULT] ({commit}, payload) {
    const file = payload.target.files[0]
    // const fileName = file.name
    const reader = new FileReader()
    let tmpResult = {}
    reader.onload = (e) => {
      let data = e.target.result
      data = new Uint8Array(data)
      let excelFile = xlsx.read(data, { type: 'array' })
      excelFile.SheetNames.forEach(function (sheetName) {
        const roa = xlsx.utils.sheet_to_json(excelFile.Sheets[sheetName], { header: 1 })
        if (roa.length) tmpResult[sheetName] = roa
      })
      commit(types.MU_RESULT, tmpResult.Sheet1)
    }
    reader.readAsArrayBuffer(file)
  }
}
