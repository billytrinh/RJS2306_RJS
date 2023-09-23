import { Carousel,Image } from "react-bootstrap"

export default function Slider(props){
    return (
        <Carousel className="mb-3 mt-3">
                <Carousel.Item>
                    <Image src="/images/banner-1.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/images/banner-2.jpg"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/images/banner-3.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
    )
}