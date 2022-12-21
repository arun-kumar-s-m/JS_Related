export default class Phone{
    #internal_memory_in_gb;
    #os_version;
    #user_name;
    #password;
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
    #bankaccounts;
    setInternalMemory(memory){
        this.#internal_memory_in_gb = memory;
    }
    getInternalMemory(){
        return this.#internal_memory_in_gb;
    }
    setUserName(uname){
        this.#user_name = uname;
    }
    getUserName(){
        return this.#user_name;
    }
    setPassword(pwd){
        this.#password = pwd;
    }
    getPassword(){
        return this.#password;
    }
    setBankAccount(obj){
        this.#bankaccounts = obj;
    }
    getBankAccount(){
        return this.#bankaccounts;
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