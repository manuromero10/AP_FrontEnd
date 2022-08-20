import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcercadeComponent } from './edit-acercade.component';

describe('EditAcercadeComponent', () => {
  let component: EditAcercadeComponent;
  let fixture: ComponentFixture<EditAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
