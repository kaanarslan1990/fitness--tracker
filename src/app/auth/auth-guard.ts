import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import * as fromRoot from "../app.reducer";



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private store: Store<fromRoot.State>,  private router: Router) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select(fromRoot.getIsAuth).pipe(take(1))
    }
    canLoad(route: Route) {
        return this.store.select(fromRoot.getIsAuth).pipe(take(1))
    }
}