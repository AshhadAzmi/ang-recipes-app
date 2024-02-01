import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root'})
export class AuthGaurd {

    /**
     *
     */
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate: CanActivateFn = (
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
          boolean 
        | UrlTree 
        | Promise<boolean | UrlTree> 
        | Observable<boolean | UrlTree>  => {
        return this.authService._user.pipe(
            take(1),
            map(user => {
            const isAuth = !!user;
            if(isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        }),
            // tap(isAuth => {
            //     if(!isAuth){
            //         this.router.navigate(['/auth']);
            //     }
            // })
        );
    }
}