import Subscription from "@/components/Subscription";

function TransformBusinessForm({Title , Desc}) {
    return (
        <>
            <div className="rounded-t-3xl bg-secondary-30 overflow-hidden -mt-8" style={{zIndex:10, position:"relative"}}>
                <div className="">
                    <div className="container mx-auto  pt-8 z-10 ">
                        <div className="card-body rounded-3xl py-8 ">
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