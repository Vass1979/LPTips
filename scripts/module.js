import { registerSettings } from "./settings.js";

const msgArray = [
    "This is one hint",
    "This is a second hint",
    "OMG a third hint has appeared!!!"
];
const randomMSG = msgArray[Math.floor(Math.random() * msgArray.length)];

export default class MessageWindow extends Application {

    constructor(msgArray){
        super();
        this.msg = msgArray;
    }
    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            id : "messagewindow",
            template : "modules/LPTips/templates/messagebox.html",
            resizable : false,
            height : "auto",
            width : 400,
            minimizable : false,
            title : ""
        }
    }

    getData() {
        return {
          messages: this.msg,
          myValue: randomMSG
      };
    }
}
Hooks.on("init", async () => await registerSettings());

Hooks.once('ready', async function() {

    new MessageWindow(msgArray).render(true);
    console.log('CAN YOU SEE THIS?');
    // ui.notification.notify('This is a bloody notification');
    // ui.notifications.info("This is an info message");
});

