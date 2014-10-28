 var COLORS = new Array(
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "pink",
  "brown",
  "orange",
  "purple",
  "gray"
);
// Text can be anything.
var TEXT = new Array(
  "RED",
  "BLUE",
  "GREEN",
  "YELLOW",
  "WHITE",
  "PINK",
  "BROWN",
  "ORANGE",
  "PURPLE",
  "GRAY"
);

var info = new Array(["Name",""],["DOB",""],["Date",""],["Sex",""],["Education",""],
                      ["Mother Tougue",""],["Place",""]);
var formObj=document.getElementById('han-form');
var IntroObj=document.getElementById('han-Intro');
var InstructionsObj=document.getElementById('instructions');
var Start=document.getElementById('startstop');
var hanTitle=document.getElementById('han-title');
var hanIntro=document.getElementById('han-Intro');
var Content=document.getElementById('content');
var name=document.getElementById('names');
var opt=document.getElementById('options');
var maxCount;

function form1 () {
  formObj.style.display='block';
  IntroObj.style.display='None';
  hanIntro.style.display='None';
  document.getElementById('names').value=info[0][1];
  document.getElementById('datepicker').value=info[1][1];
  document.getElementById('edu').value=info[4][1];
  document.getElementById('MT').value=info[5][1];
  document.getElementById('place').value=info[6][1];
}

