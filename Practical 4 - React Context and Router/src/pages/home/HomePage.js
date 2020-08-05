import React from 'react';
import Button from '../../components/buttons/Button';
import CenteredContentLayout from '../../components/layouts/CenteredContentLayout';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    return (
        <CenteredContentLayout className="text-center">
            <div className="mb-8">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                    Welcome to EpiNotes 🎉
                </h2>
            </div>
            <div className="mb-8">
                <Button onClick={() => history.push('/notes')}>View all my notes</Button>
            </div>
        </CenteredContentLayout>
    );
};

export default HomePage;