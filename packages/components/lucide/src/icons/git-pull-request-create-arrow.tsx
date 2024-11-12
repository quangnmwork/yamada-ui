import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitPullRequestCreateArrow as OriginalGitPullRequestCreateArrow } from "lucide-react"

/**
 * `GitPullRequestCreateArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateArrowIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGitPullRequestCreateArrow} {...props} />
  ),
)

/**
 * `GitPullRequestCreateArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitPullRequestCreateArrowIcon` instead.
 */
export const GitPullRequestCreateArrow = GitPullRequestCreateArrowIcon
