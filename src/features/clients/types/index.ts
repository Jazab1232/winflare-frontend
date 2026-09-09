export type ClientStatus = "active" | "on_hold" | "completed" | "archived";

export interface ClientContact {
  id: string;
  name: string;
  role: string;
  email: string;
  avatarInitials: string;
  avatarBg?: string;
  isPrimary?: boolean;
}

export interface ClientProject {
  id: string;
  title: string;
  status: "In Progress" | "Completed" | "Planning";
  value: number;
  startDate: string;
}

export interface ClientProposalHistoryItem {
  id: string;
  title: string;
  status: "Won" | "Lost" | "Sent" | "Draft";
  value: number;
  date: string;
}

export interface ClientNote {
  id: string;
  text: string;
  date: string;
  author?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  industry: string;
  status: ClientStatus;
  statusLabel: string;
  value: number;
  projectsCount: number;
  contactsCount: number;
  lastActivity: string;
  avatarLetter: string;
  avatarBg: string;
  // Detail Panel Fields
  companySize?: string;
  annualRevenue?: string;
  location?: string;
  website?: string;
  isVip?: boolean;
  relationshipNotes?: string;
  contacts?: ClientContact[];
  activeProjects?: ClientProject[];
  proposalHistory?: ClientProposalHistoryItem[];
  notes?: ClientNote[];
}

export interface ClientSummaryMetrics {
  totalClients: { count: number; trend: string };
  activeProjects: { count: number; trend: string };
  monthlyRevenue: { count: number; trend: string };
  lifetimeRevenue: { count: number; trend: string };
}
