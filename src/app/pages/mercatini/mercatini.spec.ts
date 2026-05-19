import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mercatini } from './mercatini';

describe('Mercatini', () => {
  let component: Mercatini;
  let fixture: ComponentFixture<Mercatini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mercatini],
    }).compileComponents();

    fixture = TestBed.createComponent(Mercatini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
