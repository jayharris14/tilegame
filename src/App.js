import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';

var pieces=[];
var moves=[];
var greensx=[];
var greensy=[];
var xs=[];
var greentiles=[];
var green='no';
var movex;
var movey;
var next=0;
var red;
var ix=595;
var iy=525;
var pastid=5;
var newslot;
var tiles;
var igreen;
var newid;
var changeid;
var start=0;
var angry=286;
var iangry=86;
var smileytop;
var angrytop;
var smileyleft;
var angryleft;
var angrypiece;
var spacex;
var spacey;
var totalmoves;
var index;
var moves=[];
var greens=[];
var dirx;
var diry;
var hypey;
var hypex;
var greened;
var go='no';



function Move(){
greened='no';
if (start<1){
setTimeout(() => {
document.getElementById(86).innerHTML='<img src="https://i.ibb.co/98nm7mp/angry.jpg" height="30px" width="30px"></img>'
document.getElementById(5).innerHTML='<img src="https://i.ibb.co/0X1m0XP/sface.png" height="30px" width="30px" id="yellow"></img>'
go='yes';
}, 5000)
start=1;
angrytop=25;
smileytop=520;
angryleft=590;
smileyleft=590;
}
if (start==2){
  angrypiece=angry-200;
  angrytop=document.getElementById(angrypiece).style.top;
  let indi=document.getElementById(angrypiece).style.left.indexOf('p');
  let indi2=document.getElementById(angrypiece).style.top.indexOf('p');
  angryleft=parseInt(document.getElementById(angrypiece).style.left.slice(0, indi));
  angrytop=parseInt(document.getElementById(angrypiece).style.top.slice(0, indi2));
}



if (smileytop>=angrytop){
spacey=smileytop/angrytop;
diry='down';
}
else{
spacey=angrytop/smileytop;
diry='up';
}
if (smileyleft>=angryleft){
spacex=smileyleft/angryleft;
dirx='right';
}
else{
spacex=angryleft/smileyleft;
dirx='left'

}
totalmoves=spacex+spacey;
console.log('hey', go);
while (go!='yes'){
  let pause='yes';
}
if (go=='yes'){
setTimeout(() => {
document.getElementById(iangry).innerHTML='';
if (spacex=1){
  if (spacey>=2){
      if (diry=='down'){
          angry=angry-200;
          angry=angry-(2*9);
          for (let i=0; i<greens.length; i++){
          if (greens[i]==(angry+200)){
            document.getElementById(angry+200).innerHTML='<img src="https://i.ibb.co/98nm7mp/angry.jpg" height="30px" width="30px"></img>'
            angry=angry+200;
            iangry=angry;
            greened='yes';
          }
        }
          if (greened!='yes'){
            document.getElementById(angry).innerHTML='<img src="https://i.ibb.co/98nm7mp/angry.jpg" height="30px" width="30px"></img>'
            iangry=angry;
            angry=angry+200;
          }
          }
      if (diry=='up'){
        angry=angry-200;
        angry=angry+(2*9);
        for (let i=0; i<greens.length; i++){
        if (greens[i]==(angry+200)){
          document.getElementById(angry+200).innerHTML='<img src="https://i.ibb.co/98nm7mp/angry.jpg" height="30px" width="30px"></img>'
          angry=angry+200;
          iangry=angry;
          greened='yes';
        }
      }
        if (greened!='yes'){
          document.getElementById(angry).innerHTML='<img src="https://i.ibb.co/98nm7mp/angry.jpg" height="30px" width="30px"></img>'
          iangry=angry;
          angry=angry+200;
        }
      }
  }

}
}, 1000)
}
}


