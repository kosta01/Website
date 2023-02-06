import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router, 
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  gotoHomePage(){
    this.router.navigate(['Home'], {relativeTo: this.activatedRouter});
  }
  
  gotoSkinCare(){
    this.router.navigate(['Cleanser'], {relativeTo: this.activatedRouter});
  }

  gotoDelivery(){
    this.router.navigate(['Delivery'], {relativeTo: this.activatedRouter});
  }


}
