import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, Event as RouterEvent } from '@angular/router';
import { ProductsService } from '@features/api/products.service';
import { PrimaryNavComponent } from './layout/primary-nav/primary-nav.component';
import { AuthService } from '@features/api/auth.service';
import { SkeletonModule } from 'primeng/skeleton';
import { NgClass } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PrimaryNavComponent, SkeletonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    routeName: string = '';
    constructor(public authSvc: AuthService, public router: Router) {}
    
    ngOnInit() {
      console.log('AppComponent initialized');
  
      this.router.events.pipe(
        filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.routeName = event.urlAfterRedirects;
        /* console.log('Current route:', event.urlAfterRedirects); */
      });
    }
    private readonly productsSvc = inject(ProductsService);
    products = this.productsSvc.products;
}
