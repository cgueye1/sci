import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialComponent } from './testmonial.component';

describe('TestmonialComponent', () => {
  let component: TestmonialComponent;
  let fixture: ComponentFixture<TestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
