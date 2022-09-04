import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date()
  customYearValues = [2024,2020,2016,2012,2008];
  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: (event) => {
          console.log(event)
        }
      },
      {
        text: 'mundo',
        handler: (event) => {
          console.log(event)
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event)
    console.log(new Date(event.detail.value))
  }
}
