// Uncomment these imports to begin using these cool features!

import {get, param, post} from '@loopback/rest';

// import {inject} from '@loopback/core';


export class DatabaseManagerController {
  constructor() { }

  @get('/hello')
  getData(): Object {
    return 'Hola Mundo'
  }

  @post('/delete/{id}')
  deleteData(@param.path.string('id') id: string): string {
    return 'El id: ' + id;
  }

}
