export class CreateMaterialRequisitionNoteDto {
  readonly mrnNo: string;
  readonly siteLocation: string;
  readonly requestDate: Date;
  readonly requestedBy: string;
  readonly approvedBy: string;
  readonly items:[
    {
      readonly itemNo: string;
      readonly itemName: string;
      readonly unit: string;
      readonly qty: number;
      readonly remarks: string;
    }
  ]
}