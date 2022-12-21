import OnePlus from '../OnePlus.js';
class OnePlus10 extends OnePlus{
    // #ram = 12;
    constructor(){
        super();
        this.setRAM(12);
        this.setOSVersion(13);
        this.setCustomOsVersion(11);
        this.setInternalMemory(512);
        this.setDeaultOsSize(1.2);
        this.setCustomOsSize(0.4);
        this.setAppRunningNow([]);
        this.setModelName('OnePlus 10');
        this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
    }
}