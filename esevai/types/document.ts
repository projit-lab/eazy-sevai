export interface RequiredDocument {
  name: string;
  description: string;
  mandatory: boolean;
  formats: string[];
  maxSize: string;
  example?: string;
  notes?: string;
}

export interface ServiceDocuments {
  service_slug: string;
  documents: RequiredDocument[];
}
export interface RequiredDocument {
  name: string;
  description: string;
  mandatory: boolean;
  formats: string[];
  maxSize: string;
  example?: string;
  notes?: string;
}

export interface ServiceDocuments {
  service_slug: string;
  documents: RequiredDocument[];
}