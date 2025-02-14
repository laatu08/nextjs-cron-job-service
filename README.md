# NestJS Cron Job Management Service

This is a NestJS-based service for managing cron jobs using MongoDB. The service allows users to create, update, delete, and retrieve cron jobs. It also supports scheduled execution, webhook integration, execution history tracking, and API rate limiting.

## Features
- ✅ Create, update, delete, and retrieve cron jobs.
- ⏳ Execute jobs at scheduled times (weekly, monthly, etc.).
- 📩 Webhook support for receiving and storing JSON data.
- 📜 Logs execution history of cron jobs with timestamps.
- 🔒 Implements API rate limiting and throttling.
- 🐳 Supports deployment using Docker.

---

## 🚀 **Installation & Setup**

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/your-repo/nestjs-cron-service.git
cd nestjs-cron-service
npm install
npm run start
```


## 📌 API Endpoints

### **Cron Jobs Management**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/cron-jobs` | Create a new cron job |
| **GET** | `/cron-jobs` | Get all cron jobs |
| **GET** | `/cron-jobs/:id` | Get a single cron job by ID |
| **PUT** | `/cron-jobs/:id` | Update an existing cron job |
| **DELETE** | `/cron-jobs/:id` | Delete a cron job |

### **Execution History**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/history` | Get all execution logs |
| **GET** | `/history/:cronJobId` | Get logs for a specific cron job |

### **Webhook Integration**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/webhook/:cronJobId` | Receive and store webhook data |
| **GET** | `/webhook` | Get all webhook data |

---
