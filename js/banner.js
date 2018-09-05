
window.onload=function () {
    let imgs=document.querySelectorAll(".site-banner .banner .imgs img");
    let dots=document.querySelectorAll(".site-banner .banner .page li");
    let banner=document.querySelector(".site-banner .banner");
    let leftbtn=document.querySelector(".site-banner .banner .pushl");
    let rightbtn=document.querySelector(".site-banner .banner .pushr");
    // let oimg=parseInt(getComputedStyle(imgs[0],null).opacity);
    imgs[0].style.opacity=1;
    let now=0,next=0;
    let t=setInterval(move,3000);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }

        // imgs[next].style.opacity=1;
        animate(imgs[now],{opacity:0});
        animate(imgs[next],{opacity:1});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    function movel() {
        next--;
        if(next==-1){
            next=imgs.length-1;
        }
        // imgs[next].style.opacity=0;
        animate(imgs[now],{opacity:1});
        animate(imgs[next],{opacity:0});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;

    }
    for (let i=0;i<imgs.length;i++){
        dots[i].onclick=function () {
            for (let j=0;j<imgs.length;j++){
                dots[j].classList.remove("active");
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add("active");
            imgs[i].style.opacity=1;
            now=next=i;
        }
    }
    leftbtn.onclick=function () {
        movel();
    }
    rightbtn.onclick=function () {
        move();
    }
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,3000);
    }

//内容
    let dls=document.querySelectorAll(".content .con-li1 dl");
    let dot=document.querySelectorAll(".content .con-li1 .dot .page1");
    let left=document.querySelectorAll(".content .con-li1 .left")[0];
    let right=document.querySelectorAll(".content .con-li1 .right")[0];
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
    //为你推荐
    let button=document.querySelectorAll(".stat");
    let milist=document.querySelector(".recomment .container");
    let ul=document.querySelector(".recomment ul");
    let widths=parseInt(getComputedStyle(milist,null).width);
    //闪购
    let milist1=document.querySelector(".box .san-box");
    let w1=parseInt(getComputedStyle(milist1,null).width);
    let box1=document.querySelector(".box .san-box-fi");
    let times=0;
    console.log(milist);
    button[2].onclick=function(){
        times++;
        if(times==3){
            times=2;
        }
        ul.style.transform=`translate(${(-widths*times)}px)`;

    }
    button[3].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        ul.style.transform=`translate(${(-widths*times)}px)`;
    }

    button[0].onclick=function(){
        times++;
        if(times==3){
            times=2;
        }
        box1.style.transform=`translate(${(-w1*times)}px)`;

    }
    button[1].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        box1.style.transform=`translate(${(-w1*times)}px)`;
    }

    //选项卡
    let li=document.querySelectorAll(".site-banner aside li");
    let son=document.querySelectorAll(".site-banner aside li .son");
    console.log(son);
    for(let i=0;i<li.length;i++){
        li[i].onmouseover=function () {
            //让剩余子元素消失
            for(let j=0;j<li.length;j++){
                son[j].style.width=0;
            }
            son[i].style.width=400+"px";
        }
        li[i].onmouseout=function () {
            son[i].style.width=0;
        }
    }

}
