import {Injectable} from '@angular/core';
import {LightboxAdapter} from 'ngx-photoswipe';

@Injectable()
export class TesteService extends LightboxAdapter {
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
