import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/certifications")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "certifications", replace: true }); },
});
