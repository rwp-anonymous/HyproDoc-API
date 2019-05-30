import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { MaterialRequisitionNotesController } from './material-requisition-notes/material-requisition-notes.controller';
import { MaterialRequisitionNotesService } from './material-requisition-notes/material-requisition-notes.service';

@Module({
  imports: [],
  controllers: [AppController, MaterialRequisitionNotesController],
  providers: [AppService, MaterialRequisitionNotesService],
})
export class AppModule {
}
