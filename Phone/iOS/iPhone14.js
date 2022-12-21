import IoS from '../IoS.js';
export default class iPhone14 extends IoS{
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