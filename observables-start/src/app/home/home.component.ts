import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observer } from 'rxjs';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  myObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map(
        (data: number) => {
          return data * 2;
        }
      ));
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) =>{
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work');
        observer.complete();
      }, 5000);
    });
    this.myObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log('completed');}
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.myObsSubscription.unsubscribe();
  }

}
