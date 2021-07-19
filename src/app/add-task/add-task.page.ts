import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  categories = ['work','Personal','home'];
  taskName: any;
  taskDate: any;
  taskPriority: any;
  taskCategory: any;
  categorySelectedCategory: string;

  taskObject: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    this.modalCtrl.dismiss();
  }

  selectCategory(index: string | number){
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  addTask(){
    this.taskObject = (
      {
        itemName: this.taskName,
        itemDueDate: this.taskDate,
        itemPriority: this.taskPriority,
        itemCategory: this.taskCategory
      }
    );

    this.dismiss();
  }
}
