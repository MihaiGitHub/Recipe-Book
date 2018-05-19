import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // With AuthService injected we can access it in the HTML code
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  // Access data storage service
  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }
}
