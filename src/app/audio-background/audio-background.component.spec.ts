import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBackgroundComponent } from './audio-background.component';

describe('AudioBackgroundComponent', () => {
  let component: AudioBackgroundComponent;
  let fixture: ComponentFixture<AudioBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
