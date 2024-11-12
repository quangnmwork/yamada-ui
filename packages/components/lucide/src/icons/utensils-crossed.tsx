import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UtensilsCrossed as OriginalUtensilsCrossed } from "lucide-react"

/**
 * `UtensilsCrossedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtensilsCrossedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalUtensilsCrossed} {...props} />,
)

/**
 * `UtensilsCrossed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UtensilsCrossedIcon` instead.
 */
export const UtensilsCrossed = UtensilsCrossedIcon
