import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portal } from '../portal.model';

@Component({
  selector: 'lib-portal-summary',
  templateUrl: './portal-summary.component.html',
  styleUrls: ['./portal-summary.component.scss']
})
export class PortalSummaryComponent implements OnInit {
 
  constructor(private router: Router) { }
  @Input() portals: Portal[];
  ngOnInit(): void {
  }

  navigateToPortal(portal: Portal) {
    this.router.navigate([`/portals/${[portal.name]}`]);
  }

}
