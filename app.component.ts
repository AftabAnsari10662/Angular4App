
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    message: string;
    constructor() {
        this.message = "Hello From angular 4";
    }
}