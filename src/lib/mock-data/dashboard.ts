export type Trend = "up" | "down" | "flat";

export interface MetricStat {
  label: string;
  value: string;
  trend: Trend;
  delta: string;
}

export interface EventRow {
  id: string;
  name: string;
  organizer: string;
  date: string;
  players: number;
  revenue: number;
  status: "Live" | "Upcoming" | "Closed";
}

export interface PairingGroup {
  teeTime: string;
  hole: string;
  players: Array<{ name: string; handicap: number; preference: string }>;
}

export interface LeaderboardEntry {
  rank: number;
  player: string;
  gross: number;
  net: number;
  thru: string;
  movement: Trend;
}

export interface PaymentRegion {
  region: string;
  amount: number;
  methods: string;
}

export interface SponsorRow {
  brand: string;
  tier: "Gold" | "Silver" | "Bronze";
  reach: number;
  clicks: number;
  leads: number;
  roi: string;
}

export interface CampaignRow {
  campaign: string;
  audience: string;
  sent: number;
  opened: string;
  clicked: string;
  status: "Scheduled" | "Sent" | "Draft";
}

export const metrics: MetricStat[] = [
  { label: "Active Events", value: "12", trend: "up", delta: "+3 this month" },
  { label: "Total Players", value: "486", trend: "up", delta: "+14.2%" },
  { label: "Gross Revenue", value: "$24,580", trend: "up", delta: "+9.4%" },
  { label: "Sponsor Pipeline", value: "$38,000", trend: "flat", delta: "unchanged" },
];

export const monthlyRevenue = [
  { month: "Sep", value: 8200 },
  { month: "Oct", value: 10200 },
  { month: "Nov", value: 11900 },
  { month: "Dec", value: 9800 },
  { month: "Jan", value: 13100 },
  { month: "Feb", value: 14900 },
];

export const events: EventRow[] = [
  {
    id: "EVT-2026-012",
    name: "Capital Charity Invitational",
    organizer: "Hope Foundation",
    date: "Mar 21, 2026",
    players: 120,
    revenue: 6800,
    status: "Upcoming",
  },
  {
    id: "EVT-2026-008",
    name: "Executive Cup UAE",
    organizer: "Falcon Golf Club",
    date: "Mar 10, 2026",
    players: 84,
    revenue: 9200,
    status: "Live",
  },
  {
    id: "EVT-2026-006",
    name: "Lakeside Members Open",
    organizer: "Lakeside Association",
    date: "Feb 25, 2026",
    players: 96,
    revenue: 5400,
    status: "Closed",
  },
  {
    id: "EVT-2026-004",
    name: "Corporate Scramble Classic",
    organizer: "Kismet Partners",
    date: "Feb 18, 2026",
    players: 72,
    revenue: 3180,
    status: "Closed",
  },
];

export const pairings: PairingGroup[] = [
  {
    teeTime: "07:30 AM",
    hole: "#1",
    players: [
      { name: "A. Brooks", handicap: 8, preference: "Competitive" },
      { name: "J. Kamau", handicap: 10, preference: "Competitive" },
      { name: "M. Chen", handicap: 9, preference: "Networking" },
      { name: "R. Patel", handicap: 11, preference: "Networking" },
    ],
  },
  {
    teeTime: "07:40 AM",
    hole: "#10",
    players: [
      { name: "S. Mitchell", handicap: 18, preference: "Casual" },
      { name: "G. Nakamya", handicap: 20, preference: "Casual" },
      { name: "D. Okonkwo", handicap: 17, preference: "Casual" },
      { name: "L. Smith", handicap: 19, preference: "Networking" },
    ],
  },
  {
    teeTime: "07:50 AM",
    hole: "#1",
    players: [
      { name: "T. Brown", handicap: 4, preference: "Competitive" },
      { name: "K. Yang", handicap: 5, preference: "Competitive" },
      { name: "E. Garcia", handicap: 6, preference: "Competitive" },
      { name: "N. Hill", handicap: 4, preference: "Competitive" },
    ],
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, player: "K. Yang", gross: 69, net: 65, thru: "F", movement: "up" },
  { rank: 2, player: "T. Brown", gross: 70, net: 66, thru: "F", movement: "flat" },
  { rank: 3, player: "M. Chen", gross: 71, net: 67, thru: "F", movement: "up" },
  { rank: 4, player: "R. Patel", gross: 72, net: 68, thru: "17", movement: "down" },
  { rank: 5, player: "J. Kamau", gross: 73, net: 69, thru: "16", movement: "up" },
  { rank: 6, player: "A. Brooks", gross: 74, net: 70, thru: "15", movement: "down" },
];

export const paymentsByRegion: PaymentRegion[] = [
  { region: "US / Europe", amount: 12840, methods: "Cards, Apple Pay, Bank" },
  { region: "UAE", amount: 6120, methods: "Cards, Bank Transfer" },
  { region: "Africa", amount: 5620, methods: "M-Pesa, MoMo, Paystack" },
];

export const paymentMethodMix = [
  { method: "Card", share: 52 },
  { method: "Mobile Money", share: 29 },
  { method: "Bank Transfer", share: 13 },
  { method: "Cash / Check", share: 6 },
];

export const sponsors: SponsorRow[] = [
  { brand: "TitlePro", tier: "Gold", reach: 12400, clicks: 882, leads: 73, roi: "3.8x" },
  { brand: "GreenLine Bank", tier: "Gold", reach: 11020, clicks: 640, leads: 54, roi: "3.1x" },
  { brand: "Summit Motors", tier: "Silver", reach: 8920, clicks: 372, leads: 29, roi: "2.2x" },
  { brand: "Fairway Water", tier: "Bronze", reach: 6180, clicks: 219, leads: 12, roi: "1.6x" },
];

export const campaigns: CampaignRow[] = [
  {
    campaign: "48h Reminder: Executive Cup",
    audience: "Registered Players",
    sent: 96,
    opened: "72%",
    clicked: "31%",
    status: "Scheduled",
  },
  {
    campaign: "Sponsor Thank You + ROI Snapshot",
    audience: "Sponsors",
    sent: 18,
    opened: "88%",
    clicked: "54%",
    status: "Sent",
  },
  {
    campaign: "Post-Event Feedback Survey",
    audience: "All Participants",
    sent: 214,
    opened: "61%",
    clicked: "23%",
    status: "Draft",
  },
];
