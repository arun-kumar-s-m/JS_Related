import Android from '../Phone/Android.js';
import {oneplus8,iphone14,samsung_Z1_Ultra} from '../Project.js';
export function print(obj){
    console.log('Model Name - ',obj.getModelName());
    console.log('Internal Memory - ',obj.getInternalMemory(),' ::: OS Version - ',obj.getOSVersion(),'::: Display - ',obj.getDisplay(),'::: OS Type - ',obj.getOSType(),'::: RAM - ',obj.getRAM(),'::: Brand - ',obj.getBrand());
    if(obj instanceof Android){
        console.log('Custom OS Name - ',obj.getCustomOs()+' Custom OS Version - '+obj.getCustomOsVersion());
    }
    console.log('Available RAM now : ',obj.getAvailableRAM(),'GB');
}

export function cacheDecorator(func){
    let cache = new Map();
    return function(x){
        let valueOfObject = x.constructor.name;
        if(cache.has(valueOfObject)){
            console.log('G E T T I N G   V A L U E   F R O M   C A C H E');
            return cache.get(valueOfObject);
        }
        // console.log(x.constructor.name);
        console.log(valueOfObject);
        console.log('G E T T I N G   V A L U E   F R O M   M A I N  F U N C T I O N');
        let res = func(x);
        cache.set(valueOfObject,res);
        return res;
    }
}

export function runningapps(){
    console.log('------------------------');
    let oneplus_running_apps = oneplus8.getAppRunningNow();
    console.log('Apps running in OnePlus phone : ',oneplus_running_apps);
    let iphone_running_apps = iphone14.getAppRunningNow();
    console.log('Apps running in iPhone 14 phone : ',iphone_running_apps);
    let samsung_running_apps = samsung_Z1_Ultra.getAppRunningNow();
    console.log('Apps running in Samsung phone : ',samsung_running_apps);
    console.log('------------------------');
    return oneplus_running_apps.length > 0 || iphone_running_apps.length > 0 || samsung_running_apps.length > 0;
}