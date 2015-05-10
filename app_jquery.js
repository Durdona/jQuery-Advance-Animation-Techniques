
//**//**//**//**//**//**//**//**//** Advanced Animation Techniques //**//**//**//**//**//**//**//**//**//**//**//**//**
// working with non-numeric CSS properties since Advanced Animation is a bit more complex and requires using CSS Functions 

						// Transforming DOM Elements in 2D


// CSS Transform Functions:
// translate(x, y) // x - horizontal, y - vertical axis 
// scale(x, y)
// rotate(deg)
// Example CSS: transform: translate(100px, 100px)scale(2, 2)rotate(30deg) - scaling the element is twice as big in the X and Y directions 

// CSS Transform 'translate' Function 
// Example in jQuery 
	$(document).ready(function(){
		var logoVar = $('#logo');

		$({t: 0}).animate( // instead of passing it the DOM object logo, we're passing it a dummy jQuery object. The reason for doing this is that we want to animate a non-numeric CSS value. 
		{
			t: 200  // animate method will know that we are going from zero to 200
		},// we are moving our logo in the Y direction from 0 to 200 all the way down 
		{ // animate method options below 
			duration: 3000,  // 3 seconds for the entire animation
			step: function(now){  // step option is going to get called as the animation progresses. 
				logoVar.css('transform', 'translate(0px, ' + now + 'px)'); // this is where we actually look at the DOM element logo 
			}
		});
	});

// sudden idea: What it does is it will fade in and out on the page 
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 200 // if I set it up to zero like 'd:0' after some period of time it stops fading and logo remains on the page otherwise with d:200 it will disappear 
	},
	{
		// duration: 3000,
		step: function(now){
			logoVar.fadeToggle(500);
			}
		}
	)
});


// Another sudden idea: what it does is it fades down from 0 to 200 and remains fading. an image after long time disappears
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 200 // if I set it up to zero like 'd:0' after some period of time it stops fading and logo remains on the page otherwise with d:200 it will disappear 
	},
		{
		duration: 8000,
		step: function(now){
			logoVar.fadeToggle(3000)
			logoVar.css('transform', 'translate(0px, ' + now + 'px)');
			} // remember that this CSS property is a function call. It is not a numeric value.
		}
	)
});

// CSS Transform 'scale' function 
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 4 // For scaling '1' is original size. We're starting from 0 very small it's invisible and when it reaches '1' it'll be its original size. Here it'll be 4 times the normal size meaning it will start super small, and will grow up to be 4 times the size. 
	},
	{
		duration: 4000,
		step: function(now){
			logoVar.css('transform', 'scale(' + now + ' ,' + now + ')') // 'scale' will take two 'now'  meaning 'numbers' how much it'll scale in the X direction and how much it'll scale in the Y direction 
			} 
		}
	)
});

// Another sudden idea: It scales and fades out 
	$(document).ready(function(){

		var logoVar = $('#logo');

		$({d: 0}).animate(
		{
			d: 4 
		},
		{
			duration: 8000,
			step: function(now){
				
				logoVar.css('transform', 'scale(' + now + ' ,' + now + ')')
				logoVar.fadeOut(3000);
			} 
		}
	)
});

// CSS Transform 'rotate' Function 
	$(document).ready(function(){
		var logoVar3 = $('#logo2');

		$({k: 0}).animate(
		{
			k: 360
		},
		{
			duration: 4000, // don't forget comma in here otherwise you'll get 'Uncaught SyntaxError: Unexpected identifier'
			step: function(now){
				logoVar3.css('transform', 'rotate(' + now + 'deg)');
			}
		}
	)
});

// Another idea: After rotating it will fade out 
	$(document).ready(function(){
		var logoVar4 = $('#logo');

		$({a: 0}).animate(
		{
			a: 360
		},
		{
			duration: 3000,
			step: function(now){
				// logoVar4.fadeIn(2000) adding this function will make our logo fade in & out non stop 
				logoVar4.css('transform', 'rotate(' + now + 'deg)')
				logoVar4.fadeOut(3000);  // if pass it a string value like 'logoVar4.fadeOut('slow') it will not fade out so pass it a second in number '
			}
		}
	)
});

// Now what if we want to rotate, scale, or transform of the same image ?
	$(document).ready(function(){
		var logoVar5 = $('#logo');
		var scaleVar = 0;
		var rotateVar = 0;

		$({scaleVar: 0, rotateVar: 0}).animate(
		{
			scaleVar: 2,
			rotateVar: 360
		},
		{
			duration: 3000,
			step: function(now, ab){

				if(ab.prop == 'scaleVar')
					scaleVar = now;
				else if(ab.prop == 'rotateVar')
					rotateVar = now;

				logoVar5.css('transform', 'scale(' + scaleVar + ') rotate(' + rotateVar + 'deg)')
				logoVar5.fadeOut(3000);
			}
		}
	)
});

