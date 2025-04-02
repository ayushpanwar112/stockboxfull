import express from "express";
import multer from "multer";

const router = express.Router();

// Multer storage for PDFs (temporary in memory, update for cloud storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

let pdfs = []; // Store uploaded PDFs (use a database in production)

// 📌 **Upload PDF API**
router.post("/upload", upload.single("pdf"), (req, res) => {
  const { title } = req.body;
  if (!req.file || !title) {
    return res.status(400).json({ error: "Title and file are required" });
  }

  const pdfUrl = `https://your-storage-url.com/${req.file.originalname}`; // Modify as needed
  pdfs.push({ title, pdfUrl });

  res.json({ message: "File uploaded successfully", pdfUrl });
});

// 📌 **Get all PDFs API**
router.get("/all", (req, res) => {
  res.json(pdfs);
});

export default router;
