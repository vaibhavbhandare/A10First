import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopComponent } from './develop.component';

describe('DevelopComponent', () => {
  let component: DevelopComponent;
  let fixture: ComponentFixture<DevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'I Love To Develop'`, () => {
    fixture = TestBed.createComponent(DevelopComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I Love To Develop');
  });
});
