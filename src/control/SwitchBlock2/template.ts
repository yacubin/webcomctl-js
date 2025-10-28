import { SwitchBlock } from "@/comp/SwitchBlock/builder"

export function buildComponent()
{
  return SwitchBlock.build("SwitchBlock", SwitchBlock.Style.Flex, true);
}
