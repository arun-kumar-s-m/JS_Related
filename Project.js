import Samsung_Z1_Ultra from './Phone/Android/Samsung/Samsung_Z1_Ultra.js';
import iPhone14 from './Phone/iOS/iPhone14.js';
import OnePlus8 from './Phone/Android/OnePlus/OnePlus8.js';
import InvalidInputError from './Error/InvalidInputError.js';
import {print as print,cacheDecorator as cacheDecorator, runningapps as runningapps} from './Helper_functions/helper.js';
export {oneplus8,samsung_Z1_Ultra,iphone14};

// import Phone from './Phone.js';

// const Phone = require('./Phone.js');
// class Phone{
//     #internal_memory_in_gb;
//     #os_version;
//     #user_name;
//     #password;
//     #display;
//     #os_type;
//     #ram_in_gb;
//     #brand;
//     #model_name;
//     #avaiable_RAM;
//     #default_OS_Size_in_GB;
//     #apps_running_now;
//     #app_details;
//     #phone_logs = [];
//     #bankaccounts;
//     setInternalMemory(memory){
//         this.#internal_memory_in_gb = memory;
//     }
//     getInternalMemory(){
//         return this.#internal_memory_in_gb;
//     }
//     setUserName(uname){
//         this.#user_name = uname;
//     }
//     getUserName(){
//         return this.#user_name;
//     }
//     setPassword(pwd){
//         this.#password = pwd;
//     }
//     getPassword(){
//         return this.#password;
//     }
//     setBankAccount(obj){
//         this.#bankaccounts = obj;
//     }
//     getBankAccount(){
//         return this.#bankaccounts;
//     }
//     setPhoneLogs(obj){
//         this.#phone_logs = obj;
//     }
//     getPhoneLogs(){
//         return this.#phone_logs;
//     }
//     setAppDetails(obj){
//         this.#app_details = obj;
//     }
//     getAppDetails(){
//         return this.#app_details;
//     }
//     setAppRunningNow(obj){
//         this.#apps_running_now = obj;
//     }
//     getAppRunningNow(){
//         return this.#apps_running_now;
//     }
//     setDeaultOsSize(size){
//         this.#default_OS_Size_in_GB = size;
//     }
//     getDeaultOsSize(){
//         return this.#default_OS_Size_in_GB;
//     }
//     setOSVersion(version){
//         this.#os_version = version;
//     }
//     getOSVersion(){
//         return this.#os_version;
//     }
//     setDisplay(display){
//         this.#display = display;
//     }
//     getDisplay(){
//       return this.#display;
//     }
//     setOSType(type){
//         this.#os_type = type;
//     }
//     getOSType(){
//       return this.#os_type;
//     }
//     setRAM(ram){
//         this.#ram_in_gb = ram;
//     }
//     getRAM(){
//         return this.#ram_in_gb;
//     }
//     setOSVersion(os){
//         this.#os_version = os;
//     }
//     getOSVersion(){
//         return this.#os_version;
//     }
//     setBrand(brand){
//         this.#brand = brand;
//     }
//     getBrand(){
//         return this.#brand;
//     }
//     setModelName(name){
//         this.#model_name = name;
//     }
//     getModelName(){
//         return this.#model_name;
//     }
//     setAvailableRAM(size){
//         this.#avaiable_RAM = size;
//     }
//     getAvailableRAM(){
//         return this.#avaiable_RAM;
//     }
//     openapp(appname){
//         let obj = this.constructObjectForLogger(`User requesting to open ${appname} app`);
//         let temp = this.getPhoneLogs();
//         temp.push(obj)
//         this.setPhoneLogs(temp);
//         console.log('#############Open App Logger',this,new Date());
//         try{
//             let app_present_now = this.getAppDetails();
//             if(appname in app_present_now){
//             let app_present_now = this.getAppDetails();
//                 let ram_size_now = this.getAvailableRAM();
//                 console.log('Available RAM before adding app : ',ram_size_now);
//                 this.setAvailableRAM(ram_size_now - app_present_now[appname].size_consum_in_ram_in_gb);
//                 this.getAppRunningNow().push(appname);
//                 this.setAppRunningNow(this.getAppRunningNow());
//                 console.log('Available RAM after adding app : ',this.getAvailableRAM());
//                 obj = this.constructObjectForLogger(`Successfully opened ${appname} app`);
//                 temp = this.getPhoneLogs();
//                 temp.push(obj)
//                 this.setPhoneLogs(temp);
//             }
//             else{
//                 throw new InvalidInputError(`Mentioned App name ${appname} not being installed kindly provide valid app name for opening`);
//             }
//         }
//         catch(error){
//             obj = this.constructObjectForLogger(`Failed to open ${appname} app due to error ${error.message}`);
//             temp = this.getPhoneLogs();
//             temp.push(obj);
//             this.setPhoneLogs(temp);
//             console.log('*********** ALERT : ***************');
//             console.log('An error has occurred : ');
//             console.log(error.message);
//         }
//     }
//     closeapp(appname){
//         let obj = this.constructObjectForLogger(`User requesting to close ${appname} app`);
//         let temp = this.getPhoneLogs();
//         temp.push(obj)
//         this.setPhoneLogs(temp);
//         console.log('#############Close App Logger',this, new Date());
//         try{
//             console.log('Closing App now : ',appname);
//             let app_present_now = this.getAppDetails();
//             console.log('TOP CLOSING CHECK : ',this.getAppRunningNow());
//             if(appname in app_present_now){
//                 console.log('RAM Size before closing : ',this.getAvailableRAM());
//                 this.setAvailableRAM(this.getAvailableRAM() + app_present_now[appname].size_consum_in_ram_in_gb);
//                 let running_apps_now = [];
//                 running_apps_now = this.getAppRunningNow();
//                 console.log('Running apps before closing ::: ',running_apps_now);
//                 let indexOfTheAppToClose = running_apps_now.indexOf(appname);
//                 if(indexOfTheAppToClose == -1){
//                     throw new InvalidInputError(`Mentioned App ${appname} is not Running now currently`);
//                 }
//                 console.log('Index :  ',indexOfTheAppToClose,' App present  : ',running_apps_now[indexOfTheAppToClose]);
//                 running_apps_now.splice(indexOfTheAppToClose,1);
//                 console.log('Running apps after killing process from RAM : ',this.getAppRunningNow());
//                 this.setAppRunningNow(running_apps_now);
//                 console.log('RAM Size after closing : ',this.getAvailableRAM());
//                 obj = this.constructObjectForLogger(`Successfully closed ${appname}`);
//                 temp = this.getPhoneLogs();
//                 temp.push(obj)
//                 this.setPhoneLogs(temp);
//             }
//             else{
//                 throw new InvalidInputError(`Mentioned App ${appname} is not Running now currently`);
//             }
//         }
//         catch(error){
//             console.log('*********** ALERT : ***************');
//             console.log('An error has occurred : ');
//             console.log(error.message);
//             obj = this.constructObjectForLogger(`Failed to close ${appname} app due to error ${error.message}`);
//             temp = this.getPhoneLogs();
//             temp.push(obj)
//             this.setPhoneLogs(temp);
//         }

