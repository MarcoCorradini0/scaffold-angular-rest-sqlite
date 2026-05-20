import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercatinoDetail } from './mercatino-detail';

describe('MercatinoDetail', () => {
  let component: MercatinoDetail;
  let fixture: ComponentFixture<MercatinoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercatinoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MercatinoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
