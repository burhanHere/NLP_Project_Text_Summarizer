import { Routes } from '@angular/router';
import { TextSummarizerComponent } from './text-summarizer/text-summarizer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TextSummarizerComponent, title: 'Home' },
  { path: '**', redirectTo: 'home', title: 'Home' }
];
