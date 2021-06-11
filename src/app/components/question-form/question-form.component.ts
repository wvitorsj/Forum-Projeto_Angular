import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Output()
  send: EventEmitter<Question> = new EventEmitter<Question>()

  title: string = ''
  body: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  emitSendEvent() {
    this.send.emit({ title: this.title, body: this.body })
  }
}
