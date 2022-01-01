import {HttpClient, HttpParams} from '@angular/common/http';
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
  private liveScoreSearchBackendApi = environment.liveCricketLocalUrl + 'public/live-score/searchAll';

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


  public getLiveScoreSearchListData(pageNo: number, liveScoreDescription: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('pageNo', String(pageNo));
    params = params.append('liveScoreDescription', liveScoreDescription);
    return this.http.get<any>(this.liveScoreSearchBackendApi, { params}).pipe(map(res => res));
  }
}
