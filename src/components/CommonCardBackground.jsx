function CommonCardBackground({Item}){
    return(
        <>
         <div class="max-w-sm  flex flex-col justify-between rounded-3xl bg-white border min-h-[550px] border-gray-200 shadow dark:bg-white-800 dark:border-white mr-10" style={{
                backgroundImage: `url(${Item.BGImageUrl})`, backgroundSize: 'cover', backgroundColor: `${Item.BGColor}`,
                backgroundBlendMode: ""
              }}>

                <div class="p-10">
                  <p className="text-[#fff] font-medium text-[22px] sm:text-[32px] md:text-[42px] leading-7 md:leading-[50px]">
                    {Item.Title}
                  </p>
                  <p className="text-[#fff] text-[16px] md:text-[14px] font-normal my-2 md:my-4 leading-[24px]">
                    {Item.Des}
                  </p>
                </div>
                { Item.ImageUrl ? ( <a href="#">
                  <img class="rounded-t-lg" src={Item.ImageUrl} alt="image" />
                </a>) : ('')
                }
               
              </div>
        
        </>
    )
}

export default CommonCardBackground;