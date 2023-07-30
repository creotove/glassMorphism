let idk = "#"
let bruhh
function colorgenerate() {
    let myColorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let redArr = [];
    let greenArr = [];
    let blueArr = [];
    function redColor() {
        for (i = 0; i < 2; i++) {
            let red = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            redArr.push(red)
        }
        red = redArr.join('');
        redArr = []
    }
    redColor()
    function greenColor() {
        for (i = 0; i < 2; i++) {
            green = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            greenArr.push(green)
        }
        green = greenArr.join('');
        greenArr = []
    }
    greenColor()
    function blueColor() {
        for (i = 0; i < 2; i++) {
            blue = myColorArr[Math.floor(Math.random(myColorArr) * myColorArr.length)]
            blueArr.push(blue)
        }
        blue = blueArr.join('');
        blueArr = []
    }
    blueColor()


    return bruhh = ` ${idk}${red}${green}${blue}`



}





let main = document.querySelector('.main')

let generateCircle = () => {
    let newCircle = document.createElement("div")
    newCircle.setAttribute("class", "circle1");
    newCircle.style.left = Math.floor(Math.random() * window.screen.width) + "px";
    let randomNumber = Math.floor(Math.random() * 100)
    newCircle.style.height = randomNumber + "px"
    newCircle.style.width = randomNumber + "px"
    newCircle.style.backgroundColor = colorgenerate()

        main.append(newCircle)
        setTimeout(() => {
            main.removeChild(newCircle)

        }, 4500)

}
let glass = document.getElementById("glass");

setInterval(()=>{

    generateCircle()
},40)

// glass.addEventListener("mousemove", () => {

//     generateCircle()
// })

