Webcam.set ({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90,
});

camera = document.getElementById("camera");
Webcam.attach(camera);

console.error("Error 404 not found please try again later, also don't look through my console. This is my first and last warning")

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='image1' src='" + data_uri + "'>";
    }) 
}

console.log("currect version of Ml5 = ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S01ocLFZg/model.json",ModelIsLoaded)
function ModelIsLoaded()
{
    console.log("Lucky You the model loaded and is connected");
}

function check()
{
    img = document.getElementById("image1");
    classifier.classify(img,gotaresult);
}

function gotaresult(error, results)
{
    if (error)
    {
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_Accuracy").innerHTML = results[0].confidence.toFixed(2)
    }
}