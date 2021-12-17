ogat=" ";
animal =  [ ];
statu=" ";


function preload(){
    ogat=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    detective=ml5.objectDetector("cocossd",loaded);
    statu=" Loading 0 "
    document.getElementById("sta").innerHTML= statu;
}

function loaded(){
    console.log("model chalu"); 
    detective.detect(ogat,getresult);
}

function getresult(error,results){
    if (error) {
        console.log(error);
    } 
        console.log(results);
        animal=results;
}

function draw(){
    
    image(ogat,0,0,400,400);

    for(i=0;i<animal.length;i++){

        fill("black");
        stroke("black");
        noFill();

        pers=floor(animal[i].confidence*100);

        rect( animal[i].x , animal[i].y,animal[i].width,animal[i].height );
        text(animal[i].label + " "+ pers + " % " ,animal[i].x +10 ,animal[i].y+ 10 );
    
        statu=" Loaded "
        document.getElementById("sta").innerHTML= statu;

    }

}
//order for giving a shape it's things === "( x , y , width, height )"//