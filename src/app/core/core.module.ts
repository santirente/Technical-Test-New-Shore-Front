import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule];

@NgModule({
    declarations: [],
    imports: [...MODULES],
    exports: [...MODULES],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error('Application requires single instance of CoreModule.');
        }
    }
}
