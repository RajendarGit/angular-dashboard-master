import { Component, OnInit } from '@angular/core';
import { sideNavList } from './sidenav-content';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  userProfile = {
    userimage : 'avatar.jpg',
    userfname : 'Rajendar',
    userlname : 'Kathiravel',
    userrole : 'UI UX Lead Engineer',
    usermail : 'rajendar.k.16@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  sidenavlinks = sideNavList;

}
