import { NgModule } from '@angular/core';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LightboxComponent, GalleryComponent],
    imports: [CommonModule],
    exports: [LightboxComponent, GalleryComponent],
})
export class NgxPhotoswipeModule {}
