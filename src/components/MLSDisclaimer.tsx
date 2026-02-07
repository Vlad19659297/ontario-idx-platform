import { Info } from 'lucide-react';
import { MLS_DISCLAIMER } from '@/data/agent';

export function MLSDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
        <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
        <p className="text-[10px] leading-relaxed text-slate-500">
          {MLS_DISCLAIMER}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <Info className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">MLS® Data Disclaimer</h4>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            {MLS_DISCLAIMER}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Listing information last updated on {new Date().toLocaleDateString('en-CA')}. Information is deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}
