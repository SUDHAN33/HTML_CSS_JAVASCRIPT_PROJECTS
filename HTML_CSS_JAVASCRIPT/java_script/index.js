
let cnt  = 0;
document.getElementById("dbtn").onclick = function(){
    cnt-=1;
    document.getElementById("num").innerHTML = cnt;
}
document.getElementById("rbtn").onclick = function(){
    cnt=0;
    document.getElementById("  num").innerHTML = cnt;
}
document.getElementById("ibtn").onclick = function(){
    cnt+=1;
    document.getElementById("num").innerHTML = cnt;
}