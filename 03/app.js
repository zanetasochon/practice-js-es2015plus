import {files} from './data.js';


const result = () => {
calculateUnits()
    }

    const calculateUnits = () => {
        let unitsSum = 0;
           
     files.forEach(el => {
        const size = el.size.length
        const unit = el.size.unit

    if(!unit){
        unitsSum += size
    }

    if(unit === 'KB'){
    unitsSum += size * 1024   

    } 

    if(unit === 'MB'){
        unitsSum += size * 1024 * 1024
    }

    if(unit === 'GB') {
        unitsSum += size * 1024 * 1024 * 1024
    }
  });
   console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki to ${unitsSum}`); }



result()