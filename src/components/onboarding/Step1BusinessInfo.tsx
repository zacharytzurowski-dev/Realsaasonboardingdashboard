import { useState } from 'react';

interface Step1Data {
  business_name: string;
  address: string;
  phone: string;
  services_offered: string;
}

interface Step1BusinessInfoProps {
  initialData?: Step1Data;
  onSave: (data: Step1Data) => Promise<void>;
  onCancel: () => void;
}

export function Step1BusinessInfo({ initialData, onSave, onCancel }: Step1BusinessInfoProps) {
  const [formData, setFormData] = useState<Step1Data>(
    initialData || {
      business_name: '',
      address: '',
      phone: '',
      services_offered: '',
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
          Business Name
        </label>
        <input
          type="text"
          value={formData.business_name}
          onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
          placeholder="Your business name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Address
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
          placeholder="123 Main St, City, State ZIP"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors"
          placeholder="(555) 123-4567"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E8F1FF] mb-2">
          Services Offered
        </label>
        <textarea
          value={formData.services_offered}
          onChange={(e) => setFormData({ ...formData, services_offered: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#293038] rounded-lg text-[#E8F1FF] placeholder-[#64748B] focus:outline-none focus:border-[#3AB8FF] transition-colors min-h-[100px]"
          placeholder="Describe your main services..."
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
