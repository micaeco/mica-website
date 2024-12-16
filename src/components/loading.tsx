import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-32 w-32 animate-spin" strokeWidth={1} />
    </div>
  );
}
