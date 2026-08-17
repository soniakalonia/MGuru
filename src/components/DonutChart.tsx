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
    summary: '142K visits · 38 keywords in top 3',
    metrics: [
      { label: 'Traffic', value: '142K', change: 18 },
      { label: 'Top-3 KW', value: '38', change: 12 },
      { label: 'Avg. Position', value: '4.2', change: -9 },
      { label: 'CTR', value: '3.8%', change: 6 },
    ],
  },
  {
    name: 'Paid Ads',
    value: 22,
    color: '#1e6f5c',
    icon: Megaphone,
    summary: '1.2M impressions · 4.1x ROAS',
    metrics: [
      { label: 'Impressions', value: '1.2M', change: 24 },
      { label: 'ROAS', value: '4.1x', change: 15 },
      { label: 'Cost / Click', value: '₹38', change: -7 },
      { label: 'Conversions', value: '3.8K', change: 21 },
    ],
  },
  {
    name: 'Social Media',
    value: 18,
    color: '#e67e22',
    icon: Share2,
    summary: '890K reach · 5.2% engagement',
    metrics: [
      { label: 'Reach', value: '890K', change: 31 },
      { label: 'New Followers', value: '12.4K', change: 19 },
      { label: 'Engagement', value: '5.2%', change: 8 },
      { label: 'Shares', value: '6.2K', change: 14 },
    ],
  },
  {
    name: 'LinkedIn',
    value: 14,
    color: '#1a5276',
    icon: Linkedin,
    summary: '240K impressions · 1.8K leads',
    metrics: [
      { label: 'Impressions', value: '240K', change: 27 },
      { label: 'Profile Visits', value: '18K', change: 16 },
      { label: 'Leads', value: '1.8K', change: 22 },
      { label: 'Engagement', value: '6.1%', change: 9 },
    ],
  },
  {
    name: 'Content',
    value: 10,
    color: '#7f8c8d',
    icon: FileText,
    summary: '54 pieces · 96K reads',
    metrics: [
      { label: 'Pieces', value: '54', change: 10 },
      { label: 'Total Reads', value: '96K', change: 17 },
      { label: 'Avg. Time', value: '3m 12s', change: 5 },
      { label: 'Backlinks', value: '128', change: 13 },
    ],
  },
  {
    name: 'Email',
    value: 8,
    color: '#9b59b6',
    icon: Mail,
    summary: '216K sent · 24% open rate',
    metrics: [
      { label: 'Emails Sent', value: '216K', change: 8 },
      { label: 'Open Rate', value: '24.3%', change: 4 },
      { label: 'Click Rate', value: '6.8%', change: 11 },
      { label: 'Unsubscribe', value: '0.2%', change: -2 },
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
            ${params.percent}% of budget &middot; ₹${params.value}L allocated
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
          <p className="font-display text-lg font-bold text-slatey-900">Channel Overview</p>
        </div>
        <span className="badge">
          <TrendingUp className="h-3.5 w-3.5" /> ₹100L Budget
        </span>
      </div>

      <div ref={chartRef} className="mt-2 h-[280px] w-full" />

      {/* Compact detail panel */}
      <div
        key={selected.name}
        className="mt-4 animate-fade-in rounded-xl border p-4 transition-colors"
        style={{ borderColor: selected.color + '40', backgroundColor: selected.color + '08' }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: selected.color }}
            >
              <selected.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-slatey-900">{selected.name}</p>
              <p className="text-xs text-slatey-500">
                {selected.value}% · ₹{selected.value}L
              </p>
            </div>
          </div>
          <span
            className="flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{
              backgroundColor: selected.color + '15',
              color: selected.color,
            }}
          >
            <ArrowUpRight className="h-3 w-3" /> Active
          </span>
        </div>

        <p className="mt-2 text-xs text-slatey-600">{selected.summary}</p>

        {/* Compact metrics grid */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {selected.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slatey-100 bg-white/60 px-3 py-2"
            >
              <p className="text-[10px] text-slatey-500">{m.label}</p>
              <div className="flex items-center gap-1.5">
                <p className="font-display text-sm font-bold text-slatey-900">{m.value}</p>
                <span
                  className={`flex items-center gap-0.5 text-[10px] font-semibold ${
                    m.change >= 0 ? 'text-emerald-600' : 'text-rose-500'
                  }`}
                >
                  {m.change >= 0 ? (
                    <TrendingUp className="h-2.5 w-2.5" />
                  ) : (
                    <TrendingDown className="h-2.5 w-2.5" />
                  )}
                  {Math.abs(m.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}