

```md
# 📁 File Upload API (Node.js + Express + TypeScript)

A production-ready backend API for uploading files to an **S3-compatible** cloud storage (such as [Storj](https://www.storj.io/)), built using **TypeScript**, **Express**, and the **AWS SDK v3**.

---

## 📦 Features

- Upload files via REST API (`/upload`)
- Stores files in any **S3-compatible storage**
- Built with **Express + TypeScript**
- Uses `multer` for file parsing
- Supports `.env` config and best practices

---

## 🧑‍💻 Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **AWS SDK v3** (`@aws-sdk/client-s3`)
- **Multer**
- **dotenv**

---

## 📂 Project Structure

```

src/
│
├── controllers/
│   └── uploadController.ts     # Handles upload logic
│
├── routes/
│   └── upload.ts               # Upload route
│
├── services/
│   └── s3Service.ts            # S3 client and upload logic
│
├── lib/
│   └── s3.ts                   # S3 client configuration
│
├── server.ts                   # Entry point
└── .env                        # Environment variables

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/dev-kweku/file-upload-api.git
cd file-upload-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
S3_ACCESS_KEY=your-access-key
S3_SECRET_KEY=your-secret-key
S3_BUCKET_NAME=your-bucket-name
S3_ENDPOINT=https://gateway.storjshare.io
```

> You can use any compatible S3 service: **Storj**, **Wasabi**, **Backblaze B2**, etc.

---

## 🚀 Run the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## 🧪 API Usage

### Endpoint: `POST /upload`

**Form-Data Body**:

| Key    | Value               |
| ------ | ------------------- |
| `file` | *\[your file here]* |

**Example (cURL):**

```bash
curl -X POST http://localhost:3000/upload \
  -F "file=@./example.png"
```

**Success Response:**

```json
{
  "url": "https://gateway.storjshare.io/bucket-name/example.png"
}
```

---

## 🧼 .gitignore

```gitignore
node_modules/
dist/
.env
```



> Ensure your `.env` values are set correctly in production.

---

## ✅ Future Improvements

* File validation (MIME types, max size)
* JWT Auth middleware
* Presigned URLs for client-side upload
* Multi-file support
* Image resizing (Sharp)

---

## 📄 License

MIT

---

## 👨‍💻 Author

**Degraft Frimpong([@dev-kweku](https://github.com/dev-kweku))**


