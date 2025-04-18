import { Component, OnInit, HostListener } from '@angular/core';
import { NewBookCardService } from './services/new-book-card.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss'],
})
export class NewBooksComponent implements OnInit {
  allBooks: any[] = [];
  carouselBooks: any[] = [];
  randomBooks: any[] = [];
  isLoading: boolean = false;
  currentIndex: number = 0;
  visibleCount: number = 5;  // Set visible count to 5
  cardWidth: number = 180;  // Adjust card width as needed
  isAnimating: boolean = false;

  constructor(private newBookCardService: NewBookCardService) {}

  ngOnInit(): void {
    this.newBookCardService.getBooks().subscribe((data: any) => {
      this.allBooks = data.books;
      this.carouselBooks = this.allBooks;
      const remainingBooks = this.allBooks;
      if (remainingBooks.length) {
        this.loadMoreBooks(remainingBooks);
      }
    });
  }

  @HostListener('scroll', ['$event'])
  onContainerScroll(event: any): void {
    const scrollContainer = event.target;
    if (scrollContainer.scrollTop + scrollContainer.offsetHeight >= scrollContainer.scrollHeight - 50 && !this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        const remainingBooks = this.allBooks;
        this.loadMoreBooks(remainingBooks);
        this.isLoading = false;
      }, 500);
    }
  }

  next(): void {
    if (this.currentIndex + this.visibleCount < this.carouselBooks.length) {
      this.currentIndex++;
      this.triggerAnimation();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.triggerAnimation();
    }
  }

  getCardClass(index: number): string {
    const relativeIndex = index - this.currentIndex;
  
    switch (relativeIndex) {
      case 0:
      case 4:
        return 'edge-card'; // Scale 0.8
      case 1:
      case 3:
        return 'near-middle'; // Scale 0.9
      case 2:
        return 'middle-card'; // Scale 1.2
      default:
        return '';
    }
  }
  

  getTransform(): string {
    return `translateX(-${this.currentIndex * this.cardWidth}px)`;
  }
  

  triggerAnimation(): void {
    this.isAnimating = true;
    setTimeout(() => this.isAnimating = false, 500);
  }

  loadMoreBooks(sourceBooks: any[] = this.allBooks): void {
    if (sourceBooks.length === 0) return;

    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * sourceBooks.length);
      this.randomBooks.push(sourceBooks[randomIndex]);
    }
  }
}
