import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: AngularFireList<any>;
  client: AngularFireObject<any>;

  constructor(public af:AngularFireDatabase) { 
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }

  getClients(){
    return this.clients;
  }
}
