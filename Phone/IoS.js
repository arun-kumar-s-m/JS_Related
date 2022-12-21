import Phone from '../Phone.js';
export default class IoS extends Phone{
    constructor(){
        super();
        this.setOSType('iOS');
        this.setDisplay('iPhone Display');
        this.setBrand('Apple');
    }
}