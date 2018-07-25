import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypeOneComponent } from './block-type-one.component';

describe('BlockTypeOneComponent', () => {
  let component: BlockTypeOneComponent;
  let fixture: ComponentFixture<BlockTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
