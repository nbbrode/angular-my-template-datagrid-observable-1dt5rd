import { Component, OnInit } from '@angular/core';
import { Service, Employee, Statement, Group, Property, DataType, State } from './service.service';

import { Observable } from 'rxjs/Observable';

@Component({
  styleUrls: ['app.component.css'],
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  groups: Group[];
  properties: Property[];
  datatypes: DataType[];
  getfilterprops: any;
  getfilterdatatypes: any;
  setgroup: any;
  setproperty: any;

  dataSource: Observable<Statement[]>;

  constructor(private service: Service) {
    this.groups = service.getgroups();
    this.properties = service.getproperties();
    this.datatypes = service.getdatatypes();
    let self = this;

    
  }

  ngOnInit() {
    this.dataSource = this.service.statements;
  }
}

