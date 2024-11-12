import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowBigUpDash as OriginalArrowBigUpDash } from "lucide-react"

/**
 * `ArrowBigUpDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUpDashIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalArrowBigUpDash} {...props} />
))

/**
 * `ArrowBigUpDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowBigUpDashIcon` instead.
 */
export const ArrowBigUpDash = ArrowBigUpDashIcon
