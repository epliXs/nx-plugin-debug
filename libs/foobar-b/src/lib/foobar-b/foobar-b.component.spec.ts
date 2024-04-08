import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoobarBComponent } from './foobar-b.component';

describe('FoobarBComponent', () => {
  let component: FoobarBComponent;
  let fixture: ComponentFixture<FoobarBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoobarBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoobarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
