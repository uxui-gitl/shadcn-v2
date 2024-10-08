
import SectionWrapperNew from '@/components/SectionWrapperNew'
import LeftHeading from '@/components/LeftHeading';
function ContactBanner({bannerImage='/contact/contact-banner.svg', title="Let’s Connect", desc="We enable global businesses to Automate Cloud & Transform for a sustainable and inclusive future."}) {
    return (
        <>
            <div className="py-16 sm:py-32 px-10" style={{
                background: `url('${bannerImage}')`, backgroundPosition: "center",
                boxShadow: "inset 0px 0px 50px 46px rgba(0,0,0,0.1)",
                borderRadius: "0px",
                backgroundRepeat: "no-repeat",
                alignItems: "center",
                display: "flex",
                backgroundColor: '#000',
                height: '100vh',
                backgroundSize: "cover",
            }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center sm:items-start">
                            <div className="w-full sm:w-1/2 text-center sm:text-left">
                                <div className={`text-3xl text-white sm:text-2xl md:text-[54px] font-semibold leading-tight md:leading-[64px] mb-6`}>{title}</div>
                                <div className={`text-lg text-white font-semibold `}>{desc}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactBanner;