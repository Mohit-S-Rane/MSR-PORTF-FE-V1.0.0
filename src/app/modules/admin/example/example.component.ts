import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent implements OnInit {
  list = ["full stack developer", "solution architech", "devops engineer"];
  constructor() {}
  ngOnInit() {}
}
