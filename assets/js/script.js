//variables
var inputValue = document.querySelector("#tags");
var caption = [];
var captionEl = document.getElementById("cat-caption");


//functions to save caption to local storage
function saveCaption(){
    var caption = inputValue.value.trim()
    if(!caption){
        return false;
    }
    addCaption(caption)
    displayCaption();
};

function addCaption(caption){
    localStorage.setItem("caption", JSON.stringify(caption));
}

// //display the caption on the page
function displayCaption(){
    // test = JSON.parse(localStorage.getItem("caption"));
    // caption.push(test);
    // console.log(caption);
        if (caption.length === 0){
            console.log(caption[0])
            test = JSON.parse(localStorage.getItem("caption"));
            caption.push(test);
            console.log(caption[0])
        var displayTag = document.createElement("li");
        displayTag.innerHTML = test;
        captionEl.appendChild(displayTag);
        } else {
        removeCaption();
        test = JSON.parse(localStorage.getItem("caption"));
        caption.push(test);
        console.log(caption[0])
        var displayTag = document.createElement("li");
        displayTag.innerHTML = test;
        captionEl.appendChild(displayTag);
        }
};

function removeCaption() {
    captionEl.removeChild(captionEl.lastChild)
};

//function to fetch a cat fact
function getCatFact(){
    var apiUrl="https://meowfacts.herokuapp.com";
    fetch(apiUrl).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                var fact = data.data;
                $("#fact-box p").html(fact);
            })
        }
    });
}

//function to fetch a cat image
function getCatPic(){
    var apiUrl="https://cataas.com/cat?json=true";
    fetch(apiUrl).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                var fact = data.data;
                $("#catPic").attr("src", "https://cataas.com/" + data.url)
            })
        }
    });
}

//Event Listeners
$("#factButton").click(function(){
    getCatFact();
});

$("#pictureButton").click(function(){
   getCatPic();
});


$("#caption-button").click(function(){
    saveCaption();
 });






