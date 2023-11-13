import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import {PREVIOUS_TRAVELS , NEXT_TRAVELS} from "../../data"
import FormContext from '../../context/FormContext';
import coverImg from '../../images/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai.jpg';
import Footer from "../Footer"
import profileImg from '../../images/pexels-mohamed-abdelghaffar-771742.jpg';
import { AiOutlineHistory , AiOutlineFieldTime, AiFillCamera, AiFillLike, AiOutlineLike} from 'react-icons/ai';
import {GiCommercialAirplane} from 'react-icons/gi'
import {GrMoney} from 'react-icons/gr'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {BsBookmarkFill, BsBookmark, BsFillCalendarDateFill} from 'react-icons/bs'
const Profile = () => {
  const { username } = useContext(FormContext);
  const newTravelsData = NEXT_TRAVELS;
  const previousTravelsData = PREVIOUS_TRAVELS;
  const [coverImage, setCoverImage] = useState(coverImg);
  const [profileImage, setProfileImage] = useState(profileImg);
  const [isEditable, setIsEditable] = useState(false);
  const [reactions , setReactions] = useState({
    like : newTravelsData.isLiked,
    book : newTravelsData.isBooked,
    favorite : newTravelsData.isFavorite
  })
  const [profileInfo, setProfileInfo] = useState({
    work: '',
    age: '',
    phone: '',
    hobby: '',
  });



  const styles = {
    borderBottom :`${isEditable ? '1px solid #000' : 'none'}`,
    backgroundColor : `${isEditable ? '#fff' : 'gray'}`,
    color : `${isEditable ? '#000' : '#fff'}`
  }
  useEffect(() => {
    const data = localStorage.getItem('profileInfo');
    if (data) {
      setProfileInfo(JSON.parse(data));
    }
  }, []);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const changeProfileImg = (e) => {
    // Implement your logic to change the profile image here
  };

  const changeCoverImg = (e) => {
  };

  // const handleReactionChange = (reactionType) => {
  //   setReactions((prevReactions) => ({
  //     ...prevReactions,
  //     [reactionType]: !prevReactions[reactionType],
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  const handleInfoChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
  };

  return (
    <div className='profile'>
      <header className='profile-photos'>
        <img src={coverImage} alt="cover img" className='cover-img' />
        <label htmlFor="cover-input">
          <AiFillCamera className='cover-camera-icon' />
        </label>
        <input
          type="file"
          className='file-input'
          id='cover-input'
          name='cover'
        />
        <div className='profile-img-container'>
          <img src={profileImage} alt="profile img" className='profile-img' />
          <label htmlFor="profile-input">
            <AiFillCamera className='camera-icon' onClick={changeProfileImg} />
          </label>
          <input type="file" className='file-input' id='profile-input' />
        </div>
      </header>
      <div className='wrapper'>
      <div className='left-profile-info'>
          <form onSubmit={handleSubmit} className='profile-form'>
          <label htmlFor="hobby" style={{
              alignSelf: 'flex-start'
            }}>Your Work :</label>
            <input
              type="text"
              id='work'
              name="work"
              placeholder='Work'
              onChange={handleInfoChange}
              value={profileInfo.work}
              disabled={!isEditable}
              style={styles}
            />
            <label htmlFor="hobby" style={{
              alignSelf: 'flex-start'
            }}>Your Age :</label>
            <input
              type="number"
              name="age"
              id='age'
              min={0}
              placeholder='Age'
              value={profileInfo.age}
              onChange={handleInfoChange}
              disabled={!isEditable}
              style={styles}
            />
            <label htmlFor="hobby" style={{
              alignSelf: 'flex-start'
            }}>Phone Number :</label>
            <input
              type="text"
              name="phone"
              id='phone'
              placeholder='Phone Number'
              value={profileInfo.phone}
              onChange={handleInfoChange}
              disabled={!isEditable}
              style={styles}

            />
            <label htmlFor="hobby" style={{
              alignSelf: 'flex-start'
            }}>Your Hobby :</label>
            <input
              type="text"
              name="hobby"
              id='hobby'
              placeholder='Your Hobby'
              value={profileInfo.hobby}
              onChange={handleInfoChange}
              disabled={!isEditable}
              style={styles}

            />
            {isEditable ? (
              <button className='profile-info-btn' onClick={() => { handleEdit(); saveToLocalStorage() }}>
                Save Info
              </button>
            ) : (
              <button className='profile-info-btn saved' onClick={handleEdit}>
                Edit Info
              </button>
            )}
          </form>
          <div className='history'>
            <div className="history-title">
              <AiOutlineHistory className='history-icon'/>
              <h1>History</h1>
            </div>
            <div className="history-box">
              {
                previousTravelsData.map((travel) => {
                  return (
                    <div className="history-item" key={previousTravelsData.id}>
                      <img src={travel.image} alt={travel.name} />
                      <div className="history-item-info">
                        <h1>{travel.name}</h1>
                        <p>{travel.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="right-profile-info">
          <div className="new-travel-title-cont">
          <h1 className='new-travel-title'>Your Next Travels</h1>
          <GiCommercialAirplane className='new-travel-icon'/>
          </div>
          {
            newTravelsData.map((travel) => {
              return (
                <div className="new-travel" key={newTravelsData.id}>
                  <div className="new-travel-info">
                    <h1>{travel.name}</h1>
                    <p>{travel.description}</p>
                  </div>
                  <div className="travel-img-container">
                    <img src={travel.image} alt={travel.name} />
                  </div>
                  <div className="new-travel-details">
                    <div className="details-container">
                      <GrMoney className='cost-icon'/>
                      <p><span className='cost'>Cost :</span>
                      {travel.cost}$</p>
                    </div>
                    <div className="details-container">
                      <AiOutlineFieldTime className='duration-icon'/>
                      <p><span className='duration'>Duration :</span> {travel.duration} days</p>
                    </div>
                    <div className="details-container">
                      <BsFillCalendarDateFill className='date-icon'/>
                      <p><span className='date'>Date :</span> {travel.date} </p>
                    </div>
                  </div>
                  <div className="separate">
                    <hr/>
                  </div>
                  <div className="new-travel-reactions" >
                    <button className='like' name='like' onClick={(e) => setReactions(
                      {
                        ...reactions,
                        isLiked : !reactions.isLiked
                      }
                    )}>
                      {reactions.isLiked ? <AiFillLike/> : <AiOutlineLike/>}
                    </button>
                    <button className='book' name='book' onClick={()=> setReactions(
                      {
                        ...reactions,
                        isBooked : !reactions.isBooked
                      }
                    )}>
                      {reactions.isBooked ? <BsBookmarkFill/> : <BsBookmark/>}
                    </button>
                    <button className='favorite' name='favorite' onClick={() => setReactions(
                      {
                        ...reactions,
                        isFavorite : !reactions.isFavorite
                      }
                    )}>
                      {reactions.isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
