import { Test, TestingModule } from '@nestjs/testing';
import { MaterialRequisitionNotesController } from './material-requisition-notes.controller';

describe('MaterialRequisitionNotes Controller', () => {
  let controller: MaterialRequisitionNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialRequisitionNotesController],
    }).compile();

    controller = module.get<MaterialRequisitionNotesController>(MaterialRequisitionNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
