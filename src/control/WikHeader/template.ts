import ControlMaker from "@/lib/ControlMaker.mjs";
import BaseHeader from "@/comp/BaseHeader/index.mjs";

export function buildComponent() {
  const mk = new ControlMaker("MainHeader", import.meta.url);
  BaseHeader(mk, {
    type: "wiki",
  });
  return mk.buildComponent();
}
