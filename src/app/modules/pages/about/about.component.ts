import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
  constructor() {

    $(document).ready(function () {
      if (
        !$("#myCanvas").tagcanvas(
          {
            textColour: "#ffffff",
            outlineColour: "#FE0853",
            outlineThickness: 0.5,
            // outlineColour: "#FE0853",
            maxSpeed: 0.06,
            freezeActive: true,
            shuffleTags: true,
            shape: "sphere",
            zoom: 0.8,
            noSelect: true,
            textFont: null,
            textHeight: 20,
            pinchZoom: true,
            freezeDecel: true,
            fadeIn: 3000,
            initial: [0.3, -0.1],
            depth: 1.1
          },
          "tags"
        )
      ) {
        // something went wrong, hide the canvas container
        $("#myCanvasContainer").hide();
      }
    });
    
  }
}
