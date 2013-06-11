var myImage= new Array(); 
myImage[0]="bt1.jpg";       
myImage[1]="bt2.jpg";
myImage[2]="bt3.jpg";
myImage[3]="bt4.jpg"; 
myImage[4]="bt5.jpg";
myImage[5]="bt6.jpg";
myImage[6]="bt7.jpg";
myImage[7]="bt8.jpg"
var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }

  function BHnav()
  {
  document.location.href ='index.html';
  }
  function BMnav()
  {
  document.location.href ='map.html';
  }
  function BMnav()
  {
  document.location.href ='tweets.html';
  }
  function BAnav()
  {
  document.location.href ='about.html';
  }
  function BCnav()
  {
  document.location.href ='contact.html';
  }
  function BPnav()
  {
  document.location.href ='pictures.html';
  }
  
 
*/