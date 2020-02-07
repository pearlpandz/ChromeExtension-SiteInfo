document.addEventListener('DOMContentLoaded', function () {
    getMessage();
    chrome.tabs.getSelected(null, function (tab) {
        console.log(tab);
        d = document;
        
        var title = d.createElement('h4');
        title.innerText = 'Your Site Url';
        d.body.appendChild(title);

        var url = d.createElement('div');
        url.innerText = tab.url;
        d.body.appendChild(url);
    });

}, false);

function getMessage() {
    var welcome = document.getElementById('welcome');
    var date = new Date();
    if (date.getHours() < 12) {
        welcome.innerText = 'Hey! Morning :)';
    }
    else {
        welcome.innerText = 'Hey! Evening :)';
    }
}
