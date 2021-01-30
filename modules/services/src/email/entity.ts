import { Schema, Document, model } from 'mongoose';

import { EmailDTO } from './dto';

const emailSchema = new Schema(
  {
    from: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    to: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Email = model<EmailDTO & Document>('Email', emailSchema);
