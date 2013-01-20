(function(undefined) {
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({url: "http://deploygate.com/"});
    });


    //定期実行の宣言
    chrome.alarms.onAlarm.addListener(function(alarm) {
        if(alarm.name == 'refreshDeployGate') {
            chrome.storage.local.get(["last_id"], function(data) {
                var last_id = data.last_id;
                var url = "https://deploygate.com/dashboard/activities?last_id=" + last_id;

                $.get(url, function(data) {
                    var count = $(data).find("span.label-important").length;
                    if(count) {
                        chrome.browserAction.setBadgeText({text:String(count)});
                    }else {
                        chrome.browserAction.setBadgeText({text:""})
                    }
                });
            });
        }
    });

    chrome.alarms.create('refreshDeployGate', {periodInMinutes: 5});

})();
