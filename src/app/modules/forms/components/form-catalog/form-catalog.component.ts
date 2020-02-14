import { Component, OnInit, ViewChild } from "@angular/core";

import { saveAs } from "file-saver";
import * as moment_ from "moment";

import { PipeLine } from "../../../../shared/models/Pipe";
import { NgForm } from "@angular/forms";

const moment = moment_;

@Component({
  selector: "app-form-catalog",
  templateUrl: "./form-catalog.component.html",
  styleUrls: ["./form-catalog.component.scss"]
})
export class FormCatalogComponent implements OnInit {
  @ViewChild("myForm", { static: false }) public myForm: NgForm;

  public editMode = false;
  public readyToExport = false;
  public pipeLine: PipeLine = new PipeLine();
  public displayForm = true;
  public pipeLineTypes = [
    { id: 1, name: "A", code: "1A" },
    { id: 2, name: "B", code: "2B" },
    { id: 3, name: "C", code: "3C" },
    { id: 4, name: "D", code: "4D" },
    { id: 5, name: "E", code: "5E" }
  ];
  public fuelTypes = [
    { id: 1, name: "A", code: "1A" },
    { id: 2, name: "B", code: "2B" },
    { id: 3, name: "C", code: "3C" },
    { id: 4, name: "D", code: "4D" },
    { id: 5, name: "E", code: "5E" }
  ];
  public selectedPipeLineTypeName = "";

  constructor() {}

  ngOnInit() {
    this.displayForm = true;
  }

  public getDate(date: any): void {
    console.log(date);
  }

  public validateDate(date: any): void {
    console.log(date);
  }

  public onUnitTypeChanged(type: any): void {
    this.pipeLine.pipeLineType = type.id;
    this.selectedPipeLineTypeName = type.name;
  }

  public onMultiTypeChanged(type: any): void {
    this.pipeLine.primaryFuelType = type;
  }

  /**
   * Saves Form data
   * @returns void
   */
  public onSaveFormData(): void {
    this.displayForm = false;
    if (!this.editMode) {
      // this.toastr.success('Data saved', 'Changes have been saved');
      this.readyToExport = true;
    } else {
      // this.toastr.success('Data updated', 'Changes have been saved');
    }
  }

  /**
   * Cancel Create Process
   * @returns void
   */
  public onCancelSave(): void {
    this.displayForm = true;
    this.myForm.reset();
  }

  /**
   * Exports Form Data to a .CSV with fixed name
   */
  public exportFormData(): void {
    // let dataArr= []
    // for (const key in this.myForm.form.value) {
    //   if (this.myForm.form.value.hasOwnProperty(key)) {
    //     const element = this.myForm.form.value[key];
    //     console.log(element)
    //     dataArr.push(element)
    //   }
    // }
    let blob = new Blob([JSON.stringify(this.myForm.form.value)]);

    saveAs(blob, "Form Data-" + moment().format("DD-MM-YYYY") + ".csv");
  }
}