//     }
//     constructObjectForLogger(message){
//         let obj = {};
//         obj.date = new Date();
//         obj.action_performed = message;
//         return obj;
//     }
//     printLogger(){
//         console.log("$$$$$$$$$$$$$$$$$$$$$ LOGGGGS PRINTING STARTED $$$$$$$$$$$$$$$$$$$$$");

//         // for(let [key,value] in Object.entries(this.getPhoneLogs().values())){
//         //     if(key == date){
//         //         console.log('Logged time : ',value)
//         //     }
//         //     else{
//         //         console.log('Action Performed : ',value);
//         //     }
//         // }
//         let v = this.getPhoneLogs();
//     // console.log('Type of v is : ',typeof v);
//     // console.log(v);
//         // console.log();
//         // this.getPhoneLogs().forEach(function(item,index){
//         //     console.log('Logged time : ',obj.date)
//         //     console.log('Action Performed : ',obj.action_performed);
//         // })
//         // let c = v.values();
//         // for(let obj in c){
//         //     console.log('Logged time : ',obj.date)
//         //     console.log('Action Performed : ',obj.action_performed);
//         // }
//         if(v instanceof Object){
//             for(let obj of v){
//                 console.log('TIMESTAMP : ',obj.date);
//                 console.log('ACTION PERFORMED : ',obj.action_performed);
//                 console.log('-------------------');
//             }
//         }
//         console.log("$$$$$$$$$$$$$$$$$$$$$ LOGGGGS PRINTING COMPLETED $$$$$$$$$$$$$$$$$$$$$");
//     }
// }
// class Android extends Phone{
//     #custom_os;
//     #custom_os_version;
//     #custom_os_size;
//     constructor(){
//         super();
//         this.setOSType('Android');
//     }
//     setCustomOs(os){
//         this.#custom_os = os;
//     }
//     getCustomOs(){
//         return this.#custom_os;
//     }
//     setCustomOsVersion(version){
//         this.#custom_os_version = version;
//     }
//     getCustomOsVersion(){
//         return this.#custom_os_version;
//     }
//     setCustomOsSize(size){
//         this.#custom_os_size = size;
//     }
//     getCustomOsSize(){
//         return this.#custom_os_size;
//     }
//     takePhoto(obj){
//         console.log(obj.getModelName(),'is taking the photo!!!');
//         console.log('........Taking Photo Smile Please ........');
//     }
//     takePhotoWithDelay(obj,x){
//         setTimeout(this.takePhoto,x * 1000,obj);
//     }
// }
// class IoS extends Phone{
//     constructor(){
//         super();
//         this.setOSType('iOS');
//         this.setDisplay('iPhone Display');
//         this.setBrand('Apple');
//     }
// }
// class iPhone13 extends IoS{
//     constructor(){
//         this.setOSVersion(14);
//         this.setInternalMemory(256);
//         this.setRAM(3);
//         this.setModelName('iPhone 13');
//         this.setDeaultOsSize(0.5);
//         this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize());
//     }
// }
// class iPhone14 extends IoS{
//     constructor(){
//         super();
//         this.setPhoneLogs([]);
//         let log = this.constructObjectForLogger('Assembling components of iPhone');
//         // this.setPhoneLogs(this.getPhoneLogs().push(log));
//         this.setOSVersion(15);
//         this.setInternalMemory(512);
//         this.setRAM(4);
//         this.setModelName('iPhone 14');
//         this.setDeaultOsSize(0.5);
//         this.setAppRunningNow(new Array());
//         this.installGeneralApps();
//         let temp = this.getPhoneLogs();
//         temp.push(log)
//         this.setPhoneLogs(temp);
//         this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize());
//     }
//     installGeneralApps(){
//         var obj = {
//             whatsapp : {
//                 version : 68,
//                 storage_size_in_gb : 0.089,
//                 size_consum_in_ram_in_gb  : 0.12,
//                 open_camera : function(){
//                     console.log('....WhatsApp Camera being open ....');
//                 },
//                 open_chats_tab : function(){
//                     console.log('....WhatsApp Individual and Group Chats Open ....');
//                 },
//                 open_status_tab : function(){
//                     console.log('....WhatsApp Status Open ....');
//                 },
//                 open_calls_tab : function(){
//                     console.log('...WhatsApp Voice and Video calls open.....');
//                 }
//             },
//             instagram : {
//                 version : 70,
//                 storage_size_in_gb : 0.230,
//                 size_consum_in_ram_in_gb  : 0.22,
//                 open_home_feed : function(){
//                     console.log('....Opening Instagram Home Feed Now');
//                 },
//                 open_reels : function(){
//                     console.log('...Opening Instagram Reels now');
//                 },
//                 open_settings_page : function(){
//                     console.log('...Opening Instagram Settings page now');
//                 }
//             },
//             facebook : {
//                 version : 50,
//                 storage_size_in_gb : 0.543,
//                 size_consum_in_ram_in_gb  : 0.18
//             }
//         }
//         this.setAppDetails(obj);
//     }

