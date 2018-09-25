import { NgModule } from '../../../../../node_modules/@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';

import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule {

}