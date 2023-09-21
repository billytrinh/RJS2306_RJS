
export default function Header(props){
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <a href="#" className="logo">
                            <img src="/logo192.png" width={120}/>
                        </a>
                    </div>
                    <div className="col">
                        <ul class="list-group list-group-horizontal float-end mt-5">
                            <li class="list-group-item border border-0">
                                <a className="text-black text-decoration-none" href="#">Login</a>
                            </li>
                            <li class="list-group-item border border-0">
                                <a className="text-black text-decoration-none" href="#">Regsiter</a>
                            </li>
                            <li class="list-group-item border border-0">
                                <a className="text-black text-decoration-none" href="#">Favorites</a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}