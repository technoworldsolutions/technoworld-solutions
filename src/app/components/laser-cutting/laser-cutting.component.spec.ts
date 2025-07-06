import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserCuttingComponent } from './laser-cutting.component';

describe('LaserCutting', () => {
  let component: LaserCuttingComponent;
  let fixture: ComponentFixture<LaserCuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaserCuttingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaserCuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
