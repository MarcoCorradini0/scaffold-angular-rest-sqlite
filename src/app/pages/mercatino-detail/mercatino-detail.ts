import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercatinoService } from '../../services/mercatino';
import { single } from 'rxjs';
import { Mercatino } from '../../models/mercatino';

@Component({
  selector: 'app-mercatino-detail',
  imports: [],
  templateUrl: './mercatino-detail.html',
  styleUrl: './mercatino-detail.css',
})
export class MercatinoDetail implements OnInit {
  route=inject(ActivatedRoute);
  service=inject(MercatinoService);
  mercatino=signal<Mercatino|null>(null);

  ngOnInit() {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(data=>{
      this.mercatino.set(data);
    });
  }
}
