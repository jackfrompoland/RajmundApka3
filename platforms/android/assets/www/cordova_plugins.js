cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.battery-status/www/battery.js",
        "id": "org.apache.cordova.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.initialxy.cordova.themeablebrowser/www/themeablebrowser.js",
        "id": "com.initialxy.cordova.themeablebrowser.themeablebrowser",
        "clobbers": [
            "cordova.ThemeableBrowser"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.battery-status": "0.2.12",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "com.initialxy.cordova.themeablebrowser": "0.2.7"
}
// BOTTOM OF METADATA
});