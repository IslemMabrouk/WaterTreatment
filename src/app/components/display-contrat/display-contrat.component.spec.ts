import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayContratComponent } from './display-contrat.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('DisplayContratComponent', () => {
  let component: DisplayContratComponent;
  let spectator: Spectator<DisplayContratComponent>;

  const createComponent = createComponentFactory({
    component: DisplayContratComponent,
    imports: [HttpClientTestingModule],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          /* Create a mock of ActivatedRoute if needed */
        },
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
