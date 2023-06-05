import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBackComponent } from './borrow-back.component';

describe('BorrowBackComponent', () => {
  let component: BorrowBackComponent;
  let fixture: ComponentFixture<BorrowBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
