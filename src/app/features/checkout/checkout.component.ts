import { Component } from '@angular/core';
import { PrimaryNavComponent } from 'app/layout/primary-nav/primary-nav.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PrimaryNavComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export default class CheckoutComponent {

}
