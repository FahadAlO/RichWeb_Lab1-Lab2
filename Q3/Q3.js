let cells = 101 ;
let loops = 50 ;
let black = "black";
let random = (Math.random() * 2 ) + 1 ;
let firstRow = [];
let secondRow = [] ;
let temp = [] ;

for(let i = 0 ; i < cells ; i ++){
  
  let random = (Math.random() * 2 ) + 1 ;
  let div = document.createElement("div");
  
  if(random < 2){
    
    black = "";
    firstRow[i] = "active" ;
    
  }else{
    black = "#118002";
    firstRow[i] = "inactive" ;
  }

    div.style.width = "8px";
    div.style.height = "8px";
    div.style.backgroundColor = black ;
    div.style.border = "1px solid black";
    div.style.float = "left"; 
    document.body.appendChild(div);
}

for(let x = 0 ; x < loops ; x++){
  
   let outerdiv = document.createElement("div");
  
  outerdiv.style.clear = "left";
  
  document.body.appendChild(outerdiv);
  
  for(let j = 0 ; j < cells ; j ++){
    
    let left ;
    let right ;
    let above ;
  
    let innerdiv = document.createElement("div");
    
    if(j == 0 ){
      
      left = firstRow[firstRow.length - 1];
      above  = firstRow[0]
      right = firstRow[1];
      
      
    }else if(j == (firstRow.length - 1)){
      
      left = firstRow[firstRow.length - 2] ;
      above = firstRow[firstRow.length - 1];
      right = firstRow[0];
    }else{
      
      left = firstRow[j-1];
      above = firstRow[j];
      right = firstRow[j+1]
    }
  
    if((left == "active" && above == "active" && right == "active") || (left == "inactive" && above == "inactive" && right == "inactive")){
    
      black = "";
      secondRow[j] = "active" ;
    
    }else{
      black = "#118002";
      secondRow[j] = "inactive" ;
    }

      innerdiv.style.width = "8px";
      innerdiv.style.height = "8px";
      innerdiv.style.backgroundColor = black ;
      innerdiv.style.border = "1px solid black";
      innerdiv.style.float = "left";
      outerdiv.appendChild(innerdiv);
 
  }
  
  firstRow = secondRow.slice(0);
  
}