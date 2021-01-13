/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { LightboxMethods } from './lightbox-options';
import * as PhotoSwipe from 'photoswipe';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function ngxPhotoSwipeFactory() {
    return new DefaultLightboxAdapter();
}

@Injectable({ providedIn: 'root', useFactory: ngxPhotoSwipeFactory })
export abstract class LightboxAdapter
    implements LightboxMethods, PhotoSwipe.Options {
    getThumbBoundsFn: (index: number) => { x: number; y: number; w: number };
    getDoubleTapZoom: (isMouseClick: boolean, item: PhotoSwipe.Item) => number;
    isClickableElement: (el: HTMLElement) => boolean;
    addCaptionHTMLFn: () => boolean;

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
    galleryUID: number;
    galleryPIDs: boolean;
    errorMsg: string;
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
