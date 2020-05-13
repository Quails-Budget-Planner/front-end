import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    ModalComponent,
  ],
  providers: [
  ]
})
export class SharedModule { }
