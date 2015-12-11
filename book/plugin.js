require(["gitbook"], function(gitbook) {
    // Load growingio script
    gitbook.events.bind("start", function(e, config) {
        var growingio = config.growingio;
        var _vds = _vds || [];
        window._vds = _vds;
        (function(){
          _vds.push(['setAccountId', growingio['account-id']]);
          (function() {
            var vds = document.createElement('script');
            vds.type='text/javascript';
            vds.async = true;
            vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(vds, s);
           })();
        })();
    });
});
