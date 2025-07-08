from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from datetime import datetime

class SummaryCard(BaseModel):
    label: str
    value: str
    tagline: Optional[str] = None

class KeyFinding(BaseModel):
    title: str
    description: str

class ExecutiveSummary(BaseModel):
    cards: List[SummaryCard]
    overview: str
    key_findings: List[KeyFinding]

class Timeline(BaseModel):
    breach_start: datetime
    breach_end: datetime
    public_notification: datetime

class CampaignDetails(BaseModel):
    campaign_name: str
    timeline: Timeline
    primary_targets: List[str]

class TopBreach(BaseModel):
    name: str
    individuals: str
    year: int
    is_featured: bool = False

class HealthcareBreachLandscape(BaseModel):
    overview: str
    total_incidents: int
    confirmed_disclosures: int
    top_breaches: List[TopBreach]

class ThreatActorAttribution(BaseModel):
    actor_name: str
    attribution: str
    motivation: str
    attack_techniques: List[str]
    mitre_tactics: List[str]

class IndicatorsOfCompromise(BaseModel):
    title: str
    description: str
    behavioral_indicators: List[str]
    exfiltration_patterns: List[str]

class MalwareAnalysis(BaseModel):
    family: str
    description: str

class AttackProgressionStep(BaseModel):
    step: int
    name: str
    description: str

class TechnicalAnalysis(BaseModel):
    iocs: IndicatorsOfCompromise
    malware: MalwareAnalysis
    progression: List[AttackProgressionStep]

class DataCategory(BaseModel):
    category_name: str
    items: List[str]

class ImpactedSector(BaseModel):
    sector: str
    impact_level: str
    impact_percent: Optional[int] = None

class SectoralImpact(BaseModel):
    description: str
    sectors: List[ImpactedSector]
    geographic_distribution: str

class Compliance(BaseModel):
    applicable_regulations: List[str]
    compliance_gaps: List[str]

class BreachCostStats(BaseModel):
    average_cost: str
    source: str
    note: Optional[str] = None

class DarkWebFindings(BaseModel):
    title: str
    description: str
    monitoring_note: str

class MitigationCounts(BaseModel):
    critical_high: int
    immediate_action: int
    implementation_target: str

class Recommendation(BaseModel):
    title: str
    priority: str
    description: str
    timeline: str
    effort: str

class RoadmapPhase(BaseModel):
    phase_name: str
    timeframe: str
    actions: List[str]

class MitigationRecommendations(BaseModel):
    overview: str
    counts: MitigationCounts
    recommendations: List[Recommendation]
    roadmap: List[RoadmapPhase]

class Reference(BaseModel):
    name: str
    url: HttpUrl

class ReportInfo(BaseModel):
    report_id: str
    title: str
    description: str
    version: str
    created_timestamp: datetime
    modified_timestamp: datetime
    published_date: datetime
    classification: Optional[str] = None
    author: Optional[str] = None
    company_name: Optional[str] = None
    og_image: Optional[HttpUrl] = None

class BreachAdvisory(BaseModel):
    executive_summary: ExecutiveSummary
    campaign: CampaignDetails
    landscape: HealthcareBreachLandscape
    threat_actor: ThreatActorAttribution
    technical: TechnicalAnalysis
    compromised_categories: List[DataCategory]
    impact: SectoralImpact
    compliance: Compliance
    cost_stats: BreachCostStats
    affected_partners: List[str]
    dark_web: DarkWebFindings
    mitigation: MitigationRecommendations
    references: List[Reference]
    report_info: ReportInfo
    disclaimer: str

REPORT_SCHEMA = BreachAdvisory.model_json_schema()
