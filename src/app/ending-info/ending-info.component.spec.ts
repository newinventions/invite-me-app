import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingInfoComponent } from './ending-info.component';

describe('EndingInfoComponent', () => {
  let component: EndingInfoComponent;
  let fixture: ComponentFixture<EndingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndingInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
