import { Component, OnInit } from '@angular/core';
import { HOTEL_ROOM, Room } from 'src/app/model/hotel_room.model';
import { PopularPlace, POPULAR_PLACES } from 'src/app/model/popular_places.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  hotel_rooms: Room[] = HOTEL_ROOM;
  popular_places: PopularPlace[] = POPULAR_PLACES;

  constructor() { }

  ngOnInit(): void {
  }
}
