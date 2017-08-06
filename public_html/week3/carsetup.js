/* global colorinput */

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width/2;

//Select the following Elements using the querySelector function

	var carWidth= document.querySelector("#car-width > input");

	var wheelDistance= document.querySelector("#wheel-distance > input");

	var roofSlider= document.querySelector("#roof-height > input");

	var ftSlider= document.querySelector("#front-pitch > input");

	var rtSlider= document.querySelector("#rear-pitch > input");

	var rearSlider= document.querySelector("#rear-tire > input");

	var frontSlider= document.querySelector("#front-tire > input");

	var colorInput= document.querySelector("#color > input");

	var sponsored= document.querySelector('#sponsor > input[type="checkbox"]');

	var sponsorNameBox= document.querySelector("#sponsor > input.range");


//Open up the console and look at the properties for the protocar object
console.log(JSON.stringify(protocar));

var car = {  
   "width":400,
   "front":100,
   "rear":100,
   "roof":100,
   "color":"#ff0000",
   "sponsor":{  
      "name":"",
      "decal":false
   },
   "ft":{  
      "x":550,
      "y":550,
      "radius":100,
      "color":"#000000"
   },
   "rt":{  
      "x":350,
      "y":550,
      "radius":100,
      "color":"#000000"
   },
   "topLimit":"550"
}



var timer = setInterval(animate, 1000/60);

function animate()
{
		ctx.clearRect(0,0,c.width,c.height);
		
                
        //call the drawCar() function and pass it your car object
		
                drawCar(car) 
		//Assign the colorInput's value to the car's color property
                car.color=colorInput.value
		
		//convert the roofSlider's value to a number and assign it to the car's roof property
                
                car.roof = parseInt(roofSlider.value, 10)
        
		//convert the frontSlider's value to a number and assign it to the car's front property
                
                car.front=parseInt(frontSlider.value,10)
       
		//convert the rearSlider's value to a number and assign it to the car's rear property
                
                car.rear=parseInt(rearSlider.value,10)
       
		//convert the carWidth's value to a number and assign it to the car's width property
                car.width=carWidth.value
       
		//set the roof, front and rear sliders' .max attributes to the car's topLimit property
                roofSlider.max=car.topLimit
                rearSlider.max=car.topLimit
                rearSlider.max=car.topLimit
                
        
		//set the car's front and rear tires' radius properties equal to the ft and rt slider's values
		car.ft.radius=ftSlider.value
                car.rt.radius=rtSlider.value
		//create a variable called wd and assign the wheelDistance slider's value to it as a Number.
                
		var wd = parseInt(wheelDistance.value,10)
                
		//set the car's front tire's x property equal to the center plus wd.
		car.ft.x = (car.width/2) + wd
		//set the car's rear tire's x property equal to the center minus wd.
                car.rt.x = (car.width/2) - wd
		
  
		
		/*
		
		Use a conditional statement (if else) to determine whether the sponsored input is checked or not.
	
		if it is checked do the following:
			1. enable the sponsorNameBox
			2. set the car's sponsor decal to true
			3. set the car's sponsor name to the value of the sponsorNameBox
		else
			1. disable the sponsorNameBox
			2. set the car's sponsor decal to false
		
		*/
               if(sponsored.checked == true)
               {   sponsorNameBox.disabled = false; 
                   car.sponsor.decal.value=true
                   car.sponsor.name=sponsorNameBox.value
                    
                }
                
                else{ 
                    sponsorNameBox.disabled = true;
                    car.sponsor.value=false
                }
                
		
	
		
     
}
