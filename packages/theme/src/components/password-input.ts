import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const PasswordInput: ComponentMultiStyle<"PasswordInput"> =
  mergeMultiStyle(Input, {})({ omit: ["addon"] })
