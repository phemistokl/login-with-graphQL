import routes from "next-routes";

// @ts-ignore
export const myRoutes = routes();
// export const Router = routes.Router;
// export const Link = routes.Link;

myRoutes.add("confirm", "/user/confirm/:token");
myRoutes.add("change-password", "/user/change-password/:token");