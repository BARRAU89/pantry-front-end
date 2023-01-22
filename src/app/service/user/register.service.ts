import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Account } from 'src/app/Models/account';
import { AuthenticationComponent } from 'src/app/component/authentication/authentication.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private username: string | undefined
  private accountId: number | undefined
  public isLoggedIn = false
  private showMainPage = false
  private showLandingPage = true
  state = AuthenticationCompState.LOGIN;

  constructor(
              private http: HttpClient, 
              private loginSheet: MatBottomSheet,
              private snackBar: MatSnackBar,
              // private bottomSheetRef: MatBottomSheetRef
              ) {
                let accountId = localStorage.getItem('id')
                const username = localStorage.getItem('username')
                const password = localStorage.getItem('password')
            
                if (username !== null && password !== null) {
                  this.tryLog(username, password)
                }
              }
  
  // GETTERS AND SETTERS///////////////////////////////////////////////////////////////////////////////////////////
  public getUsername(): string | undefined {
    return this.username
  }

  public getShowMainPage(): boolean {
    return this.showMainPage
  }

  public getShowLandingPage(): boolean {
    return this.showLandingPage
  }

  public getUserName(): string | undefined {
    return this.username;
  }

  public getAccountId(): number | undefined {
    return this.accountId;
  }


  /////////////////////////////////////////////////////////////

  onLetsStartClick(){
    this.loginSheet.open(AuthenticationComponent)
  }

  onLogOutClick(){
    localStorage.clear();
    this.showError('Logout Successful')
    this.isLoggedIn = false
    this.showLandingPage = true
    this.showMainPage = false
  }

  onCreateAccount(){
    this.state = AuthenticationCompState.REGISTER;

  }
  onLogin(){
    this.state = AuthenticationCompState.LOGIN;
  }

  isLoginState(){
    return this.state == AuthenticationCompState.LOGIN
  }

  isRegisterState(){
    return this.state == AuthenticationCompState.REGISTER
  }

// REGISTER & LOGIN FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////////
  
  public tryReg(username: string, password: string) {
    this.register(username, password)
  }


  public register(username: string, password: string): void {
    this.http.post(`http://localhost:8080/accounts`, {
      id: null,
      username,
      password,
    })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.tryLog(username, password)
        },
        error: () => {
          this.showError('Failed to register')
        }
      })
  }

  public tryLog(username:string, password:string){
    if (localStorage.getItem('username') != null) {
      return this.showError("There is already an account logged in")
    }
    this.http.get<Account>(`http://localhost:8080/accounts?username=${username}&password=${password}`)
    .pipe(take(1))
    .subscribe({
      next: account => {
        this.loginSuccess(account)
      },
      error: () => {
        this.showError('Failed to login')
      }
    })
  }

  private loginSuccess(account: Account): void {
    this.showMainPage = true
    this.showLandingPage = false
    this.accountId = account.id
    this.username = account.username
    localStorage.setItem('username', account.username)
    localStorage.setItem('password', account.password)
    localStorage.setItem('id', this.accountId!.toString())
    this.isLoggedIn = true
    this.loginSheet.dismiss()


    this.showError('Logged in with: ' + this.username + '  account')
  }

  ////////////////////////////////////////////////////////////////

  public showError(message: string): void {
    this.snackBar.open(message, undefined, { duration: 2000 })
  }


}

export enum AuthenticationCompState {
  LOGIN,
  REGISTER
}
