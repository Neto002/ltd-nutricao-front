import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasSaudaveisComponent } from './receitas-saudaveis.component';

describe('ReceitasSaudaveisComponent', () => {
  let component: ReceitasSaudaveisComponent;
  let fixture: ComponentFixture<ReceitasSaudaveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasSaudaveisComponent]
    });
    fixture = TestBed.createComponent(ReceitasSaudaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
