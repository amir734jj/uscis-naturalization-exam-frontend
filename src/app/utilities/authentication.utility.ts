import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationUtility {
  private static _isAuthenticated = false;
  private static _onChangeHandlers: Array<(boolean) => void> = [];

  addOnChangeHandler(handler: (boolean) => void) {
    AuthenticationUtility._onChangeHandlers.push(handler);
  }

  setIsAuthenticated(isAuthenticated: boolean) {
    AuthenticationUtility._isAuthenticated = isAuthenticated;
    AuthenticationUtility._onChangeHandlers.forEach(x => x(isAuthenticated));
  }

  getIsAuthenticated() {
    return AuthenticationUtility._isAuthenticated;
  }
}
