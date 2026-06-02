import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  private chatService = inject(ChatService);

  prompt = '';
  messages = signal<any[]>([]);
  loading = signal(false);

  send() {
    if (!this.prompt.trim()) {
      return;
    }

    // Add user message
    this.messages.update(prev => [...prev, {
      sender: 'user',
      text: this.prompt,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    const userPrompt = this.prompt;
    this.prompt = '';
    this.loading.set(true);

    this.chatService.ask(userPrompt).subscribe({
      next: (result: any) => {
        this.messages.update(prev => [...prev, {
          sender: 'ai',
          text: result.response,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        this.loading.set(false);
      },
      error: () => {
        this.messages.update(prev => [...prev, {
          sender: 'ai',
          text: 'Error calling AI service',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        this.loading.set(false);
      }
    });
  }

  formatMessage(text: string): string {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }
}