// idea: trying to combine 'translate' with 'rotate' CSS Transform functions
$(document).ready(function(){
		var logoVar = $('#logo');
		var rotateVar =0;

		$({translateVar: 0, rotateVar: 0}).animate( 
		{
			translateVar: 200,
			rotateVar: 360 
		},
		{ // animate method options below 
			duration: 5000,  // 5 seconds for the entire animation
			step: function(now, abc){  

				if(abc.prop == 'translateVar')
					translateVar = now;
				else if(abc.prop =='rotateVar')
					rotateVar =now; 

				logoVar.css('transform', 'translate(0px, ' + now + 'px) rotate(' + rotateVar + 'deg)'); 
				// NEED TO GET X and Y positions and asked in stackoverflow waiting for a proper answer 
			}
		}
	);	
});

// sudden idea: what it does is it stops animation when it reaches its halfway uncomment it to see how it works I have easing that's why it's commented
	$(document).ready(function(){
		var imgVar = $('#logo');

		$({n: 100}).animate(
		{
			n: 400
		},
		{
			duration: 3000,
			easing: 'easeOutBounce',  
			step: function(now, tween){  // tween will make it stop when it reaches halfway 
				imgVar.css("transform", 'translate(0px, ' + now + 'px) ');
				imgVar.text(now)
				// if(tween.pos > 0.5)  
				// 	$(this).stop();
			}
		}
	)
});

						  	// Transforming DOM Elements in 3D

// Rotating an element on the X axis will be accomplished with 'rotateX(deg)' 
// Rotating an element on the Y axis -> rotateY(deg)
// Rotating  an element on the Z axis -> rotateZ(deg)  -> Z axis points directly at the viewer 

// 3D works only when you have an image inside some other container(element) and set up .css properties in our case <div> is a container.  <div> should have 'position: relative' and an image(logo) inside of it should have 'position: absolute'
// Example:
		$(document).ready(function(){
		$('#box').css({
			'perspective': '50px',    // 'perspective' is a 3D value, which lets us know how close or how far away we are from the object itself
			'perspective-origin': '50% 50%'  // 'perspective-origin' will center the image in the middle of our view or we can adjust this and get it to rotate from an edge
		});
		var imgLogo = $('#logo3D');

		$({ threeD : 0}).animate (
		{
			threeD: 360
		},
		{
			duration: 6000,
			easing: 'easeOutBounce',
			step: function(now, abc){  // after 'now' i have 'abc' it just simply to run a code stably I guess
				imgLogo.css('transform', 'rotateX('+now+ 'deg)' );
			}
		}
	);
});

// I am trying 'skew' in 3D
	$(document).ready(function(){
		$('#box').css({
			'perspective': '0px',    
			'perspective-origin': '50% 50%'  
		});
		var imgLogo = $('#logo3D');

		$({ threeD : 0}).animate (
		{
			threeD: 360
		},
		{
			duration: 6000,
			easing: 'easeOutCirc',
			step: function(now, abc){
				imgLogo.css('transform', 'skew('+now+ 'deg)' );
			}
		}
	);
});


// trying  'scale'   No difference at all  with 2D way technique 
	$(document).ready(function(){
		$('#box').css({
			'perspective': '0px',    
			'perspective-origin': '50% 50%'  
		});
		var imgLogo = $('#logo3D');
		var scaleVar = 0;

		$({ scaleVar : -5}).animate (  // trick: an idea came to my mind. I changed its value from positive to the negative value now it animates from large to small size
		{
			scaleVar: 2  // trick: negating this value will make an image upside down 
		},
		{
			duration: 3000,
			// easing: 'easeOutCirc',
			step: function(now, abc){

			imgLogo.css('transform', 'scale(' + now + ' ,' + now + ')')
			}
		}
	);
});

// Combination of all three coordinates X, Y, Z
	$(document).ready(function(){
		$('#box').css({
			'perspective': '50px',
			'perspective-origin': '50% 50%'
		});

		var img3DLogo = $('#logo3D');

		$({ rotateVar: 0}).animate(
			{
				rotateVar: 60 // when use 'rad' decrease this number to give slower motion otherwise it looks a bit hyper
			},
			{
				duration: 9000,
				easing: 'easeOutElastic',
				step: function(now, abc){
					img3DLogo.css('transform', 'rotateZ(' + now + 'deg) rotateX(' + now + 'deg) rotateY(' + now + 'deg)');
				} // try radiance 'rad' -> img3DLogo.css('transform', 'rotateZ(' + now + 'rad) rotateX(' + now + 'rad) rotateY(' + now + 'rad)');
			}
		)
	});

//**//**//**//**//**//**//**//**//**//**//**//**//**//** Animating Colors //**//**//**//**//**//**//**//**//**//**//**//**//**//**
	$(document).ready(function(){

		var logo = $('#pngImg');

		logo.animate({backgroundColor: 'red'}, 5000);  // 'red' isn't a numeric value 
	
	});

//**//**//**//**//**//**//**//**//**//**//**//**//**//** Animation Queues  //**//**//**//**//**//**//**//**//**//**//**//**//**//**

	$(document).ready(function(){
		var imageLogo = $('#pngImg');
			
			imageLogo.show(4000)
			.animate({easing: 'easeOutBounce' }, 1000)
			.animate({left: '200px'}, 2000)
			.animate({top: '200px'}, 2000)
			.animate({left: '0px'}, 2000)
			.animate({backgroundColor: 'green'})
			.hide(3000);

			$('input').click(function(){
				imageLogo.slideToggle(  // try 'imageLogo.fadeOut'
				{
					duration: 2000,
					queue: 'slide'
				});
				imageLogo.dequeue('slide');
			})


	});


////****NOTE! ****////****////**** jQuery 2D and 3D transform capabilities of .css() and .animate() functions: USAGE ////****////****////****////****////****////****////****
	// $('#myDiv').css('transform', 'translate(50px, 30px) rotate(25deg) scale(2,.5) skew(-35deg)');
	// $('#myDiv').animate({transform: 'translateY(-100px) rotate(1rad) scaleX(2) skewY(42deg)'});

	// I tried this 
		$(document).ready(function(){
		var imageLogo = $('#pngImg');
			
			imageLogo.show(4000)
			.animate({easing: 'easeOutBounce' }, 1000)
			.animate({left: '200px'}, 2000)
			.animate({top: '200px'}, 2000)
			.animate({left: '0px'}, 2000)
			.animate({backgroundColor: 'green'})
			.hide(3000);

			$('input').click(function(){
				duration: 5000,
				imageLogo.css('transform', 'translate(50px, 30px) rotate(360deg) scale(2,.5) skew(-35deg)'); 
				
			})
			imageLogo.dequeue();
	});

//**//**//**//**//**//**//**//**//**//**//**//**//**//** Promises for Animation  //**//**//**//**//**//**//**//**//**//**//**//**//**//**

// If we ever want to work with the 'promise' object directly, we can chain a call to the jQuery promise method
// 1. Example: 'done'
       $(document).ready(function(){

		var logoVar = $('#logo');
		logoVar.animate(
		{
			left: '400px'
		},
		{
			duration: 3000,
			done: function(){ // 'done' option specifies a function that's going to get called when the animation has completed. 
				alert('in done!');
			}
		}
	)
});
 
// Example: Now let's take a look at what happens if the animation gets stopped somehow. 
	$(document).ready(function(){

		var logoVar = $('#logo');

		logoVar.animate(
		{
			left: '600px'
		},
		{
			duration: 3000,
			done: function(){
				alert('in done!');
			}
		});

		$('input').click(function(){ // this is 'input type = button' which will stop the animation before it gets completed. It will not let alert running. 
			logoVar.stop();
		});
});
 
 
// idea: I want to stop the animation as I hover over the image happens 

		$(document).ready(function(){

		var logoVar = $('#logo');

		logoVar.animate(
		{
			left: '600px'
		},
		{
			duration: 8000,
			done: function(){
				alert('in done!');
			}
		});

		$('#logo').hover(function(){ // hover over animating image and it will stop it without letting it to get completed 
			logoVar.stop();
		});
});

// If I want to combine a couple or more events at once I need to use .on() event handler attachment to bind them together 
// asked a question on stackoverflow http://stackoverflow.com/questions/30131989/promises-of-jquery-animation 

$(document).ready(function(){

		var logoVar = $('#logo');

		logoVar.animate(
		{
			left: '600px'
		},
		{
			duration: 8000,
			done: function(){
				alert('in animation done!');
			}
		});
		logoVar.on('mouseenter mouselease', function(){
		logoVar.stop();	
		})	
});

	$(document).ready(function(){

		var logoVar = $('#logo');

		logoVar.animate(
		{
			left: '600px'
		},
		{
			duration: 3000,
			done: function(){
				alert('in done!');
			},
			fail: function (){
					alert('failure');
			},
			always: function(){
				alert('always');
			}
		});

		$('input').click(function(){ // this is 'input type = button' which will stop the animation before it gets completed. It will not let alert running. 
			logoVar.stop();
		});
});


// there is a promise() method where you can actually get access to the promise itself check jQuery API for that ! Check .animate() to find more animate options like were shown above. 'fail', 'always', 'done' these are animate options 
// .promise() method returns a dynamically generated Promise that is resolved once all actions of a certain type bound to the collection, queued or not, have ended. By default, 'type' is 'fx', which means the returned Promise is resolved when all animations of the selected elements have completed. 

	$(document).ready(function(){
		var backColor = ["crimson", "green", "blue"]; 
		var randMath = backColor[Math.floor(Math.random() * backColor.length)];
		var divPromise = $('.promiseBox'); 

	$('input').on('click', function(){ 
			$('p').append('Started...');
		divPromise.each(function(d){
			$(this).fadeIn().fadeOut(1000 * (d + 1));
			$(this).css('background', randMath);
		});
	
	divPromise.promise().done(function(){
		$('p').append("finished!");
		});
	}); 
});      // shows solid 3 different colors every time reload the page 

