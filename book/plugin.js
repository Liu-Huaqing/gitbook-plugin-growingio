require(["gitbook"], function(gitbook) {
    // Load growingio script
    gitbook.events.bind("start", function(e, config) {
        var cmds = config.cmds || [];
        var _vds = _vds || [];
        window._vds = _vds;
        (function(){

          for(var i=0; i<cmds.length; i++) {
            _vds.push(cmds[i]);
          }

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
