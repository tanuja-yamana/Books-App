
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPageFiltersComponent } from './book-page-filters.component';

describe('BookPageFiltersComponent', () => {
  let component: BookPageFiltersComponent;
  let fixture: ComponentFixture<BookPageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPageFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
