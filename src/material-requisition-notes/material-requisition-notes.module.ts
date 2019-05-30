import { Module } from '@nestjs/common';
import { MaterialRequisitionNotesController } from './material-requisition-notes.controller';
import { MaterialRequisitionNotesService } from './material-requisition-notes.service';

@Module({
  imports: [],
  controllers: [MaterialRequisitionNotesController],
  providers: [MaterialRequisitionNotesService],
})
export class MaterialRequisitionNotesModule {}
