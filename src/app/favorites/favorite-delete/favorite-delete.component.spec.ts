import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDeleteComponent } from './favorite-delete.component';

describe('FavoriteDeleteComponent', () => {
  let component: FavoriteDeleteComponent;
  let fixture: ComponentFixture<FavoriteDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
