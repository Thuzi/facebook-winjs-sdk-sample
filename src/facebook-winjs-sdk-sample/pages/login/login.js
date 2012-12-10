// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/login/login.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            WinJS.Utilities.query('#login').listen('click', loginClicked, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });

    function loginClicked(e) {
        e.preventDefault();
        
        var redirectUri = 'https://www.facebook.com/connect/login_success.html',
            loginUrl = 'https://www.facebook.com/dialog/oauth'
                + '?response_type=token'
                + '&display=popup'
                + '&scope=' + encodeURIComponent('user_about_me,publish_stream,read_stream')
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&client_id=' + FB.options('appId');

        try {
            
            Windows.Security.Authentication.Web.WebAuthenticationBroker.authenticateAsync(
                Windows.Security.Authentication.Web.WebAuthenticationBroker.default,
                new Windows.Foundation.Uri(loginUrl),
                new Windows.Foundation.Uri(redirectUri))
                .then(function success(result) {
                    if (result.responseStatus !== 0) {
                        console.log('error: ' + result.responseerrordetail);
                        return;
                    }

                    var parser = document.createElement('a');
                    parser.href = result.responseData;

                    var qs = extractQuerystring(parser.hash.substr(1).split('&'));
                    
                    if (qs.error) {
                        // most likely user clicked don't allow
                        console.log('error: ' + qs.error + ' : ' + qs.error_description);
                        return;
                    }

                    // we now have the access token,
                    
                    // set it as the default access token.
                    FB.setAccessToken(qs.access_token);
                    
                    // save it in local storage so can access it later
                    localStorage.setItem('fb_access_token', FB.getAccessToken());

                    // now navigate to home page
                    WinJS.Navigation.navigate('/pages/home/home.html');

                }, function error(err) {
                    console.log('Error Number: ' + err.number);
                    console.log('Error Message: ' + err.message);
                });
            
        } catch(e) {
            // error launching web auth
            console.log(e);
        } 
    }

    function extractQuerystring(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    }
    
})();
