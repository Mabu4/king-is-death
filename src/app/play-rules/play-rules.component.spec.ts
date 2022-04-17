import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayRulesComponent } from './play-rules.component';

describe('PlayRulesComponent', () => {
  let component: PlayRulesComponent;
  let fixture: ComponentFixture<PlayRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
