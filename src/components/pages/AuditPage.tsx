import { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertTriangle, ArrowRight, Loader2, RotateCcw, Globe, Star, MapPin, TrendingUp, Share2, ShieldCheck } from 'lucide-react';
import { PageHero } from '../PageHero';
import { runMockAudit, AuditResult, AuditCategoryResult } from '../../lib/auditEngine';

const categoryIcons: Record<string, typeof Globe> = {
  'Website Performance': Globe,
  'Google Business Profile': MapPin,
  'Online Reviews': Star,
  'Local SEO': Search,
  'Google Ads Readiness': TrendingUp,
  'Social Media Presence': Share2,
};

const categoryColors: Record<string, { gradient: string; text: string; glow: string }> = {
  'Website Performance': { gradient: 'from-[#3AB8FF] to-[#0EA5E9]', text: '#3AB8FF', glow: 'rgba(58, 184, 255, 0.4)' },
  'Google Business Profile': { gradient: 'from-[#10B981] to-[#059669]', text: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' },
  'Online Reviews': { gradient: 'from-[#F59E0B] to-[#D97706]', text: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)' },
  'Local SEO': { gradient: 'from-[#8B5CF6] to-[#7C3AED]', text: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.4)' },
  'Google Ads Readiness': { gradient: 'from-[#00D9FF] to-[#0EA5E9]', text: '#00D9FF', glow: 'rgba(0, 217, 255, 0.4)' },
  'Social Media Presence': { gradient: 'from-[#EC4899] to-[#DB2777]', text: '#EC4899', glow: 'rgba(236, 72, 153, 0.4)' },
};

function StatusBadge({ status }: { status: AuditCategoryResult['status'] }) {
  const config = {
    strong: { label: 'Strong', bg: 'bg-[#10B981]/15', text: 'text-[#10B981]', border: 'border-[#10B981]/30' },
    'needs-work': { label: 'Needs Work', bg: 'bg-[#F59E0B]/15', text: 'text-[#F59E0B]', border: 'border-[#F59E0B]/30' },
    critical: { label: 'Critical', bg: 'bg-[#EF4444]/15', text: 'text-[#EF4444]', border: 'border-[#EF4444]/30' },
  };
  const c = config[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${c.bg} ${c.text} ${c.border}`}>
      {c.label}
    </span>
  );
}

function GradeRing({ score, grade, size = 'lg' }: { score: number; grade: string; size?: 'lg' | 'sm' }) {
  const isLg = size === 'lg';
  const radius = isLg ? 70 : 28;
  const stroke = isLg ? 8 : 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const svgSize = (radius + stroke) * 2;

  const color = score >= 80 ? '#10B981' : score >= 60 ? '#F59E0B' : '#EF4444';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={svgSize} height={svgSize} className="-rotate-90">
        <circle cx={radius + stroke} cy={radius + stroke} r={radius} fill="none" stroke="#1A1D23" strokeWidth={stroke} />
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s ease-out', filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-bold ${isLg ? 'text-5xl' : 'text-lg'} text-white`}>{grade}</span>
        {isLg && <span className="text-[#8B8D98] text-sm mt-1">{score}/100</span>}
      </div>
    </div>
  );
}

