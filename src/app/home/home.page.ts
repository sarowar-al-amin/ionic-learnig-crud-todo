import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '18-07-2021',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Designing',
      itemDueDate: '18-07-2021',
      itemPriority: 'low',
      itemCategory: 'work'
    },
    {
      itemName: 'shopping',
      itemDueDate: '18-07-2021',
      itemPriority: 'middle',
      itemCategory: 'personal'
    },
    {
      itemName: 'Dinner',
      itemDueDate: '18-07-2021',
      itemPriority: 'high',
      itemCategory: 'personal'
    }
  ];

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    });

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
    });

    return await modal.present();
  }

  delete(index: number){
    this.todoList.splice(index, 1);
  }
}
