import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ReceiptPoundSterling as OriginalReceiptPoundSterling } from "lucide-react"

/**
 * `ReceiptPoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptPoundSterlingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalReceiptPoundSterling} {...props} />
  ),
)

/**
 * `ReceiptPoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ReceiptPoundSterlingIcon` instead.
 */
export const ReceiptPoundSterling = ReceiptPoundSterlingIcon
