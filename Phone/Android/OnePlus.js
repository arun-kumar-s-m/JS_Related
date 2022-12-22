import Android from '../Android.js';
export default class OnePlus extends Android{
    constructor(){
        super();
        this.setBrand('OnePlus');
        this.setCustomOs('Oxygen');
        this.setDisplay('OnePlus Display');
    }
    vibrantDisplay(){
        console.log('Oneplus vibrant display');
    }

}

// export default class similar{
//     print(){
//         console.log('HI ARUN...!!!');
//     }
// }