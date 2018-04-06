
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=59FvKedrxrKXE9yHJqWeKaJdSl6kLmtq";
var query = "&q=mood&limit=25&offset=0&rating=G&lang=en";

var x = 0;

var button;


function setup(){
  noCanvas();
var url = "https://api.giphy.com/v1/gifs/search?api_key=59FvKedrxrKXE9yHJqWeKaJdSl6kLmtq&q=Mood&limit=25&offset=0&rating=G&lang=en";
loadJSON(url, gotData);

button = createButton('TRY AGAIN');
button.position(250, 85);
button.mousePressed(newmood);


}

function newmood() {
  x = x+1;
}

function gotData(giphy){
  createImg(giphy.data[x].images.original.url);


}
