import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bandera:boolean=false;
constructor() { }

change(){
  this.bandera = ! this.bandera
}


  ngOnInit(): void {
  }

}
