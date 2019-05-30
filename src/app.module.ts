import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialRequisitionNotesController } from './material-requisition-notes/material-requisition-notes.controller';
import { MaterialRequisitionNotesService } from './material-requisition-notes/material-requisition-notes.service';
import { MaterialRequisitionNotesModule } from './material-requisition-notes/material-requisition-notes.module';

const config = require('./config/keys');

@Module({
  imports: [
    MaterialRequisitionNotesModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController, MaterialRequisitionNotesController],
  providers: [AppService, MaterialRequisitionNotesService],
})
export class AppModule {}
