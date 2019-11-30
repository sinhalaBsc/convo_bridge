

function Convo(){
  this.number=[];
  this.text=[];
  this.inputBridgeObj = function(data){
    Object.keys(data).forEach((item,index)=>{
       if(Number.isInteger(item)){
         this.text.push(data[item]);
         this.number.push(item);
       }else{
         this.text.push(item);
         this.number.push(data[item]);
       }
    });

  };
  this.NumberToText = function(number){
      var index = this.number.indexOf(number);
      if(index!=-1){
        return this.text[index];
      }else{
        console.log("no matching bridge number found");
        return 0;
      }
  };
  this.TextToNumber = function(text){
      var index = this.text.indexOf(text);
      if(index!=-1){
        return this.number[index];
      }else{
        console.log("no matching bridge text found");
        return "0";
      }
  };
  this.getInvertBridge = function(param){
       if(Number.isInteger(param)){
          return this.NumberToText(param);
       }else{
          return this.TextToNumber(param);
       }
    };
}



var itemsBridge ={
  post: 1,
  album:2,
  comment:3,
  image:4,
  video:5,
  audio:6
};



var itemConvo = new Convo();
itemConvo.inputBridgeObj(itemsBridge);
console.log(itemConvo.text);

//  converting data have to input as objects to constructor function

console.log(itemConvo.getInvertBridge(3));
