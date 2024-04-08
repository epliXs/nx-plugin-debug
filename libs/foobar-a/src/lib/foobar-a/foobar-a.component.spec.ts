import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoobarAComponent } from './foobar-a.component';

describe('FoobarAComponent', () => {
  let component: FoobarAComponent;
  let fixture: ComponentFixture<FoobarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoobarAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoobarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