// }
// class OnePlus extends Android{
//     constructor(){
//         super();
//         this.setBrand('OnePlus');
//         this.setCustomOs('Oxygen');
//         this.setDisplay('OnePlus Display');
//     }
//     vibrantDisplay(){
//         console.log('Oneplus vibrant display');
//     }

// }
// class Samsung extends Android{
//     constructor(){
//         super();
//         this.setBrand('Samsung');
//         this.setDisplay('Samsung Display');
//         this.setCustomOs('One UI');
//         this.setCustomOsVersion(7);
//     }
//     samsungDeX(){
//         console.log('Operating your smartphone with a keyboard, mouse, and computer monitor');
//     }
// }
// class OnePlus8 extends OnePlus{
//     constructor(uname,pwd){
//         super();
//         this.setRAM(8);
//         this.setOSVersion(12);
//         this.setCustomOsVersion(10);
//         this.setInternalMemory(128);
//         this.setDeaultOsSize(1.2);
//         this.setCustomOsSize(0.3);
//         this.setModelName('OnePlus 8');
//         this.installGeneralApps(this);
//         this.setAppRunningNow([]);
//         this.setPhoneLogs([]);
//         this.setUserName(uname);
//         this.setPassword(pwd);
//         this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
//         let log = this.constructObjectForLogger('Assembling components of OnePlus8 phone');
//         console.log('DATE OF LOG : ',log.date, ' ACTION_PERFORMED : ',log.action_performed);
//         console.log('TYPING BEFORE : ',typeof log);
//         console.log('PRINT BEFORE : ',typeof this.getPhoneLogs());
//         let temp = this.getPhoneLogs();
//         console.log('TYPING dsf : ',typeof temp);
//         temp.push(log)
//         this.setPhoneLogs(temp);
//         console.log('PRINT AFTER : ',typeof this.getPhoneLogs());
//     }
//     dynamicRefreshRate(){
//         console.log('OnePlus 8 special feature : Dynamic Refresh Rate');
//     }
//     cloneAppsForMultipleAccountUse(){
//         console.log('OnePlus 8 special feature : Cloning Apps for Multiple Account Use ');
//     }
//     getPhoneDetails(){
//         let os_details = {};
//         os_details[this.getOSType()] = this.getOSVersion();
//         os_details[this.getCustomOs()] = this.getCustomOsVersion();
//         return os_details;
//     }
//     verifyWhetherFileExists(filepath){
//         console.log('Value of filepath is : ',filepath);
//         if(String(filepath).includes("/")){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     checkCameraIsInGoodState(){
//         console.log('Checking camera functionalities ');
//         return true; // for simplicity returning true directly but the real functions would consists of checking camera 
//     }
//     checkMicWhetherGood(){
//         console.log('Checking mic functionalities ');
//         return true; // for simplicity returning true directly but the real functions would consists of checking camera 
//     }
//     installGeneralApps(object){
//         var obj = {
//             whatsapp : {
//                 version : 72,
//                 storage_size_in_gb : 0.123,
//                 size_consum_in_ram_in_gb  : 0.233,
//                 open_camera : function(){
//                     console.log('....WhatsApp Camera being open ....');
//                 },
//                 open_chats_tab : function(){
//                     console.log('....WhatsApp Individual and Group Chats Open ....');
//                 },
//                 open_status_tab : function(){
//                     console.log('....WhatsApp Status Open ....');
//                 },
//                 open_calls_tab : function(){
//                     console.log('...WhatsApp Voice and Video calls open.....');
//                 },
//                 get_app_info : function(){
//                     console.log(this.constructor.name,' uses whatssApp version : ',this.version);
//                 },
//                 send_file_to_user : function(filepath,to_user_number,callback){
//                     console.log('Inside send_file_to_user function : ',filepath);
//                     let file = object.verifyWhetherFileExists(filepath);
//                     if(file){
//                         callback(filepath,to_user_number);
//                     }
//                     else{
//                         throw new InvalidInputError('File doesn\'t exist in the provided filepath');
//                     }
//                 },
//                 send_file : function(filepath,to_user_number){
//                     console.log('Retrieving file from path ',filepath);
//                     console.log('Sending the file to user with no : ',to_user_number);
//                 }
//             },
//             instagram : {
//                 version : 82,
//                 storage_size_in_gb : 0.456,
//                 size_consum_in_ram_in_gb  : 0.3,
//                 open_home_feed : function(){
//                     console.log('....Opening Instagram Home Feed Now');
//                 },
//                 open_reels : function(){
//                     console.log('...Opening Instagram Reels now');
//                 },
//                 open_settings_page : function(){
//                     console.log('...Opening Instagram Settings page now');
//                 }
//             },
//             facebook : {
//                 version : 68,
//                 storage_size_in_gb : 0.789,
//                 size_consum_in_ram_in_gb  : 0.3
//             },
//             google_pay : {
//                 version : 43,
//                 storage_size_in_gb : 0.12,
//                 size_consum_in_ram_in_gb  : 0.2,
//                 pay_to_number : function(pwd, amount , tonumber,bank_name,account_number,upi_pin){
//                     console.log('User requesting to pay Rs.',amount,'to number : ',tonumber);
//                     console.log('DEBUG 2 : ',bank_name)
//                     console.log('DEBUG 1 : ',object.getBankAccount()[bank_name]);
//                     let h = object.getBankAccount()[bank_name][account_number].upi_pin;
//                     console.log('UPI PWD ip : ',upi_pin,'type is : ',typeof upi_pin);
//                     console.log('UPI BEING SET : ',h,'type is : ',typeof h);
//                     console.log('INSIDE THEN BLOCK OF PROMISES : Phone password verified successfully');
//                     return new Promise((resolve,reject) => {
//                         if(object.getPassword() === pwd){
//                             // console.log('Password matches and returned verified promise');
//                             resolve('verified');
//                         }
//                         else{
//                             // console.log('Password entered is wrong');
//                             reject('Provided password is wrong');
//                         }
//                     }).then(function(result){
//                         if(result === 'verified'){
//                             // let h = this.getBankAccount()[bank_name][account_number].upi_pin;
//                             // console.log('UPI PWD ip : ',upi_pin,'type is : ',typeof upi_pin);
//                             // console.log('UPI BEING SET : ',h,'type is : ',typeof v);
//                             // console.log('INSIDE THEN BLOCK OF PROMISES : Phone password verified successfully');
//                             // if(this.getBankAccount()[bank_name][account_number].upi_pin == upi_pin){
//                             if(h == upi_pin){
//                                 return  new Promise((resolve , reject) => {
//                                     resolve('UPI PIN verified successfully');
//                                 });
//                             }
//                             else{
//                                 return  new Promise((resolve , reject) => {
//                                     reject('UPI PIN provided is wrong');
//                                 });
//                             }
//                         }
//                     },function(error){
//                         console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
//                         throw error;
//                         // return 'failure';
//                     }).then(function(result){
//                         if(result === 'UPI PIN verified successfully'){
//                             console.log('Transaction done successfully');
//                             return 'success';
//                         }
//                     },function(error){
//                         console.log('Transaction failed since UPI provided is wrong one');
//                         return 'failure';
//                     });
//                   //  // .catch((error) => console.log(error));
//                   //  // .catch((error) => console.log(error))
//                     // promise.catch((error) => console.log(error));
//                     // promise.then(function(result){
//                     //     if(result === 'verified'){
//                     //         console.log('INSIDE THEN BLOCK OF PROMISES : Payment has been done successfully');
//                     //     }
//                     //     else{
//                     //         console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
//                     //     }
//                     //     console.log(result);
//                     // },function(error){
//                     //     console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
//                     //     console.log(error);
//                     // });
//                     promise.finally(() => console.log('Closing gpay app'));
//                 },
//                 provide_gift_vouchers : function* (){
//                     let countOfTransactions = 0;
//                     while(countOfTransactions < 5){
//                         yield '50';
//                         countOfTransactions++;
//                     }
//                     while(countOfTransactions < 10){
//                         yield '100';
//                         countOfTransactions++;
//                     }
//                     // yield 'TITAN EYE SPECS offer Rs 250';
//                     // yield 'LENSKART Rs 50 OFFER';
//                     // yield 'SWIGGY Rs 50 OFFER';
//                     // yield 'CASH BACK OFFER TILL Rs 200';
//                     // yield 'ZOMATO Rs 100 OFFER';
//                 }
//             },
//             google_meet : {
//                 async join_session(meeting_link){
//                     let isCameraFine = await object.checkCameraIsInGoodState();
//                     let isMicGood = await object.checkMicWhetherGood();
//                     if(isCameraFine && isMicGood){
//                         console.log('Joining the remote session as requested with meeting link as ',meeting_link);
//                     }
//                     else{
//                         if(!isCameraFine){
//                             console.log('There is a problem with the camera function');
//                         }
//                         if(!isMicGood){
//                             console.log('There is a problem with the Mic being uses');
//                         }
//                     }
//                 }
//             }
//             // ,
//             // jio_music : {
//             //     latestmusics  : {},
//             //     make_request_and_get_response : function(){
//             //         object.getAppDetails()['jio_music'].latestmusics = ['Chilla Chilla', 'Thee Thalapathy', 'Ranjithame','Kasedhan kadavulada'];
//             //         // return { 
//             //         //     songs : ['Chilla Chilla', 'Thee Thalapathy', 'Ranjithame','Kasedhan kadavulada']
//             //         // };
//             //     },
//             //     get_latest_music : async function*(){

