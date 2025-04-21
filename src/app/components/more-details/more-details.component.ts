import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  isbn13: string = '';
  // book: any;
  @Input() book: any;
  @Output() close = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const isbn13 = this.route.snapshot.paramMap.get('isbn13');
    this.book = JSON.parse(localStorage.getItem('selectedBook') || '{}');
  }

 
  
  closeModal() {
    this.close.emit();
  }
  
}
