const formBGURL = "/formBgImage.svg";
import Subscription from "@/components/Subscription";

function TransformBusinessForm({Title , Desc}) {
    return (
        <>
            <div className="rounded-t-3xl bg-primary-900 overflow-hidden">
                <div className="" style={{
                    backgroundImage: `url(${formBGURL})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
                }}>
                    <div className="container mx-auto  pt-8 z-10 ">
                        <div className="card-body rounded-3xl py-8 " style={{ background: "linear-gradient(180deg, #8d0059 2.14%, rgba(95, 34, 217, 0.00) 74.44%)" }}>
                            <Subscription
                                title={Title}
                                blue=""
                                title2=""
                                desc={Desc}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransformBusinessForm;