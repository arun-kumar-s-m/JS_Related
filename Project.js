class Phone{
    #internal_memory_in_gb;
    #os_version;
    #display;
    #os_type;
    #ram_in_gb;
    #brand;
    #model_name;
    #avaiable_RAM;
    #default_OS_Size_in_GB;
    #apps_running_now;
    #app_details;
    #phone_logs = [];
    setInternalMemory(memory){
        this.#internal_memory_in_gb = memory;
    }
    getInternalMemory(){
        return this.#internal_memory_in_gb;
    }
    setPhoneLogs(obj){
        this.#phone_logs = obj;
    }
    getPhoneLogs(){
        return this.#phone_logs;
    }
    setAppDetails(obj){
        this.#app_details = obj;
    }
    getAppDetails(){
        return this.#app_details;
    }
    setAppRunningNow(obj){
        this.#apps_running_now = obj;
    }
    getAppRunningNow(){
        return this.#apps_running_now;
    }
    setDeaultOsSize(size){
        this.#default_OS_Size_in_GB = size;
    }
    getDeaultOsSize(){
        return this.#default_OS_Size_in_GB;
    }
    setOSVersion(version){
        this.#os_version = version;
    }
    getOSVersion(){
        return this.#os_version;
    }
    setDisplay(display){
        this.#display = display;
    }
    getDisplay(){
      return this.#display;
    }
    setOSType(type){
        this.#os_type = type;
    }
    getOSType(){
      return this.#os_type;
    }
    setRAM(ram){
        this.#ram_in_gb = ram;
    }
    getRAM(){
        return this.#ram_in_gb;
    }
    setOSVersion(os){
        this.#os_version = os;
    }
    getOSVersion(){
        return this.#os_version;
    }
    setBrand(brand){
        this.#brand = brand;
    }
    getBrand(){
        return this.#brand;
    }
    setModelName(name){
        this.#model_name = name;
    }
    getModelName(){
        return this.#model_name;
    }
    setAvailableRAM(size){
        this.#avaiable_RAM = size;
    }
    getAvailableRAM(){
        return this.#avaiable_RAM;
    }
    openapp(appname){
        let obj = this.constructObjectForLogger(`User requesting to open ${appname} app`);
        let temp = this.getPhoneLogs();
        temp.push(obj)
        this.setPhoneLogs(temp);
        console.log('#############Open App Logger',this,new Date());
        try{
            let app_present_now = this.getAppDetails();
            if(appname in app_present_now){
            let app_present_now = this.getAppDetails();
                let ram_size_now = this.getAvailableRAM();
                console.log('Available RAM before adding app : ',ram_size_now);
                this.setAvailableRAM(ram_size_now - app_present_now[appname].size_consum_in_ram_in_gb);
                this.getAppRunningNow().push(appname);
                this.setAppRunningNow(this.getAppRunningNow());
                console.log('Available RAM after adding app : ',this.getAvailableRAM());
                obj = this.constructObjectForLogger(`Successfully opened ${appname} app`);
                temp = this.getPhoneLogs();
                temp.push(obj)
                this.setPhoneLogs(temp);
            }
            else{
                throw new InvalidInputError(`Mentioned App name ${appname} not being installed kindly provide valid app name for opening`);
            }
        }
        catch(error){
            obj = this.constructObjectForLogger(`Failed to open ${appname} app due to error ${error.message}`);
            temp = this.getPhoneLogs();
            temp.push(obj);
            this.setPhoneLogs(temp);
            console.log('*********** ALERT : ***************');
            console.log('An error has occurred : ');
            console.log(error.message);
        }
    }
    closeapp(appname){
        let obj = this.constructObjectForLogger(`User requesting to close ${appname} app`);
        let temp = this.getPhoneLogs();
        temp.push(obj)
        this.setPhoneLogs(temp);
        console.log('#############Close App Logger',this, new Date());
        try{
            console.log('Closing App now : ',appname);
            let app_present_now = this.getAppDetails();
            console.log('TOP CLOSING CHECK : ',this.getAppRunningNow());
            if(appname in app_present_now){
                console.log('RAM Size before closing : ',this.getAvailableRAM());
                this.setAvailableRAM(this.getAvailableRAM() + app_present_now[appname].size_consum_in_ram_in_gb);
                let running_apps_now = [];
                running_apps_now = this.getAppRunningNow();
                console.log('Running apps before closing ::: ',running_apps_now);
                let indexOfTheAppToClose = running_apps_now.indexOf(appname);
                if(indexOfTheAppToClose == -1){
                    throw new InvalidInputError(`Mentioned App ${appname} is not Running now currently`);
                }
                console.log('Index :  ',indexOfTheAppToClose,' App present  : ',running_apps_now[indexOfTheAppToClose]);
                running_apps_now.splice(indexOfTheAppToClose,1);
                console.log('Running apps after killing process from RAM : ',this.getAppRunningNow());
                this.setAppRunningNow(running_apps_now);
                console.log('RAM Size after closing : ',this.getAvailableRAM());
                obj = this.constructObjectForLogger(`Successfully closed ${appname}`);
                temp = this.getPhoneLogs();
                temp.push(obj)
                this.setPhoneLogs(temp);
            }
            else{
                throw new InvalidInputError(`Mentioned App ${appname} is not Running now currently`);
            }
        }
        catch(error){
            console.log('*********** ALERT : ***************');
            console.log('An error has occurred : ');
            console.log(error.message);
            obj = this.constructObjectForLogger(`Failed to close ${appname} app due to error ${error.message}`);
            temp = this.getPhoneLogs();
            temp.push(obj)
            this.setPhoneLogs(temp);
        }

    }
    constructObjectForLogger(message){
        let obj = {};
        obj.date = new Date();
        obj.action_performed = message;
        return obj;
    }
    printLogger(){
        console.log("$$$$$$$$$$$$$$$$$$$$$ LOGGGGS PRINTING STARTED $$$$$$$$$$$$$$$$$$$$$");

        // for(let [key,value] in Object.entries(this.getPhoneLogs().values())){
        //     if(key == date){
        //         console.log('Logged time : ',value)
        //     }
        //     else{
        //         console.log('Action Performed : ',value);
        //     }
        // }
        let v = this.getPhoneLogs();
    // console.log('Type of v is : ',typeof v);
    // console.log(v);
        // console.log();
        // this.getPhoneLogs().forEach(function(item,index){
        //     console.log('Logged time : ',obj.date)
        //     console.log('Action Performed : ',obj.action_performed);
        // })
        // let c = v.values();
        // for(let obj in c){
        //     console.log('Logged time : ',obj.date)
        //     console.log('Action Performed : ',obj.action_performed);
        // }
        if(v instanceof Object){
            for(let obj of v){
                console.log('TIMESTAMP : ',obj.date);
                console.log('ACTION PERFORMED : ',obj.action_performed);
                console.log('-------------------');
            }
        }
        console.log("$$$$$$$$$$$$$$$$$$$$$ LOGGGGS PRINTING COMPLETED $$$$$$$$$$$$$$$$$$$$$");
    }
}
class Android extends Phone{
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
class IoS extends Phone{
    constructor(){
        super();
        this.setOSType('iOS');
        this.setDisplay('iPhone Display');
        this.setBrand('Apple');
    }
}
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
class iPhone14 extends IoS{
    constructor(){
        super();
        this.setPhoneLogs([]);
        let log = this.constructObjectForLogger('Assembling components of iPhone');
        // this.setPhoneLogs(this.getPhoneLogs().push(log));
        this.setOSVersion(15);
        this.setInternalMemory(512);
        this.setRAM(4);
        this.setModelName('iPhone 14');
        this.setDeaultOsSize(0.5);
        this.setAppRunningNow(new Array());
        this.installGeneralApps();
        let temp = this.getPhoneLogs();
        temp.push(log)
        this.setPhoneLogs(temp);
        this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize());
    }
    installGeneralApps(){
        var obj = {
            whatsapp : {
                version : 68,
                storage_size_in_gb : 0.089,
                size_consum_in_ram_in_gb  : 0.12,
                open_camera : function(){
                    console.log('....WhatsApp Camera being open ....');
                },
                open_chats_tab : function(){
                    console.log('....WhatsApp Individual and Group Chats Open ....');
                },
                open_status_tab : function(){
                    console.log('....WhatsApp Status Open ....');
                },
                open_calls_tab : function(){
                    console.log('...WhatsApp Voice and Video calls open.....');
                }
            },
            instagram : {
                version : 70,
                storage_size_in_gb : 0.230,
                size_consum_in_ram_in_gb  : 0.22,
                open_home_feed : function(){
                    console.log('....Opening Instagram Home Feed Now');
                },
                open_reels : function(){
                    console.log('...Opening Instagram Reels now');
                },
                open_settings_page : function(){
                    console.log('...Opening Instagram Settings page now');
                }
            },
            facebook : {
                version : 50,
                storage_size_in_gb : 0.543,
                size_consum_in_ram_in_gb  : 0.18
            }
        }
        this.setAppDetails(obj);
    }

}
class OnePlus extends Android{
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
class Samsung extends Android{
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
class OnePlus8 extends OnePlus{
    constructor(){
        super();
        this.setRAM(8);
        this.setOSVersion(12);
        this.setCustomOsVersion(10);
        this.setInternalMemory(128);
        this.setDeaultOsSize(1.2);
        this.setCustomOsSize(0.3);
        this.setModelName('OnePlus 8');
        this.installGeneralApps();
        this.setAppRunningNow([]);
        this.setPhoneLogs([]);
        this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
        let log = this.constructObjectForLogger('Assembling components of OnePlus8 phone');
        console.log('DATE OF LOG : ',log.date, ' ACTION_PERFORMED : ',log.action_performed);
        console.log('TYPING BEFORE : ',typeof log);
        console.log('PRINT BEFORE : ',typeof this.getPhoneLogs());
        let temp = this.getPhoneLogs();
        console.log('TYPING dsf : ',typeof temp);
        temp.push(log)
        this.setPhoneLogs(temp);
        console.log('PRINT AFTER : ',typeof this.getPhoneLogs());
    }
    dynamicRefreshRate(){
        console.log('OnePlus 8 special feature : Dynamic Refresh Rate');
    }
    cloneAppsForMultipleAccountUse(){
        console.log('OnePlus 8 special feature : Cloning Apps for Multiple Account Use ');
    }
    getPhoneDetails(){
        let os_details = {};
        os_details[this.getOSType()] = this.getOSVersion();
        os_details[this.getCustomOs()] = this.getCustomOsVersion();
        return os_details;
    }
    installGeneralApps(){
        var obj = {
            whatsapp : {
                version : 72,
                storage_size_in_gb : 0.123,
                size_consum_in_ram_in_gb  : 0.233,
                open_camera : function(){
                    console.log('....WhatsApp Camera being open ....');
                },
                open_chats_tab : function(){
                    console.log('....WhatsApp Individual and Group Chats Open ....');
                },
                open_status_tab : function(){
                    console.log('....WhatsApp Status Open ....');
                },
                open_calls_tab : function(){
                    console.log('...WhatsApp Voice and Video calls open.....');
                },
                get_app_info : function(){
                    console.log(this.constructor.name,' uses whatssApp version : ',this.version);
                }
            },
            instagram : {
                version : 82,
                storage_size_in_gb : 0.456,
                size_consum_in_ram_in_gb  : 0.3,
                open_home_feed : function(){
                    console.log('....Opening Instagram Home Feed Now');
                },
                open_reels : function(){
                    console.log('...Opening Instagram Reels now');
                },
                open_settings_page : function(){
                    console.log('...Opening Instagram Settings page now');
                }
            },
            facebook : {
                version : 68,
                storage_size_in_gb : 0.789,
                size_consum_in_ram_in_gb  : 0.3
            }
        }
        this.setAppDetails(obj);
    }
    // openapp(appname){
    //     try{
    //         let app_present_now = this.getAppDetails();
    //         if(appname in app_present_now){
    //         let app_present_now = this.getAppDetails();
    //             let ram_size_now = this.getAvailableRAM();
    //             console.log('Available RAM before adding app : ',ram_size_now);
    //             this.setAvailableRAM(ram_size_now - app_present_now[appname].size_consum_in_ram_in_gb);
    //             this.getAppRunningNow().push(appname);
    //             this.setAppRunningNow(this.getAppRunningNow());
    //             console.log('Available RAM after adding app : ',this.getAvailableRAM());
    //         }
    //         else{
    //             throw new Error(`Mentioned App name ${appname} not being installed kindly provide valid app name for opening`);
    //         }
    //     }
    //     catch(error){
    //         console.log('*********** ALERT : ***************');
    //         console.log('An error has occurred : ');
    //         console.log(error.message);
    //     }
    // }
    // closeapp(appname){
    //     try{

