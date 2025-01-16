function ParallaxVideo(){
    return(
        <>
 <div className="h-[75vh] w-full -mt-5">
        <video
          src={"/home/videos/homePageVideo.mp4"} // Replace with your video path
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover fixed -z-50"
        />
      </div>
        </>
    )
}


export default ParallaxVideo;