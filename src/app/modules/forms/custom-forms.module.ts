import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { CustomFormsRoutingModule } from "./custom-forms-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

import { FormParentComponent } from "./components/form-parent/form-parent.component";
import { FormCatalogComponent } from "./components/form-catalog/form-catalog.component";

@NgModule({
  declarations: [
    FormParentComponent,
    FormCatalogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CustomFormsRoutingModule
  ]
})
export class CustomFormsModule {}
