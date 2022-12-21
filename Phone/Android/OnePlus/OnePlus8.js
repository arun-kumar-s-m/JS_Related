import OnePlus from '../OnePlus.js';
export default class OnePlus8 extends OnePlus{
    constructor(uname,pwd){
        super();
        this.setRAM(8);
        this.setOSVersion(12);
        this.setCustomOsVersion(10);
        this.setInternalMemory(128);
        this.setDeaultOsSize(1.2);
        this.setCustomOsSize(0.3);
        this.setModelName('OnePlus 8');
        this.installGeneralApps(this);
        this.setAppRunningNow([]);
        this.setPhoneLogs([]);
        this.setUserName(uname);
        this.setPassword(pwd);
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
    verifyWhetherFileExists(filepath){
        console.log('Value of filepath is : ',filepath);
        if(String(filepath).includes("/")){
            return true;
        }
        else{
            return false;
        }
    }
    checkCameraIsInGoodState(){
        console.log('Checking camera functionalities ');
        return true; // for simplicity returning true directly but the real functions would consists of checking camera 
    }
    checkMicWhetherGood(){
        console.log('Checking mic functionalities ');
        return true; // for simplicity returning true directly but the real functions would consists of checking camera 
    }
    installGeneralApps(object){
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
                },
                send_file_to_user : function(filepath,to_user_number,callback){
                    console.log('Inside send_file_to_user function : ',filepath);
                    let file = object.verifyWhetherFileExists(filepath);
                    if(file){
                        callback(filepath,to_user_number);
                    }
                    else{
                        throw new InvalidInputError('File doesn\'t exist in the provided filepath');
                    }
                },
                send_file : function(filepath,to_user_number){
                    console.log('Retrieving file from path ',filepath);
                    console.log('Sending the file to user with no : ',to_user_number);
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
            },
            google_pay : {
                version : 43,
                storage_size_in_gb : 0.12,
                size_consum_in_ram_in_gb  : 0.2,
                pay_to_number : function(pwd, amount , tonumber,bank_name,account_number,upi_pin){
                    console.log('User requesting to pay Rs.',amount,'to number : ',tonumber);
                    console.log('DEBUG 2 : ',bank_name)
                    console.log('DEBUG 1 : ',object.getBankAccount()[bank_name]);
                    let h = object.getBankAccount()[bank_name][account_number].upi_pin;
                    console.log('UPI PWD ip : ',upi_pin,'type is : ',typeof upi_pin);
                    console.log('UPI BEING SET : ',h,'type is : ',typeof h);
                    console.log('INSIDE THEN BLOCK OF PROMISES : Phone password verified successfully');
                    return new Promise((resolve,reject) => {
                        if(object.getPassword() === pwd){
                            // console.log('Password matches and returned verified promise');
                            resolve('verified');
                        }
                        else{
                            // console.log('Password entered is wrong');
                            reject('Provided password is wrong');
                        }
                    }).then(function(result){
                        if(result === 'verified'){
                            // let h = this.getBankAccount()[bank_name][account_number].upi_pin;
                            // console.log('UPI PWD ip : ',upi_pin,'type is : ',typeof upi_pin);
                            // console.log('UPI BEING SET : ',h,'type is : ',typeof v);
                            // console.log('INSIDE THEN BLOCK OF PROMISES : Phone password verified successfully');
                            // if(this.getBankAccount()[bank_name][account_number].upi_pin == upi_pin){
                            if(h == upi_pin){
                                return  new Promise((resolve , reject) => {
                                    resolve('UPI PIN verified successfully');
                                });
                            }
                            else{
                                return  new Promise((resolve , reject) => {
                                    reject('UPI PIN provided is wrong');
                                });
                            }
                        }
                    },function(error){
                        console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
                        throw error;
                        // return 'failure';
                    }).then(function(result){
                        if(result === 'UPI PIN verified successfully'){
                            console.log('Transaction done successfully');
                            return 'success';
                        }
                    },function(error){
                        console.log('Transaction failed since UPI provided is wrong one');
                        return 'failure';
                    });
                  //  // .catch((error) => console.log(error));
                  //  // .catch((error) => console.log(error))
                    // promise.catch((error) => console.log(error));
                    // promise.then(function(result){
                    //     if(result === 'verified'){
                    //         console.log('INSIDE THEN BLOCK OF PROMISES : Payment has been done successfully');
                    //     }
                    //     else{
                    //         console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
                    //     }
                    //     console.log(result);
                    // },function(error){
                    //     console.log('INSIDE THEN BLOCK OF PROMISES : Payment failed since the entered password of the device is wrong');
                    //     console.log(error);
                    // });
                    promise.finally(() => console.log('Closing gpay app'));
                },
                provide_gift_vouchers : function* (){
                    let countOfTransactions = 0;
                    while(countOfTransactions < 5){
                        yield '50';
                        countOfTransactions++;
                    }
                    while(countOfTransactions < 10){
                        yield '100';
                        countOfTransactions++;
                    }
                    // yield 'TITAN EYE SPECS offer Rs 250';
                    // yield 'LENSKART Rs 50 OFFER';
                    // yield 'SWIGGY Rs 50 OFFER';
                    // yield 'CASH BACK OFFER TILL Rs 200';
                    // yield 'ZOMATO Rs 100 OFFER';
                }
            },
            google_meet : {
                async join_session(meeting_link){
                    let isCameraFine = await object.checkCameraIsInGoodState();
                    let isMicGood = await object.checkMicWhetherGood();
                    if(isCameraFine && isMicGood){
                        console.log('Joining the remote session as requested with meeting link as ',meeting_link);
                    }
                    else{
                        if(!isCameraFine){
                            console.log('There is a problem with the camera function');
                        }
                        if(!isMicGood){
                            console.log('There is a problem with the Mic being uses');
                        }
                    }
                }
            }
            // ,
            // jio_music : {
            //     latestmusics  : {},
            //     make_request_and_get_response : function(){
            //         object.getAppDetails()['jio_music'].latestmusics = ['Chilla Chilla', 'Thee Thalapathy', 'Ranjithame','Kasedhan kadavulada'];
            //         // return { 
            //         //     songs : ['Chilla Chilla', 'Thee Thalapathy', 'Ranjithame','Kasedhan kadavulada']
            //         // };
            //     },
            //     get_latest_music : async function*(){

            //         // let latestmusics = {};
            //         // let latestmusics = await setTimeout(() => {
            //         //     latestmusics = object.getAppDetails()['jio_music'].make_request_and_get_response
            //         // },5000);
            //         let obj = await setTimeout(() => {
            //             object.getAppDetails()['jio_music'].make_request_and_get_response();
            //         },5000);
            //         // console.log('Current latest songs : ',object.getA ppDetails()['jio_music'].make_request_and_get_response());
            //         // console.log('Current latestmusics array : ',);
            //         // yield
            //         // console.log('Hi Arun !! ',object.getAppDetails()['jio_music'].latestmusics);
            //         // for(let song of object.getAppDetails()['jio_music'].latestmusics.songs){
            //         //     console.log('SONG G : ',song);
            //         // }
            //         console.log('Hi Arun !! ',object.getAppDetails()['jio_music'].latestmusics);
            //         for(let song of object.getAppDetails()['jio_music'].latestmusics.songs){
            //             console.log('SONG G : ',song);
            //         }
            //     }
            // }
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