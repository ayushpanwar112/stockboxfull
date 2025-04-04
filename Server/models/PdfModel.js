import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
  pdfUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Pdf", PdfSchema);
