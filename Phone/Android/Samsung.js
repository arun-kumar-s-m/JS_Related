import Android from '../Android.js';
export default class Samsung extends Android{
    constructor(){
        super();
        this.setBrand('Samsung');
        this.setDisplay('Samsung Display');
        this.setCustomOs('One UI');
        this.setCustomOsVersion(7);
    }
    samsungDeX(){
        console.log('Operating your smartphone with a keyboard, mouse, and computer monitor');
    }
}