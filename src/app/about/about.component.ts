import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public worksPlaces = {
    eFuneral: false,
    research: false,
    teaching: false,
    undergrad: false,
  }

  constructor() { }

  ngOnInit() {
  }

  public togglePanel(experience: string, displayDetails: boolean) {
    this.worksPlaces[experience] = displayDetails;
  }

  public scroll(el: any) {
    el.scrollIntoView();
    console.log(el)
    console.log(this.worksPlaces[el])
  }

}
