import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question$!: Observable<Question>
  questionId: any

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion() {
    this.questionId = this.route.snapshot.paramMap.get('id')
    this.question$ = this.apiService.getQuestionById(this.questionId)
    .pipe(
      map(question => {
        return { ...question, Answers: question.Answers?.reverse() }
      })
    )
  }

  saveAnswer(event: string) {
    this.apiService.saveNewAnswer(this.questionId, { answer: event }).subscribe(() => {
      alert('Sua resposta foi salva!')
      this.getQuestion()
    })
  }
}
