import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWhenInfoComponent } from './where-when-info.component';

describe('WhereWhenInfoComponent', () => {
  let component: WhereWhenInfoComponent;
  let fixture: ComponentFixture<WhereWhenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWhenInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereWhenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
