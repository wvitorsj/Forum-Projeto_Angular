import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'question/:id',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
