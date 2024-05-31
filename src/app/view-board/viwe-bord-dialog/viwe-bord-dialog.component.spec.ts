import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweBordDialogComponent } from './viwe-bord-dialog.component';

describe('ViweBordDialogComponent', () => {
  let component: ViweBordDialogComponent;
  let fixture: ComponentFixture<ViweBordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViweBordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViweBordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
