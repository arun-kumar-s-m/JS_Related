import Samsung from '../Samsung.js';
export default class Samsung_Z1_Ultra extends Samsung{
    constructor(){
        super();
        this.setPhoneLogs([]);
        let log = this.constructObjectForLogger('Assembling components of Samsung Z1 Ultra phone');
        // this.setPhoneLogs(this.getPhoneLogs().push(log));
        this.setRAM(8);
        this.setOSVersion(12);
        this.setDeaultOsSize(1.2);
        this.setInternalMemory(512);
        this.setModelName('Samsung Z1 Ultra');
        this.setCustomOsSize(0.2);
        this.setAppRunningNow([]);
        console.log('DEBUG PRINT : ',this.getPhoneLogs());
        let temp = this.getPhoneLogs();
        temp.push(log);
        this.setPhoneLogs(temp);
        this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
    }
    directorView(){
        console.log('This is a Director View');
        console.log('You are recording using ultra wide lenses');
    }
}