"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var electron_1 = require("electron");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "I'm OK";
        this.electronSays = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.electronSays = electron_1.ipcRenderer.sendSync('say-hello-nodejs');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Angular ok : {{name}}</h1> <input type='text' [(ngModel)]=\"name\"/>\n  <h1>Calling nodejs:</h1> {{electronSays}}\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map