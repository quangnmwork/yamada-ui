import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CreativeCommons as OriginalCreativeCommons } from "lucide-react"

/**
 * `CreativeCommonsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreativeCommonsIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCreativeCommons} {...props} />,
)

/**
 * `CreativeCommons` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CreativeCommonsIcon` instead.
 */
export const CreativeCommons = CreativeCommonsIcon
