import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestBranchPage } from './test-branch';

@NgModule({
  declarations: [
    TestBranchPage,
  ],
  imports: [
    IonicPageModule.forChild(TestBranchPage),
  ],
})
export class TestBranchPageModule {}
