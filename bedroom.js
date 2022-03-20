img="";
status="";

function preload(){
    img = loadImage('Bedroom.jpg');
    
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "status : detecting objects";


}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
}

function draw(){
    image(img, 0, 0, 640 , 420);
fill("#000000");
text("Lamp",45, 75);
noFill();
stroke("#000000");
circle(40, 60, 600); 

fill("#000000");
text("Bed",320,120 );
noFill();
stroke("#000000");
rect(300, 90 , 270, 320); 
}