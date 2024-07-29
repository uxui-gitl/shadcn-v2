import Image from "next/image";

function Robot2(){
    return(
        <>
        <div className="container roboat-wrapper" style={{height:'calc(100vh - 76px)', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className="">
                <div className="">
                    <Image src={'/icon/Robot.svg'} width={200} height={200}></Image>
                </div>
            </div>
        </div>

            <div className="messageToasterCard" style={{display:'flex', backgroundColor:'#EFE9FB', maxWidth:'320px', borderRadius:'8px', minHeight:'70px', padding:'15px', alignItems:'center'}}>
                <div style={{marginRight:'16px'}}><Image src={'/icon/chaticon1.svg'} width={50} height={50} alt="icon" className="img"></Image></div>
                <div className="text" style={{fontSize:'16px', lineHeight:'24px', fontWeight:'600', color:'#1D162B'}}>Some higlight  text about
                service or solutions</div>
        </div>
        </>
    )
}


export default Robot2;