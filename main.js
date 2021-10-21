status ="";
objects = [];
function preload()
{
    img = loadImage('apple.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420); 
         canvas.center(); 
         objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
         document.getElementById("status").innerHTML = "Status : Detecting Objects . . . Please wait"; 
}
function modelLoaded()
{
    console.log("Model Loaded!") 
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) 
{ 
    if (error) 
    { 
    console.log(error);
    } 
    console.log(results);
    objects = results;
    }
    function draw()
    {
        if(status!="";)
        {
            for(i = 0; i<objects.length;i++)
            {
                document.getElementById("status").innerHTML = "Status = Object Detected!!"
                percent = floor(object[i].confidence*100);
                text(objects[i].label+""+percent+"%", objects[i].x,objects[i].y);
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
    }