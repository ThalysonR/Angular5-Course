import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-basic-highlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
   this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
