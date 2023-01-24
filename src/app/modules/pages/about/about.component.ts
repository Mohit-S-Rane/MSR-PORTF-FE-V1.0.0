import { Component, HostListener, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";

declare let TagCloud:any;

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Angular', 'React', 'Node.js',
    'Devops', 'Jenkins', 'Git',
    'Docker', 'Node.js', 'Kubernetes',
    'AWS', 'SAP ABAP', 'jQuery',
];
  constructor() {}

  ngOnInit(): void {
    this.configureTagCloud();
  }

  configureTagCloud(sWidth = 0) {
      var tagCloud = TagCloud('.content', this.myTags,{
        radius: 250,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
      });
  }
}
