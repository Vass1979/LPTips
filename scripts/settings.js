const moduleName = "LPTips";
const SETTINGS = [
    
    {
        key: "landingPageName",
        data: {
            name: "Name of landing page:",
            hint: "The name of the scene where you want the tips to appear",
            type: String,
            default: "Landing Page",
            scope: "world",
            config: true,
            restricted: true,
        }
    }
   
];
const registerSetting = (setting) => game?.settings?.register(moduleName, setting.key, setting.data);
const registerSettings = () => SETTINGS.forEach(registerSetting);
const getSetting = (settingKey) => game?.settings?.get(moduleName, settingKey);
const setSetting = async (dataToSave, dataKey) => await game?.settings?.set(moduleName, dataKey, dataToSave);
export { registerSettings, setSetting, getSetting };
