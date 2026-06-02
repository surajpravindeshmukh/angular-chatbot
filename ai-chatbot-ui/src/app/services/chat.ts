import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private http = inject(HttpClient);

  ask(prompt: string) {
    return this.http.get<{
      prompt: string;
      response: string;
    }>(
      `http://127.0.0.1:8000/ask?prompt=${encodeURIComponent(prompt)}`
    );
  }
}