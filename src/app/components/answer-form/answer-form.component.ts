import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  answer: string = ''

  @Output()
  send: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitSendEvent() {
    this.send.emit(this.answer)
  }
}
