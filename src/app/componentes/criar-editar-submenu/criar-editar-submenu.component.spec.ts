import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarSubmenuComponent } from './criar-editar-submenu.component';

describe('CriarEditarSubmenuComponent', () => {
  let component: CriarEditarSubmenuComponent;
  let fixture: ComponentFixture<CriarEditarSubmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditarSubmenuComponent]
    });
    fixture = TestBed.createComponent(CriarEditarSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
