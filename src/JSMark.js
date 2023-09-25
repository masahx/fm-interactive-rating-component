const class1 = "mark";
const class2 = "circle";

let oLista = document.getElementsByTagName("ol")[0];
  
const ALL_OFF = -1;  

class Marks {
    
  currentOn = ALL_OFF;
  #marksNumber;
    
  constructor() {
      
    this.#marksNumber = 5;   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields 

  }

  toggleMarkColor(ii) {

    var listt = oLista.querySelectorAll("li");
    if (this.currentOn >= 0) {

      listt[this.currentOn].classList.remove("chosen-mark");

    }

    if (this.currentOn != ii) {

      listt[ii].classList.add("chosen-mark");
      this.currentOn = ii;

    } else {

      this.currentOn = ALL_OFF;

    }

  }

  makeButtons() {
  
    let myLi;
    for (let i = 0; i < this.#marksNumber; i++) {
        
      myLi = document.createElement("li");
      myLi.classList.add(class1, class2);
      myLi.innerHTML = i + 1;     
      myLi.setAttribute("onclick", "m.toggleMarkColor(" + i + ");");
      oLista.appendChild(myLi);

    }

  }

  getMarksNumber() {

    return this.#marksNumber;

  }

}
   
var m = new Marks();
m.makeButtons();  

testMode(false);

function testMode(ttest) {

  const turnOffClass = "off";
  var classes = document.querySelector(".back").classList;
    
  if (ttest) {

    classes.remove(turnOffClass);
  
  } else if (!classes.contains("off")) {

    classes.add(turnOffClass);
        
  }

}

function submit() {
    
  if (m.currentOn != -1) {
  
    document.querySelector(".resolved-mark").innerHTML = m.currentOn + 1;
    document.querySelector("#thanks").classList.remove("off");  
    document.querySelector(".rating").classList.add("off");
         
  }

}


function goBack() {

  var firstCardList = document.querySelector(".rating").classList;
  document.querySelector("#thanks").classList.add("off");

  if (firstCardList.contains("off")) {

    m.toggleMarkColor(m.currentOn);
    firstCardList.remove("off");

  }        

}