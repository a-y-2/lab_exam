import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsToolComponent } from './records-tool.component';

describe('RecordsToolComponent', () => {
  let component: RecordsToolComponent;
  let fixture: ComponentFixture<RecordsToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
