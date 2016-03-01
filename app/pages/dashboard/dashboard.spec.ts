import { DashboardPage } from './dashboard'

let dashboardPage: DashboardPage = null

export function main(): void {
  'use strict'

  describe('DashboardPage', () => {
    beforeEach(()=>{
      dashboardPage = new DashboardPage(null)
    })

    it('should do nothing', () => {
      expect(true).toBe(true)
    })
  })
}
