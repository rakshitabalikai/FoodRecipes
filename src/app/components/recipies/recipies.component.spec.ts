import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesComponent } from './recipies.component';

describe('RecipiesComponent', () => {
  let component: RecipiesComponent;
  let fixture: ComponentFixture<RecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
