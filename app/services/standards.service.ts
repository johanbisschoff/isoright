import {Injectable} from 'angular2/core'
import {DocumentType} from '../models/document-type'
import {Certification,CertificationElement} from '../models/certification'
import {certificationElements} from '../data/certification-elements'
import {documentTypes} from '../data/document-types'

import {Document} from '../models/document'

@Injectable()
export class StandardsService {

  private _certifications: Certification[] = [
    {"id":2,"name":"ISO9001:2008"},
    {"id":3,"name":"TS16949:2009"},
    {"id":4,"name":"ISO 14001:2004 "},
    {"id":6,"name":"OHSAS BS 18001: 2007 "}
  ]

  private _documents: Document[] = [
    {"id":1, "name": "First Document" , "url": "docs/js/latest/api/http/Http-class.html"}
  ]

  public constructor() {
  }

  public getDocuments(certification: Certification,
    certificationElement: CertificationElement,
    documentType: DocumentType): Promise<Document[]> {

    return new Promise<Document[]>(resolve => {
      resolve(this._documents)
    })
  }

  public getCertificationElements(): Promise<CertificationElement[]> {
    return new Promise<CertificationElement[]>(resolve => {
      resolve(certificationElements)
    })
  }

  public getCertifications(): Promise<Certification[]> {
    return new Promise<Certification[]>(resolve => {
      resolve(this._certifications)
    })
  }

  public getDocumentTypes(): Promise<DocumentType[]> {
    return new Promise<DocumentType[]>(resolve => {
      resolve(documentTypes)
    })
  }

}
