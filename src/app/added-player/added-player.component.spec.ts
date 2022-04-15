import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedPlayerComponent } from './added-player.component';

describe('AddedPlayerComponent', () => {
  let component: AddedPlayerComponent;
  let fixture: ComponentFixture<AddedPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
