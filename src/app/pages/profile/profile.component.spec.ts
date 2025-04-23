import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let route: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent,HttpClientTestingModule],
      providers: [AuthService,UserService,{ provide: ActivatedRoute, useValue: {
        params: of({ id: '123' }),
        snapshot: {
          paramMap: {
            get: () => '123'
          }
        }
      }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = fixture.debugElement.injector.get(ActivatedRoute)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
