var script = function(){
    search();

    function search() {
        if(DgLastActivityId == 0) {
            setTimeout(function() {search();},500);
        }else {
            jQuery('<div>', {
                id:'toDeployGate', 
                'last_id':DgLastActivityId, 
                style:'display:none;'
            }).appendTo(jQuery('body'));
        }
    }
};

$(document).ready(function() {
    location.href = 'javascript:('+script.toString()+')()';
    set();
});

function set() {
    var last_id = $("#toDeployGate").attr("last_id");
    if(!last_id) {
        setTimeout(function() {set();},500);
    }else {
        chrome.storage.local.set({"last_id": last_id}, function() {});
    }
}
