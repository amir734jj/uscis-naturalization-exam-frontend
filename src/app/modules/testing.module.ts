import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestingComponent} from '../components/testing/testing.component';
import {MaterialUtility} from '../utilities/material.utility';
import {TestingService} from "../services/testing.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [MaterialUtility, TestingService],
    declarations: [TestingComponent]
})
export class TestingModule {
}
