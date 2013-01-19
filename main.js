var script = function(){
    setTimeout(function() {
        if(DgLastActivityId == 0) {
            setTimeout(function() {
                jQuery('<div>', {
                    id:'toDeployGate', 
                    'last_id':DgLastActivityId, 
                    style:'display:none;'
                }).appendTo(jQuery('body'));
            }, 100);
        }else {
            jQuery('<div>', {
                id:'toDeployGate', 
                'last_id':DgLastActivityId, 
                style:'display:none;'
            }).appendTo(jQuery('body'));
        }
    }, 100);
};

$(document).ready(function() {
    location.href = 'javascript:('+script.toString()+')()';

    setTimeout(function(){
        var last_id = $("#toDeployGate").attr("last_id");
        chrome.storage.local.set({"last_id": last_id}, function() {});
    }, 500);
});
