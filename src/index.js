import Koa from 'koa';
import React from 'react';
import Router from 'koa-router';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { renderToNodeStream } from 'react-dom/server';
import { mergeStringToStream } from './utils/StreamUtil';
import { serverRender } from '../configs/local.config';
import { StaticRouter, Route } from 'react-router-dom';
import routes from './Routes';
import { Provider } from 'react-redux';
import { getStore } from './store/index';
import { matchRoutes } from 'react-router-config';

const app = new Koa();
const router = new Router();

app.use(serve("public"));

router.get(/.*/, async (ctx, _next) => {
  const store = getStore();

  const promises = [];
  const matchedRoutes = matchRoutes(routes, ctx.request.url);
  matchedRoutes.forEach(item => {
    promises.push(item.route.loadData(store))
  });

  await Promise.all(promises);
  ctx.response.type = 'html';
  const content = (
    <Provider store={store}>
      <StaticRouter location={ctx.request.url} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  );
  let stream = null;
  if (!serverRender) {
    stream = '';
  } else {
    stream = renderToNodeStream(content);
  }
  ctx.response.body = mergeStringToStream(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title></head><body><div id='root'>`,
    stream,
    `</div><script>window.context = ${JSON.stringify(store.getState())}</script>
    <script src="/bundle.js"></script></body></html>`
  );
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at port 3000');
});
