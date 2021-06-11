import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.css']
})
export class AnswerCardComponent implements OnInit {

  @Input()
  answer: string = ''

  constructor() { }

  ngOnInit(): void {
  }
}
