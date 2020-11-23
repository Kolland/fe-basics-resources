import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
  @Input() text: string;

  inputText: string = 'Hello';
  products: any[] = [];
  users: object[] = [
    {
      name: 'Andrew'
    },
    {
      name: 'Nick'
    },
    {
      name: 'Troy'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Hello from my button');

    fetch('https://my-json-server.typicode.com/Kolland/fe-basics-resources/products')
      .then((response) => response.json()).then(products => {
        this.products = products
      });
  }

  getAllValues() {
    console.log({
      inputText: this.inputText,
    })
  }

}
