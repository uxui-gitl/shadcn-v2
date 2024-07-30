import Image from "next/image";

function Robot2() {
    return (
        <>
            <div className="container roboat-wrapper" style={{ height: 'calc(100vh - 76px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="card">
                    <div className="">
                        <Image className="robotimg" src={'/icon/Robot.svg'} width={200} height={200}></Image>
                        <Image className="robotimg" src={'/shadow.svg'} width={600} height={200} style={{marginTop:"-40px",zIndex:"-1",position:"relative"}}></Image>


                    </div>

                    <div className="messageToasterCard c1" style={{ display: 'flex', backgroundColor: '#EFE9FB', maxWidth: '320px', borderRadius: '8px', minHeight: '70px', padding: '15px', alignItems: 'center' }}>
                        <div style={{ marginRight: '16px' }}><Image src={'/icon/chaticon1.svg'} width={50} height={50} alt="icon" className="img"></Image></div>
                        <div className="text" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: '#1D162B' }}>Some higlight  text about
                            service or solutions</div>
                    </div>
                    <div className="messageToasterCard c2" style={{ display: 'flex', backgroundColor: '#EFE9FB', maxWidth: '320px', borderRadius: '8px', minHeight: '70px', padding: '15px', alignItems: 'center' }}>
                        <div style={{ marginRight: '16px' }}><Image src={'/icon/chaticon1.svg'} width={50} height={50} alt="icon" className="img"></Image></div>
                        <div className="text" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: '#1D162B' }}>Some higlight  text about
                            service or solutions</div>
                    </div>

                    <div className="messageToasterCard c3" style={{ display: 'flex', backgroundColor: '#EFE9FB', maxWidth: '320px', borderRadius: '8px', minHeight: '70px', padding: '15px', alignItems: 'center' }}>
                        <div style={{ marginRight: '16px' }}><Image src={'/icon/chaticon1.svg'} width={50} height={50} alt="icon" className="img"></Image></div>
                        <div className="text" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: '#1D162B' }}>Some higlight  text about
                            service or solutions</div>
                    </div>
                    <div className="messageToasterCard c4" style={{ display: 'flex', backgroundColor: '#EFE9FB', maxWidth: '320px', borderRadius: '8px', minHeight: '70px', padding: '15px', alignItems: 'center' }}>
                        <div style={{ marginRight: '16px' }}><Image src={'/icon/chaticon1.svg'} width={50} height={50} alt="icon" className="img"></Image></div>
                        <div className="text" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: '#1D162B' }}>Some higlight  text about
                            service or solutions</div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Robot2;