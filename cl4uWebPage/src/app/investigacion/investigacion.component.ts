import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.scss']
})
export class InvestigacionComponent implements OnInit {
  category = null;
  constructor(private router : ActivatedRoute) {
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
