import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { getHistory } from "@/lib/store/AppSlice";
import { SplashScreen, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { history } = useAppSelector((state) => state.AppReducer);
  const isMounted = useRef(true);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    dispatch(getHistory())
      .unwrap()
      .then((data) => {
        if (!isMounted.current) return;

        if (data.length > 0) {
          router.replace("/");
        } else {
          router.replace("/OneBoarding");
        }

        timeoutId.current = setTimeout(() => {
          if (isMounted.current) SplashScreen.hide();
        }, 300) as unknown as NodeJS.Timeout;
      })
      .catch((err) => {
        console.log("getHistory error:", err);
        if (isMounted.current) SplashScreen.hide();
      });

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return children;
}
