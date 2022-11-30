import CardComponent from "../components/CardComponent/CardComponent";
import MenuNavbar from "../components/MenuNavbar/MenuNavbar"
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Home = () => {
    return <>
        <div className="">
            <MenuNavbar />
            <div>
                <div className="ml-10 w-1/5">
                    <p className="text-2xl text-gray-300 border-b-2 pb-2">Lista de mangas </p>
                </div>
                <div className="flex flex-wrap px-10 py-10 justify-center">
                    {number.map((item) => {
                        return <CardComponent key={item} cardTitle={"Titulo"}
                            cardDescription={"Descrição"} counterNewChapter={item} />
                    })}
                </div>
            </div>
        </div>
    </>
}

export default Home