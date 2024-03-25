import { Component, OnInit } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { RouterLink, RouterOutlet, Router, RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-primary-nav',
  standalone: true,
  imports: [
    SkeletonModule, 
    RouterOutlet, 
    RouterLink,
    PanelMenuModule,
    NgFor, 
    NgClass,
    RouterModule,
    FormsModule
  ],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.css'
})
export class PrimaryNavComponent implements OnInit{
  constructor(private router: Router) {}
  items: MenuItem[] = [];
  isActive: boolean = false;

  ngOnInit() {
    this.items = [
          {
            label: 'Manage cart',
            icon: 'pi pi-fw pi-shopping-bag',
           /*  command: () => this.onProductClick(), */
           /* command: this.onProductClick.bind(this), */
            items: [
              {
                label: 'Products', 
                icon: 'pi pi-fw pi-box', 
                command: (event) => this.onProductClick(event)
              },
              {
                label: 'Cart', 
                icon: 'pi pi-fw pi-shopping-cart', 
                command: (event) => this.onProductClick(event)
              },
            ],
          }
    ]
  }


  onProductClick(e: any) {
    console.log('Products clicked', e);
    this.isActive = true;
  }

}
