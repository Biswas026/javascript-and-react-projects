let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
let numbers = document.querySelectorAll(".number")
let functionals = document.querySelectorAll(".functional")
let count = 0
let history = document.querySelector(".history")
let container =  document.querySelector(".container")
localStorage.clear()
// console.log(numbers);

// console.log(buttons);


numbers.forEach(number => {
    number.addEventListener('click', () => {
        console.log(number.innerHTML);
        console.log(typeof number.innerHTML);
        
        
        input.value += number.innerHTML;
    } )
} )

console.log(functionals);

functionals.forEach(func => {
    func.addEventListener('click',() => {
        console.log(func.innerHTML);
        switch (func.innerHTML) {
            case "AC":
            input.value = ""
                break;
            case "&lt;-":
                input.value = input.value.slice(0,input.value.length - 1)
                console.log(input.value);
                break;
            case "+/-":
                input.value = "-"+ input.value
                break;
            case "÷":
                input.value += "/"
                break;
            case "X":
                input.value += "*"
                break;
            case "-":
                input.value += "-"
                break;
            
            case "+":
                input.value += "+"
                break;
            case ".":
                input.value += "."
                break;
            case "%":
                input.value += "%"
                break;
            case "=":
                let u_input = input.value
                input.value =""
                if (!u_input.endsWith("%") && !u_input.endsWith("+/-"))
                {
                    let answer = result(u_input)
                    count = count + 1
                    console.log(answer);
                    localStorage.setItem(count,u_input + "=" + answer)
                    input.value = answer
                }
                else{
                    if(u_input[u_input.length - 1] == "%")
                    {
                        u_input = u_input.slice(0,u_input.length - 1)
                        let percentvalue = Number(u_input) / 100;
                        input.value = percentvalue
                    }
                    // if(u_input[u_input.length - 1] == "+/-"){
                    
                    // }

                }
                
               
                break;
            default:
                break;
        }

    })
    
})


function result(input){
    
    return eval(input)


}

history.addEventListener('click', () => {
    let ul = document.createElement("ul");

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let li = document.createElement("li");
        let textnode = document.createTextNode(`${value}`);
        li.appendChild(textnode);
        ul.appendChild(li);
    }

    console.log(ul);
    let div = document.createElement("div")
    div.className = "prev-history"
    div.appendChild(ul)
    let b_button = document.createElement("button")
    b_button.className = "back-button"
    b_button.appendChild(document.createTextNode("back"))
    div.appendChild(b_button)
    container.replaceWith(div)

    b_button.addEventListener('click', () => {
        div.replaceWith(container)
    })
    
});

