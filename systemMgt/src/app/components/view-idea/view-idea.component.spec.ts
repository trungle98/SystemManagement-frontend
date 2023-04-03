import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdeaComponent } from './view-idea.component';

describe('ViewIdeaComponent', () => {
  let component: ViewIdeaComponent;
  let fixture: ComponentFixture<ViewIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
