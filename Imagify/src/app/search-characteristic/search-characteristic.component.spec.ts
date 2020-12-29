import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCharacteristicComponent } from './search-characteristic.component';

describe('SearchCharacteristicComponent', () => {
  let component: SearchCharacteristicComponent;
  let fixture: ComponentFixture<SearchCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
