// import { Injectable }     from 'angular2/core';
// import { bootstrap }      from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { AppComponent }   from './app.component';

// @Injectable()
// export class HeroService {

//   getUserInfo(id: number) {
//     return Promise.resolve(USERINFO);
//   }

//   updateUserName(name: string) {
    
//     let body = JSON.stringify({ name });
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers});

//     return this.http.put(this.url, body, options)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }

//   postImage(imageUrl: string) {

//     let body = JSON.stringify({ name });
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers});

//     return this.http.put(this.url, body, options)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
// }
