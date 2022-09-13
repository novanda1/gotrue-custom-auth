const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body-parser");

const app = new Koa();
const router = new Router();

app.use(bodyParser({}));

router.post("/send", (ctx) => {
  const payload = ctx.request.body;

  // handle if secret is wrong
  if (payload.Secret !== "supersecret") {
    ctx.status = 401;
    return;
  }

  // @todo handle send otp here
  // you can use any provider and any way you want
  // SMS, Whatsapp or anything
  console.log({ payload });

  ctx.status = 200;
  ctx.body = { message: "ok" };
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("listen on port 3000");
});
