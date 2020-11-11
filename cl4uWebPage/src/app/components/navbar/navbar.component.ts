import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.visibility = "visible";
      } else {
        document.getElementById("navbar").style.top = "-20vh";
        document.getElementById("navbar").style.visibility = "hidden";
      }
      prevScrollpos = currentScrollPos;
    }
  }


  ngOnInit(): void {
  }

  /* Global */
  toTop(){
    window.scrollTo(0,0);
  }

  /* Inicio */
  toPurpose(){
    document.getElementById("proposito").scrollIntoView();
  }
  toContact(){
    document.getElementById("contacto").scrollIntoView();
  }

  /* Investigacion */
  toInvApl(){
    document.getElementById("investigacion-aplicada").scrollIntoView();
  }
  toVinMed(){
    document.getElementById("vinculacion-con-el-medio").scrollIntoView();
  }
  toAcaIE(){
    document.getElementById("academia-innovacion-emprendimiento").scrollIntoView();
  }
  toAcaDe(){
    document.getElementById("academia-desarrolladores").scrollIntoView();
  }
  toAcaPro(){
    document.getElementById("academia-programadores").scrollIntoView();
  }
  toEmp(){
    document.getElementById("emprendimientos").scrollIntoView();
  }
}
