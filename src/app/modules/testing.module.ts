import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestingComponent} from '../components/testing/testing.component';
import {MaterialUtility} from '../utilities/material.utility';
import {ScoreService} from "../services/score.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [MaterialUtility, ScoreService],
    declarations: [TestingComponent]
})
export class TestingModule {
}
