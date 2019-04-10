
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){

     var mylist = document.getElementById("data");
   

      mylist.innerHTML = response ;
 
   
    });
});



