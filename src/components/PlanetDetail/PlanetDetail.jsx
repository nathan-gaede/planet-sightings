import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function planetDetail() {
    const planet = useSelector(store => store.planet.planetToDisplay);
    return (
        <div>
            {planet.name}
            {planet.planet_image}

        </div>
    )
}

export default planetDetail;