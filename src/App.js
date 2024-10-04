import './App.css';
import { useLayoutEffect } from 'react';
import { waitForElementToBeRemoved } from '@testing-library/react';
import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import { Image } from '@aws-amplify/ui-react';

var igreen;
var winner=[];
var clears=[];
var pieces = [];
var run='no';
var iangry4;
var disabled='no';
var menu=[];
var checkid;
var begin;
var oldid;
var logo = [];
var iangries2=[];
var possiblemoves=[];
var pastangries=[];
var time;
var x;
var y;
var celebration=[];
var finisher = [];
var moves = [];
var greensx = [];
var greensy = [];
var xs = [];
var greentiles = [];
var green = 'no';
var movex;
var movey;
var next = 0;
var red;
var ix = 595;
var iy = 525;
var pastid = 5;
var newslot;
var tiles;
var igreen;
var newid;
var changeid;
var start = 0;
var angry = 286;
var iangry = 86;
var smileytop;
var angrytop;
var smileyleft;
var angryleft;
var angrypiece;
var smileypiece;
var spacex;
var spacey;
var totalmoves;
var index;
var greens = [];
var dirx;
var diry;
var hypey;
var hypex;
var greened;
var go = 'no';
var m1;
var m2;
var m3;
var min;
var imin;
var angrymove;
var time;
var move;
var on = 'yes';
var level=1;
var angry1;
var angry2;
var angry3;
var angry4;
var again='yes';
var init='no';
var iangry1;
var iangry2;
var iangry3;
var saveid;
var start2;
var game;
var angries=[];
var iangries=[];
var initangry;
var initangry2;
var possibleangries=[];
var initangries=[];
var gameover=[];
var lost;
var countdown=[];
var ledger=[];
var rong;
var options=[];

  
function YouWin(){
  document.getElementById('iwinner').innerHTML='<img src="https://i.ibb.co/bNmgWQx/You-WIN.png" height="800px" width="800px" ></img>';
  setTimeout(() => {
    for (let i=101; i<111; i++){
      document.getElementById(i).style.top='-45px';
    }
    document.getElementById(100).innerHTML='';
    document.getElementById('gover').innerHtml='';  
    document.getElementById('Start').style.zIndex=12;
  document.getElementById('Menu').style.zIndex=11;
  iangries=[];
  angries=[];
  pastangries=[];
  initangries=[];
  level=1;
  lost='yes';
   run='no';
   document.getElementById('iwinner').innerHTML='';
  }, 5400);
}

function GameOver(){
    document.getElementById('gover').innerHTML='<img src="https://i.ibb.co/mFGdkFQ/Game-Over-Final.png" height="800px" width="800px"></img>';  
    setTimeout(() =>{
      for (let i=0; i<iangries.length; i++){
        document.getElementById(iangries[i]).innerHTML="";
         }
         document.getElementById(pastid).innerHTML="";
        iangries=[];
        angries=[];
        pastangries=[];
        initangries=[];
        level=1;
        lost='no';
         run='no';
      Start();
  }, 5000);
  }




function Start() {
  if (on == 'yes') {
    try {
      document.getElementById('gover').innerHTML='';  
   
    } catch (TypeError) {
      
    }
    game='on';
    on = 'no';
    move = '';
    diry = '';
    dirx = '';
    spacex = '';
    spacey = '';
    greened = 'no'; 
    initangry = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    initangry2 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    initangries.push(initangry);
    initangries.push(initangry2);
     for (let i=0; i<2; i++){
      for (let j=i+1; j<2; j++){
        if (initangries[i]=initangries[j]){
           initangries[j]=Math.floor(Math.random() * (90 - 37 + 1) + 37);
        }
      }
    }
    setTimeout(() => { 
      document.getElementById('cdown').style.left='300px';
      document.getElementById('cdown').innerHTML='LEVEL 1';
    }, 2000 );
    setTimeout(() => {
      document.getElementById('cdown').innerHTML='';
    }, 4200 );
    setTimeout(() =>{
      document.getElementById('cdown').style.left='560px';
      document.getElementById('cdown').innerHTML='3';
    }, 5800);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='2';
    }, 6900);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='1';
    }, 8000);
    setTimeout(() =>{ 
      document.getElementById('cdown').innerHTML='';
    }, 9100);
      setTimeout(() => {
        document.getElementById(initangries[0]).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


        document.getElementById(initangries[1]).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


        document.getElementById(5).innerHTML =  '<img src="https://i.ibb.co/SxzCsKG/green.png" height="35px" width="35px" id="yellow" style="position:absolute; right: 2.3px; top: 2px;"></img>'
        start = 2;
        run='yes';
      }, 9100);
      angrytop = 25; 
      smileytop = 520;
      go = 'yes';
      angryleft = 590;
      smileyleft = 590;
      angries.push(initangries[0]+200, initangries[1]+200);
      iangries.push(initangries[0], initangries[1]);
      if (lost!='yes'){
      greens.push(202, 203, 204, 206, 207, 208, 215, 225, 235, 214, 223, 232, 213, 221, 229);
      start=1;
    }
      if (lost=='yes'){
        AngryMove(-1);
      }
    }
  } 
  /*
    if (start == 2 && level==1) {
      angrypiece = angry - 200;
      smileypiece = pastid;
      let indi = document.getElementById(angrypiece).style.left.indexOf('p');
      let indi2 = document.getElementById(angrypiece).style.top.indexOf('p');
      let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
      let indi4 = document.getElementById(smileypiece).style.top.indexOf('p');
      angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
      angrytop = parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
      smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
      smileytop = parseIn
      
    }


    if (start < 2) {
      time = 6000;
    }
    else{
    if (level==1){
      time = 1000;
    }
    if (level==2){
      time=1000;
    }
  }

    if (level==1){
      again='yes';
    }

    
    if (level==2){
      again='yes';
      if (init=='yes'){
        angry1 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
      angry2 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
      if (angry1==angry2){
        while (angry1==angry2){
        angry2=Math.floor(Math.random() * (90 - 37 + 1) + 37);
      }
    }
    
      angry1=angry1+200;
      angry2=angry2+200;
        document.getElementById(angry1-200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


        document.getElementById(angry2-200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


        let z=101;  
        for (let i=0; i<10; i++){
          document.getElementById(z).style.top='-45px';
          z=z+1;
        } 
        init='no';
        Nav(300);
      }
  }

    if (game!='off'){
      for (let j=0; j<2; j++){
        if (start < 2 && j==0 && level==1) {
          document.getElementById(iangry).innerHTML = '';
        }
        if (start2==1 && level==2){
          if (j==0){
          document.getElementById(angry1-200).innerHTML = '';
          }
          if (j==1){
            document.getElementById(angry2-200).innerHTML = '';
          start2=2;
          }
        }
        if (level==2){
        if (j==0){
        angry=angry1;
        angrypiece = angry - 200;
        smileypiece = pastid;
        let indi = document.getElementById(angrypiece).style.left.indexOf('p');
        let indi2 = document.getElementById(angrypiece).style.top.indexOf('p');
        let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
        let indi4 = document.getElementById(smileypiece).style.top.indexOf('p');
        angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
        angrytop = parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
        smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
        smileytop = parseInt(document.getElementById(smileypiece).style.top.slice(0, indi4));  
        }
        if (j==1){
          angry=angry2;
           angrypiece = angry - 200;
          smileypiece = pastid;
          let indi = document.getElementById(angrypiece).style.left.indexOf('p');
          let indi2 = document.getElementById(angrypiece).style.top.indexOf('p');
          let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
          let indi4 = document.getElementById(smileypiece).style.top.indexOf('p');
          angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
          angrytop = parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
          smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
          smileytop = parseInt(document.getElementById(smileypiece).style.top.slice(0, indi4));
          again='yes';
        }
      }
      if (smileytop > angrytop) {
        spacey = (smileytop - angrytop) / 55;
        diry = 'down';
      }
      if (smileytop < angrytop) {
        spacey = (angrytop - smileytop) / 55;
        diry = 'up';
      }
      if (smileyleft > angryleft) {
        spacex = (smileyleft - angryleft) / 60;
        dirx = 'right';
      }
      if (smileyleft < angryleft) {
        spacex = (angryleft - smileyleft) / 60;
        dirx = 'left';
      }
      if (smileytop == angrytop) {
        spacey = 0;
      }
      if (smileyleft == angryleft) {
        spacex = 0;
      }
      totalmoves = spacex + spacey;
  
      if (again=='yes'){
      if (spacex == 0) {
        if (spacey > 1) {
          if (diry == 'down') { 
            angry = angry - 200;
            angry = angry - (2 * 9);
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                if (level==2 && j==0){
                angry1=angry;
                iangry1=angry1;
                }
                if (level==2 && j==1){
                angry2=angry;
                iangry2=angry2;
                }
                iangry = angry;
                greened = 'yes';
              }
            }
            if (greened != 'yes') {
              document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              if (level==2 && j==0){
                angry1=angry;
                iangry1=angry1-200;
                }
                if (level==2 && j==1){
                angry2=angry;
                iangry2=angry2-200;
                }
            }
          }
          if (diry == 'up') {
            angry = angry - 200;
            angry = angry + (2 * 9);
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2;
                  }
                greened = 'yes';
              }
            }
            if (greened != 'yes') {
              document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              if (level==2 && j==0){
                angry1=angry;
                iangry1=angry1-200;
                }
                if (level==2 && j==1){
                angry2=angry;
                iangry2=angry2-200;
                }
            }
          }
        }
        else {
          if (diry == 'down') {
            angry = angry - 200;
            angry = angry - (1 * 9);
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2;
                  }
                greened = 'yes';
              }
            }
            if (greened != 'yes') {
              document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              if (level==2 && j==0){
                angry1=angry;
                iangry1=angry1-200;
                }
                if (level==2 && j==1){
                angry2=angry;
                iangry2=angry2-200;
                }
            }
          }
          if (diry == 'up') {
            angry = angry - 200;
            angry = angry + (1 * 9);
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2;
                  }
                greened = 'yes';
              }
            }
            if (greened != 'yes') {
              document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              if (level==2 && j==0){
                angry1=angry;
                iangry1=angry1-200;
                }
                if (level==2 && j==1){
                angry2=angry;
                iangry2=angry2-200;
                }
            }
          }
        }
      }
      if (spacex > 0) {
        if (spacey == 0) {
          if (dirx == 'right') {
            if (spacex > 1) {
              angry = angry - 200;
              angry = angry + 2;
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  if (level==2 && j==0){
                    angry1=angry;
                    iangry1=angry1;
                    }
                    if (level==2 && j==1){
                    angry2=angry;
                    iangry2=angry2;
                    }
                  greened = 'yes';
                }
              }
              if (greened != 'yes') {
                document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1-200;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2-200;
                  }
              }
            }
            else {
              angry = angry - 200;
              angry = angry + 1;
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  if (level==2 && j==0){
                    angry1=angry;
                    iangry1=angry1;
                    }
                    if (level==2 && j==1){
                    angry2=angry;
                    iangry2=angry2;
                    }
                  greened = 'yes';
                }
              }
              if (greened != 'yes') {
                document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1-200;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2-200;
                  }
              }
            }
          }
          if (dirx == 'left') {
            if (spacex > 1) {
              angry = angry - 200;
              angry = angry - 2;
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  if (level==2 && j==0){
                    angry1=angry;
                    iangry1=angry1;
                    }
                    if (level==2 && j==1){
                    angry2=angry;
                    iangry2=angry2;
                    }
                  greened = 'yes';
                }
              }
              if (greened != 'yes') {
                document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1-200;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2-200;
                  }
              }
            }
            else {
              angry = angry - 200;
              angry = angry - 1;
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  if (level==2 && j==0){
                    angry1=angry;
                    iangry1=angry1;
                    }
                    if (level==2 && j==1){
                    angry2=angry;
                    iangry2=angry2;
                    }
                  greened = 'yes';
                }
              }
              if (greened != 'yes') {
                document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                if (level==2 && j==0){
                  angry1=angry;
                  iangry1=angry1-200;
                  }
                  if (level==2 && j==1){
                  angry2=angry;
                  iangry2=angry2-200;
                  }
              }
            }
          }
        }
        else {
          if (diry == 'down') {
            if (dirx == 'right') {
              if (spacex > 1) {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 2;
                  }
                  if (imin == 2) {
                    angry = angry - (2 * 8);
                  }
                  if (imin == 1) {
                    angry = angry - (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 2;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry - (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
              else {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 1;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry - (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 1;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry - (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
            }
            if (dirx == 'left') {
              if (spacex > 1) {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 2;
                  }
                  if (imin == 2) {
                    angry = angry - (2 * 10);
                  }
                  if (imin == 1) {
                    angry = angry - (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 2;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry - (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
              else {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 1;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry - (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 1;
                  }
                  if (imin == 2) {
                    angry = angry - (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry - (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
            }
          }
          if (diry == 'up') {
            if (dirx == 'right') {
              if (spacex > 1) {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 2;
                  }
                  if (imin == 2) {
                    angry = angry + (2 * 10);
                  }
                  if (imin == 1) {
                    angry = angry + (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else { 
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 2;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry + (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="30px" width="30px"></img>'
                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
              else {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 1;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry + (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry + 1;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 10);
                  }
                  if (imin == 1) {
                    angry = angry + (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
            }
            if (dirx == 'left') {
              if (spacex > 1) {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 2;
                  }
                  if (imin == 2) {
                    angry = angry + (2 * 8);
                  }
                  if (imin == 1) {
                    angry = angry + (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 2;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 2;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry + (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
              else {
                if (spacey > 1) {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 2;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 1;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry + (2 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
                else {
                  moves = [];
                  hypex = spacex - 1;
                  hypey = spacey - 1;
                  if ((hypex) == spacey) {
                    m1 = spacey;
                    moves.push(m1);
                  }
                  else {
                    m1 = hypex + spacey;
                    moves.push(m1);
                  }
                  if ((hypey) == spacex) {
                    m3 = spacex;
                    moves.push(m3);
                  }
                  else {
                    m3 = hypey + spacex;
                    moves.push(m3);
                  }
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                  for (let i = 0; i < moves.length; i++) {
                    if (i == 0) {
                      min = moves[i];
                      imin = 0;
                    }
                    else {
                      if (moves[i] < min) {
                        min = moves[i];
                        imin = i;
                      }
                    }
                  }
                  angry = angry - 200;
                  if (imin == 0) {
                    angry = angry - 1;
                  }
                  if (imin == 2) {
                    angry = angry + (1 * 8);
                  }
                  if (imin == 1) {
                    angry = angry + (1 * 9);
                  }
                  for (let i = 0; i < greens.length; i++) {
                    if (greens[i] == (angry + 200)) {
                      document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      angry = angry + 200;
                      iangry = angry;
                      if (level==2 && j==0){
                        angry1=angry;
                        iangry1=angry1;
                        }
                        if (level==2 && j==1){
                        angry2=angry;
                        iangry2=angry2;
                        }
                      greened = 'yes';
                    }
                  }
                  if (greened != 'yes') {
                    document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    iangry = angry;
                    angry = angry + 200;
                    if (level==2 && j==0){
                      angry1=angry;
                      iangry1=angry1-200;
                      }
                      if (level==2 && j==1){
                      angry2=angry;
                      iangry2=angry2-200;
                      }
                  }
                }
              }
            }
          }

        }
      }
    
    }
    again='no';
  }
}game='off';
    }
  }
*/ 

