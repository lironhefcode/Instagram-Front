import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let authService : AuthService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,HttpClientTestingModule ],
      providers: [AuthService],
   
    }).compileComponents();
   
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    authService = fixture.debugElement.injector.get(AuthService);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'instgram' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    authService = fixture.debugElement.injector.get(AuthService);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('instgram');
  });

  
});
