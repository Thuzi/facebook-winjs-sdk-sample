# Facebook Sample using facebook-winjs-sdk

This sample demonstrates the use of [facebook-winjs-sdk](https://github.com/Thuzi/facebook-winjs-sdk) as a Windows 8 Store Javascript Application.

_Note: This sample does not necessarily demonstrate the best use but rather features of using [facebook-winjs-sdk](https://github.com/Thuzi/facebook-winjs-sdk) on a Windows 8 Store App. Always remember to handle exceptions._

# Getting started

Set the appropriate `appId` in `js/main.js` file before running the sample.

```js
FB.options({
    appId: '...'
});

```

_**Note:**
Make sure to enable `Internet (Client)` capability in `Package.appxmanifest` file.
This is already enabled by default when creating a new project in Visual Studio._
