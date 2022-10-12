import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassMapComponent } from './mass-map.component';

describe('MassMapComponent', () => {
  let component: MassMapComponent;
  let fixture: ComponentFixture<MassMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
