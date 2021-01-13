import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDestaqueComponent } from './editar-destaque.component';

describe('EditarDestaqueComponent', () => {
  let component: EditarDestaqueComponent;
  let fixture: ComponentFixture<EditarDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
