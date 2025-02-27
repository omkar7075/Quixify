import '../Categories/CategoriesDetail.css'
import DetailCard from './DetailCard'
import CleanDetail from '../../assets/CleanDetail.png'
import ElectDetail from '../../assets/ElectDetail.png'
import PlumbDeatail from '../../assets/PlumbDetail.png'
import SalonDetail from '../../assets/SalonDetail.png'
import OutDoorDetail from '../../assets/OutDoorDetail.png'

const CategoriesDetail = () => {
    const Clean = { background: '#F9DB9B' }
    const Elect = { background: '#C3FDEA' }
    const Plumb = { background: '#E3E1FF' }
    const Salo = { background: '#FFCCD5' }
    const Outd = { background: '#89D2FF' }

    return (
       <div className="flex w-full overflow-x-scroll scroll-smooth scrollbar-hide xl:ml-24 lg:ml-12 sm::ml-10 ml-5">
    <div className="inline-block">
        <DetailCard image={CleanDetail} Service={'Cleaning Help'} Desc1={'Revitalize your living or working space.'} Desc2={'Meticulously clean and refresh interiors, appliances, and various surfaces for a pristine environment.'} Css={Clean} />
    </div>
    <div className="inline-block">
        <DetailCard image={ElectDetail} Service={'Electrical Help'} Desc1={'Ensure the safety and functionality of electrical systems.'} Desc2={'Install, maintain, and repair wiring, fixtures, and equipment in residential or commercial settings.'} Css={Elect} />
    </div>
    <div className="inline-block">
        <DetailCard image={PlumbDeatail} Service={'Plumbing Help'} Desc1={'Expertly address plumbing needs.'} Desc2={'Install, repair, and maintain water systems, pipes, and fixtures to ensure efficient and reliable functionality in residential settings.'} Css={Plumb} />
    </div>
    <div className="inline-block">
        <DetailCard image={SalonDetail} Service={'Salon Help'} Desc1={'Transform your look and boost your confidence.'} Desc2={'Offering expert hair services and rejuvenating skincare treatments in a trendy and welcoming atmosphere.'} Css={Salo} />
    </div>
    <div className="inline-block">
        <DetailCard image={OutDoorDetail} Service={'Outdoor Help'} Desc1={'Elevate your outdoor spaces with professional assistance.'} Desc2={'From landscaping to maintenance, our experts ensure a well-kept and aesthetically pleasing environment.'} Css={Outd} />
    </div>
</div>

    )
}

export default CategoriesDetail
