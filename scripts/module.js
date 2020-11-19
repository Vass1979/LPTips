(() => { })();
console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.once('init', async function() {
    console.log("FROM LPTips: This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.once('ready', async function() {
    console.log("FROM LPTips: This code runs once core initialization is ready and game data is available.");
});
