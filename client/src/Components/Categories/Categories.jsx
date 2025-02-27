import '../Categories/Categories.css'
import Card from './Card'
import CategoriesDetail from './CategoriesDetail'
import Cleaning from '../../assets/Cleaning.png'
import Electrician from '../../assets/Electrician.png'
import Plumber from '../../assets/Plumber.png'
import Salon from '../../assets/Salon.png'
import OutdoorHelp from '../../assets/OutdoorHelp.png'
import Arrow from '../../assets/Arrow.svg'

const Categories = () => {
    const Clean = {
        background: 'linear-gradient(205deg,#F9DB9B ,#FFFFFF)'
    }
    const Elect = {
        background: 'linear-gradient(205deg,#C2FDE9 ,#FFFFFF)'
    }
    const Plum = {
        background: 'linear-gradient(205deg,#E2E0FF ,#FFFFFF)'
    }
    const Salo = {
        background: 'linear-gradient(205deg,#FFCBD4 ,#FFFFFF)'
    }
    const Out = {
        background: 'linear-gradient(205deg,#89D1FF ,#FFFFFF)'
    }

    return (
        <div className="my-12 w-11/12 mx-auto">
            <h1 className="sm:text-4xl text-2xl underline decoration-[#11d8f6] mb-5">Categories</h1>
            <div className="grid grid-cols-5 w-full overflow-x-scroll scroll-smooth scrollbar-hide sm:pl-0  items-center justify-center sm:gap-7 gap-32 lg:max-xl:gap-2 md:max-lg:gap-2">
                <Card style={Clean} image={Cleaning} text={"Cleaning"} />
                <Card style={Elect} image={Electrician} text={"Electrician"} />
                <Card style={Plum} image={Plumber} text={"Plumber"} />
                <Card style={Salo} image={Salon} text={"Salon"} />
                <Card style={Out} image={OutdoorHelp} text={"OutdoorHelp"} />
            </div>
            
            <div className="flex items-center justify-end w-full cursor-pointer">
                <p>Explore All</p>
                <img className="w-15 h-9 m-0 p-0" src={Arrow} alt="" />
            </div>
            <CategoriesDetail />
        </div>
    )
}

export default Categories
