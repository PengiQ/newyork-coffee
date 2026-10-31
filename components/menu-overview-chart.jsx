"use client";

import { Bar } from "@/components/charts/bar";
import { BarChart } from "@/components/charts/bar-chart";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip";
import { Grid } from "@/components/charts/grid";

const menuCounts = [
  { category: "Signature", items: 4 },
  { category: "Hot", items: 10 },
  { category: "Iced", items: 5 },
  { category: "Frappes", items: 6 },
  { category: "Other", items: 6 },
  { category: "Breakfast", items: 13 },
];

export default function MenuOverviewChart() {
  return (
    <div className="menu-overview" data-reveal>
      <div className="menu-overview-copy">
        <p className="eyebrow">A quick look around</p>
        <h3>A little bit of<br /><em>everything.</em></h3>
        <p>Number of items listed in each global menu category. The Pakistan menu may be different.</p>
      </div>
      <div className="menu-overview-chart" role="img" aria-label="Bar chart showing global menu item counts: signature 4, hot espresso 10, iced espresso 5, frappes 6, not coffee 6, breakfast 13.">
        <BarChart data={menuCounts} xDataKey="category" aspectRatio="2.1 / 1" animationDuration={1250} margin={{ top: 20, right: 15, bottom: 45, left: 36 }}>
          <Grid horizontal />
          <Bar dataKey="items" fill="var(--chart-line-primary)" showValue lineCap="round" />
          <BarXAxis showAllLabels tickerHalfWidth={38} />
          <ChartTooltip />
        </BarChart>
      </div>
      <span className="menu-overview-footnote">GLOBAL MENU LISTING · DOES NOT REPRESENT THE PAKISTAN MENU</span>
    </div>
  );
}
