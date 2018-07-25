import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypeTwoComponent } from './block-type-two.component';

describe('BlockTypeTwoComponent', () => {
  let component: BlockTypeTwoComponent;
  let fixture: ComponentFixture<BlockTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
