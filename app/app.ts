  import {Component} from '@angular/core'

  import * as fb from './fb'
  @Component({
    selector: 'app',
    templateUrl:  ['app/app.html']
  })
  export class AppComponent{
    checkLoginState(){
      FB.login(function(response){
        fb.statusChangeCallback(response)
      }, {scope:"public_profile,email"})
    }
  }
