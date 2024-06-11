import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  imports: [CommonModule, NzIconModule, NzLayoutModule, NzMenuModule],
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;
  constructor(private router: Router) {}

  ngOnInit() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }
}
