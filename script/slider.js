// play(30000);


// slider.onmouseover = function(){pause()};
// slider.onmouseout = function(){play(3000)};

// var pos=0;
    
// var s;
// function play(playSpeed){
//     s = setInterval("go_right()",playSpeed);
// }

// function pause(){
//     clearInterval(s)
// }

// function go_right(){
//     if(pos > -300){
//         pos = pos - 100;
//         gal.style.left = pos +"%";
//     }
//     else if(pos == -300){
//         pos = 0;
//         gal.style.left= pos +"%";
//     }
// }

// function  go_left(){
//     if(pos < 0){
//         pos = pos + 100;
//         gal.style.left = pos +"%";
//     }
//     else if(pos == 0){
//         pos = -300;
//         gal.style.left = pos + "%";	
//     }
// }

// ============================================================
 var pos=[0,0,0,0,0];   

 var s;
 
 play(3000);

  function play(playSpeed){
    s = setInterval("go_right(gal,300,100,pos,0)",playSpeed);
  }

 function pause(){
     clearInterval(s)
 }

next.onclick = function(){ go_right(gal,300,100,pos,0)} 
next1.onclick = function(){ go_right(gal1,100,100,pos,1)}
next2.onclick = function(){ go_right(gal2,100,100,pos,2)}

prev.onclick = function(){ go_left(gal,300,100,pos,0)}
prev1.onclick = function(){ go_left(gal1,100,100,pos,1)}
prev2.onclick = function(){ go_left (gal2,100,100,pos,2)}

function go_right(galId,limit,step,galpos,i){
    if(galpos[i] > -limit){
        galpos[i] = galpos[i]- step;
        galId.style.left = galpos[i] +"%";
    }
    else if(galpos[i] == -limit){
        galpos[i] = 0;
        galId.style.left= galpos[i] +"%";
    }
}

function  go_left(galId,limit,step,galpos,i){
    if(galpos[i] < 0){
        galpos[i] = galpos[i] + step;
        galId.style.left = galpos[i]+"%";
    }
    else if(galpos[i] == 0){
        galpos[i] = -limit;
        galId.style.left = galpos[i]+ "%";	
    }
    
}