function Nav(id) {
  document.getElementById(pastid).innerHTML='';
  if (start<2){
    pastid=205;
    start=2;
  }
  else{
  pastid=pastid+200;
  }
  newid=parseInt(id);
  document.getElementById(newid-200).innerHTML='<img src="https://i.ibb.co/0X1m0XP/sface.png" height="30px" width="30px" id="yellow" style="zIndex:5"></img>'
  let rightboundary=830;
  let leftboundary=350
  let topboundary=25;
  let bottomboundary=520;
  moves=[]; 
  let ind=document.getElementById(newid).style.left.indexOf('p');
  let ind2=document.getElementById(newid).style.top.indexOf('p');
  let initx=parseInt(document.getElementById(newid).style.left.slice(0, ind));
  let inity=parseInt(document.getElementById(newid).style.top.slice(0, ind2));
   for (let k=0; k<8; k++){
      greens=[];
      let x=initx;
      let y=inity;
      console.log('hi');
      for (let j=0; j<3; j++){
        console.log('hii');
              if (k==0){
                if (j==0){
                  newslot=pastid+1;
                  changeid=newid+1;
                }
                if ((x+60)<=rightboundary && changeid!=angry){
                    x=x+60;
                    document.getElementById(newslot).style.left=x+'px';
                    document.getElementById(newslot).style.top=y+'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='green';
                    greens.push(changeid);
                    newslot=newslot+1;
                    changeid=changeid+1;
                  }
                  else{
                    x=x+60;
                    document.getElementById(newslot).style.left=x+'px';
                    document.getElementById(newslot).style.top=y+'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='clear';
                    newslot=newslot+1;
                    changeid=changeid+1;
                  }
                  }
              if (k==1){
                if (j==0){
                  newslot=pastid+9;
                  changeid=newid+9;
                  x=initx;
                  y=inity;
                }
                   if ((y-55)>=topboundary && changeid!=angry){
                    y=y-55;
                    document.getElementById(newslot).style.top=y + 'px';
                    document.getElementById(newslot).style.left=x+ 'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='green';
                    greens.push(changeid);
                    newslot=newslot+9;
                    changeid=changeid+9;
                  }
                  else{
                    y=y-55;
                    document.getElementById(newslot).style.top=(y) + 'px';
                    document.getElementById(newslot).style.left=x+ 'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='clear';
                    greens.push(changeid);
                    newslot=newslot+9;
                    changeid=changeid+9;
                  }
              }
              if (k==2){
                if (j==0){
                  newslot=pastid-1;
                  changeid=newid-1;
                  x=initx;
                  y=inity;
                }
                if ((x-60)>=leftboundary && changeid!=angry){
                    x=x-60;
                    document.getElementById(newslot).style.left=(x) + 'px';
                    document.getElementById(newslot).style.top=y+ 'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='green';
                    greens.push(changeid);
                    newslot=newslot-1;
                    changeid=changeid-1;
                  }
                  else{
                      x=x-60;
                      document.getElementById(newslot).style.left=(x) + 'px';
                      document.getElementById(newslot).style.top=y+ 'px';
                      document.getElementById(newslot).id=changeid;
                      document.getElementById(changeid).className='clear';
                      newslot=newslot-1;
                      changeid=changeid-1;
                    }
              }
              if (k==3){
                if (j==0){
                  newslot=pastid+10;
                  changeid=newid+10;
                  x=initx;
                  y=inity;
               }
              if ((x+60)<=rightboundary && (y-55)>=topboundary && changeid!=angry){
                    x=x+60;
                    y=y-55;
                    document.getElementById(newslot).style.top=(y)+ 'px';
                    document.getElementById(newslot).style.left=(x) + 'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='green';
                    greens.push(changeid);
                    newslot=newslot+10;
                    changeid=changeid+10;
                  }
                
                  else{
                        x=x+60;
                        y=y-55;
                        document.getElementById(newslot).style.top=(y)+ 'px';
                        document.getElementById(newslot).style.left=(x) + 'px';
                        document.getElementById(newslot).id=changeid;
                        document.getElementById(changeid).className='clear';
                        newslot=newslot+8;
                        changeid=changeid+10;
                      }
              }
             if (k==4){
              if (j==0){
                newslot=pastid+8;
                changeid=newid+8;
                x=initx;
                y=inity;
              }
                if ((x-60)>=leftboundary && (y-55)>=topboundary && changeid!=angry){
                  x=x-60;
                  y=y-55;
                    document.getElementById(newslot).style.top=(y)+ 'px';
                    document.getElementById(newslot).style.left=(x)+ 'px';
                    document.getElementById(newslot).id=changeid;
                    document.getElementById(changeid).className='green';
                    greens.push(changeid);
                    newslot=newslot+8;
                    changeid=changeid+8;
              }
              else{
                x=x-60;
                y=y-55;
                document.getElementById(newslot).style.top=(y)+ 'px';
                document.getElementById(newslot).style.left=(x)+ 'px';
                document.getElementById(newslot).id=changeid;
                document.getElementById(changeid).className='clear';
                newslot=newslot+8;
                changeid=changeid+8;
          }
           }
           if (k==5){
            if (j==0){
              newslot=pastid-10;
              changeid=newid-10;
              x=initx;
              y=inity;
            }
            if ((x-60)>=leftboundary && (y+55)<=bottomboundary && changeid!=angry){
                x=x-60;
                y=y+55;
                document.getElementById(newslot).style.top=(y)+ 'px';
                document.getElementById(newslot).style.left=(x)+ 'px';
                document.getElementById(newslot).id=changeid;
                document.getElementById(changeid).className='green';
                greens.push(changeid);
                newslot=newslot-10;
                changeid=changeid-10;
          }
          else{
            x=x-60;
            y=y+55;
            document.getElementById(newslot).style.top=(y)+ 'px';
            document.getElementById(newslot).style.left=(x)+ 'px';
            document.getElementById(newslot).id=changeid;
            document.getElementById(changeid).className='clear';
            newslot=newslot-10;
            changeid=changeid-10;
      }
       }
       if (k==6){
        if (j==0){
          newslot=pastid-8;
          changeid=newid-8;
          x=initx;
          y=inity;
        }
        if ((x+60)<=rightboundary && (y+55)<=bottomboundary && changeid!=angry){
            x=x+60;
           y=y+55;
            document.getElementById(newslot).style.top=(y)+ 'px';
            document.getElementById(newslot).style.left=(x)+ 'px';
            document.getElementById(newslot).id=changeid;
            document.getElementById(changeid).className='green';
            greens.push(changeid);
            newslot=newslot-8;
            changeid=changeid-8;
      }
      else{
        x=x+60;
        y=y+55;
        document.getElementById(newslot).style.top=(y)+ 'px';
        document.getElementById(newslot).style.left=(x)+ 'px';
        document.getElementById(newslot).id=changeid;
        document.getElementById(changeid).className='clear';
        newslot=newslot-8;
        changeid=changeid-8;
  }
   }
   if (k==7){
    if (j==0){
      newslot=pastid-9;
      changeid=newid-9;
      x=initx;
      y=inity;
    }
    if ((y+55)<=bottomboundary && changeid!=angry){
        y=y+55;
        document.getElementById(newslot).style.top=(y)+ 'px';
        document.getElementById(newslot).style.left=x+ 'px';
        document.getElementById(newslot).id=changeid;
        document.getElementById(changeid).className='green';
        greens.push(changeid);
        newslot=newslot-9;
        changeid=changeid-9;
  }
  else {
    y=y+55;
    document.getElementById(newslot).style.top=(y)+ 'px';
    document.getElementById(newslot).style.left=x+ 'px';
    document.getElementById(newslot).id=changeid;
    document.getElementById(changeid).className='clear';
    newslot=newslot-9;
    changeid=changeid-9;
}
}

          }
  }
  
pastid=newid-200;
}

