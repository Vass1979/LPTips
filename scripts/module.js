import { registerSettings } from "./settings.js";
Hooks.on("init", async () => await registerSettings());

Hooks.once('ready', async function() {

    

    console.log('CAN YOU SEE THIS?');
    // ui.notification.notify('This is a bloody notification');
    ui.notifications.info("This is an info message");
});

let lptMessages = [ //This is where we store the messages to display. Will move to config at some point.
    'This is a message',
    'This is another message'
];

export default class MessageWindow extends Application {

    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            id : "messagewindow",
            template : "modules/LPTips/templates/messagebox.html",
            resizable : false,
            height : "auto",
            width : 400,
            minimizable : true,
            title : "LPTips Message"
        }
    }
}

new MessageWindow();