import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MaterialRequisitionNote } from './interfaces/material-requisition-notes.interface';

@Injectable()
export class MaterialRequisitionNotesService {
  constructor(
    @InjectModel('MaterialRequisitionNote')
    private readonly materialRequisitionNoteModel: Model<
      MaterialRequisitionNote
    >,
  ) {}

  async findAll(): Promise<MaterialRequisitionNote[]> {
    return await this.materialRequisitionNoteModel.find();
  }

  async findOne(id: string): Promise<MaterialRequisitionNote> {
    return await this.materialRequisitionNoteModel.findOne({ _id: id });
  }

  async create(
    materialRequisitionNote: MaterialRequisitionNote,
  ): Promise<MaterialRequisitionNote> {
    const newMRN = new this.materialRequisitionNoteModel(
      materialRequisitionNote,
    );
    return await newMRN.save();
  }

  /**
   * To Do:
   * For Auditing Purposes
   * We cannot deleted docs.
   * Add a visibilty field and decide the
   * response depending on it.
   */
  async delete(id: string): Promise<MaterialRequisitionNote> {
    return await this.materialRequisitionNoteModel.findByIdAndRemove(id);
  }

  async update(
    id: string,
    materialRequisitionNote: MaterialRequisitionNote,
  ): Promise<MaterialRequisitionNote> {
    return await this.materialRequisitionNoteModel.findByIdAndUpdate(
      id,
      materialRequisitionNote,
      { new: true },
    );
  }
}