//             //         // let latestmusics = {};
//             //         // let latestmusics = await setTimeout(() => {
//             //         //     latestmusics = object.getAppDetails()['jio_music'].make_request_and_get_response
//             //         // },5000);
//             //         let obj = await setTimeout(() => {
//             //             object.getAppDetails()['jio_music'].make_request_and_get_response();
//             //         },5000);
//             //         // console.log('Current latest songs : ',object.getA ppDetails()['jio_music'].make_request_and_get_response());
//             //         // console.log('Current latestmusics array : ',);
//             //         // yield
//             //         // console.log('Hi Arun !! ',object.getAppDetails()['jio_music'].latestmusics);
//             //         // for(let song of object.getAppDetails()['jio_music'].latestmusics.songs){
//             //         //     console.log('SONG G : ',song);
//             //         // }
//             //         console.log('Hi Arun !! ',object.getAppDetails()['jio_music'].latestmusics);
//             //         for(let song of object.getAppDetails()['jio_music'].latestmusics.songs){
//             //             console.log('SONG G : ',song);
//             //         }
//             //     }
//             // }
//         }
//         this.setAppDetails(obj);
//     }
//     // openapp(appname){
//     //     try{
//     //         let app_present_now = this.getAppDetails();
//     //         if(appname in app_present_now){
//     //         let app_present_now = this.getAppDetails();
//     //             let ram_size_now = this.getAvailableRAM();
//     //             console.log('Available RAM before adding app : ',ram_size_now);
//     //             this.setAvailableRAM(ram_size_now - app_present_now[appname].size_consum_in_ram_in_gb);
//     //             this.getAppRunningNow().push(appname);
//     //             this.setAppRunningNow(this.getAppRunningNow());
//     //             console.log('Available RAM after adding app : ',this.getAvailableRAM());
//     //         }
//     //         else{
//     //             throw new Error(`Mentioned App name ${appname} not being installed kindly provide valid app name for opening`);
//     //         }
//     //     }
//     //     catch(error){
//     //         console.log('*********** ALERT : ***************');
//     //         console.log('An error has occurred : ');
//     //         console.log(error.message);
//     //     }
//     // }
//     // closeapp(appname){
//     //     try{

