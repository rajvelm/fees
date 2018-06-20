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
    icon: 'ecommerce-dollar'
  },
  {
    state: 'inventory',
    name: 'Inventory',
    type: 'sub',
    icon: 'basic-server2',
    children: [
      {
        state: 'config',
        name: 'Configuration'
      },


	  {
        state: 'integrate',
        name: 'Integration'
      },
	   {
        state: 'transformation',
        name: 'Transformation'
      },
      {
         state: 'heatmap',
         name: 'Validation'
       }
    ]
  },
  {
    state: 'declaration',
    name: 'Declaration',
    type: 'link',
    icon: 'ecommerce-graph2'
  },
  {
    state: 'chargebacks',
    name: 'Chargebacks',
    type: 'link',
    icon: 'ecommerce-wallet'
  },
  {
    state: 'docs',
    name: 'Documents',
    type: 'link',
    icon: 'basic-archive-full'
  }
  // {
  //   state: 'test',
  //   name: 'Test',
  //   type: 'link',
  //   icon: 'basic-server2'
  // }

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
