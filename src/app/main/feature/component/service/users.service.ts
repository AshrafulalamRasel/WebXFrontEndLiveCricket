import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private signInBackendApi = environment.liveCricketLocalUrl + 'public/signin';
  private liveScoreBackendApi = environment.liveCricketLocalUrl + 'public/live-score/fetchAll/';

  constructor(private http: HttpClient) {
  }

  public login(userName: string, Password: string) {

    return this.http.post<any>(this.signInBackendApi, {
      email: userName,
      password: Password
    })
      .pipe(map(res => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          console.log(res.token);
        }
        return res;
      }));

  }

  public getLiveScore(pageNo: number): Observable<any> {
    return this.http.get(this.liveScoreBackendApi + pageNo)
      .pipe(map(res => res));
  }
}
