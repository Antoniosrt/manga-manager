import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CardComponent from "../components/CardComponent/CardComponent";
import MenuNavbar from "../components/MenuNavbar/MenuNavbar"
import ModalComponent from "../components/ModalComponent/ModalComponent";
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Home = () => {
    const [modalAddManga, setModalAddManga] = useState(true);
    return <>
        {!!modalAddManga && (
            <ModalComponent modalTitle="Adicionar novo manga">
                {/* TODO:fazer #2 #1 novo formulário de manga */}
            </ModalComponent>
        )}
        <div className="">
            <MenuNavbar />
            <div>
                <div className="flex">
                    <div className="ml-10 w-1/5">
                        <p className="text-2xl text-gray-300 border-b-2 pb-2">Lista de mangas </p>
                    </div>
                    <div className="ml-auto mr-10">
                        <button className="bg-green-700 ease-out duration-200 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                            Adicionar Manga <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
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