import '../Categories/Card.css'

const Card = ({ image, text, style }) => {
    return (
        <div style={style} className=" lg:w-44 lg:h-48 xl:h-60 xl:w-52 m-3 rounded-[18.5px] sm:w-28 sm:h-48 w-28 h-40 sm:ml-0 ml-[110px] ">
            <div className="flex items-center justify-center">
                <img className="xl:w-32 xl:h-32 w-20 h-20 lg:max-xl:w-28 lg:max-xl:h-28 mt-5 md:max-lg:w-24 md:max-lg:h-24" src={image} alt="" />
            </div>
            <p className="text-lg font-bold text-center mt-4">{text}</p>
        </div>
    )
}

export default Card
