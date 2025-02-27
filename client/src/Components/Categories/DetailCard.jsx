import '../Categories/DetailCard.css'

const DetailCard = ({ image, Service, Desc1, Desc2, Css }) => {
    return (
        <div className="flex items-center justify-center xl:w-[871.63px] xl:h-[376.52px] lg:w-[750px] lg:h-[320px] sm:w-[550px] sm:h-[300px] w-[425px] h-[275px] mt-4 rounded-[42px] xl:mr-40 lg:mr-24 sm:mr-16 mr-11" style={Css}>
            <div className="flex perspective-[10px]">
                <img className="xl:w-[520px] xl:h-[340px] lg:w-[420px] lg:h-[300px] sm:w-[340px] sm:h-[270px] w-[290px] h-[265px] sm:translate-y-0 lg:translate-y-2 xl:translate-x-12 translate-y-1 scale-[0.9] rounded-[21px]" src={image} />
                <div className="xl:h-[315px] xl:w-[415px] lg:w-96 lg:h-72 sm:w-52 sm:h-64 w-52 h-60  bg-white rounded-[17px] sm:translate-x-[-52px] -translate-x-24  scale-[0.9] mt-4  sm:max-lg:mt-2">
                    <h2 className="xl:m-7 w-48 sm:w-auto  sm:ml-0  font-extrabold sm:text-4xl text-2xl flex justify-center lg:max-xl:m-3 sm:max-lg:mt-1  sm:max-lg:text-2xl  sm:max-lg:font-extrabold  sm:max-lg:m-2">{Service}</h2>
                    <ul className="xl:m-7 m-1 lg:max-xl:m-3  sm:max-lg:m-0 ">
                        <li className="xl:m-7 ml-7  list-disc lg:text-lg text-sm font-bold lg:max-xl:m-5  sm:max-lg:text-sm  sm:max-lg:mt-0">{Desc1}</li>
                        <li className="xl:m-7 ml-7  list-disc lg:text-lg text-sm font-bold lg:max-xl:m-5  sm:max-lg:text-sm  sm:max-lg:mt-0">{Desc2}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailCard
