var index = 0;

function Changecolour(){
  var colors = ["red", "green", "blue", "orange", "yellow", "violet"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if(index >colors.length -1)
    index = 0;
  

}