import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  imgUrl = ''
  constructor(private http: HttpClient) { }
  uploadImage(img:File): Observable<string>{
    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'instgram');
   return this.http.post<{ secure_url: string }>('https://api.cloudinary.com/v1_1/dkgir8nur/image/upload',formData).pipe(map(res => res.secure_url))

  }

}
