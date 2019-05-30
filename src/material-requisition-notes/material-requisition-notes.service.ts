import { Injectable } from '@nestjs/common';
import { MaterialRequisitionNote } from './interfaces/material-requisition-notes.interface';

@Injectable()
export class MaterialRequisitionNotesService {
  private readonly materialRequisitionNotes: MaterialRequisitionNote[] = [
    {
      id: '3434343434',
      mrnNo: 'MRN-10',
      siteLocation: 'Kampala',
      requestDate: new Date('22 May 2019'),
      requestedBy: 'Kamal',
      approvedBy: 'Nimal',
      items: [
        {
          itemNo: 'Item-1',
          itemName: 'Item One',
          unit: 'Kg',
          qty: 2,
          remarks: 'None',
        },
      ],
    },
    {
      id: '54545454',
      mrnNo: 'MRN-20',
      siteLocation: 'Colombo',
      requestDate: new Date('29 May 2019'),
      requestedBy: 'Sunil',
      approvedBy: 'Srimal',
      items: [
        {
          itemNo: 'Item-2',
          itemName: 'Item Two',
          unit: 'Kg',
          qty: 10,
          remarks: 'None',
        },
        {
          itemNo: 'Item-2',
          itemName: 'Item Two',
          unit: 'Kg',
          qty: 10,
          remarks: 'None',
        },
      ],
    },
  ];

  findAll(): MaterialRequisitionNote[] {
    return this.materialRequisitionNotes;
  }

  findOne(id: string): MaterialRequisitionNote {
    return this.materialRequisitionNotes.find(mrn => mrn.id === id);
  }
}
