import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserAuthService } from "./user-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: UserAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler)
  {
    const authToken = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
