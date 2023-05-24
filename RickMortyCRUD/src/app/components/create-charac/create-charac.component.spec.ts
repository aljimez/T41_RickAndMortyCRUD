import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacComponent } from './create-charac.component';

describe('CreateCharacComponent', () => {
  let component: CreateCharacComponent;
  let fixture: ComponentFixture<CreateCharacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCharacComponent]
    });
    fixture = TestBed.createComponent(CreateCharacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
