import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInvitedComponent } from './login-invited.component';

describe('LoginInvitedComponent', () => {
  let component: LoginInvitedComponent;
  let fixture: ComponentFixture<LoginInvitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInvitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
