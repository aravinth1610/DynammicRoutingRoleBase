import { Component, OnInit } from '@angular/core';
import { ConstantPath } from 'src/app/shared/constant-path';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  //we must inlizied and declared value or varaiable if it is string,number or array bcz it will be not declared cause error
  menus: any[]=[];
  role: string = 'User';
  listMenus: any[]=[];
  constructor() {
    ConstantPath.fun();
    this.menus = ConstantPath.menus;
    this.menus.forEach((e: any) => {
      const isRolePresent = e.roles.find((fr: any) => fr == this.role);
      if (isRolePresent != undefined && isRolePresent != null) {
        this.listMenus.push(e);
      }
    });
  }
  
    
}
