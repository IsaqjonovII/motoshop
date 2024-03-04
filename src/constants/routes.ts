export enum routes {
  HOME = "/",
  AUTH = "/auth",
  ADS = "/ads",
  AD_INFO = ADS + "/:id",
  PROFILE = "/profile",
  POST_MOTO = "/post-moto",
  NOT_FOUND = "*",
  USER_INFO = PROFILE + "/user",
}
