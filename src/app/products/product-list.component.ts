import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId" : 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_hyvT9qz6Z_tjAom7fDfJqFeiSQDBSH45pR6cYK34XAz_Xms&s"
    },
    {
      "productId" : 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmxVCilqzM3_Ho4hx_BJ4-wlqKmXSfsIOyL2Qy-iOqNPZX-VN&s"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
