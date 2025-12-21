import { useState } from 'react';
import { Upload } from 'lucide-react';

interface Step2Data {
  logo_url?: string;
  primary_color: string;
  secondary_color: string;
}

interface Step2BrandGuidelinesProps {
  initialData?: Step2Data;
  onSave: (data: Step2Data) => Promise<void>;
  onCancel: () => void;
}

export function Step2BrandGuidelines({ initialData, onSave, onCancel }: Step2BrandGuidelinesProps) {
  const [formData, setFormData] = useState<Step2Data>(
    initialData || {
      logo_url: '',
      primary_color: '#3AB8FF',
      secondary_color: '#10B981',
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
          Logo Upload
        </label>
        <div className="border-2 border-dashed border-[#293038] rounded-lg p-8 text-center hover:border-[#3AB8FF]/50 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-[#64748B] mx-auto mb-3" />
          <p className="text-[#94A3B8] text-sm">
            Click to upload or drag and drop
          </p>
          <p className="text-[#64748B] text-xs mt-1">
            PNG, JPG, SVG up to 5MB (placeholder - upload not implemented yet)
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Primary Color
        </label>
        <div className="flex gap-3">
          <input
            type="color"
            value={formData.primary_color}
            onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
            className="w-20 h-12 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={formData.primary_color}
            onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
            className="flex-1 px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
            placeholder="#3AB8FF"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Secondary Color
        </label>
        <div className="flex gap-3">
          <input
            type="color"
            value={formData.secondary_color}
            onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
            className="w-20 h-12 bg-[#0D1117] border border-[#293038] rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={formData.secondary_color}
            onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
            className="flex-1 px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
            placeholder="#10B981"
            required
          />
        </div>
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
