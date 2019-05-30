import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialRequisitionNotesController } from './material-requisition-notes.controller';
import { MaterialRequisitionNotesService } from './material-requisition-notes.service';
import { MaterialRequisitionNoteSchema } from './schemas/material-requisition-note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'MaterialRequisitionNote',
        schema: MaterialRequisitionNoteSchema,
      },
    ]),
  ],
  controllers: [MaterialRequisitionNotesController],
  providers: [MaterialRequisitionNotesService],
})
export class MaterialRequisitionNotesModule {}
