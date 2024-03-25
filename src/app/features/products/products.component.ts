import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { PrimaryNavComponent } from 'app/layout/primary-nav/primary-nav.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SkeletonModule, PrimaryNavComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

}
