import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tariff } from '@app/features/result-list/shared/tariff.model';

@Injectable()
export class ResultService {
  mockResultsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.mockResultsUrl = 'assets/mock-results.json';
  }

  getResults () {
    return this.httpClient.get<Tariff[]>(this.mockResultsUrl)
  }
}
