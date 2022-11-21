
const MenuNavbar = () => {
    return (
        <div className="menu flex items-center ">
            <div className="menu-search flex p-10 w-4/6">
                <div className="menu-search__input w-4/6 mr-20">
                    <input type="text" className="w-full bg-gray-700 h-10 px-4 pb-1.5 text-primary 
                        border-slate-600
                        focus:bg-gray-600 border-2 ease-out duration-200
                        text-zinc-800 focus:border-purple-800
                        font-bold outline-none text-base font-light " placeholder="Pesquisar" />
                </div>
                <div className="menu-filter">
                    <select name="filter" id="filter" className="appearance-none w-full 
                        border-slate-600 border border-slate-600 text-gray-700 py-3
                        px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="filter">Filtrar</option>
                        <option value="filter">Filtrar</option>
                        <option value="filter">Filtrar</option>
                    </select>
                </div>
            </div>
            <div id="user" className="ml-auto mr-10">
                <div className="user__image rounded-full w-10">
                    <img className="rounded-full" src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Ilustra%C3%A7%C3%A3o-de-Cone-PNG.png" alt="userImage" />
                </div>
            </div>
        </div >

    )
}
export default MenuNavbar