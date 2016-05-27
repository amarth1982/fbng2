import {bootstrap} from '@angular/platform-browser-dynamic'

import {AppComponent} from './app'
import * as fb from './fb'

fb.checkLoginState()

bootstrap(AppComponent)
