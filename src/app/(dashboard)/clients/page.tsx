"use client";

import * as React from "react";
import {
  Download,
  Upload,
  Plus,
  Search,
  ChevronDown,
  LayoutGrid,
  List,
  User,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PageHeader, Pagination, EmptyState } from "@/components/dashboard";
import { ClientsMetricCards } from "@/features/clients/components/clients-metric-cards";
import { ClientCard } from "@/features/clients/components/client-card";
import { ClientDetailsPanel } from "@/features/clients/components/client-details-panel";
import { NewClientModal } from "@/features/clients/components/new-client-modal";
import { MOCK_CLIENTS, MOCK_CLIENT_METRICS } from "@/features/clients/data/mock-clients";
import { ClientItem } from "@/features/clients/types";
import { cn } from "@/lib/utils";

export default function ClientsPage() {
  // Client state
  const [clients, setClients] = React.useState<ClientItem[]>(MOCK_CLIENTS);
  const [selectedClient, setSelectedClient] = React.useState<ClientItem | null>(
    MOCK_CLIENTS[0] || null
  );

  // Search & Filters
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState<string>("all");
  const [filterIndustry, setFilterIndustry] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  // Modal
  const [isNewClientModalOpen, setIsNewClientModalOpen] = React.useState(false);

  // Computed metrics
  const totalCount = clients.length;
  const activeProjectsCount = clients.reduce(
    (acc, c) => acc + (c.projectsCount || 0),
    0
  );
  const monthlyRev = clients.reduce((acc, c) => acc + (c.value || 0), 0);
  const lifetimeRev = monthlyRev * 11; // Realistic lifetime revenue ratio

  const metrics = {
    totalClients: { count: totalCount, trend: "↑ 2 this month" },
    activeProjects: { count: activeProjectsCount, trend: "↑ 2 this month" },
    monthlyRevenue: {
      count: monthlyRev > 0 ? monthlyRev : 8400,
      trend: "↑ 18% from last month",
    },
    lifetimeRevenue: {
      count: lifetimeRev > 0 ? lifetimeRev : 92000,
      trend: "↑ 12% total",
    },
  };

  // Filtered clients
  const filteredClients = React.useMemo(() => {
    return clients.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.location && c.location.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus =
        filterStatus === "all" || c.status === filterStatus;

      const matchesIndustry =
        filterIndustry === "all" ||
        c.industry.toLowerCase() === filterIndustry.toLowerCase();

      return matchesSearch && matchesStatus && matchesIndustry;
    });
  }, [clients, searchQuery, filterStatus, filterIndustry]);

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage) || 1;
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const paginatedClients = React.useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return filteredClients.slice(start, start + itemsPerPage);
  }, [filteredClients, safePage, itemsPerPage]);

  const handleAddClient = (newClient: ClientItem) => {
    setClients((prev) => [newClient, ...prev]);
    setSelectedClient(newClient);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#FAFBFF] text-slate-900">
      {/* Main Page Body (Flex Layout with Left Scrollable Area + Right Detail Panel) */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Main Content (Left / Middle) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          {/* Universal Header Row: Title & Action Buttons */}
          <PageHeader
            title="Clients"
            description="Manage relationships after winning opportunities."
            actions={
              <>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  <span>Export</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Upload className="h-3.5 w-3.5 text-slate-500" />
                  <span>Import</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsNewClientModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Client</span>
                </button>
              </>
            }
          />

          {/* 4 KPI Metric Cards */}
          <ClientsMetricCards metrics={metrics} />

          {/* Search, Filter Bar & View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clients by name, industry, or location..."
                className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
              />
            </div>

            {/* Filter Dropdowns & View Mode Toggle */}
            <div className="flex items-center gap-2.5">
              {/* All Industries Dropdown */}
              <div className="relative">
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-8 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Industries</option>
                  <option value="saas">SaaS</option>
                  <option value="fintech">Fintech</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="design & creative">Design & Creative</option>
                  <option value="it consulting">IT Consulting</option>
                  <option value="product design">Product Design</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              </div>

              {/* All Statuses Dropdown */}
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-8 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="on_hold">On Hold</option>
                  <option value="completed">Completed</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              </div>

              {/* View Toggle */}
              <div className="flex items-center rounded-xl border border-slate-200 bg-white p-0.5 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-1.5 rounded-lg transition-colors cursor-pointer",
                    viewMode === "grid"
                      ? "bg-[#EEF2FF] text-[#5B5AF7]"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                  title="Grid View"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-1.5 rounded-lg transition-colors cursor-pointer",
                    viewMode === "list"
                      ? "bg-[#EEF2FF] text-[#5B5AF7]"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Clients Cards Grid or List */}
          {filteredClients.length === 0 ? (
            <EmptyState
              icon={User}
              title="No clients found"
              description="Try adjusting your search filters or add a new client."
              action={{
                label: "Clear all filters",
                onClick: () => {
                  setSearchQuery("");
                  setFilterStatus("all");
                  setFilterIndustry("all");
                },
              }}
            />
          ) : viewMode === "grid" ? (
            <div
              className={cn(
                "grid gap-4",
                selectedClient
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              )}
            >
              {paginatedClients.map((client) => (
                <ClientCard
                  key={client.id}
                  client={client}
                  isSelected={selectedClient?.id === client.id}
                  onSelect={(c) => setSelectedClient(c)}
                />
              ))}
            </div>
          ) : (
            /* List View */
            <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-semibold text-slate-400">
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Industry</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Value</th>
                    <th className="py-3 px-4">Projects</th>
                    <th className="py-3 px-4">Contacts</th>
                    <th className="py-3 px-4">Last Activity</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedClients.map((client) => {
                    const isSelected = selectedClient?.id === client.id;
                    return (
                      <tr
                        key={client.id}
                        onClick={() => setSelectedClient(client)}
                        className={cn(
                          "hover:bg-slate-50/80 transition-colors cursor-pointer",
                          isSelected && "bg-[#EEF2FF]/40 font-medium"
                        )}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={cn(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white font-bold text-xs shadow-2xs",
                                client.avatarBg
                              )}
                            >
                              {client.avatarLetter}
                            </div>
                            <span className="font-bold text-slate-900">
                              {client.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-500">
                          {client.industry}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-semibold border",
                              client.status === "active"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : client.status === "on_hold"
                                ? "bg-amber-50 text-amber-700 border-amber-200"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            )}
                          >
                            {client.statusLabel}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900">
                          ${client.value.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-slate-500">
                          {client.projectsCount}
                        </td>
                        <td className="py-3 px-4 text-slate-500">
                          {client.contactsCount}
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-[11px]">
                          {client.lastActivity}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedClient(client);
                            }}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
                          >
                            <span>Details</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Standardized Pagination Bar */}
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            totalItems={filteredClients.length}
            itemsPerPage={itemsPerPage}
            itemName="clients"
            onPageChange={setCurrentPage}
          />
        </div>

        {/* 4. Right Side Client Details Panel (Matching Screenshot) */}
        {selectedClient && (
          <div className="p-6 pl-0 hidden md:flex shrink-0">
            <ClientDetailsPanel
              client={selectedClient}
              onClose={() => setSelectedClient(null)}
            />
          </div>
        )}
      </div>

      {/* 5. New Client Modal */}
      <NewClientModal
        isOpen={isNewClientModalOpen}
        onClose={() => setIsNewClientModalOpen(false)}
        onAddClient={handleAddClient}
      />
    </div>
  );
}
