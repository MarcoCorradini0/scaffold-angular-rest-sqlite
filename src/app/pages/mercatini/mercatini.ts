import { Component, inject, OnInit, signal } from '@angular/core';
import { MercatinoService } from '../../services/mercatino';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercatini',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mercatini.html',
  styleUrl: './mercatini.css',
})
export class Mercatini implements OnInit {
  service = inject(MercatinoService);
  router=inject(Router);
  search = signal('');
  tema = signal('');
  temi = [
    '',
    'LIBRI',
    'ABBIGLIAMENTO',
    'VINTAGE',
    'SVUOTACANTINE'
  ];

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.loadAll(
      this.tema(),
      this.search()
    );
  }

  goDetail(id: number){
    this.router.navigate(['/mercatini', id]);
  }
}
