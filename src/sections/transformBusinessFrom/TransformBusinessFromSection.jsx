const formBGURL = "/formBgImage.svg";
import Subscription from "@/components/Subscription";

function TransformBusinessForm({Title , Desc}) {
    return (
        <>
            <div className="" style={{ backgroundColor: '#1D162B' }}>
                <div className="" style={{
                    backgroundImage: `url(${formBGURL})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
                }}>
                    <div className="md:container mx-auto sm:py-14 md:pt-44">
                        <div className="card-body p-10 md:p-24 md:rounded-3xl" style={{ background: "linear-gradient(180deg, #5F22D9 2.14%, rgba(95, 34, 217, 0.00) 74.44%)" }}>
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