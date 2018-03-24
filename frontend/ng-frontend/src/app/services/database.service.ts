import { Injectable } from '@angular/core';
import * as Mongoose from 'mongoose';
import * as Bluebird from 'bluebird';

@Injectable()
export class DatabaseService {

  private database;
  
  constructor() { 
  	(<any>Mongoose).Promise = Bluebird.Promise;
  	
  }



}
