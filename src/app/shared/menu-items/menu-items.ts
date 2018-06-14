import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [

  /* {
    state: 'onboarding',
    name: 'Onboarding',
    type: 'sub',
    icon: 'basic-paperplane',
    children: [
      {
        state: 'companies',
        name: 'Clients'
      },


	  {
        state: 'contacts',
        name: 'Contacts'
      },
	  {
        state: 'accounts',
        name: 'Accounts'
      }
    ]
  }, */
  {
    state: 'fees',
    name: 'Fees',
    type: 'link',
    icon: 'basic-server2'
  },
  {
    state: 'docs',
    name: 'Documents',
    type: 'link',
    icon: 'basic-server2'
  },
  {
    state: 'test',
    name: 'Test',
    type: 'link',
    icon: 'basic-server2'
  }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
