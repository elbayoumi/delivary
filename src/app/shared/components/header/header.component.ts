import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome;
  faCar = faCar;
  faThumbsUp = faThumbsUp;
  faStreetView = faStreetView;
  faThumbsDown = faThumbsDown;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
  boolDesplayed: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }
  goTo(param: string) {
    this.router.navigate([param]);
  }
  // logout(prop:string){
  // this.goTo(prop)
  // localStorage.clear()
  // setTimeout(()=>location.reload(),1)
  // }
  @Input() isLoggedIn(): boolean {
    // Check if the user is logged in
    return true; // or false
  }
  async logout() {
    this.authService.logout().subscribe({
      next: (res) => {

        localStorage.clear()
        this.router.navigate(['/login'])
        console.log("teeeeeeeeeeeeeeeeeeeeeeeeeest logout success")

      }
      , error: (error: any) => {
        localStorage.clear()
        this.router.navigate(['/login'])
        console.log("teeeeeeeeeeeeeeeeeeeeeeeeeest logout failed")

      }
    })
    // await location.reload()
  }
  // isLogin(even:boolean){
  // this.bool=even
  // }
  count = false;

  onCountChanged(newCount: boolean) {
    this.count = newCount;
  }
  ngOnInit(): void {


  }

}
