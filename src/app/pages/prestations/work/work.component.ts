import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {
  @Output() toId = new EventEmitter();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    whoInit();
    formulasSquare();
  }
}

function whoInit() {
  let divs = document.querySelectorAll("#who>div");

  divs.forEach(elem => {
    (elem as HTMLElement).style.height = ((elem as HTMLElement).getBoundingClientRect().width * 0.75) + "px";
  });

  divs.forEach(elem => {
    elem.addEventListener('mouseenter', (ev) => {
      let title = (ev.target as HTMLElement).children[0];
      let text = (ev.target as HTMLElement).children[1];
      text.classList.remove('opacity-0');
      text.classList.replace('-top-32', 'top-0');
      title.children[0].classList.add('opacity-0');
      title.children[0].classList.replace('top-0', 'top-72');
    });

    elem.addEventListener('mouseleave', (ev) => {
      let title = (ev.target as HTMLElement).children[0];
      let text = (ev.target as HTMLElement).children[1];
      text.classList.add('opacity-0');
      text.classList.replace('top-0', '-top-32');
      title.children[0].classList.remove('opacity-0');
      title.children[0].classList.replace('top-72', 'top-0');
    });
  });
}

window.addEventListener("resize", formulasSquare);
function formulasSquare() {
  let divs = document.querySelectorAll("#formulas>div");

  divs.forEach(elem => {
    (elem as HTMLElement).style.height = ((elem as HTMLElement).getBoundingClientRect().width * 1.1) + "px";
  });

  divs.forEach(elem => {
    elem.addEventListener('mouseenter', (ev) => {
      let title = (ev.target as HTMLElement).children[0];
      let text = (ev.target as HTMLElement).children[1];
      console.log(title.children[0]);
      text.classList.remove('opacity-0');
      text.classList.replace('-bottom-32', 'bottom-0');
      title.children[0].classList.add('opacity-0');
      title.children[0].classList.replace('bottom-0', 'bottom-72');
    });

    elem.addEventListener('mouseleave', (ev) => {
      let title = (ev.target as HTMLElement).children[0];
      let text = (ev.target as HTMLElement).children[1];
      text.classList.add('opacity-0');
      text.classList.replace('bottom-0', '-bottom-32');
      title.children[0].classList.remove('opacity-0');
      title.children[0].classList.replace('bottom-72', 'bottom-0');
    });
  });
}