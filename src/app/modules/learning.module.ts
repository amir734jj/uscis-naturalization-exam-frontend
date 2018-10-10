import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearningComponent} from '../components/learning/learning.component';
import {LearningService} from '../services/learning.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [LearningService],
    declarations: [LearningComponent]
})
export class LearningModule {
}
