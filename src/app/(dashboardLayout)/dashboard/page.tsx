"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useGetJoiningRequestStatsQuery } from "@/redux/features/stats/stats.api";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Color palette
const COLORS = ["#6366F1", "#22C55E", "#F97316", "#06B6D4"]; 
const BG_COLORS = ["bg-indigo-50", "bg-green-50", "bg-orange-50", "bg-sky-50"];
const TEXT_COLORS = ["text-indigo-800", "text-green-800", "text-orange-800", "text-sky-800"];
const TITLE_COLORS = ["text-indigo-700", "text-green-700", "text-orange-700", "text-sky-700"];

const DashboardAnalyticsPage = () => {
  const { data } = useGetJoiningRequestStatsQuery();
  // Temporary static data for demo
  const stats = {
    totalRequest: 80,
    requestInToday: 5,
    requestInLast7Days: 16,
    requestInLast30Days: 40
  };

  const chartData = [
    { name: "Today", value: stats?.requestInToday },
    { name: "Last 7 Days", value: stats?.requestInLast7Days },
    { name: "Last 30 Days", value: stats?.requestInLast30Days },
    { name: "Total", value: stats?.totalRequest },
  ];

  const statsItems = [
    { label: "Total Requests", value: stats.totalRequest },
    { label: "Today's Requests", value: stats.requestInToday },
    { label: "Last 7 Days", value: stats.requestInLast7Days },
    { label: "Last 30 Days", value: stats.requestInLast30Days },
  ];

  return (
    <div className="p-4 md:p-6 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard Analytics</h1>

{/* ---------- Improved Responsive Stats Cards ---------- */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
  {statsItems.map((item, index) => (
    <Card
      key={index}
      className={`
        py-3 md:py-4 lg:py-5
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
        ${BG_COLORS[index]} 
        border border-white/20 dark:border-white/10
        rounded-2xl
      `}
    >
      {/* Optional: subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      <CardHeader className="p-4">
        <CardTitle className={`
        font-semibold
          ${TITLE_COLORS[index]}
        `}>
          {item.label}
        </CardTitle>
      </CardHeader>

      <CardContent className={`
       font-semibold
        ${TEXT_COLORS[index]}
      `}>
        {item.value}
      </CardContent>
    </Card>
  ))}
</div>


      {/* ---------- Bar + Pie Row (Responsive) ---------- */}
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Bar Chart */}
        <Card className="rounded-xl flex-1">
          <CardHeader>
            <CardTitle className="text-xl">Request Overview (Bar Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 md:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="rounded-xl flex-1">
          <CardHeader>
            <CardTitle className="text-xl">Request Distribution (Pie Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 md:h-[350px] flex items-center justify-center">
              <ResponsiveContainer width="80%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    outerRadius={100}
                    innerRadius={50}
                    paddingAngle={5}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ---------- Line Chart ---------- */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl">Trend Overview (Line Chart)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64 md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={COLORS[0]}
                  strokeWidth={3}
                  dot={{ r: 5, stroke: COLORS[0], strokeWidth: 2, fill: "white" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardAnalyticsPage;
