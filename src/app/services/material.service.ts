import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('prueba',sanitizer.bypassSecurityTrustResourceUrl('./assets/facebook.svg'));
    iconRegistry.addSvgIcon('gmail',sanitizer.bypassSecurityTrustResourceUrl('./assets/gmail.svg'));
    iconRegistry.addSvgIcon('outlook',sanitizer.bypassSecurityTrustResourceUrl('./assets/outlook.svg'));
   }
}
