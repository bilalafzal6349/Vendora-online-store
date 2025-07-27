import request from "supertest";
import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create test upload directory
const testUploadDir = path.join(__dirname, "../../test-uploads");
if (!fs.existsSync(testUploadDir)) {
  fs.mkdirSync(testUploadDir, { recursive: true });
}

// Configure multer for testing
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, testUploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create test app
const app = express();
app.use("/uploads", express.static(testUploadDir));

// Test route
app.post("/upload", upload.array("images", 5), (req, res) => {
  res.json({
    message: "Files uploaded successfully",
    files: req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
    })),
  });
});

describe("File Upload Tests", () => {
  afterAll(() => {
    // Clean up test uploads directory
    if (fs.existsSync(testUploadDir)) {
      fs.rmSync(testUploadDir, { recursive: true, force: true });
    }
  });

  it("should upload a single file", async () => {
    const response = await request(app)
      .post("/upload")
      .attach("images", path.join(__dirname, "test-images/test-image.jpg"));

    expect(response.status).toBe(200);
    expect(response.body.files).toHaveLength(1);
    expect(response.body.files[0]).toHaveProperty("filename");
    expect(response.body.files[0]).toHaveProperty("path");
  });

  it("should upload multiple files", async () => {
    const response = await request(app)
      .post("/upload")
      .attach("images", path.join(__dirname, "test-images/test-image1.jpg"))
      .attach("images", path.join(__dirname, "test-images/test-image2.jpg"));

    expect(response.status).toBe(200);
    expect(response.body.files).toHaveLength(2);
  });

  it("should handle no file upload", async () => {
    const response = await request(app).post("/upload");

    expect(response.status).toBe(200);
    expect(response.body.files).toHaveLength(0);
  });
});