//     //         let app_present_now = this.getAppDetails();
//     //         if(appname in app_present_now){
//     //             console.log('RAM Size before closing : ',this.getAvailableRAM());
//     //             this.setAvailableRAM(this.getAvailableRAM() + app_present_now[appname].size_consum_in_ram_in_gb);
//     //             let running_apps_now = [];
//     //             running_apps_now = this.getAppRunningNow();
//     //             console.log('Running apps before closing ::: ',running_apps_now);
//     //             let indexOfTheAppToClose = running_apps_now.indexOf(appname);
//     //             console.log('Index :  ',indexOfTheAppToClose,' App present  : ',running_apps_now[indexOfTheAppToClose]);
//     //             running_apps_now.splice(indexOfTheAppToClose,1);
//     //             console.log('Running apps after killing process from RAM : ',running_apps_now);
//     //             this.setAppRunningNow(running_apps_now);
//     //             console.log('RAM Size after closing : ',this.getAvailableRAM());
//     //         }
//     //         else{
//     //             throw new Error(`Mentioned App ${appname} is not Running now currently`);
//     //         }
//     //     }
//     //     catch(error){
//     //         console.log('*********** ALERT : ***************');
//     //         console.log('An error has occurred : ');
//     //         console.log(error.message);
//     //     }

