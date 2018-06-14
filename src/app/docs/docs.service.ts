import { Injectable } from '@angular/core';

import { Document } from './document';
import { DOCUMENTS } from './mock-docs';

@Injectable()
export class DocsService {
  getDocuments(): Promise<Document[]> {
    return Promise.resolve(DOCUMENTS);
  }
}
