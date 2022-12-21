import IoS from '../IoS.js';
class iPhone13 extends IoS{
    constructor(){
        this.setOSVersion(14);
        this.setInternalMemory(256);
        this.setRAM(3);
        this.setModelName('iPhone 13');
        this.setDeaultOsSize(0.5);
        this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize());
    }
}