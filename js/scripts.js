
// custom js

userInput = () => {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return { a, b };
}

add = () => {
    let { a, b } = userInput();
    document.getElementById("result").textContent = "Result: " + (a + b);
}

sub = () => {
    let { a, b } = userInput();
    document.getElementById("result").textContent = "Result: " + (a - b);
}

mul = () => {
    let { a, b } = userInput();
    document.getElementById("result").textContent = "Result: " + (a * b);
}

div = () => {
    let { a, b } = userInput();
    if (b === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
    } else {
        document.getElementById("result").textContent = "Result: " + (a / b);
    }
}

squareX= () => {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").textContent = "Result: " + (a * a);
}

squareY = () => {
    let a = Number(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (a * a);
}

cubeX = () => {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").textContent = "Result: " + (a * a * a);
}

cubeY = () => {
    let a = Number(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (a * a * a);
}
