import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'; 
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  logoTitle = "Company logo";

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer:BreakpointObserver) { }
  // ngAfterViewInit(): void {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
  //     if(res.matches){
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     }
  //     else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}
