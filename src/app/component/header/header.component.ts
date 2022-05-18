import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}
  ngOnInit(): void {
    initBurger();
    // initScroll();
    initDropdown();
  }
  
  scrollToAnchor(location: string) { 
    console.log(location);
    this.viewportScroller.scrollToAnchor(location)
  }
}

function initDropdown() {
  let drops = document.querySelectorAll(".dropDown");

  drops.forEach(
    drop => {
      drop.addEventListener('click', (ev) => {
        let ul = (ev.target as HTMLElement).parentElement?.querySelector('ul');
        if(ul){
          let lis = (ul as HTMLElement).querySelectorAll('li');
          if(ul != null){
            swapClass(ul, "hidden", "flex");
            swapClass(ul, "opacity-0", "opacity-100");
          }
          lis?.forEach(li => {
            li.addEventListener('click', () => {
              if(li.parentElement?.classList.contains("opacity-100")){
                swapClass((li.parentElement as HTMLElement), "hidden", "flex");
                swapClass((li.parentElement as HTMLElement), "opacity-0", "opacity-100");
              }
            })
          });
        }
      });
    }
  );
}

function initScroll() {
  let scrollDiv = document.getElementsByClassName("snap-mandatory")[0];
  scrollDiv.addEventListener('scroll', (ev) => {
    console.log(ev);
  });
}

function initBurger(){
  let burgerBase = document.getElementById("burger");
  let menuLinks = document.querySelectorAll("#menu a");
  let burger;

  burgerBase?.addEventListener('click', function (e) {
    if((e.target as SVGElement).ownerSVGElement){
      burger = ((e.target as SVGElement).ownerSVGElement as SVGElement);
    }else{
      burger = (e.target as SVGElement);
    }
    toggleMenu(burger)
  }, false);

  menuLinks.forEach(link => {
      link.addEventListener('click', ev=>{
          let burger = ((document.getElementById("burger") as unknown) as SVGElement)
          toggleMenu(burger)
      })
  });
};

function toggleMenu(burger: SVGElement) {
  let status = burger.dataset['status']
  let header = document.querySelector("#header");
  const nav = document.querySelector("#header > div:first-child")?.getBoundingClientRect();
  if(status == "close"){
      burger.dataset['status'] = "open";
      
      ((document.getElementById("stage1") as unknown) as SVGAnimateTransformElement).beginElement();
      // document.getElementById("menu")?.classList.replace("hidden",'flex');
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      (header as HTMLElement).style.height = "100vh";
  }else{
      burger.dataset['status'] = "close";
      ((document.getElementById("stage2") as unknown) as SVGAnimateTransformElement).beginElement();
      // document.getElementById("menu")?.classList.replace('flex',"hidden");
      document.getElementsByTagName("html")[0].style.overflow = "unset";
      (header as HTMLElement).style.height = nav?.bottom + "px";
  }
};

function swapClass(elem: HTMLElement, class1: string, class2: string) {
  if(elem.classList.contains(class1)){
      elem.classList.replace(class1,class2);
  }else if(elem.classList.contains(class2)){
      elem.classList.replace(class2,class1);
  }
}