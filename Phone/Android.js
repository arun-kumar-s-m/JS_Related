// import Phone from '/Users/arunkumarsm/Documents/JS_Related/Phone.js';
import Phone from '../Phone.js';
export default class Android extends Phone{
    #custom_os;
    #custom_os_version;
    #custom_os_size;
    constructor(){
        super();
        this.setOSType('Android');
    }
    setCustomOs(os){
        this.#custom_os = os;
    }
    getCustomOs(){
        return this.#custom_os;
    }
    setCustomOsVersion(version){
        this.#custom_os_version = version;
    }
    getCustomOsVersion(){
        return this.#custom_os_version;
    }
    setCustomOsSize(size){
        this.#custom_os_size = size;
    }
    getCustomOsSize(){
        return this.#custom_os_size;
    }
    takePhoto(obj){
        console.log(obj.getModelName(),'is taking the photo!!!');
        console.log('........Taking Photo Smile Please ........');
    }
    takePhotoWithDelay(obj,x){
        setTimeout(this.takePhoto,x * 1000,obj);
    }
}