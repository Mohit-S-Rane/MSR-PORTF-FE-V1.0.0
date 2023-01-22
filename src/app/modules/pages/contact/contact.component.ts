import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  signInForm: UntypedFormGroup;

  constructor() {}

  signIn(): void
  {}
}
