import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCountComponent } from './signals-count.component';

describe('SignalsCountComponent', () => {
  let component: SignalsCountComponent;
  let fixture: ComponentFixture<SignalsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignalsCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
