function greet(name,welcome){
    console.log(name);
    callback();

}
function welcome(){
    console.log("this is a call back function");
}
welcome("sampath",welcome);