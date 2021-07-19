import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '19-07-2021',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Designing',
      itemDueDate: '19-07-2021',
      itemPriority: 'low',
      itemCategory: 'work'
    },
    {
      itemName: 'shopping',
      itemDueDate: '19-07-2021',
      itemPriority: 'middle',
      itemCategory: 'personal'
    },
    {
      itemName: 'Dinner',
      itemDueDate: '19-07-2021',
      itemPriority: 'high',
      itemCategory: 'personal'
    }
  ];

  today: number = Date.now();

  constructor() {}

}
