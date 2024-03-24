import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import liff from '@line/liff';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LineliffService {

  constructor(private loginService: LoginService) { }
  private liffId = '2004090496-dKy6vmJy';
  http: any;

  async initLiff(): Promise<void> {
    try {
      await liff.init({ liffId: '2004090496-dKy6vmJy' });
    } catch (error) {
      console.error('LIFF initialization failed', error);
    }
  }

  async liffprofile(): Promise<void> {
    await liff.init({ liffId: '2004090496-dKy6vmJy' });
    const profile = await liff.getProfile();
    console.log('User Profile:', profile);
    
    const userprofile={
      userId: profile.userId,
      displayName: profile.displayName
    }

    
    const profileJSON = JSON.stringify(userprofile);
    console.log(profileJSON)
    axios.post('https://cs403.onrender.com/post', profileJSON)
    .then((response: any) => {
      console.log('sent to backend successfully:', response);
    })
    .catch((error: any) => {
      console.error('Error sending profile to backend:', error);
    });
  }

  isLoggedIn(): boolean {
    this.loginService.setLoginStatus(true)
    
    return liff.isLoggedIn();
  }

  async loginWithLine(): Promise<void> {
    await liff.init({ liffId: '2004090496-dKy6vmJy' });

    if (!this.isLoggedIn()) {
      liff.login();
      const profile = await liff.getProfile();
      console.log('User Profile:', profile);
    
      const userprofile={
        userId: profile.userId,
        displayName: profile.displayName
      }

      const profileJSON = JSON.stringify(userprofile);
      console.log(profileJSON)
      axios.post('https://cs403.onrender.com/post', profileJSON)
      .then((response: any) => {
        console.log('sent to backend successfully:', response);
      })
      .catch((error: any) => {
        console.error('Error sending profile to backend:', error);
      });      
    } else {
      
      console.log('User is already logged in');
    }
  }
  catch(error: any) {
    console.error('LINE login failed', error);
  }
}
