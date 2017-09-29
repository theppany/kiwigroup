import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseDatabaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getNotesDB() {
    return this.afd.list('ionium2/notes/');
  }

  saveNotesDB(datas) {
    if (datas.$key) {
      this.afd.list('ionium2/notes/').update(datas.$key, datas);
    }
    else {
      this.afd.list('ionium2/notes/').push(datas);  
    }
  }
 
  deleteNotesDB(id) {
    this.afd.list('ionium2/notes/').remove(id);
  }

}
