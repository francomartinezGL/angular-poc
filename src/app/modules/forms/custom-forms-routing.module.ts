import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormParentComponent } from './components/form-parent/form-parent.component';
import { FormCatalogComponent } from './components/form-catalog/form-catalog.component';

const routes: Routes = [
  { path: 'forms', component: FormParentComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'catalog' },
      { path: 'catalog', component: FormCatalogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomFormsRoutingModule {}
