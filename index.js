import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let currentDate=new Date(2021,10,11,22);
let hours=currentDate.getHours();
let greeting="";
let cssStyle={};
if(hours>1 && hours<12)
{
   greeting="Good Morning";
   cssStyle.color="Green";
}
else if(hours>=12 && hours<=16)
{
  greeting="Good Afternoon";
  cssStyle.color="Orange";
  
}
else if(hours>16 && hours<20)
{
  greeting="Good Evening";
  cssStyle.color="Red";
}
else
{
  greeting="Good Night";
  cssStyle.color="Black";
}



ReactDOM.render(
  <>
    <div>

    <h1>Hi Rita Randi! <span style={cssStyle}>{greeting}</span></h1>


    </div>

  </>,
  document.getElementById('root')
);

