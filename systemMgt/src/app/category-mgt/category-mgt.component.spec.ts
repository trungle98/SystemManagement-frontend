import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMgtComponent } from './category-mgt.component';

describe('CategoryMgtComponent', () => {
  let component: CategoryMgtComponent;
  let fixture: ComponentFixture<CategoryMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
