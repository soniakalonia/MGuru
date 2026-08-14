import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import {
  Search, Megaphone, Share2, Linkedin, FileText, Mail,
  TrendingUp, TrendingDown, ArrowUpRight,
} from 'lucide-react';

echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

type Metric = { label: string; value: string; change: number };

type Segment = {
  name: string;
  value: number;
  color: string;
  icon: typeof Search;
  summary: string;
  metrics: Metric[];
};

const segments: Segment[] = [
  {
    name: 'SEO',
    value: 28,
    color: '#2563eb',
    icon: Search,
    summary: 'Organic search drove 142K visits this quarter with 38 keywords ranking in the top 3 positions.',
    metrics: [
      { label: 'Organic Traffic', value: '142K', change: 18 },
      { label: 'Top-3 Keywords', value: '38', change: 12 },
      { label: 'Avg. Position', value: '4.2', change: -9 },
      { label: 'Click-Through Rate', value: '3.8%', change: 6 },
    ],
  },
  {
    name: 'Paid Ads',
    value: 22,
    color: '#1e6f5c',
    icon: Megaphone,
    summary: 'Google and Meta ads delivered 1.2M impressions with a 4.1x return on ad spend this quarter.',
    metrics: [
      { label: 'Impressions', value: '1.2M', change: 24 },
      { label: 'ROAS', value: '4.1x', change: 15 },
      { label: 'Cost / Click', value: '₹38', change: -7 },
      { label: 'Conversions', value: '3,840', change: 21 },
    ],
  },
  {
    name: 'Social Media',
    value: 18,
    color: '#e67e22',
    icon: Share2,
    summary: 'Instagram and X campaigns reached 890K users, growing follower base by 12K in Q3.',
    metrics: [
      { label: 'Reach', value: '890K', change: 31 },
      { label: 'New Followers', value: '12.4K', change: 19 },
      { label: 'Engagement Rate', value: '5.2%', change: 8 },
      { label: 'Shares', value: '6,200', change: 14 },
    ],
  },
  {
    name: 'LinkedIn',
    value: 14,
    color: '#1a5276',
    icon: Linkedin,
    summary: 'LinkedIn thought-leadership content generated 240K impressions and 1,800 qualified leads.',
    metrics: [
      { label: 'Impressions', value: '240K', change: 27 },
      { label: 'Profile Visits', value: '18K', change: 16 },
      { label: 'Leads Generated', value: '1,800', change: 22 },
      { label: 'Engagement Rate', value: '6.1%', change: 9 },
    ],
  },
  {
    name: 'Content Marketing',
    value: 10,
    color: '#7f8c8d',
    icon: FileText,
    summary: '48 blog posts and 6 whitepapers published, attracting 96K organic reads this quarter.',
    metrics: [
      { label: 'Pieces Published', value: '54', change: 10 },
      { label: 'Total Reads', value: '96K', change: 17 },
      { label: 'Avg. Time on Page', value: '3m 12s', change: 5 },
      { label: 'Backlinks Earned', value: '128', change: 13 },
    ],
  },
  {
    name: 'Email Marketing',
    value: 8,
    color: '#9b59b6',
    icon: Mail,
    summary: 'Weekly newsletters and drip campaigns reached 54K subscribers with a 24% open rate.',
    metrics: [
      { label: 'Emails Sent', value: '216K', change: 8 },
      { label: 'Open Rate', value: '24.3%', change: 4 },
      { label: 'Click Rate', value: '6.8%', change: 11 },
      { label: 'Unsubscribe Rate', value: '0.2%', change: -2 },
    ],
  },
];

export default function DonutChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [selected, setSelected] = useState<Segment>(segments[0]);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    chartInstance.current = chart;

    chart.setOption({
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        borderColor: '#cbd5e1',
        borderWidth: 1,
        borderRadius: 12,
        padding: [10, 14],
        textStyle: {
          color: '#1e293b',
          fontSize: 13,
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        formatter: (params: { name: string; value: number; percent: number; color: string }) => `
          <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;">
            <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${params.color};"></span>
            ${params.name}
          </div>
          <div style="margin-top:4px;color:#64748b;font-size:12px;">
            ${params.percent}% of marketing budget &middot; ₹${params.value}L allocated
          </div>
        `,
        extraCssText: 'box-shadow: 0 8px 24px rgba(37,99,235,0.12);',
      },
      series: [
        {
          name: 'Marketing Budget Allocation',
          type: 'pie',
          radius: ['54%', '80%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 3,
          },
          label: {
            show: true,
            position: 'outside',
            color: '#475569',
            fontSize: 11,
            fontWeight: 500,
            fontFamily: 'Inter, system-ui, sans-serif',
            formatter: '{b}\n{d}%',
            lineHeight: 16,
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 8,
            lineStyle: { color: '#cbd5e1' },
          },
          emphasis: {
            scale: true,
            scaleSize: 10,
            itemStyle: {
              shadowBlur: 18,
              shadowColor: 'rgba(37,99,235,0.28)',
            },
            label: { fontSize: 12, fontWeight: 700 },
          },
          data: segments.map((s) => ({
            name: s.name,
            value: s.value,
            itemStyle: { color: s.color },
          })),
          animationType: 'scale',
          animationEasing: 'cubicOut',
          animationDuration: 900,
          animationDelay: (idx: number) => idx * 100,
        },
      ],
    });

    const handleClick = (params: { name: string }) => {
      const seg = segments.find((s) => s.name === params.name);
      if (seg) setSelected(seg);
    };
    chart.on('click', handleClick);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div className="relative rounded-2xl border border-slatey-200 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slatey-500">Marketing Performance</p>
          <p className="font-display text-lg font-bold text-slatey-900">Q3 Channel Overview</p>
        </div>
        <span className="badge">
          <TrendingUp className="h-3.5 w-3.5" /> ₹100L Budget
        </span>
      </div>

      <div ref={chartRef} className="mt-2 h-[300px] w-full" />

      {/* Detail panel */}
      <div
        key={selected.name}
        className="mt-4 animate-fade-in rounded-xl border p-5 transition-colors"
        style={{ borderColor: selected.color + '40', backgroundColor: selected.color + '0a' }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: selected.color }}
            >
              <selected.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-slatey-900">{selected.name}</p>
              <p className="text-xs text-slatey-500">
                {selected.value}% of budget &middot; ₹{selected.value}L allocated
              </p>
            </div>
          </div>
          <span
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: selected.color + '1a',
              color: selected.color,
            }}
          >
            <ArrowUpRight className="h-3.5 w-3.5" /> Active
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slatey-600">{selected.summary}</p>

        {/* Metrics grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {selected.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slatey-100 bg-white/70 p-3"
            >
              <p className="text-xs text-slatey-500">{m.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-display text-lg font-bold text-slatey-900">{m.value}</p>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold ${
                    m.change >= 0 ? 'text-emerald-600' : 'text-rose-500'
                  }`}
                >
                  {m.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(m.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slatey-400">
        Click a segment to view detailed metrics
      </p>
    </div>
  );
}
