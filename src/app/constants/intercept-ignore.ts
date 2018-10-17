import {HttpErrorResponse} from '@angular/common/http';


const includesIgnoreCase = (str: string, token: string) => str.toLowerCase().includes(token.toLowerCase());

export const ignoreMatchingHttpErrorResponse = (httpErrorResponse: HttpErrorResponse) => {
  if (includesIgnoreCase(httpErrorResponse.url, 'NotAuthenticated')) {
    return false;
  }

  return true;
};
