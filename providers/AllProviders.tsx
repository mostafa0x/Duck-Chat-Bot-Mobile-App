import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { getHistory } from "@/lib/store/AppSlice";
import React, { useEffect } from "react";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const { history } = useAppSelector((state) => state.AppReducer);
  useEffect(() => {
    dispatch(getHistory());
    return () => {};
  }, []);

  return children;
}
