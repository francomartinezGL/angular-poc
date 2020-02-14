import { NgModule } from "@angular/core";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgSelectModule } from "@ng-select/ng-select";
import { UiSwitchModule } from "ngx-ui-switch";

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
export class SharedModule {}
