import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguagesComponent } from './programming-languages.component';

describe('ProgrammingLanguagesComponent', () => {
  let component: ProgrammingLanguagesComponent;
  let fixture: ComponentFixture<ProgrammingLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammingLanguagesComponent]
    });
    fixture = TestBed.createComponent(ProgrammingLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