function App() {
  return(
  <div className='Play'>
    <div className="App">
      {(() => {
        tiles=[];
        let l=0;
        let x=350;
        let y=520; 
        xs=[];
        movex=x;
        movey=y;
        for (let i = 1; i < 91; i++) {
          let coords=[];
          coords.push(x);
          coords.push(y);
          xs.push(coords);

          tiles.push(<div className="square" id={i} style={{position: 'absolute', zIndex:2, height: 40, width: 40, left: x, top: y}}></div>)
           x=x+60;
           movex=x;
             if (i%9==0){
              x=350;
              movex=x;
              y=y-55;
              movey=y;
         }
          }    
        return tiles;
      })()};
      {(() => {
        let stars=[]; 
        for (let i = 1; i < 101; i++) {
        let v=window.innerHeight/101;
        let w=window.innerWidth/101;
        let x=Math.random()* ((w*i)-i) + i;
        let y=Math.random()* ((v*i)-i) + i;
        let z=Math.random()* ((15 - 5) + 1) + 5;
        stars.push(<img src="https://i.ibb.co/6R4s9Hb/star.jpg" height={z} width={z} style={{position: 'absolute', zIndex: 1, left: x, top: y}} ></img>)
        x=Math.random()* ((w*i)-i) + i;
        y=Math.random()* ((v*i)-i) + i;
        z=Math.random()* ((15 - 5) + 1) + 5;
        stars.push(<img src="https://i.ibb.co/6R4s9Hb/star.jpg" height={z} width={z} style={{position: 'absolute', zIndex:1, right: x, bottom: y}} ></img>)
  }
  return stars;                                                                                                                                                                                                                               
})()};
{(() => {
        let x=350+(60*4);
        let y=520;
        let start=5;
        let idnum=205;
        for (let i=0; i < 24; i++) {
          console.log(i);
            if (i<3){
              console.log('i '+ i)
              x=x+60;
              idnum=idnum+1;
              console.log(greentiles.length)
              if (greentiles.length<15){
              greentiles.push(<div className="green" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
            }
          }
            else if (i<6){
              if (i==3){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              x=x-60;
              movex=x;
              idnum=idnum-1;
              if (greentiles.length<15){
                greentiles.push(<div className="green" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
              }
            }  
            else if (i<9){
              if (i==6){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              y=y-55;
              idnum=idnum+9;
              if (greentiles.length<15){
                greentiles.push(<div className="green" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)              }
            }
            else if (i<12){
              if (i==9){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              x=x+60;
              y=y-55;
              idnum=idnum+10;
              if (greentiles.length<15){
                greentiles.push(<div className="green" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
              }
            }
            else if (i<15){
              if (i==12){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
                x=x-60;
                y=y-55;
                idnum=idnum+8;
                if (greentiles.length<15){
                  greentiles.push(<div className="green" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
                }
              }
            else if (i<18){
              if (i==15){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              y=y+55;
              idnum=idnum-9
              if (greentiles.length<24){
                greentiles.push(<div className="clear" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
              }
            }
            else if (i<21){
              if (i==18){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              y=y+55;
              x=x+60;
              idnum=idnum-8;
              if (greentiles.length<24){
                greentiles.push(<div className="clear" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
              }
            }
            else if (i<24){
              if (i==21){
                x=350+(60*4);
                y=520;
                idnum=205;
              }
              y=y+55;
              x=x-60;
              idnum=idnum-10;
              if (greentiles.length<24){
                greentiles.push(<div className="clear" onClick={e=>Nav(e.currentTarget.id)} id={idnum} style={{position: 'absolute', zIndex:3, left: x, top: y}}></div>)
              }
            }
        }    
        return greentiles; 
      })()};
    </div>
    <Move></Move>
    </div>
  );
}
export default App;
