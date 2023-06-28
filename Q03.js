function gameindex(){
    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"]
    document.write("Index of God of War : " + games.indexOf("God of War"))
}

const val = [
    ["Name", "John"],
    ["Age", 30],
    ["City", "Colombo"]
]

function createMap(values){
    return new Map(values)
}

const valueMap = createMap(val)

function arraymap(){
    valueMap.forEach((value, key) => {
        document.write(`Key : ${key} | Value : ${value}` + "<br>")
    })
}

function removeValue(map, key){                               
    return map.delete(key)
} 

function remage(){
    removeValue(valueMap, "Age")
    valueMap.forEach((value, key) => {
        document.write(`Key : ${key} | Value : ${value}` + "<br>")
    })
}

function setget(){
    const fruits = new Map()

    fruits.set("apple", 5)
    fruits.set("banana", 3)
    fruits.set("orange", 2)

    document.write("Value of banana : " + fruits.get("banana") + "<br>")
    document.write("No of elements in the map : " + fruits.size + "<br>")
}

