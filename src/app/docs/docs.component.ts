import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Document } from './document';
import { DocsService } from './docs.service';
import * as Quill from 'quill';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  providers: [DocsService]
})
export class DocsComponent implements OnInit, AfterContentInit{
  documents: Document[];
  selectedDocument: Document;
  documentOpen = false;
  isOpened = true;
  _autoCollapseWidth = 991;

  constructor(private docsService: DocsService) {}

  ngOnInit(): void {
    if (this.isOver()) {
      this.isOpened = false;
    }
    this.getDocuments();
  }

  ngAfterContentInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 991px)`).matches;
  }

  getDocuments(): void {
    this.docsService.getDocuments().then(docs => {
      this.documents = docs;
      this.selectedDocument = this.documents[1];
    });
  }

  onSelect(document: Document): void {
    this.selectedDocument = document;
    if (this.isOver()) {
      this.isOpened = false;
    }
  }

}
