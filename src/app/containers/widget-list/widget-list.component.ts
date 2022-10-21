import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  @Output() newWidgetList = new EventEmitter<string>();

  addWidget(value: string) {
    this.newWidgetList.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
