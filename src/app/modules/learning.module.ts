import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearningComponent} from '../components/learning/learning.component';
import {LearningService} from '../services/learning.service';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
    imports: [
        CommonModule,
        ProgressbarModule.forRoot(),
    ],
    providers: [LearningService],
    declarations: [LearningComponent]
})
export class LearningModule {
}
