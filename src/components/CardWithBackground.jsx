function CardWidthBackground({ CardTitle = '', BGColor = '#fff' }) {
    return (
        <>
            <div class="max-w-sm p-10 rounded-3xl shadow" style={{ background: `${BGColor}`, color: BGColor ? 'black' : 'white' }}>
                {CardTitle ? (<div className="text-[#E0028E] mb-6">{CardTitle}</div>) : ''}
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 58 58" fill="none" className="my-5">
                    <path d="M18 36.6667V42M28.6667 26V42M39.3333 15.3333V42M55.3333 28.6667C55.3333 43.3943 43.3943 55.3333 28.6667 55.3333C13.9391 55.3333 2 43.3943 2 28.6667C2 13.9391 13.9391 2 28.6667 2C43.3943 2 55.3333 13.9391 55.3333 28.6667Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a href="#">
                    <h5 class="text-[42px] leading-[48px] font-semibold">Automating Tasks & Boost Efficiency</h5>
                </a>
                <p class="my-5 font-normal">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                <div className="flex justify-end -mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 56 56" fill="none">
                        <g opacity="0.7">
                            <path d="M11.6665 28L44.3332 28M44.3332 28L27.9998 11.6666M44.3332 28L27.9998 44.3333" stroke="#5F22D9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}


export default CardWidthBackground;