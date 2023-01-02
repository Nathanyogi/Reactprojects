import {useLocation} from 'react-router-dom'


export default function Footer(){
    const {pathname} = useLocation()
    return(
        <>
        <footer className={ pathname !== '/buynow' ? "bg-primary pt-3 pb-2 mt-4": "bg-primary pt-3 pb-2 mt-4 fixed-bottom"}>
            <div className="m-1">
                <p className="text-white fs-5">Copy rights@ 2022-2024</p>
            </div>
        </footer>
        </>
    )
}