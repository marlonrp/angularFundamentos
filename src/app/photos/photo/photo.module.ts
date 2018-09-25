import { NgModule } from '../../../../node_modules/@angular/core';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';

import { PhotoComponent } from './photo.component';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule{

}