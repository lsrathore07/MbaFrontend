import { CCarousel,CCarouselItem,CImage } from "@coreui/react";

import one from "../../assetes/1.avif"
import two from "../../assetes/2.avif"
import three from "../../assetes/3.avif"
import four from "../../assetes/4.avif"

function MyCarousel(){

return (
    <div >
    <CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src={one} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={two} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={three} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={four} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    </div>
)

}


export default MyCarousel;