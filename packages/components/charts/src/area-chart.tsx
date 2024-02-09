import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import {
  Area,
  CartesianGrid,
  DotProps,
  Legend,
  AreaChart as ReChartsAreaChart,
  ReferenceLine,
  ReferenceLineProps,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"
import { LayoutType } from "recharts/types/util/types"
import { Fragment, useId, useState } from "react"

export interface ChartSeries {
  name: string
  // color: MantineColor;
  color: string
  label?: string
}

export interface AreaChartSeries extends ChartSeries {
  strokeDasharray?: string | number
}

export type AreaChartType = "default" | "stacked" | "percent" | "split"

export type AreaChartCurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"

type AreaChartOptions = {
  /**
   * Chart data.
   */
  data: any[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaChartSeries[]
  /**
   *  The key of a group of data which should be unique in an area chart.
   */
  dataKey: string
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   *  Determines whether the chart area should be represented with a gradient instead of the solid color.
   *
   * @default false
   */
  withGradient?: boolean
  /**
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: AreaChartCurveType
  /**
   *  Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: Omit<DotProps, "ref">
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: Omit<DotProps, "ref">
  /**
   *  Stroke width for the chart areas, `2` by default
   */
  strokeWidth?: number
  /**
   *  Props passed down to recharts `AreaChart` component
   */
  areaChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsAreaChart>
  /**
   *  Controls fill opacity of all areas, `0.2` by default
   */
  fillOpacity?: number
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases. A tuple may include theme colors reference or any valid CSS colors `['green.7', 'red.7']` by default.
   */
  splitColors?: [string, string]
  /**
   *  Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   *  Determines whether points with `null` values should be connected, `true` by default
   */
  connectNulls?: boolean
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * If `true`, Y axis is visible.
   *
   * @default true
   */
  withYAxis?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   * The option is the configuration of tick lines.
   *
   * @default `y`
   */
  tickLine?: string
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: string
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  orientation?: LayoutType
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLines?: ReferenceLineProps[]
  /**
   * Dash array for the grid lines and cursor.
   *
   * @default '5 5'
   */
  strokeDasharray?: string | number
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
}

export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions

function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`
}

export const AreaChart = forwardRef<AreaChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
  const {
    className,
    data,
    withXAxis = true,
    withYAxis = true,
    withDots = true,
    withTooltip = true,
    withLegend = false,
    connectNulls = true,
    strokeWidth = 2,
    tooltipAnimationDuration = 0,
    fillOpacity = 0.2,
    tickLine = "y",
    strokeDasharray = "5 5",
    curveType = "monotone",
    gridAxis = "x",
    type = "default",
    splitColors = ["green.7", "red.7"],
    orientation = "horizontal",
    referenceLines,
    dataKey,
    unit,
    series,
    valueFormatter,
    withGradient,
    dotProps,
    activeDotProps,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = useAreaChart(computedProps)

  const css: CSSUIObject = styles
  const baseId = useId()
  const splitId = `${baseId}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const _withGradient =
    typeof withGradient === "boolean" ? withGradient : type === "default"
  const stacked = type === "stacked" || type === "percent"
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const areas = series.map((item) => {
    const id = `${baseId}-${item.color.replace(/[^a-zA-Z0-9]/g, "")}`
    const color = item.color
    const dimmed = shouldHighlight && highlightedArea !== item.name

    return (
      <Fragment key={item.name}>
        <defs>
          <AreaGradient
            color={color}
            withGradient={_withGradient}
            id={id}
            fillOpacity={fillOpacity}
          />
        </defs>
        <Area
          // {...getStyles('area')}
          activeDot={
            withDots
              ? {
                  fill: "#ffffff",
                  stroke: color,
                  strokeWidth: 2,
                  r: 4,
                  ...activeDotProps,
                }
              : false
          }
          dot={
            withDots
              ? {
                  fill: color,
                  fillOpacity: dimmed ? 0 : 1,
                  strokeWidth: 2,
                  r: 4,
                  ...dotProps,
                }
              : false
          }
          name={item.name}
          type={curveType}
          dataKey={item.name}
          fill={type === "split" ? `url(#${splitId})` : `url(#${id})`}
          strokeWidth={strokeWidth}
          stroke={color}
          isAnimationActive={false}
          connectNulls={connectNulls}
          stackId={stacked ? "stack" : undefined}
          fillOpacity={dimmed ? 0 : 1}
          strokeOpacity={dimmed ? 0.5 : 1}
          strokeDasharray={item.strokeDasharray}
        />
      </Fragment>
    )
  })

  const referenceLinesItems = referenceLines?.map((line, index) => {
    const color = "#000000"
    return (
      <ReferenceLine
        key={index}
        stroke={line.color ? color : "var(--chart-grid-color)"}
        strokeWidth={1}
        {...line}
        // label={{
        //   value: line.label,
        //   fill: line.color ? color : 'currentColor',
        //   fontSize: 12,
        //   position: line.labelPosition ?? 'insideBottomLeft',
        // }}
        // {...getStyles('referenceLine')}
      />
    )
  })

  return (
    <ui.div ref={ref} className={cx("ui-line-chart", className)} __css={css}>
      <ChartProvider value={{ styles }}>
        <AreaChartProvider value={{}}>
          <ResponsiveContainer width={730} height={250}>
            <ReChartsAreaChart
              data={data}
              stackOffset={type === "percent" ? "expand" : undefined}
              layout={orientation}
            >
              {referenceLinesItems}
              {withLegend ? <Legend /> : null}
              {/* {withLegend && (
            <Legend
              verticalAlign="top"
              content={(payload) => (
                <ChartLegend
                  payload={payload.payload}
                  onHighlight={setHighlightedArea}
                  legendPosition={legendProps?.verticalAlign || 'top'}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                />
              )}
              height={44}
              // {...legendProps}
            />
          )} */}

              <CartesianGrid
                strokeDasharray={strokeDasharray}
                vertical={gridAxis === "y" || gridAxis === "xy"}
                horizontal={gridAxis === "x" || gridAxis === "xy"}
              />

              <XAxis
                hide={!withXAxis}
                {...(orientation === "vertical"
                  ? { type: "number" }
                  : { dataKey })}
                tick={{
                  transform: "translate(0, 10)",
                  fontSize: 12,
                  fill: "currentColor",
                }}
                stroke=""
                interval="preserveStartEnd"
                tickLine={withXTickLine ? { stroke: "currentColor" } : false}
                minTickGap={5}
              />

              <YAxis
                hide={!withYAxis}
                axisLine={false}
                {...(orientation === "vertical"
                  ? { dataKey, type: "category" }
                  : { type: "number" })}
                tickLine={withYTickLine ? { stroke: "currentColor" } : false}
                tick={{
                  transform: "translate(-10, 0)",
                  fontSize: 12,
                  fill: "currentColor",
                }}
                allowDecimals
                unit={unit}
                tickFormatter={
                  type === "percent" ? valueToPercent : valueFormatter
                }
              />

              {withTooltip ? <Tooltip /> : null}
              {/* {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={isAnimationActive}
              position={{ y: 0 }}
              cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray,
              }}
              content={({ label, payload }) => (
                <ChartTooltip
                  label={label}
                  payload={payload}
                  unit={unit}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  series={series}
                  valueFormatter={valueFormatter}
                />
              )}
              // {...tooltipProps}
            />
          )} */}

              {/* {type === 'split' && (
            <defs>
              <AreaSplit
                colors={splitColors!}
                id={splitId}
                offset={splitOffset ?? getDefaultSplitOffset({ data: data!, series })}
                fillOpacity={fillOpacity}
              />
            </defs>
          )} */}

              {areas}
            </ReChartsAreaChart>
          </ResponsiveContainer>
        </AreaChartProvider>
      </ChartProvider>
    </ui.div>
  )
})

// area gradient
interface AreaGradientProps {
  color: string
  id: string
  withGradient: boolean | undefined
  fillOpacity: number | undefined
}

function AreaGradient({
  color,
  id,
  withGradient,
  fillOpacity,
}: AreaGradientProps) {
  return (
    <>
      {withGradient ? (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor={color} stopOpacity={0.01} />
        </linearGradient>
      ) : (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity={fillOpacity ?? 0.2} />
        </linearGradient>
      )}
    </>
  )
}
