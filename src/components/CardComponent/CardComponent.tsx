import { faEllipsisVertical, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardComponentProps = {
    cardTitle?: string;
    cardImage?: string;
    cardId?: number;
    cardDescription?: string;
    counterNewChapter?: number;
}
const CardComponent = ({ cardTitle, cardImage, cardId, cardDescription, counterNewChapter }: CardComponentProps) => {
    return (
        <>
            <div className="card mx-7 my-5 py-4 px-4 border-r-0 border-b-2 border-0
                    w-1/5  hover:scale-105 ease-out duration-200">
                <div className="relative">
                    <a className="absolute -top-2 -right-1 text-base text-orange-600 hover:text-orange-900 cursor-pointer">
                        <FontAwesomeIcon icon={faEllipsisVertical} size={"2x"} />
                    </a>
                </div>
                <div className="card__image content-center ">
                    <img src={"https://imagensemoldes.com.br/wp-content/uploads/2020/07/Ilustra%C3%A7%C3%A3o-de-Cone-PNG.png"}
                        className="max-h-36 mx-auto"
                        alt="cardImage" />
                </div>
                <div className="card__content">
                    <div className="card__title font-sans text-2xl text-left">
                        <h3>{cardTitle}a</h3>
                    </div>
                    <div className="card__description text-gray-300	 text-left">
                        <p>{cardDescription}a</p>
                    </div>
                    <div className="card__footer flex items-center">
                        <div className="card__footer__left mr-5">
                            <div className="card__footer__left__chapter">
                                <p>{' '}{counterNewChapter}</p>
                            </div>
                        </div>
                        <div className="card__footer__right ml-auto">
                            <div className="card__footer__right__button">
                                <button className="bg-orange-500 ease-out duration-200 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded	">Ler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardComponent