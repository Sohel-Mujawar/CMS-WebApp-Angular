import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { HeaderComponent } from "../header/header.component";

interface ContentfulAsset {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
  prices?: number; // Optional price
  rating?: number; // Optional rating
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, SearchComponent, HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  assets: ContentfulAsset[] = [];
  errorMessage: string | null = null;

  private url = `https://cdn.contentful.com/spaces/kt5h6xa0za88/environments/master/assets?access_token=ag92uLdPD8iFJKKihK1dEP1QufNEjwDBfrYC2w9Cijk`;
  darkMode: any;
  router: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAssets();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  addToCart() {
    // Add logic to add the item to cart
  }

  fetchAssets(): void {
    this.http.get<any>(this.url).subscribe(
      (response) => {
        this.assets = response.items.map((item: any) => {
          return {
            ...item.fields,
            price: item.fields.price ?? null, // Default to null if price is not available
            rating: item.fields.rating ?? null // Default to null if rating is not available
          };
        });
      },
      (error) => {
        this.errorMessage = 'Failed to fetch data from Contentful';
        console.error('Error fetching data:', error);
      }
    );
  }
}

