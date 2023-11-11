import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarMenuComponent } from './criar-editar-menu.component';

describe('CriarEditarMenuComponent', () => {
  let component: CriarEditarMenuComponent;
  let fixture: ComponentFixture<CriarEditarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditarMenuComponent]
    });
    fixture = TestBed.createComponent(CriarEditarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
