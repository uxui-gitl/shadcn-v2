import Image from 'next/image';
import SectionWrapperNew from '@/components/SectionWrapperNew';

function page() {
    return (
        <>
            <div className="navbar2 " style={{ borderBottom: '1px solid #E4E4E4' }}>
                <div className="mx-auto container flex justify-between my-3">
                    <Image src="/godrejLogo.png" width={150} height={70} alt="logo" />
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-1 text-center  mb-2">Back to Vacancies</button>
                </div>
            </div>

            <SectionWrapperNew
                sectionHeading=""
                sectionDesc=""
                sectionTextColor='#000'
                sectionHeadingLayout="left">
                <div className="next">
                        <>
                            <p className="text-[20px] font-medium text-[#808080] mb-6">18 October, 2024</p>
                            {<h2 className="max-w-[80%] mb-16 text-[42px] leading-[50px] font-semibold text-[#1D162B]">{skhdbjhasjdbh}</h2>}
                            <div className="grid grid-cols-4 gap-5">
                                <div className="">
                                    <h2 className="text-[28px] font-semibold mb-6">Highlights</h2>
                                    <div className="mb-3">
                                        <h6 className="title">Industry</h6>
                                        <p className="text-[18px] font-semibold">{'jsd'}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Project Location</h6>
                                        <p className="text-[18px] font-semibold">{'qlwndlqjnwd'}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="title">Engagement Since</h6>
                                        <p className="text-[18px] font-semibold">{'alsjdlkajsd'}</p>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <div className=""style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-6">Client Brief</h2>
                                       <p className="text-[32px] leading-[40px] font-medium mb-6">{'asdkmalkjsd'}</p>
                                            <ul class="space-y-1 text-black list-disc list-outside mb-6">
                                            <li>{'item'}</li>
                                        </ul>
                                    </div>
                                    {/* business case */}
                                    <div className="py-4" style={{borderBottom:'1px solid #d3d3d3'}}>
                                        <h2 className="title text-[28px] font-semibold mb-4">Business Case</h2>
                                       <p className="text-[16px] leading-[40px] font-medium mb-3">{'cription'}</p>
                                            <ul class="space-y-1 text-black list-disc list-outside mb-3">
                                           <li>{'alns'}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </>
                </div>
            </SectionWrapperNew>
        </>
    )
}

export default page;