import { Component, OnInit, Input } from '@angular/core';
import { Tariff } from '../shared/tariff.model';

@Component({
  selector: 'result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.scss']
})
export class ResultListItemComponent implements OnInit {
  @Input() result: Tariff;
  @Input() index: Number;

  constructor() {}

  ngOnInit() {}
}
