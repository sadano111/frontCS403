import { assertPlatform, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  private userID: string | undefined;
  private inactivityTimeout: number = 15 * 60 * 1000; // 15 minutes in milliseconds
  private inactivityTimer: NodeJS.Timeout | null = null;

  constructor(private router: Router) {
    this.initializeInactivityTracking();
  }
  private initializeInactivityTracking() {
    // Start inactivity timer when the user is logged in
    if (this.isLoggedIn) {
      this.startInactivityTimer();
    }

    // Add event listeners only once during initialization
    // window.addEventListener("mousemove", this.resetInactivityTimer);
    // window.addEventListener("keydown", this.resetInactivityTimer);

  }
  setLoginStatus(status: boolean) {
    this.isLoggedIn = status;
    if (status=true) {
      this.startInactivityTimer();
    } else {
      this.logout();
    }
  }

  // login() {
  //   window.location.href = 'https://botnoi-chatbot.onrender.com/google/login';
  // }

  logout() {
 
    this.setLoginStatus(false);
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    localStorage.removeItem("UserId");
    alert("the user have log out")
    this.router.navigate(['/']);
    console.log("User ID removed from localStorage.");
  }

  setUserID(userID: string) {
    localStorage.setItem("UserId", userID);
    console.log(localStorage.getItem("UserId"));
  }

  getUserID(): string| any {
    return localStorage.getItem("UserId");
  }

  resetInactivityTimer = () => {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    this.startInactivityTimer();
  };

  startInactivityTimer() {
    this.inactivityTimer = setTimeout(() => {
      this.logout(); // Call logout when inactivity period is reached
    }, this.inactivityTimeout);
  }
}
