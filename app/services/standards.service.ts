import {Injectable} from 'angular2/core'
import {DocumentType} from '../models/document-type'
import {Certification,CertificationElement} from '../models/certification'
import {certificationElements} from '../data/certification-elements'
import {documentTypes} from '../data/document-types'

@Injectable()
export class StandardsService {

  private _certifications: Certification[] = [
    {"id":1,"name":"No Certification"},
    {"id":2,"name":"ISO9001:2008"},
    {"id":3,"name":"TS16949:2009"},
    {"id":4,"name":"ISO 14001:2004 "},
    {"id":6,"name":"OHSAS BS 18001: 2007 "}
  ]

  constructor() {
    
  }

  getCertificationElements() {
    return new Promise<CertificationElement[]>(resolve => {
      resolve(certificationElements)
    })
  }

  getCertifications(){
    return new Promise<Certification[]>(resolve => {
      resolve(this._certifications)
    })
  }

  getDocumentTypes(){
    return new Promise<DocumentType[]>(resolve => {
      resolve(documentTypes)
    })
  }

}
