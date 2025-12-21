import { useState } from 'react';

interface Step4Data {
  brand_tone: string;
  content_topics: string;
  example_links: string;
}

interface Step4ContentPreferencesProps {
  initialData?: Step4Data;
  onSave: (data: Step4Data) => Promise<void>;
  onCancel: () => void;
}

export function Step4ContentPreferences({ initialData, onSave, onCancel }: Step4ContentPreferencesProps) {
  const [formData, setFormData] = useState<Step4Data>(
    initialData || {
      brand_tone: '',
      content_topics: '',
      example_links: '',
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
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Brand Tone
        </label>
        <select
          value={formData.brand_tone}
          onChange={(e) => setFormData({ ...formData, brand_tone: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] focus:outline-none focus:border-[#3AB8FF] transition-colors"
          required
        >
          <option value="">Select a tone...</option>
          <option value="professional">Professional</option>
          <option value="friendly">Friendly & Casual</option>
          <option value="authoritative">Authoritative</option>
          <option value="playful">Playful & Fun</option>
          <option value="inspirational">Inspirational</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Content Topics
        </label>
        <textarea
          value={formData.content_topics}
          onChange={(e) => setFormData({ ...formData, content_topics: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[100px]"
          placeholder="E.g., Industry trends, how-to guides, customer success stories, product updates..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Example Links
        </label>
        <textarea
          value={formData.example_links}
          onChange={(e) => setFormData({ ...formData, example_links: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[80px]"
          placeholder="Share URLs of content you admire (one per line)"
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
