import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsSearchComponent } from './signals-search.component';

describe('SignalsSearchComponent', () => {
  let component: SignalsSearchComponent;
  let fixture: ComponentFixture<SignalsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
