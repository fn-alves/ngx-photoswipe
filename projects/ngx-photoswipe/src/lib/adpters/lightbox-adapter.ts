// tslint:disable:ban-types
import { Injectable } from '@angular/core';
import { LightboxMethods, LightboxOptions } from './lightbox-options';

export function NGX_PHOTO_SWIPE_FACTORY() {
    return new DefaultLightboxAdapter();
}

@Injectable({ providedIn: 'root', useFactory: NGX_PHOTO_SWIPE_FACTORY })
export abstract class LightboxAdapter
    implements LightboxOptions, LightboxMethods {
    getThumbBoundsFn: Function;
    getDoubleTapZoom: Function;
    isClickableElement: Function;
    addCaptionHTMLFn: Function;

    index: number;
    showHideOpacity: boolean;
    showAnimationDuration: number;
    hideAnimationDuration: number;
    bgOpacity: number;
    spacing: number;
    allowPanToNext: boolean;
    maxSpreadZoom: number;
    loop: boolean;
    pinchToClose: boolean;
    closeOnScroll: boolean;
    closeOnVerticalDrag: boolean;
    mouseUsed: boolean;
    escKey: boolean;
    arrowKeys: boolean;
    history: boolean;
    galleryUID: string;
    galleryPIDs: boolean;
    errorMsg: string;
    barsSize: Object;
    timeToIdle: number;
    timeToIdleOutside: number;
    loadingIndicatorDelay: number;
    closeEl: boolean;
    captionEl: boolean;
    fullscreenEl: boolean;
    zoomEl: boolean;
    shareEl: boolean;
    counterEl: boolean;
    arrowEl: boolean;
    preloaderEl: boolean;
    tapToClose: boolean;
    tapToToggleControls: boolean;
    clickToCloseNonZoomable: boolean;
    closeElClasses: string[];
    indexIndicatorSep: string;
}

@Injectable()
export class DefaultLightboxAdapter extends LightboxAdapter {
    allowPanToNext = true;
    spacing = 0.12;
    bgOpacity = 1.0;
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
}
