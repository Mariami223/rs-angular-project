import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { FeedbackPageComponent } from './components/feedback-page/feedback-page.component';
import { ProtocolComponent } from './components/protocol/protocol.component';

const routes: Routes = [
  { path: '', component: ProtocolComponent },
  { path: 'protocol', component: ProtocolComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'feedback', component: FeedbackPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
