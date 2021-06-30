/** @format */
import { CardStyle } from './cardStyles';
import { RiSurveyLine } from 'react-icons/ri';
import ME from '../../assets/images/me.jpeg';
import BASE from '../../assets/images/wallpaperflare.com_wallpaper.jpg';

const Card = ({ data, openModal, setOpenModal, otherComp }) => {
  let available = data.isAvailable ? 'available' : 'not-available';

  return (
    <CardStyle available={available}>
      <div className="base-img">
        <div className="overlay" />
        <img
          src={data.base_image || BASE}
          alt={data.employee_name || 'Isaac'}
        />
      </div>
      <div className="avarta">
        <div
          className="status"
          style={{ backgroundColor: data.isAvailable ? '#28c76f' : 'red' }}
        />
        <img src={data.profile_image || ME} alt={data.employee_name} />
      </div>
      <h1 className="employee_name">{data.employee_name || 'Obidi Isaac'}</h1>
      <h3>{data.email || 'isaac@mail.com'}</h3>
      <h4>{data.department || 'Computer'}</h4>
      <div className="action">
        <div className="survey">
          <RiSurveyLine />
        </div>
        <button onClick={() => setOpenModal(!openModal)}>
          {data.isAvailable ? 'Book meeting' : 'Not available'}
        </button>
      </div>
      {otherComp ? otherComp : null}
    </CardStyle>
  );
};

export default Card;
