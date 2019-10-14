import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBoxComponentService } from '@spartacus/storefront';
@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss'],
  providers: [SearchBoxComponentService]
})
export class CustomSearchComponent {
  query;

  constructor(private route: Router) {}

  search(query) {
    this.route.navigate(['/search', query]);
  }
}
