import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogerrorComponent } from './dialogerror.component';

describe('DialogerrorComponent', () => {
  let component: DialogerrorComponent;
  let fixture: ComponentFixture<DialogerrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogerrorComponent]
    });
    fixture = TestBed.createComponent(DialogerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
