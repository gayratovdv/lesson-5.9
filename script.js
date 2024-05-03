document.getElementById("myForm").addEventListener("submit", function name(event) {
    event.preventDefault();

    const modemId = document.getElementById("form__input").value;
    const password = document.getElementById("myInput").value;

    if (modemId === "123456" && password === "78900") {
        const newElement = document.createElement("p");
        const newText = document.createTextNode("Spacega xush kelibsiz");
        newElement.appendChild(newText);
        newElement.style.color = "green";
        newElement.style.fontSize = "24px";
        newElement.style.fontWeight = "bold";
        newElement.style.textAlign = "center";
        newElement.style.padding = "5px";
        newElement.style.marginTop = "20px";
        newElement.style.fontFamily = "Roboto" ;
        document.body.appendChild(newElement);
    } else {
        const newElement = document.createElement("p");
        const newText = document.createTextNode("ID yoki Password Noto'g'ri");
        newElement.appendChild(newText);
        newElement.style.color = "red";
        newElement.style.fontSize = "24px";
        newElement.style.fontWeight = "700";
        newElement.style.textAlign = "center";
        newElement.style.padding = "10px";
        newElement.style.marginTop = "15px";
        newElement.style.fontFamily = "Roboto";
        document.body.appendChild(newElement);
    }
});