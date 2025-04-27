function start(){
    let redlight = document.querySelector(".red")
    console.log(redlight);
    
    let yellowlight = document.querySelector(".yellow")
    let greenlight = document.querySelector(".green")
    
    // setInterval(() => redlight.style.background = "red",3000)
    // setInterval(() => {
    //     redlight.style.background = ""
    //     yellowlight.style.background = "yellow"
    // },5000)
    // setInterval(() => {
    //     redlight.style.background = ""
    //     yellowlight.style.background = ""
    //     greenlight.style.background = "green"
    // },7000)

    red()

    function red(){
        redlight.style.background = "red"
        yellowlight.style.background = ""
        greenlight.style.background = ""
        function yellow(){
            redlight.style.background = ""
            yellowlight.style.background = "yellow"
            greenlight.style.background = ""
            function green(){
                redlight.style.background = ""
                yellowlight.style.background = ""
                greenlight.style.background = "green"
                setTimeout(red,4000)
            }
           setTimeout(green,2000)
        }
        setTimeout(yellow,4000)
    }

}
function stop(){
    location.reload()
}