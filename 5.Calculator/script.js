let display = document.getElementById("display");

function press(value){
  display.value+=value
}

function calculate(){
  try {
    display.value = eval(display.value);    
  } catch (error) {
    console.log(error.message)    
  }  
}

function clearDisplay(){
  display.value=""
}

