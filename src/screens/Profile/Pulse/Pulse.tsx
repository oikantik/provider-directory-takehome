import React from 'react';

function Pulse() {
  return (
    <div className="rounded-md container mx-auto max-w-screen-sm pt-[19px]">
      <div className="animate-pulse flex align-top">
        <div className="flex items-center mb-[10px] mr-[20px]">
          <div className="rounded bg-slate-200 h-[204.48px] w-[204.48px]"></div>
        </div>
        <div className="w-full">
          <div className="flex-1 space-y-6 py-1 mb-[12px]">
            <div>
              <div className="h-2 bg-slate-200 rounded w-[200px] mb-[16px]"></div>
              <div className="h-2 bg-slate-200 rounded w-[100px] mb-[16px]"></div>
              <div className="grid grid-cols-1 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>

          <div className="h-6 bg-slate-200 rounded-full w-[100px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Pulse;
