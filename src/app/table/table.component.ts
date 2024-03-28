import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  alt:string='Destroy Table'

  cval:boolean=false
  value:boolean=false
  generate()
  {
     this.value = !this.value
  }

  

  color()
  {

    this.cval= !this.cval
  }

}


