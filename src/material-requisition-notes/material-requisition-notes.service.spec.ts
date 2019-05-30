import { Test, TestingModule } from '@nestjs/testing';
import { MaterialRequisitionNotesService } from './material-requisition-notes.service';

describe('MaterialRequisitionNotesService', () => {
  let service: MaterialRequisitionNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialRequisitionNotesService],
    }).compile();

    service = module.get<MaterialRequisitionNotesService>(MaterialRequisitionNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
