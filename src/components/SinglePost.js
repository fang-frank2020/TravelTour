import React from 'react';
import Rating from './Rating';
import Content from './Content';


function SinglePost(props) {
    const {content, setContent, rating, setRating, name, setName,
        town, setTown, add} = props;

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTownChange(event) {
        setTown(event.target.value);
    }

    return (
        <div className="OutsideBorder">
            <div className="PostWrapper">
                <div className="UpperHalf">
                    <div className="ProfileIcon">
                        <img className="ProfileImage" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="profile-icon"></img>
                    </div>
                    <div className="NameLocationContainer">
                        <div className="UserName">
                            {add ? <input className="NameContainer" placeholder='Name' onChange={handleNameChange}/>
                            : <div className="OutputName">{name}</div>}
                        </div>
                        <div className="Location">
                            {add && <input placeholder='Hometown' onChange={handleTownChange}/>}
                            {!add && <div className="OutputTown">{town}</div>}
                        </div>
                    </div>
                </div>
                <Rating rating={rating} setRating={setRating} add={add}/>
                <Content content={content} setContent={setContent} add={add}/>
            </div>
        </div>
    );
}

export default SinglePost;