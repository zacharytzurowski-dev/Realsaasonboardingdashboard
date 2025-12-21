import { useState } from 'react';

interface Step5Data {
  google_ads: boolean;
  facebook_ads: boolean;
  google_analytics: boolean;
  linkedin_ads: boolean;
  other_integrations: string;
}

interface Step5IntegrationsProps {
  initialData?: Step5Data;
  onSave: (data: Step5Data) => Promise<void>;
  onCancel: () => void;
}

export function Step5Integrations({ initialData, onSave, onCancel }: Step5IntegrationsProps) {
  const [formData, setFormData] = useState<Step5Data>(
    initialData || {
      google_ads: false,
      facebook_ads: false,
      google_analytics: false,
      linkedin_ads: false,
      other_integrations: '',
    }
  );
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-3">
          Select Integrations (Placeholder)
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-3 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer hover:border-[#3AB8FF]/50 transition-colors">
            <input
              type="checkbox"
              checked={formData.google_ads}
              onChange={(e) => setFormData({ ...formData, google_ads: e.target.checked })}
              className="w-4 h-4 text-[#3AB8FF] bg-[#0D1117] border-[#293038] rounded focus:ring-[#3AB8FF]"
            />
            <span className="text-[#E8F1FF]">Google Ads</span>
          </label>

          <label className="flex items-center gap-3 p-3 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer hover:border-[#3AB8FF]/50 transition-colors">
            <input
              type="checkbox"
              checked={formData.facebook_ads}
              onChange={(e) => setFormData({ ...formData, facebook_ads: e.target.checked })}
              className="w-4 h-4 text-[#3AB8FF] bg-[#0D1117] border-[#293038] rounded focus:ring-[#3AB8FF]"
            />
            <span className="text-[#E8F1FF]">Facebook Ads</span>
          </label>

          <label className="flex items-center gap-3 p-3 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer hover:border-[#3AB8FF]/50 transition-colors">
            <input
              type="checkbox"
              checked={formData.google_analytics}
              onChange={(e) => setFormData({ ...formData, google_analytics: e.target.checked })}
              className="w-4 h-4 text-[#3AB8FF] bg-[#0D1117] border-[#293038] rounded focus:ring-[#3AB8FF]"
            />
            <span className="text-[#E8F1FF]">Google Analytics</span>
          </label>

          <label className="flex items-center gap-3 p-3 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer hover:border-[#3AB8FF]/50 transition-colors">
            <input
              type="checkbox"
              checked={formData.linkedin_ads}
              onChange={(e) => setFormData({ ...formData, linkedin_ads: e.target.checked })}
              className="w-4 h-4 text-[#3AB8FF] bg-[#0D1117] border-[#293038] rounded focus:ring-[#3AB8FF]"
            />
            <span className="text-[#E8F1FF]">LinkedIn Ads</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Other Integrations
        </label>
        <textarea
          value={formData.other_integrations}
          onChange={(e) => setFormData({ ...formData, other_integrations: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[80px]"
          placeholder="List any other tools or platforms you'd like to integrate..."
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-[#293038] text-[#E8F1FF] rounded-lg hover:bg-[#3a4148] transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-[#3AB8FF] to-[#00CFFF] text-white rounded-lg hover:shadow-lg hover:shadow-[#3AB8FF]/40 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
