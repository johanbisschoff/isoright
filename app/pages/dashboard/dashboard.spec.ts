import { DashboardPage } from './dashboard'
import { beforeEachProviders,injectAsync,inject,it , TestComponentBuilder} from 'angular2/testing';
import { StandardsService } from '../../services/standards.service'

let dashboardPage: DashboardPage = null

export function main(): void {
  'use strict'
  let standardsService = new StandardsService()
  describe('DashboardPage', () => {
    beforeEach(()=>{
      dashboardPage = new DashboardPage(null,standardsService)
    })

    it('should do nothing', () => {
      expect(true).toBe(true)
    })
  })
}
