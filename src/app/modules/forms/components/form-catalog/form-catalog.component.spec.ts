import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatalogComponent } from './form-catalog.component';

describe('FormCatalogComponent', () => {
  let component: FormCatalogComponent;
  let fixture: ComponentFixture<FormCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
