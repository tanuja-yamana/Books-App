import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || 'light';
    this.setTheme(theme);
    this.isDarkMode = theme === 'dark';
  }

  // switching between light and dark mode
  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const theme = checked ? 'dark' : 'light';
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }
}
