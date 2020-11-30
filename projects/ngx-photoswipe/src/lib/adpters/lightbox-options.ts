/* eslint-disable @typescript-eslint/ban-types */
export interface LightboxOptions {
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
export interface LightboxMethods {
    getThumbBoundsFn: Function;
    getDoubleTapZoom: Function;
    isClickableElement: Function;
    addCaptionHTMLFn: Function;
}
