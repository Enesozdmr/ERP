import mongoose from 'mongoose';
import { IDocumentType } from './documentType.interface';

const documentTypeSchema = new mongoose.Schema({
    name: String
});

const DocumentType = mongoose.model<IDocumentType & mongoose.Document>('DocumentType', documentTypeSchema);

module.exports = DocumentType;
