'use client';

import { DashboardShell, Button, type NavSection, type AppLink, type NotificationItem } from '@tirbeo/ui';
import { KpiCard, LineChart, BarChart, DonutChart, FunnelChart, TimelineChart, Sparkline } from '@tirbeo/charts';
import {
  LayoutDashboard, BarChart3, Users, Shield, Settings, HelpCircle,
  CheckCircle, AlertCircle, XCircle, PauseCircle, ChevronRight,
} from 'lucide-react';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { href: '/', label: 'Catalogue', icon: LayoutDashboard },
      { href: '/components/buttons', label: 'Buttons', icon: CheckCircle },
      { href: '/components/charts', label: 'Charts', icon: BarChart3 },
      { href: '/components/kpi', label: 'KPI Cards', icon: Users },
    ],
  },
  {
    label: 'Pages',
    items: [
      { href: '/pages/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/pages/settings', label: 'Settings', icon: Settings },
    ],
  },
];

const APP_LAUNCHER: AppLink[] = [
  { id: 'dashboard', name: 'Dashboard', href: 'https://dashboard.tirbeo.app' },
  { id: 'forms', name: 'Forms', href: 'https://forms.tirbeo.app' },
  { id: 'admin', name: 'Admin', href: 'https://admin.tirbeo.app' },
  { id: 'accounts', name: 'Accounts', href: 'https://accounts.tirbeo.app' },
  { id: 'support', name: 'Support', href: 'https://support.tirbeo.app' },
];

const RECENT = ['Active users', 'Submission timeline', 'Dashboard layout', 'Recent reports'];

const SEARCH_GROUPS = [
  { label: 'Pages', items: [{ label: 'Dashboard', href: '/', icon: LayoutDashboard }, { label: 'Buttons', href: '/components/buttons', icon: CheckCircle }] },
  { label: 'Components', items: [{ label: 'KPI Card', href: '/components/kpi', icon: Users }, { label: 'Charts', href: '/components/charts', icon: BarChart3 }] },
];

const NOTIFICATIONS: NotificationItem[] = [
  { id: '1', title: 'New user registered', body: 'jane@tirbeo.app joined 2 minutes ago', time: '2 min', unread: true, href: '/users' },
  { id: '2', title: 'Report action required', body: 'Security event needs review', time: '5h', unread: true, href: '/reports' },
];

const HELPER_LINKS = [
  { label: 'Documentation', href: 'https://docs.tirbeo.app', icon: HelpCircle },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[var(--color-border-default,#DADCE0)] bg-[var(--color-surface-raised,#FFFFFF)] p-5 shadow-[var(--shadow-card,0_1px_2px_rgba(0,0,0,0.05))]">
      <h2 className="text-sm font-semibold text-[var(--color-text-primary,#202124)] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function CatalogueShell({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      navSections={NAV}
      apps={APP_LAUNCHER}
      brand={{ name: 'Tirbeo UI Docs', logo: '' }}
      user={{ name: 'Demo User', email: 'demo@tirbeo.app' }}
      onLogout={() => {}}
      onNavigate={href => { if (href.startsWith('http')) window.open(href, '_blank'); else window.location.href = href; }}
      currentPath="/"
      onSearch={query => { if (query.trim()) window.location.href = `/?q=${encodeURIComponent(query)}`; }}
      searchPlaceholder="Search components, pages..."
      searchGroups={SEARCH_GROUPS}
      recentSearches={RECENT}
      notifications={NOTIFICATIONS}
      onMarkAllRead={() => {}}
      helpLinks={HELPER_LINKS}
    >
      <div className="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary,#202124)]">Tirbeo Component Catalogue</h1>
          <p className="text-sm text-[var(--color-text-secondary,#5F6368)] mt-1">Live reference for every shared UI primitive. All values resolve to tokens defined in the design system.</p>
        </div>
        {children}
      </div>
    </DashboardShell>
  );
}

function ButtonsSection() {
  return (
    <Section title="Buttons">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="icon" aria-label="Copy"><span className="sr-only">Copy</span>📋</Button>
        <Button loading>Loading</Button>
      </div>
    </Section>
  );
}

function KpiSection() {
  return (
    <Section title="KPI Cards">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Active Users" value="24,821" icon={<Users className="w-4 h-4" />} change={{ value: '12.4%', positive: true }} />
        <KpiCard label="Total Revenue" value="$124,851" icon={<BarChart3 className="w-4 h-4" />} change={{ value: '3.1%', positive: true }} />
        <KpiCard label="Churn Rate" value="4.2%" icon={<Shield className="w-4 h-4" />} change={{ value: '1.8%', positive: false }} />
        <KpiCard label="Completion" value="87%" icon={<CheckCircle className="w-4 h-4" />} change={{ value: '0.9%', positive: true }} sparkline={[12, 18, 14, 20, 19, 24]} />
      </div>
    </Section>
  );
}

function ChartsSection() {
  const lineData = [
    { name: 'Jan', views: 4000, responses: 2400 },
    { name: 'Feb', views: 3000, responses: 1398 },
    { name: 'Mar', views: 2000, responses: 9800 },
    { name: 'Apr', views: 2780, responses: 3908 },
    { name: 'May', views: 1890, responses: 4800 },
    { name: 'Jun', views: 2390, responses: 3800 },
    { name: 'Jul', views: 3490, responses: 4300 },
  ];
  const barData = [
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 200 },
    { name: 'Wed', value: 150 },
    { name: 'Thu', value: 90 },
    { name: 'Fri', value: 180 },
  ];
  const donutData = [
    { name: 'Completed', value: 400 },
    { name: 'In Progress', value: 210 },
    { name: 'Pending', value: 170 },
    { name: 'Blocked', value: 90 },
    { name: 'Archived', value: 94 },
    { name: 'Other', value: 30 },
  ];
  const funnelData = [
    { label: 'Awareness', value: 1000 },
    { label: 'Visitors', value: 600 },
    { label: 'Signups', value: 240 },
    { label: 'Active', value: 96 },
  ];
  return (
    <>
      <Section title="Line & Area">
        <LineChart data={lineData} lines={[{ key: 'views', color: '#1A73E8', name: 'Views' }, { key: 'responses', color: '#00897B', name: 'Responses' }]} height={240} />
      </Section>
      <Section title="Bar / Column">
        <BarChart data={barData} bars={[{ key: 'value', name: 'Count' }]} height={240} />
      </Section>
      <Section title="Donut (max 5 + Other)">
        <DonutChart data={donutData} height={240} centerValue="1,004" centerLabel="total" />
      </Section>
      <Section title="Funnel">
        <FunnelChart stages={funnelData} className="h-[220px]" />
      </Section>
      <Section title="Timeline">
        <TimelineChart items={[
          { id: '1', title: 'New deployment published', description: 'Release v1.2.3 went live', timestamp: '10:32 AM', type: 'success' },
          { id: '2', title: 'Report reviewed', description: 'Security event #42 actioned', timestamp: '09:14 AM', type: 'warning' },
          { id: '3', title: 'User feedback received', description: '3 new suggestions', timestamp: 'Yesterday', type: 'info' },
          { id: '4', title: 'SLA breach alert', description: 'Response time exceeded', timestamp: 'Aug 1', type: 'error' },
        ]} />
      </Section>
    </>
  );
}

export default function CataloguePage() {
  return (
    <CatalogueShell>
      <ButtonsSection />
      <KpiSection />
      <ChartsSection />
    </CatalogueShell>
  );
}
