# AI Chatbot UI

This project was generated using Angular CLI version 21.2.1.

The application is part of a full-stack AI Chatbot project consisting of:

```text
angular-chatbot/
├── ai-chatbot/      # Python FastAPI Backend
└── ai-chatbot-ui/   # Angular Frontend
```

## Prerequisites

Make sure the following are installed:

* Node.js
* Angular CLI
* Python 3
* Ollama

Verify Ollama is running and the model is available:

```bash
ollama run llama3.2
```

In a separate terminal:

```bash
curl http://localhost:11434/api/tags
```

---

## Running the Backend

Navigate to the backend project:

```bash
cd ../ai-chatbot
```

Create a virtual environment (first time only):

```bash
python3 -m venv venv
```

Activate the virtual environment:

```bash
source venv/bin/activate
```

Install dependencies (first time only):

```bash
pip install fastapi uvicorn requests
```

Start the FastAPI server:

```bash
python -m uvicorn main:app --reload
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

Test the API:

```text
http://127.0.0.1:8000/ask?prompt=What%20is%20Angular
```

---

## Running the Frontend

Navigate to the Angular project:

```bash
cd ai-chatbot-ui
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Development Workflow

Start services in the following order:

### Terminal 1 - Ollama

```bash
ollama run llama3.2
```

### Terminal 2 - Backend

```bash
cd ai-chatbot
source venv/bin/activate
python -m uvicorn main:app --reload
```

### Terminal 3 - Frontend

```bash
cd ai-chatbot-ui
ng serve
```

---

## Build

To build the Angular application:

```bash
ng build
```

Build artifacts will be generated in the `dist/` directory.

---

## Unit Tests

Run Angular unit tests:

```bash
ng test
```

---

## Project Architecture

```text
Angular UI
    |
    v
FastAPI Backend
    |
    v
Ollama API (localhost:11434)
    |
    v
Llama 3.2
```

---

## Future Enhancements

* Chat history
* Streaming responses
* Markdown rendering
* PDF upload
* Retrieval-Augmented Generation (RAG)
* Vector database integration (FAISS/ChromaDB)
* User authentication
* Conversation persistence