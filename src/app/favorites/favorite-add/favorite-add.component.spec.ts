import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAddComponent } from './favorite-add.component';

describe('FavoriteAddComponent', () => {
  let component: FavoriteAddComponent;
  let fixture: ComponentFixture<FavoriteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
