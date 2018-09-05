
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
    let left=document.querySelector(".content .con-li1 .left");
    let right=document.querySelector(".content .con-li1 .right");
    let w=parseInt(getComputedStyle(dls[0]).width);
    let curent=0;
    let nexted=0;
    banner_small(dls,dot,left,right,w,curent,nexted);
    let dls1=document.querySelectorAll(".content .con-li2 dl");
    let dot1=document.querySelectorAll(".content .con-li2 .dot .page1");
    let left1=document.querySelector(".content .con-li2 .left");
    let right1=document.querySelector(".content .con-li2 .right");
    let w11=parseInt(getComputedStyle(dls1[0]).width);
    let curent1=0;
    let nexted1=0;
    banner_small(dls1,dot1,left1,right1,w11,curent1,nexted1);
    let dls2=document.querySelectorAll(".content .con-li3 dl");
    let dot2=document.querySelectorAll(".content .con-li3 .dot .page1");
    let left2=document.querySelector(".content .con-li3 .left");
    let right2=document.querySelector(".content .con-li3 .right");
    let w12=parseInt(getComputedStyle(dls2[0]).width);
    let curent2=0;
    let nexted2=0;
    banner_small(dls2,dot2,left2,right2,w12,curent2,nexted2);
    let dls3=document.querySelectorAll(".content .con-li4 dl");
    let dot3=document.querySelectorAll(".content .con-li4 .dot .page1");
    let left3=document.querySelector(".content .con-li4 .left");
    let right3=document.querySelector(".content .con-li4 .right");
    let w13=parseInt(getComputedStyle(dls3[0]).width);
    let curent3=0;
    let nexted3=0;
    banner_small(dls3,dot3,left3,right3,w13,curent3,nexted3);

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
                son[j].style.display="none";
            }
            son[i].style.display="block";
        }
        li[i].onmouseout=function () {
            son[i].style.display="none";
        }
    }


    //家电
    let tabb=document.getElementsByClassName("tab-1")
    let right4=document.querySelectorAll(".project1 .container .pro-1");
    console.log(right4);
    let num=0;
    right4[0].style.display="block";
    for(let i=0;i<tabb.length;i++){
        tabb[i].onmouseover=function () {
            for (let j=0;j<tabb.length;j++){
                tabb[j].classList.remove("active");
                right4[j].style.display="none";
            }
            tabb[i].classList.add("active");
            right4[i].style.display="block";
            num=i;
        }
    }

    //二级导航下拉列表
    let header=document.querySelectorAll(".site-header .header ul li");
    let down=document.querySelectorAll(".site-header .header ul li .down");
    console.log(down);
    for(let i=0;i<header.length;i++){
        header[i].onmouseover=function () {
            header[i].classList.add("active");
            down[i].style.height=200+"px";
        }
        header[i].onmouseleave=function () {
            header[i].classList.add("active");
            down[i].style.height=0;
        }
    }
}
