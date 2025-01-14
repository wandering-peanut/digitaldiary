export function middleware(req) {
    const basicAuth = req.headers.get("authorization");
    const password = process.env.PASSWORD;
  
    if (!basicAuth) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  
    const [username, pass] = atob(basicAuth.split(" ")[1]).split(":");
  
    if (username !== "admin" || pass !== password) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  
    return new Response("Authorized", { status: 200 });
  }
  