import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListaComponent } from './info-lista.component';

describe('InfoListaComponent', () => {
  let component: InfoListaComponent;
  let fixture: ComponentFixture<InfoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
