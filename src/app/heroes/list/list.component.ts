import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Superman' , 'Hulk', 'Hancock'];
  public deletedHeroe?: string = '' ;


  removeLastHeroe(): void {

    this.deletedHeroe = this.heroNames.pop();
  }

}
