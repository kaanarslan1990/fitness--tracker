import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'khn-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
@Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(){
  }

  onClose(){ 
    this.closeSidenav.emit();

  }

}