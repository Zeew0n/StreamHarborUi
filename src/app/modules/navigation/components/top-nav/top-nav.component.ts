import { Component } from '@angular/core';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.scss']
})

export class TopNavComponent {
    constructor() {
    }

    onLogOut() {
      this.clearLocalStorage();
    }

    private  clearLocalStorage() {
        localStorage.clear();
        location.reload();
      }
}
