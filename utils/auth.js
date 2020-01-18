import cookie from 'js-cookie';
import Router from 'next/router';

export function handleLogin(token) {
  cookie.set('token', token);
  Router.push('/account');
}
export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location }); // 302: found. Location indicates the target of a redirection. Location is a header associated with the response
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove('token');
  window.localStorage.setItem('logout', Date.now());
  Router.push('/login');
}
