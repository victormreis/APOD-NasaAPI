import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPictureComponent } from './card-picture.component';

describe('CardPictureComponent', () => {
  let component: CardPictureComponent;
  let fixture: ComponentFixture<CardPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
