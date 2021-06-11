import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input()
  title: string =''

  @Input('content')
  body: string = ''

  @Input('creationDate')
  createdAt: string = ''

  @Input()
  accessLink: string = ''

  @Input()
  showLink: boolean = true

  @Input()
  showGoBackLink: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
}
