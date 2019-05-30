import { ApiModelProperty } from '@nestjs/swagger';

export class Item {
  @ApiModelProperty() readonly itemNo: string;
  @ApiModelProperty() readonly itemName: string;
  @ApiModelProperty() readonly unit: string;
  @ApiModelProperty() readonly qty: number;
  @ApiModelProperty() readonly remarks: string;
}
export class CreateMaterialRequisitionNoteDto {
  @ApiModelProperty() readonly mrnNo: string;

  @ApiModelProperty() readonly siteLocation: string;

  @ApiModelProperty() readonly requestDate: Date;

  @ApiModelProperty() readonly requestedBy: string;

  @ApiModelProperty() readonly approvedBy: string;

  @ApiModelProperty({ type: [Item] })
  readonly items: Item[];
}
