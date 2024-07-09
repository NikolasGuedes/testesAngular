import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaNumeroComponent } from './troca-numero.component';

describe('TrocaNumeroComponent', () => {
  let component: TrocaNumeroComponent;
  let fixture: ComponentFixture<TrocaNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaNumeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrocaNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
