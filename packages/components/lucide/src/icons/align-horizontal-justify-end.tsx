import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalJustifyEnd as OriginalAlignHorizontalJustifyEnd } from "lucide-react"

/**
 * `AlignHorizontalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalJustifyEnd} {...props} />
  ),
)

/**
 * `AlignHorizontalJustifyEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalJustifyEndIcon` instead.
 */
export const AlignHorizontalJustifyEnd = AlignHorizontalJustifyEndIcon
