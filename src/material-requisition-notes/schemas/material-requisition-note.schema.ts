import * as mongoose from 'mongoose';

export const MaterialRequisitionNoteSchema = new mongoose.Schema({
  mrnNo: String,
  siteLocation: String,
  requestDate: Date,
  requestedBy: String,
  approvedBy: String,
  items: [
    {
      itemNo: String,
      itemName: String,
      unit: String,
      qty: Number,
      remarks: String,
    },
  ],
});
