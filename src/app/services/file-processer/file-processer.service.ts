import { Injectable } from '@angular/core';
import * as mammoth from 'mammoth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileProcesserService {
  constructor() { }
  public extractTextFromDocx(file: File): Observable<string> {
    const reader = new FileReader();

    return new Observable<string>(observer => {
      reader.onload = () => {
        mammoth
          .extractRawText({ arrayBuffer: reader.result as ArrayBuffer })
          .then(result => {
            observer.next(result.value);
            observer.complete();
          })
          .catch(() => observer.error('Failed to extract text from DOCX'));
      };
      reader.onerror = () => observer.error('Error reading DOCX file');
      reader.readAsArrayBuffer(file);
    });

    // return new Promise((resolve, reject) => {
    //   reader.onload = () => {
    //     mammoth
    //       .extractRawText({ arrayBuffer: reader.result as ArrayBuffer })
    //       .then(result => resolve(result.value))
    //       .catch(() => reject('Failed to extract text from DOCX'));
    //   };
    //   reader.onerror = () => reject('Error reading DOCX file');
    //   reader.readAsArrayBuffer(file);
    // });
  }
}
