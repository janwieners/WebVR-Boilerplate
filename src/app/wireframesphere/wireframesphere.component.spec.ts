import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframesphereComponent } from './wireframesphere.component';

describe('WireframesphereComponent', () => {
  let component: WireframesphereComponent;
  let fixture: ComponentFixture<WireframesphereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireframesphereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireframesphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
