import React, { Suspense } from 'react';
import Posts from '../components/Posts';

const HeavyPage = () => {
    return (
        <div>
            <h1>THis is HeavyPage</h1>
            <div>
              <Suspense fallback={ <h1 className='text-4xl text-red-700'>Loading POASTS 555..............................</h1>}><Posts></Posts></Suspense>  
            </div>
        </div>
    );
};

export default HeavyPage;