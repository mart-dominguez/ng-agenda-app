import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEditableComponent } from './tarea-editable.component';

describe('TareaEditableComponent', () => {
  let component: TareaEditableComponent;
  let fixture: ComponentFixture<TareaEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
