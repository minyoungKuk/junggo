import { AuthProvider } from "@/contexts/auth.context";
import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
