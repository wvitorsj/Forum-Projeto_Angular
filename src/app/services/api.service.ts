import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseURL}/questions`)
  }

  saveNewQuestion(question: Question): Observable<any> {
    return this.http.post(`${this.baseURL}/question`, question)
  }

  getQuestionById(id: any): Observable<Question> {
    return this.http.get<Question>(`${this.baseURL}/question/${id}`)
  }

  saveNewAnswer(questionId: any, answer: Answer): Observable<any> {
    return this.http.post(`${this.baseURL}/answer/${questionId}`, answer)
  }
}
