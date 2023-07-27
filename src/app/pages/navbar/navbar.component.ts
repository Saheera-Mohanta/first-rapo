import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    productForm = new FormGroup({
    productPage: new FormControl(''),
    productPrice: new FormControl(''),
    productDescription: new FormControl(''),
    productImage: new FormControl(''),


  });

  loginUser()
  {
    console.warn(this.productForm.value)
  }
 
  }


