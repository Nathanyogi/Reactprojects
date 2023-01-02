import {Link, useLocation, useNavigate} from 'react-router-dom';
import flipcartLogo from '../img/flipcartlogo.png';
import {useSelector , useDispatch} from 'react-redux'
import {setIsLoggedDetail,setLoginLocation, AddToCart, getFromCart, setToCart} from '../redux/slice/mainSlice';
import { setSearchProduct, setshowCart} from '../redux/slice/homeSlice';
import { useEffect } from 'react';

function Header(){

    const {LoggedDetail,Cart} = useSelector((state) => state.MainRouteSlice)
    const {SearchProduct,showCart} = useSelector((state) => state.HomeSlice)

    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const Navigate = useNavigate();

    let login = () =>{
        dispatch(setLoginLocation(pathname))
        Navigate('/login');
    }
    
    const LoginDetail = JSON.parse(localStorage.getItem('flipcartLogin'));
    
    useEffect(() =>{
        if(LoginDetail && LoginDetail.IsLogged){
            dispatch(setIsLoggedDetail(LoginDetail))
            dispatch(getFromCart(LoginDetail.UserId)) 
        }
    },[])

    useEffect(() =>{
        if(LoginDetail && LoginDetail.IsLogged){
            if(Cart.length >0)
                dispatch(AddToCart({id:LoginDetail.UserId,cart:Cart}))
        }
    },[Cart])

    let Logout = () =>{
        localStorage.removeItem('flipcartLogin');
        dispatch(setIsLoggedDetail({IsLogged:false,UserName:null,UserId:null}));
        dispatch(setToCart([]))
    }

    let Search =() =>{
        if(SearchProduct !== ""){
            Navigate(`/products/${SearchProduct.toLowerCase()}`);
            dispatch(setSearchProduct(""))
        }
    } 

    return(
        <>
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary justify-content-center align-items-center">
                <img className="navbar-brand ms-2" src={flipcartLogo} width={30} height={45}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex ms-5">
                    <input className="form-control me-sm-2 nav-input" value={SearchProduct} placeholder="Search for products,brands and more" aria-label="Search" onChange={(e) => dispatch(setSearchProduct(e.target.value))} />
                    <button className="btn btn-light my-2 my-sm-0" type="button" onClick={Search} >Search</button>
                </div>
                <div className="collapse navbar-collapse nav-content d-flex justify-content-end" id="navbarSupportedContent">
                    <div className="my-lg-0 me-lg-5">
                        <ul className="navbar-nav nav-ul">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link text-white fw-bold" href="index.html">Home</Link>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link text-white fw-bold">
                                More
                                </label>
                            </li>
                            { pathname !== '/cart' && <li className="nav-item">
                                <Link to="/cart" className="nav-link text-white d-flex align-items-center fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg><span>Cart</span>
                                </Link> 
                            </li>}
                        </ul>
                    </div>
                    <div className="d-flex align-items-center me-2">
                        {!LoggedDetail.IsLogged ?  <span id="username" className="bg-dark bg-opacity-75 rounded-circle text-white me-2 p-2">user</span> :  <span id="username" className="bg-warning bg-opacity-75 rounded-circle text-white me-2 p-2">{LoggedDetail.UserName[0]}</span> }
                        {!LoggedDetail.IsLogged ? <button to='/login' className="btn btn-sm btn-light ml-3" onClick={login} >Login</button> : <button className="btn btn-sm btn-light ml-3" onClick={Logout}>Logout</button>}
                    </div>
                </div>
            </nav>
        </header>
        {pathname === '/' && (
            <ul className="nav justify-content-around banner bg-white">
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Electronics</a>
            </li>
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">TVs & Appliances</a>
            </li>
            <li className="nav-item dropdown">
              <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" /></div>
              <a className="nav-link  text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Fashion</a>
          </li>
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Grocory</a>
            </li>
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Baby & Kids</a>
            </li>
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Home & Furniture</a>
            </li>
            <li className="nav-item dropdown">
                <div><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Sports,Books & More</a>
            </li>
            <li className="nav-item">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#">Flights</a>
            </li>
            <li className="nav-item">
                <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" /></div>
                <a className="nav-link text-dark" href="#">Offer Zone</a>
            </li>
          </ul>
      
        )}
        </>
    )
}

export default Header;