function BlueMove(slot){
      possibleangries=[];
      let piece=0;
      diry = '';
      dirx = '';
      greened='no';
      spacex = '';
      spacey = '';
      console.log(angries);
      angry=angries[slot];
      angrypiece = angry - 200;
      smileypiece = pastid;
      let indi= document.getElementById(angrypiece).style.left.indexOf('p');
      let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
      angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
      smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
      console.log(angry, angryleft, smileyleft);
      if (smileyleft > angryleft) {
        spacex = (smileyleft - angryleft) / 60;
        dirx = 'right';
      }
      if (smileyleft < angryleft) {
        spacex = (angryleft - smileyleft) / 60;
        dirx = 'left';
      }
        if (dirx == 'right') {
          console.log('yes', spacex);
          if (spacex >= 3) {
            angry = angry - 200;
            angry = angry + 3;
            possibleangries.push(angry-3);
            possibleangries.push(angry-2);
            possibleangries.push(angry-1);
          }
          else{
            angry=angry-200;
            for (let r=0; r<spacex; r++){
              possibleangries.push(angry+r);
            }
            angry=angry+spacex;
        
          }
            for (let i=0; i<possibleangries.length; i++){
              for (let k=0; k<greens.length; k++){
                if ((possibleangries[i]+200)==greens[k]){
                  possibleangries[i]=possibleangries[i]+200;
                }
              }
            }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
              //  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[slot]=angry;
                iangries[slot]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[slot]=angry;
              iangries[slot]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }

          }
        if (dirx == 'left') {
          console.log('yes');
            if (spacex >= 3) {
              angry = angry - 200;
              angry = angry - 3;
              possibleangries.push(angry+1);
              possibleangries.push(angry+2);
            }
            else{
              angry=angry-200;
              for (let r=0; r<spacex; r++){
                possibleangries.push(angry-r);
              }
              angry=angry-spacex;
            }
            for (let i=0; i<possibleangries.length; i++){
              for (let k=0; k<greens.length; k++){
                if ((possibleangries[i]+200)==greens[k]){
                  possibleangries[i]=possibleangries[i]+200;
                }
              }
            }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[slot]=angry;
                iangries[slot]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[slot]=angry;
              iangries[slot]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
          possiblemoves.push(possibleangries);
          console.log(iangries, possiblemoves);
          CheckPieces();
        }
        

