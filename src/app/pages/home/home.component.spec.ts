import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent,HttpClientTestingModule,RouterTestingModule],
      providers: [AuthService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit', () =>{
    const submitBTn = fixture.nativeElement.querySelector('button[type="submit"]')
    const onSubmitSpy = spyOn(component,'onSubmit').and.callThrough()
    submitBTn.click()
    fixture.detectChanges()
    expect(onSubmitSpy).toHaveBeenCalled()
  })
});
