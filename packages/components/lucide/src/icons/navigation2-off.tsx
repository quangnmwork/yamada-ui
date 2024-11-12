import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Navigation2Off as OriginalNavigation2Off } from "lucide-react"

/**
 * `Navigation2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2OffIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalNavigation2Off} {...props} />
))

/**
 * `Navigation2Off` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Navigation2OffIcon` instead.
 */
export const Navigation2Off = Navigation2OffIcon
