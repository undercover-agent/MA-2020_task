const inputData = document.querySelector(".input-field");
const btn = document.querySelector(".submit-btn");
const list = document.querySelector(".output-list");

btn.addEventListener("click", () => {
    let validate = /[!@#$%&*]/.test(inputData.value);
    let li = document.createElement('li');
    li.innerHTML =  inputData.value;
    list.appendChild(li);
      
    if (inputData.value.length >= 3) {
      li.style.color = "green"
    }
    else {
      li.style.color = "black"
    }
    
    if (validate) {
      li.style.color = "red"
    }

	inputData.value = "";
});