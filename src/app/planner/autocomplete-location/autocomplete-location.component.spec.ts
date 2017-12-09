import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteLocationComponent } from './autocomplete-location.component';

describe('AutocompleteLocationComponent', () => {
  let component: AutocompleteLocationComponent;
  let fixture: ComponentFixture<AutocompleteLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
