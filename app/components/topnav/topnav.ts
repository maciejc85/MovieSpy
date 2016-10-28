import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'topnav',
  templateUrl: 'app/components/topnav/topnav.html',
  styleUrls: ['app/components/topnav/topnav.css'],
  animations: [
    trigger('navLinkState', [
      state('closed', style({
        "display" : "none" 
      })),
      state('open',   style({
        "display" : "block" 
      })),
      transition('closed => open', animate('1000ms ease-in')),
      transition('open => closed', animate('1ms ease-in'))
    ])
  ]
})
export class TopnavComponent {

  navItems: NavItem[] = [
    new NavItem(0, "Home", "home"),
    new NavItem(1, "Dashboard", "dashboard"),
    new NavItem(2, "Details", "details"),
    new NavItem(3, "Search", "search"),
    new NavItem(4, "User", "user")
  ];

  navDrawer: NavDrawer = new NavDrawer(this.navItems, "closed");

  onNavToggle = function(event: any){
    this.navDrawer.navState = (this.navDrawer.navState === 'open') ? 'closed' : 'open';
  }
  
};

export class NavDrawer {
  constructor(public navItems: NavItem[], public navState: string){}
}

export class NavItem {
  constructor(public id: number, public name: string, public route: string) {}
}

