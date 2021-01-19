import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import './SearchResult.css';
const useStyles = makeStyles(() => ({
    action: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    },
}));


const PlacesList = ({ place, toggle }) => {
    const styles = useStyles();
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
    const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 100 });
    return <div>
        {
            place.map((p, idx) => {
                return (
                    <Row
                        p={1.5}
                        gap={2}
                        bgcolor={'#f5f5f5'}
                        borderRadius={16}
                        borderBottom={1}
                    >
                        <Item>
                            <Avatar
                                classes={avatarStyles}
                                src={place.pic}
                            />
                        </Item>
                        <Info
                            position={'middle'}
                            useStyles={useTutorInfoStyles}
                        >
                            <InfoTitle>{p.name}</InfoTitle>
                            <InfoSubtitle>
                                {p.location.address}, {p.location.city}
                            </InfoSubtitle>
                        </Info>
                        <Item ml={1} position={'middle'}>
                            <IconButton
                                className={styles.action}
                                classes={iconBtnStyles}
                                onClick={() => toggle(idx)}
                                style={p.favorite ? {backgroundColor: "#0f0"} : {}}
                            >
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Item>
                    </Row>
                )
            })
        }
        </div>;
};

export default PlacesList;