import {
    AfterContentInit,
    Component,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { NgxPhotoswipeService } from '../../services/ngx-photoswipe.service';

@Component({
    selector: 'ngxps-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements AfterContentInit {
    // @ts-ignore
    @ViewChild('ngxLightbox', { static: true }) el: ElementRef;

    constructor(private ngxPhotoswipeService: NgxPhotoswipeService) {}

    ngAfterContentInit() {
        this.ngxPhotoswipeService.LightboxElement = this.el;
    }
}
