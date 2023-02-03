import {Carousel} from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel showArrows={true} onChange={(e:any) => console.log(e)} >
            <div>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
}
export default  Slider