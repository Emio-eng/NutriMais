import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { Nutri } from 'src/app/resourcers/models/nutri';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nutri: Nutri[];

  constructor(public nutriService:FeedService) { }

  ngOnInit(): void {
    this.getNutris()

   }

  getNutris(){

    this.nutriService.getNutricionista().subscribe(data => {
      this.nutri = data})
  }

}