    //         let app_present_now = this.getAppDetails();
    //         if(appname in app_present_now){
    //             console.log('RAM Size before closing : ',this.getAvailableRAM());
    //             this.setAvailableRAM(this.getAvailableRAM() + app_present_now[appname].size_consum_in_ram_in_gb);
    //             let running_apps_now = [];
    //             running_apps_now = this.getAppRunningNow();
    //             console.log('Running apps before closing ::: ',running_apps_now);
    //             let indexOfTheAppToClose = running_apps_now.indexOf(appname);
    //             console.log('Index :  ',indexOfTheAppToClose,' App present  : ',running_apps_now[indexOfTheAppToClose]);
    //             running_apps_now.splice(indexOfTheAppToClose,1);
    //             console.log('Running apps after killing process from RAM : ',running_apps_now);
    //             this.setAppRunningNow(running_apps_now);
    //             console.log('RAM Size after closing : ',this.getAvailableRAM());
    //         }
    //         else{
    //             throw new Error(`Mentioned App ${appname} is not Running now currently`);
    //         }
    //     }
    //     catch(error){
    //         console.log('*********** ALERT : ***************');
    //         console.log('An error has occurred : ');
    //         console.log(error.message);
    //     }

    // }
}
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

class Samsung_Z1_Ultra extends Samsung{
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

class InvalidInputError extends Error{
    constructor(message){
        super(message);
        this.name = 'InvalidInputError';
    }
}

function print(obj){
    console.log('Model Name - ',obj.getModelName());
    console.log('Internal Memory - ',obj.getInternalMemory(),' ::: OS Version - ',obj.getOSVersion(),'::: Display - ',obj.getDisplay(),'::: OS Type - ',obj.getOSType(),'::: RAM - ',obj.getRAM(),'::: Brand - ',obj.getBrand());
    if(obj instanceof Android){
        console.log('Custom OS Name - ',obj.getCustomOs()+' Custom OS Version - '+obj.getCustomOsVersion());
    }
    console.log('Available RAM now : ',obj.getAvailableRAM(),'GB');
}

function getInstalledApps(obj){
    let appPresent = obj.getAppDetails();
    let appWithVersions = {};
    for(let [key,value] of Object.entries(appPresent)){
        appWithVersions[key] = value.version;
    }
    return appWithVersions;
}
function cacheDecorator(func){
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

console.log('***********');
let oneplus8 = new OnePlus8();
print(oneplus8);
// console.log('Custom OS Name - ',oneplus8.getCustomOs()+' Custom OS Version - '+oneplus8.getCustomOsVersion());
oneplus8.vibrantDisplay();
oneplus8.cloneAppsForMultipleAccountUse();
oneplus8.dynamicRefreshRate();
oneplus8.openapp("whatsapp");
oneplus8.getAppDetails()["whatsapp"].open_chats_tab();
oneplus8.getAppDetails()["whatsapp"].open_status_tab();
oneplus8.openapp("youtube");
console.log("---------");

oneplus8.openapp("instagram");

//         DECORATOR FUNCTION

getInstalledApps = cacheDecorator(getInstalledApps);
console.log('GETTING INSTALLED APP IN ONEPLUS 8');
// console.log(getInstalledApps(oneplus8));
console.log(getInstalledApps(oneplus8));
console.log(getInstalledApps(oneplus8));
console.log(getInstalledApps(oneplus8));

/*
    G E T T I N G   V A L U E   F R O M   M A I N  F U N C T I O N
    { whatsapp: 72, instagram: 82, facebook: 68 }
    G E T T I N G   V A L U E   F R O M   C A C H E
    { whatsapp: 72, instagram: 82, facebook: 68 }
    G E T T I N G   V A L U E   F R O M   C A C H E
    { whatsapp: 72, instagram: 82, facebook: 68 }
*/
console.log('ASDDF : ',oneplus8.getAppDetails());
// oneplus8.getAppDetails()['whatsapp'].get_app_info.bind(oneplus8);
// setTimeout(oneplus8.getAppDetails().whatsapp.settings.get_app_info(),7000);
let get_data = oneplus8.getPhoneDetails.bind(oneplus8);
console.log('Getting phone data ');
console.log(get_data());

// console.log(obje);
console.log('Running apps before closing : ',oneplus8.getAppRunningNow());
console.log('Closing App now ');
oneplus8.closeapp("whatsapp");
console.log('Running apps after closing : ',oneplus8.getAppRunningNow());
oneplus8.closeapp("messages");
console.log('***********');

console.log();
oneplus8.takePhotoWithDelay(oneplus8,2);
console.log('***********');
oneplus8.printLogger();

let samsung_Z1_Ultra = new Samsung_Z1_Ultra();
print(samsung_Z1_Ultra);
samsung_Z1_Ultra.samsungDeX();
samsung_Z1_Ultra.directorView();
console.log('***********');

console.log();
samsung_Z1_Ultra.takePhotoWithDelay(samsung_Z1_Ultra,5);
samsung_Z1_Ultra.printLogger();
console.log('***********');

let iphone14 = new iPhone14();
print(iphone14);
console.log('***********');
iphone14.openapp("whatsapp");
iphone14.getAppDetails()["whatsapp"].open_chats_tab();
iphone14.getAppDetails()["whatsapp"].open_status_tab();

iphone14.openapp("instagram");
console.log('Running apps before closing : ',iphone14.getAppRunningNow());
console.log('Closing App now ');
console.log('Running apps after closing : ',iphone14.getAppRunningNow());
console.log('***********');
iphone14.printLogger();

setInterval(runningapps,10000);
function runningapps(){
    console.log('------------------------');
    console.log('Apps running in OnePlus phone : ',oneplus8.getAppRunningNow());
    console.log('Apps running in iPhone 14 phone : ',iphone14.getAppRunningNow());
    console.log('Apps running in Samsung phone : ',samsung_Z1_Ultra.getAppRunningNow());
    console.log('------------------------');
}

