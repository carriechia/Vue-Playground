export default {
    created() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '2346061822076325',
                cookie     : true,
                xfbml      : true,
                version    : 'v9.0'
            });

            FB.AppEvents.logPageView();
        };

        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        window.checkLoginState = function(){
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }
    }
};

/**
 * 取得 facebook Login 狀態
 */
function statusChangeCallback (response) {
    if (response.status === 'connected') {
      getProfile()
    }

    if (response.status === 'not_authorized') {
    }

    if (response.status === 'unknown') {
    }
}

/**
 * 取得facebook登入者資料
 */
function getProfile() {
    FB.api('/me?fields=name,id,email', function (response) {
        console.log(response)
    })
}