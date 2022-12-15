import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkincareComponent } from './Skincare/skincare.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Website';

  constructor(
    private router: Router, private activatedRouter: ActivatedRoute,
  ){}
  gotoHomePage(){
    this.router.navigate(['Home'], {relativeTo: this.activatedRouter});
  }
  
  gotoSkinCare(){
    this.router.navigate(['Cleanser'], {relativeTo: this.activatedRouter});
  }

  gotoDelivery(){
    this.router.navigate(['Delivery'], {relativeTo: this.activatedRouter})
  }

}