//     // }
// }
// class OnePlus10 extends OnePlus{
//     // #ram = 12;
//     constructor(){
//         super();
//         this.setRAM(12);
//         this.setOSVersion(13);
//         this.setCustomOsVersion(11);
//         this.setInternalMemory(512);
//         this.setDeaultOsSize(1.2);
//         this.setCustomOsSize(0.4);
//         this.setAppRunningNow([]);
//         this.setModelName('OnePlus 10');
//         this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
//     }
// }
// async function* get_latest_music (){

//     let latestmusics = {};
//     let klf = await setTimeout(() => {
//         latestmusics = object.getAppDetails()['jio_music'].make_request_and_get_response
//     },5000);
//     let obj = await setTimeout(() => {
//         object.getAppDetails()['jio_music'].make_request_and_get_response();
//     },5000);
//     // console.log('Current latest songs : ',object.getA ppDetails()['jio_music'].make_request_and_get_response());
//     // console.log('Current latestmusics array : ',);
//     // yield
//     console.log('Hi Arun !! ',object.getAppDetails()['jio_music'].latestmusics);
//     for(const song of object.getAppDetails()['jio_music'].latestmusics.songs){
//         console.log('SONG G : ',song);
//     }
// }

// class Samsung_Z1_Ultra extends Samsung{
//     constructor(){
//         super();
//         this.setPhoneLogs([]);
//         let log = this.constructObjectForLogger('Assembling components of Samsung Z1 Ultra phone');
//         // this.setPhoneLogs(this.getPhoneLogs().push(log));
//         this.setRAM(8);
//         this.setOSVersion(12);
//         this.setDeaultOsSize(1.2);
//         this.setInternalMemory(512);
//         this.setModelName('Samsung Z1 Ultra');
//         this.setCustomOsSize(0.2);
//         this.setAppRunningNow([]);
//         console.log('DEBUG PRINT : ',this.getPhoneLogs());
//         let temp = this.getPhoneLogs();
//         temp.push(log);
//         this.setPhoneLogs(temp);
//         this.setAvailableRAM(this.getRAM() - this.getDeaultOsSize() - this.getCustomOsSize());
//     }
//     directorView(){
//         console.log('This is a Director View');
//         console.log('You are recording using ultra wide lenses');
//     }
// }

// class InvalidInputError extends Error{
//     constructor(message){
//         super(message);
//         this.name = 'InvalidInputError';
//     }
// }

// function print(obj){
//     console.log('Model Name - ',obj.getModelName());
//     console.log('Internal Memory - ',obj.getInternalMemory(),' ::: OS Version - ',obj.getOSVersion(),'::: Display - ',obj.getDisplay(),'::: OS Type - ',obj.getOSType(),'::: RAM - ',obj.getRAM(),'::: Brand - ',obj.getBrand());
//     if(obj instanceof Android){
//         console.log('Custom OS Name - ',obj.getCustomOs()+' Custom OS Version - '+obj.getCustomOsVersion());
//     }
//     console.log('Available RAM now : ',obj.getAvailableRAM(),'GB');
// }

