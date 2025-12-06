export type ItemStatus = 
  | "Active" 
  | "Verification Pending" 
  | "Item on its way" 
  | "Recovered" 
  | "Closed";

export type ItemType = "lost" | "found" | "anonymous";

export interface Item {
  id: string;
  type: ItemType;
  category: string;
  description: string;
  brand?: string;
  color?: string;
  location: string;
  date: string;
  time?: string;
  status: ItemStatus;
  image?: string;
  contactEmail?: string;
  contactPhone?: string;
  ownerId?: string;
  finderId?: string;
  matchScore?: number;
}

export interface ClaimRequest {
  id: string;
  itemId: string;
  claimantId: string;
  claimantEmail: string;
  claimantPhone?: string;
  message: string;
  verificationAnswers?: string[];
  status: "pending" | "verified" | "rejected";
  createdAt: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  preferredMethod: "email" | "phone" | "both";
}
