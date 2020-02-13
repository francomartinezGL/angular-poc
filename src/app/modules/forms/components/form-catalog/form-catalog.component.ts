import { Component, OnInit } from '@angular/core';

import { PipeLine } from '../../../../shared/models/Pipe'

@Component({
  selector: 'app-form-catalog',
  templateUrl: './form-catalog.component.html',
  styleUrls: ['./form-catalog.component.scss']
})
export class FormCatalogComponent implements OnInit {

  public pipeLine: PipeLine = new PipeLine();
  public displayForm: boolean;
  public pipeLineTypes = [
    {id: 1, name: 'A', code: '1A'},
    {id: 2, name: 'B', code: '2B'},
    {id: 3, name: 'C', code: '3C'},
    {id: 4, name: 'D', code: '4D'},
    {id: 5, name: 'E', code: '5E'}
  ]
  public fuelTypes = [
    {id: 1, name: 'A', code: '1A'},
    {id: 2, name: 'B', code: '2B'},
    {id: 3, name: 'C', code: '3C'},
    {id: 4, name: 'D', code: '4D'},
    {id: 5, name: 'E', code: '5E'}
  ]


  ngOnInit() {
    this.displayForm = true;
  }

  public getDate(date:any):void {
    console.log(date);
  }
  public validateDate(date:any):void {
    console.log(date);
  }
  public onUnitTypeChanged(typeId:any):void {
    console.log(typeId);
  }

  constructor() { }

}
