import { Component } from '@angular/core';
import { Inventor } from './common/Inventor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inventors: Inventor[] = [
    {id:1, first: 'Arbert', last: 'Einstein', year: 1879, passed: 1955},
    {id:2, first: 'Arbert', last: 'Einstein', year: 1879, passed: 1955},
    {id:3, first: 'Arbert', last: 'Einstein', year: 1879, passed: 1955},
  ]

  show(innerHTML: string) {
    let item = document.querySelector('#list');
    if(item) {
      item.innerHTML = innerHTML;
    }
  }
  render(callback: (data: string) => any){
    let innerHTML = this.inventors.map(item =>{
      return `
        <tr>
          <td>${item.id}</td>
          <td>${item.first}</td>
          <td>${item.last}</td>
          <td>${item.year}</td>
          <td>${item.passed}</td>
        </tr>
      `
    }).join()
  }
}
