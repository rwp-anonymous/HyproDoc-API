import {Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';
import {
  CreateMaterialRequisitionNoteDto
} from './dto/create-material-requisition-note.dto';

@Controller('mrns')
export class MaterialRequisitionNotesController {
  @Get()
  findAll(): string {
    return 'Get All MRNs'
  }

  @Post()
  create(@Body() createMRNDto: CreateMaterialRequisitionNoteDto): string {
    return `MRN No: ${createMRNDto.mrnNo}`
  }
}
