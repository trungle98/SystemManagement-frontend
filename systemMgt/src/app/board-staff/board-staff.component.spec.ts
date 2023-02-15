import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardStaffComponent } from './board-staff.component';

describe('BoardStaffComponent', () => {
  let component: BoardStaffComponent;
  let fixture: ComponentFixture<BoardStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
