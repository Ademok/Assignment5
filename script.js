const button = document.getElementById("submit");
const name = document.getElementById("personname");
const inputIn  = document.querySelector('#input-in');
var l = document.getElementsByClassName('skills'); // HTMLCollection

const calculate = () => {
  let fullname = name.value;
  let result = Number(inputIn.value)
  if (fullname.length > 0 && result > 0) {
    var EducationDegreeValue = Number(document.getElementById("education").value);
    console.log(result)
    result*=EducationDegreeValue;
    console.log(result)
    var FamilyNetworthValue = Number(document.getElementById("networth").value);
    result*=FamilyNetworthValue;
    console.log(result)
    result = getCheckboxValuesFilterReduce(l, result);
    console.log(result)
    var age = document.getElementsByName("radioage")
    result = getRadioValue(age, result)
    console.log(result)
  
     var r = document.getElementsByClassName('reputation');
     console.log(r);
     for (var i = 0; i < r.length; i++) {
       if (r[i].checked === true && i != 2) {
         result *= Number(r[i].value);
       }
       else if (r[i].checked === true && i == 2) {
        result -= Number(r[i].value);
       }
     }
    
     console.log(result)
     var x = document.getElementById("myTextarea").value;
     let person = {
       groom_name: fullname,
       final_price: result,
       letter: x
     }
  
     document.getElementById("adema").innerHTML = `Qalyn mal price for ${person.groom_name} is ${person.final_price}. Love letter for your soulmate: ${x}`;
  }
  else {
    alert("You must enter the name and the price")
  };
}

const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
  let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
  let result = list.reduce(reducer, price)
  return result;
}


const reducer = (accumulator, item) => {
  return accumulator + Number(item.value);
}
const filteration = (item) => {
  return item.checked;
}


const getRadioValue = (node_list, price) => {  
  node_list.forEach(item => {
      if (item.checked) {
          price = price * Number(item.value)
      }
  })
  return price;
}

button.addEventListener("click", calculate);