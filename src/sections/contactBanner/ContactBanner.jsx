
import SectionWrapperNew from '@/components/SectionWrapperNew'
import LeftHeading from '@/components/LeftHeading';
function ContactBanner({height='90vh' , bannerImage='/contact/contact-banner.svg', title="Let’s Connect", desc="We enable global businesses to Automate Cloud & Transform for a sustainable and inclusive future."}) {
    return (
        <>
            <div className="py-32 " style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%),url('${bannerImage}'), #000000`, 
                
                borderRadius: "0px",
                backgroundRepeat: "no-repeat",
                alignItems: "center",
                display: "flex",
                backgroundColor: 'bg-primary-900',
                height: `${height}`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center sm:items-start">
                            <div className="w-full md:w-1/2 text-left">
                                <div className={`text-display-02 text-neutral-white mb-6`}>{title}</div>
                                <div className={`text-body-01 text-neutral-white `}>{desc}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactBanner;