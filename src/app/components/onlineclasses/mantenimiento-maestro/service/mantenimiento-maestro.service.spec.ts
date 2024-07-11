import { TestBed } from '@angular/core/testing';

import { MantenimientoMaestroService } from './mantenimiento-maestro.service';

describe('MantenimientoMaestroService', () => {
  let service: MantenimientoMaestroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoMaestroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
