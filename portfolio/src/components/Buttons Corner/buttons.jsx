import './buttons.css';

export function ButtonsPanel () {
    return(
        <div>
            <h1>Jump to: </h1>
            <div className='buttonslist'>
                <Button className='contactus'>Contact Us </Button>
                <Button className='contactus'>Contact Us </Button>
            </div>
        </div>
    )
}