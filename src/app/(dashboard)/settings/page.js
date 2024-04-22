import Button from '@/app/components/Button';
import SortProducts from '@/app/components/SortProducts';
import { Suspense } from 'react';

const Settings = () => {
  
    return (
        <div>
            This is setting <br/>

            <Button>Go to Analytics Page</Button> <br/>
          <Suspense>  <SortProducts></SortProducts></Suspense>
        </div>
    );
};

export default Settings;