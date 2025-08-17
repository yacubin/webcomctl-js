import { BaseHeader } from "@/comp/BaseHeader/builder";

export function buildComponent() {
  return BaseHeader.build("MainHeader", { type: "main" });
}
