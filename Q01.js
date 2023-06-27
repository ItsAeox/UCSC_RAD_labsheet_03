function conc(){
    var s1 = "Programmo";
    var s2 = "Phobia";
    document.write("Concatenated string : ", s1.concat(s2))
}

function lower(){
    var s1 = "ProgrammoPhobia"
    document.write("Lower case : ", s1.toLowerCase())
}

function upper(){
    var s1 = "ProgrammoPhobia"
    document.write("Upper case : ", s1.toUpperCase())
}

function split(){
    var s1 = "Programmo,Phobia"
    const arr = s1.split(',')
    document.write("Split by ' , ' : " + arr)
}

function index(){
    var s1 = "Programmo,Phobia"
    document.write("Index : " + s1.indexOf("Phobia"))
    
}