import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild, DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input("server") element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef<HTMLDivElement>;
  @ContentChild('contentParagraph') paragraph: ElementRef<HTMLParagraphElement>;

  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("OnInit called");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck() {
    console.log("DoCheck called!");
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("AfterViewCheked called");
  }

  ngOnDestroy() {
    console.log("OnDestroy called");
  }

}