// Arrow functions with Multiple lines expressions
let getInstalledApps = obj => {
    let appPresent = obj.getAppDetails();
    let appWithVersions = {};
    for(let [key,value] of Object.entries(appPresent)){
        appWithVersions[key] = value.version;
    }
    return appWithVersions;
}
// function getInstalledApps(obj){
//     let appPresent = obj.getAppDetails();
//     let appWithVersions = {};
//     for(let [key,value] of Object.entries(appPresent)){
//         appWithVersions[key] = value.version;
//     }
//     return appWithVersions;
// }
// function cacheDecorator(func){
//     let cache = new Map();
//     return function(x){
//         let valueOfObject = x.constructor.name;
//         if(cache.has(valueOfObject)){
//             console.log('G E T T I N G   V A L U E   F R O M   C A C H E');
//             return cache.get(valueOfObject);
//         }
//         // console.log(x.constructor.name);
//         console.log(valueOfObject);
//         console.log('G E T T I N G   V A L U E   F R O M   M A I N  F U N C T I O N');
//         let res = func(x);
//         cache.set(valueOfObject,res);
//         return res;
//     }
// }

console.log('***********');
let oneplus8 = new OnePlus8('arun','1234');
print(oneplus8);
// console.log('Custom OS Name - ',oneplus8.getCustomOs()+' Custom OS Version - '+oneplus8.getCustomOsVersion());
oneplus8.vibrantDisplay();
oneplus8.cloneAppsForMultipleAccountUse();
oneplus8.dynamicRefreshRate();
let obj = {
    sbi : {
        12345678912345678 : {
            account_name : 'Arun_1',
            upi_pin : '5678'
        },
        8765432187654321 : {
            account_name : 'Arun_2',
            upi_pin : '2468'
        }
    }
};
oneplus8.setBankAccount(obj);
console.log('Bank Account Details : ',oneplus8.getBankAccount());
oneplus8.openapp("whatsapp");
oneplus8.getAppDetails()["whatsapp"].open_chats_tab();
oneplus8.getAppDetails()["whatsapp"].open_status_tab();
oneplus8.getAppDetails()["whatsapp"].send_file_to_user('/Downloads/sample.jpg',8072219131,oneplus8.getAppDetails()["whatsapp"].send_file);
// oneplus8.getAppDetails()["whatsapp"].send_file_to_user('sample.jpg',8072219131,oneplus8.getAppDetails()["whatsapp"].send_file);

// let latestMusicGenObj = oneplus8.getAppDetails()["jio_music"].get_latest_music();
// console.log('1st hit song : ',latestMusicGenObj.next());
// console.log('2nd hit song : ',latestMusicGenObj.next());
// console.log('3rd hit song : ',latestMusicGenObj.next());

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

console.log('******************* ONEPLUS GPAY TRANSACTION RELATED ******************');

doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
doPaymentAndGetVoucher(oneplus8);
// let statusOfTransaction = doPaymentAndGetVoucher(oneplus8);
// let statusOfTransaction = oneplus8.getAppDetails()['google_pay'].pay_to_number('1234',10,8072219131,'sbi',12345678912345678,'5678');
// let statusOfTransaction_2 = oneplus8.getAppDetails()['google_pay'].pay_to_number('1234',10,8072219131,'sbi',12345678912345678,'5678');
// console.log('Status of transaction 2 is : ',statusOfTransaction_2);
// if(statusOfTransaction_2 === 'success'){
//     console.log('YOU HAVE RECEIVED A COUPON WORTH RS : ',obj33.next().value,'Thanks for using GPay');
// }
oneplus8.getAppDetails()['google_meet'].join_session('https://meet.google.com/id=144deqwqss4556');
// oneplus8.getAppDetails()['google_pay'].pay_to_number('5678',50,123456789,12345678912345678,'1234');
console.log('******** TRANSACTION COMPLETED ********');
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
/*
        OnePlus 8 is taking the photo!!!
        ........Taking Photo Smile Please ........
*/
console.log('***********');
oneplus8.printLogger();

let samsung_Z1_Ultra = new Samsung_Z1_Ultra();
print(samsung_Z1_Ultra);
samsung_Z1_Ultra.samsungDeX();
samsung_Z1_Ultra.directorView();
console.log('***********');

console.log();
samsung_Z1_Ultra.takePhotoWithDelay(samsung_Z1_Ultra,5);

/*
    Samsung Z1 Ultra is taking the photo!!!
    ........Taking Photo Smile Please ........
*/

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

