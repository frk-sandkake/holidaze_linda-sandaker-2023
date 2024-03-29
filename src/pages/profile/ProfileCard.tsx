import { Container, Card, Button } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { useState } from 'react';
import UpdateAvatarForm from './UpdateAvatar';
//import { toggleAvatarEdit } from '../redux/profileSlice';

const ProfileCard = () => {
    const [showForm, setShowForm] = useState(false);

    //const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const handleUpdateAvatar = () => {

    // data:  {avatar: string}
    // dispatch(UpdateAvatarForm(data));
     setShowForm(false);
   };
  const avatarUrl = user?.avatar || '/images/2.png';
    return (
        <div className="">
            <Container className="py-5" >
            <Card className='' style={{ width: '18rem' }}>
                <Card.Header className='d-flex flex-column justify-content-center align-items-center bg-secondary bg-opacity-40' style={{ height: '12rem' }} >
                    <Card.Img variant="top" src={avatarUrl} className="rounded-circle shadow-sm" style={{ width: '9rem' }}/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{user?.name}Erik</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user?.email}email</Card.Subtitle>
                    <Button
                        style={{ width: '8rem' }}
                        className='btn-sm'
                        variant="outline-secondary"
                        onClick={() => setShowForm(!showForm)}
                        >
                       {showForm ? "Close Form" : "Update Avatar"}
                    </Button>
                    {showForm && <UpdateAvatarForm onSubmit={handleUpdateAvatar} />}
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default ProfileCard;