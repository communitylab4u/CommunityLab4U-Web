import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  category = null;
  constructor(private router : ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }

  ngOnInit(): void {
    this.category = this.router.snapshot.paramMap.get('id');
    if(this.category != null){
      this.scroll(this.category);
    }
  }
  scroll(id){
    let element = document.getElementById(id);
    element.scrollIntoView();
  }
}
