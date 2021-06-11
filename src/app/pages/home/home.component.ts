import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions$!: Observable<Question[]>

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.startGetQuestionsRequest()
  }

  startGetQuestionsRequest() {
    this.questions$ = this.apiService.getAllQuestions()
    .pipe(
      tap((questions) => console.log(questions)),
      map(questions => {
        return questions.map(question => {
          return { ...question, accessLink: `/question/${question.id}` }
        }).reverse()
      }),
      tap(console.log)
    )
  }

  saveQuestion(event: Question) {
    this.apiService.saveNewQuestion(event).subscribe(() => {
      alert('Pergunta salva!')
      this.startGetQuestionsRequest()
    })
  }
}
