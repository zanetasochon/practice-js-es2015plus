import Programmer from './classes/Programmer';
import { Mid } from './classes/Mid';
import { Senior } from './classes/Senior';
import { Junior } from './classes/Junior';


const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const seniorityArr = [Junior, Mid, Senior]
console.log(seniorityArr);

seniorityArr.forEach(seniority => {
    const programmer = new seniority( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(`${seniority.name}: ${time}h`);
})



