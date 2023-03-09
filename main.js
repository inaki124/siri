var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById('texbox').innerHTML="";
    recognition.start();

}

recognition.onresult=  function(event) {
  console.log(event);

  var Content = event.results[0][0].transcript;

document.getElementById("texbox").innerHTML=Content;
console.log(Content);

if (Content=="toma mi foto") {
  console.log("tomando selfie");
  speak();
}


}
function speak() {
  var synth=window.speechSynthesis;
  //speak data no es default
  speak_data="tomando tu Imagen en 5 segundos";
  //utterthis no es default
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);

  setTimeout(function(){
    take_snapshot();
    save(); 
  },6500.01);
}
Webcam.set({
  width:360,
  height:250,
  image_format: 'png',
  png_quality:90
  });
  camera=document.getElementById("pepecamara");

  function take_snapshot(){

    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    })
  }

  function save() {
  link=document.getElementById("link");
  image=document.getElementById("selfie_image").scr;
  link.href=image;
  link.click();

  }