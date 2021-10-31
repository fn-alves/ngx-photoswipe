import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { Image } from '../../models/image.model';
import { NgxPhotoswipeService } from '../../services/ngx-photoswipe.service';
import { LightboxAdapter } from '../../adpters/lightbox-adapter';

@Component({
    selector: 'ngxps-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
    // @ts-ignore
    @ViewChild('ngxpsGallery', { static: true })
    galleryElement: ElementRef<HTMLDivElement>;
    @Input() images: Image[];
    @Input() type = 'margin';

    pswp: PhotoSwipe<any>;

    constructor(
        protected ngxPhotoswipeService: NgxPhotoswipeService,
        protected adapter: LightboxAdapter
    ) {}

    onClickImage(data: Image, index: number) {
        data.id = index;
        this.openPhotoSwipe(data);
        return false;
    }

    typeIsNoMargin(): boolean {
        return this.type === 'no-margin';
    }

    protected openPhotoSwipe(image: Image): boolean {
        this.adapter.galleryUID = Number(
            this.galleryElement.nativeElement.getAttribute('data-pswp-uid')
        );
        this.adapter.index = image.id;

        const PSWP: HTMLElement = this.ngxPhotoswipeService.lightboxElement
            .nativeElement as HTMLElement;
        this.pswp = new PhotoSwipe(
            PSWP,
            PhotoSwipeUI_Default,
            this.getImagesAsPhotoSwipe(),
            this.adapter
        );

        this.pswp.init();
        return false;
    }

    protected getImagesAsPhotoSwipe(): any[] {
        return this.images.map((image) => ({
            src: image.img,
            w: image.width != null ? image.width : 4934,
            h: image.height != null ? image.height : 3296,
            pid: image.id,
            title: image.description,
        }));
    }
}
