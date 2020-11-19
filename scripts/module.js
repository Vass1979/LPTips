import { registerSettings } from "./settings.js";
Hooks.on("init", async () => await registerSettings());

Hooks.once('ready', async function() {

    

    console.log('CAN YOU SEE THIS?');
});
