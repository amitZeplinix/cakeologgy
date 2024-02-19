import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  currentIndex = 0;
  intervalId: any;

  constructor(){
    feather.replace();
  }

  ngOnInit(): void {
    this.startVideoCarousel();
  }

  ngOnDestroy(): void {
    this.stopVideoCarousel();
  }

  startVideoCarousel(): void {
    this.intervalId = setInterval(() => {
      this.playNextVideo();
    }, 100000); // Change the interval duration as needed
  }

  stopVideoCarousel(): void {
    clearInterval(this.intervalId);
  }
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  videos = [
    { id: 'video1', src: 'assets/videos/video1.mp4' },
    { id: 'video2', src: 'assets/videos/video2.mp4' },
    { id: 'video3', src: 'assets/videos/video3.mp4' },
    { id: 'video4', src: 'assets/videos/video4.mp4' },
    { id: 'video5', src: 'assets/videos/video5.mp4' },
    { id: 'video6', src: 'assets/videos/video6.mp4' }
  ];
  playNextVideo(): void {
    const videoElements = this.videoPlayers.toArray();
    const currentVideo = videoElements[this.currentIndex].nativeElement;
    currentVideo.pause();

    this.currentIndex = (this.currentIndex + 1) % videoElements.length;

    const nextVideo = videoElements[this.currentIndex].nativeElement;
    nextVideo.currentTime = 0;
    nextVideo.play();
  }



  playSelectedVideo(direction: string): void {
    const videoElement: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (videoElement) {
      if (direction === 'prev') {
        videoElement.currentTime = 0;
      } else {
        videoElement.play();
      }
    }
  }


  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image URLs here


  onMouseDown(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.startX = event.clientX;
    this.scrollLeft = element.scrollLeft;
    element.classList.add('grabbing');
  }

  onMouseMove(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    if (!this.isDragging) return;
    const scrollX = this.scrollLeft - (event.clientX - this.startX);
    element.scrollLeft = scrollX;
  }

  onMouseUp() {
    this.isDragging = false;
    document.querySelector('.image-slider')?.classList.remove('grabbing');
  }
}

