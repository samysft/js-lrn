const input = document.getElementById("input")


function reverseStr(str){
    let a;
    a = str.split("").reverse().join("")
    alert(a)
}
function check(){
    const value = input.value
    let palindrom = true;

    for(let i=0 ; i< Math.round(value.length/2) ; i++){
        if(value[i]!=value[value.length -1 -i]){
            palindrom = false;
            break
        }
    }
    alert(palindrom)
}
