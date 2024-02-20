export enum routes {
  HOME = "/",
  AUTH = "/auth",
  MOTOCYCLES = "/ads/",
  AD_INFO = "/ads/:id",
  PROFILE = "/profile",
  USER_ADS = PROFILE + "/ads",
  MESSAGES = PROFILE + "/messages",
  LIKED_ADS = PROFILE + "/liked",
  VIEWED_ADS = PROFILE + "/viewed",
  POST_MOTO = "/post-moto",
  NOT_FOUND = "*",
  USER_INFO = PROFILE + "/user",
}
