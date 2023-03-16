import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

interface ReactQueryContainerProps {
  children: React.ReactNode;
  dehydratedState: any;
}

export default function ReactQueryContainer({
  children,
  dehydratedState,
}: ReactQueryContainerProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}
