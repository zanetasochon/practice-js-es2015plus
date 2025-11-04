import {files} from './data.js';


const result = () => {
calculateUnits()
    }

    const calculateUnits = () => {
        const unitsMap = {"B": 1024 ** 0, "KB": 1024 ** 1, "MB": 1024 ** 2, "GB": 1024 ** 3, "TB": 1024 ** 4, "PB": 1024 ** 5, "EB": 1024 ** 6, "ZB": 1024 ** 7, "YB": 1024 ** 8}
            
        let unitsSum = 0;
           
     files.forEach(el => {
        const size = el.size.length
        const unit = el.size.unit
   

       unitsSum += unit ? size * unitsMap[unit] : size * unitsMap.B
  });
   console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki to ${unitsSum}`); }



result()