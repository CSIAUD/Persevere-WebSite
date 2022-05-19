function swapClass(elem, class1, class2) {
    if(elem.classList.contains(class1)){
        elem.classList.replace(class1,class2);
    }else if(elem.classList.contains(class2)){
        elem.classList.replace(class2,class1);
    }
}

function toId(fragment){
  setTimeout(() => {
    console.log(fragment);
    fragment = "#"+fragment;
    let scroller = document.querySelector("body>div");
    console.log(fragment);
    let to = document.querySelector(fragment);
    console.log(to);
    if(scroller && to){
      setTimeout(() => {
        if(scroller && to){
          scroller.scroll({
            top: (to.getBoundingClientRect().top),
            left: 0,
            behavior: 'smooth'
          })
        }
      }, 100);
    }
  }, 100);
}