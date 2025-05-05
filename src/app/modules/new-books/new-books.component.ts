
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
  visibleCount: number = 5;  
  cardWidth: number = 180;  
  isAnimating: boolean = false;
  showScrollTop: boolean = false;
  counter: number = 0;

  constructor(private newBookCardService: NewBookCardService) {}

  ngOnInit(): void {
    this.newBookCardService.getBooks().subscribe((data: any) => {
      this.allBooks = data.books;
      localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
      this.carouselBooks = this.allBooks.slice(0,5);
      this.loadMoreBooks(this.allBooks);
    });
  }

  
  scrollToTop(): void {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0 });
    }
  }

  onContainerScroll(event: any): void {
    const scrollContainer = event.target;
    this.showScrollTop = scrollContainer.scrollTop > 300;
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
    if (this.counter + this.visibleCount < this.allBooks.length) {
      this.counter++;
      this.carouselBooks = this.allBooks.slice(this.counter, this.counter + this.visibleCount);
    }
  }
  
  prev(): void {
    if (this.counter > 0) {
      this.counter--;
      this.carouselBooks = this.allBooks.slice(this.counter, this.counter + this.visibleCount);
    }
  }
  
  getCardClass(index: number): string {
    const relativeIndex = index - this.currentIndex;
    switch (relativeIndex) {
      case 0:
      case 4:
        return 'edge-card'; 
      case 1:
      case 3:
        return 'near-middle'; 
      case 2:
        return 'middle-card'; 
      default:
        return '';
    }
  }

  loadMoreBooks(sourceBooks: any[] = this.allBooks): void {
    if (sourceBooks.length === 0) return;
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * sourceBooks.length);
      this.randomBooks.push(sourceBooks[randomIndex]);
    }
  }

  storeBook(book: any) {
    localStorage.setItem('selectedBook', JSON.stringify(book));
  }
  
}
