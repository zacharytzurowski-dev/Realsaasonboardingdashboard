export interface AuditCategoryResult {
  category: string
  score: number
  grade: string
  status: 'strong' | 'needs-work' | 'critical'
  findings: { label: string; value: string; passed: boolean }[]
  recommendation: string
}

export interface AuditResult {
  overallScore: number
  overallGrade: string
  categories: AuditCategoryResult[]
  generatedAt: string
}

function gradeFromScore(score: number): string {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

function statusFromScore(score: number): 'strong' | 'needs-work' | 'critical' {
  if (score >= 80) return 'strong'
  if (score >= 60) return 'needs-work'
  return 'critical'
}

export function runMockAudit(): Promise<AuditResult> {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      const categories: AuditCategoryResult[] = [
        {
          category: 'Website Performance',
          score: 72,
          grade: gradeFromScore(72),
          status: statusFromScore(72),
          findings: [
            { label: 'Mobile Responsive', value: 'Yes', passed: true },
            { label: 'Page Load Speed', value: '3.8s', passed: false },
            { label: 'SSL Certificate', value: 'Active', passed: true },
            { label: 'Core Web Vitals', value: '2 of 3 passing', passed: false },
          ],
          recommendation: 'Optimize images and enable lazy loading to bring page speed under 2.5 seconds.',
        },
        {
          category: 'Google Business Profile',
          score: 58,
          grade: gradeFromScore(58),
          status: statusFromScore(58),
          findings: [
            { label: 'Profile Claimed', value: 'Yes', passed: true },
            { label: 'Business Hours', value: 'Set', passed: true },
            { label: 'Photos Uploaded', value: '3 of 10+ recommended', passed: false },
            { label: 'Posts (last 30 days)', value: '0', passed: false },
          ],
          recommendation: 'Add at least 10 high-quality photos and post weekly updates to improve local visibility.',
        },
        {
          category: 'Online Reviews',
          score: 45,
          grade: gradeFromScore(45),
          status: statusFromScore(45),
          findings: [
            { label: 'Total Reviews', value: '12', passed: false },
            { label: 'Average Rating', value: '4.2 stars', passed: true },
            { label: 'Review Velocity', value: '1 per month', passed: false },
            { label: 'Owner Responses', value: '33%', passed: false },
          ],
          recommendation: 'Enable automated review requests after every job. Respond to all reviews within 24 hours.',
        },
        {
          category: 'Local SEO',
          score: 63,
          grade: gradeFromScore(63),
          status: statusFromScore(63),
          findings: [
            { label: 'NAP Consistency', value: '7 of 12 directories', passed: false },
            { label: 'Local Keywords', value: 'Partially optimized', passed: false },
            { label: 'Map Pack Ranking', value: 'Position 5-8', passed: false },
            { label: 'Schema Markup', value: 'Present', passed: true },
          ],
          recommendation: 'Fix NAP inconsistencies across all directories and target "auto detailing near me" keywords.',
        },
        {
          category: 'Google Ads Readiness',
          score: 85,
          grade: gradeFromScore(85),
          status: statusFromScore(85),
          findings: [
            { label: 'Conversion Tracking', value: 'Installed', passed: true },
            { label: 'Landing Pages', value: 'Optimized', passed: true },
            { label: 'Ad Extensions', value: '3 of 5 set up', passed: false },
            { label: 'Keyword Research', value: 'Complete', passed: true },
          ],
          recommendation: 'Add call and location extensions to maximize ad real estate and click-through rates.',
        },
        {
          category: 'Social Media Presence',
          score: 38,
          grade: gradeFromScore(38),
          status: statusFromScore(38),
          findings: [
            { label: 'Facebook Page', value: 'Active', passed: true },
            { label: 'Instagram Account', value: 'Inactive (60+ days)', passed: false },
            { label: 'Posting Frequency', value: '1-2 per month', passed: false },
            { label: 'Engagement Rate', value: '0.4%', passed: false },
          ],
          recommendation: 'Post before/after photos 3x per week on Instagram. Use Reels for maximum organic reach.',
        },
      ]

      const overallScore = Math.round(
        categories.reduce((sum, c) => sum + c.score, 0) / categories.length
      )

      resolve({
        overallScore,
        overallGrade: gradeFromScore(overallScore),
        categories,
        generatedAt: new Date().toISOString(),
      })
    }, 2500)
  })
}
