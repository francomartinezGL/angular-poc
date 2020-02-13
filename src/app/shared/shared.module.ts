import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgSelectModule } from "@ng-select/ng-select";
import { UiSwitchModule } from "ngx-ui-switch";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgSelectModule,
    UiSwitchModule.forRoot({
      size: "small",
      color: "#1665d8",
      defaultBgColor: "#ced4da",
      defaultBoColor: "#b0b0b1"
    })
  ],
  exports: [
    NgSelectModule,
    UiSwitchModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class SharedModule { }
