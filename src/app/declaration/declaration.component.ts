import { Component  } from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss'],
  providers:[]
})
export class DeclarationComponent {

url: string = "http://localhost/" + "#/views/MIDAS-CMEDeclaration/CMEDeclaration?:iid=4"+ "&output =embed";

}
