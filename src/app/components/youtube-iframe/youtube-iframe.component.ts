import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-iframe',
  templateUrl: './youtube-iframe.component.html',
  styleUrls: ['./youtube-iframe.component.scss'],
})
export class YoutubeIframeComponent implements OnInit {

  public trustedSource
  @Input() public set videoId(psVideoId: string) {
    this.trustedSource = this.ioDomSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + psVideoId)
  };

  constructor(
    private ioDomSanitizer: DomSanitizer
  ) { }

  ngOnInit() {}

}
