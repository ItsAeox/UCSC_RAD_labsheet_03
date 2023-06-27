function trueval(v1, v2){
    return v1 && v2
}

function checktrue(){
    document.write("True && True : " + trueval(true, true) + "<br>")
    document.write("True && False : " + trueval(true, false) + "<br>")
    document.write("False && True : " + trueval(false, true) + "<br>")
    document.write("False && False : " + trueval(false, false))
}

function type(number){
    return typeof number
}

function checktype(){
    document.write("Type of 97 : " + type(97) + "<br>")
    document.write("Type of 11.6 : " + type(11.6))
}

function getdate(date){
    return typeof date
}  

function checkdate(){
    var d = new Date()
    document.write("Type of Date : " + getdate(d))
}

function checklen(){
    let str = "OceanGate"
    if(str.length > 10){
        document.write("String length is greater than 10") 
    }
    else {
        document.write("String length is smaller or equal to 10") 
    }
}