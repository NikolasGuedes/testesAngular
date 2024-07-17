import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListaAPIComponent } from './info-lista-api.component';

describe('InfoListaAPIComponent', () => {
  let component: InfoListaAPIComponent;
  let fixture: ComponentFixture<InfoListaAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListaAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
