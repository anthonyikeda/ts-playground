import { switchMap, from } from 'rxjs';

interface User {
  email: string;
  id: number;
}

const currUser: User {
  id: 4000;
  email: 'user@home.com';
};

let isAuthenticated$ = of(true);
let user$ = of(currUser);

let process$ = isAuthenticated$.pipe(
  switchMap(isLoggedIn => {
    if (isLoggedIn) {
      console.log('User is logged in');
      return user$;
    } else {
      console.log('User is not logged in');
      return of({})
    }
  })
);

process$.subscribe();
