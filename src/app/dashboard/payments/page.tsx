import { DashboardPageTitle, Panel } from "@/components/dashboard/primitives";
import { CircularProgress, BarChart, DonutChart, AreaChart } from "@/components/dashboard/charts";
import { TrendMetricCard } from "@/components/dashboard/enhanced-metrics";
import { paymentMethodMix, paymentsByRegion } from "@/lib/mock-data/dashboard";
import { AlertCircle, DollarSign, CreditCard, CheckCircle } from "lucide-react";

export default function PaymentsPage() {
  // Revenue breakdown for donut chart
  const revenueBreakdown = [
    { name: "Registrations", value: 18500, color: "#84CC16" },
    { name: "Sponsorships", value: 5000, color: "#10B981" },
    { name: "Add-ons", value: 1080, color: "#3B82F6" },
  ];

  // Revenue timeline data
  const revenueTimeline = [
    { name: "Week 1", value: 3200 },
    { name: "Week 2", value: 6800 },
    { name: "Week 3", value: 12400 },
    { name: "Week 4", value: 18200 },
    { name: "Week 5", value: 22100 },
    { name: "Week 6", value: 24580 },
  ];

  // Transform payment method data for donut chart
  const paymentMethodData = paymentMethodMix.map((item) => ({
    name: item.method,
    value: item.share,
  }));

  // Transform regional data for bar chart
  const regionalData = paymentsByRegion.map((item) => ({
    name: item.region.split(" / ")[0], // Shorten names for chart
    value: item.amount,
  }));

  // Outstanding payments mock data
  const outstandingPayments = [
    { name: "J. Smith", amount: 300, daysOverdue: 5, status: "overdue" },
    { name: "K. Brown", amount: 300, daysOverdue: -2, status: "due-soon" },
    { name: "T. Wilson", amount: 300, daysOverdue: 8, status: "overdue" },
    { name: "M. Davis", amount: 300, daysOverdue: 0, status: "paid" },
    { name: "R. Chen", amount: 300, daysOverdue: -5, status: "upcoming" },
  ];

  return (
    <div>
      <DashboardPageTitle
        title="Global Payments"
        subtitle="Regional payment performance across cards, bank transfer, and mobile money."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
            Export Finance Report
          </button>
        }
      />

      {/* Revenue Dashboard */}
      <section className="mb-6">
        <Panel title="Total Revenue" subtitle="Current event">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Circular Progress */}
            <div className="flex flex-col items-center justify-center">
              <CircularProgress
                value={24580}
                max={30000}
                size={140}
                strokeWidth={14}
                color="#84CC16"
              />
              <div className="mt-4 text-center">
                <p className="text-2xl font-bold text-charcoal font-heading">$24,500</p>
                <p className="text-sm text-slate mt-1">Goal: $30,000</p>
                <p className="text-xs text-success font-semibold mt-1">82% complete</p>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal mb-3">Revenue Breakdown</h4>
              <DonutChart
                data={revenueBreakdown}
                height={220}
                innerRadius={50}
                outerRadius={75}
                showLegend={true}
              />
            </div>

            {/* Payment Method Mix */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal mb-3">Payment Methods</h4>
              <DonutChart
                data={paymentMethodData}
                height={220}
                innerRadius={50}
                outerRadius={75}
                showLegend={true}
                colors={["#84CC16", "#10B981", "#3B82F6", "#F59E0B"]}
              />
            </div>
          </div>
        </Panel>
      </section>

      {/* Key Metrics */}
      <section className="mb-6 grid gap-6 md:grid-cols-3">
        <TrendMetricCard
          label="Gross Collected"
          value="$24,580"
          trend="up"
          delta="+9.4%"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Payout Ready"
          value="$22,910"
          trend="up"
          delta="After fees"
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Failed Transactions"
          value="7"
          trend="down"
          delta="Needs follow-up"
          icon={<AlertCircle className="w-5 h-5" />}
        />
      </section>

      {/* Revenue Timeline */}
      <section className="mb-6">
        <Panel title="Revenue Timeline" subtitle="Cumulative revenue over time">
          <AreaChart
            data={revenueTimeline}
            dataKey="value"
            xAxisKey="name"
            height={280}
            color="#84CC16"
          />
        </Panel>
      </section>

      {/* Outstanding Payments */}
      <section className="mb-6">
        <Panel title="Outstanding Payments" subtitle="16 players • $4,800 total">
          <div className="space-y-2">
            {outstandingPayments.map((payment) => {
              const statusConfig = {
                overdue: {
                  icon: "🔴",
                  text: `Overdue ${payment.daysOverdue} days`,
                  bgClass: "bg-error/5 border-error/20",
                },
                "due-soon": {
                  icon: "🟡",
                  text: `Due in ${Math.abs(payment.daysOverdue)} days`,
                  bgClass: "bg-warning/5 border-warning/20",
                },
                paid: {
                  icon: "🟢",
                  text: "Paid ✓",
                  bgClass: "bg-success/5 border-success/20",
                },
                upcoming: {
                  icon: "⚪",
                  text: `Due in ${Math.abs(payment.daysOverdue)} days`,
                  bgClass: "bg-mist border-gray/10",
                },
              };

              const config = statusConfig[payment.status as keyof typeof statusConfig];

              return (
                <div
                  key={payment.name}
                  className={`flex items-center justify-between p-3 rounded-[var(--radius-md)] border ${config.bgClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{config.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{payment.name}</p>
                      <p className="text-xs text-slate">{config.text}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-charcoal">${payment.amount}</p>
                    {payment.status !== "paid" && (
                      <button className="text-xs text-lime hover:text-lime-light font-semibold">
                        Remind
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </section>

      {/* Revenue by Region */}
      <section>
        <Panel title="Revenue by Region" subtitle="Current cycle">
          <BarChart
            data={regionalData}
            height={280}
            colors={["#84CC16", "#10B981", "#3B82F6"]}
          />
        </Panel>
      </section>
    </div>
  );
}
