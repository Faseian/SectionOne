import Navigation from './nav';

const Header = () => {

    const onChangeHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <header>
            <div className="logo" onClick={()=>console.log("I was clicked.")}>
                News Network
            </div>
            <input onChange={onChangeHandler}/>
            <Navigation/>
        </header>
    )
}

export default Header;