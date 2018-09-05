
Function banner_


let dls=document.querySelectorAll(".content .con-li1 dl");
let dot=document.querySelectorAll(".content .con-li1 .dot .page1");
let left=document.querySelector(".content .con-li1 .left");
let right=document.querySelector(".content .con-li1 .right");
let w=parseInt(getComputedStyle(dls[0]).width);
let curent=0;
let nexted=0;
// let flag=true;
dls[0].style.left=0+"px";
console.log(left);

for(let i=0;i<dls.length;i++){
    dot[i].onclick=function () {
        if (i==curent){
            return curent;
        }
        else if(curent<i){
            dot[curent].classList.remove("active");
            dot[i].classList.add("active");
            dls[i].style.left=`${w}px`;
            animate(dls[curent],{left:-w});
            animate(dls[i],{left:0});
        }
        else if(curent>i){
            dot[curent].classList.remove("active");
            dot[i].classList.add("active");
            dls[i].style.left=`${-w}px`;
            animate(dls[curent],{left:w});
            animate(dls[i],{left:0});
        }
        curent=nexted=i;
    }

}
left.onclick=function () {

    nexted--;
    if(nexted==-1){
        nexted=dls.length-1;
    }
    dls[nexted].style.left=`${-w}px`;
    animate(dls[curent],{left:w});
    animate(dls[nexted],{left:0});
    dot[curent].classList.remove("active");
    dot[nexted].classList.add("active");
    curent=nexted;
    if(flag==false){
        return;
    }
    flag=false;
}
right.onclick=function () {
    nexted++;
    if(nexted==dls.length){
        nexted=0;
    }
    dls[nexted].style.left=`${w}px`;
    animate(dls[curent],{left:-w});
    animate(dls[nexted],{left:0});
    dot[curent].classList.remove("active");
    dot[nexted].classList.add("active");
    curent=nexted;

    // if(flag==false){
    //     return;
    // }
    // flag=false;

}