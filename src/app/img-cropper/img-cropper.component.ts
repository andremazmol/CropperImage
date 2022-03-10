import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.css']
})
export class ImgCropperComponent  {




  @ViewChild("image", { static: false })
  public imageElement: ElementRef | undefined

  @Input("srcImage")
  public imgSource: string

  public imgDestination: string
  private cropper: Cropper

  constructor() {
    this.imgDestination = ''
  }


  ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      viewMode: 3,
      scalable: false,
      aspectRatio: 1,
      rotatable: false,
      background: false,
      cropBoxResizable: false,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas()
        this.imgDestination = canvas.toDataURL("image/png")
      }
    })

  }

  changeAspectRatio(ratio: any) {
    this.cropper.setAspectRatio(ratio)
  }



}
