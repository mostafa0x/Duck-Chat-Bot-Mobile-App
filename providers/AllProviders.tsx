import { useAppDispatch } from "@/hooks/useRedux";
import { getHistory } from "@/lib/store/AppSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";

const queryClient = new QueryClient();

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getHistory());
    return () => {};
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
