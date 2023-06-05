import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRetreiveComponent } from './pop-up-retreive.component';

describe('PopUpRetreiveComponent', () => {
  let component: PopUpRetreiveComponent;
  let fixture: ComponentFixture<PopUpRetreiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRetreiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRetreiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
