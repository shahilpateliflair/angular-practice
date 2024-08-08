import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayToObjectComponent } from './array-to-object.component';

describe('ArrayToObjectComponent', () => {
  let component: ArrayToObjectComponent;
  let fixture: ComponentFixture<ArrayToObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayToObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayToObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
