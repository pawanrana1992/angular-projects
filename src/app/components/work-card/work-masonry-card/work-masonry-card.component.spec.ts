import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMasonryCardComponent } from './work-masonry-card.component';

describe('WorkMasonryCardComponent', () => {
  let component: WorkMasonryCardComponent;
  let fixture: ComponentFixture<WorkMasonryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMasonryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMasonryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
