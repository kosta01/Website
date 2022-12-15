import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
