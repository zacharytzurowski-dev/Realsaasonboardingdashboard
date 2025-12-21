import { useState } from 'react';

interface Step3Data {
  target_demographics: string;
  target_location: string;
  target_interests: string;
}

interface Step3TargetAudienceProps {
  initialData?: Step3Data;
  onSave: (data: Step3Data) => Promise<void>;
  onCancel: () => void;
}

export function Step3TargetAudience({ initialData, onSave, onCancel }: Step3TargetAudienceProps) {
  const [formData, setFormData] = useState<Step3Data>(
    initialData || {
      target_demographics: '',
      target_location: '',
      target_interests: '',
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
          Target Demographics
        </label>
        <textarea
          value={formData.target_demographics}
          onChange={(e) => setFormData({ ...formData, target_demographics: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[80px]"
          placeholder="E.g., Age 25-45, homeowners, middle to upper income..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Target Location
        </label>
        <input
          type="text"
          value={formData.target_location}
          onChange={(e) => setFormData({ ...formData, target_location: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
          placeholder="E.g., San Francisco Bay Area, California"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Target Interests
        </label>
        <textarea
          value={formData.target_interests}
          onChange={(e) => setFormData({ ...formData, target_interests: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[80px]"
          placeholder="E.g., Home improvement, sustainability, modern design..."
          required
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
