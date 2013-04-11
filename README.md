# Facebook Sample using facebook-winjs-sdk

This sample demonstrates the use of [facebook-winjs-sdk](https://github.com/Thuzi/facebook-winjs-sdk) as a Windows 8 Store Javascript Application.

_Note: This sample does not necessarily demonstrate the best use but rather features of using [facebook-winjs-sdk](https://github.com/Thuzi/facebook-winjs-sdk) on a Windows 8 Store App. Always remember to handle exceptions._

# About the Sample

The scrumptious sample was originally a sample we got from Facebook that was an HTML5 sample.  We challenged ourselves to see how easy it would be to port the sample to run on Windows 8 using WinJS and we were able to reuse over 95% of the code.  We were able to reuse all of the client side Facebook Javascript except for logging in that was originally written to use with the Facebook JS-SDK.  

# Getting started

Set the appropriate `appId` in `js/main.js` file before running the sample.

```js
FB.options({
    appId: '...'
});

```
# Setting up Open Graph

Here is a example of how you set up the open graph for the custom actions:

http://developers.facebook.com/docs/tutorials/ios-sdk-tutorial/publish-open-graph-story/#step1

_**Note:**
Make sure to enable `Internet (Client)` capability in `Package.appxmanifest` file.
This is already enabled by default when creating a new project in Visual Studio._
