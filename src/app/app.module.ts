import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './pages/question/question.component';
import { AnswerCardComponent } from './components/answer-card/answer-card.component';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionFormComponent,
    QuestionCardComponent,
    QuestionComponent,
    AnswerCardComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