function trim(stringToTrim) {
  return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function validate () {
  var name=document.getElementById('names');
  if(trim(name.value)=="")
  {
  alert("Name must be filled out!");
  name.focus();
  return false;
  }
  if(trim(document.getElementById('datepicker').value)=="")
  { 
  alert("DOB must be filled out!");
  document.getElementById('DOB').focus();
  return false;
  }
  if(trim(document.getElementById('sex').value)=="")
  { 
  alert("Sex must be filled out!");
  document.getElementById('sex').focus();
  return false;
  }
  if(trim(document.getElementById('edu').value)=="")
  { 
  alert("Education must be filled out!");
  document.getElementById('edu').focus();
  return false;
  }
  if(trim(document.getElementById('MT').value)=="")
  { 
  alert("Mother Tougue must be filled out!");
  document.getElementById('MT').focus();
  return false;
  }
  if(trim(document.getElementById('place').value)=="")
  { 
  alert("Place must be filled out!");
  document.getElementById('place').focus();
  return false;
  }
  var d=new Date();
  info[0][1]=document.getElementById('names').value;
  info[1][1]=document.getElementById('datepicker').value;
  info[2][1]=d.toDateString();
  info[3][1]=document.getElementById('sex').value;
  info[4][1]=document.getElementById('edu').value;
  info[5][1]=document.getElementById('MT').value;
  info[6][1]=document.getElementById('place').value;
Instructions();
}

function Instructions () {
  IntroObj.style.display='None';
  hanIntro.style.display='None';
  formObj.style.display='None';
  InstructionsObj.style.display='block';
}

function Demo()
{
  maxCount=5;
  hanTitle.style.display='None';
  InstructionsObj.style.display='None';
  Start.style.display='block';
  document.getElementById('timetext').innerHTML="Demo<br>contains 5 practice Questions";

  var initial=document.getElementById('time').innerHTML;
    var timeElement=document.getElementById('time');
    var myVar=setInterval(function () {myTimer()}, 1000);
    function myTimer () {
      initial=initial-1;
      //alert(typeof 'timeElement');
      if(timeElement.innerHTML!='0')
      {
          timeElement.innerHTML=initial;
      }
      else
      {
        clearInterval(myVar);
        Questions ();
      }
    }

}

function StartTest () {
  hanTitle.style.display='None';
  InstructionsObj.style.display='None';
  Start.style.display='block';
  Content.style.display='None';
  opt.style.display='None';
  initial=5;
  document.getElementById('time').innerHTML="5";
  document.getElementById('timetext').innerHTML="Test will start in";
    var timeElement=document.getElementById('time');
    var myVar=setInterval(function () {myTimer()}, 1000);
    function myTimer () {
      initial=initial-1;
      //alert(typeof 'timeElement');
      if(timeElement.innerHTML!='0')
      {
          timeElement.innerHTML=initial;
      }
      else
      {
        clearInterval(myVar);
        Questions ();
      }
    }
}

function reload () {
  location.reload();
}

var Result=new Array([1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0],[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],
                     [11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0],[20,0,0],
                     [21,0,0],[22,0,0],[23,0,0],[24,0,0],[25,0,0],[26,0,0],[27,0,0],[28,0,0],[29,0,0],[30,0,0]);

var lastColorIndex="red";
  var  lastTextIndex="RED";
  var a;
  var Count=0;
  var Score=0;
  var TotalTime=0;

function Questions (){
  document.getElementById('startstop').style.display='None';
  Content.style.display='block';
  opt.style.display='block';
  var options=new Array(4);
  var hash = [0,0,0,0,0,0,0,0,0,0];
  var i=0;
  var colorIndex = Math.floor(COLORS.length * Math.random());
  while (colorIndex == lastColorIndex) 
  {
    colorIndex = Math.floor(COLORS.length * Math.random());
  }
 
  // Do not repeat last text.
  var textIndex = Math.floor(TEXT.length * Math.random());
  while (textIndex == lastTextIndex) {
    textIndex = Math.floor(TEXT.length * Math.random());
  }

  document.getElementById('content').innerHTML=TEXT[textIndex];
  document.getElementById('content').style.color=COLORS[colorIndex];
  AnswerIndex=Math.floor(options.length*Math.random());
  options[AnswerIndex]=COLORS[colorIndex];
  hash[colorIndex]=1;
  for (i =0 ; i < 4; i++) {
    if(i!=AnswerIndex)
      {
        while (true) 
        {
          Index = Math.floor(COLORS.length * Math.random());
          if (hash[Index]!=1) {
            options[i]=COLORS[Index];
            hash[Index]=1;
            break;
          }
        }
      }
  }
  document.getElementById('A').style.backgroundColor=options[0];
  document.getElementById('B').style.backgroundColor=options[1];
  document.getElementById('C').style.backgroundColor=options[2];
  document.getElementById('D').style.backgroundColor=options[3];

  lastColorIndex = colorIndex;
  lastTextIndex = textIndex;
  a = performance.now();
}

function Record (Answer) {
  var b = performance.now();
  if (maxCount==35)
  {
    Result[Count-5][1]=Math.round(((b-a)/1000)*100)/100;
    TotalTime=TotalTime+(b-a)/1000;
    if (document.getElementById(Answer).style.backgroundColor==COLORS[lastColorIndex]) {
        Score+=1;
        Result[Count-5][2]=1;
    }
  }
  Count+=1;
  if (Count<maxCount)
  {
    Questions();
  }
  else if(Count==5 && maxCount==5)
  {
    maxCount=35;
    StartTest();
  }
  else
  {
    document.getElementById('content').style.display='None';
    document.getElementById('options').style.display='None';
    var myChart = new JSChart('chartcontainer', 'line');
    myChart.setDataArray(Result);
    myChart.setSize(1300,500);
    myChart.setTitle('A customized chart');
    myChart.setAxisNameX('Questions');
    myChart.setAxisNameY('Time');
    myChart.setAxisPaddingBottom(40);
    myChart.setAxisPaddingLeft(50);
    myChart.setAxisPaddingRight(30);
    myChart.setAxisPaddingTop(50);
    myChart.draw();
    document.getElementById('score').innerHTML=Score;
    document.getElementById('totaltime').innerHTML=Math.round(TotalTime*100)/100;
    document.getElementById('chartcontainer').style.display='block';
    document.getElementById('endButton').style.display='block';
    var csvContent = "data:text/csv;charset=utf-8,";
    info.forEach(function(infoArray,index){dataString=infoArray.join(",");csvContent+=dataString+"\n";});
    csvContent+="Score"+","+Score+"\n";
    csvContent+="TotalTime"+","+Math.round(TotalTime*100)/100+"\n";
    csvContent+="s.no,time,score\n";
    Result.forEach(function(infoArray, index)
    {
    dataString = infoArray.join(",");
    csvContent += dataString + "\n";
    }); 

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    //for chrome onlysupport feature
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    link.click();
    window.open(encodedUri);
  } 
}