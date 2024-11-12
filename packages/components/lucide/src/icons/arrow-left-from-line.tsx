import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowLeftFromLine as OriginalArrowLeftFromLine } from "lucide-react"

/**
 * `ArrowLeftFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftFromLineIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowLeftFromLine} {...props} />,
)

/**
 * `ArrowLeftFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowLeftFromLineIcon` instead.
 */
export const ArrowLeftFromLine = ArrowLeftFromLineIcon
