import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'khn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle =new EventEmitter<void>();

  constructor(authService: AuthService) { }

  ngOnInit() {
  }

  onToggleSidenav() { 
    this.sidenavToggle.emit();

  }

}
