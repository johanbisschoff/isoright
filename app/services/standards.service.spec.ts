import {beforeEachProviders,injectAsync,inject,it} from 'angular2/testing';

import {StandardsService} from './standards.service'
import {DashItem} from '../models/dash-item'

let standardsService: StandardsService = null

export function main(): void {
  'use strict'

  describe('Standards', () => {

    describe('getIsoDashList()',() => {


      beforeEachProviders(()=>[StandardsService])


      it('standardsService should not be null', inject([StandardsService], (standardsService: StandardsService) => {
        expect(standardsService).not.toBeNull()
      }))

      it('standardsService getCertifications to return a non empty array',inject([StandardsService], (standardsService: StandardsService) => {
        standardsService.getCertifications().then(items => {
          expect(items.length).toBeGreaterThan(0)
        })
      }))

    })


  })
}
