import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShow:boolean= true;

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  currentIndex = 0;
  intervalId: any;

  constructor() {
    feather.replace();
  }

  ngOnInit(): void {
  }


  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  videos = [
    { id: 'video1', src: 'assets/videos/video1.mp4', isHovered: false },
    { id: 'video2', src: 'assets/videos/video2.mp4' , isHovered: false},
    { id: 'video3', src: 'assets/videos/video3.mp4' , isHovered: false},
    { id: 'video4', src: 'assets/videos/video4.mp4' , isHovered: false},
    { id: 'video5', src: 'assets/videos/video5.mp4' , isHovered: false},
    { id: 'video6', src: 'assets/videos/video6.mp4' , isHovered: false}
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

  mouseOver(video: any) {
    let clip: any = document.querySelector("#"+video.id)
    video.isHovered = true;
    /* Adding the event listeners on the video to play/pause the video. */
    clip.addEventListener("mouseover", function (e: any) {
      clip.play();
    })
  }
  mouseOut(video: any) {
    let clip: any = document.querySelector("#"+video.id);
    video.isHovered = false;
    clip.addEventListener("mouseout", function (e: any) {
      clip.pause();
   })
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  onClickPlay(id:any){
    let clip: any = document.querySelector("#"+id)
    clip.play();
  }
}

