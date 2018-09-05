
function banner_small(dls,dot,left,right,w,curent,nexted){



let flag=true;
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
        // nexted=dls.length-1;
        return;
    }
    dls[nexted].style.left=`$-{w}px`;
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
        // nexted=0;
        return;
    }
    dls[nexted].style.left=`${w}px`;
    animate(dls[curent],{left:-w});
    animate(dls[nexted],{left:0});
    dot[curent].classList.remove("active");
    dot[nexted].classList.add("active");
    curent=nexted;

    if(flag==false){
        return;
    }
    flag=false;

}
}