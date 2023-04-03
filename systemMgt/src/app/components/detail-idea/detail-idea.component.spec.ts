import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIdeaComponent } from './detail-idea.component';

describe('DetailIdeaComponent', () => {
  let component: DetailIdeaComponent;
  let fixture: ComponentFixture<DetailIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
