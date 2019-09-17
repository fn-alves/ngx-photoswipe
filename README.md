# Photo Swipe for angular 2+

## Installation
##### Install NPM packages
```bash
npm install --save bootstrap
npm install --save photoswipe
npm install --save @fnxone/ngx-photoswipe
```

##### Add assets in your angular.json
```json
"projects": {
  "your-app-name": {
    "architect": {
      "build": {
        "assets": [
          // add this from here
          { 
            "glob": "**/*.@(svg|png|gif)", 
            "input": "./node_modules/photoswipe/src/css/default-skin", 
            "output": "/assets/media" 
          }
          // to here        
        ],
        "styles": [
            // add this from here
            "node_modules/photoswipe/dist/photoswipe.css",
            "node_modules/photoswipe/dist/default-skin/default-skin.css",
            // to here  
            "src/content/scss/global.scss"
        ]  
      }
    }
  }
}
```

##### Include the NgxPhotoswipeModule.
```typescript
import { NgxPhotoswipeModule } from '@fnxone/ngx-photoswipe';
 
@NgModule({
  ...
  imports: [
    BrowserModule,
    NgxPhotoswipeModule
  ]
  ...
})
export class AppModule {
  ...
}
```

##### HTML

Place the `ngxps-lightbox` somewhere in your layout.

```html
<ngxps-lightbox></ngxps-lightbox>
```

Add the `ngxps-gallery` in your component html. 

```html
<ngxps-gallery [images]="images"></ngxps-gallery>
```

##### Load images in component

```typescript
import {Image} from '@fnxone/ngx-photoswipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-photoswipe-app';

  images: Image[] = [
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
        }
    ];
} 
```

##### Custom Options Adapter
```typescript
import {NgxPhotoswipeModule, LightboxAdapter} from '@fnxone/ngx-photoswipe';
 
@NgModule({
  imports: [
    BrowserModule,
    NgxPhotoswipeModule,
  ],
  //Custom LightboxAdapter
  providers: [
    {provide : LightboxAdapter, useClass : CustomLightboxAdapter}
  ]
})
export class AppModule {
}
```

```typescript 
import { Injectable } from '@angular/core';
import { LightboxAdapter } from '@fnxone/ngx-photoswipe';

@Injectable()
export class CustomLightboxAdapter extends LightboxAdapter {
    allowPanToNext = true;
    spacing = 0.12;
    bgOpacity = 0.4;
    mouseUsed = false;
    loop = true;
    pinchToClose = true;
    closeOnScroll = true;
    closeOnVerticalDrag = true;
    hideAnimationDuration = 333;
    showAnimationDuration = 333;
    showHideOpacity = false;
    escKey = true;
    arrowKeys = true;
    getPageURLForShare = function(shareButtonData) {
        return window.location.href;
    };
}
```

## Demo

This repository contains a demo app. the source is located in: `src/`

Run `ng serve` to start the dev server for the demo. 
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

### build library

To build the library run `npm run build-lib`.
