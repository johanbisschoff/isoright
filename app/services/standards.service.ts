import {Injectable} from 'angular2/core'
import {DocumentType} from '../models/document-type'
import {Certification,CertificationElement} from '../models/certification'

import {SettingsService} from './settings.service'
import {UtilsService} from './utils.service'
import {HttpService} from './http.service'

import {Document} from '../models/document'
import {Http} from "angular2/http"

@Injectable()
export class StandardsService {

  // private _documents: Document[] = [
  //   {"id":1, "name": "First Document" , "url": "docs/js/latest/api/http/Http-class.html"}
  // ]

  public constructor(
    private _http: Http,
    private _utilsService: UtilsService,
    private _settingsService: SettingsService,
    private _httpService: HttpService
  ) {

  }

  public getDocuments(certificationElementId: number, documentTypeId: number):
    Promise<Document[]> {
    return new Promise<Document[]>((resolve,reject) => {
      let url = `/api/document/list/${certificationElementId}/${documentTypeId}`
      this._httpService.getJson(url).then(json => {
        resolve(json.documents)
      }, error => {
        reject(error)
      })
    })
  }

  public getCertificationElements(id: number): Promise<CertificationElement[]> {
    return new Promise<CertificationElement[]>((resolve,reject) => {
      this._httpService.getJson(`/api/certification/elements/${id}`)
      .then(json => {
        resolve(json.certificationElements)
      }, error => {
        reject(error)
      })
    })
  }

  public getCertifications(): Promise<Certification[]> {
    return new Promise<Certification[]>((resolve,reject) => {
      this._httpService.getJson('/api/certification/all').then(json => {
        resolve(json.certifications)
      }, error => {
        reject(error)
      })
    })
  }

  public getDocumentTypes(): Promise<DocumentType[]> {
    return new Promise<DocumentType[]>((resolve,reject) => {
      this._httpService.getJson('/api/document/types').then(json => {
        resolve(json.documentTypes)
      }, error => {
        reject(error)
      })
    })
  }

}
