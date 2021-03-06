// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,
  // BarSeriesOption,
  // BoxplotChart,
  // BoxplotSeriesOption,
  // CandlestickChart,
  // CandlestickSeriesOption,
  // CustomChart,
  // CustomSeriesOption,
  // EffectScatterChart,
  // EffectScatterSeriesOption,
  // FunnelChart,
  // FunnelSeriesOption,
  // GaugeChart,
  // GaugeSeriesOption,
  // GraphChart,
  // GraphSeriesOption,
  // HeatmapChart,
  // HeatmapSeriesOption,
  LineChart,
  // LineSeriesOption
  // LinesChart,
  // LinesSeriesOption,
  // MapChart,
  // MapSeriesOption,
  // ParallelChart,
  // ParallelSeriesOption,
  // PictorialBarChart,
  // PictorialBarSeriesOption,
  PieChart,
  // PieSeriesOption,
  // RadarChart,
  // RadarSeriesOption,
  // SankeyChart,
  // SankeySeriesOption,
  // ScatterChart,
  // ScatterSeriesOption,
  SunburstChart,
  // SunburstSeriesOption,
  // ThemeRiverChart,
  // ThemeRiverSeriesOption,
  TreeChart,
  // TreeSeriesOption,
  TreemapChart
  // TreemapSeriesOption
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  // AriaComponent,
  // AriaComponentOption,
  AxisPointerComponent,
  // AxisPointerComponentOption,
  // BrushComponent,
  // BrushComponentOption,
  // CalendarComponent,
  // CalendarComponentOption,
  // DataZoomComponent,
  // DataZoomComponentOption,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // DatasetComponent,
  // DatasetComponentOption,
  // GeoComponent,
  // GeoComponentOption,
  // GraphicComponent,
  // GraphicComponentOption,
  GridComponent,
  // GridComponentOption,
  // GridSimpleComponent,
  LegendComponent,
  // LegendComponentOption,
  // LegendPlainComponent,
  // LegendScrollComponent,
  // MarkAreaComponent,
  // MarkAreaComponentOption,
  // MarkLineComponent,
  // MarkLineComponentOption,
  // MarkPointComponent,
  // MarkPointComponentOption,
  // ParallelComponent,
  // ParallelComponentOption,
  // PolarComponent,
  // PolarComponentOption,
  // RadarComponent,
  // RadarComponentOption,
  // SingleAxisComponent,
  // SingleAxisComponentOption,
  // TimelineComponent,
  // TimelineComponentOption,
  TitleComponent,
  // TitleComponentOption,
  // ToolboxComponent,
  // ToolboxComponentOption,
  TooltipComponent
  // TooltipComponentOption
  // TransformComponent,
  // VisualMapComponent,
  // VisualMapComponentOption,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  BarChart,
  // BarSeriesOption,
  // BoxplotChart,
  // BoxplotSeriesOption,
  // CandlestickChart,
  // CandlestickSeriesOption,
  // CustomChart,
  // CustomSeriesOption,
  // EffectScatterChart,
  // EffectScatterSeriesOption,
  // FunnelChart,
  // FunnelSeriesOption,
  // GaugeChart,
  // GaugeSeriesOption,
  // GraphChart,
  // GraphSeriesOption,
  // HeatmapChart,
  // HeatmapSeriesOption,
  LineChart,
  // LineSeriesOption,
  // LinesChart,
  // LinesSeriesOption,
  // MapChart,
  // MapSeriesOption,
  // ParallelChart,
  // ParallelSeriesOption,
  // PictorialBarChart,
  // PictorialBarSeriesOption,
  PieChart,
  // PieSeriesOption,
  // RadarChart,
  // RadarSeriesOption,
  // SankeyChart,
  // SankeySeriesOption,
  // ScatterChart,
  // ScatterSeriesOption,
  SunburstChart,
  // SunburstSeriesOption,
  // ThemeRiverChart,
  // ThemeRiverSeriesOption,
  TreeChart,
  // TreeSeriesOption,
  TreemapChart,
  // TreemapSeriesOption,
  // AriaComponent,
  // AriaComponentOption,
  AxisPointerComponent,
  // AxisPointerComponentOption,
  // BrushComponent,
  // BrushComponentOption,
  // CalendarComponent,
  // CalendarComponentOption,
  // DataZoomComponent,
  // DataZoomComponentOption,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // DatasetComponent,
  // DatasetComponentOption,
  // GeoComponent,
  // GeoComponentOption,
  // GraphicComponent,
  // GraphicComponentOption,
  GridComponent,
  // GridComponentOption,
  // GridSimpleComponent,
  LegendComponent,
  // LegendComponentOption,
  // LegendPlainComponent,
  // LegendScrollComponent,
  // MarkAreaComponent,
  // MarkAreaComponentOption,
  // MarkLineComponent,
  // MarkLineComponentOption,
  // MarkPointComponent,
  // MarkPointComponentOption,
  // ParallelComponent,
  // ParallelComponentOption,
  // PolarComponent,
  // PolarComponentOption,
  // RadarComponent,
  // RadarComponentOption,
  // SingleAxisComponent,
  // SingleAxisComponentOption,
  // TimelineComponent,
  // TimelineComponentOption,
  TitleComponent,
  // TitleComponentOption,
  // ToolboxComponent,
  // ToolboxComponentOption,
  TooltipComponent,
  // TooltipComponentOption,
  // TransformComponent,
  // VisualMapComponent,
  // VisualMapComponentOption,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts
