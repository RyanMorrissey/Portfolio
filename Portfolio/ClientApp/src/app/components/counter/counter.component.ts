import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/test.service'

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.test();
  }

  test() {
    console.log("Test was called");
    this.testService.GetOne().subscribe(result => {
      console.log(result);
    })
  }

  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
