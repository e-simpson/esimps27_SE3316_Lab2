var fruits = ["Pineapple", "Guapple", "Apple", "Starfruit", "Loquat"]

function loadFruit() {
    var fruitList = document.getElementById("fruits")

    for (var fruit in fruits) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(fruits[fruit]))
        fruitList.appendChild(item)
    }
}

function checkFruitEntry() {
    var enterFruit = document.getElementById("enterFruit")
    var listedFruits = document.getElementById("fruits").childNodes
    
    for (var i in listedFruits) {
        if (listedFruits[i].innerText == enterFruit.value){
            document.getElementById("basket").appendChild(listedFruits[i])
            enterFruit.value = ""
        }
    }
}

function addListener(){
    document.getElementById("enterFruit").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) { checkFruitEntry();}
    })
}


function loadJavascript(){
    loadFruit()
    addListener()
}