function CategoryCard({ result }: { result: AuditCategoryResult }) {
  const Icon = categoryIcons[result.category] || Globe;
  const colors = categoryColors[result.category] || categoryColors['Website Performance'];

  return (
    <div className="bg-[#1A1D23] rounded-[20px] border border-[#293038] p-6 hover:shadow-lg hover:shadow-black/20 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center`}
            style={{ boxShadow: `0 4px 12px ${colors.glow}` }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-[#E8F1FF] text-sm font-medium">{result.category}</h3>
            <StatusBadge status={result.status} />
          </div>
        </div>
        <GradeRing score={result.score} grade={result.grade} size="sm" />
      </div>

      {/* Findings */}
      <div className="space-y-2.5 mb-5">
        {result.findings.map((f) => (
          <div key={f.label} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {f.passed ? (
                <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-[#EF4444] flex-shrink-0" />
              )}
              <span className="text-[#94A3B8]">{f.label}</span>
            </div>
            <span className={f.passed ? 'text-[#E8F1FF]' : 'text-[#EF4444]'}>{f.value}</span>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="bg-[#151618] rounded-xl p-3.5 border border-[#293038]/50">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
          <p className="text-[#94A3B8] text-xs leading-relaxed">{result.recommendation}</p>
        </div>
      </div>
    </div>
  );
}

export function AuditPage() {
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunAudit = async () => {
    setIsRunning(true);
    setAuditResult(null);
    const result = await runMockAudit();
    setAuditResult(result);
    setIsRunning(false);
  };

  const criticalCount = auditResult?.categories.filter((c) => c.status === 'critical').length ?? 0;
  const needsWorkCount = auditResult?.categories.filter((c) => c.status === 'needs-work').length ?? 0;
  const strongCount = auditResult?.categories.filter((c) => c.status === 'strong').length ?? 0;

  return (
    <div>
      <PageHero
        title="Business Audit"
        subtitle="Analyze your online presence and get actionable recommendations"
        icon={<ShieldCheck className="w-8 h-8 text-white" />}
        iconGradient="from-[#8B5CF6] to-[#6366F1]"
      />

      {/* Run Audit CTA */}
      {!auditResult && !isRunning && (
        <div className="bg-[#1A1D23] rounded-[24px] border border-[#293038] p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
            <Search className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[#E8F1FF] text-2xl mb-3">Run Your Business Audit</h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto mb-8">
            We'll scan your website, Google Business Profile, reviews, local SEO, ad readiness, and social media to find opportunities and issues.
          </p>
          <button
            onClick={handleRunAudit}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-medium hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all"
            style={{ boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)' }}
          >
            <Search className="w-5 h-5" />
            Start Audit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Running State */}
      {isRunning && (
        <div className="bg-[#1A1D23] rounded-[24px] border border-[#293038] p-16 text-center">
          <Loader2 className="w-16 h-16 text-[#8B5CF6] animate-spin mx-auto mb-6" />
          <h2 className="text-[#E8F1FF] text-2xl mb-3">Scanning Your Business...</h2>
          <p className="text-[#94A3B8] max-w-md mx-auto">
            Analyzing website, reviews, local SEO, Google Ads, and social media presence.
          </p>
        </div>
      )}

      {/* Results */}
      {auditResult && !isRunning && (
        <div className="space-y-8">
          {/* Overall Score Banner */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-[#8B5CF6]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#6366F1]/5"></div>
            <div className="relative p-10">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Grade Ring */}
                <GradeRing score={auditResult.overallScore} grade={auditResult.overallGrade} size="lg" />

                {/* Summary */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[#E8F1FF] text-2xl mb-2">Overall Score: {auditResult.overallScore}/100</h2>
                  <p className="text-[#94A3B8] mb-6">
                    Your online presence has room for growth. Focus on the critical areas below to maximize leads.
                  </p>

                  {/* Status Counts */}
                  <div className="flex items-center justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                      <span className="text-[#94A3B8] text-sm"><span className="text-[#E8F1FF] font-medium">{strongCount}</span> Strong</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                      <span className="text-[#94A3B8] text-sm"><span className="text-[#E8F1FF] font-medium">{needsWorkCount}</span> Needs Work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                      <span className="text-[#94A3B8] text-sm"><span className="text-[#E8F1FF] font-medium">{criticalCount}</span> Critical</span>
                    </div>
                  </div>
                </div>

                {/* Re-run Button */}
                <button
                  onClick={handleRunAudit}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#293038] text-[#94A3B8] hover:text-[#E8F1FF] hover:border-[#8B5CF6]/40 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Re-run Audit
                </button>
              </div>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {auditResult.categories.map((cat) => (
              <CategoryCard key={cat.category} result={cat} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
