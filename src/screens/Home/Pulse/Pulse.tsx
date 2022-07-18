import React from 'react';

function Pulse() {
  return (
    <div className="rounded-md container mx-auto max-w-screen-sm pt-[19px]">
      <div className="animate-pulse flex-col">
        <div className="flex items-center mb-[10px] gap-[12px]">
          <div className="rounded-full bg-slate-200 h-[56px] w-[56px]"></div>
          <div>
            <div className="h-2 bg-slate-200 rounded w-[200px] mb-[12px]"></div>
            <div className="h-2 bg-slate-200 rounded w-[100px]"></div>
          </div>
        </div>
        <div className="flex-1 space-y-6 py-1 mb-[12px]">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>

        <div className="h-6 bg-slate-200 rounded-full w-[100px]"></div>
      </div>
    </div>
  );
}

export default Pulse;
