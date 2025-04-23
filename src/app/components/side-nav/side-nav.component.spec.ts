import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let authService : AuthService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent, HttpClientTestingModule],
      providers: [AuthService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
