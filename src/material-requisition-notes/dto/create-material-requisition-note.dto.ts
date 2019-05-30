import {ApiModelProperty} from '@nestjs/swagger';
export class CreateMaterialRequisitionNoteDto {
  @ApiModelProperty() readonly mrnNo: string;

  @ApiModelProperty() readonly siteLocation: string;

  @ApiModelProperty() readonly requestDate: Date;

  @ApiModelProperty() readonly requestedBy: string;

  @ApiModelProperty() readonly approvedBy: string;

  @ApiModelProperty({type: [Object]})
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