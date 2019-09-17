import {Component, OnInit} from '@angular/core';

import {Image} from 'ngx-photoswipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-photoswipe-app';

  images: Image[];
  ngOnInit(): void {
    this.images = [
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg',
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg',
        description: 'Image 2'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg',
        description: 'Image 3'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg',
        description: 'Image 4'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg',
        description: 'Image 5'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg',
        description: 'Image 6'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg',
        description: 'Image 7'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        description: 'Image 8'
      },
      {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
        thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
        description: 'Image 9'
      }
    ];
  }
}
