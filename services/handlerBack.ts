import { Router } from "expo-router";

export function handlerBack(router: Router, pathName: string) {
  const canBack = router.canGoBack();

  if (canBack) {
    router.back();
  } else {
    pathName !== "/" && router.replace("/" as any);
  }
}
