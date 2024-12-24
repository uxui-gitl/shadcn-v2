import { memo } from 'react';
import { useRouter } from 'next/navigation';

function JobCard({props}) {
  const router = useRouter();
    const {designation ,functionsDesc, location, insertDate, srNo} = {...props};
    return (
      <>
       <div className="jobcard flex justify-between items-end py-4" style={{ borderBottom: '1px solid #d3d3d3' }}>
              <div className="">
                <div className="text-heading-04 mb-2 text-[#1D162B]">{designation}</div>
                <p className="text-[#808080] mb-4 paragraph-01">{functionsDesc}</p>
                <div className="">
                  <span className="bg-white text-[#808080] text-helper-02 font-medium me-2 px-2 py-2 rounded-3xl border">{location}</span>
                </div>
              </div>
              <div className="text-right">
                <button type="button" className="text-[#EFE9FB] text-xs bg-[#5F22D9] mb-4 font-medium rounded-full text-subtitle-01 px-2 py-2 text-center"
                  onClick={() => router.push(`/job-detail/${srNo}`)}>Apply Now</button>
                <p className="text-[14px] text-[#808080] whitespace-nowrap" >Posted {insertDate}</p>
              </div>
            </div>
      </>
    );
  }
  
  export default memo(JobCard);
  