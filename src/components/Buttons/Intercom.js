import React from 'react';

class intercom  extends React.Component{
    constructor(props){
        super(props);
        window.Intercom('boot', {
          app_id: INTERCOM_APP_ID
        });
    }
}

export default intercom;