// setInterval(runningapps,10000);
// function runningapps(){
//     console.log('------------------------');
//     let oneplus_running_apps = oneplus8.getAppRunningNow();
//     console.log('Apps running in OnePlus phone : ',oneplus_running_apps);
//     let iphone_running_apps = iphone14.getAppRunningNow();
//     console.log('Apps running in iPhone 14 phone : ',iphone_running_apps);
//     let samsung_running_apps = samsung_Z1_Ultra.getAppRunningNow();
//     console.log('Apps running in Samsung phone : ',samsung_running_apps);
//     console.log('------------------------');
//     return oneplus_running_apps.length > 0 || iphone_running_apps.length > 0 || samsung_running_apps.length > 0;
// }

runningapps();
let closing_apps_running_for_longer_time = new Promise(function(resolve,reject){
    setTimeout(runningapps, 5000);
    let res = runningapps();
    if(res){
        resolve('Still running');
    }
    else{
        reject('windup');
    }

}).then(function(resolve,reject){
    setTimeout(runningapps, 5000);
    let res = runningapps();
    if(res){
        let oneplus_running_apps = oneplus8.getAppRunningNow();
        console.log('Available RAM in ONEPLUS before closing running apps : ',oneplus8.getAvailableRAM());
        if(oneplus_running_apps.length > 0){
            for(let elem of oneplus_running_apps){
                oneplus8.closeapp(elem);
                console.log('Available RAM in ONEPLUS now : ',oneplus8.getAvailableRAM());
            }
        }
        let iphone_running_apps = iphone14.getAppRunningNow();
        console.log('Available RAM in iPhone before closing running apps : ',iphone14.getAvailableRAM());
        console.log('iPhone running apps now : ',iphone_running_apps,' LENGTH : ',iphone_running_apps.length);
        if(iphone_running_apps.length > 0){
            // while(iphone14.getAppRunningNow() > 0){
            //     iphone14.closeapp(iphone14.getAppRunningNow()[0]);
            // }
            for(let i = 0;i < iphone_running_apps.length;i++){
                console.log('iPhone elements : ',iphone_running_apps[i]);
                iphone14.closeapp(iphone_running_apps[i]);
                console.log('Available RAM in iPhone now : ',iphone14.getAvailableRAM());
            }
            // for(let elem of iphone_running_apps){
            //     console.log('iPhone elements : ',elem);
            //     iphone14.closeapp(elem);
            //     console.log('Available RAM in iPhone now : ',iphone14.getAvailableRAM());
            // }
        }
        iphone14.closeapp('instagram');
        let samsung_running_apps = samsung_Z1_Ultra.getAppRunningNow();
        console.log('Available RAM in Samsung before closing running apps : ',samsung_Z1_Ultra.getAvailableRAM());
        if(samsung_running_apps.length > 0){
            for(let elem of samsung_running_apps){
                samsung_Z1_Ultra.closeapp(elem);
                console.log('Available RAM in Samsung now : ',samsung_Z1_Ultra.getAvailableRAM());
            }
        }
        console.log('Closed all running apps now');
    }
});

/*
        ------------------------
        Apps running in OnePlus phone :  [ 'instagram' ]
        Apps running in iPhone 14 phone :  [ 'whatsapp', 'instagram' ]
        Apps running in Samsung phone :  []
        ------------------------
*/


// GPAY TRANSACTIONS REL
let obj33 = oneplus8.getAppDetails()['google_pay'].provide_gift_vouchers();
async function doPaymentAndGetVoucher(object){
    try{
        let  result = await object.getAppDetails()['google_pay'].pay_to_number('1234',10,8072219131,'sbi',12345678912345678,'5678');
        console.log('Status of transaction 1 is : ',result);
        if(result === 'success'){
            console.log('YOU HAVE RECEIVED A COUPON WORTH RS : ',obj33.next().value,'Thanks for using GPay !!! ');
        }
        else{
            throw new InvalidInputError('PHONE PASSWORD or UPI PASSWORD provided for the bank account is wrong');
        }
    }
    catch(Error){
        console.log('Error occurred while making transaction : ',Error);
    }
}

/*
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  TITAN EYE SPECS offer Rs 250 Thanks for using GPay !!! 
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  LENSKART Rs 50 OFFER Thanks for using GPay !!! 
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  SWIGGY Rs 50 OFFER Thanks for using GPay !!! 
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  CASH BACK OFFER TILL Rs 200 Thanks for using GPay !!! 
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  ZOMATO Rs 100 OFFER Thanks for using GPay !!! 
    Status of transaction 1 is :  success
    YOU HAVE RECEIVED A COUPON WORTH RS :  undefined Thanks for using GPay !!! 
    Status of transaction 1 is :  success
*/