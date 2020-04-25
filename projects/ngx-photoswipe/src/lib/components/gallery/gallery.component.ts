import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as PhotoSwipe from 'photoswipe/dist/photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min';
import {Image} from '../../models/image.model';
import {NgxPhotoswipeService} from '../../services/ngx-photoswipe.service';
import {LightboxAdapter} from '../../adpters/lightbox-adapter';

@Component({
  selector: 'ngxps-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  // @ts-ignore
  @ViewChild('ngxpsGallery', { static: true }) galleryElement: ElementRef<HTMLDivElement>;
  @Input() images: Image[];
  @Input() type = 'margin';

  pswp: PhotoSwipe;

  constructor(
    private ngxPhotoswipeService: NgxPhotoswipeService,
    private adapter: LightboxAdapter
  ) { }

  onClickImage(data: Image, index: number) {
    data.id = index;
    this.openPhotoSwipe(data);
    return false;
  }

  private openPhotoSwipe(image: Image): boolean {
    this.adapter.galleryUID = this.galleryElement.nativeElement.getAttribute('data-pswp-uid');
    this.adapter.index = image.id;

    const PSWP: HTMLElement = this.ngxPhotoswipeService.LightboxElement.nativeElement as HTMLElement;
    this.pswp = new PhotoSwipe(PSWP, PhotoSwipeUI_Default, this.getImagesAsPhotoSwipe(), this.adapter);

    this.pswp.init();
    return false;
  }

  private getImagesAsPhotoSwipe(): any[] {
    return this.images.map(image => {
      return {
        src: image.img,
        w: image.width != null ? image.width : 4934,
        h: image.height != null ? image.height : 3296,
        pid: image.id,
        title: image.description
      };
    });
  }

  typeIsNoMargin(): boolean {
    return this.type === 'no-margin';
  }
}
