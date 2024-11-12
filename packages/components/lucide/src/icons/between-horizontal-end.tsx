import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BetweenHorizontalEnd as OriginalBetweenHorizontalEnd } from "lucide-react"

/**
 * `BetweenHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalBetweenHorizontalEnd} {...props} />
  ),
)

/**
 * `BetweenHorizontalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BetweenHorizontalEndIcon` instead.
 */
export const BetweenHorizontalEnd = BetweenHorizontalEndIcon
