document.addEventListener('DOMContentLoaded', function () {
    getMessage();
    // injectTheScript();
    // chrome.tabs.getSelected(null, function (tab) {
    // console.log(tab);
    // getCurrentTabUrl(tab.url);
    // });
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

injectTheScript();

function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content_scripts.js" });
    });
}


// get product informations
function getCurrentTabUrl(url) {
    console.log(url);
    const pid = url.split('=')[1]
    getProductDetails(pid, function (data) {
        productDetail = data;
        console.log(data);
    });
}

getProductDetails = async (pid, callback) => {
    const serverAddress = "http://104.131.165.92:8081";

    const response = await fetch(`${serverAddress}/product/productId/${pid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const myJson = await response.json();
    console.log(myJson);
    callback(myJson);

}









