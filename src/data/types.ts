export interface ComponentInfo {
  id: ComponentId;
  label: string;
  shortDesc: string;
  icon: string;
  detailTitle: string;
  intro: string;
  sections: ContentSection[];
  specs?: SpecTable;
  comparison?: ComparisonTable;
  salesPitch?: string;
}

export interface LearningLayers {
  fundamentals: string[];
  technicalDeepDive: string[];
  commercial: string[];
  troubleshooting: string[];
}

export interface Analogy {
  title: string;
  explanation: string;
  customerFacing: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
  pronunciation?: string;
  example?: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
}

export interface ObjectionResponse {
  objection: string;
  response: string;
  evidence: string;
}

export interface SaleScenario {
  scenario: string;
  talkingPoints: string[];
  closingStrategy: string;
}

export interface LearningResource {
  componentId: ComponentId;
  learningLayers: LearningLayers;
  analogies: Analogy[];
  keyTerms: KeyTerm[];
  competitiveAdvantages: string[];
  objectionHandling: ObjectionResponse[];
  saleScenarios: SaleScenario[];
}

export interface SpecTable {
  title: string;
  rows: { label: string; value: string }[];
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: { label: string; values: string[] }[];
}

export interface ContentSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export const ALL_COMPONENT_IDS = [
  'processor',
  'memory',
  'cooling',
  'display',
  'camera',
  'battery',
  'nfc',
  'durability',
  'sensors',
  'connectivity',
] as const;

export type ComponentId = (typeof ALL_COMPONENT_IDS)[number];
