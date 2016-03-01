import {StandardsService} from './standards.service'
import {DashItem} from '../models/dash-item'

let standardsService: StandardsService = null

export function main(): void {
  'use strict'

  describe('Standards', () => {

    describe('getIsoDashList()',() => {

      beforeEach(() => {
        standardsService = new StandardsService()
      })

      it('standardsService should not be null', () => {
        expect(standardsService).not.toBeNull()
      })

      it('getIsoDashList should call getIsoDashList', () => {
        spyOn(standardsService,'getIsoDashList')
        standardsService.getIsoDashList()
        expect(standardsService.getIsoDashList).toHaveBeenCalled()
      })
    })


  })
}
