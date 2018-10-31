import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Tariff } from '@app/features/result-list/shared/tariff.model';
import { ResultService } from '@app/features/result-list/shared/result.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  providers: [ResultService]
})
export class ResultListComponent implements OnInit {
  sortType: string;
  filterForm: FormGroup;
  resultList: Observable<Tariff[]>;
  sortedResultList: Tariff[];

  constructor(private formBuilder: FormBuilder, private resultService: ResultService) {
    this.filterForm = this.formBuilder.group({
      sortType: null,
    });

    this.filterForm.get('sortType').valueChanges.subscribe(property => {
      if (property) {
        this.sortedResultList.sort((a, b) => {
          if (a[property] > b[property]) return 1
          else if (a[property] < b[property]) return -1
          else return 0
        })
      } else {
        return this.sortedResultList
      }
    })
  }

  ngOnInit() {
    this.resultList = this.resultService.getResults();
    this.resultList.subscribe(list => this.sortedResultList = list)
  }
}