function AngryMove(ilevel){
  console.log(angries);
      let ipieces=0;
      if (level==1){
      time=1000;
      ipieces=2;
      }
      if (level==2){
        time=1700;
        ipieces=2;
      }
      if (level==3){
        time=2000;
        ipieces=4;
      }
      if (ilevel==-1){
        Nav(300);
        game='off';
      }
      if (game!='off'){
      possiblemoves=[];
for (let piece=0; piece<ipieces; piece++){
    console.log(level);
      possibleangries=[];
      console.log('hey');
      move = '';
      diry = '';
      dirx = '';
      spacex = '';
      spacey = '';
      greened='no';
      console.log(angries);
      angry=angries[piece];
      angrypiece = angry - 200;
      smileypiece = pastid;
      let indi= document.getElementById(angrypiece).style.left.indexOf('p');
      let indi2 = document.getElementById(angrypiece).style.top.indexOf('p');
      let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
      let indi4 = document.getElementById(smileypiece).style.top.indexOf('p');
      angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
      angrytop = parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
      smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
      smileytop = parseInt(document.getElementById(smileypiece).style.top.slice(0, indi4));  
    if (smileytop > angrytop) { 
      spacey = (smileytop - angrytop) / 55;
      diry = 'down';
    }
    if (smileytop < angrytop) {
      spacey = (angrytop - smileytop) / 55;
      diry = 'up';
    }
    if (smileyleft > angryleft) {
      spacex = (smileyleft - angryleft) / 60;
      dirx = 'right';
    }
    if (smileyleft < angryleft) {
      spacex = (angryleft - smileyleft) / 60;
      dirx = 'left';
    }
    if (smileytop == angrytop) {
      spacey = 0;
    }
    if (smileyleft == angryleft) {
      spacex = 0;
    }
    totalmoves = spacex + spacey;

    console.log(angry, spacex, spacey, dirx, diry);

    if (spacex == 0) {
      if (spacey > 1) {
        if (diry == 'down') { 
          if (spacey==2){
          angry = angry - 200;
          angry = angry - (2 * 9);
          possibleangries.push(angry);
          } 
          else{
            angry=angry-200;
            angry=angry-9;
            possibleangries.push(angry-9);
            possibleangries.push(angry+9);
            
          }
          for (let i=0; i<possibleangries.length; i++){
            for (let k=0; k<greens.length; k++){
              if ((possibleangries[i]+200)==greens[k]){
                possibleangries[i]=possibleangries[i]+200;
              }
            }
          }
           for (let i = 0; i < greens.length; i++) {
            if (greens[i] == (angry + 200)) {
              //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              angry = angry + 200;
              iangry = angry;
              greened = 'yes';
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
          if (greened != 'yes') {
            //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


            iangry=angry;
            angry = angry + 200;
            angries[piece]=angry;
            iangries[piece]=iangry;
            for (let j=0; j<possibleangries.length; j++){
              if (iangry==possibleangries[j]){
               possibleangries.splice(j, 1);
              }
            }
          }
        } 
        if (diry == 'up') {
          angry = angry - 200;
          angry = angry + (2 * 9);
          possibleangries.push(angry-9);
          possibleangries.push(angry-19);
          for (let i=0; i<possibleangries.length; i++){
            for (let k=0; k<greens.length; k++){
              if ((possibleangries[i]+200)==greens[k]){
                possibleangries[i]=possibleangries[i]+200;
              }
            }
          }
          for (let i = 0; i < greens  .length; i++) {
            if (greens[i] == (angry + 200)) {
              //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              angry = angry + 200;
              iangry = angry;
              greened = 'yes';
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                 possibleangries.splice(j, 1);
                }
              } 
            }
          }
          if (greened != 'yes') {
            //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


            iangry = angry;
            angry = angry + 200;
            angries[piece]=angry;
            iangries[piece]=iangry;
            for (let j=0; j<possibleangries.length; j++){
              if (iangry==possibleangries[j]){
               possibleangries.splice(j, 1);
              }
            }
          }
        }
      }
      else {
        if (diry == 'down') {
          angry = angry - 200;
          angry = angry - (1 * 9);
          possibleangries.push(angry+9);
          for (let i=0; i<possibleangries.length; i++){
            for (let k=0; k<greens.length; k++){
              if ((possibleangries[i]+200)==greens[k]){
                possibleangries[i]=possibleangries[i]+200;
              }
            }
          }
          for (let i = 0; i < greens.length; i++) {
            if (greens[i] == (angry + 200)) {
              //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              angry = angry + 200;
              iangry = angry;
              greened = 'yes';
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                 possibleangries.splice(j, 1);
                }
              }
            }
          }
          if (greened != 'yes') {
            //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


            iangry = angry;
            angry = angry + 200;
            angries[piece]=angry;
            iangries[piece]=iangry;
            for (let j=0; j<possibleangries.length; j++){
              if (iangry==possibleangries[j]){
               possibleangries.splice(j, 1);
              }
            }
          }
        }
        if (diry == 'up') {
          angry = angry - 200;
          angry = angry + (1 * 9);
          possibleangries.push(angry-9);
          for (let i = 0; i < greens.length; i++) {
            if (greens[i] == (angry + 200)) {
              //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              angry = angry + 200;
              iangry = angry;
              greened = 'yes';
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
          if (greened != 'yes') {
            //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


            iangry = angry;
            angry = angry + 200;
            angries[piece]=angry;
            iangries[piece]=iangry;
            for (let j=0; j<possibleangries.length; j++){
              if (iangry==possibleangries[j]){
                possibleangries.splice(j, 1);
              }
            }
          }
        }
      }
    }
    if (spacex > 0) {
      console.log('yupp');
      if (spacey == 0) {
        if (dirx == 'right') {
          if (spacex > 1) {
            if (spacex==2 || (angry-200)>73){
            angry = angry - 200;
            angry = angry + 2;
            possibleangries.push(angry-1);
            possibleangries.push(angry-2);
            }
            else{
              angry=angry-200;
              angry=angry+(2*10);
              possibleangries.push(angry-10);
              possibleangries.push(angry-20);
            }
            for (let i=0; i<possibleangries.length; i++){
              for (let k=0; k<greens.length; k++){
                if ((possibleangries[i]+200)==greens[k]){
                  possibleangries[i]=possibleangries[i]+200;
                }
              }
            }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
              //  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[piece]=angry;
                iangries[piece]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }

          }
          else {
            angry = angry - 200;
            angry = angry + 1;
            possibleangries.push(angry);
            possibleangries.push(angry-1);
            for (let i=0; i<possibleangries.length; i++){
              for (let k=0; k<greens.length; k++){
                if ((possibleangries[i]+200)==greens[k]){
                  possibleangries[i]=possibleangries[i]+200;
                }
              }
            }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[piece]=angry;
                iangries[piece]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
        } 
        if (dirx == 'left') {
          if (spacex > 1) {
             if (spacex==2 || (angry-200)>73){
            angry = angry - 200;
            angry = angry -2;
            possibleangries.push(angry);
            possibleangries.push(angry+1);
            possibleangries.push(angry+2);
            }
            else{
              angry=angry-200;
              angry=angry+(2*8);
              possibleangries.push(angry);
            possibleangries.push(angry-8);
            possibleangries.push(angry-16);
            }
            for (let i=0; i<possibleangries.length; i++){
              for (let k=0; k<greens.length; k++){
                if ((possibleangries[i]+200)==greens[k]){
                  possibleangries[i]=possibleangries[i]+200;
                }
              }
            }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height "47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[piece]=angry;
                iangries[piece]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
          else {
            angry = angry - 200;
            angry = angry - 1;
            possibleangries.push(angry);
            possibleangries.push(angry+1);
          }
          for (let i=0; i<possibleangries.length; i++){
            for (let k=0; k<greens.length; k++){
              if ((possibleangries[i]+200)==greens[k]){
                possibleangries[i]=possibleangries[i]+200;
              }
            }
          }
            for (let i = 0; i < greens.length; i++) {
              if (greens[i] == (angry + 200)) {
                //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                angry = angry + 200;
                iangry = angry;
                greened = 'yes';
                angries[piece]=angry;
                iangries[piece]=iangry;
                for (let j=0; j<possibleangries.length; j++){
                  if (iangry==possibleangries[j]){
                    possibleangries.splice(j, 1);
                  }
                }
              }
            }
            if (greened != 'yes') {
              //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


              iangry = angry;
              angry = angry + 200;
              angries[piece]=angry;
              iangries[piece]=iangry;
              for (let j=0; j<possibleangries.length; j++){
                if (iangry==possibleangries[j]){
                  possibleangries.splice(j, 1);
                }
              }
            }
          }
        }
      else {
        if (diry == 'down') {
          if (dirx == 'right') {
            if (spacex > 1) {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 2;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if (hypey>1 || (hypey==0 && hypex==0)){
                if (hypex == hypey) {
                  m2 = hypex;
                  moves.push(m2);
                }
                else {
                  m2 = hypex + hypey;
                  moves.push(m2);
                }
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
              }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+2);
                possibleangries.push(angry+1);
                possibleangries.push(angry-(2*8));
                possibleangries.push(angry-(2*9));
                possibleangries.push(angry-8);
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry + 2;
                }
                if (imin == 1) {
                  angry = angry - (2 * 8);
                }
                if (imin == 2) {
                  angry = angry - (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                //    document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                     possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 1;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                } 
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                if (imin == 0) {
                  if (hypex>=3 && angry<73){
                    angry = angry + (2*10); 
                    possibleangries.push(angry-20);
                    possibleangries.push(angry);
                    possibleangries.push((angry-20)+2);
                  }
                  else{
                  angry = angry + 2; 
                  possibleangries.push(angry-2);
                  possibleangries.push(angry);
                  possibleangries.push((angry-2)+20);
                  }
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                     greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
            else {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 2;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if (hypey>=2){
                m2 = hypey;
                moves.push(m2);
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
              }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  } 
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+1);
                possibleangries.push(angry-(1*8));
                possibleangries.push(angry-(2*9));
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry + 1;
                }
                if (imin == 1) {
                  angry = angry - (1 * 8);
                }
                if (imin == 2) {
                  angry = angry - (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 1;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
                if (hypex == hypey) {
                  m2 = hypex;
                  moves.push(m2);
                }
                else {
                  m2 = hypex + hypey;
                  moves.push(m2);
                }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+1);
                possibleangries.push(angry-8);
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry + 1;
                }
                if (imin == 2) {
                  angry = angry - (1 * 8);
                }
                if (imin == 1) {
                  angry = angry - (1 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
          }
          if (dirx == 'left') {
            if (spacex > 1) {
              if (spacey > 1) {
                console.log('yup');
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 2;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if (hypey>1 || (hypey==0 && hypex==0)){
                  if (hypex == hypey) {
                    m2 = hypex;
                    moves.push(m2);
                  }
                  else {
                    m2 = hypex + hypey;
                    moves.push(m2);
                  }
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
              }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry-2);
                possibleangries.push(angry-1);
                possibleangries.push(angry-(2*10));
                possibleangries.push(angry-(2*9));
                possibleangries.push(angry-10);
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry - 2;
                }
                if (imin == 1) {
                  angry = angry - (2 * 10);
                }
                if (imin == 2) {
                  angry = angry - (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                console.log(possibleangries);
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                } 
                console.log(possibleangries);
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
                console.log(possibleangries);
              }

              else {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 1;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                if (imin == 0) {
                  if (hypex>=3 && angry<73){
                    angry = angry + (2*10); 
                    possibleangries.push(angry-20);
                    possibleangries.push(angry);
                    possibleangries.push((angry-20)+2);
                  }
                  else{
                  angry = angry - 2;
                  possibleangries.push(angry+2);
                  possibleangries.push(angry);
                  possibleangries.push((angry+1));
                  }
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
            else {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 2;
                m2 = hypex + hypey + 1;
                moves.push(m2);
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if (hypey>=2){
                  m2=hypey;
                  moves.push(m2);
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
              }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry-1);
                possibleangries.push(angry-(2*9));
                possibleangries.push(angry-10);
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry - 1;
                }
                if (imin == 1) {
                  angry = angry - (1 * 10);
                }
                if (imin == 2) {
                  angry = angry - (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 1;
                if ((hypex) == spacey) {
                  m1 = spacey;
                  moves.push(m1);
                }
                else {
                  m1 = hypex + spacey;
                  moves.push(m1);
                }
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                }
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
                if (hypex == hypey) {
                  m2 = hypex;
                  moves.push(m2);
                }
                else {
                  m2 = hypex + hypey;
                  moves.push(m2);
                }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry-1);
                possibleangries.push(angry-10);
                possibleangries.push(angry-9);
                if (imin == 0) {
                  angry = angry - 1;
                }
                if (imin == 2) {
                  angry = angry - (1 * 10);
                }
                if (imin == 1) {
                  angry = angry - (1 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
          }
        }
        if (diry == 'up') {
          if (dirx == 'right') {
            if (spacex > 1) {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 2;
                if ((hypey) == spacex) {
                  m3 = spacex;
                  moves.push(m3);
                } 
                else {
                  m3 = hypey + spacex;
                  moves.push(m3);
                }
                if (hypex == hypey) {
                  m2 = hypex;
                  moves.push(m2);
                }
                else {
                  m2 = hypex + hypey;
                  moves.push(m2);
                }
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+(2*10));
                possibleangries.push(angry+(2*9));
                possibleangries.push(angry+(1*9));
                possibleangries.push(angry+10);
                if (imin == 1) {
                  angry = angry + (2 * 10);
                }
                if (imin == 0) {
                  angry = angry + (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 1;
                m2 = 0;
                moves.push(m2);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else { 
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                if (imin == 0) {
                  if (angry<73){
                  angry = angry + (2 * 10);
                  possibleangries.push(angry-20);
                  possibleangries.push(angry);
                  possibleangries.push(angry-10);
                  }
                  else{
                    angry = angry + (1 * 10);
                  possibleangries.push(angry-10);
                  possibleangries.push(angry);
                  possibleangries.push(angry-10+1);
                  possibleangries.push(angry+9);
                  }
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src=https://i.ibb.co/MZkwCVh/rb.png" height="30px" width="30px"></img>'
                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
            else {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 2;
                  m1 = spacey;
                  moves.push(m1);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
               angry = angry - 200;
                if (imin == 0) {
                  angry = angry + (2 * 9);
                  possibleangries.push(angry-18);
                  possibleangries.push(angry);
                  possibleangries.push(angry-9);
                 }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                   angry = angry + 200;
                  iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 1;
                  m1 = spacex;
                  moves.push(m3);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                 possibleangries.push(angry);
                  possibleangries.push(angry+1);
                  possibleangries.push(angry+9);
                if (imin == 0) {
                  angry = angry + (1 * 10);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
          }
          if (dirx == 'left') {
            if (spacex > 1) {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 2;
                  m1 = 0;
                  moves.push(m1);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                 possibleangries.push(angry+8);
                  possibleangries.push(angry+(2*8));
                  possibleangries.push(angry-1);
                  possibleangries.push(angry+(2*9));
                  possibleangries.push(angry+9);
                if (imin == 0) {
                  angry = angry + (2 * 8);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 2;
                hypey = spacey - 1;
                m2 = 0;
                moves.push(m2);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                if (imin == 0) {
                  if (angry<73){
                  angry = angry + (2 * 8);
                  possibleangries.push(angry-18);
                  possibleangries.push(angry);
                  possibleangries.push(angry-8);
                   possibleangries.push(angry-8+(2*9));
                   possibleangries.push(angry-8+(9));
                  }
                  else{
                    angry = angry + (1 * 8);
                    possibleangries.push(angry-8);
                    possibleangries.push(angry);
                    possibleangries.push(angry-8+1);
                    possibleangries.push(angry-8+(9));
                  }
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
            else {
              if (spacey > 1) {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 2;
                  m1 = 0;
                  moves.push(m1);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+(2*9));
                possibleangries.push(angry+(1*9));
                if (imin == 0) {
                  angry = angry + (2 * 9);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //doc ument.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                      possibleangries.splice(j, 1);
                    }
                  }
                }
              }
              else {
                moves = [];
                hypex = spacex - 1;
                hypey = spacey - 1;
                  m1 = spacey;
                  moves.push(m1);
                for (let i = 0; i < moves.length; i++) {
                  if (i == 0) {
                    min = moves[i];
                    imin = 0;
                  }
                  else {
                    if (moves[i] < min) {
                      min = moves[i];
                      imin = i;
                    }
                  }
                }
                angry = angry - 200;
                possibleangries.push(angry);
                possibleangries.push(angry+(1*8));
                possibleangries.push(angry+(1*9));
                possibleangries.push(angry-(1));
                if (imin == 0) {
                  angry = angry + (1 * 8);
                }
                for (let i=0; i<possibleangries.length; i++){
                  for (let k=0; k<greens.length; k++){
                    if ((possibleangries[i]+200)==greens[k]){
                      possibleangries[i]=possibleangries[i]+200;
                    }
                  }
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                    for (let j=0; j<possibleangries.length; j++){
                      if (iangry==possibleangries[j]){
                        possibleangries.splice(j, 1);
                      }
                    }
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                  for (let j=0; j<possibleangries.length; j++){
                    if (iangry==possibleangries[j]){
                       possibleangries.splice(j, 1);
                    }
                  }
                }
              }
            }
          }
        }

      }
    }
    console.log(possibleangries);
    possiblemoves.push(possibleangries);
    }
    if (level==1){
      CheckPieces();
    }
    if (level==2){
      BlueMove(2);
    }
    if (level==3){
      CheckPieces();
    }
  }
}

function CheckPieces(){
setTimeout(() =>{
  console.log(iangries);
  console.log(possiblemoves);
  var check='null';
  var icheck='no';
  
  for (let i=0; i<iangries.length; i++){
    icheck='no';
    check='null';
    if (i==0){
      try{
      document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
      }
      catch(TypeError){
        if (iangries[i]>200){
          document.getElementById(iangries[i]-200).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
          iangries[i]=iangries[i]-200;
        }
      }
    } 
    if (i>0){
      console.log('here');
      for (let a=0; a<i; a++){
        console.log(i);
        if (iangries[a]==iangries[i] && a!=i){
          icheck='yes';
          console.log('hoopi');
        }
      }
      if (icheck!='yes'){
        console.log('here1');
   try{
    if (level==2 && i==2){
      document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
    }
    else{document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
    }
  }
    catch(TypeError){
      if (iangries[i]>200){
         if (level==2 && i==2){
      document.getElementById(iangries[i]-200).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
     iangries[i]=iangries[i]-200;
    }
    else{
        document.getElementById(iangries[i]-200).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
        iangries[i]=iangries[i]-200;
      }
    }
    }
  } 
  else{
    console.log('here2');
    for (let k=0; k<possiblemoves[i].length+1; k++){
      if (check=='yes'){
        console.log(possiblemoves[i][k-1]);
        try{
             if (level==2 && i==2){
              igreen='no';
              for (let a = 0; a < greens.length; a++) {
                if (greens[a] == possiblemoves[i][k-1]+200) {
                  document.getElementById(possiblemoves[i][k-1]+200).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
                  iangries[i]=possiblemoves[i][k-1]+200; 
                  igreen='yes';
              }
            }
if (igreen!='yes'){
      document.getElementById(possiblemoves[i][k-1]).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
      iangries[i]=possiblemoves[i][k-1]; 
}
    }
    else{
      igreen='no';
      for (let a = 0; a < greens.length; a++) {
        if (greens[a] == possiblemoves[i][k-1]+200) {
          document.getElementById(possiblemoves[i][k-1]+200).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>';
          igreen='yes';
    }
  }
    if (igreen!='yes'){
          document.getElementById(possiblemoves[i][k-1]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>';
          iangries[i]=possiblemoves[i][k-1]; 
    }
    } 
        }
          catch(TypeError){
            if (iangries[i]>200){
              if (level==2 && i==2){
                document.getElementById(possiblemoves[i][k-1]-200).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
              iangries[i]=possiblemoves[i][k-1]-200; 
              }
              else{
              document.getElementById(possiblemoves[i][k-1]-200).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
              iangries[i]=possiblemoves[i][k-1]-200;
              }
            }
          }
        break;
      }
      else if (k<possiblemoves[i].length){
      for (let j=0; j<i; j++){
        if (possiblemoves[i][k]!=iangries[j] && check!='no'){
          console.log(possiblemoves[i][k]);
        check='yes';
        }
        else{
          check='no';
        }
      }
    }
  }
    } 
}
  }

angries=[];
var iover;
for (let i=0; i<iangries.length; i++){
  for (let j=0; j<iangries.length; j++){
    if (i!=j){
    if (iangries[i]==iangries[j]){
      for (let k=0; k<possiblemoves[i].length; k++){
        for (let l=0; l<iangries.length; l++){
          if (possiblemoves[i][k]==iangries[l]){
            break;
          }
          else if (l==(iangries.length-1)){
            igreen='no';
            for (let a = 0; a < greens.length; a++) {
              if (greens[a] == possiblemoves[i][k-1]+200) {
            iangries[i]=possiblemoves[i][k]+200;
            igreen='yes';
              }
            }
              if (igreen!='yes'){
                iangries[i]=possiblemoves[i][k];
              }
            if (level==2 && i==2){
              document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="45px" width="60px" style="position:absolute; right: -9px; top: -3px;"></img>'
            }
            else{
              document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'

            }

            iover='yes';
          }
        }
        if (iover='yes'){
          break;
        }
      }
    }
  }
}
}
for (let i=0; i<iangries.length; i++){
  if (iangries[i]==smileypiece){
    saveid=smileypiece+200;
    GameOver();
  }
  if (iangries[i]>200){
  angries.push(iangries[i]);
  }
  else{
    angries.push(iangries[i]+200);
  }
}

for (let i=0; i<iangries.length; i++){
  for (let j=0; j<greens.length; j++){
    if (iangries[i]+200==greens[j]){
      if (level==2 && i==2){
      document.getElementById(iangries[i]+200).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="47px" width="62px" style="position:absolute; right: -9px; top: -3px;"></img>'
     iangries[i]=iangries[i]+200;
    }
      else{
        document.getElementById(iangries[i]+200).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'
        iangries[i]=iangries[i]+200;
      }
    }
    }
  }
clear();
}, 1000);
}



/*function Boss(){
  if (game!='off'){
          possibleangries=[];
          console.log('hey');
          move = '';
          diry = '';
          dirx = '';
          spacex = '';
          spacey = '';
          greened='no';
          angry=angries[piece];
          angrypiece = angry - 200;
          smileypiece = pastid;
          let indi = document.getElementById(angrypiece).style.left.indexOf('p');
          let indi2 = document.getElementById(angrypiece).style.top.indexOf('p');
          let indi3 = document.getElementById(smileypiece).style.left.indexOf('p');
          let indi4 = document.getElementById(smileypiece).style.top.indexOf('p');
          angryleft = parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
          angrytop = parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
          smileyleft = parseInt(document.getElementById(smileypiece).style.left.slice(0, indi3));
          smileytop = parseInt(document.getElementById(smileypiece).style.top.slice(0, indi4));  
        if (smileytop > angrytop) {
          spacey = (smileytop - angrytop) / 55;
          diry = 'down';
        }
        if (smileytop < angrytop) {
          spacey = (angrytop - smileytop) / 55;
          diry = 'up';
        }
        if (smileyleft > angryleft) {
          spacex = (smileyleft - angryleft) / 60;
          dirx = 'right';
        }
        if (smileyleft < angryleft) {
          spacex = (angryleft - smileyleft) / 60;
          dirx = 'left';
        }
        if (smileytop == angrytop) {
          spacey = 0;
        }
        if (smileyleft == angryleft) {
          spacex = 0;
        }
        totalmoves = spacex + spacey;
    
        console.log(angry, spacex, spacey, dirx, diry);
    
        if (spacex == 0) {
          if (spacey > 1) {
            if (diry == 'down') { 
              angry = angry - 200;
              angry = angry - (spacey*9);
               for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  greened = 'yes';
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              if (greened != 'yes') {
                //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


    
                angry = angry + 200;
                angries[piece]=angry;
                iangries[piece]=iangry;
              }
            }
            if (diry == 'up') {
              angry = angry - 200;
              angry = angry + (spacey * 9);
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  greened = 'yes';
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              if (greened != 'yes') {
                //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                angries[piece]=angry;
                iangries[piece]=iangry;
              }
            }
          }
          else {
            if (diry == 'down') {
              angry = angry - 200;
              angry = angry - (spacey * 9);
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  greened = 'yes';
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              if (greened != 'yes') {
                //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                angries[piece]=angry;
                iangries[piece]=iangry;
              }
            }
            if (diry == 'up') {
              angry = angry - 200;
              angry = angry + (spacey * 9);
              for (let i = 0; i < greens.length; i++) {
                if (greens[i] == (angry + 200)) {
                  //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  angry = angry + 200;
                  iangry = angry;
                  greened = 'yes';
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              if (greened != 'yes') {
                //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                iangry = angry;
                angry = angry + 200;
                angries[piece]=angry;
                iangries[piece]=iangry;
              }
            }
          }
        }
        if (spacex > 0) {
          if (spacey == 0) {
            if (dirx == 'right') {
              if (spacex > 1) {
                  angry=angry-200;
                  angry=angry+(spacex);
                }
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                  //  document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              else {
                angry = angry - 200;
                angry = angry + 1;
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
            }
            if (dirx == 'left') {
              if (spacex > 1) {
                  angry=angry-200;
                  angry=angry-(spacex);
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
              else {
                angry = angry - 200;
                angry = angry - 1;
                for (let i = 0; i < greens.length; i++) {
                  if (greens[i] == (angry + 200)) {
                    //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                    angry = angry + 200;
                    iangry = angry;
                    greened = 'yes';
                    angries[piece]=angry;
                    iangries[piece]=iangry;
                  }
                }
                if (greened != 'yes') {
                  //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                  iangry = angry;
                  angry = angry + 200;
                  angries[piece]=angry;
                  iangries[piece]=iangry;
                }
              }
            }
          }
          else {
            if (diry == 'down') {
              if (dirx == 'right') {
                if (spacex > 1) {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex;
                    hypey = spacey;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    possibleangries=[];
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry + spacex;
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      if (spacex>spacey){
                          angry=angry-(spacey*8);
                      }
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                    //    document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 1;
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    } 
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if (hypey == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 1) {
                      angry = angry + 2; 
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry - (1 * 8);
                      possibleangries.push(angry);
                 
                    }
                    if (imin == 2) {
                      angry = angry - (1 * 9);
                      possibleangries.push(angry);
                 
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                         greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
                else {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 2;
                    m2 = hypex + hypey + 1;
                      moves.push(m2);
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      } 
                    }
                    angry = angry - 200;
                    if (imin == 1) {
                      angry = angry + 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry - (1 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length;){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 1;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry + 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (1 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry - (1 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
              }
              if (dirx == 'left') {
                if (spacex > 1) {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 2;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 1) {
                      angry = angry - 2;
                      possibleangries.push(angry);
                    } 
                    if (imin == 0) {
                      angry = angry - (2 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){ 
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 1;
                    m2 = hypex + hypey + 1;
                      moves.push(m2);
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 1) {
                      angry = angry - 2;
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry - (1 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (1 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
                else {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 2;
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 1) {
                      angry = angry - 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry - (1 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 1;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry - 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry - (1 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry - (1 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
              }
            }
            if (diry == 'up') {
              if (dirx == 'right') {
                if (spacex > 1) {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 2;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry + 2;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (2 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 1;
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else { 
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 2) {
                      angry = angry + 2;
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry + (2 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src=https://i.ibb.co/MZkwCVh/rb.png
" height="30px" width="30px"></img>'
                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
                else {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 2;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    } 
                      m2 = hypex + hypey + 1;
                      moves.push(m2);
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                   angry = angry - 200;
                    if (imin == 0) {
                      angry = angry + 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (1 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                       angry = angry + 200;
                      iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 1;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry + 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (1 * 10);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (1 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
              }
              if (dirx == 'left') {
                if (spacex > 1) {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 2;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry - 2;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (2 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 2;
                    hypey = spacey - 1;
                    m2 = hypex + hypey + 1;
                    moves.push(m2);
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 2) {
                      angry = angry - 2;
                      possibleangries.push(angry);
                    }
                    if (imin == 0) {
                      angry = angry + (2 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
                else {
                  if (spacey > 1) {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 2;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                      m2 = hypex + hypey + 1;
                      moves.push(m2);
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry - 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (2 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (2 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //doc ument.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                  else {
                    moves = [];
                    hypex = spacex - 1;
                    hypey = spacey - 1;
                    if ((hypex) == spacey) {
                      m1 = spacey;
                      moves.push(m1);
                    }
                    else {
                      m1 = hypex + spacey;
                      moves.push(m1);
                    }
                    if ((hypey) == spacex) {
                      m3 = spacex;
                      moves.push(m3);
                    }
                    else {
                      m3 = hypey + spacex;
                      moves.push(m3);
                    }
                    if (hypex == hypey) {
                      m2 = hypex;
                      moves.push(m2);
                    }
                    else {
                      m2 = hypex + hypey;
                      moves.push(m2);
                    }
                    for (let i = 0; i < moves.length; i++) {
                      if (i == 0) {
                        min = moves[i];
                        imin = 0;
                      }
                      else {
                        if (moves[i] < min) {
                          min = moves[i];
                          imin = i;
                        }
                      }
                    }
                    angry = angry - 200;
                    if (imin == 0) {
                      angry = angry - 1;
                      possibleangries.push(angry);
                    }
                    if (imin == 2) {
                      angry = angry + (1 * 8);
                      possibleangries.push(angry);
                    }
                    if (imin == 1) {
                      angry = angry + (1 * 9);
                      possibleangries.push(angry);
                    }
                    for (let a=0; a<iangries.length; a++){
                      if (angry=iangries[a]){
                        for (let j=0; j<possibleangries.length; j++){
                          if (angry!=possibleangries[j]){
                            angry=possibleangries[j];
                            }
                          }
                      } 
                    }
                    for (let i = 0; i < greens.length; i++) {
                      if (greens[i] == (angry + 200)) {
                        //document.getElementById(angry + 200).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                        angry = angry + 200;
                        iangry = angry;
                        greened = 'yes';
                        angries[piece]=angry;
                        iangries[piece]=iangry;
                      }
                    }
                    if (greened != 'yes') {
                      //document.getElementById(angry).innerHTML = '<img src="https://i.ibb.co/MZkwCVh/rb.png
" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'


                      iangry = angry;
                      angry = angry + 200;
                      angries[piece]=angry;
                      iangries[piece]=iangry;
                    }
                  }
                }
              }
            }
    
          }
        }
      }



*/


function clear(){
clears=[];
let x=pastid+200;
console.log(iangries);
console.log(options);
for (let j=0; j<iangries.length; j++){
 for (let i=0; i<options.length; i++){
  let y=options[i];
    if (options[i]==iangries[j]){ 
      console.log('ilike', options[i]);
    document.getElementById(options[i]).className='clear';
    document.getElementById(options[i]).title='no';
   clears.push(options[i]);
    let diff=options[i]-x;
    let neg='no';
    let icount=0;
    let ucount=0;
    if (diff<0){
      diff=diff*-1;
      neg='yes';
    }
    if (diff>=8){
      if (diff%8==0){
       icount=diff/8;
       ucount=3-icount;
       if (ucount>0){
        let imult=0;
        for (let q=1; q<=ucount; q++){
          if (neg!='yes'){
          console.log('like', q*8+options[i]);
          document.getElementById((q*8+options[i])).className='clear';
          document.getElementById((q*8+options[i])).title='no';
          clears.push(q*8+options[i]);
        }
        else{
          console.log('like', q*8-options[i]);
           document.getElementById((options[i]-q*8)).className='clear';
          document.getElementById(options[i]-q*8).title='no';
          clears.push((options[i]-q*8));
        }
      }
       } 
      }
      if (diff%9==0){
        icount=diff/9;
       ucount=3-icount;
       if (ucount>0){
        let imult=0;
        for (let q=1; q<=ucount; q++){
          if (neg!='yes'){
            console.log('like', q*9+options[i]);
            document.getElementById((q*9+options[i])).className='clear';
            document.getElementById(q*9+options[i]).title='no';
            clears.push((q*9+options[i]));
          }
          else{
            console.log('like', options[i]-q*9);
            document.getElementById((options[i]-q*9)).className='clear';
            document.getElementById(options[i]-q*9).title='no';
            clears.push((options[i]-q*9));
          }    
        }
       } 
        
      }
      if (diff%10==0){
        icount=diff/10;
       ucount=3-icount;
       if (ucount>0){
        let imult=0;
        for (let q=1; q<=ucount; q++){
          if (neg!='yes'){
            console.log('like', q*10+options[i]);
            document.getElementById((q*10+options[i])).className='clear';
            document.getElementById(options[i]+q*10).title='no';  
            clears.push(((q*10+options[i])));
          }
          else{
            console.log('like', options[i]-(q*10));
           document.getElementById((options[i]-q*10)).className='clear';
           document.getElementById(options[i]-q*10).title='no';
           clears.push(((options[i]-q*10)));
          } 
        }
       } 
      }
    }
    else{
      let amt=3-diff;
      console.log(amt);
     for (let t=0; t<amt; t++){
      if (neg=='yes'){
        console.log('like', options[i]);
        document.getElementById((options[i]-t)).className='clear';
        document.getElementById(options[i]-t).title='no';
        clears.push(((options[i]-t)));
      }
      else{
       console.log('like', options[i]+i);
       document.getElementById((options[i]+t)).className='clear';
       document.getElementById(options[i]+t).title='no';
       clears.push(((options[i]+t)));
      }
     }

    }


  }
  }
}
let iy='';
let zcount=0;
if ((pastid>=67 && pastid<=69) || (pastid>=76 && pastid<=78)){
  for (let t=1; t<4; t++){
    if (t==1){
        for (let z=0; z<iangries.length; z++){
          if (x+(9*1)==iangries[z] || x+(9*2)==iangries[z]){
             zcount=1;
          }
        }
      }
    if (t==2 && zcount==1){
      for (let z=0; z<iangries.length; z++){
        if (x+(10*1)==iangries[z] || x+(10*2)==iangries[z]){
           zcount=2;
          }
        }
    }
    if (t==3 && zcount==2){
      for (let z=0; z<iangries.length; z++){
        if (x+(8*1)==iangries[z] || x+(8*2)==iangries[z]){
           zcount=3;
          }
        }
      }
    }
    }
let z2count=0;
if ((pastid<=66 && pastid<=64) || (pastid<=75 && pastid<=73)){
    for (let t=1; t<3; t++){
      if (t==1){
        iy='yes';
        for (let z=0; z<iangries.length; z++){
          if (x+(9*1)==iangries[z] || x+(9*2)==iangries[z]){
            if (iy!='no'){
             z2count=1;
             iy='no';
          }
        }
        }
      }
      if (t==2 && z2count==1){
        iy='yes';
        for (let z=0; z<iangries.length; z++){
          if (x+(10*1)==iangries[z] || x+(10*2)==iangries[z]){
            if (iy!='no'){
             z2count=2;
             iy='no';
          }
        }
      }
    }
  }
}
if ((pastid>=70 && pastid<=72) || (pastid>=79 && pastid<=81)){
    for (let t=1; t<3; t++){
      if (t==1){
        iy='yes';
        for (let z=0; z<iangries.length; z++){
          if (x+(9*1)==iangries[z] || x+(9*2)==iangries[z]){
            if (iy!='no'){
             z2count=1;
             console.log(z2count);
             iy='no';
            }
          }
        }
      }
      if (t==2 && z2count==1){
        iy='yes';
        for (let z=0; z<iangries.length; z++){
          if (x+(8*1)==iangries[z] || x+(8*2)==iangries[z]){
            if (iy!='no'){
             z2count=2;
             console.log(z2count);
             iy='no';
            }
          }
        }
      }
  }
}
    if (zcount==3 || z2count==2 || pastid<=63){
      document.getElementById(100).className='finish';
    }
    else{
      document.getElementById(100).className='greenfinish';
    }
    run='yes';
}




function Nav(id) {
  newid = parseInt(id);
  let manuever='no';
  try {
    if (document.getElementById(newid).title!='no'){
      manuever='yes';
    }
  } catch (TypeError) {
    manuever='yes';
  }
  if (manuever=='yes'){
    for (let i=0; i<clears.length; i++){
      try {
        document.getElementById(clears[i]).title='';
      } catch (TypeError) {
        
      }
      }
  if (run=='no'){
    disabled='yes';
  }
  else{
    disabled='no';
  }
  if (disabled=='no' || newid==300){
  on = 'yes';
  if (newid!=300 ){
    document.getElementById(pastid).innerHTML = ''; 
   };
  if (newid==300){
    newid = 5;
    init='no';
    pastid=saveid;
    game='on';
   }

   for (let t=0; t<level+1; t++){
    if (newid!=300){
      try{
    document.getElementById(iangries[t]).innerHTML='';
      }
      catch (TypeError) {   
      }
  }
  }

  if (start < 2) {
    pastid = 205;
    start=2;
  }
  else {
    if (newid!=5){
    pastid = pastid + 200;
  }
}
  let rightboundary = 830;
  let leftboundary = 350;
  let topboundary = 25;
  let bottomboundary = 555;
  moves = [];
  greens = [];
  options=[];
  let ind = document.getElementById(newid).style.left.indexOf('p');
  let ind2 = document.getElementById(newid).style.top.indexOf('p');
  let initx = parseInt(document.getElementById(newid).style.left.slice(0, ind));
  let inity = parseInt(document.getElementById(newid).style.top.slice(0, ind2));
  /*if (inity - (55 * 3) <= 5) {
    document.getElementById(100).className = 'greenfinish';
  }
  else {
    if (document.getElementById(100).className === 'greenfinish') {
      document.getElementById(100).className = 'finish';
    }
  }
    */
  if (newid==5){
    newid=205;
  }
if (newid!=100){
    for (let k = 0; k < 8; k++) {
    rong='yes';
      for (let j = 0; j < 3; j++) {
        if (k == 0) {
          if (j == 0) {
            console.log(pastid);
            newslot = pastid + 1;
            changeid = newid + 1;
            x = initx;
            y = inity;
          }
          if ((x + 60) <= rightboundary) {
            x = x + 60;
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).style.top = y + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            options.push(changeid);
            greens.push(changeid);
            newslot = newslot + 1;
            changeid = changeid + 1;
          }
          else {
            x = x + 60;
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).style.top = y + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot + 1;
            changeid = changeid + 1;
          }
        }
        if (k == 1) {
          if (j == 0) {
            newslot = pastid + 9;
            changeid = newid + 9;
            x = initx;
            y = inity;
          }
          if ((y - 55) >= topboundary ) {
            y = y - 55;
            document.getElementById(newslot).style.top = y + 'px';
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot + 9;
            changeid = changeid + 9;
          }
          else {
            y = y - 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot + 9;
            changeid = changeid + 9;
          }
        } 
        if (k == 2) {
          if (j == 0) {
            newslot = pastid - 1;
            changeid = newid - 1;
            x = initx;
            y = inity;
          }
          if ((x - 60) >= leftboundary) {
            x = x - 60;
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).style.top = y + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            options.push(changeid);
            greens.push(changeid);
            newslot = newslot - 1;
            changeid = changeid - 1;
          }
          else {
            x = x - 60;
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).style.top = y + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot - 1;
            changeid = changeid - 1;
          }
        }
        if (k == 3) {
          if (j == 0) {
            newslot = pastid + 10;
            changeid = newid + 10;
            x = initx;
            y = inity;
          }
          if ((x + 60) <= rightboundary && (y - 55) >= topboundary) {
            x = x + 60;
            y = y - 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot + 10;
            changeid = changeid + 10;
          }
          else {
            x = x + 60;
            y = y - 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot + 10;
            changeid = changeid + 10;
          }
        }
        if (k == 4) {
          if (j == 0) {
            newslot = pastid + 8;
            changeid = newid + 8;
            x = initx;
            y = inity;
          }
          if ((x - 60) >= leftboundary && (y - 55) >= topboundary ) {
            x = x - 60;
            y = y - 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot + 8;
            changeid = changeid + 8;
          }
          else {
            x = x - 60;
            y = y - 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot + 8;
            changeid = changeid + 8;
          }
        }
        if (k == 5) {
          if (j == 0) {
            newslot = pastid - 10;
            changeid = newid - 10;
            x = initx;
            y = inity;
          }
          if ((x - 60) >= leftboundary && (y + 55) <= bottomboundary) {
            x = x - 60;
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot - 10;
            changeid = changeid - 10;
          }
          else {
            x = x - 60;
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot - 10;
            changeid = changeid - 10;
          }
        }
        if (k == 6) {
          if (j == 0) {
            newslot = pastid - 8;
            changeid = newid - 8;
            x = initx;
            y = inity;
          } 
          if ((x + 60) <= rightboundary && (y + 55) <= bottomboundary) {
            x = x + 60;
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot - 8;
            changeid = changeid - 8;
          }
          else {
            x = x + 60;
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = (x) + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot - 8;
            changeid = changeid - 8
          }
        }
        if (k == 7) {
          if (j == 0) {
            newslot = pastid - 9;
            changeid = newid - 9;
            x = initx;
            y = inity;
          } 
          if ((y + 55) <= bottomboundary ) {
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'green';
            greens.push(changeid);
            options.push(changeid);
            newslot = newslot - 9;
            changeid = changeid - 9;
          }
          else {
            y = y + 55;
            document.getElementById(newslot).style.top = (y) + 'px';
            document.getElementById(newslot).style.left = x + 'px';
            document.getElementById(newslot).id = changeid;
            document.getElementById(changeid).className = 'clear';
            options.push(changeid);
            newslot = newslot - 9;
            changeid = changeid - 9;
          }
        }
      }
    }
  }
  for (let z=0; z<400; z++){
    var dec='no';
    try {
      if (document.getElementById(z).className=='green'){
        for (let f=0; f<greens.length; f++){
          if (z==greens[f]){
            dec='yes';
          }
        }
        if (dec=='no'){
          document.getElementById(z).className='clear';
        }
      }
    } catch (TypeError) {
      
    }
  }
  for (let u=0; u<greens.length; u++){
    try {
      if (document.getElementById(greens[u]).className!='green'){
       document.getElementById(greens[u]).style.left=document.getElementById(greens[u]-200).style.left; 
       document.getElementById(greens[u]).style.top=document.getElementById(greens[u]-200).style.top;
       document.getElementById(greens[u]).className='green'; 
      }
    }
    catch (TypeError){

    }
    if (greens[u]>291){
      document.getElementById(greens[u]).className='clear';
      delete greens[u];
    }
  }
  console.log(greens);
  if (newid == 100 ) {
    run='no';
    let y=-45;
    saveid=pastid;
    document.getElementById(100).innerHTML ='<img src="https://i.ibb.co/SxzCsKG/green.png" height="35px" width="35px" id="yellow"></img>'
  while(y!=5){
      let z=101;
      y=y+.5;
      for (let i=0; i<10; i++){
        document.getElementById(z).style.top=y + 'px';
        z=z+1;
      }
  }
  level=level+1;
  init='yes';
  pastid=100;
  if (level==2){
    angry1 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    angry2 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    angry3 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    iangries=[]; 
    iangries.push(angry1);
    iangries.push(angry2);
    iangries.push(angry3);
    var ang=iangries[0]; 
    for (let i=0; i<3; i++){
      for (let j=1; j<3; j++){
        if (iangries[i]=iangries[j]){
           iangries[j]=Math.floor(Math.random() * (90 - 37 + 1) + 37);
        }
      }
    }
   

    let iangry1=angry1+200;
    let iangry2=angry2+200;
    let iangry3=angry3+200;
    angries=[];
    angries.push(iangry1);
    angries.push(iangry2);
    angries.push(iangry3);
     setTimeout(() => {
    for (let i=101; i<111; i++){
      document.getElementById(i).style.top='-45px';
    }
    document.getElementById(100).innerHTML='';
  }, 5400);
    setTimeout(() => {
      document.getElementById('cdown').style.left='300px';
      document.getElementById('cdown').innerHTML='LEVEL 2';
    }, 5400 );
    setTimeout(() => {
      document.getElementById('cdown').innerHTML='';
    }, 7600 );
    setTimeout(() =>{
      document.getElementById('cdown').style.left='560px';
      document.getElementById('cdown').innerHTML='3';
    }, 9200);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='2';
    }, 10300);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='1';
    }, 11400);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='';
    }, 12500);
  setTimeout(() =>{
    console.log('newlevel2', iangries);
    for (let i=0; i<2; i++){
      document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>'

   }
    document.getElementById(iangries[2]).innerHTML='<img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="47px" width="62px" style="position:absolute; right: -9px; top: -3px;"></img>'
      document.getElementById(5).innerHTML = '<img src="https://i.ibb.co/SxzCsKG/green.png" height="35px" width="35px" id="yellow" style="position:absolute; right: 2.3px; top: 2px;"></img>'
    AngryMove(-1);
    run='yes';
  }, 12500);
}
if (level==3){ 
  angry1 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    angry2 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    angry3 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    angry4 = Math.floor(Math.random() * (90 - 37 + 1) + 37);
    iangries=[]; 
    iangries.push(angry1);
    iangries.push(angry2);
    iangries.push(angry3);
    iangries.push(angry4);
    var ang=iangries[0]; 
    for (let i=0; i<4; i++){
      for (let j=1; j<4; j++){
        if (iangries[i]=iangries[j]){
           iangries[j]=Math.floor(Math.random() * (90 - 37 + 1) + 37);
        }
      }
    }
    
    angry1=angry1+200;
    angry2=angry2+200;
    angry3=angry3+200;
    angry4=angry4+200;
    angries=[];
    angries.push(angry1);
    angries.push(angry2);
    angries.push(angry3);
    angries.push(angry4);
    setTimeout(() => {
    for (let i=101; i<111; i++){
      document.getElementById(i).style.top='-45px';
    }
    document.getElementById(100).innerHTML='';
  }, 5400);
    setTimeout(() => {
      document.getElementById('cdown').style.left='300px';
      document.getElementById('cdown').innerHTML='LEVEL 3';
    }, 5400 );
    setTimeout(() => {
      document.getElementById('cdown').innerHTML='';
    }, 7600 );
    setTimeout(() =>{
      document.getElementById('cdown').style.left='560px';
      document.getElementById('cdown').innerHTML='3';
    }, 9200); 
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='2';
    }, 10300);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='1';
    }, 11400);
    setTimeout(() =>{
      document.getElementById('cdown').innerHTML='';
    }, 12500);
  setTimeout(() =>{
    console.log(level, iangries);
    for (let i=0; i<4; i++){
      document.getElementById(iangries[i]).innerHTML='<img src="https://i.ibb.co/MZkwCVh/rb.png" height="47px" width="62px" style="position: absolute; right: -10px; top: -3px;"></img>' 
    }
    document.getElementById(5).innerHTML =  '<img src="https://i.ibb.co/SxzCsKG/green.png" height="35px" width="35px" id="yellow" style="position:absolute; right: 2.3px; top: 2px;"></img>'
    AngryMove(-1);
    run='yes';
  }, 12500);
}
  if (level==4){
  
    //<img src="https://i.ibb.co/bNmgWQx/You-WIN.png" height="500px" width="500px"></img>
      console.log('level4');
      YouWin();
/*      setTimeout(() => {
    for (let i=101; i<111; i++){
      document.getElementById(i).style.top='-45px';
    }
    document.getElementById(100).innerHTML='';
    document.getElementById('gover').innerHtml='';  
    document.getElementById('Start').style.zIndex=12;
  document.getElementById('Menu').style.zIndex=11;
  }, 11400);
  */
  }

}

  else {
    if (newid!=300 && lost!='yes'){
    document.getElementById(newid - 200).innerHTML =  '<img src="https://i.ibb.co/SxzCsKG/green.png" height="35px" width="35px" id="yellow" style="position:absolute; right: 2.3px; top: 2px;"></img>'
    }
    pastid = newid - 200;
      game='on';
      if (lost!='yes'){
      run='no';
      AngryMove(0);
      }
      lost='no';
    }
  }
}
}
  

