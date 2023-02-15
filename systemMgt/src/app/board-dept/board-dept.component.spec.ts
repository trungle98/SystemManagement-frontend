import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDeptComponent } from './board-dept.component';

describe('BoardDeptComponent', () => {
  let component: BoardDeptComponent;
  let fixture: ComponentFixture<BoardDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
