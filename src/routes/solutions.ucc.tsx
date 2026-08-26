import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/ucc")({
  component: () => <Outlet />,
});
