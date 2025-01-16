import { Component, inject } from '@angular/core';
import { SummarizerService } from '../services/summarizer/summarizer.service';
import { FormsModule } from '@angular/forms';
import { FileProcesserService } from '../services/file-processer/file-processer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-summarizer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-summarizer.component.html',
  styleUrl: './text-summarizer.component.css'
})
export class TextSummarizerComponent {
  private summarizerService: SummarizerService = inject(SummarizerService)
  private fileProcessorService: FileProcesserService = inject(FileProcesserService);

  public inputText: string;
  public summary: string | null;
  public loading: boolean;

  constructor() {
    this.inputText = '';
    this.summary = null;
    this.loading = false;
  }

  summarize(): void {
    this.summary = null;
    if (this.inputText.trim()) {
      this.loading = true;
      this.summarizerService.summarizeText(this.inputText).subscribe(
        (response) => {
          this.summary = response[0]?.summary_text || 'No summary available.';
          this.loading = false;
        },
        (error) => {
          this.summary = 'An error occurred while summarizing the text.';
          this.loading = false;
        }
      );
    }
  }

  handleFileUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      try {
        this.loading = true;
        const fileType = file.name.split('.').pop()?.toLowerCase();
        if (fileType === 'docx') {
          this.fileProcessorService.extractTextFromDocx(file).subscribe(
            (text) => {
              this.inputText = text;
              this.loading = false;
            },
            (error) => {
              this.summary = 'An error occurred while extracting text from the file.';
              this.loading = false;
            }
          );
        } else {
          this.summary = 'Unsupported file type. Please upload a PDF or DOCX file.';
        }
        this.loading = false;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    }
  }
}
