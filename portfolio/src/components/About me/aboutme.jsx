import './aboutme.css';

export function AboutMe() {
    return(
        <div className='aboutme'>
            <div className='maindiv'>
                <div className='myimg'>
                    {/* img here */}
                </div>
                <div className='text'>
                    <div className='name_heading'>
                        <h1>About Me</h1>                        
                    </div>
                    <div className='Education'>
                        <p>Education: Bachelor of Computer Engineering, Pune Vidyarthi Griha's College of Engineering, Technology and Management, Pune </p>
                    </div>
                    <div className='description'>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;