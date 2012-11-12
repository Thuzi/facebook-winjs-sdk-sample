(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            WinJS.Utilities.query('#logout').listen('click', logoutClicked, false);

            loadData();
        }
    });

    function logoutClicked(e) {
        e.preventDefault();

        localStorage.removeItem('fb_access_token');
        FB.setAccessToken(null);

        WinJS.Navigation.navigate('/pages/login/login.html');
    }

    function loadData() {
        FB.api('me', function(res) {
            if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }

            $('#hi').html('Hi ' + res.name + '!');

            $('#picture').attr('src', 'http://graph.facebook.com/' + res.id + '/picture');
        });


    }
    
})();
