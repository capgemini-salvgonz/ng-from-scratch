import { Component } from "@angular/core";

@Component({
  selector: 'component-one',
  templateUrl: './component-one.html',
  styleUrls: ['./component-one.css']
})
export class ComponentOne {
  message : string = "Hello World !!!";
}