function Game() {
  document.getElementById('Start').style.zIndex=-1;
  document.getElementById('Menu').style.zIndex=-1;
  Start();
}


function App() {
  return (
  <div className='Play'>
    <div className='Menu' id='Menu'>
    <img src="https://i.ibb.co/RH680TV/Space-Balls.png" style={{position: 'absolute', zIndex: 1, height: 600, width: 1100, top: -130, left: 80}}></img>
      <button className='Start' id='Start' onClick={Game} style={{position: 'absolute', zIndex: 1, left: 477, top: 400}}>START</button>
     </div>
      <div className="App">
        {(() => {
          tiles = [];
          let l = 0;
          let x = 350;
          let y = 555;
          xs = [];
          movex = x;
          movey = y;
          for (let i = 1; i < 91; i++) {
            let coords = [];
            coords.push(x);
            coords.push(y);
            xs.push(coords);
            tiles.push(<div className="square" id={i} style={{ position: 'absolute', zIndex: 2, height: 40, width: 40, left: x, top: y }}></div>)
            x = x + 60;
            movex = x;
            if (i % 9 == 0) {
              x = 350;
              movex = x;
              y = y - 55;
              movey = y;
            }
          }
          return tiles;
        })()};
         {(() => { 
        gameover.push(<div className="over" id='gover' style={{ position: 'absolute', zIndex: 5, left: 265, top: -100}}></div>)
          return gameover;
      })()};
      {(() => { 
        winner.push(<div className="winner" id='iwinner' style={{ position: 'absolute', zIndex: 7, left: 213, top: -100}}></div>)
          return winner;
      })()};
            {(() => {
        countdown.push(<div className="count" id='cdown' style={{ position: 'absolute', zIndex: 5, left: 550, top: 130, fontSize: 180, color: 'limegreen', fontWeight: 'bold'}}></div>)
          return countdown;
      })()};
           {(() => {
        ledger.push(<div className='instructions' id='instructs' style={{ position: 'absolute', zIndex: 5, left: 1000, top: 60, fontSize: 18, color: 'white', fontWeight: 'bold', fontFamily: 'monospace' }}> Instructions</div>);
        ledger.push(<div className='greenmove' id='gm' style={{ position: 'absolute', zIndex: 5, left: 1000, top: 105, fontSize: 18, color: 'white', fontFamily: 'monospace' }}> Move <img src="https://i.ibb.co/SxzCsKG/green.png" style={{top: 4}} height="30px" width="30px" id="yellow"></img> into the Purple Zone</div>);
        ledger.push(<div className='greenmovei' id='igm' style={{ position: 'absolute', zIndex: 5, left: 1050, top: 155, fontSize: 18, color: 'white', fontFamily: 'monospace' }}>* Moves up to 3 Spaces in any Single Direction</div>);
        ledger.push(<div className="redmove" id='rm' style={{ position: 'absolute', zIndex: 5, left: 1000, top: 245, fontSize: 18, color: 'white', fontFamily: 'monospace' }}>Avoid <img src="https://i.ibb.co/MZkwCVh/rb.png" height="36px" width="50px" style={{top: 4}}></img></div>)
        ledger.push(<div className="redmovei" id='irm' style={{ position: 'absolute', zIndex: 5, left: 1050, top: 285, fontSize: 18, color: 'white', fontFamily: 'monospace' }}> * Moves Up To 2 Spaces in any Single Direction</div>)
        ledger.push(<div className="purplemove" id='pm' style={{ position: 'absolute', zIndex: 5, left: 1000, top: 375, fontSize: 18, color: 'white', fontFamily: 'monospace' }}>Avoid <img src="https://i.ibb.co/Bqq79qC/pb-1.png" height="36px" width="50px" style={{top: 4}}></img></div>)
        ledger.push(<div className="purplemovei" id='ipm' style={{ position: 'absolute', zIndex: 5, left: 1050, top: 415, fontSize: 18, color: 'white', fontFamily: 'monospace' }}> * Moves Up To 3 Spaces to the Right or Left</div>)  
        return ledger;
      })()};
        {(() => {
          let stars = [];
          for (let i = 1; i < 101; i++) {
            let v = window.innerHeight - 10;
            let w = window.innerWidth - 10;
            let x = Math.random() * (w - 1 + 1) + 1;
            let y = Math.random() * (v - 1 + 1) + 1;
            let z = Math.random() * ((15 - 5) + 1) + 5;
            stars.push(<img src="https://i.ibb.co/6R4s9Hb/star.jpg" height={z} width={z} style={{ position: 'absolute', zIndex: 1, left: x, top: y }} ></img>)
            x = Math.random() * (w - 1 + 1) + 1;
            y = Math.random() * (v - 1 + 1) + 1;
            z = Math.random() * ((15 - 5) + 1) + 5;
            stars.push(<img src="https://i.ibb.co/6R4s9Hb/star.jpg" height={z} width={z} style={{ position: 'absolute', zIndex: 1, right: x, bottom: y }} ></img>)
          }
          return stars;
        })()};
        {(() => {
          logo.push(<img src="https://i.ibb.co/RH680TV/Space-Balls.png" style={{ position: 'absolute', zIndex: 1, height: 190, width: 385, left: -50, top: 0}} ></img>)
          return logo;
           })()};
        {(() => {
          let x = 350 + (60 * 4);
          let y = 555;
          let idnum = 205;
          greens=[];
          for (let i = 0; i < 24; i++) {
            if (i < 3) {
              x = x + 60;
              idnum = idnum + 1;
              if (greentiles.length < 15) {
                greentiles.push(<div className="green" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>);
              }
            }
            else if (i < 6) {
              if (i == 3) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              x = x - 60;
              movex = x;
              idnum = idnum - 1;
              if (greentiles.length < 15) {
                greentiles.push(<div className="green" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 9) {
              if (i == 6) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              y = y - 55;
              idnum = idnum + 9;
              if (greentiles.length < 15) {
                greentiles.push(<div className="green" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 12) {
              if (i == 9) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              x = x + 60;
              y = y - 55;
              idnum = idnum + 10;
              if (greentiles.length < 15) {
                greentiles.push(<div className="green" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 15) {
              if (i == 12) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              x = x - 60;
              y = y - 55;
              idnum = idnum + 8;
              if (greentiles.length < 15){ 
                greentiles.push(<div className="green" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 18) {
              if (i == 15) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              y = y + 55;
              idnum = idnum - 9
              if (greentiles.length < 24) {
                greentiles.push(<div className="clear" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 21) {
              if (i == 18) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              y = y + 55;
              x = x + 60;
              idnum = idnum - 8;
              if (greentiles.length < 24) {
                greentiles.push(<div className="clear" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
            else if (i < 24) {
              if (i == 21) {
                x = 350 + (60 * 4);
                y = 555;
                idnum = 205;
              }
              y = y + 55;
              x = x - 60;
              idnum = idnum - 10;
              if (greentiles.length < 24) {
                greentiles.push(<div className="clear" onClick={e => Nav(e.currentTarget.id)} id={idnum} style={{ position: 'absolute', zIndex: 3, left: x, top: y }}></div>)
              }
            }
          }
          return greentiles;
        })()};
        {(() => {
          if (finisher.length == 0) {
            finisher.push(<div className="finish" onClick={e => Nav(100)} id={100} style={{ position: 'absolute', zIndex: 3, left: 345, top: 5 }}></div>)
          }
          return finisher;
        })()};
        {(() => {
          let x=315;
          let z=100;
          for (let i = 0; i < 10; i++) {
            x=x+50;
            y=-40;
            z=z+1;
            if (i % 2 == 0) {
              celebration.push(<img src="https://i.ibb.co/fNv81Hs/red-balloon.png" id={z} height={40} width={35} style={{position: 'absolute', zIndex: 1, left: x, top: y}}></img>)
            }
            if (i % 2 != 0) {
              celebration.push(<img src="https://i.ibb.co/FqQZ6xx/yellow-balloon.png" id={z} height={40} width={35} style={{position: 'absolute', zIndex: 1, left: x, top: y}}></img>)
            }
          }
          return celebration;
        })()};
      </div>
    </div>  
  );
}
export default App;
