import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateMaterialRequisitionNoteDto } from './dto/create-material-requisition-note.dto';
import { MaterialRequisitionNotesService } from './material-requisition-notes.service';
import { MaterialRequisitionNote } from './interfaces/material-requisition-notes.interface';

@Controller('mrns')
export class MaterialRequisitionNotesController {
  constructor(
    private readonly materialRequisitionNotesService: MaterialRequisitionNotesService,
  ) {}

  @Get()
  findAll(): MaterialRequisitionNote[] {
    return this.materialRequisitionNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): MaterialRequisitionNote {
    return this.materialRequisitionNotesService.findOne(id);
  }

  @Post()
  create(@Body() createMRNDto: CreateMaterialRequisitionNoteDto): string {
    return `MRN No: ${createMRNDto.mrnNo}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateMRNDto: CreateMaterialRequisitionNoteDto,
    @Param('id') id,
  ): string {
    return `Update ${id} MRN No: ${updateMRNDto.mrnNo}`;
  }
}
