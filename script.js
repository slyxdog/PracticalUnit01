var wrapperEle = document.body;
var numbers = [-30, 14, 66, 21, 72, -4];


function numTEST(a){
var that = this;
this.number = a;
this.numDIV0 = document.createElement("div");
this.numCONTENT0 = document.createElement("h3");
this.numDIV0.addEventListener("click", function(){
    that.numTEST2(a);
  });
this.numCONTENT0.innerHTML= "The number is "+ a;
if (a < 0){
 this.numCONTENT0.innerHTML = "The number is "+ a + " and it's less than 0." ;
} else if(a > 50){
this.numCONTENT0.innerHTML = "The number is "+ a + " is greater than 50.";
} else if(a == 14){
this.numCONTENT0.innerHTML = "The number is "+ a + " equals 14.";
} 
this.numDIV0.appendChild(numCONTENT0); 
wrapperEle.appendChild(this.numDIV0);
};


// numTEST.prototype.numTEST2 = function(a){
// this.number = a;
  // this.number = this.number+1;
 //this.numCONTENT0.innerHTML = this.number;
//}

function numTEST2(a){
 var that = this;
 var num = a;
num++
numTEST(num)
};



for(var i=0;i<numbers.length;i++){
 numTEST(numbers[i]); 
};